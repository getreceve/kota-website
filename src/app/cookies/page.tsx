import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy — Kota",
  description: "Cookie policy for Kota Holdings, LLC (getkota.ai).",
};

const sections = [
  {
    title: "What are cookies?",
    body: `Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.

Cookies set by the website owner (in this case, Kota Holdings, LLC) are called "first-party cookies." Cookies set by parties other than the website owner are called "third-party cookies." Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.`,
  },
  {
    title: "Why do we use cookies?",
    body: `We use first- and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Website for advertising, analytics, and other purposes.`,
  },
  {
    title: "How can I control cookies?",
    body: `You have the right to decide whether to accept or reject cookies. Essential cookies cannot be rejected as they are strictly necessary to provide you with services. If you choose to reject cookies, you may still use our Website though your access to some functionality and areas of our Website may be restricted. You may also set or amend your web browser controls to accept or refuse cookies.`,
  },
  {
    title: "How can I control cookies on my browser?",
    body: `You should visit your browser's help menu for more information. Resources for the most popular browsers: Chrome, Internet Explorer, Firefox, Safari, Edge, and Opera all provide cookie management instructions in their respective help centers.

In addition, most advertising networks offer you a way to opt out of targeted advertising through the Digital Advertising Alliance, the Digital Advertising Alliance of Canada, and the European Interactive Digital Advertising Alliance.`,
  },
  {
    title: "What about other tracking technologies, like web beacons?",
    body: `Cookies are not the only way to recognize or track visitors to a website. We may use other similar technologies from time to time, like web beacons (sometimes called "tracking pixels" or "clear gifs"). These are tiny graphics files that contain a unique identifier that enables us to recognize when someone has visited our Website or opened an email including them. In many instances, these technologies are reliant on cookies to function properly, and so declining cookies will impair their functioning.`,
  },
  {
    title: "Do you serve targeted advertising?",
    body: `Third parties may serve cookies on your computer or mobile device to serve advertising through our Website. These companies may use information about your visits to this and other websites in order to provide relevant advertisements about goods and services that you may be interested in. The information collected through this process does not enable us or them to identify your name, contact details, or other details that directly identify you unless you choose to provide these.`,
  },
  {
    title: "How often will you update this Cookie Policy?",
    body: `We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed. The date at the top of this Cookie Policy indicates when it was last updated.`,
  },
  {
    title: "Where can I get further information?",
    body: `If you have any questions about our use of cookies or other technologies, please contact us at:\n\nKota Holdings, LLC\nMaitland, FL 32751\ninfo@getkota.ai`,
  },
];

export default function CookiesPage() {
  return (
    <div style={{ background: "#0A0A0A", minHeight: "100vh", color: "#fff" }}>

      {/* Sticky top bar */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(10,10,10,0.92)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          padding: "12px 20px",
        }}
      >
        <a href="/" className="back-link">
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </a>
      </div>

      {/* Content */}
      <div
        style={{
          maxWidth: 760,
          margin: "0 auto",
          padding: "56px 20px 96px",
        }}
      >
        {/* Page title */}
        <h1
          style={{
            fontSize: "clamp(28px, 5vw, 42px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            marginBottom: 8,
            color: "#fff",
          }}
        >
          Cookie Policy
        </h1>
        <p style={{ color: "#A0A0A0", fontSize: 14, marginBottom: 32 }}>
          Last updated April 06, 2026
        </p>

        {/* Intro */}
        <p style={{ color: "#C0C0C0", lineHeight: 1.75, fontSize: 15, marginBottom: 16 }}>
          This Cookie Policy explains how <strong style={{ color: "#fff" }}>Kota Holdings, LLC</strong>{" "}
          (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; and &ldquo;our&rdquo;) uses cookies and similar technologies to recognize you when you visit our website at{" "}
          <a href="https://getkota.ai" style={{ color: "#10B981", textDecoration: "none" }}>getkota.ai</a>{" "}
          (&ldquo;Website&rdquo;). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
        </p>
        <p style={{ color: "#C0C0C0", lineHeight: 1.75, fontSize: 15, marginBottom: 48 }}>
          In some cases we may use cookies to collect personal information, or that becomes personal information if we combine it with other information.
        </p>

        {/* Divider */}
        <div style={{ borderTop: "1px solid #222", marginBottom: 48 }} />

        {/* Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: 44 }}>
          {sections.map((sec) => (
            <div key={sec.title}>
              <h2
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#10B981",
                  marginBottom: 12,
                }}
              >
                {sec.title}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {sec.body.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    style={{
                      color: "#C0C0C0",
                      lineHeight: 1.75,
                      fontSize: 15,
                      margin: 0,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div style={{ borderTop: "1px solid #222", marginTop: 64, paddingTop: 32 }}>
          <p style={{ color: "#555", fontSize: 13, textAlign: "center" }}>
            &copy; 2026 Kota Holdings, LLC · Maitland, FL 32751 ·{" "}
            <a href="mailto:info@getkota.ai" style={{ color: "#10B981", textDecoration: "none" }}>
              info@getkota.ai
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
