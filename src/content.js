// All site copy and links live here so they can be edited without touching layout code.

export const SITE = {
  company: "The Mastery House",
  practice: "Production AI Engineering",
  founder: "Darryl Adams",
  founderTitle: "Founder & Production AI Engineer",
  location: "Tampa Bay, Florida",
  // TODO: rename this Calendly event to "Production AI scoping call" when convenient.
  bookingUrl: "https://calendly.com/themasteryhouse/ai-audit-strategy-call",
  // TODO: switch to a domain address (e.g. darryl@themasteryhouse.com) once it exists.
  email: "themasteryhouse@gmail.com",
  github: "https://github.com/DJADeveloper",
  // Headshot: drop a square photo at public/darryl.jpg, then set this to "/darryl.jpg".
  photo: null,
};

export const GAP_LAYERS = [
  { label: "Prototype", note: "Works in the demo" },
  { label: "Context & retrieval", note: "Right data, right tenant, right time" },
  { label: "Evaluations", note: "Know when quality regresses" },
  { label: "Tools & MCP", note: "What the model is allowed to touch" },
  { label: "Identity & authorization", note: "Enforced in code, not in the prompt" },
  { label: "Prompt-injection defense", note: "Untrusted content stays data" },
  { label: "Reliability", note: "Timeouts, retries, idempotency, fallbacks" },
  { label: "Observability & cost", note: "Traces, budgets, alerts" },
  { label: "Human approval & audit", note: "Who approved what, and when" },
  { label: "Trustworthy production", note: "Something you can defend to a customer" },
];

export const TRIGGERS = [
  "An enterprise prospect's security questionnaire asks how you prevent prompt injection or data leakage.",
  "Your agent is about to get write access to customer systems or data.",
  "You're shipping an MCP server or exposing tools to a model.",
  "Users report bad answers and nobody can reproduce them.",
  "You have no evals, so every prompt or model change is a guess.",
  "AI spend is climbing and nobody can say which feature or tenant is driving it.",
  "There's a launch date, and nobody has signed off on the AI piece.",
];

export const REVIEW_AREAS = [
  {
    title: "Architecture & context",
    body: "How prompts, retrieval and memory are assembled, and whether the model sees only what it should for this user and tenant.",
  },
  {
    title: "Tools, agents & MCP",
    body: "Every tool the model can call, what it can read or change, and where a mistaken or manipulated call would land.",
  },
  {
    title: "Authentication & authorization",
    body: "Whether permissions are enforced deterministically in code, outside the model, on every tool call and retrieval.",
  },
  {
    title: "Prompt injection & data security",
    body: "Paths for untrusted content (documents, web pages, emails, user input) to steer the model or pull data across boundaries.",
  },
  {
    title: "Reliability",
    body: "Timeouts, retries with backoff, idempotency, partial failures, provider outages and what the user sees when things break.",
  },
  {
    title: "Evaluations",
    body: "Whether you can measure quality and catch regressions before a prompt, model or retrieval change reaches users.",
  },
  {
    title: "Observability & cost",
    body: "Traces you can debug from, per-tenant and per-feature cost visibility, budgets and alerting.",
  },
  {
    title: "Human approval & auditability",
    body: "Which actions need a person to approve, and whether you can reconstruct what the AI did and why after the fact.",
  },
];

export const DELIVERABLES = [
  {
    title: "Findings report",
    body: "Every issue scored by severity and likelihood, with evidence and a specific fix.",
  },
  {
    title: "Adversarial test pack",
    body: "Prompt-injection and tool-abuse tests run against your system (with written permission), plus the test cases to keep.",
  },
  {
    title: "Starter eval set",
    body: "25–50 cases built from your real use cases, ready to run in CI.",
  },
  {
    title: "Prioritized roadmap",
    body: "The top 10 fixes in order, sized, so your team knows what to do on Monday.",
  },
  {
    title: "Readout call",
    body: "A working session with your engineering leads to walk through findings and answer questions.",
  },
];

