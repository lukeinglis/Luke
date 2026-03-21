import {
  Mail, Linkedin, Twitter, Camera, MessageCircle, Youtube,
  Calendar, Dice5, DollarSign, CreditCard, Newspaper, Tv,
  Globe, Star, Home, Search, ShoppingCart, Music, Bookmark,
  type LucideIcon,
} from "lucide-react";
import type { DayLink } from "./types";

const iconMap: Record<string, LucideIcon> = {
  mail: Mail,
  linkedin: Linkedin,
  twitter: Twitter,
  camera: Camera,
  "message-circle": MessageCircle,
  youtube: Youtube,
  calendar: Calendar,
  "dice-5": Dice5,
  "dollar-sign": DollarSign,
  "credit-card": CreditCard,
  newspaper: Newspaper,
  tv: Tv,
  globe: Globe,
  star: Star,
  home: Home,
  search: Search,
  "shopping-cart": ShoppingCart,
  music: Music,
  bookmark: Bookmark,
};

export function LinkCard({ link }: { link: DayLink }) {
  const Icon = link.icon ? iconMap[link.icon] : null;

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center gap-2 rounded-2xl px-4 py-6 text-sm font-semibold shadow-md transition-transform hover:scale-[1.03] hover:shadow-lg sm:text-base ${
        link.extra || "bg-white dark:bg-slate-800"
      }`}
    >
      {Icon && <Icon size={18} />}
      {link.label}
    </a>
  );
}
