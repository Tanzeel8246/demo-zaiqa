"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

type Stat = { value: number; suffix: string; decimals?: number; label: string };

const STATS: Stat[] = [
  { value: 48, suffix: "", label: "Signature dishes on the menu" },
  { value: 25, suffix: "k+", label: "Happy guests served" },
  { value: 4.9, suffix: "", decimals: 1, label: "Average guest rating" },
  { value: 12, suffix: " yrs", label: "Serving Lahore since 2013" },
];

function Counter({ stat, run }: { stat: Stat; run: boolean }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!run) return;
    const dur = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(stat.value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, stat.value]);

  const text = stat.decimals ? n.toFixed(stat.decimals) : Math.round(n).toString();
  return (
    <div>
      <div className="stat-num">
        {text}
        {stat.suffix}
      </div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
}

export default function Counters() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setRun(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="stats-band">
      <div ref={ref} className="container stats-grid">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={(i % 4) as 0 | 1 | 2 | 3}>
            <Counter stat={s} run={run} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
