import type { ReactNode } from "react";
import type { Jersey } from "@/lib/data";
import JerseyCard from "./JerseyCard";

type JerseyGridProps = {
  jerseys: Jersey[];
  leading?: ReactNode;
  showNames?: boolean;
};

export default function JerseyGrid({
  jerseys,
  leading,
  showNames = true,
}: JerseyGridProps) {
  return (
    <div className="grid grid-cols-3 gap-x-6 gap-y-10 sm:grid-cols-4 sm:gap-x-10 sm:gap-y-14 md:grid-cols-6 lg:grid-cols-8 lg:gap-x-12 lg:gap-y-16">
      {leading}
      {jerseys.map((jersey) => (
        <JerseyCard key={jersey.id} jersey={jersey} showName={showNames} />
      ))}
    </div>
  );
}
