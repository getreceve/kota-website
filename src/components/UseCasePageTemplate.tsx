"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CursorGlow from "@/components/CursorGlow";
import FinalCTA from "@/components/FinalCTA";
import { DEMO_URL } from "@/lib/constants";

/* ─── Types ────────────────────────────────────────── */
interface ProblemCard {
  icon: React.ReactNode;
  title: string;
  body: string;
}
interface Feature {
  icon: React.ReactNode;
  title: string;
  body: string;
}
interface UseCaseData {
  hero: { headline: string; subheadline: string };
  problem: { headline: string; cards: ProblemCard[] };
  solution: { headline: string; features: Feature[] };
  outcome: { statement: string };
}

/* ─── Shared icons ─────────────────────────────────── */
const Ic = {
  trendUp: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  phone: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  doc: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  bolt: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  star: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
  chart: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  user: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  x: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  layers: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  headphones: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 18v-6a9 9 0 0118 0v6" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
    </svg>
  ),
  database: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
    </svg>
  ),
  clock: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  chat: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  eye: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  refresh: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  mail: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  filter: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
    </svg>
  ),
  shuffle: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
    </svg>
  ),
  bell: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  ),
  alert: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  ),
  calendar: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  flag: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 2H21l-3 6 3 6H10.5l-1-2H5a2 2 0 00-2 2z" />
    </svg>
  ),
  userPlus: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
    </svg>
  ),
  shield: (
    <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
};

