import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import Reveal from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Gallery — From Our Kitchen",
  description:
    "A visual taste of Zaiqa: sizzling karahi, coal BBQ, tandoori naan, kulhar lassi and more — photographed at our Gulberg III kitchen. Taste of Lahore.",
  keywords: [
    "Zaiqa gallery",
    "karahi photos",
    "Lahore BBQ",
    "desi food gallery",
  ],
  alternates: { canonical: `${SITE.domain}/gallery/` },
  openGraph: {
    title: "Zaiqa Gallery — From Our Kitchen",
    description: "Sizzling karahi, coal BBQ, tandoori naan and kulhar lassi.",
    url: `${SITE.domain}/gallery/`,
    images: [{ url: "/images/interior-bright.jpg", width: 900, height: 600, alt: "Zaiqa dining room with set tables and warm lighting in Gulberg III" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaiqa Gallery — From Our Kitchen",
    description: "Sizzling karahi, coal BBQ, tandoori naan and kulhar lassi.",
    images: ["/images/interior-bright.jpg"],
  },
};

type Tile = { img: string; caption: string; sub: string; alt: string; span?: string };

const TILES: Tile[] = [
  { img: "/images/karahi.jpg", caption: "Chicken Karahi", sub: "Bubbling in desi ghee, straight off the wok", alt: "Chicken karahi in a wok with fresh naan", span: "tall" },
  { img: "/images/kebab.jpg", caption: "Seekh Kabab", sub: "Hand-rolled, smoked over real coals", alt: "Seekh kebabs plated with fries and salad" },
  { img: "/images/curry-naan.jpg", caption: "Karahi & Naan", sub: "Blistered naan, slapped fresh on the tandoor wall", alt: "Curry served with tandoori naan" },
  { img: "/images/biryani.jpg", caption: "Layered Biryani", sub: "Saffron rice, whole green chili on top", alt: "Chicken biryani with raita bowls", span: "wide" },
  { img: "/images/lassi.jpg", caption: "Kulhar Lassi", sub: "Thick churned dahi under a malai crown", alt: "Sweet lassi in a clay kulhar with pistachio" },
  { img: "/images/hero.jpg", caption: "On the Grill", sub: "Where every kebab meets real coal fire", alt: "Kebabs grilling over open coals" },
  { img: "/images/chai.jpg", caption: "Chai Hour", sub: "Strong, spiced and unhurried", alt: "Cup of chai with whole spices", span: "wide" },
  { img: "/images/dessert.jpg", caption: "Something Sweet", sub: "Warm caramel over a cold scoop", alt: "Ice cream dessert with caramel sauce" },
  { img: "/images/interior.jpg", caption: "The Dining Room", sub: "Family hall & rooftop — Main Boulevard, Gulberg III", alt: "Zaiqa dining room interior", span: "tall" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Gallery</span>
          </nav>
          <h1>From our <em style={{ fontStyle: "italic", color: "var(--accent)" }}>kitchen</em></h1>
          <p>
            A warm look at what actually leaves our tandoor, wok and karahi
            every day — plated, poured and pulled off the coals.
          </p>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="art-grid">
            {TILES.map((t, i) => (
              <Reveal key={t.caption} delay={(i % 3) as 0 | 1 | 2} className={t.span ?? ""}>
                <figure className={`art-tile ${t.span ?? ""}`} style={{ height: "100%" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="art-img" src={t.img} alt={`${t.alt} — ${t.sub}`} loading="lazy" width={900} height={675} />
                  <figcaption className="art-cap">
                    {t.caption}
                    <small>{t.sub}</small>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading
            center
            eyebrow="Behind the pass"
            title={<>Shot between <em>service</em></>}
            lead="No studio, no styling tricks — just the food as it leaves the kitchen."
          />
          <Reveal>
            <div className="legal">
              <p>
                Every photograph on this page was taken during real service at
                our Gulberg III kitchen. The karahi you see bubbling in desi
                ghee was ordered by a table in the family hall minutes before
                the shutter clicked; the seekh kababs came straight off the
                coal grill, where they are turned by hand and rested before
                plating; and the kulhar lassi was churned that afternoon,
                crowned with malai and crushed pistachio the way we have
                served it since 2013.
              </p>
              <p>
                That is deliberate. A gallery should set an honest expectation:
                the char on the tikka, the blister on the naan, the sheen of
                ghee on the handi — what you see here is what arrives at your
                table, cooked to order over real fire. If a plate ever falls
                short of these pictures, tell us on the spot and we will make
                it right.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-sm" style={{ paddingBottom: 96 }}>
        <div className="container">
          <SectionHeading
            center
            eyebrow="Hungry yet"
            title="Come taste it in person"
            lead="Photos are nice. A sizzling karahi on your table is better."
          />
          <Reveal>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link className="btn btn-primary btn-lg" href="/reservations/">
                Reserve a Table
              </Link>
              <Link className="btn btn-ghost btn-lg" href="/menu/">
                Browse the Menu
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
