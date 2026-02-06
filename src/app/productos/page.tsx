'use client';

import { Container } from '@/components/ui/container';
import { categories } from '@/data/products'; // Corrected alias
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ProductsPage() {
  return (
    <div className="bg-stone-50 py-24 min-h-screen">
      <Container>
        <div className="mb-16 text-center pt-10">
          <h1 className="mb-4 text-4xl font-serif font-bold text-stone-900 md:text-5xl">Nuestras Colecciones</h1>
          <p className="mx-auto max-w-2xl text-lg text-stone-600">
            Descubra el arte de reconocer lo excepcional con elegancia y distinción.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Link key={category.id} href={`/productos/${category.id}`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="group relative aspect-square overflow-hidden rounded-xl bg-white border border-stone-100 shadow-md hover:shadow-xl transition-all duration-300"
              >
                 <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent z-10 opacity-70 transition-opacity group-hover:opacity-90" />
                 
                 {/* Placeholder for category image */}
                 <div className="absolute inset-0 bg-stone-200 transition-transform duration-700 group-hover:scale-105" />

                 <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                   <h2 className="text-2xl font-bold text-white mb-2">{category.name}</h2>
                   <p className="text-sm text-stone-100 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">{category.description}</p>
                 </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
