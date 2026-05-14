const calls = [
  { rep: "Maria S.",  score: 92, status: "Enrolled",  time: "14:32", tags: ["Closed", "High Intent"] },
  { rep: "Jordan T.", score: 71, status: "Objection",  time: "09:18", tags: ["Price Objection"] },
  { rep: "Alex M.",   score: 85, status: "Follow-up",  time: "11:45", tags: ["Warm", "Callback"] },
  { rep: "Chris D.",  score: 56, status: "Lost",       time: "16:22", tags: ["Not Qualified"] },
  { rep: "Sam P.",    score: 88, status: "Enrolled",   time: "13:07", tags: ["Closed", "Upsell"] },
];

function ScoreBadge({ score }: { score: number }) {
  const c = score >= 80 ? "#10B981" : score >= 65 ? "#F59E0B" : "#EF4444";
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      width: 38, height: 22, borderRadius: 6,
      background: `${c}18`, border: `1px solid ${c}40`,
      fontSize: 11, fontWeight: 700, color: c,
    }}>
      {score}
    </span>
  );
}

function StatusPill({ status }: { status: string }) {
  const map: Record<string, { bg: string; color: string }> = {
    "Enrolled":  { bg: "rgba(16,185,129,0.12)", color: "#10B981" },
    "Objection": { bg: "rgba(245,158,11,0.12)", color: "#F59E0B" },
    "Follow-up": { bg: "rgba(99,102,241,0.12)", color: "#818CF8" },
    "Lost":      { bg: "rgba(239,68,68,0.12)",  color: "#F87171" },
  };
  const s = map[status] ?? { bg: "rgba(255,255,255,0.08)", color: "#fff" };
  return (
    <span style={{
      display: "inline-block", fontSize: 11, fontWeight: 600,
      padding: "2px 8px", borderRadius: 20,
      background: s.bg, color: s.color,
    }}>
      {status}
    </span>
  );
}

