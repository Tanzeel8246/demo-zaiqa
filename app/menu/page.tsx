import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import MenuExplorer from "@/components/MenuExplorer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Menu — 48 Desi Classics",
  description:
    "Explore the full Zaiqa menu in Lahore: coal-smoked BBQ, wok-fired karahi and handi, tandoori breads, biryani, desserts and drinks with PKR prices.",
  keywords: [
    "Zaiqa menu",
    "chicken karahi price Lahore",
    "BBQ menu Gulberg",
    "seekh kabab price",
    "desi restaurant menu Pakistan",
  ],
  alternates: { canonical: `${SITE.domain}/menu/` },
  openGraph: {
    title: "Zaiqa Menu — 48 Desi Classics",
    description: "BBQ, karahi, handi, biryani, desserts & drinks with honest PKR prices.",
    url: `${SITE.domain}/menu/`,
    images: [{ url: "/images/bbq-platter.jpg", width: 900, height: 1200, alt: "Mixed BBQ platter with skewers, grilled meats and chutneys at Zaiqa" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaiqa Menu — 48 Desi Classics",
    description: "BBQ, karahi, handi, biryani, desserts & drinks with honest PKR prices.",
    images: ["/images/bbq-platter.jpg"],
  },
};

export default function MenuPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Menu</span>
          </nav>
          <h1>The full <em style={{ fontStyle: "italic", color: "var(--accent)" }}>menu</em></h1>
          <p>
            Forty-eight dishes, five sections, zero shortcuts. Prices include
            all taxes — what you see is what the bill says.
          </p>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 0, paddingBottom: 96 }}>
        <div className="container">
          <MenuExplorer />
          <Reveal>
            <p className="menu-count">
              Everything is cooked fresh to order · Please allow 20–25 minutes
              for karahi during peak hours
            </p>
            <div style={{ textAlign: "center", marginTop: 28 }}>
              <Link className="btn btn-primary btn-lg" href="/reservations/">
                Reserve a table for dinner
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
