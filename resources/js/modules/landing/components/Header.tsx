import { Form, Link, usePage } from '@inertiajs/react';
import { logout } from '@/actions/App/Http/Controllers/Auth/LoginController';

export default function Header() {
    const { auth } = usePage<any>().props;
    const user = auth?.user;

    return (
        <header className="sticky top-0 z-50 bg-background shadow-level-1">
            <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <span className="font-heading text-2xl font-bold text-primary">
                        ScheduleManager
                    </span>
                    <span className="hidden font-sans text-sm text-foreground/70 sm:inline-block">
                        Estética & Barbería
                    </span>
                </div>

                {/* Navegación y Acciones */}
                <nav className="flex items-center gap-4">
                    {user ? (
                        <>
                            <span className="mr-2 hidden font-sans text-sm text-foreground/70 md:inline-block">
                                Hola, {user.name}
                            </span>
                            <Link
                                href="/appointments/create"
                                className="font-sans text-sm font-medium text-foreground transition hover:text-primary"
                            >
                                Agendar Cita
                            </Link>
                            <Form action={logout()} method="POST">
                                <button
                                    type="submit"
                                    className="rounded-sm bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground shadow-level-1 transition hover:cursor-pointer hover:opacity-90"
                                >
                                    Cerrar Sesión
                                </button>
                            </Form>
                        </>
                    ) : (
                        <>
                            <Link
                                href="/auth/login"
                                className="font-sans text-sm font-medium text-foreground transition hover:text-primary"
                            >
                                Iniciar Sesión
                            </Link>
                            <Link
                                href="/auth/register"
                                className="rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-level-1 transition hover:opacity-90"
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
