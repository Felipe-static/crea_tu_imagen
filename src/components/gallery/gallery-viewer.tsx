'use client';

import { Container } from '@/components/ui/container';
import { categories, products } from '@/data/products';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

export function GalleryViewer() {
  const [filter, setFilter] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="py-24">
      <Container>
        <div className="mb-12 text-center pt-10">
          <h1 className="mb-6 text-4xl font-bold text-stone-900 md:text-5xl font-serif">Galería de Trabajos</h1>
          
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setFilter('all')}
              className={cn(
                "rounded-full px-6 py-2 text-sm transition-all border",
                filter === 'all' 
                  ? "bg-stone-900 text-white border-stone-900 shadow-md" 
                  : "bg-white text-stone-600 border-stone-200 hover:bg-stone-50 hover:border-stone-300"
              )}
            >
              Todos
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={cn(
                  "rounded-full px-6 py-2 text-sm transition-all border",
                  filter === cat.id 
                    ? "bg-stone-900 text-white border-stone-900 shadow-md" 
                    : "bg-white text-stone-600 border-stone-200 hover:bg-stone-50 hover:border-stone-300"
                )}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout 
          className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4 space-y-4"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={product.id}
                className="break-inside-avoid"
              >
                <div 
                  className="group relative cursor-zoom-in overflow-hidden rounded-lg bg-stone-200"
                  onClick={() => setSelectedImage(product.image)}
                >
                    {/* Placeholder for varied height images to simulate masonry */}
                    <div className={cn(
                        "w-full bg-stone-300 transition-transform duration-500 group-hover:scale-105",
                        parseInt(product.id) % 2 === 0 ? "aspect-[3/4]" : "aspect-[4/3]"
                    )} />
                    
                    <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-h-[90vh] max-w-[90vw]">
                {/* Full image would go here */}
                <div className="h-[600px] w-[800px] bg-zinc-800 rounded-lg" />
                
                <button
                  className="absolute -right-4 -top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </div>
  );
}
