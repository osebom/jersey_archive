import { notFound } from "next/navigation";
import Header from "@/components/Header";
import CategoryBrowse from "@/components/CategoryBrowse";
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
      <CategoryBrowse title={category.title} jerseys={categoryJerseys} />
    </div>
  );
}
