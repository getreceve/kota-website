import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Kota",
  description: "Privacy policy for Kota Holdings, LLC (getkota.ai).",
};

const sections = [
  {
    num: "1.",
    title: "WHAT INFORMATION DO WE COLLECT?",
    body: `Personal information you disclose to us. We collect personal information that you voluntarily provide when you register on the services, express interest in our products, or contact us. This includes names, email addresses, phone numbers, job titles, contact preferences, mailing addresses, call recordings, sales data, and usage data.

We do not process sensitive information.

All personal information you provide must be true, complete, and accurate.

Our use of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements.`,
  },
  {
    num: "2.",
    title: "HOW DO WE PROCESS YOUR INFORMATION?",
    body: `We process your personal information to facilitate account creation and authentication, deliver services to you, respond to inquiries and support requests, send administrative information, fulfill and manage your orders, enable user communications, request feedback, send marketing communications where permitted, protect our services, evaluate and improve our services, identify usage trends, and comply with legal obligations.`,
  },
  {
    num: "3.",
    title: "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?",
    body: `We may share your information in connection with business transfers such as mergers, sales, or acquisitions.`,
  },
  {
    num: "4.",
    title: "DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?",
    body: `We may use cookies and similar tracking technologies to gather information when you interact with our services. We also permit third parties to use online tracking technologies for analytics purposes. You can opt out of certain tracking technologies as described in our Cookie Notice.

We may share your information with Google Analytics to track and analyze use of the services.`,
  },
  {
    num: "5.",
    title: "DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?",
    body: `Yes. We offer products powered by artificial intelligence through third-party service providers including Anthropic, OpenAI, Supabase, and Vercel. Your input, output, and personal information will be shared with and processed by these providers to enable your use of our AI products. You must not use the AI products in any way that violates the terms or policies of any AI service provider.

Our AI products are designed for AI deployment, AI applications, AI automation, AI insights, AI predictive analytics, AI search, natural language processing, and text analysis.

All personal information processed using our AI products is handled in line with this Privacy Notice and our agreements with third parties.`,
  },
  {
    num: "6.",
    title: "HOW LONG DO WE KEEP YOUR INFORMATION?",
    body: `We will only keep your personal information for as long as necessary for the purposes set out in this notice, unless a longer retention period is required by law. We will not keep your personal information for longer than twelve months past the termination of your account.`,
  },
  {
    num: "7.",
    title: "HOW DO WE KEEP YOUR INFORMATION SAFE?",
    body: `We have implemented appropriate technical and organizational security measures to protect your personal information. However, no electronic transmission over the internet can be guaranteed to be 100% secure. You should only access the services within a secure environment.`,
  },
  {
    num: "8.",
    title: "DO WE COLLECT INFORMATION FROM MINORS?",
    body: `We do not knowingly collect data from or market to children under 18 years of age. By using the services, you represent that you are at least 18 years old. If we learn that information from users under 18 has been collected, we will deactivate the account and delete such data. Contact us at info@getkota.ai if you become aware of any such data.`,
  },
  {
    num: "9.",
    title: "WHAT ARE YOUR PRIVACY RIGHTS?",
    body: `You may review, change, or terminate your account at any time. To withdraw consent or opt out of marketing communications, contact us using the details below or click the unsubscribe link in any email we send.

No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.

To update or terminate your account, contact us using the information provided below. Upon your request to terminate, we will deactivate or delete your account from our active databases, though we may retain some information to prevent fraud or comply with legal requirements.

For questions about your privacy rights, email info@getkota.ai.`,
  },
  {
    num: "10.",
    title: "CONTROLS FOR DO-NOT-TRACK FEATURES",
    body: `We do not currently respond to Do-Not-Track browser signals as no uniform technology standard for recognizing these signals has been finalized. California law requires us to disclose this. If a standard is adopted in the future we will update this notice accordingly.`,
  },
  {
    num: "11.",
    title: "DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?",
    body: `If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have the right to request access to, correct, or delete your personal information, withdraw consent, obtain a copy of your data, and opt out of the sale or sharing of personal data.

To exercise these rights, submit a request by emailing info@getkota.ai.

We have not disclosed, sold, or shared any personal information to third parties for a business or commercial purpose in the preceding twelve months and will not do so in the future.

If we decline to take action on your request, you may appeal by emailing info@getkota.ai. If your appeal is denied, you may submit a complaint to your state attorney general.

California residents may also request information under California Civil Code Section 1798.83 by contacting us using the details below.`,
  },
  {
    num: "12.",
    title: "DO WE MAKE UPDATES TO THIS NOTICE?",
    body: `Yes, we will update this notice as necessary to stay compliant with relevant laws. The updated version will be indicated by an updated date at the top. We encourage you to review this notice frequently.`,
  },
  {
    num: "13.",
    title: "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?",
    body: `Email: info@getkota.ai\nKota Holdings, LLC\nMaitland, FL 32751`,
  },
  {
    num: "14.",
    title: "HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?",
    body: `Based on applicable laws, you may have the right to request access to, correct, or delete your personal information. To submit a request, email info@getkota.ai.`,
  },
];

