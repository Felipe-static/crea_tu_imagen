import { SimpleGallery } from '@/components/gallery/simple-gallery';
import { Container } from '@/components/ui/container';
import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';

export const metadata: Metadata = {
    title: 'Pisapapeles de Cristal | Crea Imagen',
    description: 'Funcionalidad y arte en cristal óptico.',
};

export default function PisapapelesPage() {
    const directoryPath = path.join(process.cwd(), 'public/images/pisapapeles');
    let images: string[] = [];

    try {
        const files = fs.readdirSync(directoryPath);
        images = files
            .filter((file) => /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(file))
            .map((file) => `/images/pisapapeles/${file}`);
    } catch (error) {
        console.error('Error reading images directory:', error);
    }

    return (
        <div className="min-h-screen bg-stone-50 pt-24 pb-16">
            <Container>
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-stone-900 md:text-5xl mb-4 uppercase tracking-wide">
                        PISAPAPELES DE CRISTAL
                    </h1>
                    <div className="h-1 w-24 bg-amber-700 mx-auto rounded-full opacity-60 mt-4" />
                    <p className="text-stone-600 max-w-3xl mx-auto mt-6 text-lg leading-relaxed text-justify">
                        “Un pisa papel de cristal con grabado interno en 3D que transforma un reconocimiento en una pieza funcional y elegante para el día a día. Su diseño sin base resalta la pureza del cristal y la profundidad de la imagen, aportando modernidad y ligereza visual. Más que decorativo, combina utilidad práctica con distinción y presencia memorable.”
                    </p>
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
