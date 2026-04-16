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

/* ── Dot grid background ─────────────────────────────── */
function DotGrid({ opacity = 0.05 }: { opacity?: number }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: "radial-gradient(rgba(16,185,129,0.18) 1px, transparent 1px)",
        backgroundSize: "30px 30px",
        opacity,
      }}
    />
  );
}

/* ── Stat card between paragraphs ───────────────────── */
function StatCard({ text, right = false }: { text: string; right?: boolean }) {
  return (
    <div
      className="reveal"
      style={{
        margin: right ? "0 -32px 0 auto" : "0 auto 0 -32px",
        maxWidth: 340,
        background: "#111",
        border: "1px solid rgba(16,185,129,0.18)",
        borderLeft: "3px solid #10B981",
        borderRadius: 12,
        padding: "18px 22px",
        position: "relative",
      }}
    >
      <div style={{
        position: "absolute", top: -8, left: 18,
        background: "#10B981", borderRadius: 4,
        padding: "2px 8px",
        fontSize: 9, fontWeight: 800, letterSpacing: "0.1em",
        color: "#fff", textTransform: "uppercase",
      }}>
        Insight
      </div>
      <p style={{ color: "#909090", fontSize: 13, lineHeight: 1.65, marginTop: 6 }}>
        {text}
      </p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <ScrollReveal />
      <Nav />

      {/* ══ HERO — full viewport ══════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "#0A0A0A",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 64,
        }}
      >
        {/* Animated orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="sos-orb-1 absolute" style={{
            top: "20%", left: "15%", width: 600, height: 600,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(16,185,129,0.09) 0%, transparent 65%)",
            filter: "blur(70px)",
          }} />
          <div className="sos-orb-2 absolute" style={{
            bottom: "10%", right: "10%", width: 500, height: 500,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(6,95,70,0.07) 0%, transparent 65%)",
            filter: "blur(60px)",
          }} />
          <DotGrid opacity={0.04} />
        </div>

        {/* Hero content */}
        <div className="relative text-center px-5 sm:px-8" style={{ maxWidth: 820 }}>
          {/* Word-by-word headline */}
          <h1
            className="font-extrabold text-white leading-[1.05] tracking-[-0.03em] mb-8"
            style={{ fontSize: "clamp(44px, 8vw, 96px)" }}
          >
            {["Built", "From", "The"].map((word, i) => (
              <span key={word} className={`about-word about-word-${i}`} style={{ marginRight: "0.22em" }}>
                {word}
              </span>
            ))}
            {/* "Inside" gets the animated underline */}
            <span className="about-word about-word-3 about-underline" style={{ marginRight: "0.22em" }}>
              Inside
            </span>
            <span className="about-word about-word-4">Out</span>
          </h1>

          {/* Subheadline */}
          <p
            className="about-sub"
            style={{
              color: "#606060",
              fontSize: "clamp(17px, 2.2vw, 22px)",
              lineHeight: 1.6,
              maxWidth: 480,
              margin: "0 auto 56px",
            }}
          >
            Kota was built by people who have sat in the seat.
          </p>

          {/* Scroll indicator */}
          <div className="about-scroll-indicator flex flex-col items-center gap-2">
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", color: "#404040", textTransform: "uppercase" }}>
              Scroll
            </span>
            <svg width="16" height="24" fill="none" viewBox="0 0 16 24" style={{ color: "#10B981" }}>
              <path d="M8 2v16M2 13l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </section>

      {/* ══ STORY ════════════════════════════════════════ */}
      <section
        className="relative py-24 sm:py-32"
        style={{ background: "#0A0A0A" }}
      >
        <div className="max-w-[740px] mx-auto px-5 sm:px-8" style={{ position: "relative" }}>

          {/* Para 1 — with giant decorative quote mark */}
          <div className="reveal" style={{ position: "relative", marginBottom: 60 }}>
            {/* Decorative quote */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: -48,
                left: -24,
                fontSize: "clamp(100px, 14vw, 160px)",
                fontFamily: "Georgia, 'Times New Roman', serif",
                color: "#10B981",
                opacity: 0.07,
                lineHeight: 1,
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              &ldquo;
            </div>
            <p style={{ color: "#909090", fontSize: 18, lineHeight: 1.9, position: "relative" }}>
              Before there was a platform, there was a problem we lived firsthand. Years spent in
              high-volume phone sales, working debt settlement floors, watching the same patterns
              repeat themselves every single day. The top rep closes at twice the rate of everyone
              else and nobody can explain exactly why. A manager listens to hundreds of calls a week
              trying to find the coachable moments buried inside them. A new rep spends months
              figuring out objection handling that a veteran already solved two years ago and never
              wrote down.
            </p>
          </div>

          {/* Para 2 — green left border */}
          <div
            className="reveal about-border-left"
            style={{ marginBottom: 48 }}
          >
            <p style={{ color: "#909090", fontSize: 18, lineHeight: 1.9 }}>
              The intelligence existed. It just lived in people&apos;s heads, in recordings nobody had
              time to review, in deals that closed or didn&apos;t with no systematic record of why.
            </p>
          </div>

          {/* Stat card 1 */}
          <div style={{ marginBottom: 48 }}>
            <StatCard text="Debt settlement calls analyzed and scored against your own standards, not ours." />
          </div>

          {/* Para 3 */}
          <div className="reveal" style={{ marginBottom: 60 }}>
            <p style={{ color: "#909090", fontSize: 18, lineHeight: 1.9 }}>
              We built Kota because we believed that gap was closeable. Not by changing how debt
              settlement teams sell, but by building the infrastructure to capture what already works,
              make it searchable, and put it in front of every rep at exactly the moment they need it.
            </p>
          </div>

          {/* Para 4 — green left border */}
          <div
            className="reveal about-border-left"
            style={{ marginBottom: 48 }}
          >
            <p style={{ color: "#909090", fontSize: 18, lineHeight: 1.9 }}>
              The debt settlement industry is one of the most demanding sales environments that exists.
              The prospects are stressed. The objections are heavy. The compliance requirements are
              real. The difference between a team that wins and a team that struggles is rarely talent.
              It&apos;s almost always systems.
            </p>
          </div>

          {/* Stat card 2 — floats right */}
          <div style={{ marginBottom: 48 }}>
            <StatCard
              text="The gap between your top rep and your average rep is almost always systems, not talent."
              right
            />
          </div>

          {/* "Kota is the system." — special treatment */}
          <div className="reveal" style={{ marginBottom: 60 }}>
            <div style={{
              height: 1,
              background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.5), transparent)",
              marginBottom: 40,
            }} />
            <p style={{
              fontSize: "clamp(22px, 3.5vw, 30px)",
              fontWeight: 700,
              color: "#fff",
              textAlign: "center",
              letterSpacing: "-0.02em",
              lineHeight: 1.3,
            }}>
              Kota is the system.
            </p>
            <div style={{
              height: 1,
              background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.5), transparent)",
              marginTop: 40,
            }} />
          </div>

          {/* Para 5 */}
          <div className="reveal" style={{ marginBottom: 60 }}>
            <p style={{ color: "#909090", fontSize: 18, lineHeight: 1.9 }}>
              We are not consultants telling you how to sell. We are not a generic call recording tool
              with AI bolted on. We are infrastructure built specifically for this industry by people
              who understand what happens on these calls, what kills deals, what saves them, and what
              it takes to build a sales team that compounds over time.
            </p>
          </div>

          {/* Para 6 — green left border */}
          <div
            className="reveal about-border-left"
          >
            <p style={{ color: "#909090", fontSize: 18, lineHeight: 1.9 }}>
              Every feature in Kota exists because we felt the absence of it firsthand. Every
              integration was chosen because it reflects how debt settlement companies actually
              operate. Every analysis output was designed to be useful in the 60 seconds a rep has
              before picking up the phone, not in a quarterly business review.
            </p>
          </div>

        </div>
      </section>

      {/* ══ PULL QUOTE — full width ═══════════════════════ */}
      <section
        className="relative py-20 sm:py-28 overflow-hidden"
        style={{ background: "#0E0E0E", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}
      >
        <DotGrid opacity={0.035} />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center reveal">
          <p style={{
            fontSize: "clamp(20px, 3.5vw, 34px)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.45,
            letterSpacing: "-0.02em",
          }}>
            This is not software built by people who{" "}
            <span style={{ color: "#10B981" }}>read</span> about your industry.
            <br className="hidden sm:block" />
            It was built by people who{" "}
            <span style={{ color: "#10B981" }}>worked</span> in it.
          </p>
        </div>
      </section>

      {/* ══ THREE PILLARS ════════════════════════════════ */}
      <section
        className="relative py-20 sm:py-32 overflow-hidden"
        style={{ background: "#0A0A0A" }}
      >
        <DotGrid opacity={0.04} />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

            {/* Pillar 1 */}
            <div className="about-pillar reveal stagger-1" style={{
              background: "#111",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 16,
              padding: "36px 28px 40px",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Decorative number */}
              <div aria-hidden style={{
                position: "absolute", top: 12, right: 20,
                fontSize: 90, fontWeight: 900, lineHeight: 1,
                color: "rgba(16,185,129,0.13)", userSelect: "none", pointerEvents: "none",
              }}>01</div>
              {/* Icon */}
              <div style={{
                width: 52, height: 52, borderRadius: 12, marginBottom: 24,
                background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="26" height="26" fill="none" stroke="#10B981" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 14, letterSpacing: "-0.01em" }}>
                Industry First
              </h3>
              <p style={{ fontSize: 15, color: "#707070", lineHeight: 1.7 }}>
                Every decision starts with how debt settlement teams actually work, not how software
                companies think they work.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="about-pillar reveal stagger-2" style={{
              background: "#111",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 16,
              padding: "36px 28px 40px",
              position: "relative",
              overflow: "hidden",
            }}>
              <div aria-hidden style={{
                position: "absolute", top: 12, right: 20,
                fontSize: 90, fontWeight: 900, lineHeight: 1,
                color: "rgba(16,185,129,0.13)", userSelect: "none", pointerEvents: "none",
              }}>02</div>
              <div style={{
                width: 52, height: 52, borderRadius: 12, marginBottom: 24,
                background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="26" height="26" fill="none" stroke="#10B981" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 14, letterSpacing: "-0.01em" }}>
                Data Driven
              </h3>
              <p style={{ fontSize: 15, color: "#707070", lineHeight: 1.7 }}>
                We never tell you how to sell. We show you what your own data says about how
                you&apos;re already selling.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="about-pillar reveal stagger-3" style={{
              background: "#111",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 16,
              padding: "36px 28px 40px",
              position: "relative",
              overflow: "hidden",
            }}>
              <div aria-hidden style={{
                position: "absolute", top: 12, right: 20,
                fontSize: 90, fontWeight: 900, lineHeight: 1,
                color: "rgba(16,185,129,0.13)", userSelect: "none", pointerEvents: "none",
              }}>03</div>
              <div style={{
                width: 52, height: 52, borderRadius: 12, marginBottom: 24,
                background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="26" height="26" fill="none" stroke="#10B981" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 14, letterSpacing: "-0.01em" }}>
                Built to Compound
              </h3>
              <p style={{ fontSize: 15, color: "#707070", lineHeight: 1.7 }}>
                Every call makes the system smarter. Every month the intelligence gets deeper. The
                longer you use it, the more valuable it becomes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ═════════════════════════════════════ */}
      <section
        className="relative py-24 sm:py-32 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #071f14 0%, #0a2a1a 40%, #071f14 100%)",
          borderTop: "1px solid rgba(16,185,129,0.15)",
        }}
      >
        {/* Glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(16,185,129,0.09) 0%, transparent 70%)",
        }} />

        {/* Abstract arc */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          <svg
            viewBox="0 0 800 400"
            width="800"
            style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              opacity: 0.06,
            }}
          >
            <circle cx="400" cy="400" r="320" fill="none" stroke="#10B981" strokeWidth="80" />
            <circle cx="400" cy="400" r="200" fill="none" stroke="#10B981" strokeWidth="40" />
          </svg>
        </div>

        <div className="relative max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <h2
            className="font-extrabold text-white leading-tight mb-5 reveal"
            style={{ fontSize: "clamp(30px, 5vw, 56px)", letterSpacing: "-0.02em" }}
          >
            Ready to See It in Action?
          </h2>
          <p
            className="mb-10 reveal stagger-1"
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: "clamp(15px, 2vw, 18px)",
              lineHeight: 1.7,
            }}
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
                padding: "16px 40px", borderRadius: 12,
                background: "#fff", color: "#0A0A0A",
                fontWeight: 700, fontSize: 16,
                textDecoration: "none",
                boxShadow: "0 0 48px rgba(16,185,129,0.3)",
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
