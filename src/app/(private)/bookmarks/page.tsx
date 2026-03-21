import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function BookmarksPage() {
  const session = await auth();
  if (!session) redirect("/login");

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Bookmarks
          </h1>
          <a
            href="/dashboard"
            className="text-sm text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
          >
            Back to Dashboard
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        <p className="text-zinc-500 dark:text-zinc-400">
          Bookmark manager coming soon. This will be your cross-device bookmark hub.
        </p>
      </main>
    </div>
  );
}
