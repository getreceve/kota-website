import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { DEMO_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kota Sales OS | The Complete AI Operating System for Debt Settlement Sales",
  description:
    "Five integrated AI systems that automate every stage of your debt settlement sales operation. From the first call to the enrolled client and everything in between.",
};

/* ── Shared data ─────────────────────────────────── */
const systems = [
  {
    num: "01",
    name: "Kota Pipeline Intelligence",
    tag: "Starter · Growth · Performance · Full Stack",
    description:
      "The intelligence core of your sales operation. Every call your team makes gets automatically transcribed, analyzed against your own scripts and playbooks, and scored. Managers get complete visibility without listening to a single recording.",
    features: [
      "Automatic call transcription via AssemblyAI with speaker separation",
      "Call segmentation and scoring against your own script standards — not generic rubrics",
      "AI-powered pre-call account briefing from similar past accounts",
      "Objection Intelligence library built from every call your team has ever made",
      "Rep Performance dashboard with industry benchmark comparisons",
      "Full CRM and dialer integration — calls flow in automatically",
      "PII redaction of all sensitive data before storage",
    ],
    icon: (
      <svg width="28" height="28" fill="none" stroke="#10B981" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    num: "02",
    name: "Script & Rebuttal Optimization",
    tag: "Growth · Performance · Full Stack",
    description:
      "Your scripts get better every month without anyone manually reviewing calls. The system tracks which rebuttals are winning enrollments and which are losing them, then surfaces that data to your managers so they can make informed decisions.",
    features: [
      "Your scripts uploaded and used as the scoring rubric for every call",
      "Script adherence tracking per rep",
      "A/B testing framework for rebuttal variations",
      "Monthly data report showing which script elements are performing",
      "Managers decide what to change — the system just surfaces the data",
      "Fully integrated with System 1 call data",
    ],
    icon: (
      <svg width="28" height="28" fill="none" stroke="#10B981" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    num: "03",
    name: "Live Call Intelligence",
    tag: "Performance · Full Stack",
    description:
      "Your reps get their entire objection playbook surfaced in real time during the call. Your managers can monitor every active call simultaneously and send whisper messages only the rep can see.",
    features: [
      "Real-time transcription as the call happens",
      "Live objection detection with automatic rebuttal suggestions from your playbook",
      "Live compliance monitoring flagging missing disclosures as they happen",
      "Sentiment tracking showing how prospect engagement shifts during the call",
      "Manager live monitoring dashboard showing all active calls",
      "Whisper feature for real-time manager coaching without the prospect hearing",
    ],
    icon: (
      <svg width="28" height="28" fill="none" stroke="#10B981" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    num: "04",
    name: "Lead Reactivation Engine",
    tag: "Full Stack",
    description:
      "Most debt settlement companies are sitting on thousands of leads they already paid for and never converted. This system finds the highest-probability ones and automatically re-engages them across multiple channels.",
    features: [
      "Full audit of your dead lead database",
      "AI scoring model identifying highest reactivation probability candidates",
      "Multi-channel sequences via SMS, email, and voicemail drop",
      "Automatic routing of responding leads to the right rep",
      "Integration with Kota Pipeline Intelligence for instant pre-call briefing on reactivated leads",
      "Performance-based pricing available",
    ],
    icon: (
      <svg width="28" height="28" fill="none" stroke="#10B981" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    num: "05",
    name: "Client Retention Automation",
    tag: "Full Stack",
    description:
      "Enrolled clients who drop out before their debts are settled cost you significant revenue. This system automates every client touchpoint from enrollment to program completion to keep clients engaged and on track.",
    features: [
      "Automated enrollment document collection and e-signature workflow",
      "Personalized welcome and onboarding sequences",
      "Milestone communication sequences triggered at key program points",
      "Monthly progress updates sent automatically to each client",
      "Early-warning re-engagement for clients who miss a payment",
      "Integration with your case management system",
    ],
    icon: (
      <svg width="28" height="28" fill="none" stroke="#10B981" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const packages = [
  {
    name: "Starter",
    systems: "System 1",
    setup: "$3,000 – $8,000",
    monthly: "$1,500 – $2,500",
    bestFor: "Teams ready to make their calls smarter",
    popular: false,
  },
  {
    name: "Growth",
    systems: "Systems 1 & 2",
    setup: "$5,000 – $11,000",
    monthly: "$2,000 – $3,000",
    bestFor: "Teams ready to optimize their scripts with data",
    popular: false,
  },
  {
    name: "Performance",
    systems: "Systems 1, 2 & 3",
    setup: "$7,000 – $14,000",
    monthly: "$2,500 – $4,000",
    bestFor: "Teams who want real-time intelligence during every call",
    popular: true,
  },
  {
    name: "Full Stack",
    systems: "All 5 Systems",
    setup: "$12,000 – $20,000",
    monthly: "$4,500 – $7,000",
    bestFor: "Teams who want the complete AI operating system",
    popular: false,
  },
];

const testimonials = [
  {
    quote:
      "We were losing accounts to debt-to-income objections every week. Kota showed us exactly what our top closer was saying differently. Fixed it in two weeks.",
    name: "Marcus T.",
    title: "Director of Sales",
    note: "28-rep team",
    initials: "MT",
  },
  {
    quote:
      "I used to spend 4 hours a week listening to calls just to coach my team. Now Kota flags exactly where each rep needs help automatically.",
    name: "Priya S.",
    title: "Sales Manager",
    note: "",
    initials: "PS",
  },
  {
    quote:
      "New reps used to take 8 weeks to ramp. Now they have access to every objection we've ever overcome from day one. Three weeks and they're producing.",
    name: "Derek W.",
    title: "VP of Sales",
    note: "",
    initials: "DW",
  },
];

/* ── Check icons ─────────────────────────────────── */
function GreenCheck() {
  return (
    <svg width="15" height="15" fill="none" stroke="#10B981" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: 2 }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

/* ── Flow diagram ────────────────────────────────── */
function FlowDiagram() {
  const node = (num: string, label: string, x: number, y: number) => (
    <g key={num}>
      <circle cx={x} cy={y} r="28" fill="#111" stroke="rgba(16,185,129,0.4)" strokeWidth="1.5" />
      <circle cx={x} cy={y} r="20" fill="rgba(16,185,129,0.08)" />
      <text x={x} y={y - 5} textAnchor="middle" fill="#10B981" fontSize="11" fontWeight="700">{num}</text>
      <text x={x} y={y + 8} textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8">{label}</text>
    </g>
  );

  /* Arrow head */
  const arrow = (id: string, color = "#10B981") => (
    <marker key={id} id={id} markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill={color} />
    </marker>
  );

  return (
    <div style={{ overflowX: "auto", overflowY: "hidden" }}>
      <svg viewBox="0 0 700 320" width="100%" style={{ maxWidth: 700, display: "block", margin: "0 auto", minWidth: 320 }}>
        <defs>
          {arrow("ah1")}
          {arrow("ah2")}
          {arrow("ah3")}
          {arrow("ah4")}
          {arrow("ah5")}
          {arrow("ah6")}
        </defs>

        {/* Connecting lines — animated dashes */}
        {/* 1 → 2 */}
        <line x1="168" y1="100" x2="262" y2="100" stroke="#10B981" strokeOpacity="0.5" strokeWidth="1.5" markerEnd="url(#ah1)" className="flow-line" />
        {/* 2 → 3 */}
        <line x1="318" y1="100" x2="412" y2="100" stroke="#10B981" strokeOpacity="0.5" strokeWidth="1.5" markerEnd="url(#ah2)" className="flow-line" />
        {/* 3 → 4 (non-enrolled) */}
        <line x1="560" y1="128" x2="560" y2="210" stroke="rgba(16,185,129,0.35)" strokeOpacity="0.5" strokeWidth="1.5" markerEnd="url(#ah3)" className="flow-line-slow" />
        {/* 1 → 5 (enrolled) */}
        <line x1="140" y1="128" x2="140" y2="210" stroke="rgba(16,185,129,0.35)" strokeOpacity="0.5" strokeWidth="1.5" markerEnd="url(#ah4)" className="flow-line-slow" />
        {/* 2 feeds 1 loop */}
        <path d="M290 72 Q290 30 140 30 Q140 70 140 72" fill="none" stroke="rgba(16,185,129,0.25)" strokeWidth="1.5" strokeDasharray="6 5" markerEnd="url(#ah5)" className="flow-line-slow" />
        {/* Live call arrow */}
        <line x1="468" y1="100" x2="532" y2="100" stroke="#10B981" strokeOpacity="0.5" strokeWidth="1.5" markerEnd="url(#ah6)" className="flow-line" />

        {/* Labels on lines */}
        <text x="215" y="93" textAnchor="middle" fill="rgba(255,255,255,0.28)" fontSize="9">call data</text>
        <text x="365" y="93" textAnchor="middle" fill="rgba(255,255,255,0.28)" fontSize="9">scripts</text>
        <text x="215" y="30" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="8">continuous improvement</text>
        <text x="576" y="175" fill="rgba(255,255,255,0.28)" fontSize="8">no sale</text>
        <text x="148" y="175" fill="rgba(255,255,255,0.28)" fontSize="8">enrolled</text>

        {/* System nodes */}
        {node("01", "Pipeline", 140, 100)}
        {node("02", "Scripts", 290, 100)}
        {node("03", "Live Call", 440, 100)}
        {node("04", "Reactivate", 560, 240)}
        {node("05", "Retention", 140, 240)}

        {/* "Lead In" label */}
        <text x="50" y="104" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="10">Lead In</text>
        <line x1="78" y1="100" x2="110" y2="100" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#ah1)" />
      </svg>
    </div>
  );
}

/* ── Page ────────────────────────────────────────── */
export default function SalesOSPage() {
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
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Animated background orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="sos-orb-1 absolute"
            style={{
              top: "15%", left: "10%",
              width: 600, height: 600,
              borderRadius: "50%",
              background: "radial-gradient(ellipse, rgba(16,185,129,0.12) 0%, transparent 65%)",
              filter: "blur(60px)",
            }}
          />
          <div
            className="sos-orb-2 absolute"
            style={{
              bottom: "10%", right: "5%",
              width: 500, height: 500,
              borderRadius: "50%",
              background: "radial-gradient(ellipse, rgba(6,95,70,0.10) 0%, transparent 65%)",
              filter: "blur(50px)",
            }}
          />
          {/* Subtle grid */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 py-24 text-center w-full">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-7"
            style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.25)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#10B981" }} />
            <span className="text-xs font-semibold tracking-wide" style={{ color: "#10B981" }}>
              Kota Sales OS
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-extrabold text-white leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: "clamp(32px, 6vw, 72px)" }}
          >
            The Complete AI Operating System<br />
            <span className="gradient-text">for Debt Settlement Sales</span>
          </h1>

          {/* Subheadline */}
          <p
            className="mx-auto mb-10"
            style={{ color: "#A0A0A0", fontSize: "clamp(16px, 2vw, 20px)", maxWidth: 620, lineHeight: 1.65 }}
          >
            Five integrated systems that automate every stage of your sales operation.
            From the first call to the enrolled client and everything in between.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book a Demo
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="/pricing" className="btn-ghost">See Pricing</a>
          </div>

          {/* Stat pills */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {["5 Integrated Systems", "Full CRM & Dialer Integration", "Built for Debt Settlement"].map((s) => (
              <div key={s}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#A0A0A0" }}>
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#10B981" }} />
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ THE FIVE SYSTEMS ══════════════════════════════ */}
      <section className="py-20 sm:py-32" style={{ background: "#0A0A0A" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-16 reveal">
            <p className="section-label mb-3">The Five Systems</p>
            <h2 className="font-extrabold text-white leading-tight"
              style={{ fontSize: "clamp(26px, 4vw, 52px)" }}>
              Every Part of Your Operation.<br />
              <span className="gradient-text">One Integrated Platform.</span>
            </h2>
          </div>

          {/* System cards — vertical timeline */}
          <div className="relative">
            {/* Vertical connector line */}
            <div
              className="hidden lg:block absolute"
              style={{
                left: 43, top: 0, bottom: 0, width: 1,
                background: "linear-gradient(to bottom, transparent, rgba(16,185,129,0.3) 10%, rgba(16,185,129,0.3) 90%, transparent)",
              }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {systems.map((s, i) => (
                <div key={s.num} className={`reveal stagger-${Math.min(i + 1, 5)}`}>
                  <div className="lg:flex lg:gap-10 lg:items-start">

                    {/* Number badge */}
                    <div className="hidden lg:flex items-center justify-center flex-shrink-0"
                      style={{
                        width: 56, height: 56, borderRadius: "50%", zIndex: 1, position: "relative",
                        background: "linear-gradient(135deg, #10B981, #065F46)",
                        boxShadow: "0 0 20px rgba(16,185,129,0.35)",
                      }}>
                      <span style={{ fontSize: 13, fontWeight: 800, color: "#fff" }}>{s.num}</span>
                    </div>

                    {/* Card */}
                    <div style={{
                      flex: 1,
                      background: "#111111",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderRadius: 16,
                      padding: "28px 28px",
                      transition: "border-color 0.25s ease, box-shadow 0.25s ease",
                    }}
                      className="card"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                        {/* Icon */}
                        <div style={{
                          width: 52, height: 52, borderRadius: 12, flexShrink: 0,
                          background: "rgba(16,185,129,0.1)",
                          border: "1px solid rgba(16,185,129,0.2)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                          {s.icon}
                        </div>

                        <div className="flex-1">
                          {/* Mobile number */}
                          <span className="lg:hidden inline-block text-xs font-bold tracking-widest mb-1"
                            style={{ color: "#10B981", textTransform: "uppercase" }}>
                            System {s.num}
                          </span>
                          <h3 style={{ fontSize: "clamp(18px, 2vw, 22px)", fontWeight: 800, color: "#fff", marginBottom: 6, lineHeight: 1.2 }}>
                            {s.name}
                          </h3>
                          {/* Package tag */}
                          <span style={{
                            display: "inline-block", fontSize: 10, fontWeight: 600,
                            color: "#555", letterSpacing: "0.06em", marginBottom: 12,
                            textTransform: "uppercase",
                          }}>
                            Included in: {s.tag}
                          </span>
                          <p style={{ color: "#909090", fontSize: 15, lineHeight: 1.65, marginBottom: 18 }}>
                            {s.description}
                          </p>

                          {/* Feature list */}
                          <ul style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                            {s.features.map((f) => (
                              <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                                <GreenCheck />
                                <span style={{ color: "#C0C0C0", fontSize: 14, lineHeight: 1.5 }}>{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS TOGETHER ══════════════════════════ */}
      <section className="py-20 sm:py-28" style={{ background: "#0D0D0D", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <p className="section-label mb-3">The Full Picture</p>
            <h2 className="font-extrabold text-white leading-tight"
              style={{ fontSize: "clamp(26px, 4vw, 50px)" }}>
              Five Systems.{" "}
              <span className="gradient-text">One Integrated Operation.</span>
            </h2>
            <p style={{ color: "#707070", fontSize: 16, maxWidth: 540, margin: "16px auto 0" }}>
              Every system feeds the next. Data flows automatically — no manual exports,
              no disconnected tools, no blind spots.
            </p>
          </div>

          <div className="reveal">
            <FlowDiagram />
          </div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-10 reveal">
            {systems.map((s) => (
              <div key={s.num} className="flex items-center gap-2">
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#10B981", flexShrink: 0 }} />
                <span style={{ fontSize: 12, color: "#707070" }}>
                  <span style={{ color: "#10B981", fontWeight: 700 }}>{s.num}</span> — {s.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PACKAGES ══════════════════════════════════════ */}
      <section className="py-20 sm:py-32" style={{ background: "#0A0A0A" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="text-center mb-14 reveal">
            <p className="section-label mb-3">How We Work Together</p>
            <h2 className="font-extrabold text-white leading-tight"
              style={{ fontSize: "clamp(26px, 4vw, 50px)" }}>
              Start With What You Need.{" "}
              <span className="gradient-text">Scale As You Grow.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {packages.map((pkg, i) => (
              <div
                key={pkg.name}
                className={`sos-pkg-card reveal stagger-${i + 1} ${pkg.popular ? "sos-pkg-card-popular" : ""}`}
              >
                {/* Popular badge */}
                {pkg.popular && (
                  <div className="mb-4">
                    <span style={{
                      display: "inline-flex", alignItems: "center",
                      background: "rgba(16,185,129,0.12)",
                      border: "1px solid rgba(16,185,129,0.3)",
                      color: "#10B981",
                      fontSize: 10, fontWeight: 700, letterSpacing: "0.08em",
                      textTransform: "uppercase", borderRadius: 999,
                      padding: "3px 10px",
                    }}>Most Popular</span>
                  </div>
                )}
                {!pkg.popular && <div className="mb-4" style={{ height: 24 }} />}

                <h3 style={{ fontSize: 22, fontWeight: 800, color: "#fff", marginBottom: 6 }}>
                  {pkg.name}
                </h3>

                <p style={{ fontSize: 12, color: "#555", marginBottom: 16, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  {pkg.systems}
                </p>

                {/* Pricing */}
                <div style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 10, padding: "14px 16px", marginBottom: 16,
                }}>
                  <div style={{ marginBottom: 8 }}>
                    <span style={{ fontSize: 10, color: "#555", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      Setup
                    </span>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginTop: 2 }}>{pkg.setup}</div>
                  </div>
                  <div>
                    <span style={{ fontSize: 10, color: "#555", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      Monthly
                    </span>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "#10B981", marginTop: 2 }}>{pkg.monthly}</div>
                  </div>
                </div>

                <p style={{ fontSize: 13, color: "#707070", lineHeight: 1.5, marginBottom: 20, flexGrow: 1 }}>
                  Best for: {pkg.bestFor}
                </p>

                <a
                  href={DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    padding: "11px 16px", borderRadius: 10, fontWeight: 700, fontSize: 14,
                    textDecoration: "none", marginTop: "auto",
                    background: pkg.popular ? "linear-gradient(135deg, #10B981, #065F46)" : "rgba(255,255,255,0.06)",
                    border: pkg.popular ? "none" : "1px solid rgba(255,255,255,0.1)",
                    color: "#fff",
                    transition: "opacity 0.2s ease, background 0.2s ease",
                  }}
                >
                  Book a Demo
                </a>
              </div>
            ))}
          </div>

          {/* Note */}
          <p className="text-center reveal" style={{ color: "#4A4A4A", fontSize: 13, maxWidth: 600, margin: "0 auto" }}>
            All packages include full CRM and dialer integration. Setup fee covers custom configuration
            to your specific stack and scripts. No per-seat fees. Cancel anytime.
          </p>
        </div>
      </section>

      {/* ══ SOCIAL PROOF ══════════════════════════════════ */}
      <section className="py-20 sm:py-28" style={{ background: "#0D0D0D", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="text-center mb-12 reveal">
            <p className="section-label mb-3">What Sales Leaders Are Saying</p>
            <h2 className="font-extrabold text-white leading-tight"
              style={{ fontSize: "clamp(24px, 3.5vw, 44px)" }}>
              Real Teams. <span className="gradient-text">Real Results.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className={`card p-6 flex flex-col reveal stagger-${i + 1}`}>
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#10B981">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <div className="text-4xl font-serif mb-2 leading-none" style={{ color: "rgba(16,185,129,0.3)" }}>&ldquo;</div>
                <p className="text-white text-sm leading-relaxed flex-1 mb-6 font-medium">{t.quote}</p>
                <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #10B981, #065F46)" }}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{t.name}</p>
                    <p className="text-xs" style={{ color: "#555" }}>
                      {t.title}{t.note ? ` · ${t.note}` : ""}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ═════════════════════════════════════ */}
      <section className="py-20 sm:py-28 relative overflow-hidden" style={{
        background: "linear-gradient(135deg, #071f14 0%, #0a2a1a 40%, #071f14 100%)",
        borderTop: "1px solid rgba(16,185,129,0.15)",
      }}>
        {/* Subtle glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(16,185,129,0.08) 0%, transparent 70%)",
        }} />

        <div className="relative max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <p className="section-label mb-5 reveal" style={{ color: "rgba(16,185,129,0.7)" }}>
            Ready to Scale
          </p>
          <h2
            className="font-extrabold text-white leading-tight mb-6 reveal"
            style={{ fontSize: "clamp(28px, 5vw, 56px)" }}
          >
            Your Competitors Are Still<br />Doing This Manually
          </h2>
          <p className="mb-10 reveal" style={{ color: "rgba(255,255,255,0.55)", fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.7 }}>
            Every month you wait is another month of calls that never get analyzed, scripts that never improve,
            and leads that never get reactivated. Book a demo and see the full system in 20 minutes.
          </p>
          <div className="reveal">
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
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                boxShadow: "0 0 40px rgba(16,185,129,0.25)",
              }}
              className="btn-final-cta"
            >
              Book a Demo
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          <p className="mt-5 reveal" style={{ color: "rgba(255,255,255,0.25)", fontSize: 13 }}>
            No commitment. See the full system in 20 minutes.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
