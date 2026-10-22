import type { Metadata } from "next";
import Link from "next/link";
import { SITE, waLink } from "@/lib/site";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Us — Our Story Since 2013",
  description:
    "Learn the Zaiqa story: since 2013 we have served honest Lahori karahi, coal BBQ and tandoori naan on Main Boulevard, Gulberg III, Lahore. Visit us.",
  keywords: [
    "about Zaiqa Lahore",
    "Zaiqa restaurant story",
    "Lahori restaurant Gulberg",
    "desi restaurant since 2013",
  ],
  alternates: { canonical: `${SITE.domain}/about/` },
  openGraph: {
    title: "About Zaiqa — Our Story Since 2013",
    description:
      "A six-table eatery that grew into Lahore's home for honest karahi and coal-smoked BBQ.",
    url: `${SITE.domain}/about/`,
    images: [{ url: "/images/interior.jpg", width: 900, height: 600, alt: "Inside the Zaiqa dining room in Gulberg III, Lahore" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Zaiqa — Our Story Since 2013",
    description:
      "A six-table eatery that grew into Lahore's home for honest karahi and coal-smoked BBQ.",
    images: ["/images/interior.jpg"],
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">About</span>
          </nav>
          <h1>About <em style={{ fontStyle: "italic", color: "var(--accent)" }}>Zaiqa</em></h1>
          <p>
            One iron karahi, six tables and a stubborn belief — this is how
            Zaiqa began, and how it still cooks today.
          </p>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 0, paddingBottom: 96 }}>
        <div className="container">
          <Reveal>
            <div className="legal">
              <h2>How Zaiqa started</h2>
              <p>
                Zaiqa opened its doors in 2013 on Main Boulevard, Gulberg III,
                Lahore, as a six-table eatery with a single iron karahi, a clay
                tandoor and a coal grill. The idea was simple and, at the time,
                unfashionable: cook a short menu of Lahori desi classics
                properly, charge a fair price, and let the food bring people
                back. There was no pre-made gravy, no freezer full of shortcuts
                and no compromise on desi ghee — and there still is not.
              </p>
              <p>
                Word travelled the way it always does in Lahore: one family
                told another. Within a few years the six tables became a full
                dining room, a dedicated family hall on the first floor and a
                rooftop section for winter evenings. What did not change was
                the kitchen. Every karahi is still cooked to order in a wok
                over high flame, every kabab is still marinated overnight and
                grilled over real coals, and every naan is still slapped onto
                the tandoor wall when you order it — never before.
              </p>

              <div className="about-photos">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/interior.jpg" alt="Inside the Zaiqa dining room in Gulberg III, Lahore" loading="lazy" width={900} height={600} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/interior-bright.jpg" alt="Zaiqa dining room with set tables and warm lighting" loading="lazy" width={900} height={600} />
              </div>

              <h2>What we cook</h2>
              <p>
                Our menu holds 48 dishes across five sections: BBQ and grill,
                karahi and handi, breads and rice, desserts, and drinks. The
                dishes Lahore knows us by are the chicken karahi — wok-tossed
                in desi ghee with fresh tomatoes, ginger and green chillies —
                the hand-rolled seekh kabab smoked over coals, the mutton
                karahi that regulars cross the city for, and the sweet lassi
                served in a clay kulhar under a crown of malai. Alongside them
                sit Sindhi beef biryani, yakhni beef pulao, daal makhani and
                palak paneer handis, kulfi falooda, and doodh patti poured
                from a height, the way chai should be.
              </p>
              <p>
                We buy our meat, dairy and produce fresh from Lahore markets
                every morning, grind our spice mixes in-house, and cook in
                small batches through the day so nothing sits waiting. If a
                dish cannot be made properly that day, it comes off the menu
                for the day — we would rather say no than serve you something
                we are not proud of.
              </p>

              <h2>Dining with us</h2>
              <p>
                Zaiqa is built for the way Lahore actually eats: big family
                dawats, office lunches that run long, anniversary dinners and
                late-night karahi runs with friends. The main dining room
                seats walk-in guests, the first-floor family hall gives
                families their own space, and the rooftop opens on pleasant
                evenings. Valet parking runs every evening from 7 PM, and we
                are open every day of the week from 12:00 PM to 12:00 AM,
                with the kitchen closing at 11:30 PM and a short Friday break
                from 1 to 2 PM.
              </p>
              <p>
                Reservations take about two minutes on WhatsApp — send your
                name, party size and seating preference and we confirm
                personally, usually within minutes. We also cater events
                across Lahore, from dawat platters for home gatherings to
                office lunches and wedding functions, with custom quotes
                shared within a day.
              </p>

              <h2>Visit us</h2>
              <p>
                You will find us at {SITE.address}. Call us on {SITE.phone},
                write to {SITE.email}, or simply walk in — the tandoor is
                lit from noon every day, and there is always a table being
                set. We look forward to feeding you.
              </p>

              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 32 }}>
                <Link className="btn btn-primary btn-lg" href="/reservations/">
                  Reserve a Table
                </Link>
                <a
                  className="btn btn-whatsapp btn-lg"
                  href={waLink("Assalam-o-Alaikum Zaiqa! I'd like to know more about Zaiqa.")}
                  target="_blank"
                  rel="noopener"
                >
                  Message Us on WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
