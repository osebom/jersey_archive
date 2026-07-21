import Header from "@/components/Header";
import JerseyGrid from "@/components/JerseyGrid";
import { jerseys } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="mx-auto max-w-7xl px-4 pb-16 pt-4 sm:px-8">
        <JerseyGrid jerseys={jerseys} showNames={false} />
      </main>
    </div>
  );
}
