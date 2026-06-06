"use client";

import Image from "next/image";
import { useEffect } from "react";
import type { Jersey } from "@/lib/data";

type JerseyModalProps = {
  jersey: Jersey | null;
  onClose: () => void;
};

export default function JerseyModal({ jersey, onClose }: JerseyModalProps) {
  useEffect(() => {
    if (!jersey) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [jersey, onClose]);

  if (!jersey) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 px-6 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="jersey-modal-title"
    >
      <div
        className="relative flex w-full max-w-sm flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-2 right-0 text-lg leading-none text-[#b3b3b3] transition-colors hover:text-black"
          aria-label="Close"
        >
          ×
        </button>

        <div className="relative mb-8 aspect-[3/4] w-full max-w-[280px]">
          <Image
            src={jersey.image}
            alt={jersey.name}
            fill
            className="object-contain"
            sizes="280px"
            priority
          />
        </div>

        <div className="mb-8 flex flex-col items-center gap-1 text-center">
          <p id="jersey-modal-title" className="text-xs uppercase tracking-[0.15em]">
            {jersey.name}
          </p>
          <p className="text-[10px] uppercase tracking-[0.1em] text-[#b3b3b3]">
            {jersey.code}
          </p>
        </div>

        <a
          href={jersey.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full border border-black py-3 text-center text-[10px] tracking-[0.2em] transition-colors hover:bg-black hover:text-white"
        >
          VIEW
        </a>
      </div>
    </div>
  );
}
