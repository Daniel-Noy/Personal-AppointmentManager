import {
    Scissors,
    Sparkles,
    Droplet,
    MapPin,
    Clock,
    Phone,
} from 'lucide-react';
import MainLayout from '../layouts/MainLayout';

export default function Index() {
    return (
        <MainLayout>
            {/* 1. Hero Section */}
            <section className="relative overflow-hidden bg-background py-20 md:py-32">
                <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col items-center gap-12 px-6 md:flex-row">
                    <div className="flex-1 space-y-6">
                        <span className="font-sans text-sm font-bold tracking-widest text-accent uppercase">
                            El Arte del Cuidado Personal
                        </span>
                        <h1 className="font-heading text-5xl leading-tight font-bold text-primary md:text-7xl">
                            Precisión, <br />
                            Estilo y{' '}
                            <span className="text-accent italic">
                                Elegancia
                            </span>
                            .
                        </h1>
                        <p className="max-w-lg font-sans text-lg leading-relaxed text-foreground/80">
                            Descubre un espacio diseñado para tu bienestar.
                            Nuestros especialistas combinan técnicas
                            tradicionales con un enfoque moderno para ofrecerte
                            la mejor experiencia de grooming.
                        </p>
                        <div className="pt-4">
                            <a
                                href="/register"
                                className="inline-block transform rounded-sm bg-primary px-8 py-4 font-sans text-lg font-medium text-primary-foreground shadow-level-2 transition hover:-translate-y-1 hover:bg-primary/90"
                            >
                                Agendar una cita
                            </a>
                        </div>
                    </div>

                    {/* Hero Image / Placeholder */}
                    <div className="relative w-full flex-1">
                        <div className="flex aspect-4/5 items-center justify-center overflow-hidden rounded-md border border-border bg-secondary/30 shadow-level-1 md:aspect-square">
                            {/* Puedes reemplazar esto con una etiqueta <img /> */}
                            <span className="px-4 text-center font-heading text-xl text-secondary-foreground/50">
                                [Imagen del Salón o Corte]
                            </span>
                        </div>
                        {/* Elemento decorativo */}
                        <div className="absolute -bottom-6 -left-6 -z-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl"></div>
                    </div>
                </div>
            </section>

            {/* 2. Sobre Nosotros */}
            <section className="bg-primary py-24 text-primary-foreground">
                <div className="mx-auto max-w-3xl px-6 text-center">
                    <h2 className="mb-6 font-heading text-4xl font-bold text-secondary">
                        Nuestra Filosofía
                    </h2>
                    <p className="mb-8 font-sans text-lg leading-relaxed opacity-90">
                        Más que una simple estética o barbería, somos un refugio
                        para aquellos que valoran el detalle. Creemos que la
                        atención personalizada y un ambiente cálido son la base
                        para una experiencia inolvidable. Cada corte, cada
                        tratamiento facial y cada arreglo de barba es ejecutado
                        con la máxima precisión por nuestros expertos artesanos.
                    </p>
                    <div className="mx-auto h-1 w-24 rounded-full bg-secondary"></div>
                </div>
            </section>

            {/* 3. Servicios Ofrecidos */}
            <section className="bg-background py-24">
                <div className="mx-auto max-w-[1280px] px-6">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 font-heading text-4xl font-bold text-primary">
                            Nuestros Servicios
                        </h2>
                        <p className="font-sans text-foreground/70">
                            Diseñados para elevar tu imagen y tu confianza.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* Servicio 1 */}
                        <div className="group rounded-md border border-border/50 bg-white p-8 shadow-level-1 transition-shadow hover:shadow-level-2">
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-sm bg-muted text-primary transition-colors group-hover:bg-accent group-hover:text-white">
                                <Scissors size={24} />
                            </div>
                            <h3 className="mb-2 font-heading text-xl font-bold text-primary">
                                Corte de Cabello
                            </h3>
                            <p className="font-sans text-sm text-foreground/70">
                                Estilos clásicos y tendencias modernas
                                ejecutadas con perfección, adaptadas a la forma
                                de tu rostro.
                            </p>
                        </div>

                        {/* Servicio 2 */}
                        <div className="group rounded-md border border-border/50 bg-white p-8 shadow-level-1 transition-shadow hover:shadow-level-2">
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-sm bg-muted text-primary transition-colors group-hover:bg-accent group-hover:text-white">
                                <Droplet size={24} />
                            </div>
                            <h3 className="mb-2 font-heading text-xl font-bold text-primary">
                                Arreglo de Barba
                            </h3>
                            <p className="font-sans text-sm text-foreground/70">
                                Perfilado, recorte y tratamientos con aceites
                                esenciales para mantener tu barba impecable y
                                saludable.
                            </p>
                        </div>

                        {/* Servicio 3 */}
                        <div className="group rounded-md border border-border/50 bg-white p-8 shadow-level-1 transition-shadow hover:shadow-level-2">
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-sm bg-muted text-primary transition-colors group-hover:bg-accent group-hover:text-white">
                                <Sparkles size={24} />
                            </div>
                            <h3 className="mb-2 font-heading text-xl font-bold text-primary">
                                Tratamientos Faciales
                            </h3>
                            <p className="font-sans text-sm text-foreground/70">
                                Limpieza profunda, exfoliación e hidratación
                                intensiva para una piel revitalizada.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Ubicación y Contacto */}
            <section className="bg-muted py-24">
                <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 px-6 lg:flex-row">
                    <div className="flex-1 space-y-8">
                        <div>
                            <h2 className="mb-2 font-heading text-4xl font-bold text-primary">
                                Visítanos
                            </h2>
                            <p className="font-sans text-foreground/70">
                                Encuentra tu momento de relajación en el corazón
                                de la ciudad.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="rounded-sm bg-white p-2 text-primary shadow-sm">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="font-sans font-bold text-primary">
                                        Dirección
                                    </h4>
                                    <p className="font-sans text-sm text-foreground/70">
                                        Av. Principal 123, Colonia Centro
                                        <br />
                                        Ciudad, CP 12345
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="rounded-sm bg-white p-2 text-primary shadow-sm">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <h4 className="font-sans font-bold text-primary">
                                        Horarios
                                    </h4>
                                    <p className="font-sans text-sm text-foreground/70">
                                        Lunes - Viernes: 9:00 AM - 8:00 PM
                                        <br />
                                        Sábados: 9:00 AM - 5:00 PM
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="rounded-sm bg-white p-2 text-primary shadow-sm">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h4 className="font-sans font-bold text-primary">
                                        Contacto
                                    </h4>
                                    <p className="font-sans text-sm text-foreground/70">
                                        +52 (55) 1234 5678
                                        <br />
                                        hola@schedulemanager.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mapa Placeholder */}
                    <div className="flex h-[400px] w-full flex-1 flex-col items-center justify-center rounded-md border border-border bg-secondary/50 shadow-level-1">
                        <MapPin
                            size={48}
                            strokeWidth={1.5}
                            className="mb-4 text-primary/40"
                        />
                        <span className="font-heading text-lg text-primary/60">
                            [Mapa Interactivo Aquí]
                        </span>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
