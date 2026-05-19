import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CursorGlow from "@/components/CursorGlow";
import { DEMO_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Use Cases | Kota",
  description:
    "See how debt settlement sales teams use Kota to increase enrollment rates, ramp reps faster, eliminate call blind spots, reactivate dead leads, and reduce client dropout.",
};

const useCases = [
  {
    num: "01",
    title: "Increase Enrollment Rate",
    desc: "Turn every call into a coaching opportunity. Kota indexes every objection and winning rebuttal so your whole team closes like your best rep.",
    href: "/use-cases/increase-enrollment-rate",
    icon: (
      <svg width="22" height="22" fill="none" stroke="#10B981" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Reduce Rep Ramp Time",
    desc: "New reps performing in weeks, not months. Kota gives every new hire access to your top closer's proven playbook from day one.",
    href: "/use-cases/reduce-ramp-time",
    icon: (
      <svg width="22" height="22" fill="none" stroke="#10B981" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Eliminate Call Blind Spots",
    desc: "Full visibility into every call without listening to a single recording. Kota scores every call and surfaces patterns managers actually need.",
    href: "/use-cases/eliminate-blind-spots",
    icon: (
      <svg width="22" height="22" fill="none" stroke="#10B981" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Reactivate Dead Leads",
    desc: "You already paid for these leads. Kota identifies your highest-probability reactivation candidates and runs automated sequences to bring them back.",
    href: "/use-cases/reactivate-dead-leads",
    icon: (
      <svg width="22" height="22" fill="none" stroke="#10B981" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Reduce Client Dropout",
    desc: "Enrolled clients who drop out cost you every fee on unsettled accounts. Kota automates every client touchpoint to keep them engaged and on track.",
    href: "/use-cases/reduce-client-dropout",
    icon: (
      <svg width="22" height="22" fill="none" stroke="#10B981" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function UseCasesPage() {
  return (
    <>
      <ScrollReveal />
      <Nav />

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden hero-bg noise"
        style={{ paddingTop: "calc(64px + var(--banner-h, 0px))" }}
      >
        <CursorGlow />
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-20 text-center relative z-10">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
            style={{
              background: "rgba(16,185,129,0.08)",
              border: "1px solid rgba(16,185,129,0.25)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#10B981" }} />
            <span className="text-xs font-semibold text-emerald-400 tracking-wide">
              Use Cases
            </span>
          </div>
          <h1
            className="font-extrabold text-white leading-tight mb-4"
            style={{ fontSize: "clamp(32px, 6vw, 60px)", letterSpacing: "-0.03em" }}
          >
            Every Problem Your Team{" "}
            <span className="gradient-text">Faces Today</span>
          </h1>
          <p
            className="text-sm sm:text-base lg:text-lg leading-relaxed mx-auto"
            style={{ color: "#707070", maxWidth: 520 }}
          >
            Kota is built to solve the specific, expensive problems that debt
            settlement sales teams deal with every day.
          </p>
        </div>
        <div
          className="absolute bottom-0 inset-x-0 h-20 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #0D0B09)" }}
        />
      </section>

      {/* ── Use case cards ── */}
      <section className="relative py-12 sm:py-20 pb-24 sm:pb-32" style={{ background: "#0D0B09" }}>
        <div className="dot-grid absolute inset-0 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col gap-5">
            {useCases.map((uc, i) => (
              <a
                key={uc.href}
                href={uc.href}
                className={`reveal stagger-${i + 1}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  className="use-case-card p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5"
                >
                  {/* Number + icon */}
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <span
                      className="font-black tabular-nums"
                      style={{ fontSize: 13, color: "rgba(255,255,255,0.12)", letterSpacing: "-0.02em", minWidth: 28 }}
                    >
                      {uc.num}
                    </span>
                    <div
                      style={{
                        width: 48, height: 48, borderRadius: 12, flexShrink: 0,
                        background: "rgba(16,185,129,0.10)",
                        border: "1px solid rgba(16,185,129,0.20)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}
                    >
                      {uc.icon}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <h2
                      className="font-bold text-white mb-1.5"
                      style={{ fontSize: "clamp(16px, 2vw, 20px)", letterSpacing: "-0.01em" }}
                    >
                      {uc.title}
                    </h2>
                    <p className="text-sm leading-relaxed" style={{ color: "#606060" }}>
                      {uc.desc}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div
                    className="flex-shrink-0 hidden sm:flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-200"
                    style={{
                      background: "rgba(16,185,129,0.08)",
                      border: "1px solid rgba(16,185,129,0.15)",
                      color: "#10B981",
                    }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-14 reveal">
            <p className="text-sm mb-5" style={{ color: "#505050" }}>
              Not sure which applies to your team? We&apos;ll show you all of them in one call.
            </p>
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book a Demo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
