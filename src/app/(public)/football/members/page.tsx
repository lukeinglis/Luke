import Link from "next/link";
import type { Metadata } from "next";
import { getMembers } from "@/lib/football-data";

export const metadata: Metadata = { title: "Members | Greybushes and Chili Dogs" };

export default async function MembersPage() {
  const members = await getMembers();
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
        <h1 className="mb-8 text-3xl font-bold text-[#f0c040]">Members</h1>

        {/* Active Members */}
        <h2 className="mb-4 text-xl font-semibold text-white">Active Members</h2>
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {members.active.map((m) => (
            <div
              key={m.name}
              className="rounded-xl border border-[#1b3a5c] bg-[#0f2237] p-6"
            >
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#1b3a5c] text-lg font-bold text-[#f0c040]">
                {m.name[0]}
              </div>
              <h3 className="text-lg font-semibold text-white">{m.name}</h3>
              <p className="text-sm text-gray-400">{m.teamName}</p>
            </div>
          ))}
        </div>

        {/* Emeritus */}
        <h2 className="mb-4 text-xl font-semibold text-white">Emeritus</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {members.emeritus.map((m) => (
            <div
              key={m.name}
              className="rounded-xl border border-[#1b3a5c]/50 bg-[#0f2237]/50 p-6 opacity-75"
            >
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#1b3a5c] text-lg font-bold text-gray-400">
                {m.name[0]}
              </div>
              <h3 className="text-lg font-semibold text-gray-300">{m.name}</h3>
              <p className="text-sm text-gray-500">{m.teamName}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
