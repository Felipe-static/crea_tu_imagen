'use client';

import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function AboutPreview() {
  return (
    <section className="bg-white py-24 text-zinc-950">
      <Container>
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl font-bold md:text-4xl">Historias de Calidad Humana</h2>
          <p className="text-lg leading-relaxed text-zinc-600">
            Cada vez que entregamos una pieza, sabemos que será sostenida por manos temblorosas de emoción. Por eso, nuestra obsesión por la calidad no es técnica, es personal. Entendemos que estamos fabricando el símbolo físico del orgullo de una persona.
          </p>
          
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 pt-8">
            {['Calidad', 'Precisión', 'Elegancia', 'Tecnología'].map((item) => (
              <div key={item} className="rounded-lg border border-zinc-200 p-6 text-center shadow-sm">
                <span className="font-semibold text-zinc-900">{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <Link href="/nosotros">
              <Button variant="outline" className="border-zinc-950 text-zinc-950 hover:bg-zinc-100">
                Conozca nuestra historia
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
