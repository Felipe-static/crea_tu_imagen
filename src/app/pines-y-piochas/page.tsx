import { SimpleGallery } from '@/components/gallery/simple-gallery';
import { Container } from '@/components/ui/container';
import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';

export const metadata: Metadata = {
    title: 'Piochas y Condecoraciones de Metal | Crea Imagen',
    description: 'Insignias y piochas metálicas de alta calidad para eventos y distinciones.',
};

export default function PinesYPiochasPage() {
    const directoryPath = path.join(process.cwd(), 'public/images/pines-y-piochas');
    let images: string[] = [];

    try {
        const files = fs.readdirSync(directoryPath);
        images = files
            .filter((file) => /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(file))
            .map((file) => `/images/pines-y-piochas/${file}`);
    } catch (error) {
        console.error('Error reading images directory:', error);
    }

    return (
        <div className="min-h-screen bg-stone-50 pt-24 pb-16">
            <Container>
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-stone-900 md:text-5xl mb-4 uppercase tracking-wide">
                        PIOCHAS Y CONDECORACIONES DE METAL
                    </h1>
                    <div className="h-1 w-24 bg-amber-700 mx-auto rounded-full opacity-60 mt-4" />
                </div>

                {images.length > 0 ? (
                    <SimpleGallery images={images} />
                ) : (
                    <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-stone-100">
                        <p className="text-stone-500 text-lg">No hay imágenes disponibles en este momento.</p>
                        <p className="text-sm text-stone-400 mt-2">Pronto actualizaremos nuestra galería.</p>
                    </div>
                )}
            </Container>
        </div>
    );
}
