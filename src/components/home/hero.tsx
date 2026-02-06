'use client';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-white">
      {/* Background Effect - Warm & Human */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-stone-50" />
        
        {/* Soft Organic Gradients */}
        <div className="absolute -top-1/4 left-0 h-[1000px] w-[1000px] rounded-full bg-orange-100/40 blur-[100px]" />
        <div className="absolute top-1/2 right-0 h-[800px] w-[800px] rounded-full bg-blue-50/50 blur-[100px]" />
        
        {/* Texture overlay for human feel */}
        <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      </div>

      <Container className="relative z-10 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-block rounded-full bg-white/50 border border-stone-200 px-4 py-1.5 backdrop-blur-sm shadow-sm">
             <span className="text-xs font-semibold tracking-wider text-stone-600 uppercase">Artesanía Chilena de Excelencia</span>
          </div>

          <h1 className="mx-auto max-w-5xl text-5xl font-bold tracking-tight text-stone-900 md:text-7xl lg:text-8xl">
            Lo excepcional <br />
            <span className="text-stone-400 italic font-serif">merece ser eterno</span>
          </h1>
          
          <p className="mx-auto max-w-2xl text-xl text-stone-600 md:text-2xl font-light leading-relaxed">
            Creamos reconocimientos que conectan personas. Físicamente hermosos, emocionalmente inolvidables.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row pt-8">
            <Link href="/productos">
              <Button size="lg" className="min-w-[200px] text-lg bg-stone-900 text-white hover:bg-stone-800 shadow-xl shadow-stone-900/10">
                Ver Colección
              </Button>
            </Link>
            <Link href="/contacto">
              <Button size="lg" variant="outline" className="min-w-[200px] text-lg group bg-white hover:bg-stone-50 border-stone-200 text-stone-900 text-stone-700">
                Cotizar Diseño
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
