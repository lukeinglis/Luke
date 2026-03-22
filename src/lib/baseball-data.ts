import fs from "fs";
import path from "path";

export interface OwnerSeason {
  year: number;
  owner: string;
  teamName: string;
  standing: number;
  wins: number;
  losses: number;
  ties: number;
}

export interface OwnerSummary {
  name: string;
  seasons: number;
  championships: number;
  bestFinish: number;
  totalWins: number;
  totalLosses: number;
  totalTies: number;
  years: number[];
}

export function getOwnerSeasons(): OwnerSeason[] {
  const csvPath = path.join(process.cwd(), "src/data/baseball-owners.csv");
  const csv = fs.readFileSync(csvPath, "utf-8");
  const lines = csv.trim().split("\n").slice(1); // skip header

  return lines.map((line) => {
    const [year, owner, teamName, standing, wins, losses, ties] = line.split(",");
    return {
      year: parseInt(year),
      owner: owner.trim(),
      teamName: teamName.trim(),
      standing: parseInt(standing),
      wins: parseInt(wins),
      losses: parseInt(losses),
      ties: parseInt(ties),
    };
  });
}

export function getOwnerSummaries(): OwnerSummary[] {
  const seasons = getOwnerSeasons();
  const byOwner = new Map<string, OwnerSeason[]>();

  for (const s of seasons) {
    const existing = byOwner.get(s.owner) ?? [];
    existing.push(s);
    byOwner.set(s.owner, existing);
  }

  const summaries: OwnerSummary[] = [];
  for (const [name, ownerSeasons] of byOwner) {
    summaries.push({
      name,
      seasons: ownerSeasons.length,
      championships: ownerSeasons.filter((s) => s.standing === 1).length,
      bestFinish: Math.min(...ownerSeasons.map((s) => s.standing)),
      totalWins: ownerSeasons.reduce((a, s) => a + s.wins, 0),
      totalLosses: ownerSeasons.reduce((a, s) => a + s.losses, 0),
      totalTies: ownerSeasons.reduce((a, s) => a + s.ties, 0),
      years: ownerSeasons.map((s) => s.year).sort(),
    });
  }

  return summaries.sort((a, b) => b.championships - a.championships || a.bestFinish - b.bestFinish);
}

export function getChampions(): { year: number; owner: string; teamName: string }[] {
  return getOwnerSeasons()
    .filter((s) => s.standing === 1)
    .sort((a, b) => a.year - b.year);
}
