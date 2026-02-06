import { Container } from '@/components/ui/container';
import { ProductGrid } from '@/components/products/product-grid';
import { categories, products } from '@/data/products';
import { CategoryId } from '@/types';
import { notFound } from 'next/navigation';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export function generateStaticParams() {
  return categories.map((category) => ({
    category: category.id,
  }));
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find((c) => c.id === params.category);

  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter((p) => p.category === category.id);

  return (
    <div className="min-h-screen bg-zinc-950 py-24">
      <Container>
        <div className="mb-16">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">{category.name}</h1>
          <p className="max-w-3xl text-lg text-zinc-400">
            {category.description}
          </p>
        </div>

        <ProductGrid products={categoryProducts} />
      </Container>
    </div>
  );
}
