'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Productos', href: '/productos' },
  { label: 'Galería', href: '/galeria' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-stone-100">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
           {/* Logo placeholder - lighter theme */}
           <div className="h-8 w-8 bg-stone-900 rounded-sm" />
           <span className="text-xl font-bold tracking-tighter text-stone-900">CREA IMAGEN</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex md:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-amber-700',
                pathname === item.href ? 'text-stone-900 font-semibold' : 'text-stone-500'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Link href="/contacto">
            <Button variant="primary" className="bg-stone-900 text-white hover:bg-stone-800">
              Cotizar
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="text-stone-900 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-0 top-20 w-full border-b border-stone-200 bg-white p-4 shadow-xl md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-lg font-medium transition-colors hover:text-stone-900',
                    pathname === item.href ? 'text-stone-900' : 'text-stone-500'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contacto" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-stone-900 text-white">Cotizar</Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
