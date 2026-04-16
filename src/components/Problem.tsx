"use client";

const problems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Reps Repeat Mistakes",
    body: "Your team loses the same accounts to the same hardship objections every month because nobody has indexed what actually works. Every rep reinvents the wheel on every call.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
      </svg>
    ),
    title: "Managers Are Flying Blind",
    body: "You have no real visibility into what's happening on calls without listening to hours of recordings yourself. By the time you catch the pattern, you've already lost the accounts.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Intelligence Dies With The Call",
    body: "Every won and lost account contains a lesson. Right now that lesson disappears the moment the call ends. Your best coaching is locked inside recordings nobody has time to review.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="relative py-16 sm:py-24 lg:py-32" style={{ background: "#0A0A0A" }}>
      <div className="dot-grid absolute inset-0" />
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-10 sm:mb-14 reveal">
          <p className="section-label mb-3 sm:mb-4">The Problem</p>
          <h2
            className="font-extrabold text-white leading-tight"
            style={{ fontSize: "clamp(26px, 4vw, 48px)", maxWidth: 560 }}
          >
            Your Best Coaching Is Locked Inside Calls Nobody Reviews
          </h2>
        </div>

        {/* Cards — 1 col mobile, 3 col md+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {problems.map((p, i) => (
            <div
              key={i}
              className={`card card-alt card-green-left reveal stagger-${i + 1} p-5 sm:p-7`}
            >
              <div className="icon-box mb-4 sm:mb-5">{p.icon}</div>
              <h3 className="text-white font-bold mb-2 sm:mb-3 text-base sm:text-[17px]">{p.title}</h3>
              <p className="text-[#A0A0A0] text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
