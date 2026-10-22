import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import Reveal from "@/components/Reveal";
import { Icon } from "@/components/ui";
import ReservationForm from "@/components/ReservationForm";

export const metadata: Metadata = {
  title: "Reservations — Book Your Table",
  description:
    "Reserve a table at Zaiqa, Gulberg III, Lahore in two minutes. Pick your date, time and party size and confirm instantly on WhatsApp. Book now.",
  keywords: [
    "Zaiqa reservation",
    "book table Lahore restaurant",
    "restaurant booking Gulberg",
    "family dinner reservation Lahore",
  ],
  alternates: { canonical: `${SITE.domain}/reservations/` },
  openGraph: {
    title: "Reserve a Table — Zaiqa",
    description: "Pick your date, time and party size — confirm instantly on WhatsApp.",
    url: `${SITE.domain}/reservations/`,
    images: [{ url: "/images/hero.jpg", width: 900, height: 550, alt: "Seekh kebabs sizzling over real coals on the Zaiqa grill" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reserve a Table — Zaiqa",
    description: "Pick your date, time and party size — confirm instantly on WhatsApp.",
    images: ["/images/hero.jpg"],
  },
};

export default function ReservationsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Reservations</span>
          </nav>
          <h1>Reserve your <em style={{ fontStyle: "italic", color: "var(--accent)" }}>table</em></h1>
          <p>
            Two minutes, no phone queues, no apps to install. Fill this in and
            confirm on WhatsApp — we&apos;ll have your table ready.
          </p>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 0, paddingBottom: 96 }}>
        <div className="container res-grid">
          <div>
            <Reveal>
              <div className="res-info-card">
                <h3><Icon name="clock" /> How it works</h3>
                <ul>
                  <li>1. Fill in your details — date, time, party size.</li>
                  <li>2. Tap &ldquo;Confirm on WhatsApp&rdquo; — your message is pre-written.</li>
                  <li>3. Press send. Our team confirms your table within minutes.</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="res-info-card">
                <h3><Icon name="pin" /> Good to know</h3>
                <ul>
                  <li>We hold reservations for 20 minutes past the booked time.</li>
                  <li>Parties of 10+? Mention it — we&apos;ll set up the family hall.</li>
                  <li>Rooftop seating is first-come on the night, but ask — we try.</li>
                  <li>Valet parking runs every evening from 7 PM.</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="res-info-card">
                <h3><Icon name="phone" /> Rather just call?</h3>
                <p>
                  <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} style={{ color: "var(--accent)", fontWeight: 600 }}>
                    {SITE.phone}
                  </a>
                  <br />
                  Daily 12:00 PM – 12:00 AM
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={1}>
            <div className="form-card">
              <h2 className="h2" style={{ fontSize: "1.6rem", marginBottom: 8 }}>Book a table</h2>
              <p style={{ color: "var(--muted)", marginBottom: 28, fontSize: "0.97rem" }}>
                We confirm every reservation personally — usually within minutes.
              </p>
              <ReservationForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