/* ─── All 5 pages' data ────────────────────────────── */
const DATA: Record<string, UseCaseData> = {
  "increase-enrollment-rate": {
    hero: {
      headline: "Stop Leaving Enrollable Accounts On The Table",
      subheadline:
        "Most debt settlement reps are losing accounts they should be winning. Not because of skill. Because they don't have access to what already works.",
    },
    problem: {
      headline: "The Pattern Repeats Every Month",
      cards: [
        {
          icon: Ic.user,
          title: "Same objections, different outcomes",
          body: "Your top rep handles the debt-to-income objection one way. Your bottom rep handles it another way. Neither knows what the other is doing. The difference shows up in your enrollment numbers every single month.",
        },
        {
          icon: Ic.phone,
          title: "No pre-call intelligence",
          body: "Reps pick up the phone knowing almost nothing about the account. They discover the hardship, the creditor mix, and the objections in real time, with no data on what has worked for similar accounts before.",
        },
        {
          icon: Ic.doc,
          title: "No post-call learning",
          body: "Every call contains a lesson. Without a system to capture and index those lessons, the same mistakes repeat indefinitely. Your institutional knowledge walks out the door every time a rep leaves.",
        },
      ],
    },
    solution: {
      headline: "What Changes When Every Rep Has Intelligence",
      features: [
        { icon: Ic.doc, title: "Pre-call account briefing", body: "Every rep enters every call with a summary of similar past accounts, the objections that came up, and what worked." },
        { icon: Ic.bolt, title: "Objection playbook from your own calls", body: "Your winning rebuttals — indexed and searchable — built from the calls your team has already made." },
        { icon: Ic.star, title: "Call scoring against your script standards", body: "Every call is scored after it ends, so reps know exactly where they fell off and what to fix." },
        { icon: Ic.chart, title: "Rep performance benchmarked to your team", body: "Leaderboards and gap reports built from actual calls, not manager gut feel." },
      ],
    },
    outcome: {
      statement: "The reps who enroll the most aren't always the most talented. They're the most prepared.",
    },
  },

  "reduce-ramp-time": {
    hero: {
      headline: "New Reps Performing in Weeks. Not Months.",
      subheadline:
        "Every day a new rep spends ramping is a day they're not enrolling accounts. Kota compresses that window by giving new reps access to everything your best reps already know.",
    },
    problem: {
      headline: "The Ramp Problem Is a Knowledge Problem",
      cards: [
        {
          icon: Ic.user,
          title: "Veterans carry the playbook in their heads",
          body: "Your best reps have handled every objection, worked every type of account, and developed a feel for when to push and when to back off. None of that is written down anywhere.",
        },
        {
          icon: Ic.x,
          title: "New reps learn by failing",
          body: "Without a system that captures institutional knowledge, new reps spend months making avoidable mistakes on live accounts. Every failed call is a learning opportunity that costs you a potential enrollment.",
        },
        {
          icon: Ic.layers,
          title: "Training is one-size-fits-all",
          body: "Generic onboarding doesn't reflect how your team specifically sells, what your specific prospects object to, or what your specific top performers do differently.",
        },
      ],
    },
    solution: {
      headline: "Built-In Intelligence From Day One",
      features: [
        { icon: Ic.doc, title: "Call library of your best performing calls", body: "New reps can study real examples of your top closers handling every objection from their first day." },
        { icon: Ic.bolt, title: "Pre-call briefings from your own enrollment history", body: "Before every call, new reps get context on similar past accounts — the same intelligence veterans have built up over years." },
        { icon: Ic.star, title: "Objection playbook from your own winning rebuttals", body: "What actually works with your specific prospect base, indexed by objection type and outcome." },
        { icon: Ic.chart, title: "Personal performance tracking from call one", body: "New reps see their own gaps immediately. They don't have to wait for a manager review to know where to improve." },
      ],
    },
    outcome: {
      statement: "When new reps have access to what your veterans already know, they stop reinventing the wheel and start closing.",
    },
  },

  "eliminate-blind-spots": {
    hero: {
      headline: "Full Visibility Into Every Call. Without Listening to a Single Recording.",
      subheadline:
        "Most sales managers have no real idea what is happening on their team's calls. Kota changes that without adding hours to your week.",
    },
    problem: {
      headline: "Management Shouldn't Be Guesswork",
      cards: [
        {
          icon: Ic.headphones,
          title: "Listening to calls doesn't scale",
          body: "A manager with 15 reps cannot meaningfully review enough calls to coach effectively. They cherry pick a few, miss the patterns, and rely on gut feel for the rest.",
        },
        {
          icon: Ic.database,
          title: "CRM data tells you outcomes, not reasons",
          body: "Your CRM shows you who enrolled and who didn't. It doesn't tell you why. The reason lives in the call and nobody has time to find it.",
        },
        {
          icon: Ic.clock,
          title: "Coaching happens after the fact",
          body: "By the time a manager identifies a pattern and coaches to it, weeks have passed and the same mistake has cost you multiple potential enrollments.",
        },
      ],
    },
    solution: {
      headline: "Automated Visibility Across Every Call",
      features: [
        { icon: Ic.star, title: "Every call automatically scored", body: "Kota scores every call against your script standards immediately after it ends. No manual review required." },
        { icon: Ic.eye, title: "Objection patterns surfaced in real time", body: "See which objections your team is losing to, which reps are struggling, and what the difference looks like across your call library." },
        { icon: Ic.chart, title: "Rep performance dashboard updated automatically", body: "After every analyzed call, every rep's performance metrics update. Managers always have a live view." },
        { icon: Ic.chat, title: "Call Coach AI answers questions about any rep", body: "Ask specific questions about any rep using real call data. No more guessing what's happening on the floor." },
      ],
    },
    outcome: {
      statement: "You shouldn't have to listen to 40 hours of calls to know what your team needs. Your data should tell you.",
    },
  },

  "reactivate-dead-leads": {
    hero: {
      headline: "You Already Paid For These Leads. Start Using Them.",
      subheadline:
        "The average debt settlement company has thousands of leads in their CRM that went cold and were never followed up on. That is revenue sitting idle.",
    },
    problem: {
      headline: "Your CRM Is Full of Untapped Revenue",
      cards: [
        {
          icon: Ic.clock,
          title: "Leads go cold, then get forgotten",
          body: "A prospect doesn't answer, gets marked as no contact, and disappears into the database. Nobody follows up systematically. The lead cost the same whether it converts or not.",
        },
        {
          icon: Ic.filter,
          title: "No scoring, no prioritization",
          body: "Without a system that scores leads by reactivation likelihood, re-engagement campaigns are either too broad to be effective or too narrow to generate meaningful volume.",
        },
        {
          icon: Ic.mail,
          title: "Generic outreach doesn't convert",
          body: "Sending the same message to every dead lead ignores the context of why they didn't convert in the first place. Personalized reactivation based on their original profile performs dramatically better.",
        },
      ],
    },
    solution: {
      headline: "Systematic Reactivation Built on Your Own Data",
      features: [
        { icon: Ic.filter, title: "AI scoring of dead leads by reactivation probability", body: "The system identifies your highest-probability reactivation candidates so your team focuses on leads most likely to respond." },
        { icon: Ic.mail, title: "Multi-channel sequences via SMS, email, and voicemail", body: "Automated follow-up across every channel, timed to maximize response rates without manual effort." },
        { icon: Ic.shuffle, title: "Automatic routing of responding leads", body: "When a lead responds, it routes automatically to the right rep with full context on the account's history." },
        { icon: Ic.doc, title: "Pre-call briefing loaded for every reactivated lead", body: "Kota automatically prepares the rep with everything that happened the first time around before they make the call." },
      ],
    },
    outcome: {
      statement: "A 5 percent reactivation rate on 5,000 dead leads is 250 new conversations. With leads you already paid for.",
    },
  },

  "reduce-client-dropout": {
    hero: {
      headline: "Enrolled Clients Who Drop Out Cost You Everything.",
      subheadline:
        "When a client drops out before their debts are settled, you lose every fee you would have earned on unsettled accounts. Most dropout is preventable.",
    },
    problem: {
      headline: "Dropout Is a Communication Problem",
      cards: [
        {
          icon: Ic.bell,
          title: "Clients don't know what's happening",
          body: "After enrollment, most clients hear nothing until there is news on an account. Silence breeds anxiety and anxiety leads to dropout. Proactive communication at every milestone changes this.",
        },
        {
          icon: Ic.alert,
          title: "Missed payments go unaddressed",
          body: "By the time a missed payment is noticed and followed up on, the client has already mentally checked out. Early warning systems catch the signal before it becomes a cancellation.",
        },
        {
          icon: Ic.layers,
          title: "Onboarding is overwhelming",
          body: "Clients who don't fully understand the program are more likely to panic when creditors call or when progress feels slow. Structured onboarding content delivered automatically prevents this.",
        },
      ],
    },
    solution: {
      headline: "Automated Communication That Keeps Clients Enrolled",
      features: [
        { icon: Ic.userPlus, title: "Personalized welcome and onboarding sequences", body: "Triggered the moment a client enrolls, setting expectations clearly before anxiety can take hold." },
        { icon: Ic.flag, title: "Milestone communication at every key program point", body: "Clients hear from you automatically at settlement milestones, keeping them engaged and confident throughout the program." },
        { icon: Ic.calendar, title: "Payment reminder sequences before each monthly payment", body: "Automated reminders reduce payment failures and eliminate the friction that leads clients to cancel." },
        { icon: Ic.shield, title: "Early warning re-engagement for at-risk clients", body: "The system flags clients who miss a payment or go dark and automatically initiates a re-engagement sequence." },
      ],
    },
    outcome: {
      statement: "A 10 percent improvement in client retention on 100 enrolled clients is 10 clients who complete the program. That is significant fee revenue recovered.",
    },
  },
};

