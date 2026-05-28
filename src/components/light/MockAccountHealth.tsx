export default function MockAccountHealth() {
  const accounts = [
    { name: "Nexus Robotics", arr: "$48k ARR", status: "At risk", renewal: "31d", risk: "high" },
    { name: "BrightEdge", arr: "$32k ARR", status: "Healthy", renewal: "87d", risk: "good" },
    { name: "TerraFin", arr: "$19k ARR", status: "Watch", renewal: "14d", risk: "medium" },
  ];

  const riskColor = { high: "#EF4444", good: "#10B981", medium: "#F59E0B" };
  // Accessible text shades (AA on light/tinted backgrounds)
  const riskText = { high: "#B91C1C", good: "#065F46", medium: "#B45309" };
  const riskBg = { high: "rgba(239,68,68,0.06)", good: "rgba(16,185,129,0.06)", medium: "rgba(245,158,11,0.06)" };

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
        <span style={{ fontSize: "12px", fontWeight: 600, color: "#0D0B09" }}>Account Health Dashboard</span>
        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span className="live-dot" aria-hidden="true" />
          <span style={{ fontSize: "11px", fontWeight: 700, color: "#065F46", letterSpacing: "0.04em" }}>LIVE</span>
        </span>
      </div>

      <div style={{ padding: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
        {accounts.map((a, i) => (
          <div
            key={i}
            style={{
              background: riskBg[a.risk as keyof typeof riskBg],
              border: `1px solid ${riskColor[a.risk as keyof typeof riskColor]}28`,
              borderRadius: "8px",
              padding: "12px 14px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "#0D0B09" }}>{a.name}</div>
              <div style={{ fontSize: "11px", color: "#6B6B66", marginTop: "2px" }}>{a.arr} · Renewal in {a.renewal}</div>
            </div>
            <div
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: riskText[a.risk as keyof typeof riskText],
                background: `${riskColor[a.risk as keyof typeof riskColor]}1f`,
                padding: "3px 10px",
                borderRadius: "100px",
              }}
            >
              {a.status}
            </div>
          </div>
        ))}

        {/* Net retention trend — clairvo-style sparkline */}
        <div
          style={{
            marginTop: "4px",
            padding: "12px 14px",
            border: "1px solid #E8E6E0",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <div style={{ flexShrink: 0 }}>
            <div style={{ fontSize: "10px", color: "#6B6B66", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 700 }}>
              Net retention
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "5px", marginTop: "3px" }}>
              <span style={{ fontSize: "20px", fontWeight: 800, color: "#0D0B09", letterSpacing: "-0.02em" }}>112%</span>
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#065F46" }}>↑ 6pp</span>
            </div>
          </div>
          <svg viewBox="0 0 120 36" preserveAspectRatio="none" style={{ flex: 1, height: "36px", width: "100%" }} aria-hidden="true">
            <defs>
              <linearGradient id="health-spark" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(16,185,129,0.22)" />
                <stop offset="100%" stopColor="rgba(16,185,129,0)" />
              </linearGradient>
            </defs>
            <path d="M0,28 L20,26 L40,29 L60,20 L80,22 L100,12 L120,7 L120,36 L0,36 Z" fill="url(#health-spark)" />
            <path
              d="M0,28 L20,26 L40,29 L60,20 L80,22 L100,12 L120,7"
              fill="none"
              stroke="#10B981"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div
          style={{
            textAlign: "center",
            padding: "4px",
            fontSize: "12px",
            color: "#065F46",
            fontWeight: 700,
          }}
        >
          2 auto check-ins triggered this week
        </div>
      </div>
    </div>
  );
}
