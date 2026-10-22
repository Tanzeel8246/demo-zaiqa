"use client";

import { useState } from "react";
import { MENU } from "@/lib/site";

export default function MenuExplorer() {
  const [active, setActive] = useState(MENU[0].id);
  const category = MENU.find((c) => c.id === active)!;

  return (
    <div>
      <div className="cat-tabs" role="tablist" aria-label="Menu categories">
        {MENU.map((c) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={active === c.id}
            className={`cat-tab ${active === c.id ? "active" : ""}`}
            onClick={() => setActive(c.id)}
          >
            {c.label}
            <span style={{ opacity: 0.65, fontWeight: 400 }}> · {c.items.length}</span>
          </button>
        ))}
      </div>

      <div key={active} className="menu-grid" role="tabpanel" aria-label={category.label}>
        {category.items.map((item, i) => (
          <article
            key={item.name}
            className="menu-item"
            style={{ animationDelay: `${Math.min(i * 45, 450)}ms` }}
          >
            {item.tag && <span className="tag">{item.tag}</span>}
            <div className="mi-top">
              <h3 className="mi-name">{item.name}</h3>
              <span className="mi-dots" aria-hidden="true" />
              <span className="mi-price">{item.price}</span>
            </div>
            <p className="mi-desc">{item.desc}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
