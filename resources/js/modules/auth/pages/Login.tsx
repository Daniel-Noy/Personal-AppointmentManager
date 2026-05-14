import { Form, Link } from '@inertiajs/react';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { store } from '@/actions/App/Http/Controllers/Auth/LoginController';

export default function Login() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-background p-4 font-sans">
            <div className="w-full max-w-md rounded-md border border-border/50 bg-white p-8 shadow-level-1 md:p-10">
                {/* Cabecera */}
                <div className="mb-8 text-center">
                    <h1 className="mb-2 font-heading text-4xl font-bold text-primary">
                        Luxe & Blade
                    </h1>
                    <p className="text-sm text-foreground/70">
                        Accede a tu cuenta para gestionar tus citas.
                    </p>
                </div>

                {/* Formulario */}
                <Form className="space-y-6" method="POST" action={store()}>
                    {/* Email */}
                    <div className="space-y-2">
                        <label className="block text-xs font-bold tracking-wider text-foreground uppercase">
                            Correo Electrónico
                        </label>
                        <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <Mail className="h-5 w-5 text-foreground/40" />
                            </div>
                            <input
                                type="email"
                                placeholder="tu@correo.com"
                                className="block w-full rounded-sm border border-border bg-background py-2 pr-3 pl-10 text-sm transition-colors focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                                name="email"
                            />
                        </div>
                    </div>

                    {/* Contraseña */}
                    <div className="space-y-2">
                        <label className="block text-xs font-bold tracking-wider text-foreground uppercase">
                            Contraseña
                        </label>
                        <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <Lock className="h-5 w-5 text-foreground/40" />
                            </div>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="block w-full rounded-sm border border-border bg-background py-2 pr-3 pl-10 text-sm transition-colors focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                                name="password"
                            />
                        </div>
                    </div>

                    {/* Opciones extra */}
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex cursor-pointer items-center gap-2">
                            <input
                                type="checkbox"
                                className="rounded-sm border-border text-primary focus:ring-primary"
                                name="remember"
                            />
                            <span className="text-foreground/70">
                                Recordarme
                            </span>
                        </label>
                        <Link
                            href="/auth/forgot-password"
                            className="font-medium text-primary transition-all hover:underline"
                        >
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </div>

                    {/* Botón Submit */}
                    <button
                        type="submit"
                        className="flex w-full items-center justify-center gap-2 rounded-sm bg-primary py-3 font-medium text-primary-foreground shadow-level-1 transition hover:bg-primary/90"
                    >
                        Iniciar Sesión
                        <ArrowRight className="h-4 w-4" />
                    </button>
                </Form>

                {/* Footer del Formulario */}
                <div className="mt-8 text-center text-sm text-foreground/70">
                    ¿Aún no tienes una cuenta?{' '}
                    <Link
                        href="/auth/register"
                        className="font-bold tracking-wide text-primary uppercase hover:underline"
                    >
                        Registrarse
                    </Link>
                </div>
            </div>
        </div>
    );
}
