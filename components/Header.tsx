"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();

  const isActive = (slug: string) => {
    if (slug === "home") return pathname === "/";
    return pathname === `/category/${slug}`;
  };

  const linkClass = (active: boolean) =>
    `text-[10px] uppercase tracking-[0.15em] transition-colors sm:text-xs ${
      active ? "text-black" : "text-[#b3b3b3] hover:text-black"
    }`;

  return (
    <header className="sticky top-0 z-40 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-8">
        <Link href="/" className={linkClass(isActive("home"))}>
          HOME
        </Link>

        <div className="flex items-center gap-x-4 sm:gap-x-8">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className={linkClass(isActive(cat.slug))}
            >
              {cat.navTitle}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