export default function ProductScreenshot() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="dot-grid absolute inset-0" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 relative">

        {/* Section header */}
        <div className="text-center mb-10 sm:mb-14 reveal">
          <p className="section-label mb-3">See It In Action</p>
          <h2
            className="font-extrabold text-white leading-tight"
            style={{ fontSize: "clamp(26px, 4vw, 46px)" }}
          >
            Every Call. Scored. Indexed.{" "}
            <span className="gradient-text">Actionable.</span>
          </h2>
        </div>

        {/* Mockup + floating labels wrapper */}
        <div className="relative">

          {/* Floating chip — Call Score (left) */}
          <div
            className="reveal-left stagger-2 absolute z-10 hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl"
            style={{
              left: "-1rem",
              top: "5rem",
              background: "rgba(16,185,129,0.10)",
              border: "1px solid rgba(16,185,129,0.28)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#10B981", display: "block" }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: "#10B981", whiteSpace: "nowrap" }}>Call Score</span>
          </div>

          {/* Floating chip — Objection Detected (right) */}
          <div
            className="reveal-right stagger-3 absolute z-10 hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl"
            style={{
              right: "-1rem",
              top: "8rem",
              background: "rgba(245,158,11,0.10)",
              border: "1px solid rgba(245,158,11,0.28)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#F59E0B", display: "block" }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: "#F59E0B", whiteSpace: "nowrap" }}>Objection Detected</span>
          </div>

          {/* Floating chip — Rep Performance (right-bottom) */}
          <div
            className="reveal-right stagger-4 absolute z-10 hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl"
            style={{
              right: "-1rem",
              bottom: "4rem",
              background: "rgba(99,102,241,0.10)",
              border: "1px solid rgba(99,102,241,0.28)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#818CF8", display: "block" }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: "#818CF8", whiteSpace: "nowrap" }}>Rep Performance</span>
          </div>

          {/* Browser chrome */}
          <div
            className="reveal stagger-1"
            style={{
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.09)",
              overflow: "hidden",
              boxShadow: "0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)",
            }}
          >
            {/* Browser top bar */}
            <div
              style={{
                background: "#1A1A18",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                padding: "10px 16px",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div style={{ display: "flex", gap: 6 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#EF4444", opacity: 0.8 }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#F59E0B", opacity: 0.8 }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#10B981", opacity: 0.8 }} />
              </div>
              <div
                style={{
                  flex: 1, maxWidth: 320, marginLeft: "auto", marginRight: "auto",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 6, padding: "3px 10px",
                  display: "flex", alignItems: "center", gap: 6,
                }}
              >
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#10B981" }} />
                <span style={{ fontSize: 11, color: "#555" }}>app.getkota.ai / dashboard</span>
              </div>
              <div style={{ width: 52 }} />
            </div>

            {/* Dashboard body */}
            <div style={{ background: "#0F0F0E", display: "flex" }}>

              {/* Sidebar */}
              <div
                className="hidden lg:flex"
                style={{
                  width: 168, borderRight: "1px solid rgba(255,255,255,0.05)",
                  padding: "18px 0", flexShrink: 0, flexDirection: "column",
                }}
              >
                {["Dashboard", "Calls", "Reps", "Scripts", "Leads", "Reports"].map((item, i) => (
                  <div
                    key={item}
                    style={{
                      padding: "8px 18px", fontSize: 13,
                      fontWeight: i === 0 ? 600 : 400,
                      color: i === 0 ? "#10B981" : "#484848",
                      background: i === 0 ? "rgba(16,185,129,0.07)" : "transparent",
                      borderLeft: i === 0 ? "2px solid #10B981" : "2px solid transparent",
                      cursor: "default",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* Main panel */}
              <div style={{ flex: 1, padding: "18px 20px", minWidth: 0 }}>

                {/* Stat cards */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 10,
                    marginBottom: 16,
                  }}
                >
                  {[
                    { label: "Enrollment Rate", value: "38.2%", note: "+12% vs last week" },
                    { label: "Calls Analyzed",  value: "1,847",  note: "This month" },
                    { label: "Avg Call Score",   value: "74",    note: "+8 pts since last month" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      style={{
                        background: "#161615",
                        border: "1px solid rgba(255,255,255,0.06)",
                        borderRadius: 10, padding: "12px 14px",
                      }}
                    >
                      <p style={{ fontSize: 10, color: "#484848", marginBottom: 4 }}>{stat.label}</p>
                      <p style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 2, lineHeight: 1 }}>{stat.value}</p>
                      <p style={{ fontSize: 10, color: "#10B981" }}>{stat.note}</p>
                    </div>
                  ))}
                </div>

                {/* Calls table */}
                <div
                  style={{
                    background: "#161615",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 10, overflow: "hidden",
                  }}
                >
                  {/* Header row */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 55px 96px 68px 1fr",
                      padding: "9px 14px",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                      fontSize: 10, fontWeight: 600,
                      color: "#383838",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    <span>Rep</span>
                    <span>Score</span>
                    <span>Status</span>
                    <span>Time</span>
                    <span>Tags</span>
                  </div>

                  {/* Data rows */}
                  {calls.map((c, i) => (
                    <div
                      key={i}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 55px 96px 68px 1fr",
                        padding: "9px 14px",
                        borderBottom: i < calls.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ fontSize: 13, fontWeight: 500, color: "#C8C8C0" }}>{c.rep}</span>
                      <ScoreBadge score={c.score} />
                      <StatusPill status={c.status} />
                      <span style={{ fontSize: 11, color: "#484848" }}>{c.time}</span>
                      <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                        {c.tags.map((tag) => (
                          <span
                            key={tag}
                            style={{
                              fontSize: 10, padding: "2px 6px", borderRadius: 4,
                              background: "rgba(255,255,255,0.04)",
                              border: "1px solid rgba(255,255,255,0.07)",
                              color: "#505050",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
