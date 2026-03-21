export interface DayLink {
  label: string;
  url: string;
  icon?: string;
  extra?: string;
  embed?: string;
}

export interface DaySection {
  target?: string;
  title?: string;
  grid: string;
  links: DayLink[];
}

export interface DayConfig {
  sections: DaySection[];
}
