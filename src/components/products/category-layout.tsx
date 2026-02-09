'use client';

import { Container } from '@/components/ui/container';
import { products } from '@/data/products';
import { motion } from 'framer-motion';

interface CategoryLayoutProps {
    categoryId: string;
    title: string;
    description: string;
}

export function CategoryLayout({ categoryId, title, description }: CategoryLayoutProps) {
    const categoryProducts = products.filter((p) => p.category === categoryId);

    return (
        <div className="bg-stone-50 min-h-screen pt-24 pb-16">
            <Container>
                <div className="mb-12 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold text-indigo-950 md:text-5xl font-serif mb-4"
                    >
                        {title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 max-w-2xl mx-auto"
                    >
                        {description}
                    </motion.p>
                </div>

                {categoryProducts.length > 0 ? (
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {categoryProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 group"
                            >
                                <div className="relative aspect-square bg-slate-200 overflow-hidden">
                                    {/* Placeholder for image */}
                                    <div className="absolute inset-0 bg-slate-200 group-hover:bg-slate-300 transition-colors" />
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-sm font-medium">
                                        {product.code}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-indigo-950 mb-2">{product.name}</h3>
                                    <p className="text-sm text-slate-500 line-clamp-3">{product.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-slate-500">No hay productos disponibles en esta categoría actualmente.</p>
                    </div>
                )}
            </Container>
        </div>
    );
}
