'use client';

import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero */}
      <section className="relative flex h-[50vh] items-center justify-center overflow-hidden bg-stone-900 text-center">
        <div className="absolute inset-0 bg-stone-900/50 z-10" />
        <Container className="relative z-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white md:text-7xl font-serif"
          >
            Nuestra Esencia
          </motion.h1>
        </Container>
      </section>

      {/* Content */}
      <section className="py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-stone-900 md:text-4xl">
                Artesanía Digital & Tradición
              </h2>
              <div className="space-y-6 text-lg text-stone-600">
                <p>
                  En Crea Imagen, fusionamos la precisión de la ingeniería láser con la delicadeza del diseño artístico. Desde nuestros inicios, nos hemos dedicado a transformar materiales nobles en testimonios tangibles de excelencia.
                </p>
                <p>
                  Entendemos que un reconocimiento no es solo un objeto; es la cristalización de un logro, un momento de orgullo congelado en el tiempo. Por eso, cada pieza que sale de nuestro taller es sometida a rigurosos controles de calidad.
                </p>
                <p>
                  Trabajamos con las corporaciones más importantes de Latinoamérica, proporcionando soluciones que elevan la imagen institucional y fortalecen los vínculos humanos.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-xl font-bold text-stone-900">Calidad</h3>
                <p className="text-stone-600">Materiales seleccionados: Cristal óptico K9 libre de impurezas y metales de fundición premium.</p>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-xl font-bold text-stone-900">Precisión</h3>
                <p className="text-zinc-400">Tecnología láser de última generación capaz de grabar detalles microscópicos.</p>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8">
                <h3 className="mb-4 text-xl font-bold text-white">Elegancia</h3>
                <p className="text-zinc-400">Diseños sobrios y atemporales que resalta la distinción de quien lo recibe.</p>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8">
                <h3 className="mb-4 text-xl font-bold text-white">Tecnología</h3>
                <p className="text-zinc-400">Innovación constante en técnicas de grabado y modelado 3D.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
