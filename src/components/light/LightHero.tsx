"use client";

import { useCountUp } from "@/hooks/useCountUp";
import {
  HERO_COUNTERS,
  HERO_HEADLINE_LINE1,
  HERO_HEADLINE_LINE2,
  HERO_SUBHEAD,
  HERO_CTA_PRIMARY,
  HERO_CTA_SECONDARY,
  HERO_TRUST_LINE,
  DEMO_URL,
} from "@/content/landing";

function Counter({ value, suffix, label, duration }: { value: number; suffix: string; label: string; duration?: number }) {
  const { value: count, ref } = useCountUp(value, duration ?? 1200);
  return (
    <div
      ref={ref}
      style={{
        textAlign: "center",
        padding: "0 18px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "6px",
        }}
      >
        <span
          aria-hidden="true"
          style={{
            color: "#10B981",
            fontSize: "clamp(18px, 2vw, 24px)",
            fontWeight: 700,
            lineHeight: 1.1,
            marginTop: "4px",
          }}
        >
          ↑
        </span>
        <span
          style={{
            fontSize: "clamp(48px, 6vw, 72px)",
            fontWeight: 800,
            color: "#0D0B09",
            lineHeight: 1,
            letterSpacing: "-0.04em",
          }}
        >
          {count}
          <span style={{ color: "#065F46" }}>{suffix}</span>
        </span>
      </div>
      <div
        style={{
          fontSize: "12.5px",
          color: "#6B6B66",
          marginTop: "12px",
          maxWidth: "190px",
          lineHeight: 1.45,
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function LightHero() {
  const handleSeeHow = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector("#why-kota");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      style={{
        background: "#FAFAF7",
        paddingTop: "140px",
        paddingBottom: "100px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle radial behind counters */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "400px",
          background: "radial-gradient(circle at 50% 0%, rgba(16,185,129,0.06), transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        {/* Counters */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "clamp(16px, 4vw, 64px)",
            marginBottom: "60px",
            flexWrap: "wrap",
          }}
        >
          {/* Dividers */}
          {HERO_COUNTERS.map((c, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "clamp(16px, 4vw, 64px)" }}>
              <Counter value={c.value} suffix={c.suffix} label={c.label} />
              {i < HERO_COUNTERS.length - 1 && (
                <div
                  aria-hidden="true"
                  style={{ width: "1px", height: "48px", background: "#E8E6E0" }}
                  className="hidden sm:block"
                />
              )}
            </div>
          ))}
        </div>

        {/* Headline */}
        <h1
          style={{
            textAlign: "center",
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "#0D0B09",
            margin: "0 auto 24px",
            maxWidth: "860px",
          }}
        >
          {HERO_HEADLINE_LINE1}
          <br />
          {HERO_HEADLINE_LINE2}
        </h1>

        {/* Subhead */}
        <p
          style={{
            textAlign: "center",
            fontSize: "clamp(16px, 1.8vw, 20px)",
            color: "#6B6B66",
            lineHeight: 1.65,
            margin: "0 auto 44px",
            maxWidth: "660px",
          }}
        >
          {HERO_SUBHEAD}
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginBottom: "28px",
          }}
        >
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="light-btn-primary"
            style={{
              background: "#10B981",
              color: "#fff",
              fontSize: "15px",
              fontWeight: 600,
              padding: "14px 28px",
              borderRadius: "6px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "background 0.15s ease, transform 0.15s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "#065F46";
              el.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "#10B981";
              el.style.transform = "translateY(0)";
            }}
          >
            {HERO_CTA_PRIMARY}
          </a>
          <a
            href="#why-kota"
            onClick={handleSeeHow}
            style={{
              color: "#6B6B66",
              fontSize: "15px",
              fontWeight: 500,
              textDecoration: "none",
              transition: "color 0.15s ease",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#0D0B09")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#6B6B66")}
          >
            {HERO_CTA_SECONDARY}
          </a>
        </div>

        {/* Trust line */}
        <p
          style={{
            textAlign: "center",
            fontSize: "12px",
            color: "#6B6B66",
            letterSpacing: "0.01em",
          }}
        >
          {HERO_TRUST_LINE}
        </p>
      </div>
    </section>
  );
}
