"use client";

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Call Intelligence",
    body: "AI transcribes, segments, and scores every call automatically. No more listening to recordings.",
    badge: null,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Objection Intelligence",
    body: "Every objection your team has ever faced, indexed with what worked and what didn't.",
    badge: null,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "Deal Memory",
    body: "Search your entire account history before any call. Know what killed similar accounts before you dial.",
    badge: null,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Rep Performance",
    body: "Real scorecards built from actual calls, not manager gut feel.",
    badge: null,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Gap Brief",
    body: "Know exactly what intelligence your team is missing before it costs you another account.",
    badge: null,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
      </svg>
    ),
    title: "Cycle Intelligence",
    body: "Every touchpoint connected. See the full picture from first contact to enrolled.",
    badge: "Coming Soon",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32" style={{ background: "#0A0A0A" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p className="section-label mb-4">Everything Inside Kota</p>
          <h2 className="font-extrabold text-white leading-tight" style={{ fontSize: "clamp(30px,4vw,50px)" }}>
            Built for Every Layer of
            <br />
            <span className="gradient-text">Your Sales Operation</span>
          </h2>
        </div>

        {/* 2×3 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <div
              key={i}
              className={`card p-7 relative reveal stagger-${i + 1}`}
            >
              {/* Coming soon badge */}
              {f.badge && (
                <div
                  className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: "rgba(16,185,129,0.1)",
                    border: "1px solid rgba(16,185,129,0.3)",
                    color: "#10B981",
                  }}
                >
                  {f.badge}
                </div>
              )}

              {/* Hover glow corner */}
              <div
                className="absolute top-0 right-0 w-28 h-28 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(circle at top right, rgba(16,185,129,0.07), transparent 70%)",
                }}
              />

              <div className="icon-box mb-5">{f.icon}</div>
              <h3 className="text-white font-bold mb-2.5" style={{ fontSize: 16 }}>{f.title}</h3>
              <p className="text-[#A0A0A0] text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
