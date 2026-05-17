// ROI Preview Section — homepage, between Problem and HowItWorks.
// Shows static metric cards pre-populated with calculator defaults.
// No sliders or interactivity — just the results + a CTA to the full page.

// Defaults mirror the ROICalculator component defaults
const REPS = 10;
const LEADS = 80;
const COST_PER_LEAD = 100;
const CLOSE_RATE = 22; // %
const REVENUE_PER_ENROLLMENT = 1750;

function compute() {
  const enrollmentsNow = Math.round(REPS * LEADS * (CLOSE_RATE / 100));
  const enrollmentsKota = Math.round(enrollmentsNow * 1.2);
  const revenueNow = enrollmentsNow * REVENUE_PER_ENROLLMENT;
  const revenueKota = enrollmentsKota * REVENUE_PER_ENROLLMENT;
  const additionalRevenue = revenueKota - revenueNow;
  const additionalEnrollments = enrollmentsKota - enrollmentsNow;
  const costPerClient = COST_PER_LEAD / (CLOSE_RATE / 100);
  const leadSpendRecovered = Math.round(additionalEnrollments * costPerClient);
  const annualUpside = (additionalRevenue + leadSpendRecovered) * 12;
  const costPerClientKota = Math.round(costPerClient / 1.2);
  return {
    enrollmentsNow,
    enrollmentsKota,
    revenueNow,
    revenueKota,
    additionalRevenue,
    leadSpendRecovered,
    annualUpside,
    costPerClient: Math.round(costPerClient),
    costPerClientKota,
  };
}

function fmt(n: number) {
  return Math.round(n).toLocaleString("en-US");
}
function fmtDollar(n: number) {
  return "$" + fmt(n);
}

function PreviewCard({
  label,
  value,
  sub,
  highlight = false,
  accent = false,
}: {
  label: string;
  value: string;
  sub?: string;
  highlight?: boolean;
  accent?: boolean;
}) {
  return (
    <div
      className="rounded-xl p-4 sm:p-5 flex flex-col justify-between"
      style={{
        background: highlight ? "rgba(16,185,129,0.07)" : "rgba(255,255,255,0.03)",
        border: highlight
          ? "1px solid rgba(16,185,129,0.2)"
          : "1px solid rgba(255,255,255,0.06)",
        minHeight: 86,
      }}
    >
      <p
        className="text-[11px] font-medium leading-snug mb-2"
        style={{ color: "#505050" }}
      >
        {label}
      </p>
      <div>
        <p
          className="font-extrabold tabular-nums leading-tight"
          style={{
            fontSize: "clamp(15px, 2.5vw, 19px)",
            color: accent ? "#34D399" : highlight ? "#10B981" : "#ffffff",
          }}
        >
          {value}
        </p>
        {sub && (
          <p className="text-[10px] mt-1 leading-snug" style={{ color: "#424240" }}>
            {sub}
          </p>
        )}
      </div>
    </div>
  );
}

export default function ROIPreviewSection() {
  const m = compute();

  return (
    <section
      id="roi-preview"
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden"
      style={{ background: "#0D0B09" }}
    >
      <div className="dot-grid absolute inset-0" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="mb-10 sm:mb-14 reveal">
          <p className="section-label mb-3 sm:mb-4">The Cost of Doing Nothing</p>
          <h2
            className="font-extrabold text-white leading-tight mb-4 sm:mb-5"
            style={{ fontSize: "clamp(26px, 4vw, 48px)", maxWidth: 620 }}
          >
            See Exactly What Your Team Is Leaving On The Table.
          </h2>
          <p
            className="text-sm sm:text-base leading-relaxed"
            style={{ color: "#707070", maxWidth: 540 }}
          >
            Most sales managers know they&apos;re losing enrollable accounts.
            They just don&apos;t know how many or what it&apos;s costing them.
            Now you can.
          </p>
        </div>

        {/* Defaults label */}
        <div className="flex items-center gap-2 mb-4 reveal stagger-1">
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#606060",
            }}
          >
            10 reps · 80 leads/mo · 22% close rate · $100 CPL · $1,750/enrollment
          </span>
        </div>

        {/* Metric card grid */}
        <div
          className="rounded-2xl p-5 sm:p-7 mb-8 reveal stagger-2"
          style={{
            background: "#111110",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <PreviewCard
              label="Enrollments now / month"
              value={fmt(m.enrollmentsNow)}
            />
            <PreviewCard
              label="Enrollments with Kota / month"
              value={fmt(m.enrollmentsKota)}
              sub="conservative +20% lift"
              highlight
            />
            <PreviewCard
              label="Revenue now / month"
              value={fmtDollar(m.revenueNow)}
            />
            <PreviewCard
              label="Revenue with Kota / month"
              value={fmtDollar(m.revenueKota)}
              highlight
            />
            <PreviewCard
              label="Additional revenue / month"
              value={fmtDollar(m.additionalRevenue)}
              accent
            />
            <PreviewCard
              label="Lead spend recovered / month"
              value={fmtDollar(m.leadSpendRecovered)}
              accent
            />
            <PreviewCard
              label="Annual upside"
              value={fmtDollar(m.annualUpside)}
              sub="revenue + recovered lead spend"
              highlight
              accent
            />
            <PreviewCard
              label="Cost per enrolled client"
              value={fmtDollar(m.costPerClient)}
              sub={`drops to ${fmtDollar(m.costPerClientKota)} with Kota`}
            />
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center reveal stagger-3">
          <a
            href="/roi-calculator"
            className="btn-primary"
          >
            Calculate With Your Numbers →
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
