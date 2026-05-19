import type { VerticalConfig } from "./types";

const debtSettlement: VerticalConfig = {
  id: "debt-settlement",
  domain: "getkota.ai",

  meta: {
    title: "Kota | Sales Intelligence for Debt Settlement Teams",
    description:
      "Kota analyzes every call, indexes every objection, and gives your entire debt settlement sales team access to what your top closer already knows. Stop leaving enrollable accounts on the table.",
    metadataBase: "https://getkota.ai",
  },

  announcementBanner: {
    primaryText: "Built by debt settlement sales veterans.",
  },

  hero: {
    eyebrow: "Kota Pipeline Intelligence",
    headline: {
      line1Words: ["Your", "Top", "Closer"],
      line2Words: ["Has", "A", "System."],
      line3: "Now Your Whole",
      line4: "Team Can Use It.",
    },
    subheadline: {
      before:
        "Kota analyzes every call, indexes every objection and rebuttal, and gives your entire",
      teamHighlight: "debt settlement team",
      after: "access to what your best rep already knows.",
      callout: "Stop leaving enrollable accounts on the table.",
    },
    bannerText: "The complete AI operating system for debt settlement sales.",
    stats: [
      { value: 10000, suffix: "+", label: "Calls Analyzed" },
      { value: 43, suffix: "%", label: "Avg Improvement in Objection Overcome Rate" },
      { value: 5, suffix: " Days", label: "to Full Onboarding" },
    ],
  },

  problem: {
    headline: "Your Best Coaching Is Locked Inside Calls Nobody Reviews",
    cards: [
      {
        title: "Reps Repeat Mistakes",
        body: "Your team loses the same accounts to the same hardship objections every month because nobody has indexed what actually works. Every rep reinvents the wheel on every call.",
      },
      {
        title: "Managers Are Flying Blind",
        body: "You have no real visibility into what's happening on calls without listening to hours of recordings yourself. By the time you catch the pattern, you've already lost the accounts.",
      },
      {
        title: "Intelligence Dies With The Call",
        body: "Every won and lost account contains a lesson. Right now that lesson disappears the moment the call ends. Your best coaching is locked inside recordings nobody has time to review.",
      },
    ],
  },

  howItWorks: {
    steps: [
      {
        title: "Connect Your Calls",
        body: "Upload recordings or paste transcripts. Kota handles everything from there — no configuration, no tagging, no manual setup required.",
      },
      {
        title: "Intelligence Builds Automatically",
        body: "Every call gets transcribed, segmented, scored, and indexed without anyone lifting a finger. The system learns what wins for your specific team.",
      },
      {
        title: "Your Team Compounds",
        body: "Reps get pre-call intelligence on objections. Managers get post-call analysis. Every account makes the whole team smarter, permanently.",
      },
    ],
  },

  features: {
    headline: "Built for Every Layer of\nYour Sales Operation",
    items: [
      {
        title: "Call Intelligence",
        body: "AI transcribes, segments, and scores every call automatically. No more listening to recordings.",
      },
      {
        title: "Objection Intelligence",
        body: "Every objection your team has ever faced, indexed with what worked and what didn't.",
      },
      {
        title: "Deal Memory",
        body: "Search your entire account history before any call. Know what killed similar accounts before you dial.",
      },
      {
        title: "Rep Performance",
        body: "Real scorecards built from actual calls, not manager gut feel.",
      },
      {
        title: "Gap Brief",
        body: "Know exactly what intelligence your team is missing before it costs you another account.",
      },
      {
        title: "Cycle Intelligence",
        body: "Every touchpoint connected. See the full picture from first contact to enrolled.",
        badge: "Coming Soon",
      },
    ],
  },

  salesOS: {
    eyebrow: "Introducing",
    headline: "Sales OS",
    subheadline:
      "Kota Pipeline Intelligence is just the beginning. The Kota Sales OS is the complete AI operating system that automates, optimizes, and scales every part of your debt settlement sales operation.",
    systems: [
      {
        name: "Kota Pipeline Intelligence",
        desc: "AI-powered call analysis, objection intelligence, and rep performance tracking built on your own scripts and data.",
      },
      {
        name: "Script & Rebuttal Optimization",
        desc: "A/B test every rebuttal, track script adherence, and let your own call data improve your scripts automatically.",
      },
      {
        name: "Lead Reactivation Engine",
        desc: "Automatically identify and re-engage dormant leads in your CRM with personalized multi-channel sequences.",
      },
      {
        name: "Client Retention Automation",
        desc: "Automated enrollment workflows and client communication sequences that reduce dropout and protect your fees.",
      },
    ],
  },

  finalCTA: {
    statPills: ["No per-seat fees", "Full CRM integration", "Onboarding included"],
    headlinePrefix: "Stop Leaving",
    headlineAccent: "Enrollable Accounts",
    headlineSuffix: "On The Table.",
    subheadline:
      "Join debt settlement sales teams using Kota to turn every call into a competitive advantage.",
  },

  roi: {
    repsLabel: "Number of reps",
    leadsPerRepLabel: "Leads per rep per month",
    costPerLeadLabel: "Cost per lead",
    costPerLeadHint: "What you pay per lead before qualification",
    closeRateLabel: "Current close rate",
    closeRateHint: "Industry average: 20–30%",
    revenueLabel: "Revenue per enrollment",
    revenueHint: "First month program fee collected on enrollment",
    nounSingular: "enrollment",
    nounPlural: "enrollments",
    verbPastTense: "enrolled",
    adjective: "enrollable",
    previewDefaultsLabel:
      "10 reps · 80 leads/mo · 22% close rate · $100 CPL · $1,750/enrollment",
    previewSubheadline:
      "Most sales managers know they're losing enrollable accounts. They just don't know how many or what it's costing them. Now you can.",
  },

  footer: {
    tagline: "Built for debt settlement sales teams.",
    copyrightEntity: "Kota",
  },

  useCases: {
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
            iconKey: "user",
            title: "Same objections, different outcomes",
            body: "Your top rep handles the debt-to-income objection one way. Your bottom rep handles it another way. Neither knows what the other is doing. The difference shows up in your enrollment numbers every single month.",
          },
          {
            iconKey: "phone",
            title: "No pre-call intelligence",
            body: "Reps pick up the phone knowing almost nothing about the account. They discover the hardship, the creditor mix, and the objections in real time, with no data on what has worked for similar accounts before.",
          },
          {
            iconKey: "doc",
            title: "No post-call learning",
            body: "Every call contains a lesson. Without a system to capture and index those lessons, the same mistakes repeat indefinitely. Your institutional knowledge walks out the door every time a rep leaves.",
          },
        ],
      },
      solution: {
        headline: "What Changes When Every Rep Has Intelligence",
        features: [
          { iconKey: "doc", title: "Pre-call account briefing", body: "Every rep enters every call with a summary of similar past accounts, the objections that came up, and what worked." },
          { iconKey: "bolt", title: "Objection playbook from your own calls", body: "Your winning rebuttals — indexed and searchable — built from the calls your team has already made." },
          { iconKey: "star", title: "Call scoring against your script standards", body: "Every call is scored after it ends, so reps know exactly where they fell off and what to fix." },
          { iconKey: "chart", title: "Rep performance benchmarked to your team", body: "Leaderboards and gap reports built from actual calls, not manager gut feel." },
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
            iconKey: "user",
            title: "Veterans carry the playbook in their heads",
            body: "Your best reps have handled every objection, worked every type of account, and developed a feel for when to push and when to back off. None of that is written down anywhere.",
          },
          {
            iconKey: "x",
            title: "New reps learn by failing",
            body: "Without a system that captures institutional knowledge, new reps spend months making avoidable mistakes on live accounts. Every failed call is a learning opportunity that costs you a potential enrollment.",
          },
          {
            iconKey: "layers",
            title: "Training is one-size-fits-all",
            body: "Generic onboarding doesn't reflect how your team specifically sells, what your specific prospects object to, or what your specific top performers do differently.",
          },
        ],
      },
      solution: {
        headline: "Built-In Intelligence From Day One",
        features: [
          { iconKey: "doc", title: "Call library of your best performing calls", body: "New reps can study real examples of your top closers handling every objection from their first day." },
          { iconKey: "bolt", title: "Pre-call briefings from your own enrollment history", body: "Before every call, new reps get context on similar past accounts — the same intelligence veterans have built up over years." },
          { iconKey: "star", title: "Objection playbook from your own winning rebuttals", body: "What actually works with your specific prospect base, indexed by objection type and outcome." },
          { iconKey: "chart", title: "Personal performance tracking from call one", body: "New reps see their own gaps immediately. They don't have to wait for a manager review to know where to improve." },
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
            iconKey: "headphones",
            title: "Listening to calls doesn't scale",
            body: "A manager with 15 reps cannot meaningfully review enough calls to coach effectively. They cherry pick a few, miss the patterns, and rely on gut feel for the rest.",
          },
          {
            iconKey: "database",
            title: "CRM data tells you outcomes, not reasons",
            body: "Your CRM shows you who enrolled and who didn't. It doesn't tell you why. The reason lives in the call and nobody has time to find it.",
          },
          {
            iconKey: "clock",
            title: "Coaching happens after the fact",
            body: "By the time a manager identifies a pattern and coaches to it, weeks have passed and the same mistake has cost you multiple potential enrollments.",
          },
        ],
      },
      solution: {
        headline: "Automated Visibility Across Every Call",
        features: [
          { iconKey: "star", title: "Every call automatically scored", body: "Kota scores every call against your script standards immediately after it ends. No manual review required." },
          { iconKey: "eye", title: "Objection patterns surfaced in real time", body: "See which objections your team is losing to, which reps are struggling, and what the difference looks like across your call library." },
          { iconKey: "chart", title: "Rep performance dashboard updated automatically", body: "After every analyzed call, every rep's performance metrics update. Managers always have a live view." },
          { iconKey: "chat", title: "Call Coach AI answers questions about any rep", body: "Ask specific questions about any rep using real call data. No more guessing what's happening on the floor." },
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
            iconKey: "clock",
            title: "Leads go cold, then get forgotten",
            body: "A prospect doesn't answer, gets marked as no contact, and disappears into the database. Nobody follows up systematically. The lead cost the same whether it converts or not.",
          },
          {
            iconKey: "filter",
            title: "No scoring, no prioritization",
            body: "Without a system that scores leads by reactivation likelihood, re-engagement campaigns are either too broad to be effective or too narrow to generate meaningful volume.",
          },
          {
            iconKey: "mail",
            title: "Generic outreach doesn't convert",
            body: "Sending the same message to every dead lead ignores the context of why they didn't convert in the first place. Personalized reactivation based on their original profile performs dramatically better.",
          },
        ],
      },
      solution: {
        headline: "Systematic Reactivation Built on Your Own Data",
        features: [
          { iconKey: "filter", title: "AI scoring of dead leads by reactivation probability", body: "The system identifies your highest-probability reactivation candidates so your team focuses on leads most likely to respond." },
          { iconKey: "mail", title: "Multi-channel sequences via SMS, email, and voicemail", body: "Automated follow-up across every channel, timed to maximize response rates without manual effort." },
          { iconKey: "shuffle", title: "Automatic routing of responding leads", body: "When a lead responds, it routes automatically to the right rep with full context on the account's history." },
          { iconKey: "doc", title: "Pre-call briefing loaded for every reactivated lead", body: "Kota automatically prepares the rep with everything that happened the first time around before they make the call." },
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
            iconKey: "bell",
            title: "Clients don't know what's happening",
            body: "After enrollment, most clients hear nothing until there is news on an account. Silence breeds anxiety and anxiety leads to dropout. Proactive communication at every milestone changes this.",
          },
          {
            iconKey: "alert",
            title: "Missed payments go unaddressed",
            body: "By the time a missed payment is noticed and followed up on, the client has already mentally checked out. Early warning systems catch the signal before it becomes a cancellation.",
          },
          {
            iconKey: "layers",
            title: "Onboarding is overwhelming",
            body: "Clients who don't fully understand the program are more likely to panic when creditors call or when progress feels slow. Structured onboarding content delivered automatically prevents this.",
          },
        ],
      },
      solution: {
        headline: "Automated Communication That Keeps Clients Enrolled",
        features: [
          { iconKey: "userPlus", title: "Personalized welcome and onboarding sequences", body: "Triggered the moment a client enrolls, setting expectations clearly before anxiety can take hold." },
          { iconKey: "flag", title: "Milestone communication at every key program point", body: "Clients hear from you automatically at settlement milestones, keeping them engaged and confident throughout the program." },
          { iconKey: "calendar", title: "Payment reminder sequences before each monthly payment", body: "Automated reminders reduce payment failures and eliminate the friction that leads clients to cancel." },
          { iconKey: "shield", title: "Early warning re-engagement for at-risk clients", body: "The system flags clients who miss a payment or go dark and automatically initiates a re-engagement sequence." },
        ],
      },
      outcome: {
        statement: "A 10 percent improvement in client retention on 100 enrolled clients is 10 clients who complete the program. That is significant fee revenue recovered.",
      },
    },
  },
};

export default debtSettlement;
