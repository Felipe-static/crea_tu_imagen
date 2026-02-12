'use client';

import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';

export function PurposeSection() {
    return (
        <section className="bg-stone-50 py-14 text-center">
            <Container>
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
