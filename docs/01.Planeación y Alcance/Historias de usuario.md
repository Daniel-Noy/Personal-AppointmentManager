# Historias de Usuario
*Versiones*
| Versión | Fecha      | Autor    | Descripción del Cambio                |
| ------- | ---------- | -------- | ------------------------------------- |
| v1.0.0  | 06/01/2025 | Daniel N | Definición inicial                    |

---

## HU-01: Reserva de Citas

**Como** cliente,
**quiero** programar una cita seleccionando fecha, hora y servicios,
**para** asegurar la atención en el momento que necesito.


### Criterios de Aceptación
1. Visualizar calendario con disponibilidad en tiempo real
2. Seleccionar múltiples servicios del catálogo
3. Seleccionar productos a usar en los servicios elegidos (opcional)
4. Ver tiempo total estimado y costo de servicios
5. Recibir confirmación inmediata de la reserva
6. Límite de 2 citas pendientes por cliente

### **Escenario 1: Reserva exitosa de servicios básicos**

**Dado** que soy un cliente autenticado en el sistema

**Y** tengo menos de 2 citas pendientes actualmente

**Cuando** selecciono una fecha y hora marcadas como "Disponibles"

**Y** elijo uno o más servicios del catálogo

**Entonces** el sistema debe mostrarme el desglose con el tiempo total estimado y el costo total

**Y** al confirmar, debo recibir un mensaje de "Reserva exitosa" y ver la cita en mi historial.


### **Escenario 2: Intento de reserva superando el límite permitido**

**Dado** que ya poseo 2 citas en estado "Pendiente"

**Cuando** intento realizar una nueva reserva para cualquier fecha

**Entonces** el sistema debe deshabilitar el botón de "Confirmar Reserva"

**Y** mostrar un aviso indicando que he alcanzado el límite máximo de citas simultáneas.

### **Escenario 3: Reserva con productos adicionales (Opcional)**

**Dado** que he seleccionado un servicio que tiene productos relacionados

**Cuando** agrego productos opcionales a mi reserva

**Entonces** el sistema debe actualizar el costo total sumando el precio de los productos al de los servicios


## HU-02: Gestión de Cancelaciones

**Como** cliente,
**quiero** poder cancelar mis citas programadas,
**para** reorganizar mi agenda cuando sea necesario.

### Criterios de Aceptación
1. El cliente solo puede cancelar con un mínimo de 24 horas de anticipación
2. Es obligatorio proporcionar un motivo para la cancelación.
3. El sistema debe liberar el horario inmediatamente en el calendario al confirmar la cancelación.
4. El administrador debe tener visibilidad del motivo de cancelación en su panel.

### **Escenario 1: Cancelación exitosa de una cita**

**Dado** que tengo una cita programada cuya fecha y hora es en más de 24 horas

**Y** me encuentro en mi panel de "Citas Pendientes"

**Cuando** selecciono la opción "Cancelar Cita"

**Y** elijo un motivo de la lista o escribo una razón

**Entonces** el sistema debe cambiar el estado de la cita a "Cancelada"

**Y** mostrar un mensaje confirmando que el espacio ha sido liberado.

### **Escenario 2: Intento de cancelación fuera del tiempo permitido**

**Dado** que tengo una cita programada en menos de 24 horas

**Cuando** intento acceder a la opción de "Cancelar Cita"

**Entonces** el sistema debe mostrar el botón de cancelación deshabilitado o un mensaje de advertencia

**Y** debe mostrar una nota indicando que para cancelar debe contactar directamente al administrador por canales externos.

### **Escenario 3: Cancelación administrativa (Sin restricción)**

**Dado** que he iniciado sesión como Administrador

**Y** estoy visualizando una cita de un cliente que sucederá en 2 horas

**Cuando** selecciono "Cancelar Cita" por motivos de fuerza mayor del negocio

**Entonces** el sistema debe permitir la cancelación sin aplicar la restricción de las 24 horas

**Y** la cita debe quedar registrada en el historial como "Cancelada por Administrador".

## HU-03: Administración de Horarios

**Como** administrador,
**quiero** configurar la disponibilidad del negocio,
**para** optimizar la gestión del tiempo y recursos.

