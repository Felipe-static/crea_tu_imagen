'use client';

import { HeroCarousel } from '@/components/home/hero-carousel';
import { PurposeSection } from '@/components/home/purpose-section';
import { ProcessTimeline } from '@/components/home/process-timeline';
import { Container } from '@/components/ui/container';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <PurposeSection />
      <ProcessTimeline />

      {/* Home specific Contact CTA */}
      <section className="bg-stone-900 py-16 text-white border-b border-stone-800">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-serif">Contáctenos</h2>
              <div className="flex flex-col gap-2 text-stone-300">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <MapPin className="h-5 w-5 text-amber-500" />
                  <span>AV. ALEMANIA 5600, PISO 1, VALPARAÍSO, CHILE.</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Phone className="h-5 w-5 text-amber-500" />
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
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-bold text-stone-900 transition-transform hover:scale-105 hover:bg-stone-200"
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
