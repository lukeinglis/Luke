import Link from "next/link";
import type { Metadata } from "next";
import { getOwnerSeasons } from "@/lib/baseball-data";

export const metadata: Metadata = { title: "History | Tampa's Finest" };

export default function HistoryPage() {
  const allSeasons = getOwnerSeasons();
  const years = [...new Set(allSeasons.map((s) => s.year))].sort((a, b) => b - a);

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
        <h1 className="mb-8 text-3xl font-bold text-emerald-400">Season History</h1>

        <div className="space-y-8">
          {years.map((year) => {
            const standings = allSeasons
              .filter((s) => s.year === year)
              .sort((a, b) => a.standing - b.standing);

            return (
              <div key={year}>
                <h2 className="mb-3 text-xl font-semibold text-white">{year}</h2>
                <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900">
                  <table className="w-full text-left text-sm">
                    <thead className="border-b border-zinc-800 text-gray-400">
                      <tr>
                        <th className="px-4 py-2">#</th>
                        <th className="px-4 py-2">Owner</th>
                        <th className="px-4 py-2">Team</th>
                        <th className="px-4 py-2 text-center">W</th>
                        <th className="px-4 py-2 text-center">L</th>
                        <th className="px-4 py-2 text-center">T</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800">
                      {standings.map((s) => (
                        <tr
                          key={s.owner}
                          className={`hover:bg-zinc-800/50 ${
                            s.standing === 1 ? "bg-emerald-900/20" : ""
                          }`}
                        >
                          <td className={`px-4 py-2 font-medium ${
                            s.standing === 1 ? "text-emerald-400" : "text-gray-400"
                          }`}>
                            {s.standing}
                          </td>
                          <td className="px-4 py-2 text-white">{s.owner}</td>
                          <td className="px-4 py-2 text-gray-400">{s.teamName}</td>
                          <td className="px-4 py-2 text-center text-gray-300">{s.wins}</td>
                          <td className="px-4 py-2 text-center text-gray-300">{s.losses}</td>
                          <td className="px-4 py-2 text-center text-gray-300">{s.ties}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