### Criterios de Aceptación
1. Definir horarios regulares por día
2. Marcar días no laborables y vacaciones
3. Configurar intervalos de descanso
4. Bloquear automáticamente horarios no disponibles
5. Permitir excepciones para fechas especiales

### **Escenario 1: Configuración de horario regular**

**Dado** que estoy en la sección de "Configuración de Horarios" como Administrador.

**Cuando** defino el rango de atención para los días lunes a viernes de 09:00 a 18:00.

**Y** además defino mis intervalos de descanso los dias lunes a viernes de 14:00 a 15:00

**Entonces** el sistema debe actualizar la disponibilidad en el calendario global.

**Y** los clientes solo verán intervalos de cita dentro de ese rango.


### **Escenario 2: Marcado de día no laborable**

**Dado** que el negocio cerrará por un día festivo.

**Cuando** selecciono una fecha específica en el calendario y la marco como "No laborable".

**Entonces** el sistema debe cancelar automáticamente o solicitar la reubicación de las citas existentes para ese día.

**Y** bloquear la reserva de nuevas citas para esa fecha.


## HU-04: Panel de Control de Citas

**Como** administrador,
**quiero** gestionar todas las citas programadas,
**para** mantener un control eficiente del negocio.

### Criterios de Aceptación
1. Vista de lista con todas las citas
2. Capacidad de confirmar/rechazar citas nuevas
3. Opción de cancelar cualquier cita sin restricción
4. Agregar notas o comentarios a las citas
5. Filtrar citas por estado y fecha

### **Escenario 1: Confirmación de una nueva cita**

**Dado** que hay una nueva solicitud de cita en estado "Pendiente".

**Cuando** reviso los detalles y selecciono la opción "Confirmar".

**Entonces** el estado de la cita debe cambiar a "Confirmada".

**Y** el cliente debe poder visualizar este cambio en su historial.

### **Escenario 2: Filtrado de citas por estado**

**Dado** que visualizo el panel de control con múltiples citas registradas.

**Cuando** aplico el filtro para mostrar solo citas "Canceladas".

**Entonces** la vista debe actualizarse para mostrar únicamente los registros que coincidan con ese criterio.

## HU-05: Gestión de Servicios

**Como** administrador,
**quiero** mantener actualizado el catálogo de servicios,
**para** ofrecer información precisa a los clientes.

### Criterios de Aceptación
1. El administrador debe poder crear un servicio con nombre, duración y precio, y visualizarlo inmediatamente en la lista de catálogo
2. Asignar duración y precio a cada servicio
3. Categorizar servicios por tipo
4. Activar/desactivar servicios temporalmente
5. Historial de cambios en servicios


### **Escenario 1: Creación de un nuevo servicio**

**Dado** que accedo al módulo de "Gestión de Catálogo".

**Cuando** ingreso el nombre, descripción, duración y precio de un nuevo servicio.

**Entonces** el sistema debe validar los datos y agregar el servicio al catálogo activo.

### **Escenario 2: Desactivación temporal de un servicio**

**Dado** que un servicio específico no estará disponible temporalmente.

**Cuando** selecciono el servicio y marco la opción "Desactivar".

**Entonces** el servicio debe dejar de ser visible para los clientes al momento de agendar.

**Pero** debe permanecer en la base de datos para registros históricos.


## HU-06: Historial y Estadísticas

**Como** usuario del sistema,
**quiero** acceder al historial de citas y estadísticas,
**para** dar seguimiento a mis servicios/negocio.

### Criterios de Aceptación
#### para Clientes:
1. Ver historial personal de citas
2. Detalles de servicios recibidos
3. Estado de citas actuales y pasadas

#### para Administrador:
1. Reportes de cancelaciones
2. Histórico completo de operaciones

### **Escenario 1: Consulta de historial personal (Cliente)**

**Dado** que soy un Cliente autenticado.

**Cuando** accedo a mi sección de "Mis Citas".

**Entonce**s el sistema debe mostrar una lista cronológica de mis citas pasadas y pendientes.

**Y** permitirme ver el detalle de los servicios y productos asociados a cada una.

### **Escenario 2: Visualización del histórico de operaciones (Administrador)**

**Dado** que soy el Administrador del sistema.

**Cuando** consulto el log o histórico completo de operaciones.

**Entonces** el sistema debe mostrar todos los cambios de estado, creaciones y cancelaciones realizadas por cualquier usuario.