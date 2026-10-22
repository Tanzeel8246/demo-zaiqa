import type { ReactNode } from "react";
import Reveal from "./Reveal";

/** Emit JSON-LD structured data. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  center = false,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  center?: boolean;
}) {
  return (
    <Reveal>
      <div className={`section-head ${center ? "center" : ""}`}>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="h2">{title}</h2>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </Reveal>
  );
}

/** Shared inline SVG icon set (no emojis in the UI). */
export function Icon({ name }: { name: "clock" | "pin" | "phone" | "arrow" | "flame" | "star" }) {
  const paths: Record<string, ReactNode> = {
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    pin: (
      <>
        <path d="M12 21s-7-5.1-7-11a7 7 0 0 1 14 0c0 5.9-7 11-7 11Z" />
        <circle cx="12" cy="10" r="2.6" />
      </>
    ),
    phone: (
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    ),
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    flame: (
      <path d="M12 22c4.4 0 7.5-3 7.5-7.2 0-3.1-1.8-5.3-3.4-7.1C14.6 6 13.5 4.6 13.5 2c-3 2-4.4 4-5.3 6.2-.5-1-.8-2.2-.9-3.5C5.6 6.4 4.5 9 4.5 12 4.5 17.5 7.6 22 12 22Z" />
    ),
    star: <path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9 2.9-6Z" />,
  };
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

export function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.04 2a9.9 9.9 0 0 0-8.6 14.9L2 22l5.25-1.38A9.9 9.9 0 1 0 12.04 2Zm0 1.8a8.1 8.1 0 1 1-4.13 15.05l-.3-.18-3.06.8.82-2.98-.2-.31a8.1 8.1 0 0 1 6.87-12.38Zm-3.5 4.02c-.19 0-.5.07-.76.35-.26.27-1 .98-1 2.4 0 1.42 1.03 2.79 1.17 2.98.14.19 2 3.2 4.97 4.4 2.47 1 2.97.8 3.5.75.54-.05 1.73-.7 1.97-1.39.24-.68.24-1.26.17-1.39-.07-.12-.26-.19-.54-.34-.28-.14-1.65-.81-1.9-.9-.26-.1-.44-.14-.63.14-.19.28-.72.9-.88 1.08-.16.19-.33.21-.61.07a7.7 7.7 0 0 1-2.26-1.4 8.5 8.5 0 0 1-1.57-1.96c-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.16.19-.28.28-.47.1-.19.05-.35-.02-.5-.07-.14-.63-1.5-.86-2.06-.23-.54-.45-.47-.63-.48h-.53Z" />
    </svg>
  );
}
