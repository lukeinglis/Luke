import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About | Greybushes and Chili Dogs" };

export default function AboutPage() {
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

      <main className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="mb-8 text-3xl font-bold text-[#f0c040]">About the League</h1>

        <div className="space-y-8">
          <section className="rounded-xl border border-[#1b3a5c] bg-[#0f2237] p-8">
            <h2 className="mb-4 text-xl font-semibold text-[#f0c040]">The Origin Story</h2>
            <p className="leading-relaxed text-gray-300">
              The idea was a 12 member keeper league. Established by friends from
              Auburn University who sought to maintain their bond after graduation.
              A fun way to stay in touch year after year. The league has become
              more than just fantasy. It has become a way of life.
            </p>
          </section>

          <section className="rounded-xl border border-[#1b3a5c] bg-[#0f2237] p-8">
            <h2 className="mb-4 text-xl font-semibold text-[#f0c040]">League Format</h2>
            <ul className="space-y-2 text-gray-300">
              <li><span className="font-medium text-white">Type:</span> 12-team keeper league</li>
              <li><span className="font-medium text-white">Keepers:</span> 3 players retained annually</li>
              <li><span className="font-medium text-white">Platform:</span> Yahoo Fantasy Sports</li>
              <li><span className="font-medium text-white">Buy-in:</span> $150</li>
            </ul>
          </section>

          <section className="rounded-xl border border-[#1b3a5c] bg-[#0f2237] p-8">
            <h2 className="mb-4 text-xl font-semibold text-[#f0c040]">The Punishment</h2>
            <p className="leading-relaxed text-gray-300">
              The last-place finisher annually faces a league-determined punishment
              task. Failure to complete the penalty results in removal from the
              league for that season. No exceptions.
            </p>
          </section>

          <section className="rounded-xl border border-[#1b3a5c] bg-[#0f2237] p-8">
            <h2 className="mb-4 text-xl font-semibold text-[#f0c040]">Membership</h2>
            <p className="leading-relaxed text-gray-300">
              League membership is competitive and selective. The league features
              members from various backgrounds — a ginger, a rapper who once drew
              a high double digits crowd, a fake Doctor, members who were in
              school for as long as Doctors, a European techno DJ, a half
              hispanic. A former champ was put to pasture due to the 12-spot
              limitation, and friendships were tested. A waiting list exists for
              prospective members.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
