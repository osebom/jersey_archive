"use client";

import { useState } from "react";
import Header from "@/components/Header";
import JerseyGrid from "@/components/JerseyGrid";
import { PreviewContext, type CatalogPreview } from "@/components/preview-context";
import type { Jersey } from "@/lib/data";

export default function HomeCatalog({ jerseys }: { jerseys: Jersey[] }) {
  const [preview, setPreview] = useState<CatalogPreview>(null);

  return (
    <PreviewContext.Provider value={preview}>
      <div className="home-catalog min-h-screen bg-white">
        <Header onPreview={setPreview} />

        <main className="mx-auto max-w-7xl px-4 pb-16 pt-4 sm:px-8">
          <JerseyGrid jerseys={jerseys} showNames={false} size="home" />
        </main>
      </div>
    </PreviewContext.Provider>
  );
}
