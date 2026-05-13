import { store } from '@/actions/App/Http/Controllers/Auth/LoginController';
import { Form, Link } from '@inertiajs/react';
import { Mail, Lock, ArrowRight } from 'lucide-react';

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background font-sans p-4">
            <div className="w-full max-w-md bg-white p-8 md:p-10 rounded-md shadow-level-1 border border-border/50">

                {/* Cabecera */}
                <div className="text-center mb-8">
                    <h1 className="font-heading text-4xl font-bold text-primary mb-2">Luxe & Blade</h1>
                    <p className="text-foreground/70 text-sm">
                        Accede a tu cuenta para gestionar tus citas.
                    </p>
                </div>

                {/* Formulario */}
                <Form className="space-y-6" method='POST' action={store()}>
                    {/* Email */}
                    <div className="space-y-2">
                        <label className="block text-xs font-bold text-foreground uppercase tracking-wider">
                            Correo Electrónico
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-foreground/40" />
                            </div>
                            <input
                                type="email"
                                placeholder="tu@correo.com"
                                className="block w-full pl-10 pr-3 py-2 border border-border rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background"
                                name='email'
                            />
                        </div>
                    </div>

                    {/* Contraseña */}
                    <div className="space-y-2">
                        <label className="block text-xs font-bold text-foreground uppercase tracking-wider">
                            Contraseña
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-foreground/40" />
                            </div>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="block w-full pl-10 pr-3 py-2 border border-border rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background"
                                name='password'
                            />
                        </div>
                    </div>

                    {/* Opciones extra */}
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="rounded-sm border-border text-primary focus:ring-primary" name='remember' />
                            <span className="text-foreground/70">Recordarme</span>
                        </label>
                        <Link href="/auth/forgot-password" className="font-medium text-primary hover:underline transition-all">
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </div>

                    {/* Botón Submit */}
                    <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-sm font-medium hover:bg-primary/90 transition shadow-level-1"
                    >
                        Iniciar Sesión
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </Form>

                {/* Footer del Formulario */}
                <div className="mt-8 text-center text-sm text-foreground/70">
                    ¿Aún no tienes una cuenta?{' '}
                    <Link href="/auth/register" className="font-bold text-primary hover:underline uppercase tracking-wide">
                        Registrarse
                    </Link>
                </div>

            </div>
        </div>
    );
}