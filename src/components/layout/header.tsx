'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Container } from '@/components/ui/container';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'LLAVEROS DE CRISTAL', href: '/llaveros' },
  { label: 'PISAPAPELES DE CRISTAL', href: '/pisapapeles' },
  { label: 'GALVANOS Y GALARDONES DE CRISTAL', href: '/galvanos-y-galardones' },
  { label: 'MEDALLAS Y MONEDAS DE METAL', href: '/medallas-y-monedas' },
  { label: 'PINES Y PIOCHAS METÁLICAS', href: '/pines-y-piochas' },
  { label: 'TESTIMONIALES', href: '/testimoniales' },
  { label: 'CONTACTO', href: '/contacto' },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (

    <header className="fixed top-0 z-50 w-full transition-all duration-300 bg-white border-b border-slate-200 shadow-sm font-sans">
      <Container className="flex h-24 items-center justify-between gap-4">
        {/* Logo Section */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <div className="relative h-20 w-64 md:w-80 overflow-hidden transition-all">
            <Image
              src="/logo.png"
              alt="Crea Imagen Logo"
              fill
              className="object-contain"
              style={{ objectPosition: 'left center' }}
              priority
            />
          </div>
        </Link>

        {/* Desktop/Widescreen Menu */}
        {/* Usamos 'xl' para que en laptops pequeñas (menos de 1280px) aparezca el menú hamburguesa, 
            ya que los textos son muy largos para caber en una sola fila. */}
        <nav className="hidden xl:flex items-center justify-start gap-2 flex-1 pl-12">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'group relative flex items-center justify-center h-full px-3 py-2 rounded-md transition-colors',
                pathname === item.href ? 'text-indigo-950' : 'text-slate-500 hover:bg-slate-50'
              )}
            >
              <span className={cn(
                "text-xs font-bold tracking-wide uppercase text-center leading-tight max-w-[120px] block transition-colors",
                pathname === item.href ? "text-indigo-950" : "text-slate-600 group-hover:text-indigo-700"
              )}>
                {item.label}
              </span>

              {/* Active Indicator (Bottom Line) */}
              {pathname === item.href && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-900 mx-3"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>



        {/* Mobile Toggle */}
        <button
          className="xl:hidden p-2 text-slate-800 hover:bg-slate-100 rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </Container>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden overflow-hidden bg-white border-b border-slate-200 shadow-xl"
          >
            <nav className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-sm font-bold uppercase tracking-wide px-4 py-3 rounded-lg transition-all',
                    pathname === item.href
                      ? 'bg-indigo-50 text-indigo-950 border-l-4 border-indigo-900'
                      : 'text-slate-500 hover:bg-slate-50 hover:text-indigo-700'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );

}
