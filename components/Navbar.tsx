"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/site";
import ThemeToggle from "@/components/ThemeToggle";

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.replace(/\/$/, ""));
  };

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="nav-logo" aria-label="Zaiqa — home">
          Zaiqa<small>Taste of Lahore</small>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={isActive(l.href) ? "active" : ""}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="nav-cta">
          <ThemeToggle />
          <Link className="btn btn-primary btn-sm" href="/reservations/">
            Reserve a Table
          </Link>
          <button
            className="nav-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      <nav className={`mobile-menu ${open ? "open" : ""}`} aria-label="Mobile">
        {NAV_LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={isActive(l.href) ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </Link>
        ))}
        <div style={{ alignSelf: "flex-start", padding: "4px 8px" }}>
          <ThemeToggle />
        </div>
        <Link
          className="btn btn-primary"
          style={{ marginTop: 12 }}
          href="/reservations/"
          onClick={() => setOpen(false)}
        >
          Reserve a Table
        </Link>
        <p style={{ color: "var(--muted-2)", fontSize: "0.85rem", padding: "8px" }}>
          {SITE.phone} · Open daily 12 PM – 12 AM
        </p>
      </nav>
    </header>
  );
}
