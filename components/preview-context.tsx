"use client";

import { createContext } from "react";

export type CatalogPreview = "national" | "season" | null;

export const PreviewContext = createContext<CatalogPreview>(null);
