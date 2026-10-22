"use client";

import { useState } from "react";
import type { Faq } from "@/lib/site";

export default function FaqAccordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="faq-list">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className={`faq-item ${isOpen ? "open" : ""}`}>
            <button
              className="faq-q"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              {f.q}
              <span className="plus" aria-hidden="true">+</span>
            </button>
            <div
              className="faq-a"
              style={{ maxHeight: isOpen ? "320px" : "0" }}
            >
              <p>{f.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
