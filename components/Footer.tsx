import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="nav-logo" aria-label="Zaiqa — home">
            Zaiqa<small>Taste of Lahore</small>
          </Link>
          <p>
            Fire, desi ghee and twelve years of practice. Lahore&apos;s home for
            honest karahi, smoky BBQ and kulhar lassi — served daily till midnight.
          </p>
          <Link className="btn btn-primary btn-sm" href="/reservations/">
            Reserve a Table
          </Link>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Find Us</h4>
          <ul>
            <li><span>{SITE.address}</span></li>
            <li>
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Hours</h4>
          <ul className="footer-hours">
            <li><span>Mon – Sun</span><span>12 PM – 12 AM</span></li>
            <li><span>Friday break</span><span>1 – 2 PM</span></li>
            <li><span>Kitchen closes</span><span>11:30 PM</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <span>© {new Date().getFullYear()} {SITE.name} — {SITE.tagline}. All rights reserved.</span>
          <span className="footer-legal">
            <Link href="/privacy/">Privacy Policy</Link>
            <Link href="/terms/">Terms of Service</Link>
          </span>
          <span>
            Website by{" "}
            <a href="https://codehubb.com" target="_blank" rel="noopener">
              CodeHubb
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