/* ─── Sub-components ───────────────────────────────── */
function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: 44, height: 44, borderRadius: 11, flexShrink: 0,
        background: "rgba(16,185,129,0.10)",
        border: "1px solid rgba(16,185,129,0.20)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
}

/* ─── Page template ────────────────────────────────── */
export default function UseCasePageTemplate({ slug }: { slug: string }) {
  const data = DATA[slug];
  if (!data) return null;

  return (
    <>
      <ScrollReveal />
      <Nav />

      {/* ══ HERO ══════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ background: "#0A0A0A", paddingTop: 64, minHeight: "84vh", display: "flex", alignItems: "center" }}
      >
        <CursorGlow />

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.013) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.013) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }} />

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 py-20 sm:py-28 text-center w-full">
          {/* Eyebrow */}
          <div
            className="about-word about-word-0 inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-7"
            style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.25)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#10B981" }} />
            <span className="text-xs font-semibold tracking-wide" style={{ color: "#10B981" }}>Use Case</span>
          </div>

          {/* Headline */}
          <h1
            className="about-word about-word-1 font-extrabold text-white leading-[1.06] tracking-tight mb-6"
            style={{ fontSize: "clamp(28px, 5.5vw, 62px)", letterSpacing: "-0.025em" }}
          >
            {data.hero.headline}
          </h1>

          {/* Subheadline */}
          <p
            className="about-sub mx-auto mb-10"
            style={{ color: "#A0A0A0", fontSize: "clamp(15px, 1.8vw, 19px)", maxWidth: 600, lineHeight: 1.7 }}
          >
            {data.hero.subheadline}
          </p>

          {/* CTA */}
          <div className="about-sub flex flex-wrap items-center justify-center gap-4">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a Demo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #0A0A0A)" }} />
      </section>

      {/* ══ PROBLEM ═══════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28" style={{ background: "#0A0A0A" }}>
        <div className="dot-grid absolute inset-0" />
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center mb-14 reveal">
            <p className="section-label mb-3">The Problem</p>
            <h2
              className="font-extrabold text-white leading-tight"
              style={{ fontSize: "clamp(24px, 4vw, 46px)", letterSpacing: "-0.022em", maxWidth: 600, margin: "0 auto" }}
            >
              {data.problem.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {data.problem.cards.map((card, i) => (
              <div
                key={i}
                className={`card card-alt p-6 sm:p-7 reveal stagger-${i + 1}`}
                style={{ borderLeft: "2px solid rgba(16,185,129,0.4)" }}
              >
                <div className="mb-4">
                  <IconBox>{card.icon}</IconBox>
                </div>
                <h3 className="text-white font-bold mb-2.5 text-base sm:text-[17px]">{card.title}</h3>
                <p className="text-[#888] text-sm leading-relaxed" style={{ lineHeight: 1.75 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SOLUTION ══════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28" style={{ background: "#0D0D0D" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="text-center mb-14 reveal">
            <p className="section-label mb-3">The Solution</p>
            <h2
              className="font-extrabold text-white leading-tight"
              style={{ fontSize: "clamp(24px, 4vw, 46px)", letterSpacing: "-0.022em", maxWidth: 580, margin: "0 auto" }}
            >
              {data.solution.headline}
            </h2>
          </div>

          {/* 2×2 feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {data.solution.features.map((feat, i) => (
              <div
                key={i}
                className={`card p-6 sm:p-7 flex gap-4 reveal stagger-${i + 1}`}
              >
                <IconBox>{feat.icon}</IconBox>
                <div>
                  <h3 className="text-white font-bold mb-2 text-base">{feat.title}</h3>
                  <p className="text-[#888] text-sm" style={{ lineHeight: 1.75 }}>{feat.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ OUTCOME ═══════════════════════════════════════ */}
      <section
        className="relative py-20 sm:py-24 overflow-hidden"
        style={{ background: "#111111", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}
      >
        {/* Subtle center glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(16,185,129,0.05) 0%, transparent 65%)",
        }} />

        {/* Decorative lines */}
        <div className="absolute inset-0 flex items-center pointer-events-none" aria-hidden="true">
          <div className="w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.12) 30%, rgba(16,185,129,0.12) 70%, transparent)" }} />
        </div>

        <div className="relative max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center reveal">
          <p
            className="font-extrabold text-white leading-tight"
            style={{ fontSize: "clamp(22px, 3.5vw, 38px)", letterSpacing: "-0.02em", lineHeight: 1.3 }}
          >
            &ldquo;{data.outcome.statement}&rdquo;
          </p>
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════ */}
      <FinalCTA />

      <Footer />
    </>
  );
}
