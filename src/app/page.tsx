import { HeroCarousel } from '@/components/home/hero-carousel';
import { PurposeSection } from '@/components/home/purpose-section';
import { ProcessTimeline } from '@/components/home/process-timeline';
import { Container } from '@/components/ui/container';
import { Mail, Phone, MapPin, Download, FileText } from 'lucide-react';

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <PurposeSection />
      <ProcessTimeline />

      {/* Catalog Download Section */}
      <section className="bg-slate-50 py-16 border-t border-slate-200">
        <Container>
          <div className="bg-indigo-950 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative shadow-xl">
            {/* Decorative background circle */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4 text-center md:text-left max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/50 text-indigo-100 text-sm font-medium backdrop-blur-sm mb-2 border border-indigo-700">
                  <FileText className="w-4 h-4" />
                  <span>Catálogo Digital</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  Descarga Catálogo
                </h2>
                <p className="text-indigo-200 text-lg max-w-xl">
                  Cada reconocimiento cuenta una historia. Descubra nuestra colección de galvanos, medallones, pines y distinciones diseñadas para emocionar, honrar trayectorias y transformar logros en recuerdos que perduran para siempre.
                </p>
              </div>

              <a
                href="/catalogo.pdf"
                download
                className="group flex-shrink-0 inline-flex items-center justify-center gap-3 bg-white text-indigo-950 px-8 py-5 rounded-xl font-bold text-lg transition-all hover:bg-indigo-50 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Download className="w-6 h-6 text-indigo-600 transition-transform group-hover:translate-y-1" />
                Descargar PDF
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Home specific Contact CTA */}
      <section className="bg-slate-900 py-16 text-white border-b border-slate-800">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Contáctenos</h2>
              <div className="flex flex-col gap-2 text-slate-300">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <MapPin className="h-5 w-5 text-indigo-400" />
                  <span>AV. ALEMANIA 5600, PISO 1, VALPARAÍSO, CHILE.</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Phone className="h-5 w-5 text-indigo-400" />
                  <span>+56 9 9319 4568</span>
                </div>
              </div>
            </div>

            {/* Big Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/56993194568"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-3 text-sm font-bold text-white transition-transform hover:scale-105 hover:bg-[#128C7E]"
              >
                WhatsApp
              </a>
              <a
                href="mailto:info@crea-imagen.cl"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-bold text-indigo-950 transition-transform hover:scale-105 hover:bg-slate-200"
              >
                Envíanos un Correo
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
