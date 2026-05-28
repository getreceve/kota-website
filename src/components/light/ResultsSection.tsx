"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { STATS } from "@/lib/stats";

interface StatProps {
  target: number;
  suffix?: string;
  label: string;
}

function BigCounter({ target, suffix = "", label }: StatProps) {
  const { value, ref } = useCountUp(target, 1800);

  return (
    <div
      ref={ref}
      style={{ textAlign: "center", padding: "0 12px" }}
    >
      <div
        style={{
          fontSize: "clamp(44px, 5vw, 64px)",
          fontWeight: 800,
          color: "#0D0B09",
          letterSpacing: "-0.04em",
          lineHeight: 1,
          marginBottom: "12px",
        }}
      >
        {value.toLocaleString()}
        <span style={{ color: "#065F46" }}>{suffix}</span>
      </div>
      <div
        style={{
          fontSize: "14px",
          color: "#6B6B66",
          lineHeight: 1.4,
          maxWidth: "200px",
          margin: "0 auto",
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function ResultsSection() {
  return (
    <section
      id="results"
      style={{
        background: "#FAFAF7",
        padding: "100px 24px",
        borderTop: "1px solid #E8E6E0",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
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
            Results
          </div>
          <h2
            className="reveal"
            style={{
              fontSize: "clamp(26px, 3.5vw, 40px)",
              fontWeight: 700,
              color: "#0D0B09",
              letterSpacing: "-0.03em",
              maxWidth: "640px",
              margin: "0 auto",
              lineHeight: 1.2,
            }}
          >
            Built on data from thousands of sales calls — and growing.
          </h2>
        </div>

        {/* Counters */}
        <div
          className="reveal"
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "clamp(32px, 5vw, 16px)",
          }}
        >
          {[
            { target: STATS.callsAnalyzed, suffix: "", label: "Calls analyzed" },
            { target: STATS.hoursSavedPerQuarter, suffix: "", label: "Hours saved per quarter" },
            { target: STATS.objectionPatterns, suffix: "", label: "Objection patterns tagged" },
            { target: STATS.callsScoredPercent, suffix: "%", label: "Calls scored against client playbooks" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "clamp(32px, 5vw, 16px)",
              }}
            >
              <BigCounter target={stat.target} suffix={stat.suffix} label={stat.label} />
              {i < 3 && (
                <div
                  aria-hidden="true"
                  style={{ width: "1px", height: "64px", background: "#E8E6E0" }}
                  className="hidden lg:block"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
