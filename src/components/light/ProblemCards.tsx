import { PROBLEM_BEFORE, PROBLEM_AFTER } from "@/content/landing";

function MockChrome({ isAfter }: { isAfter: boolean }) {
  return (
    <div
      style={{
        background: isAfter ? "#F0FDF4" : "#F9F9F7",
        borderRadius: "8px 8px 0 0",
        padding: "10px 14px",
        borderBottom: isAfter ? "1px solid #BBF7D0" : "1px solid #E8E6E0",
        display: "flex",
        alignItems: "center",
        gap: "6px",
      }}
    >
      {["#FF5F57", "#FEBC2E", "#28C840"].map((c, i) => (
        <div key={i} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c }} />
      ))}
      <div
        style={{
          marginLeft: "8px",
          flex: 1,
          height: "16px",
          background: isAfter ? "rgba(16,185,129,0.1)" : "rgba(0,0,0,0.06)",
          borderRadius: "4px",
        }}
      />
    </div>
  );
}

function ProblemCard({
  data,
  isAfter,
}: {
  data: typeof PROBLEM_BEFORE;
  isAfter: boolean;
}) {
  return (
    <div
      style={{
        flex: 1,
        minWidth: "280px",
        border: isAfter ? "1px solid #BBF7D0" : "1px solid #E8E6E0",
        borderRadius: "12px",
        overflow: "hidden",
        background: "#fff",
        boxShadow: isAfter
          ? "0 4px 24px rgba(16,185,129,0.08)"
          : "0 2px 12px rgba(13,11,9,0.04)",
        position: "relative",
      }}
    >
      {/* Badge */}
      <div
        style={{
          position: "absolute",
          top: "50px",
          right: "16px",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          padding: "4px 10px",
          borderRadius: "100px",
          background: isAfter ? "rgba(16,185,129,0.12)" : "rgba(13,11,9,0.06)",
          color: isAfter ? "#065F46" : "#6B6B66",
        }}
      >
        {isAfter ? "✓ Coached" : "✗ Lost"}
      </div>

      <MockChrome isAfter={isAfter} />

      <div style={{ padding: "20px 24px 28px" }}>
        {/* Header badge */}
        <div
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: isAfter ? "#065F46" : "#6B6B66",
            marginBottom: "10px",
          }}
        >
          {data.badge}
        </div>

        <h3
          style={{
            fontSize: "18px",
            fontWeight: 700,
            color: "#0D0B09",
            marginBottom: "20px",
            letterSpacing: "-0.02em",
          }}
        >
          {data.title}
        </h3>

        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
          {data.bullets.map((bullet, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                gap: "10px",
                fontSize: "14px",
                lineHeight: 1.5,
                color: i === data.bullets.length - 1 ? (isAfter ? "#065F46" : "#0D0B09") : "#6B6B66",
                fontWeight: i === data.bullets.length - 1 ? 600 : 400,
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  marginTop: "2px",
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  background: isAfter ? "rgba(16,185,129,0.18)" : "rgba(13,11,9,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "9px",
                  color: isAfter ? "#065F46" : "#6B6B66",
                  fontWeight: 800,
                }}
              >
                {isAfter ? "✓" : i + 1}
              </span>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ProblemCards() {
  return (
    <section
      id="why-kota"
      style={{
        background: "#FAFAF7",
        padding: "80px 24px 100px",
        borderTop: "1px solid #E8E6E0",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section label */}
        <div
          className="reveal"
          style={{
            textAlign: "center",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#065F46",
            marginBottom: "16px",
          }}
        >
          The Problem
        </div>

        <h2
          className="reveal"
          style={{
            textAlign: "center",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 700,
            color: "#0D0B09",
            letterSpacing: "-0.03em",
            marginBottom: "16px",
          }}
        >
          Most lost deals are never reviewed.
        </h2>
        <p
          className="reveal"
          style={{
            textAlign: "center",
            fontSize: "17px",
            color: "#6B6B66",
            maxWidth: "560px",
            margin: "0 auto 56px",
            lineHeight: 1.6,
          }}
        >
          The recording exists. The coaching never happens. Here&apos;s what that looks like.
        </p>

        <div
          className="reveal"
          style={{
            display: "flex",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <ProblemCard data={PROBLEM_BEFORE} isAfter={false} />
          <ProblemCard data={PROBLEM_AFTER} isAfter={true} />
        </div>
      </div>
    </section>
  );
}
