# Definición de Roles del Sistema de Gestión de Citas
*Versiones*
| Versión | Fecha      | Autor    | Descripción del Cambio                |
| ------- | ---------- | -------  | ------------------------------------- |
| v1.0.0  | 06/01/2025 | Daniel N | Definición inicial                    |
---

## 1. Descripción General de Roles

### 1.1 Cliente
Usuario final que utiliza el sistema para gestionar sus citas y servicios.

### 1.2 Administrador
Propietario o gestor principal del negocio con control total sobre el sistema.


## 2. Capacidades y Acciones por Rol

### 2.1 Cliente
- Gestionar perfil personal
- Reservar citas
- Seleccionar servicios
- Ver historial de citas
- Cancelar citas programadas
- Visualizar catálogo de servicios

### 2.2 Administrador
- Gestión completa del sistema
- Administración de usuarios
- Gestión de citas
- Configuración de horarios
- Gestión del catálogo
- Acceso a estadísticas y reportes

## 3. Restricciones y Condiciones

### 3.1 Cliente
- Solo puede cancelar citas con mínimo 24 horas de anticipación
- Máximo 2 citas pendientes simultáneas
- No puede modificar precios ni servicios
- Debe mantener un perfil actualizado

### 3.2 Administrador
- Puede cancelar cualquier cita sin restricción de tiempo
- Autoridad para modificar todos los aspectos del sistema
- Responsable de mantener catálogo y horarios actualizados
- Puede bloquear usuarios que incumplan políticas


## 4. Relación entre Roles

### 4.1 Jerarquía
1. **Administrador**
   - Gestiona permisos de usuarios
   - Supervisa todas las operaciones

2. **Cliente**
   - Interactúa con el sistema
   - Recibe servicios del Administrador

### 4.2 Dependencias
- Cliente → Administrador (aprobación de citas)