const summaryPoints = [
  {
    q: "What personal information do we process?",
    a: "We may process personal information depending on how you interact with us and the services you use.",
  },
  {
    q: "Do we process any sensitive personal information?",
    a: "We do not process sensitive personal information.",
  },
  {
    q: "Do we collect any information from third parties?",
    a: "We do not collect any information from third parties.",
  },
  {
    q: "How do we process your information?",
    a: "We process your information to provide, improve, and administer our services, communicate with you, for security and fraud prevention, and to comply with law.",
  },
  {
    q: "Do we share personal information?",
    a: "We may share information in specific situations with specific third parties as described below.",
  },
  {
    q: "How do we keep your information safe?",
    a: "We have organizational and technical processes in place to protect your personal information. However, no electronic transmission over the internet can be guaranteed to be 100% secure.",
  },
  {
    q: "How can you exercise your rights?",
    a: "By submitting a data subject access request or contacting us at info@getkota.ai.",
  },
];

export default function PrivacyPage() {
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
        <a
          href="/"
          className="back-link"
        >
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
          Privacy Policy
        </h1>
        <p style={{ color: "#A0A0A0", fontSize: 14, marginBottom: 32 }}>
          Last updated April 06, 2026
        </p>

        {/* Intro */}
        <p style={{ color: "#C0C0C0", lineHeight: 1.75, fontSize: 15, marginBottom: 16 }}>
          This Privacy Notice for <strong style={{ color: "#fff" }}>Kota Holdings, LLC</strong> (doing business as Kota) describes how and why we might access, collect, store, use, and share your personal information when you use our services, including when you visit our website at{" "}
          <a href="https://getkota.ai" style={{ color: "#10B981", textDecoration: "none" }}>getkota.ai</a>{" "}
          or use Kota Sales Intelligence, a B2B SaaS sales intelligence platform built for debt settlement sales teams that analyzes call recordings, indexes objections and deal outcomes, and provides AI-powered coaching and performance intelligence to sales managers and representatives.
        </p>
        <p style={{ color: "#C0C0C0", lineHeight: 1.75, fontSize: 15, marginBottom: 48 }}>
          Questions or concerns? Contact us at{" "}
          <a href="mailto:info@getkota.ai" style={{ color: "#10B981", textDecoration: "none" }}>info@getkota.ai</a>.
        </p>

        {/* Divider */}
        <div style={{ borderTop: "1px solid #222", marginBottom: 48 }} />

        {/* Summary */}
        <h2
          style={{
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#10B981",
            marginBottom: 20,
          }}
        >
          Summary of Key Points
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 56 }}>
          {summaryPoints.map((pt) => (
            <div
              key={pt.q}
              style={{
                background: "#141414",
                border: "1px solid #222",
                borderRadius: 10,
                padding: "16px 20px",
              }}
            >
              <p style={{ fontWeight: 600, color: "#fff", fontSize: 14, marginBottom: 4 }}>
                {pt.q}
              </p>
              <p style={{ color: "#A0A0A0", fontSize: 14, lineHeight: 1.65, margin: 0 }}>
                {pt.a}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid #222", marginBottom: 48 }} />

        {/* Numbered sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: 44 }}>
          {sections.map((sec) => (
            <div key={sec.num}>
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
                {sec.num} {sec.title}
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
