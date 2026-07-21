import Image from "next/image";
import type { Jersey } from "@/lib/data";

type JerseyCardProps = {
  jersey: Jersey;
  showName?: boolean;
};

export default function JerseyCard({
  jersey,
  showName = true,
}: JerseyCardProps) {
  return (
    <a
      href={jersey.externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center"
    >
      <div className="relative aspect-[3/4] w-full transition-transform duration-200 ease-out group-hover:-translate-y-1.5">
        <Image
          src={jersey.image}
          alt={jersey.name}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 30vw, (max-width: 1024px) 20vw, 12vw"
        />
      </div>
      {showName && (
        <span className="mt-3 text-center text-[10px] uppercase tracking-[0.12em] sm:text-xs">
          {jersey.name}
        </span>
      )}
    </a>
  );
}
