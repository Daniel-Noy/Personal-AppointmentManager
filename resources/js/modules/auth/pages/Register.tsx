import { Form, Link } from '@inertiajs/react';
import { Mail, Lock, User, ArrowRight, LockKeyhole } from 'lucide-react';
import { store } from '@/actions/App/Http/Controllers/Auth/RegisterController';

export default function Register() {
    return (
        <div className="flex min-h-screen bg-background font-sans">
            {/* Mitad Izquierda - Imagen */}
            <div className="relative hidden lg:block lg:flex-1">
                <div className="absolute inset-0 z-10 bg-primary/20" />{' '}
                {/* Overlay para darle el tono cálido */}
                <img
                    src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2000&auto=format&fit=crop"
                    alt="Salón de estética"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute bottom-8 left-8 z-20">
                    <h2 className="font-heading text-3xl font-bold text-white">
                        Luxe & Blade
                    </h2>
                </div>
            </div>

            {/* Mitad Derecha - Formulario */}
            <div className="flex flex-1 items-center justify-center bg-white p-8">
                <div className="w-full max-w-md">
                    {/* Cabecera */}
                    <div className="mb-8">
                        <h1 className="mb-2 font-heading text-3xl font-bold text-primary">
                            Crear Cuenta
                        </h1>
                        <p className="text-sm text-foreground/70">
                            Únete a nosotros para descubrir un nuevo estándar en
                            cuidado personal y bienestar.
                        </p>
                    </div>

                    {/* Formulario */}
                    <Form action={store()} method="POST" className="space-y-5">
                        {/* Nombre */}
                        <div className="space-y-1.5">
                            <label className="block text-xs font-bold text-foreground capitalize">
                                Full Name
                            </label>
                            <div className="relative">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <User className="h-5 w-5 text-foreground/40" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Ej. Ana García"
                                    className="block w-full rounded-sm border border-border bg-white py-2.5 pr-3 pl-10 text-sm shadow-sm transition-colors focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                                    name="name"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="space-y-1.5">
                            <label className="block text-xs font-bold text-foreground capitalize">
                                Email
                            </label>
                            <div className="relative">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <Mail className="h-5 w-5 text-foreground/40" />
                                </div>
                                <input
                                    type="email"
                                    placeholder="tu@email.com"
                                    className="block w-full rounded-sm border border-border bg-white py-2.5 pr-3 pl-10 text-sm shadow-sm transition-colors focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                                    name="email"
                                />
                            </div>
                        </div>

                        {/* Contraseña */}
                        <div className="space-y-1.5">
                            <label className="block text-xs font-bold text-foreground capitalize">
                                Password
                            </label>
                            <div className="relative">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <Lock className="h-5 w-5 text-foreground/40" />
                                </div>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="block w-full rounded-sm border border-border bg-white py-2.5 pr-3 pl-10 text-sm shadow-sm transition-colors focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                                    name="password"
                                />
                            </div>
                            <p className="mt-1 text-[11px] text-foreground/50">
                                Mínimo 8 caracteres, combinando letras y
                                números.
                            </p>
                        </div>

                        {/* Confirmación contraseña */}
                        <div className="space-y-1.5">
                            <label className="block text-xs font-bold text-foreground capitalize">
                                Password
                            </label>
                            <div className="relative">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <LockKeyhole className="h-5 w-5 text-foreground/40" />
                                </div>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="block w-full rounded-sm border border-border bg-white py-2.5 pr-3 pl-10 text-sm shadow-sm transition-colors focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                                    name="password_confirmation"
                                />
                            </div>
                            <p className="mt-1 text-[11px] text-foreground/50">
                                Mínimo 8 caracteres, combinando letras y
                                números.
                            </p>
                        </div>

                        {/* Botón Submit */}
                        <button
                            type="submit"
                            className="mt-6 flex w-full items-center justify-center gap-2 rounded-sm bg-primary py-3.5 font-medium text-primary-foreground shadow-level-1 transition hover:bg-primary/90"
                        >
                            Crear Cuenta
                            <ArrowRight className="h-4 w-4" />
                        </button>
                    </Form>

                    {/* Footer del Formulario */}
                    <div className="mt-8 text-center text-sm text-foreground/70">
                        ¿Ya tienes una cuenta?{' '}
                        <Link
                            href="/auth/login"
                            className="font-bold text-primary hover:underline"
                        >
                            Iniciar sesión
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
