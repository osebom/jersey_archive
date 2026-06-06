import Image from "next/image";
import type { Jersey } from "@/lib/data";

type JerseyCardProps = {
  jersey: Jersey;
};

export default function JerseyCard({ jersey }: JerseyCardProps) {
  return (
    <a
      href={jersey.externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-3 py-4 transition-opacity hover:opacity-70"
    >
      <div className="relative aspect-[3/4] w-full max-w-[140px]">
        <Image
          src={jersey.image}
          alt={jersey.name}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 30vw, 140px"
        />
      </div>
      <span className="text-center text-[10px] uppercase tracking-[0.12em] sm:text-xs">
        {jersey.name}
      </span>
    </a>
  );
}
