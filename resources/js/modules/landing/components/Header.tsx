import { logout } from '@/actions/App/Http/Controllers/Auth/LoginController';
import { Form, Link, usePage } from '@inertiajs/react';

export default function Header() {
  const { auth } = usePage<any>().props;
  const user = auth?.user;

  return (
    <header className="bg-background shadow-level-1 sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="font-heading text-2xl font-bold text-primary">
            ScheduleManager
          </span>
          <span className="text-sm font-sans text-foreground/70 hidden sm:inline-block">
            Estética & Barbería
          </span>
        </div>

        {/* Navegación y Acciones */}
        <nav className="flex items-center gap-4">
          {user ? (
            <>
              <span className="text-sm font-sans text-foreground/70 hidden md:inline-block mr-2">
                Hola, {user.name}
              </span>
              <Link
                href="/appointments/create"
                className="text-sm font-sans font-medium text-foreground hover:text-primary transition"
              >
                Agendar Cita
              </Link>
              <Form action={logout()} method='POST'>
                <button
                  type='submit'
                  className="px-4 py-2 text-sm font-medium bg-secondary text-secondary-foreground rounded-sm hover:opacity-90 hover:cursor-pointer transition shadow-level-1">
                  Cerrar Sesión
                </button>
              </Form>
            </>
          ) : (
            <>
              <Link
                href="/auth/login"
                className="text-sm font-sans font-medium text-foreground hover:text-primary transition"
              >
                Iniciar Sesión
              </Link>
              <Link
                href="/auth/register"
                className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-sm hover:opacity-90 transition shadow-level-1"
              >
                Registrarse
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
