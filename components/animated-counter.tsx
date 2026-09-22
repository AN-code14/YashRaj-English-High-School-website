"use client";

import { useEffect, useRef, useState } from "react";

export function AnimatedCounter({
  value,
  duration = 1600,
  suffix = "",
}: {
  value: number;
  duration?: number;
  suffix?: string;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;

    hasAnimated.current = true;
    const start = performance.now();
    const interval = window.setInterval(() => {
      const progress = Math.min((performance.now() - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplayValue(progress >= 1 ? value : Math.round(value * eased * 10) / 10);

      if (progress >= 1) window.clearInterval(interval);
    }, 16);

    if (ref.current) ref.current.style.opacity = "1";
  }, [duration, value]);

  return (
    <span ref={ref} className="inline-flex items-end gap-1 text-3xl font-bold text-white md:text-4xl">
      <span>{displayValue}</span>
      {suffix}
    </span>
  );
}
