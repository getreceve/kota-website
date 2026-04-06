"use client";

type Logo = {
  alt: string;
  src: string;
};

/*
  Full-color logo ticker. All logos are local SVGs in /public/logos/
  rendered at a consistent height with slight opacity for the
  "partner integration" look against the dark background.
*/

const LOGOS: Logo[] = [
  { alt: "DebtPayPro",  src: "/logos/debtpaypro.svg" },
  { alt: "GoHighLevel", src: "/logos/gohighlevel.svg" },
  { alt: "HubSpot",     src: "/logos/hubspot.svg" },
  { alt: "Salesforce",  src: "/logos/salesforce.svg" },
  { alt: "Convoso",     src: "/logos/convoso.svg" },
  { alt: "TCN",         src: "/logos/tcn.svg" },
  { alt: "CallTools",   src: "/logos/calltools.svg" },
  { alt: "Kixie",       src: "/logos/kixie.svg" },
  { alt: "Five9",       src: "/logos/five9.svg" },
  { alt: "8x8",         src: "/logos/8x8.svg" },
  { alt: "Forth",       src: "/logos/forth.svg" },
];

const LOGO_HEIGHT = 32; // px — uniform height for all logos

function LogoItem({ logo }: { logo: Logo }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logo.src}
      alt={logo.alt}
      height={LOGO_HEIGHT}
      style={{
        height: LOGO_HEIGHT,
        width: "auto",
        maxWidth: 180,
        opacity: 0.65,
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
          style={{ gap: 72, width: "max-content" }}
        >
          {set.map((logo, i) => (
            <LogoItem key={i} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
