# Enlace Frontend-Backend

## Integración vía Inertia.js

Inertia.js actúa como puente entre Laravel (backend) y React (frontend), permitiendo una experiencia de SPA sin API REST tradicional.

### Cómo Funciona:
1. **Navegación**: Enlaces en React usan `router.visit()` de Inertia.
2. **Requests**: Formularios envían datos a controladores Laravel via Inertia.
3. **Props**: Controladores pasan datos a componentes React como props.
4. **Estado**: React maneja estado local; Laravel maneja estado persistente.

### Arquitectura Enlazada:
- **Backend Domain** define entidades que se mapean a props de React.
- **Application Layer** transforma datos en DTOs para frontend.
- **Presentation Controllers** renderizan vistas Inertia con datos.
- **Frontend Pages** consumen props y renderizan componentes.
- **Components** interactúan via hooks y contexts.

### Beneficios:
- **Type Safety**: TypeScript en frontend, PHP en backend.
- **Single Source of Truth**: Lógica de negocio en backend.
- **Seamless UX**: Transiciones sin recargas de página.
- **Clean Separation**: Backend puro, frontend puro, enlazados por Inertia.

### Comunicación:
- **Server-Side Rendering**: Inicialmente renderizado por Laravel.
- **Client-Side Updates**: React maneja interacciones dinámicas.
- **Data Flow**: Unidireccional: Backend → Props → React Components.