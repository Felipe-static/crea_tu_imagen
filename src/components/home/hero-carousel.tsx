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
        title: 'TESTIMONIALES DE CRISTAL',
        subtitle: '“Los grandes logros merecen algo más que un simple galardón. El grabado 3D encapsula la esencia del momento dentro del cristal, generando profundidad, exclusividad y un impacto emocional inmediato. No es solo un reconocimiento... es un legado visible desde cada ángulo.',
        buttonText: 'Ver Testimoniales',
        image: '/testimoniales.jpg',
        href: '/testimoniales',
    },
    {
        title: 'GALVANOS Y GALARDONES DE CRISTAL',
        subtitle: 'El galvano de cristal con grabado interno en 2D transforma un reconocimiento en una pieza elegante y memorable, combinando transparencia y precisión con un diseño contemporáneo. El soporte en color aporta identidad visual y personalidad, mientras el grabado superficial en color añade contraste y un estilo moderno. Esta integración de elementos crea un equilibrio entre elegancia clásica e innovación actual. Una propuesta ideal para quienes buscan destacar con distinción y sofisticación.',
        buttonText: 'Ver Galvanos y Galardones de Cristal',
        image: '/galvanos.jpg',
        href: '/galvanos-y-galardones',
    },
    {
        title: 'PISAPAPELES DE CRISTAL',
        subtitle: 'Un pisa papel de cristal con grabado interno en 3D que transforma un reconocimiento en una pieza funcional y elegante para el día a día. Su diseño sin base resalta la pureza del cristal y la profundidad de la imagen, aportando modernidad y ligereza visual. Más que decorativo, combina utilidad práctica con distinción y presencia memorable.',
        buttonText: 'Ver PISAPAPELES de Cristal',
        image: '/pisapapeles.jpg',
        href: '/pisapapeles',
    },
    {
        title: 'LLAVEROS DE CRISTAL',
        subtitle: 'Un llavero de cristal que transforma una imagen especial en un recuerdo eterno gracias al grabado interno. En 2D destaca por su elegancia y precisión, mientras en 3D aporta profundidad y vida. Más que un accesorio, es un legado emocional que acompaña cada momento.',
        buttonText: 'Ver Llaveros de Cristal',
        image: '/llaveros.jpg',
        href: '/llaveros',
    },
    {
        title: 'RECONOCIMIENTOS ESPECIALES',
        subtitle: 'Reconocimientos de nivel élite que combinan cristal y madera, creando piezas únicas donde diseño y simbolismo se unen. La pureza del cristal y la calidez de la madera logran un equilibrio entre innovación y tradición. Cada galardón destaca logros excepcionales con presencia y exclusividad. Más que un reconocimiento, son obras sofisticadas de alto valor estético.',
        buttonText: 'Ver Reconocimientos Especiales',
        image: '/pisapapeles.jpg',
        href: '/reconocimientos-especiales',
    },
    {
        title: 'MEDALLAS Y MONEDAS DE METAL',
        subtitle: 'Cuando un reconocimiento debe reflejar verdadera excelencia, el metal es el aliado perfecto. Medallas y monedas con acabados impecables y grabados precisos transmiten prestigio, autoridad y durabilidad. Diseñadas para organizaciones que buscan destacar logros con solidez, estas piezas combinan tradición, valor estético y presencia, convirtiéndose en símbolos tangibles de liderazgo y mérito.',
        buttonText: 'Ver Medallas y Monedas',
        image: '/medallas.jpg',
        href: '/medallas-y-monedas',
    },
    {
        title: 'LLAVEROS DE METAL',
        subtitle: 'Todo comienza con un detalle que acompaña cada día. Este llavero de metal nace de la idea de transformar un objeto cotidiano en un símbolo de valor y significado. Sus finas terminaciones reflejan dedicación y cuidado en cada línea, convirtiéndolo en un recuerdo que no solo se lleva, sino que se siente. Más que un accesorio, es una pieza que representa identidad, estilo y momentos que merecen permanecer.',
        buttonText: 'Ver Llaveros de Metal',
        image: '/llaveros.jpg',
        href: '/llaveros-de-metal',
    },
    {
        title: 'PIOCHAS Y CONDECORACIONES DE METAL',
        subtitle: 'Cada piocha y condecoración de metal nace de una historia de valor y compromiso. Más que un símbolo, es un recuerdo tangible de momentos que definen a quienes lo portan. La solidez del metal y los detalles cuidadosamente grabados transmiten honor, tradición y orgullo, convirtiéndolo en una pieza que se lleva en el corazón y permanece como legado para quienes lo reciben.',
        buttonText: 'Ver Piochas y Condecoraciones',
        image: '/pines.jpg',
        href: '/pines-y-piochas',
    },
    {
        title: 'EDUCACIÓN',
        subtitle: 'Algunos logros estudiantiles marcan un antes y un después en la vida de los alumnos. Estos merecen ser celebrados con reconocimientos que combinan cristal, madera y metal, reflejando esfuerzo, constancia y dedicación. Cada pieza transforma un logro académico en una historia tangible y emotiva. Más que un premio, es un legado que perdura y convierte cada ceremonia educativa en un recuerdo eterno.',
        buttonText: 'Ver Educación',
        image: '/llaveros.jpg',
        href: '/educacion',
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
        <div className="relative min-h-[510px] h-[64vh] w-full overflow-hidden bg-black flex flex-col lg:flex-row">

            {/* Scroll Down Indicator */}


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

                        {/* Dark Overlay Gradient - Stronger for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent lg:via-black/60" />

                        {/* Content Container */}
                        <div className="absolute inset-0 flex items-center p-8 lg:p-16">
                            <div className="max-w-2xl space-y-6">
                                <motion.div
                                    initial={{ x: -30, opacity: 0 }}
                                    animate={{ x: index === current ? 0 : -30, opacity: index === current ? 1 : 0 }}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                    className="space-y-3"
                                >
                                    <h2 className="text-2xl font-bold text-white md:text-4xl lg:text-5xl leading-tight">
                                        {slide.title}
                                    </h2>
                                    <p className="text-sm text-justify text-slate-300 md:text-base lg:text-lg font-light leading-relaxed max-w-xl">
                                        {slide.subtitle}
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: index === current ? 0 : 20, opacity: index === current ? 1 : 0 }}
                                    transition={{ delay: 0.5, duration: 0.6 }}
                                >
                                    <Link href={slide.href}>
                                        <Button size="lg" className="rounded-full bg-indigo-900 hover:bg-indigo-800 text-white border-none px-6 py-5 md:px-8 md:py-6 text-base md:text-lg group font-medium tracking-wide">
                                            {slide.buttonText}
                                            <ChevronRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
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
                <div className="absolute top-10 left-8 lg:left-16 flex gap-3 z-20">
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
