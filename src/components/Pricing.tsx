"use client";

import { DEMO_URL, SIGNUP_URL } from "@/lib/constants";

function Check() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "#10B981" }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

const freeFeatures = [
  "Full access to all features",
  "Up to 10 users",
  "Unlimited call uploads",
  "Objection intelligence library",
  "Rep performance scoring",
  "No credit card required",
];

const proFeatures = [
  "Unlimited users",
  "Full feature access",
  "Dedicated onboarding",
  "Industry benchmarks",
  "Priority support",
  "Custom integrations",
  "Advanced analytics & reporting",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32" style={{ background: "#0A0A0A" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p className="section-label mb-4">Pricing</p>
          <h2 className="font-extrabold text-white leading-tight" style={{ fontSize: "clamp(30px,4vw,50px)" }}>
            Start Free.{" "}
            <span className="gradient-text">Scale When You&apos;re Ready.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {/* Free Trial */}
          <div className="card p-8 reveal-scale stagger-1">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#555" }}>
              Free Trial
            </p>
            <div className="flex items-end gap-1 mb-2">
              <span className="text-5xl font-extrabold text-white">$0</span>
            </div>
            <p className="text-sm mb-7" style={{ color: "#A0A0A0" }}>
              Full access for <span className="text-white font-medium">3 months</span>. No credit card required.
            </p>

            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost !justify-center w-full mb-8 !text-sm"
            >
              Start Free Trial
            </a>

            <ul className="flex flex-col gap-3">
              {freeFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm" style={{ color: "#A0A0A0" }}>
                  <Check />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Pro */}
          <div
            className="card card-glow card-glow-animate p-8 relative overflow-hidden reveal-scale stagger-2"
          >
            {/* Top glow line */}
            <div
              className="absolute top-0 inset-x-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, #10B981 40%, #10B981 60%, transparent)" }}
            />

            {/* Badge */}
            <div className="absolute top-5 right-5">
              <span
                className="px-2.5 py-1 rounded-full text-xs font-bold text-white"
                style={{ background: "linear-gradient(135deg, #10B981, #065F46)" }}
              >
                Most Popular
              </span>
            </div>

            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#10B981" }}>
              Pro
            </p>
            <div className="flex items-end gap-1 mb-2">
              <span className="text-5xl font-extrabold text-white">Custom</span>
            </div>
            <p className="text-sm mb-7" style={{ color: "#A0A0A0" }}>
              Pricing on request.{" "}
              <span className="text-white font-medium">Built for your team size.</span>
            </p>

            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !justify-center w-full mb-8 !text-sm"
            >
              Book a Demo
            </a>

            <ul className="flex flex-col gap-3">
              {proFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm" style={{ color: "#A0A0A0" }}>
                  <Check />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Fine print */}
        <p className="text-center text-sm mt-8 reveal" style={{ color: "#555" }}>
          No contracts. No hidden fees. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
