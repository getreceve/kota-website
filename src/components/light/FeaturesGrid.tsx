"use client";

import { FEATURES, FEATURES_HEADER, FEATURES_SUBHEAD } from "@/content/landing";

export default function FeaturesGrid() {
  return (
    <section
      id="features"
      style={{
        background: "#F4F3EF",
        padding: "100px 24px",
        borderTop: "1px solid #E8E6E0",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div
            className="reveal"
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#065F46",
              marginBottom: "16px",
            }}
          >
            Features
          </div>
          <h2
            className="reveal"
            style={{
              fontSize: "clamp(24px, 3.5vw, 38px)",
              fontWeight: 700,
              color: "#0D0B09",
              letterSpacing: "-0.025em",
              marginBottom: "16px",
              maxWidth: "700px",
              margin: "0 auto 16px",
            }}
          >
            {FEATURES_HEADER}
          </h2>
          <p
            className="reveal"
            style={{
              fontSize: "17px",
              color: "#6B6B66",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            {FEATURES_SUBHEAD}
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "16px",
          }}
        >
          {FEATURES.map((feature, i) => (
            <div
              key={i}
              className={`reveal stagger-${i + 1}`}
              style={{
                background: "#fff",
                border: "1px solid #E8E6E0",
                borderRadius: "12px",
                padding: "28px 24px",
                transition: "border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(13,11,9,0.15)";
                el.style.transform = "translateY(-2px)";
                el.style.boxShadow = "0 8px 32px rgba(13,11,9,0.06)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "#E8E6E0";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Tag */}
              <div
                style={{
                  display: "inline-block",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#065F46",
                  background: "rgba(16,185,129,0.10)",
                  border: "1px solid rgba(16,185,129,0.22)",
                  borderRadius: "100px",
                  padding: "3px 10px",
                  marginBottom: "16px",
                }}
              >
                {feature.tag}
              </div>

              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#0D0B09",
                  letterSpacing: "-0.015em",
                  marginBottom: "10px",
                  lineHeight: 1.3,
                }}
              >
                {feature.title}
              </h3>

              <p
                style={{
                  fontSize: "14px",
                  color: "#6B6B66",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
