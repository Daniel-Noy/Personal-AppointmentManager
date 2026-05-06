# Arquitectura Frontend

## Patrón Arquitectónico: Modular Feature-Based Architecture (Feature-First)

El frontend sigue un enfoque modular donde la lógica se agrupa por funcionalidad (feature) en lugar de por tipo de archivo. Esto permite un desarrollo escalable, facilita el mantenimiento y mejora la organización del código al mantener elementos relacionados cerca entre sí.

### Estructura de Carpetas

La aplicación se divide principalmente en dos grandes áreas: `modules/` para la lógica de negocio específica y `shared/` para los recursos transversales.

#### 1. **modules/** (Lógica por Funcionalidad)
Cada carpeta dentro de este directorio representa un dominio o característica del sistema (ej: `auth`, `dashboard`, `appointments`).
- **components/**: Componentes de interfaz exclusivos de este módulo.
- **hooks/**: Hooks de React que contienen la lógica de estado y efectos específica de la funcionalidad.
- **pages/**: Páginas principales del módulo que son consumidas por el enrutador (Inertia).

#### 2. **shared/** (Recursos Globales y Reutilizables)
Contiene elementos que no tienen un dueño funcional único y son utilizados por múltiples módulos.
- **components/**: Componentes de UI base o "UI Kit" (botones, inputs, tablas genéricas).
- **layouts/**: Estructuras visuales maestras (ej: `MainLayout`, `AuthLayout`) que envuelven a las páginas.
- **hooks/**: Utilidades de React de propósito general (ej: `useWindowSize`, `useForm`).
- **utils/**: Funciones auxiliares, formateadores y constantes globales.
- **types/**: Definiciones de TypeScript y contratos de interfaces globales.
- **contexts/**: Proveedores de estado global (ej: `ConfigContext`, `NotificationContext`).

### Patrones Utilizados
- **Modularization**: Aislamiento de responsabilidades por dominio.
- **Component Composition**: Uso de componentes pequeños para construir vistas complejas.
- **Custom Hooks**: Separación estricta entre la lógica de negocio y la presentación.
- **Shared Layouts**: Consistencia visual mediante el uso de envoltorios de página reutilizables.

### Flujo de Desarrollo
1. **Navegación**: Inertia carga una `Page` ubicada dentro de un módulo en `modules/`.
2. **Estructura**: La página se integra dentro de un `Layout` de `shared/layouts/`.
3. **Construcción de UI**: Se combinan componentes específicos de `modules/X/components/` con componentes base de `shared/components/`.
4. **Estado**: Se utiliza lógica encapsulada en `hooks/` (locales o compartidos) para manejar la interactividad.