'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const slides = [
    {
        title: 'LLAVEROS DE CRISTAL',
        subtitle: 'Cristales artísticos y grabados en 3D alta calidad y precisión.',
        buttonText: 'Ver Llaveros de Cristal',
        image: '/llaveros.jpg',
        href: '/llaveros',
    },
    {
        title: 'PISAPAPELES DE CRISTAL',
        subtitle: 'Trofeos y regalos a la medida únicos y personalizados para su empresa.',
        buttonText: 'Ver Pisapapeles de Cristal',
        image: '/pisapapeles.jpg',
        href: '/pisapapeles',
    },
    {
        title: 'GALVANOS Y GALARDONES DE CRISTAL',
        subtitle: 'Variedad de diseños, el único límite es la imaginación de nuestros clientes.',
        buttonText: 'Ver Galvanos y Galardones de Cristal',
        image: '/galvanos.jpg',
        href: '/galvanos-y-galardones',
    },
    {
        title: 'MEDALLAS Y MONEDAS DE METAL',
        subtitle: 'Símbolos de honor en metal fundido y acabado premium.',
        buttonText: 'Ver Medallas y Monedas',
        image: '/medallas.jpg',
        href: '/medallas-y-monedas',
    },
    {
        title: 'EDUCACIÓN',
        subtitle: 'Distinciones académicas para licenciaturas y titulaciones.',
        buttonText: 'Ver Educación',
        image: '/llaveros.jpg',
        href: '/educacion',
    },
    {
        title: 'RECONOCIMIENTOS ESPECIALES',
        subtitle: 'Diseños a medida para logros extraordinarios.',
        buttonText: 'Ver Reconocimientos Especiales',
        image: '/pisapapeles.jpg',
        href: '/reconocimientos-especiales',
    },
    {
        title: 'PINES Y PIOCHAS METÁLICAS',
        subtitle: 'Insignias y piochas metálicas de alta calidad para eventos y distinciones.',
        buttonText: 'Ver Pines y Piochas',
        image: '/pines.jpg',
        href: '/pines-y-piochas',
    },
    {
        title: 'TESTIMONIALES',
        subtitle: 'Cristalizamos sus proyectos especiales. Una idea la podemos transformar en un delicado obsequio.',
        buttonText: 'Ver Testimoniales',
        image: '/testimoniales.jpg',
        href: '/testimoniales',
    },
];

export function HeroCarousel() {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
    const prev = () => setCurrent((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

    useEffect(() => {
        const timer = setInterval(() => {
            next();
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-[60vh] w-full overflow-hidden bg-black flex flex-col lg:flex-row">

            {/* Left Side - Fixed Isotype */}
            <div className="relative z-10 flex h-1/3 w-full flex-col items-center justify-center bg-black p-8 lg:h-full lg:w-[35%]">
                <div className="relative h-48 w-48 lg:h-[40rem] lg:w-[40rem] animate-pulse">
                    <Image
                        src="/isotype.png"
                        alt="Crea Imagen Isotipo"
                        fill
                        className="object-contain opacity-90"
                        priority
                    />
                </div>
            </div>

            {/* Right Side - Carousel */}
            <div className="relative flex-1 h-2/3 lg:h-full w-full overflow-hidden">
                {slides.map((slide, index) => (
                    <motion.div
                        key={slide.title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: index === current ? 1 : 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 h-full w-full"
                        style={{ pointerEvents: index === current ? 'auto' : 'none' }}
                    >
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-no-repeat transition-transform duration-[4000ms]"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                                backgroundPosition: 'center right',
                                backgroundSize: 'contain',
                                transform: index === current ? 'scale(1.05)' : 'scale(1)'
                            }}
                        />

                        {/* Dark Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />

                        {/* Content Container */}
                        <div className="absolute inset-0 flex items-center p-8 lg:p-16">
                            <div className="max-w-2xl space-y-6">
                                <motion.div
                                    initial={{ x: -30, opacity: 0 }}
                                    animate={{ x: index === current ? 0 : -30, opacity: index === current ? 1 : 0 }}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                >
                                    <h2 className="text-3xl font-bold text-white md:text-5xl lg:text-6xl leading-tight">
                                        {slide.title}
                                    </h2>
                                    <p className="mt-4 text-lg text-slate-300 md:text-xl font-light">
                                        {slide.subtitle}
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: index === current ? 0 : 20, opacity: index === current ? 1 : 0 }}
                                    transition={{ delay: 0.5, duration: 0.6 }}
                                >
                                    <Link href={slide.href}>
                                        <Button size="lg" className="rounded-full bg-indigo-900 hover:bg-indigo-800 text-white border-none px-8 py-6 text-lg group font-medium tracking-wide">
                                            {slide.buttonText}
                                            <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                        </Button>
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                ))}

                {/* Navigation Controls (Right Side Only) */}
                <div className="absolute bottom-8 right-8 flex gap-4 z-20">
                    <button
                        onClick={prev}
                        className="rounded-full bg-white/10 p-4 text-white backdrop-blur-md transition-colors hover:bg-white/20 border border-white/10 hover:border-white/30"
                    >
                        <ArrowLeft className="h-6 w-6" />
                    </button>
                    <button
                        onClick={next}
                        className="rounded-full bg-white/10 p-4 text-white backdrop-blur-md transition-colors hover:bg-white/20 border border-white/10 hover:border-white/30"
                    >
                        <ArrowRight className="h-6 w-6" />
                    </button>
                </div>

                {/* Progress Indicators */}
                <div className="absolute bottom-10 left-8 lg:left-16 flex gap-3 z-20">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrent(idx)}
                            className={cn(
                                "h-1.5 rounded-full transition-all duration-300",
                                idx === current ? "bg-indigo-500 w-12" : "bg-white/20 w-8 hover:bg-white/40"
                            )}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
