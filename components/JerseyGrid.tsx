import type { ReactNode } from "react";
import type { Jersey } from "@/lib/data";
import JerseyCard from "./JerseyCard";

type JerseyGridProps = {
  jerseys: Jersey[];
  leading?: ReactNode;
};

export default function JerseyGrid({ jerseys, leading }: JerseyGridProps) {
  return (
    <div className="grid grid-cols-3 gap-x-2 gap-y-2">
      {leading}
      {jerseys.map((jersey) => (
        <JerseyCard key={jersey.id} jersey={jersey} />
      ))}
    </div>
  );
}
