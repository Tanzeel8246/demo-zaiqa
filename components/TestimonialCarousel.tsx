"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "@/lib/site";

function Arrow({ left }: { left?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={left ? { transform: "scaleX(-1)" } : undefined}
    >
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const count = TESTIMONIALS.length;

  const go = useCallback(
    (i: number) => setIndex(((i % count) + count) % count),
    [count]
  );

  const restart = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => setIndex((i) => (i + 1) % count), 6000);
  }, [count]);

  useEffect(() => {
    restart();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [restart]);

  return (
    <div className="testi-shell">
      <div className="testi-viewport">
        <div
          className="testi-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="testi-slide">
              <figure className="testi-card">
                <div className="testi-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="testi-who">
                  <b>{t.name}</b>
                  <span>{t.detail}</span>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
      <div className="testi-nav">
        <button
          className="testi-arrow"
          onClick={() => { go(index - 1); restart(); }}
          aria-label="Previous testimonial"
        >
          <Arrow left />
        </button>
        <div className="testi-dots" role="tablist" aria-label="Testimonials">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.name}
              className={`testi-dot ${i === index ? "active" : ""}`}
              onClick={() => { go(i); restart(); }}
              aria-label={`Show testimonial from ${t.name}`}
            />
          ))}
        </div>
        <button
          className="testi-arrow"
          onClick={() => { go(index + 1); restart(); }}
          aria-label="Next testimonial"
        >
          <Arrow />
        </button>
      </div>
    </div>
  );
}
