"use client";

import { DEMO_URL } from "@/lib/constants";

const statPills = [
  "No per-seat fees",
  "Full CRM integration",
  "Onboarding included",
];

export default function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative py-24 sm:py-32 lg:py-44 overflow-hidden noise"
      style={{
        background:
          "linear-gradient(155deg, #041f14 0%, #063d2d 45%, #021a10 100%)",
      }}
    >
      {/* ── Spotlight radial glow — upper center ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(900px, 110vw)",
          height: 520,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(16,185,129,0.40) 0%, rgba(16,185,129,0.10) 40%, transparent 70%)",
          filter: "blur(48px)",
        }}
      />

      {/* ── Secondary ambient fill ── */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "min(600px, 80vw)",
          height: 300,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(6,95,70,0.35) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* ── Dot grid texture ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── Large circle — left, partially clipped ── */}
      <svg
        className="absolute pointer-events-none"
        style={{
          left: "-180px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "clamp(320px, 45vw, 600px)",
          height: "clamp(320px, 45vw, 600px)",
          opacity: 0.08,
        }}
        viewBox="0 0 600 600"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="300" cy="300" r="298" stroke="white" strokeWidth="1.5" />
      </svg>

      {/* ── Small circle — bottom right, partially clipped ── */}
      <svg
        className="absolute pointer-events-none"
        style={{
          right: "-80px",
          bottom: "-60px",
          width: "clamp(180px, 28vw, 300px)",
          height: "clamp(180px, 28vw, 300px)",
          opacity: 0.08,
        }}
        viewBox="0 0 300 300"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="150" cy="150" r="148" stroke="white" strokeWidth="1.5" />
      </svg>

      {/* ── Inner accent ring (subtle, right-center) ── */}
      <svg
        className="absolute pointer-events-none hidden sm:block"
        style={{
          right: "4%",
          top: "15%",
          width: "clamp(120px, 18vw, 200px)",
          height: "clamp(120px, 18vw, 200px)",
          opacity: 0.06,
        }}
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="98" stroke="#34d399" strokeWidth="1" />
        <circle cx="100" cy="100" r="60" stroke="#34d399" strokeWidth="0.75" />
      </svg>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center">

        {/* Stat pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 reveal">
          {statPills.map((pill, i) => (
            <span
              key={pill}
              className={`reveal stagger-${i + 1}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 14px",
                borderRadius: 999,
                background: "rgba(0,0,0,0.28)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                fontSize: 12,
                fontWeight: 500,
                color: "rgba(255,255,255,0.75)",
                whiteSpace: "nowrap",
              }}
            >
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "#10B981",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              {pill}
            </span>
          ))}
        </div>

        {/* Headline */}
        <h2
          className="font-extrabold leading-[1.05] mb-5 sm:mb-6 reveal stagger-2"
          style={{
            fontSize: "clamp(32px, 5.5vw, 68px)",
            letterSpacing: "-0.025em",
            color: "#ffffff",
            textShadow: "0 0 60px rgba(16,185,129,0.30)",
          }}
        >
          Stop Leaving{" "}
          <span style={{ color: "#34D399" }}>Enrollable Accounts</span>{" "}
          <br />
          On The Table.
        </h2>

        {/* Subheadline */}
        <p
          className="mb-10 sm:mb-12 reveal stagger-3"
          style={{
            fontSize: "clamp(16px, 2.2vw, 19px)",
            color: "rgba(255,255,255,0.72)",
            maxWidth: 520,
            margin: "0 auto 2.5rem",
            lineHeight: 1.65,
          }}
        >
          Join debt settlement sales teams using Kota to turn every call into a
          competitive advantage.
        </p>

        {/* CTA button */}
        <div className="reveal stagger-4" style={{ marginTop: "2.5rem" }}>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-dark-btn inline-flex items-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-[15px] text-white transition-all duration-250"
          >
            Book a Demo
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
