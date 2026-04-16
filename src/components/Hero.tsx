"use client";

import { useEffect, useState } from "react";
import { DEMO_URL } from "@/lib/constants";
import { useCountUp } from "@/hooks/useCountUp";
import BrowserMockup from "./BrowserMockup";

function StatPill({
  prefix = "",
  value,
  suffix = "",
  label,
  duration = 1800,
}: {
  prefix?: string;
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}) {
  const { value: count, ref } = useCountUp(value, duration);
  return (
    <div
      ref={ref}
      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl"
      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      {/* Invisible placeholder reserves the final width so layout never shifts */}
      <span className="relative font-bold text-sm whitespace-nowrap" style={{ color: "#10B981" }}>
        <span className="invisible">{prefix}{value.toLocaleString()}{suffix}</span>
        <span className="absolute inset-0 text-right">{prefix}{count.toLocaleString()}{suffix}</span>
      </span>
      <span className="text-xs text-[#A0A0A0] leading-tight whitespace-nowrap">{label}</span>
    </div>
  );
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const cls = (delay: number) =>
    `hero-line ${loaded ? "loaded" : ""} hero-delay-${delay}`;

  return (
    <section
      id="hero"
      className="relative hero-bg noise overflow-hidden"
      style={{ paddingTop: 64 }}
    >
      {/* Ambient radial — scaled back on mobile */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "10%",
          left: "-5%",
          width: "min(560px, 90vw)",
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(16,185,129,0.11) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-12 py-12 sm:py-16 lg:py-24">

        {/* ── Left column ── */}
        <div className="flex-1 w-full lg:max-w-xl">

          {/* Eyebrow pill */}
          <div className={cls(0)}>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 sm:mb-7"
              style={{
                background: "rgba(16,185,129,0.08)",
                border: "1px solid rgba(16,185,129,0.25)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#10B981" }} />
              <span className="text-[11px] sm:text-xs font-semibold text-emerald-400 tracking-wide">
                Kota Pipeline Intelligence
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1
            className="font-extrabold text-white leading-[1.04] tracking-tight mb-5 sm:mb-6"
            style={{ fontSize: "clamp(34px, 7vw, 60px)" }}
          >
            <span className={`block ${cls(1)}`}>Your Top Closer</span>
            <span className={`block ${cls(2)}`}>Has A System.</span>
            <span className={`block gradient-text ${cls(3)}`}>Now Your Whole</span>
            <span className={`block gradient-text ${cls(3)}`}>Team Can Use It.</span>
          </h1>

          {/* Subheadline */}
          <p
            className={`text-[#A0A0A0] leading-relaxed mb-7 sm:mb-9 text-sm sm:text-base lg:text-[17px] ${cls(4)}`}
            style={{ maxWidth: 480 }}
          >
            Kota analyzes every call, indexes every objection and rebuttal, and
            gives your entire debt settlement team access to what your best rep
            already knows.{" "}
            <span className="text-white font-medium">
              Stop leaving enrollable accounts on the table.
            </span>
          </p>

          {/* Sales OS secondary line */}
          <p className={`text-xs sm:text-sm mb-7 sm:mb-9 -mt-5 sm:-mt-6 ${cls(4)}`} style={{ color: "#606060", maxWidth: 440 }}>
            Part of the{" "}
            <a href="/sales-os" style={{ color: "#10B981", textDecoration: "underline", textUnderlineOffset: 3 }}>
              Kota Sales OS
            </a>
            . The complete AI operating system for debt settlement sales.
          </p>

          {/* CTAs */}
          <div className={`flex flex-wrap gap-3 mb-8 sm:mb-10 ${cls(5)}`}>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !text-sm sm:!text-base"
            >
              Book a Demo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#how-it-works" className="btn-ghost !text-sm sm:!text-base">
              See How It Works
            </a>
          </div>

          {/* Stats — stack vertically on mobile, row on sm+ */}
          <div className={`flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3 ${cls(5)}`}>
            <StatPill value={10000} suffix="+"  label="Calls Analyzed" />
            <StatPill value={43}    suffix="%"  label="Avg Improvement in Objection Overcome Rate" />
            <StatPill value={5}     suffix=" Days" label="to Full Onboarding" />
          </div>
        </div>

        {/* ── Right column — browser mockup ── */}
        <div className={`flex-1 w-full min-w-0 ${cls(2)}`}>
          <BrowserMockup />
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 inset-x-0 h-28 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #0A0A0A)" }}
      />
    </section>
  );
}
