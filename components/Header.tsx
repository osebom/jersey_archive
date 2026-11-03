"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/lib/data";

type HeaderProps = {
  onPreview?: (preview: "national" | "season" | null) => void;
};

export default function Header({ onPreview }: HeaderProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!onPreview) return;

    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-hover-preview]"),
    );
    const onEnter = (event: Event) => {
      const value = (event.currentTarget as HTMLElement).dataset.hoverPreview;
      if (value === "national" || value === "season") onPreview(value);
    };
    const onLeave = () => onPreview(null);

    for (const node of nodes) {
      node.addEventListener("mouseenter", onEnter);
      node.addEventListener("mouseleave", onLeave);
    }

    return () => {
      for (const node of nodes) {
        node.removeEventListener("mouseenter", onEnter);
        node.removeEventListener("mouseleave", onLeave);
      }
    };
  }, [onPreview]);

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
              data-hover-preview={
                cat.slug === "national-teams"
                  ? "national"
                  : cat.slug === "2026-27"
                    ? "season"
                    : undefined
              }
              className={linkClass(isActive(cat.slug))}
              onMouseEnter={() => {
                if (cat.slug === "national-teams") onPreview?.("national");
                if (cat.slug === "2026-27") onPreview?.("season");
              }}
              onMouseLeave={() => onPreview?.(null)}
            >
              {cat.navTitle}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
