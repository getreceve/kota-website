import type { VerticalConfig } from "./types";

const insurance: VerticalConfig = {
  id: "insurance",
  domain: "life.getkota.ai",

  meta: {
    title: "Kota | Sales Intelligence for Life and Health Insurance Teams",
    description:
      "Kota analyzes every call, indexes every objection, and gives your entire insurance sales team access to what your top producer already knows. Stop leaving enrollable policies on the table.",
    metadataBase: "https://life.getkota.ai",
  },

  announcementBanner: {
    primaryText: "Built by high-volume phone sales veterans.",
  },

  hero: {
    eyebrow: "Kota Pipeline Intelligence",
    headline: {
      line1Words: ["Your", "Top", "Producer"],
      line2Words: ["Has", "A", "System."],
      line3: "Now Your Whole",
      line4: "Team Can Use It.",
    },
    subheadline: {
      before:
        "Kota analyzes every call, indexes every objection, and gives your entire",
      teamHighlight: "insurance sales team",
      after: "access to what your top producer already knows.",
      callout: "Stop leaving issuable policies on the table.",
    },
    bannerText: "The complete AI operating system for insurance sales.",
    stats: [
      { value: 10000, suffix: "+", label: "Policies Analyzed" },
      { value: 43, suffix: "%", label: "Avg Improvement in Objection Overcome Rate" },
      { value: 5, suffix: " Days", label: "to Full Onboarding" },
    ],
  },

  problem: {
    headline: "Your Best Coaching Is Locked Inside Calls Nobody Reviews",
    cards: [
      {
        title: "Agents Repeat Mistakes",
        body: "Every time a rep loses a policy to an affordability objection or a \"I need to think about it\" they miss a learning moment. Without a system to capture what went wrong, the same objections kill deals week after week.",
      },
      {
        title: "Managers Are Flying Blind",
        body: "A manager with 15 reps cannot listen to enough calls to coach effectively. They guess who needs help, miss the real patterns, and rely on gut feel instead of data.",
      },
      {
        title: "Intelligence Dies With The Call",
        body: "Your top producer knows exactly how to handle the premium objection, the spouse objection, the competitor comparison. That knowledge lives in their head. When they leave it walks out with them.",
      },
    ],
  },

  howItWorks: {
    steps: [
      {
        title: "Connect Your Calls",
        body: "Connect your dialer and every call your team makes flows into Kota automatically. No rep involvement required.",
      },
      {
        title: "Intelligence Builds Automatically",
        body: "Every call is transcribed, scored against your scripts, and indexed by objection type. The system learns what your top producers do differently.",
      },
      {
        title: "Your Team Compounds",
        body: "Every rep gets access to what your best producers already know. New agents ramp faster. Veteran agents close more. The whole team improves with every call.",
      },
    ],
  },

  features: {
    headline: "Built for Every Layer of\nYour Insurance Sales Operation",
    items: [
      {
        title: "Call Intelligence",
        body: "Every call automatically transcribed, scored against your scripts, and broken down by segment. Know exactly where policies are won and lost.",
      },
      {
        title: "Objection Intelligence",
        body: "Every objection your team encounters is indexed, categorized, and paired with the rebuttals that actually work. Premium, coverage, competitor, spouse. All of it captured automatically.",
      },
      {
        title: "Account Briefing",
        body: "Before every callback your rep sees a 60-second briefing built from similar past accounts. What objections to expect, how to open, what worked before.",
      },
      {
        title: "Rep Performance",
        body: "See exactly how each rep handles every objection type, how they score on each part of the call, and where they need coaching. No more guessing who needs help.",
      },
      {
        title: "Script Adherence",
        body: "Score every call against your approved scripts and compliance requirements. Know who is following the process and who is going off-script.",
      },
      {
        title: "Call Coach",
        body: "Ask it anything. Which rep handles the premium objection best. What is our policy close rate this month. Who improved the most this week. Answers from your own data.",
      },
    ],
  },

  salesOS: {
    eyebrow: "Introducing",
    headline: "Kota Sales OS",
    subheadline:
      "Kota Pipeline Intelligence is just the beginning. The Kota Sales OS is the complete AI operating system that automates, optimizes, and scales every part of your insurance sales operation.",
    systems: [
      {
        name: "Kota Pipeline Intelligence",
        desc: "AI powered call analysis, objection intelligence, and rep performance tracking built on your own scripts and data.",
      },
      {
        name: "Script and Rebuttal Optimization",
        desc: "A/B test every rebuttal, track script adherence, and let your own call data improve your scripts automatically.",
      },
      {
        name: "Lead Reactivation Engine",
        desc: "Automatically identify and re-engage dormant leads in your CRM with personalized multi-channel sequences.",
      },
      {
        name: "Client Retention Automation",
        desc: "Automated enrollment workflows and policyholder communication sequences that reduce lapse rates and protect your commissions.",
      },
    ],
  },

  finalCTA: {
    statPills: ["No per-seat fees", "Full CRM and Dialer Integration", "Onboarding included"],
    headlinePrefix: "Stop Leaving",
    headlineAccent: "Issuable Policies",
    headlineSuffix: "On The Table.",
    subheadline:
      "Join insurance sales teams using Kota to turn every call into a competitive advantage.",
  },

  roi: {
    repsLabel: "How many agents are on your team?",
    leadsPerRepLabel: "How many leads does each agent work per month?",
    costPerLeadLabel: "What do you pay per lead?",
    costPerLeadHint: "What you pay per lead before qualification",
    closeRateLabel: "What is your team's current policy close rate?",
    closeRateHint: "Industry average for life and health insurance: 20-35%",
    revenueLabel: "What is your average commission per issued policy?",
    revenueHint: "First year commission on policy issuance",
    nounSingular: "policy",
    nounPlural: "policies",
    verbPastTense: "issued",
    adjective: "issuable",
    previewDefaultsLabel:
      "10 agents · 80 leads/mo · 22% close rate · $100 CPL · $1,750/policy",
    previewSubheadline:
      "Most sales managers know they're leaving issuable policies on the table. They just don't know how many or what it's costing them. Now you can.",
  },

  footer: {
    tagline: "Sales Intelligence for Insurance Sales Teams.",
    copyrightEntity: "Kota Holdings LLC",
  },

  useCases: {
    "increase-policy-close-rate": {
      hero: {
        headline: "Stop Leaving Issuable Policies On The Table",
        subheadline:
          "Most insurance agents are losing policies they should be winning. Not because of skill. Because they don't have access to what already works.",
      },
      problem: {
        headline: "The Pattern Repeats Every Month",
        cards: [
          {
            iconKey: "user",
            title: "Same objections, different outcomes",
            body: "Your top agent handles the affordability objection one way. Your bottom agent handles it another way. Neither knows what the other is doing. The difference shows up in your policy close numbers every single month.",
          },
          {
            iconKey: "phone",
            title: "No pre-call intelligence",
            body: "Agents pick up the phone knowing almost nothing about the prospect. They discover the coverage needs, the budget constraints, and the objections in real time, with no data on what has worked for similar prospects before.",
          },
          {
            iconKey: "doc",
            title: "No post-call learning",
            body: "Every call contains a lesson. Without a system to capture and index those lessons, the same mistakes repeat indefinitely. Your institutional knowledge walks out the door every time an agent leaves.",
          },
        ],
      },
      solution: {
        headline: "What Changes When Every Agent Has Intelligence",
        features: [
          { iconKey: "doc", title: "Pre-call account briefing", body: "Every agent enters every call with a summary of similar past prospects, the objections that came up, and what worked to get them issued." },
          { iconKey: "bolt", title: "Objection playbook from your own calls", body: "Your winning rebuttals — indexed and searchable — built from the calls your team has already made." },
          { iconKey: "star", title: "Call scoring against your script standards", body: "Every call is scored after it ends, so agents know exactly where they fell off and what to fix." },
          { iconKey: "chart", title: "Agent performance benchmarked to your team", body: "Leaderboards and gap reports built from actual calls, not manager gut feel." },
        ],
      },
      outcome: {
        statement: "The agents who issue the most policies aren't always the most talented. They're the most prepared.",
      },
    },

    "reduce-agent-ramp-time": {
      hero: {
        headline: "New Agents Performing in Weeks. Not Months.",
        subheadline:
          "Every day a new agent spends ramping is a day they're not issuing policies. Kota compresses that window by giving new agents access to everything your top producers already know.",
      },
      problem: {
        headline: "The Ramp Problem Is a Knowledge Problem",
        cards: [
          {
            iconKey: "user",
            title: "Veterans carry the playbook in their heads",
            body: "Your top producers have handled every objection, worked every type of prospect, and developed a feel for when to push and when to back off. None of that is written down anywhere.",
          },
          {
            iconKey: "x",
            title: "New agents learn by failing",
            body: "Without a system that captures institutional knowledge, new agents spend months making avoidable mistakes on live prospects. Every failed call is a learning opportunity that costs you a potential policy.",
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
          { iconKey: "doc", title: "Call library of your best performing calls", body: "New agents can study real examples of your top producers handling every objection from their first day." },
          { iconKey: "bolt", title: "Pre-call briefings from your own issuance history", body: "Before every call, new agents get context on similar past prospects — the same intelligence veterans have built up over years." },
          { iconKey: "star", title: "Objection playbook from your own winning rebuttals", body: "What actually works with your specific prospect base, indexed by objection type and outcome." },
          { iconKey: "chart", title: "Personal performance tracking from call one", body: "New agents see their own gaps immediately. They don't have to wait for a manager review to know where to improve." },
        ],
      },
      outcome: {
        statement: "When new agents have access to what your veterans already know, they stop reinventing the wheel and start closing.",
      },
    },

    "eliminate-call-blind-spots": {
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
            body: "A manager with 15 agents cannot meaningfully review enough calls to coach effectively. They cherry pick a few, miss the patterns, and rely on gut feel for the rest.",
          },
          {
            iconKey: "database",
            title: "CRM data tells you outcomes, not reasons",
            body: "Your CRM shows you who was issued and who wasn't. It doesn't tell you why. The reason lives in the call and nobody has time to find it.",
          },
          {
            iconKey: "clock",
            title: "Coaching happens after the fact",
            body: "By the time a manager identifies a pattern and coaches to it, weeks have passed and the same mistake has cost you multiple potential policies.",
          },
        ],
      },
      solution: {
        headline: "Automated Visibility Across Every Call",
        features: [
          { iconKey: "star", title: "Every call automatically scored", body: "Kota scores every call against your script standards immediately after it ends. No manual review required." },
          { iconKey: "eye", title: "Objection patterns surfaced in real time", body: "See which objections your team is losing to, which agents are struggling, and what the difference looks like across your call library." },
          { iconKey: "chart", title: "Agent performance dashboard updated automatically", body: "After every analyzed call, every agent's performance metrics update. Managers always have a live view." },
          { iconKey: "chat", title: "Call Coach AI answers questions about any agent", body: "Ask specific questions about any agent using real call data. No more guessing what's happening on the floor." },
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
          "The average insurance agency has thousands of leads in their CRM that went cold and were never followed up on. That is revenue sitting idle.",
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
          { iconKey: "shuffle", title: "Automatic routing of responding leads", body: "When a lead responds, it routes automatically to the right agent with full context on the prospect's history." },
          { iconKey: "doc", title: "Pre-call briefing loaded for every reactivated lead", body: "Kota automatically prepares the agent with everything that happened the first time around before they make the call." },
        ],
      },
      outcome: {
        statement: "A 5 percent reactivation rate on 5,000 dead leads is 250 new conversations. With leads you already paid for.",
      },
    },

    "reduce-policy-lapse-rate": {
      hero: {
        headline: "Policyholders Who Lapse Cost You Everything.",
        subheadline:
          "When a policyholder lapses before their coverage matures, you lose every commission you would have earned on renewals. Most lapse is preventable.",
      },
      problem: {
        headline: "Lapse Is a Communication Problem",
        cards: [
          {
            iconKey: "bell",
            title: "Policyholders don't know what's happening",
            body: "After issuance, most policyholders hear nothing until there is a problem. Silence breeds doubt and doubt leads to lapse. Proactive communication at every milestone changes this.",
          },
          {
            iconKey: "alert",
            title: "Missed payments go unaddressed",
            body: "By the time a missed payment is noticed and followed up on, the policyholder has already mentally checked out. Early warning systems catch the signal before it becomes a cancellation.",
          },
          {
            iconKey: "layers",
            title: "Onboarding is overwhelming",
            body: "Policyholders who don't fully understand their coverage are more likely to cancel when premiums feel high or when they question the value. Structured onboarding content delivered automatically prevents this.",
          },
        ],
      },
      solution: {
        headline: "Automated Communication That Keeps Policyholders Covered",
        features: [
          { iconKey: "userPlus", title: "Personalized welcome and onboarding sequences", body: "Triggered the moment a policy is issued, setting expectations clearly before doubt can take hold." },
          { iconKey: "flag", title: "Milestone communication at every key coverage point", body: "Policyholders hear from you automatically at coverage milestones, keeping them engaged and confident in their decision." },
          { iconKey: "calendar", title: "Payment reminder sequences before each premium due date", body: "Automated reminders reduce payment failures and eliminate the friction that leads policyholders to lapse." },
          { iconKey: "shield", title: "Early warning re-engagement for at-risk policyholders", body: "The system flags policyholders who miss a payment or go dark and automatically initiates a re-engagement sequence." },
        ],
      },
      outcome: {
        statement: "A 10 percent improvement in policyholder retention on 100 issued policies is 10 clients who stay covered. That is significant commission revenue protected.",
      },
    },
  },
};

export default insurance;
