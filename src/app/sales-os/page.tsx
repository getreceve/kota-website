import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CursorGlow from "@/components/CursorGlow";
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
      <circle cx={x} cy={y} r="42" fill="#111" stroke="rgba(16,185,129,0.4)" strokeWidth="1.5" />
      <circle cx={x} cy={y} r="30" fill="rgba(16,185,129,0.08)" />
      <text x={x} y={y - 6} textAnchor="middle" fill="#10B981" fontSize="14" fontWeight="800">{num}</text>
      <text x={x} y={y + 12} textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="11">{label}</text>
    </g>
  );

  const arrow = (id: string) => (
    <marker key={id} id={id} markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#10B981" fillOpacity="0.6" />
    </marker>
  );

  // Layout: clean rectangle
  // Top row:    01(180,140) → 02(420,140) → 03(660,140)
  // Bottom row: 05(180,320)               04(660,320)
  // 01↓05 (enrolled), 03↓04 (no sale), 04←05 (reactivated leads re-enter)

  return (
    <div style={{ overflowX: "auto", overflowY: "hidden" }}>
      <svg viewBox="0 0 860 460" width="100%" style={{ display: "block", margin: "0 auto", minWidth: 380 }}>
        <defs>
          {arrow("ah1")}{arrow("ah2")}{arrow("ah3")}
          {arrow("ah4")}{arrow("ah5")}{arrow("ah6")}
          {arrow("ah7")}
        </defs>

        {/* Top row: 01 → 02 → 03 */}
        <line x1="222" y1="140" x2="378" y2="140" stroke="#10B981" strokeOpacity="0.55" strokeWidth="1.8" markerEnd="url(#ah1)" className="flow-line" />
        <line x1="462" y1="140" x2="618" y2="140" stroke="#10B981" strokeOpacity="0.55" strokeWidth="1.8" markerEnd="url(#ah2)" className="flow-line" />

        {/* 01 ↓ 05 (enrolled) */}
        <line x1="180" y1="182" x2="180" y2="278" stroke="rgba(16,185,129,0.45)" strokeWidth="1.8" markerEnd="url(#ah3)" className="flow-line-slow" />

        {/* 03 ↓ 04 (no sale) */}
        <line x1="660" y1="182" x2="660" y2="278" stroke="rgba(16,185,129,0.45)" strokeWidth="1.8" markerEnd="url(#ah4)" className="flow-line-slow" />

        {/* 04 → 01 loop (reactivated → back into pipeline) */}
        <path d="M618 320 Q420 420 222 320" fill="none" stroke="rgba(16,185,129,0.25)" strokeWidth="1.5" strokeDasharray="7 5" markerEnd="url(#ah5)" className="flow-line-slow" />

        {/* Script improvement loop: 02 → back to 01 */}
        <path d="M400 98 Q400 40 180 40 Q180 96 180 98" fill="none" stroke="rgba(16,185,129,0.28)" strokeWidth="1.5" strokeDasharray="7 5" markerEnd="url(#ah6)" className="flow-line-slow" />

        {/* Labels */}
        <text x="300" y="128" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="11">call data</text>
        <text x="540" y="128" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="11">live scripts</text>
        <text x="290" y="40" textAnchor="middle" fill="rgba(255,255,255,0.22)" fontSize="10">continuous improvement</text>
        <text x="156" y="238" textAnchor="end" fill="rgba(255,255,255,0.3)" fontSize="10">enrolled</text>
        <text x="684" y="238" fill="rgba(255,255,255,0.3)" fontSize="10">no sale</text>
        <text x="420" y="418" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="10">reactivated → re-enter pipeline</text>

        {/* Nodes */}
        {node("01", "Pipeline", 180, 140)}
        {node("02", "Scripts", 420, 140)}
        {node("03", "Live Call", 660, 140)}
        {node("04", "Reactivate", 660, 320)}
        {node("05", "Retention", 180, 320)}

        {/* Lead In */}
        <text x="62" y="144" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="12">Lead In</text>
        <line x1="94" y1="140" x2="136" y2="140" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" strokeDasharray="5 4" markerEnd="url(#ah7)" />
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
        {/* Cursor-following gradient orbs */}
        <CursorGlow />

        {/* Subtle grid */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.013) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.013) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        <div className="relative max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 py-24 text-center w-full">
          {/* Eyebrow */}
          <div className="about-word about-word-0 inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-7"
            style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.25)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#10B981" }} />
            <span className="text-xs font-semibold tracking-wide" style={{ color: "#10B981" }}>
              Kota Sales OS
            </span>
          </div>

          {/* Headline — word-by-word animation reusing about-word classes */}
          <h1
            className="font-extrabold text-white leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: "clamp(32px, 6vw, 72px)" }}
          >
            <span className="about-word about-word-1">The Complete AI Operating System</span>
            <br />
            <span className="about-word about-word-2 gradient-text">for Debt Settlement Sales</span>
          </h1>

          {/* Subheadline */}
          <p
            className="about-sub mx-auto mb-10"
            style={{ color: "#A0A0A0", fontSize: "clamp(16px, 2vw, 20px)", maxWidth: 620, lineHeight: 1.65 }}
          >
            Five integrated systems that automate every stage of your sales operation.
            From the first call to the enrolled client and everything in between.
          </p>

          {/* CTAs */}
          <div className="about-sub flex flex-wrap items-center justify-center gap-4 mb-10">
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book a Demo
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="/pricing" className="btn-ghost">See Pricing</a>
          </div>

          {/* Stat pills — staggered */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {["5 Integrated Systems", "Full CRM & Dialer Integration", "Built for Debt Settlement"].map((s, i) => (
              <div key={s}
                className={`about-word about-word-${i + 3} flex items-center gap-2 px-4 py-2 rounded-xl text-sm`}
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#A0A0A0" }}>
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#10B981" }} />
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ THE FIVE SYSTEMS ══════════════════════════════ */}
      <section className="relative py-20 sm:py-32" style={{ background: "#0A0A0A" }}>
        <div className="dot-grid absolute inset-0" />
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">

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
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
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
              <div key={i} className={`card p-6 flex flex-col ${i === 0 ? "reveal-left" : i === 1 ? "reveal" : "reveal-right"} stagger-${i + 1}`}>
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

        {/* Abstract arc decoration */}
        <svg className="absolute pointer-events-none hidden sm:block" aria-hidden="true"
          style={{ top: "-12%", right: "-6%", width: "45%", maxWidth: 480, opacity: 0.06 }}
          viewBox="0 0 500 500" fill="none">
          <circle cx="300" cy="200" r="240" stroke="#10B981" strokeWidth="1.5" />
          <circle cx="300" cy="200" r="160" stroke="#34d399" strokeWidth="1" />
          <line x1="60" y1="200" x2="500" y2="200" stroke="#10B981" strokeWidth="0.75" strokeDasharray="6 8" />
        </svg>

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
