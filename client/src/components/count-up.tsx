import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

interface CountUpProps {
  value: string;
  className?: string;
}

export default function CountUp({ value, className }: CountUpProps) {
  const match = value.match(/^(\d+)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView || !match) return;
    const target = parseInt(match[1], 10);
    const controls = animate(0, target, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView]);

  if (!match) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {display}
      {match[2]}
    </span>
  );
}
