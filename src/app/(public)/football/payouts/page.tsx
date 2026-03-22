import Link from "next/link";
import type { Metadata } from "next";
import payouts from "@/data/football-payouts.json";

export const metadata: Metadata = { title: "Payouts | Greybushes and Chili Dogs" };

export default function PayoutsPage() {
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
        <h1 className="mb-8 text-3xl font-bold text-[#f0c040]">Payouts</h1>

        <div className="mb-8 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-[#1b3a5c] bg-[#0f2237] p-6 text-center">
            <p className="text-sm text-gray-400">Buy-In</p>
            <p className="text-3xl font-bold text-white">${payouts.buyIn}</p>
          </div>
          <div className="rounded-xl border border-[#1b3a5c] bg-[#0f2237] p-6 text-center">
            <p className="text-sm text-gray-400">Total Pot</p>
            <p className="text-3xl font-bold text-[#f0c040]">
              ${payouts.totalPot.toLocaleString()}
            </p>
          </div>
          <div className="rounded-xl border border-[#1b3a5c] bg-[#0f2237] p-6 text-center">
            <p className="text-sm text-gray-400">Members</p>
            <p className="text-3xl font-bold text-white">12</p>
          </div>
        </div>

        <h2 className="mb-4 text-xl font-semibold text-white">Prize Distribution</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { place: "1st Place", amount: payouts.yearly.first, color: "text-yellow-400" },
            { place: "2nd Place", amount: payouts.yearly.second, color: "text-gray-300" },
            { place: "3rd Place", amount: payouts.yearly.third, color: "text-amber-600" },
          ].map((p) => (
            <div
              key={p.place}
              className="rounded-xl border border-[#1b3a5c] bg-[#0f2237] p-6 text-center"
            >
              <p className="text-sm text-gray-400">{p.place}</p>
              <p className={`text-3xl font-bold ${p.color}`}>${p.amount}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
