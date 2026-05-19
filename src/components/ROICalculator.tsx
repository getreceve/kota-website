"use client";

import { useState } from "react";
import { DEMO_URL } from "@/lib/constants";
import { getVerticalConfig } from "@/config/verticals";

// ── Helpers ────────────────────────────────────────────────────────────
function fmt(n: number) {
  return Math.round(n).toLocaleString("en-US");
}
function fmtDollar(n: number) {
  return "$" + fmt(n);
}

// ── Slider ─────────────────────────────────────────────────────────────
function RoiSlider({
  label,
  hint,
  value,
  min,
  max,
  step,
  display,
  onChange,
  derivedNode,
}: {
  label: string;
  hint?: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (v: number) => void;
  derivedNode?: React.ReactNode;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="mb-7 last:mb-0">
      <div className="flex items-baseline justify-between mb-1.5">
        <label className="text-sm font-semibold text-white">{label}</label>
        <span className="text-sm font-bold tabular-nums" style={{ color: "#10B981" }}>
          {display}
        </span>
      </div>
      {hint && (
        <p className="text-xs mb-2.5" style={{ color: "#505050" }}>
          {hint}
        </p>
      )}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="roi-slider"
        style={{
          background: `linear-gradient(to right, #10B981 ${pct}%, #262624 ${pct}%)`,
        }}
      />
      {derivedNode}
    </div>
  );
}

