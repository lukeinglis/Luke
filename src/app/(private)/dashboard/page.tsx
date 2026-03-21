import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { SignOutButton } from "@/components/ui/sign-out-button";

export default async function DashboardPage() {
  const session = await auth();
  if (!session) redirect("/login");

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Dashboard
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-zinc-500">
              Hey, {session.user?.name}
            </span>
            <SignOutButton />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <DashboardCard
            title="Bookmarks"
            description="Your saved links and websites"
            href="/bookmarks"
          />
          <DashboardCard
            title="Fantasy Baseball"
            description="Tampa's Finest"
            href="/baseball"
          />
          <DashboardCard
            title="Fantasy Football"
            description="Greybushes and Chili Dogs"
            href="/football"
          />
        </div>
      </main>
    </div>
  );
}

function DashboardCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
    >
      <h2 className="text-lg font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
        {title}
      </h2>
      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
        {description}
      </p>
    </a>
  );
}
