"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CursorGlow from "@/components/CursorGlow";
import FinalCTA from "@/components/FinalCTA";
import { DEMO_URL } from "@/lib/constants";
import { getVerticalConfig } from "@/config/verticals";
import type { UseCaseData } from "@/config/verticals/types";

/* ─── Icon dictionary ──────────────────────────────── */
const Ic: Record<string, React.ReactNode> = {
  trendUp: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  phone: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  doc: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  bolt: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  star: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
  chart: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  user: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  x: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  layers: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  headphones: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 18v-6a9 9 0 0118 0v6" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
    </svg>
  ),
  database: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
    </svg>
  ),
  clock: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  chat: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  eye: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  refresh: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  mail: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  filter: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
    </svg>
  ),
  shuffle: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
    </svg>
  ),
  bell: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  ),
  alert: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  ),
  calendar: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  flag: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 2H21l-3 6 3 6H10.5l-1-2H5a2 2 0 00-2 2z" />
    </svg>
  ),
  userPlus: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
    </svg>
  ),
  shield: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
};

/* ─── Sub-components ───────────────────────────────── */
function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: 44, height: 44, borderRadius: 11, flexShrink: 0,
        background: "rgba(16,185,129,0.10)",
        border: "1px solid rgba(16,185,129,0.20)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
}

/* ─── Page template ────────────────────────────────── */
export default function UseCasePageTemplate({ slug }: { slug: string }) {
  const cfg = getVerticalConfig();
  const data: UseCaseData | undefined = cfg.useCases[slug];
  if (!data) return null;

  return (
    <>
      <ScrollReveal />
      <Nav />

      {/* ══ HERO ══════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ background: "#0D0B09", paddingTop: "calc(64px + var(--banner-h, 0px))", minHeight: "84vh", display: "flex", alignItems: "center" }}
      >
        <CursorGlow />

        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.013) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.013) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }} />

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 py-20 sm:py-28 text-center w-full">
          {/* Eyebrow */}
          <div
            className="about-word about-word-0 inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-7"
            style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.25)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#10B981" }} />
            <span className="text-xs font-semibold tracking-wide" style={{ color: "#10B981" }}>Use Case</span>
          </div>

          {/* Headline */}
          <h1
            className="about-word about-word-1 font-extrabold text-white leading-[1.06] tracking-tight mb-6"
            style={{ fontSize: "clamp(28px, 5.5vw, 62px)", letterSpacing: "-0.025em" }}
          >
            {data.hero.headline}
          </h1>

          {/* Subheadline */}
          <p
            className="about-sub mx-auto mb-10"
            style={{ color: "#A0A0A0", fontSize: "clamp(15px, 1.8vw, 19px)", maxWidth: 600, lineHeight: 1.7 }}
          >
            {data.hero.subheadline}
          </p>

          {/* CTA */}
          <div className="about-sub flex flex-wrap items-center justify-center gap-4">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a Demo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #0D0B09)" }} />
      </section>

      {/* ══ PROBLEM ═══════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28" style={{ background: "#0D0B09" }}>
        <div className="dot-grid absolute inset-0" />
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center mb-14 reveal">
            <p className="section-label mb-3">The Problem</p>
            <h2
              className="font-extrabold text-white leading-tight"
              style={{ fontSize: "clamp(24px, 4vw, 46px)", letterSpacing: "-0.022em", maxWidth: 600, margin: "0 auto" }}
            >
              {data.problem.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {data.problem.cards.map((card, i) => (
              <div
                key={i}
                className={`card card-alt p-6 sm:p-7 reveal stagger-${i + 1}`}
                style={{ borderLeft: "2px solid rgba(16,185,129,0.4)" }}
              >
                <div className="mb-4">
                  <IconBox>{Ic[card.iconKey]}</IconBox>
                </div>
                <h3 className="text-white font-bold mb-2.5 text-base sm:text-[17px]">{card.title}</h3>
                <p className="text-[#888] text-sm leading-relaxed" style={{ lineHeight: 1.75 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SOLUTION ══════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28" style={{ background: "#0D0D0D" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="text-center mb-14 reveal">
            <p className="section-label mb-3">The Solution</p>
            <h2
              className="font-extrabold text-white leading-tight"
              style={{ fontSize: "clamp(24px, 4vw, 46px)", letterSpacing: "-0.022em", maxWidth: 580, margin: "0 auto" }}
            >
              {data.solution.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {data.solution.features.map((feat, i) => (
              <div
                key={i}
                className={`card p-6 sm:p-7 flex gap-4 reveal stagger-${i + 1}`}
              >
                <IconBox>{Ic[feat.iconKey]}</IconBox>
                <div>
                  <h3 className="text-white font-bold mb-2 text-base">{feat.title}</h3>
                  <p className="text-[#888] text-sm" style={{ lineHeight: 1.75 }}>{feat.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ OUTCOME ═══════════════════════════════════════ */}
      <section
        className="relative py-20 sm:py-24 overflow-hidden"
        style={{ background: "#111111", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(16,185,129,0.05) 0%, transparent 65%)",
        }} />

        <div className="absolute inset-0 flex items-center pointer-events-none" aria-hidden="true">
          <div className="w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.12) 30%, rgba(16,185,129,0.12) 70%, transparent)" }} />
        </div>

        <div className="relative max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center reveal">
          <p
            className="font-extrabold text-white leading-tight"
            style={{ fontSize: "clamp(22px, 3.5vw, 38px)", letterSpacing: "-0.02em", lineHeight: 1.3 }}
          >
            &ldquo;{data.outcome.statement}&rdquo;
          </p>
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════ */}
      <FinalCTA />

      <Footer />
    </>
  );
}
