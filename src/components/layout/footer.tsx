import { Container } from '@/components/ui/container';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-100 pt-16 text-stone-600">
      <Container className="grid gap-12 pb-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-stone-900">CREA IMAGEN</h3>
          <p className="text-sm leading-relaxed">
            Reconocimientos en cristal 3D y metal de alta distinción. 
            Calidad, precisión y elegancia para momentos inolvidables.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-stone-900">Navegación</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/productos" className="hover:text-stone-900">Productos</Link></li>
            <li><Link href="/galeria" className="hover:text-stone-900">Galería</Link></li>
            <li><Link href="/nosotros" className="hover:text-stone-900">Nosotros</Link></li>
            <li><Link href="/contacto" className="hover:text-stone-900">Contacto</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-stone-900">Contacto</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Mail className="h-5 w-5 shrink-0 text-amber-700" />
              <span>info@crea-imagen.cl</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="h-5 w-5 shrink-0 text-amber-700" />
              <span>+56 9 1234 5678</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-amber-700" />
              <span>Santiago, Chile</span>
            </li>
          </ul>
        </div>

        {/* International */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-stone-900">Presencia Regional</h4>
          <ul className="space-y-2 text-sm">
            <li>Chile · Argentina · Brasil</li>
            <li>Colombia · México</li>
          </ul>
        </div>
      </Container>
      
      <div className="border-t border-stone-200 py-8 text-center text-xs">
        <Container>
          &copy; {new Date().getFullYear()} Crea Imagen. Todos los derechos reservados.
        </Container>
      </div>
    </footer>
  );
}
