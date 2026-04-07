"use client";

// Uniform height for every logo — no per-logo overrides
const LOGO_H = 32;

// height overrides compensate for logos with heavy transparent padding in the PNG canvas
const LOGOS: { alt: string; src: string; height?: number }[] = [
  { alt: "8x8",          src: "/logos/8x8-logo.svg.png" },
  { alt: "Aircall",      src: "/logos/aircall-logo.png" },
  { alt: "Convoso",      src: "/logos/convoso-logo.png" },
  { alt: "DebtPayPro",   src: "/logos/debtpaypro-logo.png" },
  { alt: "Forth",        src: "/logos/forth-logo.png" },
  { alt: "HighLevel",    src: "/logos/highlevel-logo.png",    height: 72 },
  { alt: "HubSpot",      src: "/logos/hubspot-logo.png" },
  { alt: "Kixie",        src: "/logos/kixie-logo.png" },
  { alt: "Monday.com",   src: "/logos/monday-logo.png",       height: 56 },
  { alt: "PhoneBurner",  src: "/logos/phoneburner-logo.png" },
  { alt: "Pipedrive",    src: "/logos/pipedrive-logo.png",    height: 60 },
  { alt: "RingCentral",  src: "/logos/ringcentral-logo.png",  height: 56 },
  { alt: "Salesforce",   src: "/logos/salesforce-logo.svg.png" },
  { alt: "TCN",          src: "/logos/tcn-logo.png" },
  { alt: "Ytel",         src: "/logos/ytel-logo.png" },
  { alt: "Zoho",         src: "/logos/zoho-logo.png",         height: 80 },
];

function LogoItem({ alt, src, height }: { alt: string; src: string; height?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      style={{
        height: height ?? LOGO_H,
        width: "auto",
        maxWidth: 300,
        filter: "brightness(0) invert(1)",
        opacity: 0.5,
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
      <div className="ticker-mask overflow-hidden w-full">
        <div
          className="ticker-track flex items-center"
          style={{ gap: 64, width: "max-content" }}
        >
          {set.map((logo, i) => (
            <LogoItem key={i} alt={logo.alt} src={logo.src} height={logo.height} />
          ))}
        </div>
      </div>
    </section>
  );
}
