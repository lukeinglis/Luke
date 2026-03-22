import Link from "next/link";
import type { Metadata } from "next";
import { getChampions } from "@/lib/baseball-data";

export const metadata: Metadata = {
  title: "Tampa's Finest | Fantasy Baseball",
  description: "10-team H2H category league on ESPN. Est. 2015.",
};

export default function BaseballPage() {
  const champions = getChampions();

  return (
    <div className="min-h-screen bg-zinc-950 text-gray-100">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-900">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-emerald-400">Tampa&apos;s Finest</h1>
          <Link href="/" className="text-sm text-gray-400 hover:text-gray-200">
            Home
          </Link>
        </div>
        <nav className="mx-auto max-w-6xl px-6 pb-4">
          <ul className="flex gap-4 overflow-x-auto text-sm">
            {[
              { label: "Owners", href: "/baseball/owners" },
              { label: "History", href: "/baseball/history" },
              { label: "Rankings", href: "/baseball/rankings" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="whitespace-nowrap rounded-md px-3 py-1.5 font-medium text-gray-300 transition hover:bg-zinc-800 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm uppercase tracking-wider text-emerald-400">
            ESPN Fantasy Baseball
          </p>
          <h2 className="mb-4 text-4xl font-bold">10-Team H2H Categories</h2>
          <p className="mx-auto max-w-lg text-gray-400">
            Head-to-Head Each Category league with 16 scoring categories.
            Snake draft, 24 roster spots. Running since 2015.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-12 grid gap-6 sm:grid-cols-3">
          {[
            { title: "Owners", desc: "Leaderboard & records", href: "/baseball/owners" },
            { title: "History", desc: "Champions & standings", href: "/baseball/history" },
            { title: "Rankings", desc: "2026 draft board", href: "/baseball/rankings" },
          ].map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-xl border border-zinc-800 bg-zinc-900 p-6 transition-all hover:border-emerald-500/50 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-emerald-400 group-hover:text-emerald-300">
                {card.title}
              </h3>
              <p className="mt-1 text-sm text-gray-400">{card.desc}</p>
            </Link>
          ))}
        </div>

        {/* Champions */}
        <h2 className="mb-4 text-xl font-semibold text-white">Champions</h2>
        <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-zinc-800 text-gray-400">
              <tr>
                <th className="px-6 py-3">Year</th>
                <th className="px-6 py-3">Owner</th>
                <th className="px-6 py-3">Team Name</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {champions.map((c) => (
                <tr key={c.year} className="hover:bg-zinc-800/50">
                  <td className="px-6 py-3 font-medium text-emerald-400">{c.year}</td>
                  <td className="px-6 py-3 text-white">{c.owner}</td>
                  <td className="px-6 py-3 text-gray-400">{c.teamName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
