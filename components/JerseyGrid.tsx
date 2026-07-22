import type { ReactNode } from "react";
import type { Jersey } from "@/lib/data";
import JerseyCard from "./JerseyCard";

type JerseyGridProps = {
  jerseys: Jersey[];
  leading?: ReactNode;
  showNames?: boolean | "desktop";
  size?: "default" | "large";
};

export default function JerseyGrid({
  jerseys,
  leading,
  showNames = true,
  size = "default",
}: JerseyGridProps) {
  const gridClass =
    size === "large"
      ? "grid grid-cols-3 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-12 md:grid-cols-4 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-14 xl:grid-cols-5"
      : "grid grid-cols-3 gap-x-6 gap-y-10 sm:grid-cols-4 sm:gap-x-10 sm:gap-y-14 md:grid-cols-6 lg:grid-cols-8 lg:gap-x-12 lg:gap-y-16";

  return (
    <div className={gridClass}>
      {leading}
      {jerseys.map((jersey) => (
        <JerseyCard key={jersey.id} jersey={jersey} showName={showNames} />
      ))}
    </div>
  );
}
