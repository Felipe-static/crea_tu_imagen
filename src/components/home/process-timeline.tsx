'use client';

import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';

const steps = [
    {
        image: '/images/process/concepto.jpg', // Placeholder path
        title: 'CONCEPTO',
        description: 'A partir de una imagen podemos desarrollar un diseño en 3D que quedará plasmado en un recuerdo perenne en un bloque de cristal.',
    },
    {
        image: '/images/process/diseno.jpg', // Placeholder path
        title: 'DISEÑO',
        description: 'La habilidad para crear diseños a la medida en formatos 3D hace la diferencia del galardón común con los propuestos por Crea Imagen.',
    },
    {
        image: '/images/process/produccion.jpg', // Placeholder path
        title: 'PRODUCCIÓN',
        description: 'Así, la combinación de un diseño creativo y el empleo adecuado de la tecnología láser dan como resultado una pieza única de excelente calidad y transparencia.',
    },
];

export function ProcessTimeline() {
    return (
        <section className="bg-white py-24 md:py-32">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl font-bold font-serif text-stone-900 mb-4">Nuestro Proceso de Creación</h2>
                    <p className="text-lg text-stone-600">Desde la idea hasta la excelencia tangible.</p>
                </motion.div>

                <div className="grid gap-12 md:grid-cols-3 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[150px] left-0 right-0 h-0.5 bg-stone-200 -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="group relative flex flex-col items-center text-center bg-white"
                        >
                            {/* Image Circle */}
                            <div className="relative mb-8 h-[300px] w-full overflow-hidden rounded-2xl shadow-lg border border-stone-100">
                                {/* Placeholder for real images */}
                                <div className="absolute inset-0 bg-stone-200 group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 flex items-center justify-center text-stone-400 font-medium">
                                    [IMAGEN {step.title}]
                                </div>
                            </div>

                            {/* Step Number Badge */}
                            <div className="absolute top-[280px] bg-stone-900 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg border-4 border-white z-10 shadow-md">
                                {index + 1}
                            </div>

                            <h3 className="text-2xl font-bold text-stone-900 mb-4 mt-6 tracking-wide">{step.title}</h3>
                            <p className="text-stone-600 leading-relaxed max-w-sm mx-auto">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
