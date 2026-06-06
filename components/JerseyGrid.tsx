"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import type { Jersey } from "@/lib/data";
import JerseyCard from "./JerseyCard";
import JerseyModal from "./JerseyModal";

type JerseyGridProps = {
  jerseys: Jersey[];
  leading?: ReactNode;
};

export default function JerseyGrid({ jerseys, leading }: JerseyGridProps) {
  const [selectedJersey, setSelectedJersey] = useState<Jersey | null>(null);

  return (
    <>
      <div className="grid grid-cols-3 gap-x-2 gap-y-2">
        {leading}
        {jerseys.map((jersey) => (
          <JerseyCard
            key={jersey.id}
            jersey={jersey}
            onClick={() => setSelectedJersey(jersey)}
          />
        ))}
      </div>

      <JerseyModal
        jersey={selectedJersey}
        onClose={() => setSelectedJersey(null)}
      />
    </>
  );
}
