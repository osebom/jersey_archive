import Image from "next/image";
import type { Jersey } from "@/lib/data";

type JerseyCardProps = {
  jersey: Jersey;
  showName?: boolean | "desktop";
  dimmed?: boolean;
};

export default function JerseyCard({
  jersey,
  showName = true,
  dimmed = false,
}: JerseyCardProps) {
  const nameVisibility =
    showName === "desktop"
      ? "mt-3 hidden text-center text-[10px] uppercase tracking-[0.12em] lg:block"
      : showName
        ? "mt-3 text-center text-[10px] uppercase tracking-[0.12em]"
        : "";

  return (
    <a
      href={jersey.externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-jersey-category={
        jersey.categorySlug === "national-teams"
          ? "national"
          : jersey.categorySlug === "2026-27"
            ? "season"
            : jersey.categorySlug ?? ""
      }
      className={`group flex flex-col items-center transition-[filter,opacity] duration-200 ${
        dimmed ? "blur-[3px] opacity-35" : "blur-0 opacity-100"
      }`}
    >
      <div className="relative aspect-[3/4] w-full transition-transform duration-200 ease-out group-hover:-translate-y-1.5">
        <Image
          src={jersey.image}
          alt={jersey.name}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 30vw, (max-width: 1024px) 22vw, 18vw"
        />
      </div>
      {showName && (
        <span className={nameVisibility}>{jersey.name}</span>
      )}
    </a>
  );
}
