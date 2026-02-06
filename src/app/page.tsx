'use client';

import { Hero } from '@/components/home/hero';
import { Purpose } from '@/components/home/purpose';
import { ProductCategories } from '@/components/home/product-categories';
import { Technology } from '@/components/home/technology';
import { AboutPreview } from '@/components/home/about-preview';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Hero />
      <Purpose />
      <ProductCategories />
      
      {/* Catalog CTA Strip */}
      <section className="bg-zinc-100 py-16 text-center">
        <Container>
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-2xl font-bold text-zinc-900">¿Necesita ver todos nuestros diseños?</h2>
            <Button size="lg" className="gap-2">
              <Download className="h-4 w-4" />
              Descargar Catálogo Completo (PDF)
            </Button>
            <p className="text-sm text-zinc-500">Archivo PDF - 15MB</p>
          </div>
        </Container>
      </section>

      <Technology />
      <AboutPreview />
    </>
  );
}
