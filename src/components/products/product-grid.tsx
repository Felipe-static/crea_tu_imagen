'use client';

import { Product } from '@/types';
import { ProductCard } from './product-card';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={setSelectedProduct}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              layoutId={`product-${selectedProduct.id}`}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-stone-900/5"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-2">
                <div className="aspect-square bg-stone-100 md:aspect-auto" />
                
                <div className="p-8 md:p-12 bg-white">
                  <div className="mb-8 space-y-2">
                    <span className="font-mono text-sm text-stone-500">{selectedProduct.code}</span>
                    <h2 className="text-3xl font-bold text-stone-900">{selectedProduct.name}</h2>
                  </div>
                  
                  <p className="mb-8 text-lg leading-relaxed text-stone-600">
                    {selectedProduct.description || 'Sin descripción disponible.'}
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-stone-900">Características</h3>
                    <ul className="list-inside list-disc space-y-2 text-stone-600">
                      <li>Cristal óptico K9 de alta pureza</li>
                      <li>Grabado láser 3D de alta definición</li>
                      <li>Incluye estuche de presentación de lujo</li>
                    </ul>
                  </div>

                  <div className="mt-10">
                    <Button
                        className="w-full bg-stone-900 text-white hover:bg-stone-800"
                        onClick={() => {/* Link to contact with pre-filled message ideally */}}
                    >
                        Cotizar este producto
                    </Button>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute right-4 top-4 rounded-full bg-stone-100 p-2 text-stone-500 hover:bg-stone-200"
              >
                <X className="h-6 w-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
