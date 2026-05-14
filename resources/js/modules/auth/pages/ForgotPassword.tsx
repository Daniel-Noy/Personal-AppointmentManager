import { Link } from '@inertiajs/react';
import { Mail, ArrowRight, ArrowLeft, RotateCcw } from 'lucide-react';
import React from 'react';

export default function ForgotPassword() {
    return (
        <div className="flex min-h-screen flex-col bg-background font-sans">
            {/* Header del Layout Simple */}
            <div className="w-full py-8 text-center">
                <Link
                    href="/"
                    className="font-heading text-2xl font-bold tracking-widest text-primary uppercase"
                >
                    Luxe & Blade
                </Link>
            </div>

            {/* Contenido Principal */}
            <div className="flex flex-1 items-center justify-center p-4">
                <div className="w-full max-w-md rounded-md border border-border/50 bg-white p-8 text-center shadow-level-1 md:p-10">
                    {/* Icono Circular */}
                    <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-md border border-border/50 bg-background shadow-sm">
                        <RotateCcw className="h-6 w-6 text-primary" />
                    </div>

                    {/* Cabecera */}
                    <div className="mb-8">
                        <h1 className="mb-3 font-heading text-3xl font-bold text-primary">
                            Recuperar Contraseña
                        </h1>
                        <p className="text-sm leading-relaxed text-foreground/70">
                            Introduce el correo electrónico asociado a tu
                            cuenta. Te enviaremos un enlace para que puedas
                            crear una nueva contraseña.
                        </p>
                    </div>

                    {/* Formulario */}
                    <form className="space-y-6 text-left">
                        {/* Email */}
                        <div className="space-y-2">
                            <label className="block text-xs font-bold text-foreground capitalize">
                                Correo Electrónico
                            </label>
                            <div className="relative">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <Mail className="h-5 w-5 text-foreground/40" />
                                </div>
                                <input
                                    type="email"
                                    placeholder="tu@correo.com"
                                    className="block w-full rounded-sm border border-border bg-background py-2.5 pr-3 pl-10 text-sm transition-colors focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Botones */}
                        <div className="space-y-4 pt-2">
                            <button
                                type="button"
                                className="flex w-full items-center justify-center gap-2 rounded-sm bg-primary py-3 font-medium text-primary-foreground shadow-level-1 transition hover:bg-primary/90"
                            >
                                Enviar enlace
                                <ArrowRight className="h-4 w-4" />
                            </button>

                            <Link
                                href="/auth/login"
                                className="flex w-full items-center justify-center gap-2 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                Volver a Iniciar Sesión
                            </Link>
                        </div>
                    </form>
                </div>
            </div>

            {/* Footer Simple */}
            <div className="w-full border-t border-border/50 py-6 text-center text-xs text-foreground/50">
                <span className="mb-1 block font-heading font-bold tracking-widest text-primary uppercase">
                    Luxe & Blade
                </span>
                &copy; {new Date().getFullYear()} Luxe & Blade Aesthetic Salon &
                Barbershop. All rights reserved.
            </div>
        </div>
    );
}
