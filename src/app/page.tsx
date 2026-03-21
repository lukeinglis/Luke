import Link from "next/link";
import { auth } from "@/lib/auth";

export default async function HomePage() {
  const session = await auth();

  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-zinc-950">
      <main className="flex w-full max-w-2xl flex-col items-center gap-8 px-8 py-32 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Luke Inglis
        </h1>
        <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
          Welcome to my corner of the internet.
        </p>

        <nav className="flex gap-4">
          {session ? (
            <Link
              href="/dashboard"
              className="rounded-lg bg-zinc-900 px-6 py-3 font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Dashboard
            </Link>
          ) : (
            <Link
              href="/login"
              className="rounded-lg bg-zinc-900 px-6 py-3 font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Sign In
            </Link>
          )}
        </nav>
      </main>
    </div>
  );
}
