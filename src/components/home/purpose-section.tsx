'use client';
// Force rebuild 2

import { useRef } from 'react';
import { Container } from '@/components/ui/container';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export function PurposeSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const opacityFade = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);

    return (
        <section ref={sectionRef} className="relative bg-stone-50 pt-14 pb-0 text-center">
            <Container>
                <motion.div
                    style={{ opacity: opacityFade }}
                    className="absolute bottom-20 left-8 lg:left-12 z-30 pointer-events-none"
                >
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: [0.7, 1, 0.7], y: [0, 15, 0] }}
                        transition={{
                            opacity: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                            y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="flex flex-col items-center gap-2"
                    >
                        <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-indigo-900">Más Información</span>
                        <ArrowDown className="w-6 h-6 text-indigo-900" />
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto max-w-4xl space-y-6"
                >
                    <h2 className="text-xl font-medium leading-relaxed text-stone-800 md:text-2xl italic">
                        "El propósito de Crea Imagen es que nuestros clientes reconozcan que el símbolo en cristal no es sólo un momento, sino que un futuro brillante. Déjese llevar por un producto en que la elegancia y distinción brillan con luz propia."
                    </h2>
                    <div className="h-1 w-24 bg-amber-700 mx-auto rounded-full opacity-60" />
                </motion.div>
            </Container>
        </section>
    );
}
