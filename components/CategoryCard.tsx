import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/lib/data";

type CategoryCardProps = {
  category: Category;
};

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="group flex flex-col items-center gap-3 py-4 transition-opacity hover:opacity-70"
    >
      <div className="flex aspect-[3/4] w-full items-center justify-center gap-0.5 sm:gap-1">
        {category.previewImages.map((src, i) => (
          <div
            key={`${category.slug}-${i}`}
            className="relative aspect-[3/4] w-[31%]"
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-contain"
              sizes="(max-width: 640px) 18vw, 90px"
            />
          </div>
        ))}
      </div>
      <span className="text-center text-[10px] uppercase tracking-[0.12em] sm:text-xs">
        {category.title}
      </span>
    </Link>
  );
}
