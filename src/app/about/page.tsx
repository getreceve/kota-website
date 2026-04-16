import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { DEMO_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About — Kota",
  description:
    "Kota was built by people who have sat in the seat. Built from the inside out for debt settlement sales teams.",
};

const paragraphs = [
  "Before there was a platform, there was a problem we lived firsthand. Years spent in high-volume phone sales, working debt settlement floors, watching the same patterns repeat themselves every single day. The top rep closes at twice the rate of everyone else and nobody can explain exactly why. A manager listens to hundreds of calls a week trying to find the coachable moments buried inside them. A new rep spends months figuring out objection handling that a veteran already solved two years ago and never wrote down.",
  "The intelligence existed. It just lived in people's heads, in recordings nobody had time to review, in deals that closed or didn't with no systematic record of why.",
  "We built Kota because we believed that gap was closeable. Not by changing how debt settlement teams sell, but by building the infrastructure to capture what already works, make it searchable, and put it in front of every rep at exactly the moment they need it.",
  "The debt settlement industry is one of the most demanding sales environments that exists. The prospects are stressed. The objections are heavy. The compliance requirements are real. The difference between a team that wins and a team that struggles is rarely talent. It's almost always systems.",
  "Kota is the system.",
  "We are not consultants telling you how to sell. We are not a generic call recording tool with AI bolted on. We are infrastructure built specifically for this industry by people who understand what happens on these calls, what kills deals, what saves them, and what it takes to build a sales team that compounds over time.",
  "Every feature in Kota exists because we felt the absence of it firsthand. Every integration was chosen because it reflects how debt settlement companies actually operate. Every analysis output was designed to be useful in the 60 seconds a rep has before picking up the phone, not in a quarterly business review.",
  "This is not software built by people who read about your industry. It was built by people who worked in it.",
];

const pillars = [
  {
    label: "Industry First",
    body: "Every decision starts with how debt settlement teams actually work, not how software companies think they work.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="#10B981" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    label: "Data Driven",
    body: "We never tell you how to sell. We show you what your own data says about how you're already selling.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="#10B981" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    label: "Built to Compound",
    body: "Every call makes the system smarter. Every month the intelligence gets deeper. The longer you use it, the more valuable it becomes.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="#10B981" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <ScrollReveal />
      <Nav />

      {/* ══ HERO ══════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "#0A0A0A",
          paddingTop: 64,
          minHeight: "52vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Animated background orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="sos-orb-1 absolute"
            style={{
              top: "5%", left: "15%",
              width: 560, height: 560,
              borderRadius: "50%",
              background: "radial-gradient(ellipse, rgba(16,185,129,0.10) 0%, transparent 65%)",
              filter: "blur(60px)",
            }}
          />
          <div
            className="sos-orb-2 absolute"
            style={{
              bottom: "0%", right: "10%",
              width: 440, height: 440,
              borderRadius: "50%",
              background: "radial-gradient(ellipse, rgba(6,95,70,0.08) 0%, transparent 65%)",
              filter: "blur(50px)",
            }}
          />
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "linear-gradient(rgba(255,255,255,0.013) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.013) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
        </div>

        <div className="relative max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 py-24 text-center w-full">
          <h1
            className="font-extrabold text-white leading-[1.05] tracking-tight mb-6 reveal"
            style={{ fontSize: "clamp(36px, 6vw, 72px)" }}
          >
            Built From The Inside Out
          </h1>
          <p
            className="mx-auto reveal stagger-1"
            style={{
              color: "#707070",
              fontSize: "clamp(17px, 2vw, 22px)",
              maxWidth: 520,
              lineHeight: 1.6,
            }}
          >
            Kota was built by people who have sat in the seat.
          </p>
        </div>
      </section>

      {/* ══ BODY COPY ═════════════════════════════════════ */}
      <section className="py-16 sm:py-24" style={{ background: "#0A0A0A" }}>
        <div className="max-w-[720px] mx-auto px-5 sm:px-6 lg:px-8">
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className={`reveal stagger-${Math.min(i + 1, 6)}`}
                style={{
                  color: p === "Kota is the system." ? "#fff" : "#909090",
                  fontSize: p === "Kota is the system." ? "clamp(20px, 2.5vw, 26px)" : 18,
                  lineHeight: 1.8,
                  fontWeight: p === "Kota is the system." ? 700 : 400,
                  letterSpacing: p === "Kota is the system." ? "-0.01em" : "normal",
                }}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ══ THREE PILLARS ═════════════════════════════════ */}
      <section
        className="py-16 sm:py-24"
        style={{ background: "#0D0D0D", borderTop: "1px solid rgba(255,255,255,0.04)" }}
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.label}
                className={`reveal stagger-${i + 1} card card-green-left`}
                style={{
                  background: "#111111",
                  borderRadius: 14,
                  padding: "28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                {/* Icon */}
                <div style={{
                  width: 44, height: 44, borderRadius: 10, flexShrink: 0,
                  background: "rgba(16,185,129,0.1)",
                  border: "1px solid rgba(16,185,129,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {pillar.icon}
                </div>

                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>
                  {pillar.label}
                </h3>

                <p style={{ fontSize: 14, color: "#707070", lineHeight: 1.65 }}>
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ═════════════════════════════════════ */}
      <section
        className="py-20 sm:py-28 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #071f14 0%, #0a2a1a 40%, #071f14 100%)",
          borderTop: "1px solid rgba(16,185,129,0.15)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(16,185,129,0.08) 0%, transparent 70%)",
        }} />

        <div className="relative max-w-2xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2
            className="font-extrabold text-white leading-tight mb-5 reveal"
            style={{ fontSize: "clamp(28px, 4.5vw, 52px)" }}
          >
            Ready to See It in Action?
          </h2>
          <p
            className="mb-10 reveal stagger-1"
            style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.7 }}
          >
            Book a 20-minute demo and see exactly how Kota works for debt settlement teams.
          </p>
          <div className="reveal stagger-2">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "16px 36px", borderRadius: 12,
                background: "#fff", color: "#0A0A0A",
                fontWeight: 700, fontSize: 16,
                textDecoration: "none",
                boxShadow: "0 0 40px rgba(16,185,129,0.25)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              Book a Demo
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