export const TIMELINE = [
  { when: "Before", what: "30-minute scoping call. We agree on the one system to review and what access is needed." },
  { when: "Day 1", what: "Kickoff and architecture walkthrough with your engineers. Read-only access set up." },
  { when: "Days 2–8", what: "Code, configuration and trace review. Adversarial and reliability testing within agreed limits." },
  { when: "Day 9", what: "Written report, test pack, eval set and roadmap delivered." },
  { when: "Day 10", what: "Readout call with your team." },
];

export const NEXT_STEPS = [
  {
    title: "Productionization Sprint",
    body: "We implement the highest-priority fixes from the review alongside your team: authorization boundaries, injection defenses, eval harness, reliability and observability. Scoped from the review findings.",
  },
  {
    title: "Ongoing Production AI Engineering",
    body: "A fractional arrangement for teams without a dedicated AI platform engineer: running evals, reviewing changes before they ship, watching cost and reliability, and testing new tools and agents.",
  },
];

export const PRINCIPLES = [
  "Read-only access by default. Nothing in your systems changes during a review.",
  "Adversarial testing only against environments and limits you approve in writing.",
  "NDA available before any access. Your data isn't retained after the engagement.",
  "You work directly with Darryl for the whole engagement. No hand-off.",
  "The review is an engineering assessment. It is not a compliance certification or a legal opinion.",
];

export const FAQ = [
  {
    q: "What kind of system is a good fit?",
    a: "One AI feature that's live or about to launch: an assistant, a RAG pipeline, a copilot, or an agent that calls tools. It should touch real users, real data or real systems. If you're still choosing a model or exploring ideas, it's too early.",
  },
  {
    q: "Which stacks do you work with?",
    a: "Any major model provider (OpenAI, Anthropic, Google and others), common frameworks or none at all, and TypeScript or Python backends. The review focuses on the boundaries around the model, which look similar across stacks.",
  },
  {
    q: "How much of our team's time does it take?",
    a: "About three hours total: a kickoff walkthrough, a few async questions during the review, and the readout call.",
  },
  {
    q: "What access do you need?",
    a: "Read access to the relevant code, configuration and a sample of traces or logs, plus a non-production environment if you want active testing. We agree on the exact scope before starting.",
  },
  {
    q: "Can this help with an enterprise security review?",
    a: "Yes. That's one of the most common reasons to do it now. The report documents your AI controls and gaps in a form you can share with a customer's security team, alongside a plan for anything open.",
  },
  {
    q: "Is this a HIPAA or SOC 2 certification?",
    a: "No. It's an independent engineering review of your AI system. It can support those efforts, but it doesn't replace an auditor or legal counsel.",
  },
];

export const CHECKLIST = [
  {
    group: "Context & retrieval",
    items: [
      "Can you list every source of text that ends up in the model's context?",
      "Is retrieval filtered by tenant and user permissions before results reach the model?",
      "Do you know which documents produced a given answer?",
    ],
  },
  {
    group: "Tools, agents & MCP",
    items: [
      "Is there an inventory of every tool the model can call, and what each can read or change?",
      "Do write actions (sending, deleting, paying, updating records) require confirmation or approval?",
      "Are tool inputs validated against a schema before execution?",
      "Are MCP servers and their credentials scoped to the minimum they need?",
    ],
  },
  {
    group: "Authentication & authorization",
    items: [
      "Is authorization enforced in code on every tool call, rather than by instructions in the prompt?",
      "Does the model act with the requesting user's permissions, never a shared admin credential?",
      "Could one tenant's data ever reach another tenant's conversation?",
    ],
  },
  {
    group: "Prompt injection & data security",
    items: [
      "Is content from documents, web pages, emails and tool results treated as data, not instructions?",
      "Have you tested indirect prompt injection through the content your system retrieves?",
      "Are secrets and sensitive fields kept out of prompts and logs?",
    ],
  },
  {
    group: "Reliability",
    items: [
      "Does every model and tool call have a timeout, and retries with backoff and jitter?",
      "Are write operations idempotent, so a retry can't do something twice?",
      "Is there a defined fallback when the model provider is slow or down?",
    ],
  },
  {
    group: "Evaluations",
    items: [
      "Do you have an eval set built from real user tasks?",
      "Do evals run automatically before prompt, model or retrieval changes ship?",
      "Do you track answer quality in production, not just before launch?",
    ],
  },
  {
    group: "Observability & cost",
    items: [
      "Can you pull the full trace (context, tool calls, outputs) for any single bad answer?",
      "Do you know AI cost per tenant and per feature?",
      "Are there budgets or rate limits that stop runaway usage?",
    ],
  },
  {
    group: "Human approval & audit",
    items: [
      "Can you show who approved each consequential AI action, and when?",
      "Could you explain to a customer exactly what the AI did with their data last Tuesday?",
      "Can you switch off the AI feature, or a single tool, in minutes without a deploy?",
    ],
  },
];

