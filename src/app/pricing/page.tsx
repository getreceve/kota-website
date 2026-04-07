import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { DEMO_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pricing — Kota",
  description:
    "Simple, transparent pricing built for debt settlement sales teams of every size. No per-seat fees. No hidden charges. Cancel anytime.",
};

const teamFeatures = [
  "Account Memory and Deal Intelligence",
  "Call Intelligence with automatic transcription and scoring",
  "Objection Intelligence and Playbook",
  "Call Coach — AI-powered coaching chat",
  "Rep Performance dashboard and leaderboard",
  "Gap Brief automatic intelligence reporting",
  "Three-tier role system (Admin, Manager, Rep)",
  "Full onboarding and team training included",
  "Priority support",
];

const commandFeatures = [
  "Everything in Team plan",
  "Custom CRM and dialer integrations",
  "Custom onboarding program tailored to your workflow",
  "Advanced team training and rep certification",
  "Dedicated account manager",
  "Custom reporting and analytics",
  "SLA and uptime guarantee",
  "Data processing agreement included",
];

function GreenCheck() {
  return (
    <svg width="16" height="16" fill="none" stroke="#10B981" viewBox="0 0 24 24"
      style={{ flexShrink: 0, marginTop: 2 }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function GrayCheck() {
  return (
    <svg width="16" height="16" fill="none" stroke="#A0A0A0" viewBox="0 0 24 24"
      style={{ flexShrink: 0, marginTop: 2 }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function PricingPage() {
  return (
    <>
      <ScrollReveal />
      <Nav />

      <main style={{ background: "#0A0A0A", minHeight: "100vh", paddingTop: 100, paddingBottom: 80 }}>

        {/* ── Header ── */}
        <div className="text-center px-5 mb-14 reveal">
          <p className="section-label mb-4" style={{ color: "#10B981" }}>
            Simple, Transparent Pricing
          </p>
          <h1 style={{
            fontSize: "clamp(28px, 4.5vw, 48px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "#fff",
            marginBottom: 16,
            lineHeight: 1.15,
          }}>
            Built for Debt Settlement Sales Teams
            <br className="hidden sm:block" /> of Every Size
          </h1>
          <p style={{
            color: "#A0A0A0",
            fontSize: "clamp(15px, 1.5vw, 17px)",
            maxWidth: 520,
            margin: "0 auto",
            lineHeight: 1.65,
          }}>
            Pricing is based on your team size. No per-seat fees. No hidden charges. Cancel anytime.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24,
          alignItems: "stretch",
        }}>

          {/* Team */}
          <div className="reveal" style={{
            background: "#0E0E0E",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 16,
            padding: "32px 28px",
            boxShadow: "0 4px 32px rgba(0,0,0,0.5)",
            display: "flex",
            flexDirection: "column",
          }}>
            <div style={{ marginBottom: 20 }}>
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#A0A0A0",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                borderRadius: 999,
                padding: "4px 12px",
              }}>Team</span>
            </div>

            <h2 style={{ fontSize: 26, fontWeight: 800, color: "#fff", marginBottom: 6, letterSpacing: "-0.01em" }}>
              Team
            </h2>
            <p style={{ color: "#A0A0A0", fontSize: 14, marginBottom: 20, lineHeight: 1.5 }}>
              For growing debt settlement sales teams
            </p>

            <div style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 10,
              padding: "14px 16px",
              marginBottom: 24,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <svg width="14" height="14" fill="none" stroke="#A0A0A0" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span style={{ color: "#C0C0C0", fontSize: 13 }}>6 – 20 reps</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <svg width="14" height="14" fill="none" stroke="#A0A0A0" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span style={{ color: "#C0C0C0", fontSize: 13 }}>Monthly or annual billing available</span>
              </div>
            </div>

            <p style={{ color: "#A0A0A0", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>
              Everything you need to close more accounts
            </p>

            <ul style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28, flexGrow: 1 }}>
              {teamFeatures.map((f) => (
                <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <GrayCheck />
                  <span style={{ color: "#C0C0C0", fontSize: 14, lineHeight: 1.5 }}>{f}</span>
                </li>
              ))}
            </ul>

            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="pricing-btn-secondary">
              Book a Demo
            </a>
            <p style={{ textAlign: "center", color: "#555", fontSize: 12 }}>
              Get custom pricing on your demo call
            </p>
          </div>

          {/* Command */}
          <div className="reveal" style={{
            background: "#111111",
            border: "1px solid rgba(16,185,129,0.35)",
            borderRadius: 16,
            padding: "32px 28px",
            boxShadow: "0 0 48px rgba(16,185,129,0.07), 0 1px 3px rgba(0,0,0,0.4)",
            display: "flex",
            flexDirection: "column",
          }}>
            <div style={{ marginBottom: 20 }}>
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                background: "rgba(16,185,129,0.12)",
                border: "1px solid rgba(16,185,129,0.3)",
                color: "#10B981",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                borderRadius: 999,
                padding: "4px 12px",
              }}>Most Popular</span>
            </div>

            <h2 style={{ fontSize: 26, fontWeight: 800, color: "#fff", marginBottom: 6, letterSpacing: "-0.01em" }}>
              Command
            </h2>
            <p style={{ color: "#A0A0A0", fontSize: 14, marginBottom: 20, lineHeight: 1.5 }}>
              For established debt settlement organizations
            </p>

            <div style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 10,
              padding: "14px 16px",
              marginBottom: 24,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <svg width="14" height="14" fill="none" stroke="#10B981" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span style={{ color: "#C0C0C0", fontSize: 13 }}>20+ reps</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <svg width="14" height="14" fill="none" stroke="#10B981" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span style={{ color: "#C0C0C0", fontSize: 13 }}>Monthly or annual billing available</span>
              </div>
            </div>

            <p style={{ color: "#10B981", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>
              Everything in Team, plus
            </p>

            <ul style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28, flexGrow: 1 }}>
              {commandFeatures.map((f) => (
                <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <GreenCheck />
                  <span style={{ color: "#C0C0C0", fontSize: 14, lineHeight: 1.5 }}>{f}</span>
                </li>
              ))}
            </ul>

            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="pricing-btn-primary">
              Book a Demo
            </a>
            <p style={{ textAlign: "center", color: "#555", fontSize: 12 }}>
              Get custom pricing on your demo call
            </p>
          </div>
        </div>

        {/* ── Trust signals ── */}
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 mt-10 reveal">
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "12px 40px",
            padding: "20px 24px",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.05)",
            borderRadius: 12,
          }}>
            {[
              {
                icon: <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                label: "No per-seat fees",
              },
              {
                icon: <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                label: "Cancel anytime",
              },
              {
                icon: <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                label: "Onboarding included on all plans",
              },
            ].map((t) => (
              <div key={t.label} style={{ display: "flex", alignItems: "center", gap: 8, color: "#707070", fontSize: 13, fontWeight: 500 }}>
                <span style={{ color: "#555" }}>{t.icon}</span>
                {t.label}
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
