import { getVerticalConfig } from "@/config/verticals";

const SYSTEM_ICONS = [
  <svg key="0" width="22" height="22" fill="none" stroke="#10B981" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>,
  <svg key="1" width="22" height="22" fill="none" stroke="#10B981" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>,
  <svg key="2" width="22" height="22" fill="none" stroke="#10B981" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
      d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  <svg key="3" width="22" height="22" fill="none" stroke="#10B981" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
];

export default function KotaSalesOSSection() {
  const { salesOS } = getVerticalConfig();

  return (
    <section className="py-16 sm:py-24" style={{ background: "#0D0D0D", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 reveal">
          <p className="section-label mb-3">{salesOS.eyebrow}</p>
          <h2
            className="font-extrabold text-white leading-tight mb-4"
            style={{ fontSize: "clamp(28px, 4.5vw, 52px)" }}
          >
            <span className="gradient-text">{salesOS.headline}</span>
          </h2>
          <p style={{ color: "#A0A0A0", fontSize: "clamp(15px, 2vw, 18px)", maxWidth: 620, margin: "0 auto" }}>
            {salesOS.subheadline}
          </p>
        </div>

        {/* Four system cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {salesOS.systems.map((s, i) => {
            const num = String(i + 1).padStart(2, "0");
            return (
              <div
                key={num}
                className={`sos-system-card reveal stagger-${i + 1}`}
                style={{ position: "relative", overflow: "hidden" }}
              >
                {/* Decorative background number */}
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    right: 8,
                    bottom: -8,
                    fontSize: 80,
                    fontWeight: 900,
                    lineHeight: 1,
                    color: "rgba(255,255,255,0.055)",
                    pointerEvents: "none",
                    userSelect: "none",
                    letterSpacing: "-0.04em",
                  }}
                >
                  {num}
                </span>

                {/* Icon */}
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: "rgba(16,185,129,0.1)",
                  border: "1px solid rgba(16,185,129,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, position: "relative",
                }}>
                  {SYSTEM_ICONS[i]}
                </div>

                {/* Number + Name */}
                <div style={{ position: "relative" }}>
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "#10B981", textTransform: "uppercase" }}>
                    System {num}
                  </span>
                  <h3 style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginTop: 4, lineHeight: 1.3 }}>
                    {s.name}
                  </h3>
                </div>

                {/* Description */}
                <p style={{ fontSize: 13, color: "#707070", lineHeight: 1.6, flexGrow: 1, position: "relative" }}>
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex justify-center reveal">
          <a
            href="/sales-os"
            className="btn-primary"
          >
            See the Full Sales OS
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
