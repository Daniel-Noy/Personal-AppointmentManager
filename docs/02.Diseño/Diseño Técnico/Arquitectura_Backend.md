# Arquitectura Backend

## Principio: Clean Architecture sobre las convenciones de Laravel

La meta es aplicar los principios de arquitectura limpia — **separación de responsabilidades, independencia de la infraestructura y flujo de dependencias hacia el dominio** — sin pelear contra Laravel. En lugar de crear capas abstractas que dupliquen lo que el framework ya resuelve, se extiende la estructura estándar con carpetas adicionales ligeras.

### Regla de oro

> Los **Controllers** orquestan, las **Actions** ejecutan lógica de negocio, los **Models** representan el dominio y persisten datos, y los **DTOs** transportan información entre capas.

---

## Estructura de Carpetas

Se parte de la estructura que Laravel genera por defecto y se agregan únicamente las carpetas marcadas con `(+)`.

```
app/
├── Http/
│   ├── Controllers/        # Controladores (delgados, solo orquestan)
│   ├── Middleware/          # Middleware HTTP
│   └── Requests/           # Form Requests (validación)
│
├── Models/                 # Modelos Eloquent (dominio + persistencia)
├── Providers/              # Service Providers de Laravel
│
├── Actions/          (+)   # Clases de acción (una acción = un caso de uso)
├── DTOs/             (+)   # Data Transfer Objects
├── Enums/            (+)   # Enumeraciones PHP (estados, tipos)
├── Policies/         (+)   # Políticas de autorización
├── Events/           (+)   # Eventos de dominio
├── Listeners/        (+)   # Listeners para los eventos
├── Notifications/    (+)   # Notificaciones (email, push, etc.)
└── Exceptions/       (+)   # Excepciones personalizadas
```

> Las carpetas con `(+)` solo se crean cuando el proyecto las necesita. No es obligatorio tenerlas todas desde el inicio.

---

## Descripción de cada Capa

### 1. Controllers (`Http/Controllers/`)

Responsabilidad: **recibir la petición HTTP, delegar a una Action y devolver una respuesta Inertia**.

Un controlador limpio no contiene lógica de negocio; solo actúa como punto de entrada.

```php
class AppointmentController extends Controller
{
    public function store(StoreAppointmentRequest $request, CreateAppointment $action)
    {
        $dto = AppointmentData::fromRequest($request);
        $appointment = $action->execute($dto);

        return redirect()
            ->route('appointments.show', $appointment)
            ->with('success', 'Cita creada exitosamente.');
    }

    public function index()
    {
        return inertia('Appointments/Index', [
            'appointments' => Appointment::query()
                ->with('client')
                ->latest()
                ->paginate(15),
        ]);
    }
}
```

**Reglas:**
- Máximo ~15 líneas por método.
- No escribir queries complejas aquí; si la query crece, moverla a un scope del modelo o a una Action.
- Inyectar dependencias (Actions, Form Requests) vía type-hint.

---

### 2. Form Requests (`Http/Requests/`)

Responsabilidad: **validar y autorizar la entrada del usuario** antes de que llegue al controlador.

```php
class StoreAppointmentRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // O delegar a una Policy
    }

    public function rules(): array
    {
        return [
            'client_id'  => ['required', 'exists:clients,id'],
            'date'       => ['required', 'date', 'after:today'],
            'start_time' => ['required', 'date_format:H:i'],
            'end_time'   => ['required', 'date_format:H:i', 'after:start_time'],
            'notes'      => ['nullable', 'string', 'max:500'],
        ];
    }
}
```

**Reglas:**
- Un Form Request por cada operación de escritura (`Store`, `Update`).
- Contiene **solo** reglas de validación y autorización, nada de lógica de negocio.

---

### 3. Actions (`Actions/`)

Responsabilidad: **encapsular un caso de uso completo** en una sola clase con un método `execute()`.

Una Action es el equivalente a un *Use Case* o *Interactor* de Clean Architecture, pero sin la formalidad de interfaces y repositorios.

```php
class CreateAppointment
{
    public function execute(AppointmentData $data): Appointment
    {
        // Regla de negocio: no permitir citas superpuestas
        $overlapping = Appointment::where('date', $data->date)
            ->where('start_time', '<', $data->endTime)
            ->where('end_time', '>', $data->startTime)
            ->exists();

        if ($overlapping) {
            throw new AppointmentOverlapException();
        }

        return Appointment::create([
            'client_id'  => $data->clientId,
            'date'       => $data->date,
            'start_time' => $data->startTime,
            'end_time'   => $data->endTime,
            'notes'      => $data->notes,
            'status'     => AppointmentStatus::Pending,
        ]);
    }
}
```

**Reglas:**
- Una clase por caso de uso (`CreateAppointment`, `CancelAppointment`, `RescheduleAppointment`).
- Si la Action necesita otras Actions, se inyectan por constructor.
- No dependen de la petición HTTP directamente; reciben un DTO.

---

### 4. DTOs (`DTOs/`)

Responsabilidad: **transportar datos validados entre capas** de forma tipada y predecible.

```php
readonly class AppointmentData
{
    public function __construct(
        public int     $clientId,
        public string  $date,
        public string  $startTime,
        public string  $endTime,
        public ?string $notes = null,
    ) {}

    public static function fromRequest(StoreAppointmentRequest $request): self
    {
        return new self(
            clientId:  $request->validated('client_id'),
            date:      $request->validated('date'),
            startTime: $request->validated('start_time'),
            endTime:   $request->validated('end_time'),
            notes:     $request->validated('notes'),
        );
    }
}
```

