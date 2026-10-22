import Link from "next/link";

export const metadata = {
  title: "Page not found",
  description: "The page you are looking for does not exist on Zaiqa — Taste of Lahore.",
};

export default function NotFound() {
  return (
    <section className="section">
      <div className="container" style={{ textAlign: "center" }}>
        <div className="notfound-num">404</div>
        <h1 style={{ margin: "16px 0 12px", fontSize: "2rem" }}>This plate is empty</h1>
        <p className="lead" style={{ margin: "0 auto 32px" }}>
          The page you&apos;re looking for isn&apos;t on our menu — but a hot
          karahi is only one click away.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Link className="btn btn-primary" href="/">
            Back to home
          </Link>
          <Link className="btn btn-ghost" href="/menu/">
            See the menu
          </Link>
        </div>
      </div>
    </section>
  );
}
