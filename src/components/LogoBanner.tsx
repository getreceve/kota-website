"use client";

// Uniform height for every logo — no per-logo overrides
const LOGO_H = 32;

const LOGOS = [
  { alt: "8x8",          src: "/logos/8x8-logo.svg.png" },
  { alt: "Aircall",      src: "/logos/aircall-logo.png" },
  { alt: "Convoso",      src: "/logos/convoso-logo.png" },
  { alt: "DebtPayPro",   src: "/logos/debtpaypro-logo.png" },
  { alt: "Forth",        src: "/logos/forth-logo.png" },
  { alt: "HighLevel",    src: "/logos/highlevel-logo.png" },
  { alt: "HubSpot",      src: "/logos/hubspot-logo.png" },
  { alt: "Kixie",        src: "/logos/kixie-logo.png" },
  { alt: "Monday.com",   src: "/logos/monday-logo.png" },
  { alt: "PhoneBurner",  src: "/logos/phoneburner-logo.png" },
  { alt: "Pipedrive",    src: "/logos/pipedrive-logo.png" },
  { alt: "RingCentral",  src: "/logos/ringcentral-logo.png" },
  { alt: "Salesforce",   src: "/logos/salesforce-logo.svg.png" },
  { alt: "TCN",          src: "/logos/tcn-logo.png" },
  { alt: "Ytel",         src: "/logos/ytel-logo.png" },
  { alt: "Zoho",         src: "/logos/zoho-logo.png" },
];

function LogoItem({ alt, src }: { alt: string; src: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      style={{
        height: LOGO_H,
        width: "auto",
        maxWidth: 160,
        opacity: 0.75,
        display: "block",
        flexShrink: 0,
        userSelect: "none",
      }}
      loading="eager"
      draggable={false}
    />
  );
}

export default function LogoBanner() {
  // Duplicate the full set — animation moves -50% so the loop is seamless
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
      <p
        className="text-center section-label mb-5 sm:mb-6 px-4"
        style={{ color: "rgba(16,185,129,0.6)" }}
      >
        Works With Your Existing Stack
      </p>

      {/* ticker-mask: edge fade — ticker-track: animation + hover pause (globals.css) */}
      <div className="ticker-mask overflow-hidden">
        <div
          className="ticker-track flex items-center"
          style={{ gap: 64, width: "max-content" }}
        >
          {set.map((logo, i) => (
            <LogoItem key={i} alt={logo.alt} src={logo.src} />
          ))}
        </div>
      </div>
    </section>
  );
}
