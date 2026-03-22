import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Greybushes and Chili Dogs | Fantasy Football",
  description: "A 12-team keeper league. Established by friends from Auburn University.",
};

export default function FootballPage() {
  return (
    <div className="min-h-screen bg-[#0d1b2a] text-gray-100">
      {/* Header */}
      <header className="border-b border-[#1b3a5c] bg-[#0f2237]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-[#f0c040]">
            Greybushes and Chili Dogs
          </h1>
          <Link href="/" className="text-sm text-gray-400 hover:text-gray-200">
            Home
          </Link>
        </div>
        <nav className="mx-auto max-w-6xl px-6 pb-4">
          <ul className="flex gap-4 overflow-x-auto text-sm">
            {[
              { label: "Members", href: "/football/members" },
              { label: "Payouts", href: "/football/payouts" },
              { label: "History", href: "/football/history" },
              { label: "About", href: "/football/about" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="whitespace-nowrap rounded-md px-3 py-1.5 font-medium text-gray-300 transition hover:bg-[#1b3a5c] hover:text-white"
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
          <p className="mb-2 text-sm uppercase tracking-wider text-[#f0c040]">
            Yahoo Fantasy Football
          </p>
          <h2 className="mb-4 text-4xl font-bold">12-Team Keeper League</h2>
          <p className="mx-auto max-w-lg text-gray-400">
            Established by friends from Auburn University. A fun way to stay in
            touch year after year. The league has become more than just fantasy.
            It has become a way of life.
          </p>
        </div>

        {/* Quick Links Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Members", desc: "12 active + 2 emeritus", href: "/football/members" },
            { title: "Payouts", desc: "$150 buy-in, $800 first", href: "/football/payouts" },
            { title: "History", desc: "Champions & records", href: "/football/history" },
            { title: "About", desc: "Origin story & rules", href: "/football/about" },
          ].map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-xl border border-[#1b3a5c] bg-[#0f2237] p-6 transition-all hover:border-[#f0c040]/50 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-[#f0c040] group-hover:text-[#f5d060]">
                {card.title}
              </h3>
              <p className="mt-1 text-sm text-gray-400">{card.desc}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
