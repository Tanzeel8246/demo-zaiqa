import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Zaiqa privacy policy: what information we collect for reservations, how we use it, cookies, advertising and your rights. Gulberg III, Lahore.",
  keywords: ["Zaiqa privacy policy", "Zaiqa data protection", "restaurant privacy Lahore"],
  alternates: { canonical: `${SITE.domain}/privacy/` },
  openGraph: {
    title: "Privacy Policy — Zaiqa",
    description: "What information Zaiqa collects, how we use it, and your rights.",
    url: `${SITE.domain}/privacy/`,
    images: [{ url: "/images/hero.jpg", width: 900, height: 550, alt: "Seekh kebabs sizzling over real coals on the Zaiqa grill" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — Zaiqa",
    description: "What information Zaiqa collects, how we use it, and your rights.",
    images: ["/images/hero.jpg"],
  },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Privacy Policy</span>
          </nav>
          <h1>Privacy <em style={{ fontStyle: "italic", color: "var(--accent)" }}>Policy</em></h1>
          <p>How Zaiqa — Taste of Lahore handles your information.</p>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 0, paddingBottom: 96 }}>
        <div className="container">
          <Reveal>
            <div className="legal">
              <p className="updated">Last updated: 20 October 2026</p>

              <h2>Who we are</h2>
              <p>
                Zaiqa — Taste of Lahore (&ldquo;Zaiqa&rdquo;, &ldquo;we&rdquo;,
                &ldquo;us&rdquo;) is a restaurant located at {SITE.address}.
                This policy explains what personal information we collect
                through this website and our reservation channels, why we
                collect it, and the choices you have. You can reach us about
                any privacy question at {SITE.email} or {SITE.phone}.
              </p>

              <h2>Information we collect</h2>
              <p>We keep data collection to the minimum a restaurant needs:</p>
              <ul>
                <li>
                  <strong>Reservation details.</strong> When you book through
                  our reservation form or WhatsApp, we receive your name,
                  phone number, preferred date and time, party size, seating
                  preference and any note you add (for example, a birthday or
                  accessibility request).
                </li>
                <li>
                  <strong>Contact messages.</strong> If you call, email or
                  message us, we receive your contact details and the contents
                  of your message, including catering enquiries.
                </li>
                <li>
                  <strong>Device and usage data.</strong> Like most websites,
                  our hosting may record standard technical logs such as your
                  IP address, browser type and pages visited, used only to
                  keep the site secure and working.
                </li>
              </ul>
              <p>
                We do not operate user accounts on this website, and we never
                ask for or store payment card details through this website.
              </p>

              <h2>How we use your information</h2>
              <ul>
                <li>To confirm, prepare and manage your reservation.</li>
                <li>To reply to enquiries, catering requests and feedback.</li>
                <li>To improve our menu, service and this website.</li>
                <li>To comply with legal and tax record-keeping duties in Pakistan.</li>
              </ul>
              <p>
                We do not sell your personal information, and we do not use
                reservation details for unrelated marketing. If we ever send
                promotional messages, it will only be with your consent, and
                every message will offer a simple way to opt out.
              </p>

              <h2>Cookies and advertising</h2>
              <p>
                This website stores one small preference — your light or dark
                theme choice — in your browser&apos;s local storage so the
                site looks the way you left it. It is not used to track you.
                This website may also display advertising served by Google
                AdSense. Google and its partners may use cookies to serve ads
                based on your prior visits to this and other websites. You can
                opt out of personalised advertising by visiting Google&apos;s
                Ad Settings, and you can learn how Google uses data from
                sites that use its services on Google&apos;s Privacy &amp;
                Terms pages. You can also disable cookies in your browser
                settings; the core of this website will continue to work.
              </p>

              <h2>Sharing and third parties</h2>
              <p>
                Reservations are confirmed through WhatsApp, so when you tap
                &ldquo;Confirm on WhatsApp&rdquo; your booking message is sent
                through WhatsApp under WhatsApp&apos;s own privacy policy. We
                may share limited information with service providers who help
                us run the restaurant (for example, hosting) under
                confidentiality obligations, and we will disclose information
                if required by Pakistani law or a court order.
              </p>

              <h2>Retention and security</h2>
              <p>
                Reservation details are kept only as long as needed to honour
                the booking and meet our record-keeping obligations, after
                which they are deleted or anonymised. We apply reasonable
                technical and organisational measures to protect the
                information we hold, though no internet transmission is ever
                completely secure.
              </p>

              <h2>Your rights</h2>
              <p>
                You may ask us at any time what personal information we hold
                about you, ask us to correct it, or ask us to delete it. Write
                to {SITE.email} with your name and the phone number used for
                the booking and we will respond within a reasonable time.
                This website is intended for general audiences; we do not
                knowingly collect personal information from children.
              </p>

              <h2>Changes to this policy</h2>
              <p>
                If we change this policy in a meaningful way, we will update
                the date at the top of this page. Continued use of this
                website after a change means you accept the updated policy.
                For anything unclear, contact us via our{" "}
                <Link href="/contact/">contact page</Link>.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
