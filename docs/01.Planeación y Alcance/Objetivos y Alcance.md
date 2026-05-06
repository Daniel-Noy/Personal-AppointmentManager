# Sistema de Gestión de Citas
*Versiones*
| Versión | Fecha      | Autor    | Descripción del Cambio                |
| ------- | ---------- | -------- | ------------------------------------- |
| v1.0.0  | 06/01/2025 | Daniel N | Definición inicial                    |

## 1. Objetivo General
Implementar una plataforma digital que optimice la gestión de citas en establecimientos de servicios personales, facilitando la reserva de servicios para los clientes y la administración eficiente del negocio.

## 2. Objetivos Específicos
- Automatizar el proceso de reserva de citas
- Implementar un sistema de gestión de servicios y productos
- Facilitar la administración del calendario de citas
- Desarrollar una interfaz intuitiva para clientes y administradores
- Diseñar una arquitectura escalable adaptable a diversos tipos de negocios

## 3. Estructura de Roles

### 3.1 Cliente
- Gestión de citas (reserva y cancelación)
- Selección de servicios y productos
- Visualización de disponibilidad horaria

### 3.2 Administrador
- Gestión del catálogo de servicios y productos
- Administración de citas (creación, confirmación, rechazo, cancelación)
- Configuración de horarios de atención
- Supervisión del panel de control

## 4. Alcance del Proyecto

### 4.1 Funcionalidades Core
- Sistema de autenticación de usuarios.
- Gestión de reservas.
- Administración de catálogo.
- Panel de control administrativo.
- Gestión de disponibilidad horaria.

### 4.2 Limitaciones Actuales
- Sistema exclusivo para gestión de citas (sin procesamiento de pagos).
- Sin mensajería interna.
- Comunicación a través de canales externos.
- Soporte para una sola sucursal por administrador.

## 5. Requisitos Preliminares
A continuación se muestran los requisitos preliminares en los cuales se construirán los requisitos, estos serán mas detallados en el documento de [Definición de requisitos](Definición%20de%20requisitos.md)

### 5.1 Requisitos funcionales
- RF1: El cliente podrá reservar una cita seleccionando fecha, hora y servicios.
- RF2: El cliente podrá cancelar su cita previamente agendada.
- RF3: El administrador podrá crear, confirmar, rechazar o cancelar una cita.
- RF4: El administrador podrá gestionar su catálogo de productos y servicios.
- RF5: El administrador podrá configurar sus horarios de atención.

### 5.2 Requisitos no funcionales
- RNF1: El sistema debe ser accesible desde cualquier navegador web.
- RNF2: El sistema debe tener un diseño responsivo que se adapte a cualquier dispositivo.
- RNF3: El sistema debe soportar al menos 30 usuarios simultaneos sin degradar el rendimiento.