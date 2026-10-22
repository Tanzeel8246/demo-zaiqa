import type { Metadata } from "next";
import Script from "next/script";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { JsonLd, WhatsAppIcon } from "@/components/ui";
import { SITE, waLink } from "@/lib/site";

const inter = Inter({ variable: "--font-body", subsets: ["latin"] });
const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: "Zaiqa — Taste of Lahore | Karahi, BBQ & Desi Classics",
    template: "%s | Zaiqa — Taste of Lahore",
  },
  description:
    "Zaiqa in Gulberg III, Lahore serves wok-fired chicken karahi, coal-smoked BBQ, fresh tandoori naan and kulhar lassi. Open daily 12 PM to midnight.",
  keywords: [
    "Zaiqa Lahore",
    "best karahi Lahore",
    "BBQ restaurant Gulberg",
    "Pakistani restaurant Lahore",
    "chicken karahi",
    "seekh kabab",
    "desi food Lahore",
    "family restaurant Gulberg III",
  ],
  authors: [{ name: "Zaiqa" }],
  creator: "Zaiqa",
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE.domain}/` },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: SITE.domain,
    siteName: "Zaiqa — Taste of Lahore",
    title: "Zaiqa — Taste of Lahore | Karahi, BBQ & Desi Classics",
    description:
      "Wok-fired karahi, smoky BBQ, fresh naan and kulhar lassi — served daily till midnight in Gulberg III, Lahore.",
    images: [{ url: "/images/hero.jpg", width: 900, height: 550, alt: "Seekh kebabs sizzling over real coals on the Zaiqa grill" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaiqa — Taste of Lahore | Karahi, BBQ & Desi Classics",
    description:
      "Wok-fired karahi, smoky BBQ, fresh naan and kulhar lassi — served daily till midnight in Gulberg III, Lahore.",
    images: ["/images/hero.jpg"],
  },
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Zaiqa — Taste of Lahore",
  url: SITE.domain,
  servesCuisine: "Pakistani",
  priceRange: "Rs 500–2500",
  telephone: "+92-42-3577-8899",
  email: SITE.email,
  acceptsReservations: "True",
  address: {
    "@type": "PostalAddress",
    streetAddress: "14-B Main Boulevard, Gulberg III",
    addressLocality: "Lahore",
    addressRegion: "Punjab",
    postalCode: "54660",
    addressCountry: "PK",
  },
  openingHours: "Mo-Su 12:00-24:00",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday", "Tuesday", "Wednesday", "Thursday",
      "Friday", "Saturday", "Sunday",
    ],
    opens: "12:00",
    closes: "24:00",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zaiqa — Taste of Lahore",
  url: SITE.domain,
  slogan: SITE.tagline,
  telephone: "+92-42-3577-8899",
  email: SITE.email,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${fraunces.variable}`}
    >
      <Script
        id="theme-init"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(){try{var t=localStorage.getItem('zaiqa-theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='light';}})();`,
        }}
      />
      <body>
        <JsonLd data={restaurantJsonLd} />
        <JsonLd data={orgJsonLd} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <a
          className="wa-float"
          href={waLink("Assalam-o-Alaikum Zaiqa! I have a question.")}
          target="_blank"
          rel="noopener"
          aria-label="Chat with Zaiqa on WhatsApp"
        >
          <WhatsAppIcon />
        </a>
      </body>
    </html>
  );
}
