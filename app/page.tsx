import Link from "next/link";
import { SITE, SIGNATURE_DISHES, FAQS, waLink } from "@/lib/site";
import Reveal from "@/components/Reveal";
import { SectionHeading, Icon, JsonLd } from "@/components/ui";
import Counters from "@/components/Counters";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FaqAccordion from "@/components/FaqAccordion";

const MARQUEE_ITEMS = [
  "Chicken Karahi", "Seekh Kabab", "Mutton Chops", "Kulhar Lassi",
  "Beef Pulao", "Kulfi Falooda", "Malai Boti", "Kashmiri Chai",
];

const DISH_PHOTOS = [
  { src: "/images/karahi.jpg", alt: "Chicken karahi served in a traditional wok with fresh naan" },
  { src: "/images/kebab.jpg", alt: "Seekh kebabs plated with fries, onion and tomato" },
  { src: "/images/handi.jpg", alt: "Rich mutton curry simmering in a copper handi" },
  { src: "/images/lassi.jpg", alt: "Sweet lassi in a clay kulhar topped with malai and pistachio" },
];

const CATEGORIES = [
  {
    name: "BBQ & Grill",
    meta: "10 items · from Rs 380",
    desc: "Tikka, seekh kabab, malai boti and mutton chops — marinated overnight, finished over real coals.",
    img: "/images/bbq-platter.jpg",
    alt: "Mixed BBQ platter with skewers, grilled meats and chutneys",
  },
  {
    name: "Karahi & Handi",
    meta: "10 items · from Rs 950",
    desc: "Wok-fired in desi ghee with fresh tomato and ginger. Cooked to order, never from a pre-made gravy.",
    img: "/images/curry-naan.jpg",
    alt: "Karahi curry served with blistered tandoori naan",
  },
  {
    name: "Breads & Rice",
    meta: "10 items · from Rs 60",
    desc: "Roghni naan slapped fresh on the tandoor wall, layered biryani and yakhni beef pulao.",
    img: "/images/biryani.jpg",
    alt: "Layered chicken biryani with raita served on the side",
  },
  {
    name: "Desserts & Drinks",
    meta: "18 items · from Rs 150",
    desc: "Kulfi falooda, warm gulab jamun and kulhar lassi — plus doodh patti and pink Kashmiri chai.",
    img: "/images/dessert.jpg",
    alt: "Ice cream dessert with warm caramel being poured over",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Pick your moment",
    desc: "Choose a day and a slot that suits the table — we seat from 12:30 PM to 10:30 PM, seven days a week.",
  },
  {
    num: "02",
    title: "Book on WhatsApp",
    desc: "Send your name, party size and seating preference — rooftop, family hall or by the tandoor. We confirm in about two minutes.",
  },
  {
    num: "03",
    title: "Arrive hungry",
    desc: "Your table is set before you walk in, the karahi goes on the fire when you sit down, and valet takes the car from 7 PM.",
  },
];

const GALLERY_PREVIEW = [
  { img: "/images/bbq-platter.jpg", caption: "The BBQ Platter", sub: "The whole grill on one tray — serves four", span: "wide", alt: "Mixed grill platter with kebabs and dips" },
  { img: "/images/biryani.jpg", caption: "Chicken Biryani", sub: "Layered basmati, saffron milk, whole green chili", alt: "Plate of chicken biryani with raita" },
  { img: "/images/curry-spread.jpg", caption: "From the Handi", sub: "Curries, rice and breads for the full table", alt: "Overhead spread of curries and rice bowls" },
  { img: "/images/samosa.jpg", caption: "Samosa Chaat Break", sub: "Crisp samosas with green chutney", alt: "Golden samosas with chutney and pomegranate" },
  { img: "/images/chai.jpg", caption: "Chai, Always", sub: "Doodh patti poured strong, elaichi on request", alt: "Cup of tea with whole spices on a rustic cloth" },
  { img: "/images/interior-bright.jpg", caption: "The Dining Room", sub: "Family hall & rooftop — Main Boulevard, Gulberg III", span: "wide", alt: "Zaiqa dining room with set tables and warm lighting" },
];

