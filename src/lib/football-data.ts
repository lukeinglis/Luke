const BASE_URL =
  "https://raw.githubusercontent.com/lukeinglis/FantasyFootball/main/src/data";

const fetchOpts: RequestInit = { next: { revalidate: 3600 } };

export interface Member {
  name: string;
  teamName: string;
}

export interface Members {
  active: Member[];
  emeritus: Member[];
}

export interface Payouts {
  buyIn: number;
  totalPot: number;
  yearly: { first: number; second: number; third: number };
  weeklyPayouts: unknown[];
}

export async function getMembers(): Promise<Members> {
  const res = await fetch(`${BASE_URL}/members.json`, fetchOpts);
  return res.json();
}

export async function getPayouts(): Promise<Payouts> {
  const res = await fetch(`${BASE_URL}/payouts.json`, fetchOpts);
  return res.json();
}

export async function getHistory(): Promise<unknown> {
  const res = await fetch(`${BASE_URL}/history.json`, fetchOpts);
  return res.json();
}

export async function getPunishments(): Promise<unknown> {
  const res = await fetch(`${BASE_URL}/punishments.json`, fetchOpts);
  return res.json();
}
