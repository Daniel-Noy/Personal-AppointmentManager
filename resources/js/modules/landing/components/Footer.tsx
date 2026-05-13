import { Mails, MapPinned, Phone } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground py-12 mt-auto">
            <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Branding */}
                <div>
                    <h3 className="font-heading text-2xl font-bold mb-4 text-secondary">ScheduleManager</h3>
                    <p className="font-sans text-sm opacity-80 max-w-xs">
                        La experiencia perfecta de cuidado personal, gestionada con la precisión de la tecnología moderna.
                    </p>
                </div>

                {/* Enlaces Rápidos */}
                <div>
                    <h4 className="font-sans font-semibold text-lg mb-4 text-secondary">Enlaces Rápidos</h4>
                    <ul className="space-y-2 font-sans text-sm opacity-80">
                        <li><a href="#" className="hover:text-secondary transition">Sobre Nosotros</a></li>
                        <li><a href="#" className="hover:text-secondary transition">Servicios</a></li>
                        <li><a href="#" className="hover:text-secondary transition">Términos y Condiciones</a></li>
                        <li><a href="#" className="hover:text-secondary transition">Política de Privacidad</a></li>
                    </ul>
                </div>

                {/* Contacto Simple */}
                <div>
                    <h4 className="font-sans font-semibold text-lg mb-4 text-secondary">Contacto</h4>
                    <ul className="space-y-2 font-sans text-sm opacity-80">
                        <li>
                            <MapPinned className='inline-block mr-2' />
                            Av. Principal 123, Centro
                        </li>
                        <li>
                            <Phone className='inline-block mr-2' />
                            +52 (55) 1234 5678
                        </li>
                        <li>
                            <Mails className='inline-block mr-2' />
                            hola@schedulemanager.com
                        </li>
                    </ul>
                </div>

            </div>

            <div className="max-w-[1280px] mx-auto px-6 mt-12 pt-6 border-t border-primary-foreground/20 text-center font-sans text-sm opacity-60">
                &copy; {new Date().getFullYear()} ScheduleManager. Todos los derechos reservados.
            </div>
        </footer>
    );
}
