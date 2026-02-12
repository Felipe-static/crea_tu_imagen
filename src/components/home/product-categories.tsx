'use client';

import { Container } from '@/components/ui/container';
import { categories } from '@/data/products';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function ProductCategories() {
  return (
    <section className="bg-white py-24 md:py-32 relative overflow-hidden">
      {/* Organic Background Shape */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-stone-100 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2 mix-blend-multiply" />

      <Container className="relative z-10">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-stone-900 md:text-4xl">Nuestras Categorías</h2>
            <p className="max-w-xl text-lg text-stone-600">
              Piezas diseñadas para ser sostenidas con orgullo y exhibidas con honor.
            </p>
          </div>
          <Link href="/productos" className="group flex items-center text-stone-900 hover:text-amber-700 font-medium border-b border-stone-200 pb-1 hover:border-amber-700 transition-colors">
            <span className="mr-2">Ver Catálogo Completo</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.slice(0, 6).map((category, index) => (
            <Link key={category.id} href={`/productos/${category.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-white shadow-lg shadow-stone-200/50 hover:shadow-xl hover:shadow-stone-300/50 transition-all border border-stone-100"
              >
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-stone-200 transition-transform duration-700 group-hover:scale-105" />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-70 transition-opacity" />

                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-sm text-stone-200 line-clamp-2 opacity-90">{category.description}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