**Reglas:**
- Usar `readonly class` (PHP 8.2+) para inmutabilidad.
- Incluir un factory method `fromRequest()` para crear el DTO desde un Form Request.
- No contienen lógica de negocio, solo datos.

---

### 5. Models (`Models/`)

Responsabilidad: **representar el dominio y gestionar la persistencia** mediante Eloquent.

En Laravel, el modelo combina entidad y repositorio. En lugar de separar estas responsabilidades en clases distintas (lo que pelearía con el framework), se mantiene la convención y se organizan los modelos con buenas prácticas.

```php
class Appointment extends Model
{
    protected $fillable = [
        'client_id', 'date', 'start_time', 'end_time', 'notes', 'status',
    ];

    protected function casts(): array
    {
        return [
            'date'   => 'date',
            'status' => AppointmentStatus::class,
        ];
    }

    // --- Relaciones ---
    public function client(): BelongsTo
    {
        return $this->belongsTo(Client::class);
    }

    // --- Scopes ---
    public function scopeUpcoming(Builder $query): void
    {
        $query->where('date', '>=', now()->toDateString())
              ->orderBy('date')
              ->orderBy('start_time');
    }

    // --- Accessors / Mutators ---
    protected function duration(): Attribute
    {
        return Attribute::get(fn () =>
            Carbon::parse($this->start_time)->diffInMinutes($this->end_time)
        );
    }
}
```

**Reglas:**
- Organizar internamente: `$fillable` → `casts()` → relaciones → scopes → accessors.
- Usar **Scopes** para queries reutilizables.
- Usar **Casts** para mapear enums y tipos.
- No incluir lógica de negocio compleja; eso va en una Action.

---

### 6. Enums (`Enums/`)

Responsabilidad: **definir valores finitos y constantes** que representen estados o tipos del dominio.

```php
enum AppointmentStatus: string
{
    case Pending   = 'pending';
    case Confirmed = 'confirmed';
    case Completed = 'completed';
    case Cancelled = 'cancelled';

    public function label(): string
    {
        return match($this) {
            self::Pending   => 'Pendiente',
            self::Confirmed => 'Confirmada',
            self::Completed => 'Completada',
            self::Cancelled => 'Cancelada',
        };
    }
}
```

---

### 7. Policies (`Policies/`)

Responsabilidad: **centralizar la lógica de autorización** sobre los modelos.

```php
class AppointmentPolicy
{
    public function update(User $user, Appointment $appointment): bool
    {
        return $user->id === $appointment->client_id
            || $user->isAdmin();
    }
}
```

---

## Flujo de una Petición

El siguiente diagrama muestra el recorrido de una solicitud HTTP completa:

```
[Petición HTTP]
      │
      ▼
  Middleware          → Autenticación, CORS, etc.
      │
      ▼
  Form Request        → Validación y autorización de datos
      │
      ▼
  Controller          → Orquesta: crea DTO, llama Action
      │
      ▼
  Action              → Ejecuta lógica de negocio
      │
      ▼
  Model (Eloquent)    → Persiste / consulta datos
      │
      ▼
  Controller          → Devuelve respuesta Inertia o redirect
      │
      ▼
[Respuesta HTTP]
```

---

## Cuándo crear cada cosa

| Situación | Solución |
|---|---|
| Validar datos de entrada | `Form Request` |
| Operación con lógica de negocio (crear, cancelar, reagendar) | `Action` |
| Pasar datos entre capas de forma tipada | `DTO` |
| Query reutilizable o filtro complejo | `Scope` en el Model |
| Definir estados o categorías fijas | `Enum` |
| Controlar quién puede hacer qué | `Policy` |
| Algo pasó y otros subsistemas necesitan reaccionar | `Event` + `Listener` |
| Notificar al usuario (email, push) | `Notification` |
| Error específico del dominio | `Exception` personalizada |

---

## Convenciones de Nombrado

| Elemento | Convención | Ejemplo |
|---|---|---|
| Controller | `{Entidad}Controller` | `AppointmentController` |
| Form Request | `{Acción}{Entidad}Request` | `StoreAppointmentRequest` |
| Action | `{Verbo}{Entidad}` | `CreateAppointment` |
| DTO | `{Entidad}Data` | `AppointmentData` |
| Model | `{Entidad}` (singular) | `Appointment` |
| Enum | `{Entidad}{Concepto}` | `AppointmentStatus` |
| Policy | `{Entidad}Policy` | `AppointmentPolicy` |
| Event | `{Entidad}{Acción}` (pasado) | `AppointmentCancelled` |
| Exception | `{Descripción}Exception` | `AppointmentOverlapException` |

---

## Resumen

Esta arquitectura respeta la estructura y convenciones de Laravel mientras introduce capas ligeras (**Actions, DTOs, Enums**) que:

1. **Separan responsabilidades**: el controlador no contiene lógica de negocio.
2. **Facilitan testing**: cada Action se puede probar de forma aislada.
3. **Mejoran la legibilidad**: el nombre de la clase describe exactamente lo que hace.
4. **Escalan bien**: nuevas funcionalidades se añaden creando nuevas Actions sin modificar las existentes.
