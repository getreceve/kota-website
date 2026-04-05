"use client";

/*
  Logo sources:
  - HubSpot, Salesforce: SimpleIcons CDN (reliable, MIT-licensed SVGs)
  - All others: text wordmarks — these are niche/industry-specific tools
    not available on public icon CDNs
*/

type Logo =
  | { type: "img";  alt: string; src: string; height: number }
  | { type: "text"; name: string; weight: number; italic?: boolean };

const LOGOS: Logo[] = [
  { type: "text", name: "DebtPayPro",  weight: 600 },
  { type: "text", name: "GoHighLevel", weight: 500 },
  {
    type: "img",
    alt: "HubSpot",
    src: "https://cdn.simpleicons.org/hubspot/ffffff",
    height: 22,
  },
  {
    type: "img",
    alt: "Salesforce",
    src: "https://cdn.simpleicons.org/salesforce/ffffff",
    height: 26,
  },
  { type: "text", name: "Convoso",   weight: 600 },
  { type: "text", name: "TCN",       weight: 700 },
  { type: "text", name: "CallTools", weight: 500 },
  { type: "text", name: "Kixie",     weight: 600 },
  { type: "text", name: "Five9",     weight: 700 },
];

function LogoItem({ logo }: { logo: Logo }) {
  if (logo.type === "img") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={logo.src}
        alt={logo.alt}
        height={logo.height}
        style={{
          height: logo.height,
          width: "auto",
          opacity: 0.45,
          filter: "brightness(0) invert(1)",
          display: "block",
          flexShrink: 0,
        }}
        loading="lazy"
        draggable={false}
      />
    );
  }

  return (
    <span
      style={{
        fontWeight: logo.weight,
        fontSize: 15,
        color: "rgba(255,255,255,0.38)",
        letterSpacing: "-0.01em",
        whiteSpace: "nowrap",
        userSelect: "none",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {logo.name}
    </span>
  );
}

export default function LogoBanner() {
  // Duplicate set creates the seamless loop:
  // The track is 200% wide; animation moves it -50% (= one full set).
  const set = [...LOGOS, ...LOGOS];

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "#0A0A0A",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        paddingTop: 28,
        paddingBottom: 28,
      }}
    >
      {/* Eyebrow label */}
      <p
        className="text-center section-label mb-5 sm:mb-6 px-4"
        style={{ color: "rgba(16,185,129,0.6)" }}
      >
        Works With Your Existing Stack
      </p>

      {/* Ticker */}
      <div className="ticker-mask overflow-hidden">
        <div
          className="ticker-track flex items-center"
          style={{ gap: 56, width: "max-content" }}
        >
          {set.map((logo, i) => (
            <LogoItem
              key={i}
              logo={
                /* slightly smaller on mobile is handled by the fontSize/height
                   already being compact; no JS needed */
                logo
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
