import { Container } from '@/components/ui/container';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 pt-16 text-slate-600">
      <Container className="grid gap-12 pb-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-indigo-950">CREA IMAGEN</h3>
          <p className="text-sm leading-relaxed">
            Reconocimientos diseñados para transformar momentos en legado.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-indigo-950">Navegación</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/productos" className="hover:text-indigo-900">Productos</Link></li>
            <li><Link href="/galeria" className="hover:text-indigo-900">Galería</Link></li>
            <li><Link href="/nosotros" className="hover:text-indigo-900">Nosotros</Link></li>
            <li><Link href="/contacto" className="hover:text-indigo-900">Contacto</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-indigo-950">Contacto</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Mail className="h-5 w-5 shrink-0 text-indigo-600" />
              <span>info@crea-imagen.cl</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="h-5 w-5 shrink-0 text-indigo-600" />
              <span>+56 9 93194568</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-indigo-600" />
              <span>Santiago, Chile</span>
            </li>
          </ul>
        </div>

        {/* International */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-indigo-950">Presencia Regional</h4>
          <ul className="space-y-2 text-sm">
            <li>Argentina · Chile</li>
            <li>Colombia · México</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-slate-200 py-8 text-center text-xs">
        <Container className="space-y-2">
          <p>
            AV. ALEMANIA 5600, PISO 1, VALPARAÍSO, CHILE. - TELÉFONO +56 9 9319 4568
          </p>
          <p className="text-slate-400">
            Sitio desarrollado por <a href="https://arcadiaingenieria.cl" target="_blank" className="hover:text-slate-600 underline">Arcadia Ingeniería</a> | Copyright © {new Date().getFullYear()} | Todos los Derechos Reservados.
          </p>
        </Container>
      </div>
    </footer>
  );
}
