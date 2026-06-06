import Link from "next/link";
import Header from "@/components/Header";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto flex max-w-6xl flex-col items-center justify-center px-4 py-32 sm:px-6">
        <p className="mb-6 text-[10px] tracking-[0.15em] sm:text-xs">
          NOT FOUND
        </p>
        <Link
          href="/"
          className="text-[10px] tracking-[0.15em] text-[#b3b3b3] transition-colors hover:text-black sm:text-xs"
        >
          BACK
        </Link>
      </main>
    </div>
  );
}
