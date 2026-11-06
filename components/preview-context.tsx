"use client";

import { createContext } from "react";

export type CatalogPreview = "national" | "club" | null;

export const PreviewContext = createContext<CatalogPreview>(null);
