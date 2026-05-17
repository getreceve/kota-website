import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ROICalculator from "@/components/ROICalculator";
import CursorGlow from "@/components/CursorGlow";

export const metadata: Metadata = {
  title: "ROI Calculator | Kota",
  description:
    "See exactly how much revenue your debt settlement team is leaving on the table every month. Adjust the sliders to calculate your personalized ROI with Kota.",
};

export default function ROICalculatorPage() {
  return (
    <>
      <ScrollReveal />
      <Nav />

      {/* ── Page hero ── */}
      <section
        className="relative overflow-hidden hero-bg noise"
        style={{ paddingTop: "calc(64px + var(--banner-h, 0px))" }}
      >
        <CursorGlow />

        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-20 text-center relative z-10">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
            style={{
              background: "rgba(16,185,129,0.08)",
              border: "1px solid rgba(16,185,129,0.25)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#10B981" }}
            />
            <span className="text-xs font-semibold text-emerald-400 tracking-wide">
              See The Numbers
            </span>
          </div>

          <h1
            className="font-extrabold text-white leading-tight mb-4"
            style={{
              fontSize: "clamp(32px, 6vw, 58px)",
              letterSpacing: "-0.03em",
            }}
          >
            Calculate Your ROI
          </h1>

          <p
            className="text-sm sm:text-base lg:text-lg leading-relaxed"
            style={{ color: "#707070", maxWidth: 540, margin: "0 auto" }}
          >
            Adjust the sliders to see exactly how much revenue your team is
            leaving on the table every month.
          </p>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 inset-x-0 h-20 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #0D0B09)" }}
        />
      </section>

      {/* ── Calculator ── */}
      <section
        className="relative py-8 sm:py-12 pb-20 sm:pb-28"
        style={{ background: "#0D0B09" }}
      >
        <div className="dot-grid absolute inset-0 pointer-events-none" />
        <div className="max-w-[680px] mx-auto px-5 sm:px-6 relative z-10">
          <ROICalculator />
        </div>
      </section>

      <Footer />
    </>
  );
}
