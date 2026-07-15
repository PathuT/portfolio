export type AccentColor = "blue" | "emerald" | "purple" | "amber" | "rose" | "teal" | "indigo";

interface AccentTokens {
  text: string;
  textDark: string;
  softBg: string;
  softBorder: string;
  dot: string;
  ring: string;
  gradient: string;
  solidFrom: string;
  solidTo: string;
}

const accents: Record<AccentColor, AccentTokens> = {
  blue: {
    text: "text-blue-600",
    textDark: "text-blue-400",
    softBg: "bg-blue-500/10",
    softBorder: "border-blue-500/20",
    dot: "bg-blue-500",
    ring: "ring-blue-500/30",
    gradient: "from-blue-500 to-indigo-600",
    solidFrom: "rgb(59 130 246)",
    solidTo: "rgb(79 70 229)",
  },
  indigo: {
    text: "text-indigo-600",
    textDark: "text-indigo-400",
    softBg: "bg-indigo-500/10",
    softBorder: "border-indigo-500/20",
    dot: "bg-indigo-500",
    ring: "ring-indigo-500/30",
    gradient: "from-indigo-500 to-blue-600",
    solidFrom: "rgb(99 102 241)",
    solidTo: "rgb(59 130 246)",
  },
  emerald: {
    text: "text-emerald-600",
    textDark: "text-emerald-400",
    softBg: "bg-emerald-500/10",
    softBorder: "border-emerald-500/20",
    dot: "bg-emerald-500",
    ring: "ring-emerald-500/30",
    gradient: "from-emerald-500 to-teal-600",
    solidFrom: "rgb(16 185 129)",
    solidTo: "rgb(13 148 136)",
  },
  purple: {
    text: "text-purple-600",
    textDark: "text-purple-400",
    softBg: "bg-purple-500/10",
    softBorder: "border-purple-500/20",
    dot: "bg-purple-500",
    ring: "ring-purple-500/30",
    gradient: "from-purple-500 to-indigo-600",
    solidFrom: "rgb(168 85 247)",
    solidTo: "rgb(99 102 241)",
  },
  amber: {
    text: "text-amber-600",
    textDark: "text-amber-400",
    softBg: "bg-amber-500/10",
    softBorder: "border-amber-500/20",
    dot: "bg-amber-500",
    ring: "ring-amber-500/30",
    gradient: "from-amber-500 to-orange-600",
    solidFrom: "rgb(245 158 11)",
    solidTo: "rgb(234 88 12)",
  },
  rose: {
    text: "text-rose-600",
    textDark: "text-rose-400",
    softBg: "bg-rose-500/10",
    softBorder: "border-rose-500/20",
    dot: "bg-rose-500",
    ring: "ring-rose-500/30",
    gradient: "from-rose-500 to-pink-600",
    solidFrom: "rgb(244 63 94)",
    solidTo: "rgb(219 39 119)",
  },
  teal: {
    text: "text-teal-600",
    textDark: "text-teal-400",
    softBg: "bg-teal-500/10",
    softBorder: "border-teal-500/20",
    dot: "bg-teal-500",
    ring: "ring-teal-500/30",
    gradient: "from-teal-500 to-emerald-600",
    solidFrom: "rgb(20 184 166)",
    solidTo: "rgb(5 150 105)",
  },
};

export function accent(color: string): AccentTokens {
  return accents[color as AccentColor] ?? accents.blue;
}
