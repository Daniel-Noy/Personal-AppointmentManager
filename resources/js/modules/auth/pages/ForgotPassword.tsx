import { Link } from '@inertiajs/react';
import { Mail, ArrowRight, ArrowLeft, RotateCcw } from 'lucide-react';
import React from 'react';

export default function ForgotPassword() {
    return (
        <div className="min-h-screen flex flex-col bg-background font-sans">

            {/* Header del Layout Simple */}
            <div className="w-full text-center py-8">
                <Link href="/" className="font-heading text-2xl font-bold text-primary tracking-widest uppercase">
                    Luxe & Blade
                </Link>
            </div>

            {/* Contenido Principal */}
            <div className="flex-1 flex items-center justify-center p-4">
                <div className="w-full max-w-md bg-white p-8 md:p-10 rounded-md shadow-level-1 border border-border/50 text-center">

                    {/* Icono Circular */}
                    <div className="w-14 h-14 bg-background border border-border/50 rounded-md flex items-center justify-center mx-auto mb-6 shadow-sm">
                        <RotateCcw className="w-6 h-6 text-primary" />
                    </div>

                    {/* Cabecera */}
                    <div className="mb-8">
                        <h1 className="font-heading text-3xl font-bold text-primary mb-3">Recuperar Contraseña</h1>
                        <p className="text-foreground/70 text-sm leading-relaxed">
                            Introduce el correo electrónico asociado a tu cuenta. Te enviaremos un enlace para que puedas crear una nueva contraseña.
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
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-foreground/40" />
                                </div>
                                <input
                                    type="email"
                                    placeholder="tu@correo.com"
                                    className="block w-full pl-10 pr-3 py-2.5 border border-border rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background"
                                />
                            </div>
                        </div>

                        {/* Botones */}
                        <div className="space-y-4 pt-2">
                            <button
                                type="button"
                                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-sm font-medium hover:bg-primary/90 transition shadow-level-1"
                            >
                                Enviar enlace
                                <ArrowRight className="w-4 h-4" />
                            </button>

                            <Link
                                href="/auth/login"
                                className="w-full flex items-center justify-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors py-2"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Volver a Iniciar Sesión
                            </Link>
                        </div>
                    </form>
                </div>
            </div>

            {/* Footer Simple */}
            <div className="w-full text-center py-6 border-t border-border/50 text-xs text-foreground/50">
                <span className="font-heading font-bold text-primary tracking-widest uppercase mb-1 block">Luxe & Blade</span>
                &copy; {new Date().getFullYear()} Luxe & Blade Aesthetic Salon & Barbershop. All rights reserved.
            </div>

        </div>
    );
}
