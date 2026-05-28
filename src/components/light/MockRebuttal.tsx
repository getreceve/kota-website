export default function MockRebuttal() {
  const rebuttals = [
    {
      label: "Top reps",
      text: "\"I hear you on price — let me show you what the math looks like when one extra deal closes per rep.\"",
      winRate: "68%",
      top: true,
      accent: "#10B981",
      text_color: "#065F46",
    },
    {
      label: "Bottom reps",
      text: "\"We can definitely talk about pricing. Let me get you our pricing sheet.\"",
      winRate: "19%",
      top: false,
      accent: "#EF4444",
      text_color: "#B91C1C",
    },
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
        }}
      >
        <span style={{ fontSize: "12px", fontWeight: 600, color: "#0D0B09" }}>
          Objection: &ldquo;Your price is too high.&rdquo;
        </span>
      </div>

      <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
        {rebuttals.map((r, i) => (
          <div
            key={i}
            style={{
              border: `1px solid ${r.top ? "rgba(16,185,129,0.25)" : "rgba(239,68,68,0.18)"}`,
              borderRadius: "8px",
              padding: "12px",
              background: r.top ? "rgba(16,185,129,0.04)" : "rgba(239,68,68,0.03)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: r.text_color,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {r.label}
              </span>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 800,
                  color: r.text_color,
                  background: `${r.accent}1f`,
                  padding: "2px 8px",
                  borderRadius: "100px",
                }}
              >
                {r.winRate} win rate
              </span>
            </div>
            <p style={{ fontSize: "12px", color: "#0D0B09", lineHeight: 1.5, margin: 0, fontStyle: "italic" }}>
              {r.text}
            </p>
          </div>
        ))}
        <div
          style={{
            textAlign: "center",
            fontSize: "11px",
            color: "#065F46",
            fontWeight: 700,
            padding: "4px 0",
          }}
        >
          +49pp lift when switching to top-rep language
        </div>
      </div>
    </div>
  );
}
