"use client";

const segments = [
  { label: "Opener", width: "18%", color: "#10B981", score: 85 },
  { label: "Discovery", width: "22%", color: "#059669", score: 72 },
  { label: "Objection", width: "16%", color: "#EF4444", score: 41 },
  { label: "Pitch", width: "24%", color: "#10B981", score: 91 },
  { label: "Close", width: "20%", color: "#F59E0B", score: 54 },
];

const objectionTags = [
  { label: "Debt-to-Income", count: 2, hot: true },
  { label: "Already Tried", count: 1, hot: false },
  { label: "Too Much Per Month", count: 2, hot: true },
  { label: "Call Back Later", count: 1, hot: false },
];

function ScoreBar({ score, color }: { score: number; color: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex-1 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
        <div
          className="h-1.5 rounded-full"
          style={{ width: `${score}%`, background: color }}
        />
      </div>
      <span style={{ color, fontSize: 11, fontWeight: 600, minWidth: 24, textAlign: "right" }}>
        {score}
      </span>
    </div>
  );
}

export default function BrowserMockup() {
  return (
    <div className="animate-float w-full max-w-[580px] mx-auto">
      {/* Browser chrome */}
      <div
        className="rounded-2xl overflow-hidden shadow-2xl"
        style={{
          border: "1px solid rgba(255,255,255,0.10)",
          boxShadow: "0 40px 120px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.05), 0 0 80px rgba(16,185,129,0.06)",
        }}
      >
        {/* Title bar */}
        <div
          className="flex items-center gap-3 px-4 py-3"
          style={{ background: "#1C1C1E", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
        >
          {/* Traffic lights */}
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#FEBC2E" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#28C840" }} />
          </div>
          {/* URL bar */}
          <div
            className="flex-1 flex items-center gap-2 px-3 py-1.5 rounded-md mx-6"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "#555" }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span style={{ fontSize: 11, color: "#666" }}>app.getkota.ai/calls/review</span>
          </div>
        </div>

        {/* App UI */}
        <div style={{ background: "#0F0F0F", minHeight: 360 }} className="flex">
          {/* Sidebar */}
          <div
            className="hidden sm:flex flex-col gap-1 py-4 px-2"
            style={{ width: 120, borderRight: "1px solid rgba(255,255,255,0.05)", background: "#0A0A0A", flexShrink: 0 }}
          >
            {[
              { label: "Dashboard", icon: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z", active: false },
              { label: "Calls", icon: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3", active: true },
              { label: "Reps", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z", active: false },
              { label: "Objections", icon: "M13 10V3L4 14h7v7l9-11h-7z", active: false },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-1 px-2 py-2.5 rounded-lg cursor-pointer"
                style={{
                  background: item.active ? "rgba(16,185,129,0.12)" : "transparent",
                  color: item.active ? "#10B981" : "#555",
                }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
                <span style={{ fontSize: 9, fontWeight: 500 }}>{item.label}</span>
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 p-4 overflow-hidden">
            {/* Header row */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <div style={{ fontSize: 11, color: "#555", marginBottom: 2 }}>Call Review</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#E5E5E5" }}>Sarah K. → John M.</div>
                <div style={{ fontSize: 10, color: "#555", marginTop: 2 }}>14 min 32 sec · Today, 2:14 PM</div>
              </div>
              {/* Score badge */}
              <div
                className="flex flex-col items-center px-3 py-2 rounded-xl"
                style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)" }}
              >
                <span style={{ fontSize: 20, fontWeight: 800, color: "#10B981", lineHeight: 1 }}>78</span>
                <span style={{ fontSize: 9, color: "#10B981", opacity: 0.7, marginTop: 2 }}>/ 100</span>
              </div>
            </div>

            {/* Timeline */}
            <div className="mb-4">
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", color: "#555", textTransform: "uppercase", marginBottom: 6 }}>
                Call Timeline
              </div>
              <div className="flex gap-0.5 h-7 rounded-lg overflow-hidden mb-1.5">
                {segments.map((s) => (
                  <div
                    key={s.label}
                    className="h-full flex items-center justify-center cursor-pointer hover:brightness-110 transition-all"
                    style={{ width: s.width, background: s.color, opacity: 0.85 }}
                  />
                ))}
              </div>
              <div className="flex gap-0.5">
                {segments.map((s) => (
                  <div key={s.label} style={{ width: s.width }}>
                    <span style={{ fontSize: 8, color: "#555" }}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Objection tags */}
            <div className="mb-4">
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", color: "#555", textTransform: "uppercase", marginBottom: 6 }}>
                Objections Detected
              </div>
              <div className="flex flex-wrap gap-1.5">
                {objectionTags.map((t) => (
                  <div
                    key={t.label}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                    style={{
                      background: t.hot ? "rgba(239,68,68,0.12)" : "rgba(255,255,255,0.05)",
                      border: `1px solid ${t.hot ? "rgba(239,68,68,0.3)" : "rgba(255,255,255,0.08)"}`,
                    }}
                  >
                    <span style={{ fontSize: 10, color: t.hot ? "#F87171" : "#666" }}>{t.label}</span>
                    <span
                      className="px-1 rounded-full text-center"
                      style={{ fontSize: 9, fontWeight: 700, background: t.hot ? "rgba(239,68,68,0.2)" : "rgba(255,255,255,0.08)", color: t.hot ? "#F87171" : "#555" }}
                    >
                      ×{t.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Segment scores */}
            <div>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", color: "#555", textTransform: "uppercase", marginBottom: 8 }}>
                Segment Scores
              </div>
              <div className="flex flex-col gap-2.5">
                {segments.map((s) => (
                  <div key={s.label} className="flex items-center gap-3">
                    <span style={{ fontSize: 10, color: "#666", minWidth: 60 }}>{s.label}</span>
                    <div className="flex-1">
                      <ScoreBar score={s.score} color={s.color} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glow underneath */}
      <div
        className="mx-auto mt-[-20px] h-20 rounded-full blur-3xl opacity-20"
        style={{ background: "linear-gradient(90deg, #10B981, #065F46)", width: "70%" }}
      />
    </div>
  );
}
