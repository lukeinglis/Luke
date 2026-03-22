import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Rankings | Tampa's Finest" };

export default function RankingsPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-gray-100">
      <header className="border-b border-zinc-800 bg-zinc-900">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/baseball" className="text-2xl font-bold text-emerald-400">
            Tampa&apos;s Finest
          </Link>
          <Link href="/baseball" className="text-sm text-gray-400 hover:text-gray-200">
            Back
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="mb-8 text-3xl font-bold text-emerald-400">2026 Draft Rankings</h1>

        <p className="mb-4 text-gray-400">
          Weighted z-score rankings based on 10 years of H2H category data.
          500+ players ranked across 16 categories.
        </p>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-8 text-center">
          <p className="text-lg text-gray-500">
            Interactive draft board coming soon. For now, use the{" "}
            <a
              href="https://github.com/lukeinglis/FantasyBaseball"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300"
            >
              Streamlit War Room
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
}
