"use client";

const tabs = [
  { key: "home", label: "Home" },
  { key: "index", label: "Index" },
  { key: "0", label: "Sun" },
  { key: "1", label: "Mon" },
  { key: "2", label: "Tue" },
  { key: "3", label: "Wed" },
  { key: "4", label: "Thu" },
  { key: "5", label: "Fri" },
  { key: "6", label: "Sat" },
];

export function DayTabs({
  activeDay,
  onSelect,
}: {
  activeDay: string;
  onSelect: (day: string) => void;
}) {
  return (
    <nav className="overflow-x-auto">
      <ul className="flex w-max gap-2">
        {tabs.map((tab) => (
          <li key={tab.key}>
            <button
              onClick={() => onSelect(tab.key)}
              className={`rounded-md px-3 py-1 text-sm font-semibold transition sm:px-4 sm:py-2 sm:text-base ${
                activeDay === tab.key
                  ? "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                  : "text-gray-600 hover:bg-gray-200/70 dark:text-gray-300 dark:hover:bg-slate-700"
              }`}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
