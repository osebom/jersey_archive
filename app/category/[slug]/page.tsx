import { notFound } from "next/navigation";
import Header from "@/components/Header";
import JerseyGrid from "@/components/JerseyGrid";
import {
  categories,
  getCategoryBySlug,
  getJerseysByCategory,
} from "@/lib/data";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryJerseys = getJerseysByCategory(slug);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-4 sm:px-6">
        <h1 className="mb-8 text-center text-[10px] uppercase tracking-[0.15em] sm:text-xs">
          {category.title}
        </h1>

        <JerseyGrid jerseys={categoryJerseys} />
      </main>
    </div>
  );
}
