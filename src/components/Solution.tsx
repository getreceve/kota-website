"use client";

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
    title: "Call Intelligence",
    body:
      "Upload or sync any call recording. Kota transcribes, segments, and scores every moment of the call automatically — no manual review required.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Objection Intelligence",
    body:
      "Every objection ever raised gets indexed with outcome data. Reps know exactly what to expect before they pick up the phone — and what responses have worked.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "Deal Memory",
    body:
      "Every won and lost deal feeds a searchable intelligence library. Never lose the same deal twice. Your entire history becomes a competitive asset.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Rep Performance",
    body:
      "Real-time scoring and benchmarking for every rep on your team against industry averages. Know exactly where each person needs help before the next deal is lost.",
  },
];

export default function Solution() {
  return (
    <section id="solution" className="py-24 lg:py-32" style={{ background: "#0D0D0D" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-500 mb-4">
            How Kota Works
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Every Call Makes Your
            <br />
            <span className="gradient-text">Whole Team Smarter</span>
          </h2>
          <p className="mt-5 text-[#A0A0A0] text-lg max-w-xl mx-auto">
            Kota turns your call archive into a living intelligence system that gets better with every deal.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} group relative rounded-xl p-8 hover-glow transition-all duration-300 border border-white/5 hover:border-emerald-900/50`}
              style={{ background: "#141414" }}
            >
              {/* Subtle green corner accent */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(16,185,129,0.08), transparent 70%)",
                }}
              />

              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5"
                style={{ background: "rgba(16,185,129,0.12)", color: "#10B981" }}
              >
                {f.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-[#A0A0A0] text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
