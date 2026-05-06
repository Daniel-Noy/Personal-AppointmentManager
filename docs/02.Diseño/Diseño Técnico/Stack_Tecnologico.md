# Stack Tecnológico

## Backend
- **Framework**: Laravel 13.x
- **Lenguaje**: PHP 8.4+
- **Base de Datos**: MySQL
- **ORM**: Eloquent
- **Autenticación**: Implementacion manual
- **API**: Inertia.js para comunicación con frontend

## Frontend
- **Framework**: React 19.x
- **Lenguaje**: TypeScript
- **Build Tool**: Vite
- **Estado**: React Hooks / Context API
- **Enrutamiento**: React Router (integrado con Inertia)
- **UI**: Tailwind CSS

## Herramientas de Desarrollo
- **Composer**: Gestión de dependencias PHP
- **NPM**: Gestión de dependencias JS
- **Pest**: Testing
- **ESLint**: Linting JS/TS
- **Prettier**: Formateo de código

## Versiones Iniciales
- Laravel: 13.8
- PHP: 8.4
- React: 19.2
- TypeScript: 5.7.2
- Node.js: 24.x
- Vite: 8.0

## Cómo Funcionan Brevemente
El backend en Laravel maneja la lógica de negocio, autenticación y persistencia de datos. Inertia.js permite renderizar vistas React del lado del servidor, eliminando la necesidad de una API REST separada. El frontend en React maneja la interfaz de usuario, interactuando con el backend a través de props pasadas por Inertia.