export const CAIR = {
  summary:
    "CAIR is a multi-tenant SaaS platform for small assisted-living facilities, with an AI assistant, CAIRA, that answers staff questions and takes actions over facility data. Darryl designed and built it, and it's where the practice's methods are developed and tested first.",
  context: [
    "Many facilities share one platform, and each facility's data must stay isolated from every other.",
    "The assistant works with health-related resident information, so a leak or a wrong action carries real consequences.",
    "The assistant retrieves documents and calls tools, which means untrusted text can reach the model and the model can reach real data.",
  ],
  approaches: [
    {
      title: "Deterministic authorization",
      body: "The model can propose a tool call; code decides whether it runs. Permission checks run outside the model on every call, using the requesting user's identity and facility.",
    },
    {
      title: "Tenant isolation",
      body: "Facility scoping is applied to retrieval and tool execution before results reach the model, so the model never sees another facility's data to begin with.",
    },
    {
      title: "Prompt-injection defenses",
      body: "Retrieved documents and tool results are treated as data, never as instructions, and tool boundaries limit what a manipulated request could do.",
    },
    {
      title: "AI budgets & cost controls",
      body: "Usage is tracked and capped so one facility or one runaway loop can't drive unbounded spend.",
    },
    {
      title: "Reliability engineering",
      body: "Timeouts, retries with backoff and idempotent operations, so provider hiccups degrade gracefully instead of failing or repeating actions.",
    },
    {
      title: "Observability",
      body: "Assistant activity is traceable, so a bad answer can be investigated rather than guessed at.",
    },
  ],
  status: [
    { item: "Multi-tenant architecture & facility isolation", state: "Built" },
    { item: "AI assistant with retrieval and tool calling", state: "Built" },
    { item: "Deterministic authorization on tool calls", state: "Built" },
    { item: "Prompt-injection defenses", state: "Built" },
    { item: "AI budgets and cost controls", state: "Built" },
    { item: "Reliability engineering & observability", state: "Built" },
    { item: "Evaluation suite", state: "In progress" },
    { item: "Production hardening & deployment", state: "In progress" },
    { item: "MCP server", state: "Planned" },
  ],
  disclaimer:
    "CAIR is designed for health-sensitive data. This case study describes engineering controls. It is not a claim of HIPAA compliance or certification.",
};

export const OTHER_WORK = [
  {
    quote:
      "Building our MVP app with The Mastery House was a game-changer for UniFit. They delivered a sleek, user-friendly app that aligns perfectly with our brand. Their team's expertise and responsiveness have been crucial to our growth.",
    who: "Rachel",
    role: "CTO, UniFit",
  },
  {
    quote:
      "Our partnership with The Mastery House has been invaluable. They streamlined our marketing, maintained our website, and developed an internal app that has greatly improved our operations.",
    who: "Victoria",
    role: "Director, Toria Support Care Services",
  },
  {
    quote:
      "The Mastery House consistently provides superb service. They not only execute flawlessly but also bring new ideas and strategies, adding immense value to our business.",
    who: "Lydel",
    role: "Technologist, DigiDex",
  },
];
