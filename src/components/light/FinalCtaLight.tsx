"use client";

import { FINAL_CTA_HEADING, FINAL_CTA_SUBTEXT, FINAL_CTA_BUTTON, FINAL_CTA_FINE_PRINT, DEMO_URL } from "@/content/landing";

export default function FinalCtaLight() {
  return (
    <section
      style={{
        background: "#0D0B09",
        padding: "120px 24px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <div
          className="reveal"
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#10B981",
            marginBottom: "24px",
          }}
        >
          Get Started
        </div>

        <h2
          className="reveal"
          style={{
            fontSize: "clamp(36px, 5vw, 60px)",
            fontWeight: 800,
            color: "#FAFAF7",
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          {FINAL_CTA_HEADING}
        </h2>

        <p
          className="reveal"
          style={{
            fontSize: "18px",
            color: "#A0A0A0",
            lineHeight: 1.6,
            marginBottom: "48px",
          }}
        >
          {FINAL_CTA_SUBTEXT}
        </p>

        <div className="reveal">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "#10B981",
              color: "#fff",
              fontSize: "16px",
              fontWeight: 700,
              padding: "16px 36px",
              borderRadius: "6px",
              textDecoration: "none",
              transition: "background 0.15s ease, transform 0.15s ease",
              marginBottom: "20px",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "#065F46";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "#10B981";
              el.style.transform = "translateY(0)";
            }}
          >
            {FINAL_CTA_BUTTON}
          </a>

          <p
            style={{
              fontSize: "13px",
              color: "#A0A0A0",
              marginTop: "16px",
            }}
          >
            {FINAL_CTA_FINE_PRINT}
          </p>
        </div>
      </div>
    </section>
  );
}
