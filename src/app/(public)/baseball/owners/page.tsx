import Link from "next/link";
import type { Metadata } from "next";
import { getOwnerSummaries } from "@/lib/baseball-data";

export const metadata: Metadata = { title: "Owners | Tampa's Finest" };

export default function OwnersPage() {
  const owners = getOwnerSummaries();

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
        <h1 className="mb-8 text-3xl font-bold text-emerald-400">Owner Leaderboard</h1>

        <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-zinc-800 text-gray-400">
              <tr>
                <th className="px-4 py-3">Owner</th>
                <th className="px-4 py-3 text-center">Seasons</th>
                <th className="px-4 py-3 text-center">Titles</th>
                <th className="px-4 py-3 text-center">Best</th>
                <th className="px-4 py-3 text-center">W</th>
                <th className="px-4 py-3 text-center">L</th>
                <th className="px-4 py-3 text-center">T</th>
                <th className="px-4 py-3 text-center">Win%</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {owners.map((o) => {
                const total = o.totalWins + o.totalLosses + o.totalTies;
                const winPct = total > 0 ? ((o.totalWins / total) * 100).toFixed(1) : "0.0";
                return (
                  <tr key={o.name} className="hover:bg-zinc-800/50">
                    <td className="px-4 py-3 font-medium text-white">
                      {o.name}
                      {o.championships > 0 && (
                        <span className="ml-2 text-yellow-400">
                          {"🏆".repeat(o.championships)}
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-center text-gray-400">{o.seasons}</td>
                    <td className="px-4 py-3 text-center text-emerald-400 font-semibold">
                      {o.championships}
                    </td>
                    <td className="px-4 py-3 text-center text-gray-400">
                      {o.bestFinish === 1 ? "1st" : o.bestFinish === 2 ? "2nd" : o.bestFinish === 3 ? "3rd" : `${o.bestFinish}th`}
                    </td>
                    <td className="px-4 py-3 text-center text-gray-300">{o.totalWins}</td>
                    <td className="px-4 py-3 text-center text-gray-300">{o.totalLosses}</td>
                    <td className="px-4 py-3 text-center text-gray-300">{o.totalTies}</td>
                    <td className="px-4 py-3 text-center text-gray-300">{winPct}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
