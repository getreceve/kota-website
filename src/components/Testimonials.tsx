"use client";

const testimonials = [
  {
    quote: "We were losing accounts to debt-to-income objections every week. Kota showed us exactly what our top closer was saying differently. Fixed it in two weeks.",
    name: "Marcus T.",
    title: "Director of Sales",
    note: "28-rep team",
    initials: "MT",
    dir: "reveal-left" as const,
  },
  {
    quote: "I used to spend 4 hours a week listening to calls just to coach my team. Now Kota flags exactly where each rep needs help automatically.",
    name: "Priya S.",
    title: "Sales Manager",
    note: "",
    initials: "PS",
    dir: "reveal" as const,
  },
  {
    quote: "New reps used to take 8 weeks to ramp. Now they have access to every objection we've ever overcome from day one. Three weeks and they're producing.",
    name: "Derek W.",
    title: "VP of Sales",
    note: "",
    initials: "DW",
    dir: "reveal-right" as const,
  },
];

export default function Testimonials() {
  return (
    <section id="proof" className="relative py-16 sm:py-24 lg:py-32" style={{ background: "#0D0D0D" }}>
      <div className="dot-grid absolute inset-0" />
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 reveal">
          <p className="section-label mb-3 sm:mb-4">What Sales Leaders Are Saying</p>
          <h2
            className="font-extrabold text-white leading-tight"
            style={{ fontSize: "clamp(26px, 4vw, 50px)" }}
          >
            Built for the Realities of
            <br />
            <span className="gradient-text">Debt Settlement Sales</span>
          </h2>
        </div>

        {/* Quote cards — 1 col mobile, 3 col md+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`card p-5 sm:p-7 flex flex-col ${t.dir} stagger-${i + 1}`}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-3 sm:mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#10B981">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote mark */}
              <div className="text-4xl font-serif mb-2 sm:mb-3 leading-none" style={{ color: "rgba(16,185,129,0.3)" }}>
                &ldquo;
              </div>

              <p className="text-white text-sm leading-relaxed flex-1 mb-5 sm:mb-6 font-medium">
                {t.quote}
              </p>

              {/* Author */}
              <div
                className="flex items-center gap-3 pt-4 sm:pt-5"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #10B981, #065F46)" }}
                >
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
  );
}
