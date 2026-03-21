import {
  Mail, Twitter, Camera, MessageCircle, Youtube, Linkedin,
} from "lucide-react";

const quickLinks = [
  { label: "Gmail", url: "https://mail.google.com", icon: Mail, extra: "bg-blue-50 dark:bg-blue-900/50" },
  { label: "Yahoo", url: "https://mail.yahoo.com", icon: Mail, extra: "bg-purple-50 dark:bg-purple-900/50" },
  { label: "X", url: "https://x.com", icon: Twitter, extra: "bg-gradient-to-r from-slate-900 to-slate-700 text-white" },
  { label: "Insta", url: "https://instagram.com", icon: Camera, extra: "bg-gradient-to-r from-pink-500 to-purple-600 text-white" },
  { label: "Reddit", url: "https://reddit.com", icon: MessageCircle, extra: "bg-gradient-to-r from-amber-500 to-red-500 text-white" },
  { label: "LinkedIn", url: "https://linkedin.com", icon: Linkedin, extra: "bg-sky-50 dark:bg-sky-900/50" },
  { label: "YouTube", url: "https://youtube.com", icon: Youtube, extra: "bg-gradient-to-r from-red-600 to-red-700 text-white" },
  { label: "CNN", url: "https://cnn.com", icon: null, extra: "bg-gray-50 dark:bg-slate-700" },
  { label: "Amazon", url: "https://amazon.com", icon: null, extra: "bg-yellow-50 dark:bg-yellow-900/40" },
];

export function QuickLinksBar() {
  return (
    <nav className="overflow-x-auto">
      <ul className="flex w-max gap-2">
        {quickLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl px-4 py-3 text-sm font-semibold shadow-md transition-transform hover:scale-[1.03] hover:shadow-lg ${link.extra}`}
            >
              {link.icon && <link.icon size={16} />}
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
