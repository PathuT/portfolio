import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, type PanInfo } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const MAX_PULL = 44;
const TAP_THRESHOLD = 6;
const PULL_THRESHOLD = 26;

export default function ThemePullCord() {
  const { theme, toggleTheme } = useTheme();
  const y = useMotionValue(0);
  const cordHeight = useTransform(y, (v) => 28 + Math.max(0, v));
  const [pulling, setPulling] = useState(false);
  const [showTip, setShowTip] = useState(false);

  useEffect(() => {
    const seen = window.sessionStorage.getItem("cordTipSeen");
    if (seen) return;
    const showTimer = setTimeout(() => setShowTip(true), 900);
    const hideTimer = setTimeout(() => {
      setShowTip(false);
      window.sessionStorage.setItem("cordTipSeen", "1");
    }, 5500);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const dismissTip = () => {
    setShowTip(false);
    window.sessionStorage.setItem("cordTipSeen", "1");
  };

  const handleDragEnd = (_: PointerEvent | MouseEvent | TouchEvent, info: PanInfo) => {
    setPulling(false);
    dismissTip();
    const offset = info.offset.y;
    if (offset > PULL_THRESHOLD || Math.abs(offset) < TAP_THRESHOLD) {
      toggleTheme();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleTheme();
    }
  };

  return (
    <div
      className="fixed top-14 right-4 sm:top-16 sm:right-8 z-[60] flex flex-col items-center pointer-events-none select-none"
      aria-hidden={false}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-slate-400/60 dark:bg-white/25 -mb-px" />
      <motion.div
        className="w-px bg-gradient-to-b from-slate-400/60 to-slate-400/10 dark:from-white/35 dark:to-white/5"
        style={{ height: cordHeight }}
      />
      <motion.button
        type="button"
        aria-label={theme === "dark" ? "Pull to switch to light mode" : "Pull to switch to dark mode"}
        aria-pressed={theme === "dark"}
        className="pointer-events-auto relative w-8 h-10 -mt-1 flex items-start justify-center cursor-grab active:cursor-grabbing focus:outline-none"
        style={{ y }}
        drag="y"
        dragConstraints={{ top: 0, bottom: MAX_PULL }}
        dragElastic={0.15}
        dragSnapToOrigin
        onDragStart={() => setPulling(true)}
        onDragEnd={handleDragEnd}
        onKeyDown={handleKeyDown}
        whileTap={{ scale: 0.96 }}
        animate={{ scale: pulling ? 1.05 : 1 }}
      >
        <span className="w-7 h-7 rounded-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-white/20 shadow-md flex items-center justify-center overflow-hidden">
          {theme === "dark" ? (
            <Moon className="w-3.5 h-3.5 text-indigo-300" />
          ) : (
            <Sun className="w-3.5 h-3.5 text-amber-500" />
          )}
        </span>
      </motion.button>
    </div>
  );
}
