import { Container } from '@/components/ui/container';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 pt-16 text-slate-300">
      <Container className="grid gap-12 pb-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">CREA IMAGEN CHILE SPA</h3>
          <p className="text-sm leading-relaxed text-slate-400">
            Reconocimientos diseñados para transformar momentos en legado.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Navegación</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/productos" className="hover:text-white transition-colors">Productos</Link></li>
            <li><Link href="/galeria" className="hover:text-white transition-colors">Galería</Link></li>
            <li><Link href="/nosotros" className="hover:text-white transition-colors">Nosotros</Link></li>
            <li><Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Contacto</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Mail className="h-5 w-5 shrink-0 text-indigo-400" />
              <span>info@crea-imagen.cl</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="h-5 w-5 shrink-0 text-indigo-400" />
              <span>+56 9 9319 4568</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-indigo-400" />
              <span>Valparaíso, Chile</span>
            </li>
          </ul>
        </div>

        {/* International */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Presencia Regional</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>Argentina · Chile</li>
            <li>Colombia · México</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-slate-800 py-8 text-center text-xs">
        <Container className="space-y-2">
          <p className="text-slate-400">
            AV. ALEMANIA 5600, PISO 1, VALPARAÍSO, CHILE. - TELÉFONO +56 9 9319 4568
          </p>
          <p className="text-slate-500">
            Sitio desarrollado por <a href="https://arcadiaingenieria.cl" target="_blank" className="hover:text-slate-300 underline">Arcadia Ingeniería</a> | Copyright © {new Date().getFullYear()} | Todos los Derechos Reservados.
          </p>
        </Container>
      </div>
    </footer>
  );
}
