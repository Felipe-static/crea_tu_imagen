'use client';

import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';

export function Purpose() {
  return (
    <section className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-50 via-white to-white py-24 text-zinc-950 md:py-32 relative">

      {/* Texture effect */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block mb-4">
              <span className="py-1 px-3 rounded-full bg-amber-100 text-amber-800 text-xs font-bold tracking-widest uppercase mb-4">Nuestro Manifiesto</span>
            </div>

            <h2 className="text-3xl font-light leading-relaxed md:text-5xl lg:leading-tight text-slate-900">
              "Un reconocimiento no es solo un objeto sobre un escritorio. Es el momento exacto en que una organización dice: <span className="italic text-amber-600 font-medium bg-amber-50/50 px-2 rounded">'Te vemos, te valoramos y te agradecemos'</span>."
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 font-sans leading-relaxed">
              En <strong>Crea Imagen</strong>, no fabricamos simples adornos. Esculpimos en luz y metal la emoción del éxito, creando símbolos que permiten a las personas volver a vivir su momento de gloria cada vez que los miran.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
