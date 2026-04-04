"use client";

const steps = [
  {
    number: "01",
    title: "Connect Your Calls",
    body: "Upload recordings or paste transcripts. Kota handles everything from there — no configuration, no tagging, no manual setup required.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Intelligence Builds Automatically",
    body: "Every call gets transcribed, segmented, scored, and indexed without anyone lifting a finger. The system learns what wins for your specific team.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Your Team Compounds",
    body: "Reps get pre-call intelligence on objections. Managers get post-call analysis. Every account makes the whole team smarter, permanently.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32" style={{ background: "#0D0D0D" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <p className="section-label mb-4">Simple By Design</p>
          <h2 className="font-extrabold text-white leading-tight" style={{ fontSize: "clamp(30px,4vw,50px)" }}>
            Every Call Makes Your Whole Team Smarter
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-6 relative">
          {/*
            Single continuous line spanning from the right edge of circle 1
            to the left edge of circle 3. Each circle is w-20 (80px), centered
            in its 1/3 column, so its center sits at 1/6, 3/6, 5/6 of the row.
            We start 40px right of the first center and end 40px left of the last.
          */}
          <div
            className="hidden lg:block absolute z-0 h-px"
            style={{
              top: "40px",
              left: "calc(16.667% + 40px)",
              right: "calc(16.667% + 40px)",
              background: "linear-gradient(90deg, rgba(16,185,129,0.6) 0%, rgba(16,185,129,0.25) 50%, rgba(16,185,129,0.6) 100%)",
            }}
          />

          {steps.map((step, i) => (
            <div key={i} className={`flex flex-col items-center text-center reveal stagger-${i + 1} relative z-10`}>
              {/* Step circle */}
              <div className="relative mb-7">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(16,185,129,0.08)",
                    border: "1px solid rgba(16,185,129,0.3)",
                    color: "#10B981",
                  }}
                >
                  {step.icon}
                </div>
                {/* Number badge */}
                <span
                  className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: "linear-gradient(135deg, #10B981, #065F46)", fontSize: 10 }}
                >
                  {i + 1}
                </span>
              </div>

              <div
                className="text-xs font-bold mb-3"
                style={{ color: "#10B981", letterSpacing: "0.15em" }}
              >
                {step.number}
              </div>
              <h3 className="text-white font-bold mb-3" style={{ fontSize: 19 }}>{step.title}</h3>
              <p className="text-[#A0A0A0] text-sm leading-relaxed max-w-xs">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