function Marquee() {
  const chunk = (hidden: boolean) => (
    <div className="marquee-chunk" aria-hidden={hidden || undefined}>
      {MARQUEE_ITEMS.map((m) => (
        <span key={m} style={{ display: "inline-flex", alignItems: "center", gap: 34 }}>
          {m}
          <span className="sep" aria-hidden="true">✦</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="marquee" aria-label="Our specialties">
      <div className="marquee-track">
        {chunk(false)}
        {chunk(true)}
      </div>
    </div>
  );
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      {/* ---------- 1 · hero ---------- */}
      <section className="hero">
        <div className="hero-art" aria-hidden="true" />
        <div className="hero-pattern" aria-hidden="true" />
        <div className="container hero-inner">
          <span className="hero-badge">
            <span className="dot" aria-hidden="true" />
            Open today · 12:00 PM – 12:00 AM
          </span>
          <h1 className="hero-title">
            Where Lahore comes<br />to <em>eat well.</em>
          </h1>
          <p className="hero-sub">
            Wok-fired karahi, coal-smoked BBQ and tandoor-fresh naan — twelve
            years of desi classics, served hot on Main Boulevard, Gulberg III.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary btn-lg" href="/menu/">
              Explore the Menu
            </Link>
            <Link className="btn btn-ghost btn-lg" href="/reservations/">
              Reserve a Table
            </Link>
          </div>
          <div className="hero-meta">
            <span><Icon name="pin" /> {SITE.address}</span>
            <span><Icon name="phone" /> {SITE.phone}</span>
            <span><Icon name="star" /> 4.9 — loved by 25,000+ guests</span>
          </div>
          <figure className="hero-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero.jpg"
              alt="Seekh kebabs sizzling over real coals on the Zaiqa grill"
              width={900}
              height={550}
            />
          </figure>
        </div>
      </section>

      <Marquee />

      {/* ---------- trust strip ---------- */}
      <div className="trust-strip">
        <div className="container trust-grid">
          <span className="trust-item"><Icon name="star" /> <span><b>4.9 rating</b> from 25,000+ guests</span></span>
          <span className="trust-item"><Icon name="flame" /> <span><b>Cooked to order</b> — no pre-made gravy</span></span>
          <span className="trust-item"><Icon name="clock" /> <span><b>Open daily</b> 12:00 PM – 12:00 AM</span></span>
          <span className="trust-item"><Icon name="pin" /> <span><b>Valet parking</b> every evening from 7 PM</span></span>
        </div>
      </div>

      {/* ---------- 2 · featured categories ---------- */}
      <section className="section">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Start here"
            title={<>Four ways to <em>build a table</em></>}
            lead="48 dishes, five corners of the kitchen. Most tables start with one of these — and end with all four."
          />
          <div className="grid-2">
            {CATEGORIES.map((c, i) => (
              <Reveal key={c.name} delay={(i % 2) as 0 | 1}>
                <article className="card cat-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.img} alt={c.alt} loading="lazy" width={900} height={600} />
                  <div className="cat-body">
                    <span className="cat-meta">{c.meta}</span>
                    <h3>{c.name}</h3>
                    <p className="desc">{c.desc}</p>
                    <Link className="card-link" href="/menu/">
                      Browse {c.name} <Icon name="arrow" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 3 · signature dishes ---------- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading
            center
            eyebrow="From the kitchen"
            title={<>Dishes Lahore <em>talks about</em></>}
            lead="Four plates that built our name. Everything else on the menu is held to their standard."
          />
          <div className="grid-2">
            {SIGNATURE_DISHES.map((d, i) => (
              <Reveal key={d.name} delay={(i % 2) as 0 | 1}>
                <article className="card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="dish-photo"
                    src={DISH_PHOTOS[i % DISH_PHOTOS.length].src}
                    alt={DISH_PHOTOS[i % DISH_PHOTOS.length].alt}
                    loading="lazy"
                    width={900}
                    height={675}
                  />
                  {d.tag && <span className="tag">{d.tag}</span>}
                  <h3>{d.name}</h3>
                  <p className="desc">{d.desc}</p>
                  <div className="dish-price">{d.price}</div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="center" delay={1}>
            <div style={{ textAlign: "center", marginTop: 44 }}>
              <Link className="btn btn-ghost btn-lg" href="/menu/">
                See the full menu <Icon name="arrow" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Counters />

      {/* ---------- 4 · story ---------- */}
      <section className="section">
        <div className="container two-col">
          <Reveal>
            <div className="story-visual">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="story-img"
                src="/images/interior.jpg"
                alt="Inside the Zaiqa dining room in Gulberg III, Lahore"
                loading="lazy"
                width={900}
                height={600}
              />
              <div className="shade" aria-hidden="true" />
              <div className="frame" aria-hidden="true" />
              <p className="caption">One wok. Real fire. No shortcuts — since 2013.</p>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="eyebrow">Our story</span>
              <h2 className="h2">A dhaba&apos;s soul,<br />a Lahori <em>mehmaan-nawazi.</em></h2>
              <p className="lead">
                Zaiqa started in 2013 as a six-table eatery with one iron karahi
                and a stubborn belief: desi food should taste like someone&apos;s
                grandmother is watching the cook. Twelve years on, the room is
                bigger — the belief hasn&apos;t moved an inch.
              </p>
              <ul className="check-list">
                <li>Karahi cooked to order in desi ghee — never pre-made gravy</li>
                <li>BBQ grilled over real coals, marinated overnight in-house</li>
                <li>Naan and roti slapped fresh onto the tandoor wall, all day</li>
                <li>Family hall, rooftop seating and valet parking every evening</li>
              </ul>
              <div style={{ marginTop: 32 }}>
                <a
                  className="btn btn-whatsapp"
                  href={waLink("Assalam-o-Alaikum Zaiqa! I'd like to know more about your catering.")}
                  target="_blank"
                  rel="noopener"
                >
                  Ask about catering
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- 5 · how it works ---------- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading
            center
            eyebrow="Reservations"
            title={<>From craving to table in <em>three steps</em></>}
            lead="No apps, no accounts, no hold music. One WhatsApp message is the whole system."
          />
          <div className="steps-grid">
            {STEPS.map((s, i) => (
              <Reveal key={s.num} delay={(i % 3) as 0 | 1 | 2}>
                <article className="step-card">
                  <span className="step-num">{s.num}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 6 · gallery preview ---------- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading
            center
            eyebrow="The gallery"
            title={<>Straight off the <em>pass</em></>}
            lead="What leaves our tandoor, wok and grill on an ordinary evening in Gulberg."
          />
          <div className="art-grid">
            {GALLERY_PREVIEW.map((t, i) => (
              <Reveal key={t.caption} delay={(i % 3) as 0 | 1 | 2} className={t.span ?? ""}>
                <figure className={`art-tile ${t.span ?? ""}`} style={{ height: "100%" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="art-img" src={t.img} alt={t.alt} loading="lazy" width={900} height={675} />
                  <figcaption className="art-cap">
                    {t.caption}
                    <small>{t.sub}</small>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal className="center" delay={1}>
            <div style={{ textAlign: "center", marginTop: 44 }}>
              <Link className="btn btn-ghost btn-lg" href="/gallery/">
                Open the full gallery <Icon name="arrow" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- 7 · testimonials ---------- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading
            center
            eyebrow="Guest words"
            title={<>Lahore has <em>opinions.</em> We&apos;ll take them.</>}
            lead="Unfiltered words from our tables — the regulars, the visitors, the dawat planners."
          />
          <Reveal>
            <TestimonialCarousel />
          </Reveal>
        </div>
      </section>

      {/* ---------- 8 · FAQ ---------- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading
            center
            eyebrow="Good to know"
            title={<>Before you <em>come over</em></>}
            lead="The five questions our WhatsApp actually gets — answered before you have to ask."
          />
          <Reveal>
            <FaqAccordion items={FAQS} />
          </Reveal>
        </div>
      </section>

      {/* ---------- 9 · reservation CTA ---------- */}
      <section className="section-sm" style={{ paddingBottom: 96 }}>
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <span className="eyebrow">Book ahead</span>
              <h2>Hungry tonight? Your table is two minutes away.</h2>
              <p>
                Tell us when you&apos;re coming on WhatsApp and we&apos;ll have the
                table ready — rooftop, family hall, or right by the tandoor.
              </p>
              <div className="btn-row">
                <Link className="btn btn-gold btn-lg" href="/reservations/">
                  Reserve a Table
                </Link>
                <a className="btn btn-ghost btn-lg" href={`tel:${SITE.phone.replace(/\s/g, "")}`}>
                  Call {SITE.phone}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
