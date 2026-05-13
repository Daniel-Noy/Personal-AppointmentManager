import { store } from '@/actions/App/Http/Controllers/Auth/RegisterController';
import { Form, Link } from '@inertiajs/react';
import { Mail, Lock, User, ArrowRight, LockKeyhole } from 'lucide-react';

export default function Register() {
    return (
        <div className="min-h-screen flex bg-background font-sans">

            {/* Mitad Izquierda - Imagen */}
            <div className="hidden lg:block lg:flex-1 relative">
                <div className="absolute inset-0 bg-primary/20 z-10" /> {/* Overlay para darle el tono cálido */}
                <img
                    src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2000&auto=format&fit=crop"
                    alt="Salón de estética"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-8 left-8 z-20">
                    <h2 className="font-heading text-3xl font-bold text-white">Luxe & Blade</h2>
                </div>
            </div>

            {/* Mitad Derecha - Formulario */}
            <div className="flex-1 flex items-center justify-center p-8 bg-white">
                <div className="w-full max-w-md">

                    {/* Cabecera */}
                    <div className="mb-8">
                        <h1 className="font-heading text-3xl font-bold text-primary mb-2">Crear Cuenta</h1>
                        <p className="text-foreground/70 text-sm">
                            Únete a nosotros para descubrir un nuevo estándar en cuidado personal y bienestar.
                        </p>
                    </div>

                    {/* Formulario */}
                    <Form action={store()} method='POST' className="space-y-5">

                        {/* Nombre */}
                        <div className="space-y-1.5">
                            <label className="block text-xs font-bold text-foreground capitalize">
                                Full Name
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-foreground/40" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Ej. Ana García"
                                    className="block w-full pl-10 pr-3 py-2.5 border border-border rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-white shadow-sm"
                                    name='name'
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="space-y-1.5">
                            <label className="block text-xs font-bold text-foreground capitalize">
                                Email
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-foreground/40" />
                                </div>
                                <input
                                    type="email"
                                    placeholder="tu@email.com"
                                    className="block w-full pl-10 pr-3 py-2.5 border border-border rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-white shadow-sm"
                                    name='email'
                                />
                            </div>
                        </div>

                        {/* Contraseña */}
                        <div className="space-y-1.5">
                            <label className="block text-xs font-bold text-foreground capitalize">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-foreground/40" />
                                </div>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="block w-full pl-10 pr-3 py-2.5 border border-border rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-white shadow-sm"
                                    name='password'
                                />
                            </div>
                            <p className="text-[11px] text-foreground/50 mt-1">
                                Mínimo 8 caracteres, combinando letras y números.
                            </p>
                        </div>

                        {/* Confirmación contraseña */}
                        <div className="space-y-1.5">
                            <label className="block text-xs font-bold text-foreground capitalize">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <LockKeyhole className="h-5 w-5 text-foreground/40" />
                                </div>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="block w-full pl-10 pr-3 py-2.5 border border-border rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-white shadow-sm"
                                    name='password_confirmation'
                                />
                            </div>
                            <p className="text-[11px] text-foreground/50 mt-1">
                                Mínimo 8 caracteres, combinando letras y números.
                            </p>
                        </div>

                        {/* Botón Submit */}
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3.5 rounded-sm font-medium hover:bg-primary/90 transition shadow-level-1 mt-6"
                        >
                            Crear Cuenta
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </Form>

                    {/* Footer del Formulario */}
                    <div className="mt-8 text-center text-sm text-foreground/70">
                        ¿Ya tienes una cuenta?{' '}
                        <Link href="/auth/login" className="font-bold text-primary hover:underline">
                            Iniciar sesión
                        </Link>
                    </div>

                </div>
            </div>

        </div>
    );
}