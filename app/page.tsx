import Header from "@/components/Header";
import JerseyGrid from "@/components/JerseyGrid";
import { jerseys } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
        <JerseyGrid jerseys={jerseys} />
      </main>
    </div>
  );
}
