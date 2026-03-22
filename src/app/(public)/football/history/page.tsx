import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "History | Greybushes and Chili Dogs" };

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-[#0d1b2a] text-gray-100">
      <header className="border-b border-[#1b3a5c] bg-[#0f2237]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/football" className="text-2xl font-bold text-[#f0c040]">
            Greybushes and Chili Dogs
          </Link>
          <Link href="/football" className="text-sm text-gray-400 hover:text-gray-200">
            Back
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="mb-8 text-3xl font-bold text-[#f0c040]">League History</h1>

        <p className="mb-8 text-gray-400">
          Champions, records, and the Wall of Shame — coming soon.
        </p>

        <div className="rounded-xl border border-[#1b3a5c] bg-[#0f2237] p-8 text-center">
          <p className="text-lg text-gray-500">
            Historical data is being compiled. Check back soon.
          </p>
        </div>
      </main>
    </div>
  );
}
