'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';

const steps = [
    {
        image: '/images/home/origen.webp', // Placeholder path
        title: 'ORIGEN',
        description: 'Todo legado comienza con un instante... y muchas veces, ese instante vive en una fotografía. En Crea Imagen transformamos esa imagen – cargada de historia, emoción y significado – en un diseño 3D único que da vida a un reconocimiento inolvidable.\n \nPorque una foto no es solo un recuerdo: es el origen de un legado que merece trascender, convertirse en símbolo y permanecer en el tiempo como testimonio vivo de aquello que se volvió eterno.',
    },
    {
        image: '/images/home/diseno.webp', // Placeholder path
        title: 'DISEÑO',
        description: 'La creación de diseños personalizados en 3D marca la diferencia entre un galardón tradicional y una pieza única que refleja identidad, prestigio y significado, desarrollada por nuestros diseñadores.',
    },
    {
        image: '/images/home/produccion.webp', // Placeholder path
        title: 'PRODUCCIÓN',
        description: 'Así nace algo más que una pieza: una experiencia que cobra vida al unir creatividad, precisión y tecnología láser. Cada detalle está pensado para emocionar, conectar y transformar un momento en un recuerdo eterno, dejando una huella imborrable con el sello único de Crea Imagen Chile SpA.',
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
                    <h2 className="text-4xl font-bold text-stone-900 mb-4">Nuestro Proceso de Creación</h2>
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
                            {/* Image Container */}
                            <div className="relative mb-8 h-[300px] w-full overflow-hidden rounded-2xl shadow-lg border border-stone-100">
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Step Number Badge */}
                            <div className="absolute top-[280px] bg-stone-900 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg border-4 border-white z-10 shadow-md">
                                {index + 1}
                            </div>

                            <h3 className="text-2xl font-bold text-stone-900 mb-4 mt-6 tracking-wide">{step.title}</h3>
                            <p className="text-stone-600 leading-relaxed max-w-sm mx-auto whitespace-pre-line">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
