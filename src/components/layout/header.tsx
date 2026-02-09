'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'LLAVEROS', href: '/llaveros' },
  { label: 'PISAPAPELES', href: '/pisapapeles' },
  { label: 'GALVANOS Y GALARDONES', href: '/galvanos-y-galardones' },
  { label: 'TESTIMONIALES', href: '/testimoniales' },
  { label: 'CONTACTO', href: '/contacto' },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-16 w-64">
            <Image
              src="/logo.png"
              alt="Crea Imagen Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex md:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-indigo-600',
                pathname === item.href ? 'text-indigo-950 font-semibold' : 'text-slate-500'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>



        {/* Mobile Toggle */}
        <button
          className="text-slate-900 md:hidden"
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
            className="absolute left-0 top-20 w-full border-b border-slate-200 bg-white p-4 shadow-xl md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-lg font-medium transition-colors hover:text-indigo-950',
                    pathname === item.href ? 'text-indigo-950' : 'text-slate-500'
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
