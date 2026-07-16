export type AccentColor = "mint" | "indigo";

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
  mint: {
    text: "text-teal-600 dark:text-teal-300",
    textDark: "text-teal-600 dark:text-teal-300",
    softBg: "bg-teal-500/10 dark:bg-teal-400/10",
    softBorder: "border-teal-500/25 dark:border-teal-400/25",
    dot: "bg-teal-500 dark:bg-teal-300",
    ring: "ring-teal-400/30",
    gradient: "from-teal-400 to-emerald-500",
    solidFrom: "rgb(45 212 191)",
    solidTo: "rgb(16 185 129)",
  },
  indigo: {
    text: "text-indigo-600 dark:text-indigo-300",
    textDark: "text-indigo-600 dark:text-indigo-300",
    softBg: "bg-indigo-500/10 dark:bg-indigo-400/10",
    softBorder: "border-indigo-500/25 dark:border-indigo-400/25",
    dot: "bg-indigo-500 dark:bg-indigo-400",
    ring: "ring-indigo-400/30",
    gradient: "from-indigo-400 to-violet-500",
    solidFrom: "rgb(129 140 248)",
    solidTo: "rgb(139 92 246)",
  },
};

export function accent(color: string): AccentTokens {
  return accents[color as AccentColor] ?? accents.mint;
}
