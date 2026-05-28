"use client";

import { useEffect, useRef } from "react";
import { PILLARS } from "@/content/landing";
import MockCallScore from "./MockCallScore";
import MockRebuttal from "./MockRebuttal";
import MockReactivation from "./MockReactivation";
import MockAccountHealth from "./MockAccountHealth";

const MOCKS: Record<string, React.ComponentType> = {
  "call-score": MockCallScore,
  "rebuttal-compare": MockRebuttal,
  "reactivation-queue": MockReactivation,
  "account-health": MockAccountHealth,
};

function Chip({ label }: { label: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: "12px",
        fontWeight: 600,
        color: "#065F46",
        background: "rgba(16,185,129,0.10)",
        border: "1px solid rgba(16,185,129,0.2)",
        borderRadius: "100px",
        padding: "4px 12px",
      }}
    >
      {label}
    </span>
  );
}

function ParallaxMock({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      const offset = Math.max(-12, Math.min(12, center * 0.04));
      el.style.transform = `translateY(${offset}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={ref} style={{ transition: "transform 0.1s linear" }}>
      {children}
    </div>
  );
}

export default function ProductPillars() {
  return (
    <section
      id="product"
      style={{
        background: "#FAFAF7",
        padding: "100px 24px",
        borderTop: "1px solid #E8E6E0",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
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
            The Product
          </div>
          <h2
            className="reveal"
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 700,
              color: "#0D0B09",
              letterSpacing: "-0.03em",
              margin: "0 auto",
              maxWidth: "600px",
            }}
          >
            Four systems. One coaching engine.
          </h2>
        </div>

        {/* Pillars */}
        <div style={{ display: "flex", flexDirection: "column", gap: "100px" }}>
          {PILLARS.map((pillar, i) => {
            const MockComponent = MOCKS[pillar.mock];
            const isEven = i % 2 === 0;

            return (
              <div
                key={pillar.number}
                className={`reveal`}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "clamp(32px, 5vw, 72px)",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                {/* Text side */}
                <div
                  style={{
                    flex: "1 1 340px",
                    order: isEven ? 0 : 2,
                  }}
                  className={isEven ? "reveal-left" : "reveal-right"}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "20px",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        background: "#10B981",
                        color: "#fff",
                        fontSize: "15px",
                        fontWeight: 800,
                        letterSpacing: "-0.01em",
                        boxShadow: "0 4px 14px rgba(16,185,129,0.28)",
                      }}
                    >
                      {pillar.number}
                    </span>
                    <span
                      aria-hidden="true"
                      style={{ flex: 1, height: "1px", background: "#E8E6E0", maxWidth: "64px" }}
                    />
                  </div>

                  <h3
                    style={{
                      fontSize: "clamp(22px, 2.5vw, 30px)",
                      fontWeight: 700,
                      color: "#0D0B09",
                      letterSpacing: "-0.025em",
                      marginBottom: "20px",
                      lineHeight: 1.2,
                    }}
                  >
                    {pillar.heading}
                  </h3>

                  {pillar.body.map((para, pi) => (
                    <p
                      key={pi}
                      style={{
                        fontSize: "16px",
                        color: "#6B6B66",
                        lineHeight: 1.7,
                        marginBottom: pi < pillar.body.length - 1 ? "16px" : "24px",
                      }}
                    >
                      {para}
                    </p>
                  ))}

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {pillar.chips.map((chip) => (
                      <Chip key={chip} label={chip} />
                    ))}
                  </div>
                </div>

                {/* Mock UI */}
                <div
                  style={{
                    flex: "1 1 340px",
                    display: "flex",
                    justifyContent: isEven ? "flex-end" : "flex-start",
                    order: isEven ? 2 : 0,
                  }}
                >
                  <ParallaxMock>
                    <MockComponent />
                  </ParallaxMock>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
