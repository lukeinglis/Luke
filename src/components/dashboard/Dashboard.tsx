"use client";

import { useState, useEffect, useCallback } from "react";
import { Moon, Sun } from "lucide-react";
import { DayTabs } from "./DayTabs";
import { QuickLinksBar } from "./QuickLinksBar";
import { DaySection } from "./DaySection";
import type { DayConfig, DaySection as DaySectionType } from "./types";

function getTodayKey(): string {
  return String(new Date().getDay());
}

function formatDate(): string {
  const d = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  const yy = String(d.getFullYear()).slice(2);
  return `${days[d.getDay()]} ${mm}/${dd}/${yy}`;
}

export function Dashboard() {
  const [activeDay, setActiveDay] = useState(getTodayKey);
  const [sections, setSections] = useState<DaySectionType[]>([]);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("darkMode");
    if (stored === "true" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDark = () => {
    setDark((prev) => {
      const next = !prev;
      localStorage.setItem("darkMode", String(next));
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  };

  const loadDay = useCallback(async (day: string) => {
    if (day === "index") {
      // Load all days and aggregate links
      const allLinks: DaySectionType["links"] = [];
      for (let i = 0; i <= 7; i++) {
        try {
          const res = await fetch(`/config/day-${i}.json`, { cache: "no-store" });
          const data: DayConfig = await res.json();
          for (const sec of data.sections) {
            allLinks.push(...sec.links.filter((l) => !l.embed));
          }
        } catch {
          // skip missing configs
        }
      }
      // Deduplicate by URL
      const seen = new Set<string>();
      const unique = allLinks.filter((l) => {
        if (seen.has(l.url)) return false;
        seen.add(l.url);
        return true;
      });
      setSections([
        { title: "All Links", grid: "grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6", links: unique },
      ]);
      return;
    }

    const file = day === "home" ? "day-7" : `day-${day}`;
    try {
      const res = await fetch(`/config/${file}.json`, { cache: "no-store" });
      const data: DayConfig = await res.json();
      setSections(data.sections);
    } catch {
      setSections([]);
    }
  }, []);

  useEffect(() => {
    loadDay(activeDay);
  }, [activeDay, loadDay]);

  const handleSelect = (day: string) => {
    setActiveDay(day);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800 dark:bg-slate-900 dark:text-gray-100">
      {/* Dark mode toggle */}
      <button
        onClick={toggleDark}
        aria-label="Toggle dark mode"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-white/70 p-3 shadow backdrop-blur transition hover:shadow-lg dark:bg-slate-700"
      >
        {dark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Header */}
      <header className="sticky top-0 z-40 flex flex-col gap-2 bg-white/80 p-4 shadow-md backdrop-blur dark:bg-slate-800/80">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="rounded-xl bg-white px-4 py-2 text-center font-mono text-sm shadow dark:bg-slate-700 sm:text-base">
            {formatDate()}
          </div>
          <h1 className="flex-1 text-center text-2xl font-bold sm:text-left">
            Luke&apos;s Dashboard
          </h1>
          <a
            href="/"
            className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            Home
          </a>
        </div>
        <DayTabs activeDay={activeDay} onSelect={handleSelect} />
        <QuickLinksBar />
      </header>

      {/* Content */}
      <main className="mx-auto max-w-6xl space-y-8 p-4">
        {sections.map((section, i) => (
          <DaySection key={i} section={section} />
        ))}
        {sections.length === 0 && (
          <p className="py-12 text-center text-gray-400 dark:text-gray-500">
            No links configured for this day yet.
          </p>
        )}
      </main>
    </div>
  );
}
