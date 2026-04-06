"use client";

const LOGOS = [
  { alt: "8x8",         src: "/logos/8x8-logo.svg.png" },
  { alt: "Convoso",     src: "/logos/convoso-logo.png" },
  { alt: "DebtPayPro",  src: "/logos/debtpaypro-logo.png" },
  { alt: "Forth",       src: "/logos/forth-logo.png" },
  { alt: "HighLevel",   src: "/logos/highlevel-logo.png" },
  { alt: "HubSpot",     src: "/logos/hubspot-logo.png" },
  { alt: "Kixie",       src: "/logos/kixie-logo.png" },
  { alt: "Salesforce",  src: "/logos/salesforce-logo.svg.png" },
  { alt: "TCN",         src: "/logos/tcn-logo.png" },
];

// Every logo renders at exactly this height; width scales proportionally.
// This guarantees equal visual weight regardless of each logo's aspect ratio.
const LOGO_H = 40; // px

function LogoItem({ alt, src }: { alt: string; src: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      style={{
        height: LOGO_H,
        width: "auto",
        maxWidth: 200,
        opacity: 0.75,
        display: "block",
        flexShrink: 0,
        userSelect: "none",
      }}
      loading="lazy"
      draggable={false}
    />
  );
}

export default function LogoBanner() {
  // Duplicate the set twice for the seamless infinite scroll:
  // The track is 200% wide; the animation shifts it -50% (one full set).
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
          style={{ gap: 72, width: "max-content" }}
        >
          {set.map((logo, i) => (
            <LogoItem key={i} alt={logo.alt} src={logo.src} />
          ))}
        </div>
      </div>
    </section>
  );
}
