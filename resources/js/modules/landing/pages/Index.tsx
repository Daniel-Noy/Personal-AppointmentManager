import MainLayout from '../layouts/MainLayout';
import { Scissors, Sparkles, Droplet, MapPin, Clock, Phone } from 'lucide-react';

export default function Index() {
  return (
    <MainLayout>
      {/* 1. Hero Section */}
      <section className="relative bg-background overflow-hidden py-20 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="text-accent font-sans font-bold tracking-widest uppercase text-sm">
              El Arte del Cuidado Personal
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-primary leading-tight">
              Precisión, <br />
              Estilo y <span className="text-accent italic">Elegancia</span>.
            </h1>
            <p className="font-sans text-lg text-foreground/80 max-w-lg leading-relaxed">
              Descubre un espacio diseñado para tu bienestar. Nuestros especialistas combinan técnicas tradicionales con un enfoque moderno para ofrecerte la mejor experiencia de grooming.
            </p>
            <div className="pt-4">
              <a
                href="/register"
                className="inline-block px-8 py-4 bg-primary text-primary-foreground font-sans font-medium text-lg rounded-sm shadow-level-2 hover:bg-primary/90 transition transform hover:-translate-y-1"
              >
                Agendar una cita
              </a>
            </div>
          </div>

          {/* Hero Image / Placeholder */}
          <div className="flex-1 w-full relative">
            <div className="aspect-4/5 md:aspect-square bg-secondary/30 rounded-md shadow-level-1 flex items-center justify-center border border-border overflow-hidden">
              {/* Puedes reemplazar esto con una etiqueta <img /> */}
              <span className="font-heading text-secondary-foreground/50 text-xl text-center px-4">
                [Imagen del Salón o Corte]
              </span>
            </div>
            {/* Elemento decorativo */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* 2. Sobre Nosotros */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="mx-auto px-6 text-center max-w-3xl">
          <h2 className="font-heading text-4xl font-bold mb-6 text-secondary">Nuestra Filosofía</h2>
          <p className="font-sans text-lg opacity-90 leading-relaxed mb-8">
            Más que una simple estética o barbería, somos un refugio para aquellos que valoran el detalle.
            Creemos que la atención personalizada y un ambiente cálido son la base para una experiencia inolvidable.
            Cada corte, cada tratamiento facial y cada arreglo de barba es ejecutado con la máxima precisión por nuestros expertos artesanos.
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>
      </section>

      {/* 3. Servicios Ofrecidos */}
      <section className="bg-background py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">Nuestros Servicios</h2>
            <p className="font-sans text-foreground/70">Diseñados para elevar tu imagen y tu confianza.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Servicio 1 */}
            <div className="bg-white p-8 rounded-md shadow-level-1 border border-border/50 hover:shadow-level-2 transition-shadow group">
              <div className="w-12 h-12 bg-muted text-primary rounded-sm flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                <Scissors size={24} />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-2">Corte de Cabello</h3>
              <p className="font-sans text-sm text-foreground/70">
                Estilos clásicos y tendencias modernas ejecutadas con perfección, adaptadas a la forma de tu rostro.
              </p>
            </div>

            {/* Servicio 2 */}
            <div className="bg-white p-8 rounded-md shadow-level-1 border border-border/50 hover:shadow-level-2 transition-shadow group">
              <div className="w-12 h-12 bg-muted text-primary rounded-sm flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                <Droplet size={24} />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-2">Arreglo de Barba</h3>
              <p className="font-sans text-sm text-foreground/70">
                Perfilado, recorte y tratamientos con aceites esenciales para mantener tu barba impecable y saludable.
              </p>
            </div>

            {/* Servicio 3 */}
            <div className="bg-white p-8 rounded-md shadow-level-1 border border-border/50 hover:shadow-level-2 transition-shadow group">
              <div className="w-12 h-12 bg-muted text-primary rounded-sm flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                <Sparkles size={24} />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-2">Tratamientos Faciales</h3>
              <p className="font-sans text-sm text-foreground/70">
                Limpieza profunda, exfoliación e hidratación intensiva para una piel revitalizada.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Ubicación y Contacto */}
      <section className="bg-muted py-24">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row gap-12 items-center">

          <div className="flex-1 space-y-8">
            <div>
              <h2 className="font-heading text-4xl font-bold text-primary mb-2">Visítanos</h2>
              <p className="font-sans text-foreground/70">Encuentra tu momento de relajación en el corazón de la ciudad.</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white rounded-sm shadow-sm text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-primary">Dirección</h4>
                  <p className="font-sans text-sm text-foreground/70">Av. Principal 123, Colonia Centro<br />Ciudad, CP 12345</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-white rounded-sm shadow-sm text-primary">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-primary">Horarios</h4>
                  <p className="font-sans text-sm text-foreground/70">Lunes - Viernes: 9:00 AM - 8:00 PM<br />Sábados: 9:00 AM - 5:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-white rounded-sm shadow-sm text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-primary">Contacto</h4>
                  <p className="font-sans text-sm text-foreground/70">+52 (55) 1234 5678<br />hola@schedulemanager.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa Placeholder */}
          <div className="flex-1 w-full h-[400px] bg-secondary/50 rounded-md border border-border shadow-level-1 flex flex-col items-center justify-center">
            <MapPin size={48} strokeWidth={1.5} className="text-primary/40 mb-4" />
            <span className="font-heading text-lg text-primary/60">
              [Mapa Interactivo Aquí]
            </span>
          </div>

        </div>
      </section>
    </MainLayout>
  );
}