// ── Metric card ────────────────────────────────────────────────────────
function MetricCard({
  label,
  value,
  sub,
  highlight = false,
  accent = false,
  large = false,
}: {
  label: string;
  value: string;
  sub?: string;
  highlight?: boolean;
  accent?: boolean;
  large?: boolean;
}) {
  return (
    <div
      className="rounded-xl p-4 sm:p-5 flex flex-col justify-between"
      style={{
        background: highlight ? "rgba(16,185,129,0.07)" : "rgba(255,255,255,0.03)",
        border: highlight
          ? "1px solid rgba(16,185,129,0.22)"
          : "1px solid rgba(255,255,255,0.06)",
        minHeight: 90,
      }}
    >
      <p className="text-xs font-medium leading-snug mb-2" style={{ color: "#565654" }}>
        {label}
      </p>
      <div>
        <p
          className="font-extrabold leading-tight tabular-nums"
          style={{
            fontSize: large ? "clamp(18px,3vw,24px)" : "clamp(16px,2.5vw,20px)",
            color: accent ? "#34D399" : highlight ? "#10B981" : "#ffffff",
          }}
        >
          {value}
        </p>
        {sub && (
          <p className="text-[11px] mt-1 leading-snug" style={{ color: "#484846" }}>
            {sub}
          </p>
        )}
      </div>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────
export default function ROICalculator() {
  const { roi } = getVerticalConfig();

  // ── Slider state ───────────────────────────────────────────────────
  const [reps, setReps] = useState(10);
  const [leadsPerRep, setLeadsPerRep] = useState(80);
  const [costPerLead, setCostPerLead] = useState(100);
  const [closeRate, setCloseRate] = useState(22);
  const [revenuePerEnrollment, setRevenuePerEnrollment] = useState(1750);

  // ── Computed values ────────────────────────────────────────────────
  const enrollmentsNow = Math.round(reps * leadsPerRep * (closeRate / 100));
  const enrollmentsKota = Math.round(enrollmentsNow * 1.2);
  const revenueNow = enrollmentsNow * revenuePerEnrollment;
  const revenueKota = enrollmentsKota * revenuePerEnrollment;
  const additionalRevenue = revenueKota - revenueNow;
  const additionalEnrollments = enrollmentsKota - enrollmentsNow;
  const costPerClient = costPerLead / (closeRate / 100);
  const leadSpendRecovered = Math.round(additionalEnrollments * costPerClient);
  const annualUpside = (additionalRevenue + leadSpendRecovered) * 12;
  const costPerClientKota = Math.round(costPerClient / 1.2);

  // ── Lead capture state ─────────────────────────────────────────────
  const [stage, setStage] = useState<0 | 1 | 2>(0);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStage(1);
  }

  async function handleFullSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!firstName || !lastName || !company || !title) return;
    setIsSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/roi-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          first_name: firstName,
          last_name: lastName,
          company,
          title,
          phone: phone || null,
          reps,
          leads_per_rep: leadsPerRep,
          cost_per_lead: costPerLead,
          close_rate: closeRate,
          revenue_per_enrollment: revenuePerEnrollment,
          calculated_annual_upside: annualUpside,
        }),
      });
      if (!res.ok) throw new Error("failed");
      setStage(2);
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const noun = roi.nounSingular;
  const nounPlural = roi.nounPlural;
  const verbPast = roi.verbPastTense;

  return (
    <div className="w-full flex flex-col gap-5">

      {/* ── Sliders ── */}
      <div
        className="rounded-2xl p-6 sm:p-8"
        style={{
          background: "#111110",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <p
          className="text-xs font-bold uppercase tracking-widest mb-6"
          style={{ color: "#10B981" }}
        >
          Your Team
        </p>

        <RoiSlider
          label={roi.repsLabel}
          value={reps}
          min={2} max={50} step={1}
          display={String(reps)}
          onChange={setReps}
        />

        <RoiSlider
          label={roi.leadsPerRepLabel}
          value={leadsPerRep}
          min={20} max={300} step={5}
          display={fmt(leadsPerRep)}
          onChange={setLeadsPerRep}
        />

        <RoiSlider
          label={roi.costPerLeadLabel}
          hint={roi.costPerLeadHint}
          value={costPerLead}
          min={25} max={500} step={5}
          display={fmtDollar(costPerLead)}
          onChange={setCostPerLead}
        />

        <RoiSlider
          label={roi.closeRateLabel}
          hint={roi.closeRateHint}
          value={closeRate}
          min={5} max={60} step={1}
          display={`${closeRate}%`}
          onChange={setCloseRate}
          derivedNode={
            <div
              className="flex items-center justify-between mt-3 px-3 py-2 rounded-lg"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <span className="text-xs" style={{ color: "#505050" }}>
                Cost per {verbPast} client
              </span>
              <span className="text-xs font-bold tabular-nums" style={{ color: "#8A8A88" }}>
                {fmtDollar(costPerClient)}
              </span>
            </div>
          }
        />

        <RoiSlider
          label={roi.revenueLabel}
          hint={roi.revenueHint}
          value={revenuePerEnrollment}
          min={500} max={5000} step={50}
          display={fmtDollar(revenuePerEnrollment)}
          onChange={setRevenuePerEnrollment}
        />
      </div>

      {/* ── Metric cards ── */}
      <div
        className="rounded-2xl p-6 sm:p-8"
        style={{
          background: "#111110",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <p
          className="text-xs font-bold uppercase tracking-widest mb-5"
          style={{ color: "#10B981" }}
        >
          Your Numbers
        </p>

        <div className="grid grid-cols-2 gap-3">
          <MetricCard
            label={`${nounPlural.charAt(0).toUpperCase() + nounPlural.slice(1)} now / month`}
            value={fmt(enrollmentsNow)}
          />
          <MetricCard
            label={`${nounPlural.charAt(0).toUpperCase() + nounPlural.slice(1)} with Kota / month`}
            value={fmt(enrollmentsKota)}
            sub="conservative +20% lift"
            highlight
          />
          <MetricCard
            label="Revenue now / month"
            value={fmtDollar(revenueNow)}
          />
          <MetricCard
            label="Revenue with Kota / month"
            value={fmtDollar(revenueKota)}
            highlight
          />
          <MetricCard
            label="Additional revenue / month"
            value={fmtDollar(additionalRevenue)}
            accent
          />
          <MetricCard
            label="Lead spend recovered / month"
            value={fmtDollar(leadSpendRecovered)}
            accent
          />
          <MetricCard
            label="Annual upside"
            value={fmtDollar(annualUpside)}
            sub={`revenue + recovered lead spend`}
            highlight
            accent
            large
          />
          <MetricCard
            label={`Cost per ${verbPast} client`}
            value={fmtDollar(Math.round(costPerClient))}
            sub={`drops to ${fmtDollar(costPerClientKota)} with Kota`}
          />
        </div>
      </div>

      {/* ── Insights ── */}
      <div
        className="rounded-2xl p-6 sm:p-7"
        style={{
          background: "rgba(16,185,129,0.05)",
          border: "1px solid rgba(16,185,129,0.14)",
        }}
      >
        <p
          className="text-xs font-bold uppercase tracking-widest mb-4"
          style={{ color: "#10B981" }}
        >
          What This Means For You
        </p>
        <ul className="flex flex-col gap-3.5">
          <li className="text-sm leading-relaxed" style={{ color: "#B0B0A8" }}>
            <span style={{ color: "#34D399", fontWeight: 600 }}>
              {fmt(additionalEnrollments)} more {nounPlural} per month
            </span>{" "}
            from leads you&apos;re already paying for — no increase in ad
            spend required.
          </li>
          <li className="text-sm leading-relaxed" style={{ color: "#B0B0A8" }}>
            At {fmtDollar(revenuePerEnrollment)} per {noun}, that&apos;s{" "}
            <span style={{ color: "#34D399", fontWeight: 600 }}>
              {fmtDollar(additionalRevenue)} in additional monthly revenue
            </span>{" "}
            your team is currently leaving on the table every single month.
          </li>
          <li className="text-sm leading-relaxed" style={{ color: "#B0B0A8" }}>
            Combined with{" "}
            <span style={{ color: "#34D399", fontWeight: 600 }}>
              {fmtDollar(leadSpendRecovered)} in recovered lead spend
            </span>
            , your team&apos;s annual upside is{" "}
            <span style={{ color: "#10B981", fontWeight: 700 }}>
              {fmtDollar(annualUpside)}
            </span>
            .
          </li>
        </ul>
      </div>

      {/* ── Lead capture — Stage 0: email ── */}
      {stage === 0 && (
        <div
          className="rounded-2xl p-6 sm:p-8"
          style={{
            background: "#111110",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <h3
            className="text-white font-bold text-lg sm:text-xl mb-1.5"
            style={{ letterSpacing: "-0.02em" }}
          >
            Get your full breakdown
          </h3>
          <p className="text-sm mb-5" style={{ color: "#555" }}>
            We&apos;ll send a personalized report with benchmarks for your
            team size and close rate.
          </p>
          <form
            onSubmit={handleEmailSubmit}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="roi-input flex-1"
            />
            <button
              type="submit"
              className="btn-primary whitespace-nowrap !text-sm !py-3 !px-6 !rounded-xl"
            >
              Send me the full report
            </button>
          </form>
        </div>
      )}

      {/* ── Lead capture — Stage 1: full profile ── */}
      {stage === 1 && (
        <div
          className="rounded-2xl p-6 sm:p-8"
          style={{
            background: "#111110",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div className="mb-4">
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{
                background: "rgba(16,185,129,0.12)",
                border: "1px solid rgba(16,185,129,0.25)",
                color: "#10B981",
              }}
            >
              One last thing
            </span>
          </div>
          <h3
            className="text-white font-bold text-lg sm:text-xl mb-1.5"
            style={{ letterSpacing: "-0.02em" }}
          >
            Tell us a little about yourself
          </h3>
          <p className="text-sm mb-5" style={{ color: "#555" }}>
            So we can personalize your report to your role and company.
          </p>
          <form onSubmit={handleFullSubmit} className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                required
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="roi-input"
              />
              <input
                type="text"
                required
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="roi-input"
              />
            </div>
            <input
              type="text"
              required
              placeholder="Company name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="roi-input"
            />
            <input
              type="text"
              required
              placeholder="Your title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="roi-input"
            />
            <input
              type="tel"
              placeholder="Phone (optional)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="roi-input"
            />
            {submitError && (
              <p className="text-sm" style={{ color: "#F87171" }}>
                {submitError}
              </p>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary !text-sm !py-3 !px-6 !rounded-xl mt-1 disabled:opacity-60"
            >
              {isSubmitting ? "Submitting…" : "Submit"}
            </button>
          </form>
        </div>
      )}

      {/* ── Lead capture — Stage 2: success ── */}
      {stage === 2 && (
        <div
          className="rounded-2xl p-8 sm:p-10 text-center"
          style={{
            background: "rgba(16,185,129,0.06)",
            border: "1px solid rgba(16,185,129,0.18)",
          }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{
              background: "rgba(16,185,129,0.14)",
              border: "1px solid rgba(16,185,129,0.28)",
            }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="#10B981"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3
            className="text-white font-bold text-xl sm:text-2xl mb-2"
            style={{ letterSpacing: "-0.025em" }}
          >
            You&apos;re all set
          </h3>
          <p className="text-sm mb-7" style={{ color: "#606060" }}>
            We&apos;ll send your personalized breakdown within 24 hours.
          </p>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !text-sm !py-3 !px-8 !rounded-xl"
          >
            Book a Demo
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}
