'use client';

import { Product } from '@/types';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <motion.div
      layoutId={`product-${product.id}`}
      className="group cursor-pointer space-y-3"
      onClick={() => onClick(product)}
      whileHover={{ y: -8 }}
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-white border border-stone-100 shadow-md group-hover:shadow-xl group-hover:border-amber-200 transition-all duration-300">
        {/* Glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-amber-100/30 to-transparent pointer-events-none z-10" />
        
        {/* Hover overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/30 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
          <div className="transform scale-90 rounded-full bg-white/80 p-4 backdrop-blur-md transition-transform duration-300 group-hover:scale-100 border border-stone-200 shadow-sm">
            <Plus className="h-6 w-6 text-stone-900" />
          </div>
        </div>
        
        {/* Image Placeholder */}
        <div className="h-full w-full bg-stone-100 object-cover transition-transform duration-700 group-hover:scale-110" />
      </div>

      <div className="space-y-1 px-1">
        <div className="text-xs font-serif italic text-amber-700 tracking-wider uppercase">{product.category}</div>
        <h3 className="font-semibold text-lg text-stone-900 group-hover:text-amber-800 transition-colors">{product.name}</h3>
      </div>
    </motion.div>
  );
}
