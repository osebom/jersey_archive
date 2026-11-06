import { notFound } from "next/navigation";
import Header from "@/components/Header";
import CategoryBrowse from "@/components/CategoryBrowse";
import {
  categories,
  getCategoryBySlug,
  getJerseysByCategory,
} from "@/lib/data";
import { EMPTY_FILTERS, type FilterKey } from "@/lib/filters";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

const BASE_FILTERS: FilterKey[] = ["type", "brand", "team"];
const CLUB_FILTERS: FilterKey[] = ["type", "brand", "team", "league", "season"];

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryJerseys = getJerseysByCategory(slug);
  const isClubJerseys = slug === "club-jerseys";
  const filterKeys = isClubJerseys ? CLUB_FILTERS : BASE_FILTERS;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <CategoryBrowse
        title={category.title}
        jerseys={categoryJerseys}
        filterKeys={filterKeys}
        defaultFilters={
          isClubJerseys ? { ...EMPTY_FILTERS, season: ["26/27"] } : undefined
        }
      />
    </div>
  );
}
