export default function MockReactivation() {
  const leads = [
    { name: "Sarah K.", company: "MedGroup", reason: "Budget unlocked Q2", score: 91, days: "94d ago" },
    { name: "Tom R.", company: "Apex Retail", reason: "Missed 3 follow-ups", score: 84, days: "67d ago" },
    { name: "Lisa C.", company: "BrightPath", reason: "Contract expired", score: 78, days: "112d ago" },
    { name: "Dave M.", company: "CloudWorks", reason: "Reorg completed", score: 74, days: "58d ago" },
    { name: "Amy L.", company: "PrimeServ", reason: "Champion is back", score: 69, days: "143d ago" },
    { name: "James P.", company: "CoreTech", reason: "Competitor lost deal", score: 63, days: "81d ago" },
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
        <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
          <span className="live-dot" aria-hidden="true" />
          <span style={{ fontSize: "12px", fontWeight: 600, color: "#0D0B09" }}>Re-engagement Queue</span>
        </span>
        <span style={{ fontSize: "11px", color: "#065F46", fontWeight: 700 }}>6 leads ready</span>
      </div>

      <div style={{ padding: "8px" }}>
        {leads.map((l, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "8px 8px",
              borderRadius: "6px",
              borderBottom: i < leads.length - 1 ? "1px solid #F4F4F2" : "none",
            }}
          >
            <div
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                background: `hsl(${(i * 47) % 360}, 55%, 88%)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "11px",
                fontWeight: 700,
                color: "#0D0B09",
                flexShrink: 0,
              }}
            >
              {l.name[0]}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: "12px", fontWeight: 600, color: "#0D0B09" }}>
                {l.name} · {l.company}
              </div>
              <div style={{ fontSize: "11px", color: "#6B6B66", marginTop: "1px" }}>{l.reason}</div>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#065F46" }}>{l.score}</div>
              <div style={{ fontSize: "10px", color: "#6B6B66" }}>{l.days}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
