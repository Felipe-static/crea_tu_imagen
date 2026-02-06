'use client';

import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';
import { Layers, Zap, Eye, Cuboid } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Grabado No Invasivo",
    description: "Tecnología láser que micro-fractura el cristal internamente sin dañar la superficie."
  },
  {
    icon: <Layers className="h-8 w-8" />,
    title: "Alta Definición",
    description: "Más de 100.000 puntos por pieza para lograr detalles fotográficos excepcionales."
  },
  {
    icon: <Cuboid className="h-8 w-8" />,
    title: "Volumetría 3D",
    description: "Recreación perfecta de objetos, logotipos y arquitecturas en tres dimensiones."
  },
  {
    icon: <Eye className="h-8 w-8" />,
    title: "Visibilidad Total",
    description: "La imagen flota dentro del cristal, siendo visible desde todos los ángulos."
  }
];

export function Technology() {
  return (
    <section className="bg-stone-900 py-24 md:py-32 relative overflow-hidden text-white">
        
       {/* Ambient Light */}
       <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 blur-[120px] rounded-full" />

      <Container className="relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white md:text-4xl">Precisión Humana</h2>
            <p className="text-lg text-stone-300 leading-relaxed">
              Combinamos la precisión infalible del láser con el criterio sensible de nuestros artesanos. Porque una máquina puede grabar, pero solo una persona puede interpretar la emoción detrás de un premio.
            </p>
            
            <div className="grid gap-8 sm:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-3"
                >
                  <div className="inline-flex rounded-xl bg-white/10 p-3 text-amber-200 border border-white/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="text-sm text-stone-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-black border border-white/10 flex items-center justify-center shadow-2xl">
            {/* Abstract representation of the laser process */}
            <div className="relative h-72 w-72">
              <div className="absolute inset-0 animate-pulse rounded-full bg-blue-500/10 blur-3xl" />
               {/* Crystal block */}
              <div className="absolute inset-12 rotate-45 border border-white/10 bg-white/5 backdrop-blur-md shadow-inner rounded-2xl" />
              {/* Laser beam */}
              <div className="absolute left-1/2 top-0 h-1/2 w-[2px] bg-gradient-to-b from-transparent via-blue-400 to-white shadow-[0_0_15px_rgba(96,165,250,0.8)]" />
              {/* Laser Hit Point */}
              <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_30px_10px_rgba(59,130,246,0.6)] animate-pulse" />
              
              {/* Particles */}
              <div className="absolute left-1/2 top-1/2 -ml-1 -mt-1 h-1 w-1 bg-blue-200 rounded-full animate-ping" />
            </div>
            <div className="absolute bottom-8 text-center w-full">
              <span className="text-xs font-mono text-blue-400/80 tracking-[0.2em] uppercase">Simulación Láser 3D</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
