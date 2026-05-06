# Requisitos del Sistema de Gestión de Citas
*Versiones*
| Versión | Fecha      | Autor    | Descripción del Cambio                |
| ------- | ---------- | -------- | ------------------------------------- |
| v1.0.0  | 06/01/2025 | Daniel N | Definición inicial                    |


## 1. Requisitos Funcionales

### 1.1 Gestión de Usuarios
- **RF1.1**: El sistema debe permitir el registro de usuarios con roles de cliente y administrador.
- **RF1.2**: Los usuarios deben autenticarse para acceder a las funcionalidades del sistema.
- **RF1.3**: Los usuarios deben poder gestionar su perfil (modificar datos personales y contraseña).
- **RF1.4**: El sistema debe mantener un registro del historial de citas de cada usuario.

### 1.2 Gestión de Citas (Cliente)
- **RF2.1**: El cliente debe poder reservar citas seleccionando fecha, hora y servicios.
- **RF2.2**: El cliente debe poder elegir los productos relacionados a los servicios que eligio de manera opcional.
- **RF2.3**: El cliente podrá visualizar la disponibilidad de horarios en tiempo real.
- **RF2.4**: El cliente podrá cancelar citas con al menos 24 horas de anticipación.
- **RF2.5**: El cliente solo puede tener como máximo 2 citas pendientes.
- **RF2.6**: El cliente debe poder ver el listado de sus citas (pendientes y histórico).
- **RF2.7**: El sistema debe mostrar al cliente el tiempo estimado y costo total de los servicios seleccionados.
- **RF2.8**: El sistema debe permitir al cliente registrar el motivo de cancelación.
- **RF2.9**: El cliente debe poder ver el historial detallado de servicios recibidos.

### 1.3 Gestión de Citas (Administrador)
- **RF3.1**: El administrador podrá ver, confirmar, rechazar y cancelar citas sin restricción de tiempo.
- **RF3.2**: El administrador debe poder ver un calendario con todas las citas programadas.
- **RF3.3**: El administrador podrá agregar notas o comentarios a las citas.
- **RF3.4**: El sistema debe permitir filtrar citas por estado y fecha
- **RF3.5**: El sistema debe mantener un histórico completo de operaciones

#### Estados de las Citas
Las citas pueden tener los siguientes estados:
- **Pendiente**: Cita reservada por el cliente, esperando confirmación del administrador.
- **Confirmada**: Cita aprobada por el administrador.
- **Rechazada**: Cita denegada por el administrador.
- **Cancelada**: Cita cancelada por el cliente (con restricciones) o administrador.
- **Completada**: El cliente acudió a la cita y se realizaron los servicios programados.
- **No se presentó**: El cliente no se presentó a la cita y no avisó al administrador.

### 1.4 Gestión de Servicios y Catálogo
- **RF4.1**: El administrador podrá crear, modificar y eliminar servicios y productos del catálogo.
- **RF4.2**: Cada servicio debe incluir nombre, descripción, duración y precio.
- **RF4.2**: Cada producto debe incluir nombre, descripción y precio.
- **RF4.3**: El administrador podrá categorizar los servicios para mejor organización.
- **RF4.4**: El administrador podrá activar/desactivar servicios temporalmente.

### 1.5 Gestión de Horarios
- **RF5.1**: El administrador podrá configurar los horarios regulares de atención.
- **RF5.2**: El administrador podrá definir períodos de descanso dentro del horario laboral.
- **RF5.3**: El administrador podrá marcar días específicos como no laborables.
- **RF5.4**: El sistema debe prevenir la programación de citas en horarios no disponibles.

## 2. Requisitos No Funcionales

### 2.1 Usabilidad
- **RNF1.1**: La interfaz debe ser responsiva y adaptable a diferentes dispositivos.
- **RNF1.2**: El sistema debe ser intuitivo y fácil de usar para usuarios no técnicos.
- **RNF1.3**: El proceso de reserva no debe tomar más de 5 pasos.

### 2.2 Rendimiento
- **RNF2.1**: El sistema debe soportar al menos 30 usuarios concurrentes.
- **RNF2.2**: El tiempo de respuesta para operaciones básicas no debe exceder 2 segundos.
- **RNF2.3**: La disponibilidad del sistema debe ser de al menos 99% en horario laboral.

### 2.3 Seguridad
- **RNF3.1**: Los datos personales de los usuarios deben estar encriptados.
- **RNF3.2**: Las sesiones de usuario deben expirar después de 30 minutos de inactividad.

### 2.4 Compatibilidad
- **RNF4.1**: El sistema debe funcionar en los principales navegadores web (Chrome, Firefox, Safari, Edge).
- **RNF4.2**: La aplicación debe ser accesible desde cualquier dispositivo con conexión a internet.

## 3. Limitaciones Técnicas
- **LT1**: El sistema no procesará pagos en línea.
- **LT2**: La comunicación directa entre cliente y administrador se realizará por canales externos.
- **LT3**: El sistema solo soportará una sucursal por administrador en esta versión.
- **LT4**: El sistema no mostrará estadisticas detalladas en la primera versión, pero se implementaran en siguientes versiones incluyendo:
  - Tendencias de reservas
  - Métricas de satisfacción
  - Reportes de cancelaciones
  - Estadísticas de servicios más solicitados