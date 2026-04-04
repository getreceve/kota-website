"use client";

import { DEMO_URL } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative py-20 sm:py-28 lg:py-40 overflow-hidden noise"
      style={{
        background: "linear-gradient(135deg, #052e1e 0%, #064e3b 50%, #022c22 100%)",
      }}
    >
      {/* Ambient center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "min(700px, 90vw)",
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(16,185,129,0.22) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center reveal">
        <h2
          className="font-extrabold text-white leading-tight mb-4 sm:mb-5"
          style={{ fontSize: "clamp(28px, 5vw, 62px)" }}
        >
          Stop Leaving Enrollable
          <br />
          Accounts On The Table.
        </h2>
        <p className="text-emerald-100/70 mb-8 sm:mb-10 text-base sm:text-lg max-w-xl mx-auto">
          Join debt settlement sales teams using Kota to turn every call into a competitive advantage.
        </p>

        <a
          href={DEMO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-7 sm:px-9 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-[15px] bg-white text-emerald-900 shadow-2xl shadow-black/40 transition-all duration-200 hover:scale-[1.03]"
        >
          Book a Demo
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
