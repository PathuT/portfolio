import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useAnimation,
  useReducedMotion,
  animate,
} from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const MAX_PULL = 44;
const PULL_THRESHOLD = 26;
const TAP_THRESHOLD = 6;

// A gentle damped-pendulum decay: a few shrinking swings settling back to rest.
const NUDGE_KEYFRAMES = [0, 7, -4.5, 2.8, -1.6, 0.8, 0];
const NUDGE_TIMES = [0, 0.16, 0.36, 0.56, 0.74, 0.9, 1];

export default function ThemePullCord() {
  const { theme, toggleTheme } = useTheme();
  const y = useMotionValue(0);
  const cordHeight = useTransform(y, (v) => 28 + Math.max(0, v));
  const [pulling, setPulling] = useState(false);
  const [showTip, setShowTip] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const nudge = useAnimation();
  const hasMounted = useRef(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const startYRef = useRef<number | null>(null);

  const playNudge = () => {
    if (prefersReducedMotion) return;
    nudge.start({
      rotate: NUDGE_KEYFRAMES,
      transition: { duration: 2.4, times: NUDGE_TIMES, ease: "easeInOut" },
    });
  };

  useEffect(() => {
    const seen = window.sessionStorage.getItem("cordTipSeen");
    if (seen || hasMounted.current) return;
    hasMounted.current = true;
    const showTimer = setTimeout(() => {
      setShowTip(true);
      playNudge();
    }, 900);
    const hideTimer = setTimeout(() => {
      setShowTip(false);
      window.sessionStorage.setItem("cordTipSeen", "1");
    }, 5500);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!showTip) return;
    const dismiss = () => dismissTip();
    window.addEventListener("scroll", dismiss, { passive: true });
    window.addEventListener("pointerdown", dismiss);
    return () => {
      window.removeEventListener("scroll", dismiss);
      window.removeEventListener("pointerdown", dismiss);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showTip]);

  const dismissTip = () => {
    setShowTip(false);
    window.sessionStorage.setItem("cordTipSeen", "1");
  };

  // Manual pointer handling (mouse + touch + pen) via native listeners and
  // setPointerCapture, rather than a gesture library's drag recognizer —
  // this is the part that has to work reliably on real phones.
  useEffect(() => {
    const el = buttonRef.current;
    if (!el) return;

    const handlePointerDown = (e: PointerEvent) => {
      startYRef.current = e.clientY;
      el.setPointerCapture(e.pointerId);
      setPulling(true);
      setShowTip(true);
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (startYRef.current === null) return;
      const raw = e.clientY - startYRef.current;
      const clamped = Math.max(0, Math.min(MAX_PULL, raw));
      y.set(clamped);
    };

    const finish = (e: PointerEvent) => {
      if (startYRef.current === null) return;
      const delta = e.clientY - startYRef.current;
      startYRef.current = null;
      setPulling(false);
      animate(y, 0, { type: "spring", stiffness: 500, damping: 28 });
      playNudge();
      if (delta > PULL_THRESHOLD || Math.abs(delta) < TAP_THRESHOLD) {
        dismissTip();
        toggleTheme();
      }
    };

    el.addEventListener("pointerdown", handlePointerDown);
    el.addEventListener("pointermove", handlePointerMove);
    el.addEventListener("pointerup", finish);
    el.addEventListener("pointercancel", finish);
    return () => {
      el.removeEventListener("pointerdown", handlePointerDown);
      el.removeEventListener("pointermove", handlePointerMove);
      el.removeEventListener("pointerup", finish);
      el.removeEventListener("pointercancel", finish);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleTheme();
    }
  };

  return (
    <div
      className="fixed top-16 right-4 sm:right-8 z-[60] flex flex-col items-center pointer-events-none select-none"
      aria-hidden={false}
    >
      <AnimatePresence>
        {showTip && (
          <motion.div
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-none absolute top-6 right-full mr-2 whitespace-nowrap rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-medium px-3 py-1.5 shadow-lg"
          >
            Pull the cord for light / dark
            <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rotate-45 bg-slate-900 dark:bg-white" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ambient sway: a faint continuous drift, like a cord stirred by air */}
      <motion.div
        className="flex flex-col items-center"
        style={{ transformOrigin: "top center" }}
        animate={prefersReducedMotion ? { rotate: 0 } : { rotate: [-0.6, 0.6] }}
        transition={{ duration: 4.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      >
        {/* Nudge layer: a decaying swing played on load and after each pull */}
        <motion.div
          className="flex flex-col items-center"
          style={{ transformOrigin: "top center" }}
          animate={nudge}
          initial={{ rotate: 0 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-slate-400/60 dark:bg-white/25 -mb-px" />
          <motion.div
            className="w-px bg-gradient-to-b from-slate-400/60 to-slate-400/10 dark:from-white/35 dark:to-white/5"
            style={{ height: cordHeight }}
          />
          <motion.button
            ref={buttonRef}
            type="button"
            aria-label={theme === "dark" ? "Pull to switch to light mode" : "Pull to switch to dark mode"}
            aria-pressed={theme === "dark"}
            className="pointer-events-auto relative w-8 h-10 -mt-1 flex items-start justify-center cursor-grab active:cursor-grabbing focus:outline-none touch-none"
            style={{ y, touchAction: "none" }}
            onKeyDown={handleKeyDown}
            whileTap={{ scale: 0.96 }}
            animate={{ scale: pulling ? 1.05 : 1 }}
            transition={{ duration: 0.15 }}
          >
            <span className="w-7 h-7 rounded-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-white/20 shadow-md flex items-center justify-center overflow-hidden">
              {theme === "dark" ? (
                <Moon className="w-3.5 h-3.5 text-indigo-300" />
              ) : (
                <Sun className="w-3.5 h-3.5 text-amber-500" />
              )}
            </span>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
