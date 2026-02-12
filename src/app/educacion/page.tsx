import { SimpleGallery } from '@/components/gallery/simple-gallery';
import { Container } from '@/components/ui/container';
import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';

export const metadata: Metadata = {
    title: 'Educación | Crea Imagen',
    description: 'Distinciones académicas para licenciaturas y titulaciones.',
};

export default function EducacionPage() {
    const directoryPath = path.join(process.cwd(), 'public/images/llaveros');
    let images: string[] = [];

    try {
        const files = fs.readdirSync(directoryPath);
        images = files
            .filter((file) => /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(file))
            .map((file) => `/images/llaveros/${file}`);
    } catch (error) {
        console.error('Error reading images directory:', error);
        // Directory might not exist or is empty
    }

    return (
        <div className="min-h-screen bg-stone-50 pt-24 pb-16">
            <Container>
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-stone-900 md:text-5xl mb-4 uppercase tracking-wide">
                        EDUCACIÓN
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
