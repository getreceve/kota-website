export default function MockCallScore() {
  const moments = [
    { label: "Missed pricing objection rebuttal", time: "23:14", severity: "high" },
    { label: "Strong discovery — uncovered budget", time: "08:42", severity: "good" },
    { label: "Rushed close attempt, no trial close", time: "41:08", severity: "medium" },
  ];

  const themes = [
    { label: "Pricing objection", pct: 38 },
    { label: "Discovery depth", pct: 27 },
    { label: "Competitor mention", pct: 19 },
  ];

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #E8E6E0",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 24px rgba(13,11,9,0.06)",
        width: "100%",
        maxWidth: "440px",
      }}
    >
      {/* Header bar */}
      <div
        style={{
          background: "#F6F6F4",
          borderBottom: "1px solid #E8E6E0",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ fontSize: "12px", fontWeight: 600, color: "#0D0B09" }}>Call Summary</span>
        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span className="live-dot" aria-hidden="true" />
          <span style={{ fontSize: "11px", fontWeight: 700, color: "#065F46", letterSpacing: "0.04em" }}>LIVE</span>
        </span>
      </div>

      <div style={{ padding: "16px" }}>
        {/* Score ring area */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              border: "3px solid #10B981",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span style={{ fontSize: "18px", fontWeight: 800, color: "#0D0B09" }}>87</span>
          </div>
          <div>
            <div style={{ fontSize: "13px", fontWeight: 600, color: "#0D0B09" }}>Jordan M. · Cobalt Systems</div>
            <div style={{ fontSize: "11px", color: "#6B6B66", marginTop: "2px" }}>Discovery call · Stage 2</div>
          </div>
          <div
            style={{
              marginLeft: "auto",
              fontSize: "11px",
              fontWeight: 700,
              color: "#065F46",
              background: "rgba(16,185,129,0.12)",
              padding: "3px 8px",
              borderRadius: "100px",
            }}
          >
            Scored 4m ago
          </div>
        </div>

        {/* Flagged moments */}
        <div style={{ fontSize: "11px", fontWeight: 700, color: "#6B6B66", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
          Flagged Moments
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "18px" }}>
          {moments.map((m, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "8px 10px",
                background: m.severity === "good" ? "rgba(16,185,129,0.05)" : m.severity === "high" ? "rgba(239,68,68,0.05)" : "rgba(245,158,11,0.05)",
                borderRadius: "6px",
                border: `1px solid ${m.severity === "good" ? "rgba(16,185,129,0.15)" : m.severity === "high" ? "rgba(239,68,68,0.12)" : "rgba(245,158,11,0.12)"}`,
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: m.severity === "good" ? "#10B981" : m.severity === "high" ? "#EF4444" : "#F59E0B",
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: "12px", color: "#0D0B09", flex: 1 }}>{m.label}</span>
              <span style={{ fontSize: "11px", color: "#6B6B66", flexShrink: 0 }}>{m.time}</span>
            </div>
          ))}
        </div>

        {/* Objection theme breakdown — clairvo-style data viz */}
        <div style={{ fontSize: "11px", fontWeight: 700, color: "#6B6B66", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "10px" }}>
          Objection Themes
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
          {themes.map((t, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "11.5px", color: "#0D0B09", width: "120px", flexShrink: 0 }}>{t.label}</span>
              <div style={{ flex: 1, height: "7px", background: "#F0EFEB", borderRadius: "4px", overflow: "hidden" }}>
                <div
                  className="mock-bar-fill"
                  style={{
                    width: `${t.pct}%`,
                    height: "100%",
                    background: "linear-gradient(90deg, #10B981, #34d399)",
                    borderRadius: "4px",
                    transitionDelay: `${0.15 * i}s`,
                  }}
                />
              </div>
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#065F46", width: "30px", textAlign: "right", flexShrink: 0 }}>{t.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
