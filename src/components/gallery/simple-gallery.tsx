'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface SimpleGalleryProps {
    images: string[];
}

export function SimpleGallery({ images }: SimpleGalleryProps) {
    const [index, setIndex] = useState<number>(-1);

    const currentImage = index >= 0 ? images[index] : null;

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((src, i) => (
                    <motion.div
                        key={src}
                        layoutId={`image-${src}`}
                        onClick={() => setIndex(i)}
                        whileHover={{ scale: 1.02 }}
                        className="relative aspect-square cursor-pointer overflow-hidden rounded-xl bg-stone-100 group shadow-sm hover:shadow-md transition-shadow"
                    >
                        <Image
                            src={src}
                            alt={`Imagen ${i + 1}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <ZoomIn className="text-white w-8 h-8 drop-shadow-md" />
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {index >= 0 && currentImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
                        onClick={() => setIndex(-1)}
                    >
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-4 top-4 text-white/70 hover:bg-white/10 hover:text-white"
                            onClick={() => setIndex(-1)}
                        >
                            <X className="h-6 w-6" />
                        </Button>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:bg-white/10 hover:text-white hidden md:flex h-12 w-12 rounded-full"
                            onClick={prevImage}
                        >
                            <ChevronLeft className="h-8 w-8" />
                        </Button>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:bg-white/10 hover:text-white hidden md:flex h-12 w-12 rounded-full"
                            onClick={nextImage}
                        >
                            <ChevronRight className="h-8 w-8" />
                        </Button>

                        <motion.div
                            layoutId={`image-${currentImage}`}
                            className="relative h-full w-full max-h-[85vh] max-w-5xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={currentImage}
                                alt="Vista detallada"
                                fill
                                className="object-contain"
                                priority
                                sizes="100vw"
                            />
                        </motion.div>

                        {/* Mobile Navigation Overlay */}
                        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-8 md:hidden" onClick={(e) => e.stopPropagation()}>
                            <Button variant="outline" size="icon" className="rounded-full bg-white/10 border-white/20 text-white backdrop-blur-md" onClick={prevImage}>
                                <ChevronLeft />
                            </Button>
                            <Button variant="outline" size="icon" className="rounded-full bg-white/10 border-white/20 text-white backdrop-blur-md" onClick={nextImage}>
                                <ChevronRight />
                            </Button>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
