import { Mails, MapPinned, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="mt-auto bg-primary py-12 text-primary-foreground">
            <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-6 md:grid-cols-3">
                {/* Branding */}
                <div>
                    <h3 className="mb-4 font-heading text-2xl font-bold text-secondary">
                        ScheduleManager
                    </h3>
                    <p className="max-w-xs font-sans text-sm opacity-80">
                        La experiencia perfecta de cuidado personal, gestionada
                        con la precisión de la tecnología moderna.
                    </p>
                </div>

                {/* Enlaces Rápidos */}
                <div>
                    <h4 className="mb-4 font-sans text-lg font-semibold text-secondary">
                        Enlaces Rápidos
                    </h4>
                    <ul className="space-y-2 font-sans text-sm opacity-80">
                        <li>
                            <a
                                href="#"
                                className="transition hover:text-secondary"
                            >
                                Sobre Nosotros
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="transition hover:text-secondary"
                            >
                                Servicios
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="transition hover:text-secondary"
                            >
                                Términos y Condiciones
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="transition hover:text-secondary"
                            >
                                Política de Privacidad
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contacto Simple */}
                <div>
                    <h4 className="mb-4 font-sans text-lg font-semibold text-secondary">
                        Contacto
                    </h4>
                    <ul className="space-y-2 font-sans text-sm opacity-80">
                        <li>
                            <MapPinned className="mr-2 inline-block" />
                            Av. Principal 123, Centro
                        </li>
                        <li>
                            <Phone className="mr-2 inline-block" />
                            +52 (55) 1234 5678
                        </li>
                        <li>
                            <Mails className="mr-2 inline-block" />
                            hola@schedulemanager.com
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mx-auto mt-12 max-w-[1280px] border-t border-primary-foreground/20 px-6 pt-6 text-center font-sans text-sm opacity-60">
                &copy; {new Date().getFullYear()} ScheduleManager. Todos los
                derechos reservados.
            </div>
        </footer>
    );
}
