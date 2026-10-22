import type { Metadata } from "next";
import Link from "next/link";
import { FAQS, SITE } from "@/lib/site";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";
import { SectionHeading, Icon } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact — Find Us in Gulberg III",
  description:
    "Find Zaiqa: 14-B Main Boulevard, Gulberg III, Lahore. Open Mon–Sun 12 PM – 12 AM. Call +92 42 3577 8899 or message us on WhatsApp.",
  keywords: [
    "Zaiqa address",
    "Zaiqa phone number",
    "restaurant Gulberg III Lahore",
    "Zaiqa timings",
    "contact Zaiqa Lahore",
  ],
  alternates: { canonical: `${SITE.domain}/contact/` },
  openGraph: {
    title: "Contact — Zaiqa",
    description: "14-B Main Boulevard, Gulberg III, Lahore · Open daily 12 PM – 12 AM.",
    url: `${SITE.domain}/contact/`,
    images: [{ url: "/images/interior.jpg", width: 900, height: 600, alt: "Inside the Zaiqa dining room in Gulberg III, Lahore" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Zaiqa",
    description: "14-B Main Boulevard, Gulberg III, Lahore · Open daily 12 PM – 12 AM.",
    images: ["/images/interior.jpg"],
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Contact</span>
          </nav>
          <h1>Come say <em style={{ fontStyle: "italic", color: "var(--accent)" }}>salaam</em></h1>
          <p>
            We&apos;re on Main Boulevard, Gulberg III — look for the smell of
            the tandoor. Here&apos;s everything you need to find us.
          </p>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="container contact-grid">
          <div>
            <Reveal>
              <div className="info-card">
                <div className="info-icon"><Icon name="pin" /></div>
                <div>
                  <h3>Address</h3>
                  <p>{SITE.address}</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="info-card">
                <div className="info-icon"><Icon name="clock" /></div>
                <div>
                  <h3>Hours</h3>
                  <p>Monday – Sunday · 12:00 PM – 12:00 AM<br />Kitchen closes 11:30 PM · Friday break 1 – 2 PM</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="info-card">
                <div className="info-icon"><Icon name="phone" /></div>
                <div>
                  <h3>Phone & WhatsApp</h3>
                  <p>
                    <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
                    <br />
                    <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={1}>
            <div className="map-art" role="img" aria-label="Stylised map showing Zaiqa on Main Boulevard, Gulberg III, Lahore">
              <span className="map-label road-main">Main Boulevard</span>
              <span className="map-label road-side">Ghalib Rd</span>
              <div className="map-pin">
                <div className="pin" aria-hidden="true" />
                <div className="pulse" aria-hidden="true" />
              </div>
              <div className="map-tag">
                <Icon name="pin" />
                <div>
                  <b>Zaiqa — Taste of Lahore</b>
                  <span>14-B Main Boulevard, Gulberg III, Lahore</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 32 }}>
        <div className="container">
          <SectionHeading
            center
            eyebrow="Before you ask"
            title="Common questions"
            lead="Quick answers — for anything else, WhatsApp us and a human replies."
          />
          <Reveal>
            <FaqAccordion items={FAQS} />
          </Reveal>
          <Reveal>
            <div style={{ textAlign: "center", marginTop: 44 }}>
              <Link className="btn btn-primary btn-lg" href="/reservations/">
                Reserve a Table
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
