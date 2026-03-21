import type { DaySection as DaySectionType } from "./types";
import { LinkCard } from "./LinkCard";

export function DaySection({ section }: { section: DaySectionType }) {
  if (section.links.length === 0) return null;

  return (
    <div className="space-y-4">
      {section.title && (
        <h2 className="flex items-center gap-2 text-xl font-semibold sm:text-2xl">
          {section.title}
        </h2>
      )}
      <div className={section.grid}>
        {section.links.map((link, i) => (
          <LinkCard key={i} link={link} />
        ))}
      </div>
    </div>
  );
}
