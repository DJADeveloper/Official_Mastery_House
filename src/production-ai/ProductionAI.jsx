import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./production-ai.css";

const CALENDLY_URL = "https://calendly.com/themasteryhouse/ai-audit-strategy-call";

const STATS = [
  {
    figure: "65%",
    text: "of independent agents used AI for work in the past year.",
    source: "Liberty Mutual, via Insurance Business",
    href: "https://www.insurancebusinessmag.com/us/news/technology/agents-are-using-ai--their-agencies-mostly-arent--why-593372.aspx",
  },
  {
    figure: "14%",
    text: "of their agencies have actually put an AI tool in place.",
    source: "Liberty Mutual, via Insurance Business",
    href: "https://www.insurancebusinessmag.com/us/news/technology/agents-are-using-ai--their-agencies-mostly-arent--why-593372.aspx",
  },
  {
    figure: "56%",
    text: "of agencies have no written AI policy.",
    source: "ACT survey, via Insurance Journal",
    href: "https://www.insurancejournal.com/magazines/mag-features/2026/03/09/860642.htm",
  },
];

const BUILDS = [
  {
    title: "Speed-to-lead",
    body: "Quote requests from your website, phone, and inbox get a reply and a booked appointment within minutes, and land in your AMS as a new prospect.",
  },
  {
    title: "Renewal prep",
    body: "Expiring policies are pulled ahead of time, changes are summarized, and remarketing emails are drafted for your producers to review and send.",
  },
  {
    title: "Document intake",
    body: "Dec pages, loss runs, and applications are read and entered into your AMS, so your team checks the data instead of retyping it.",
  },
  {
    title: "Service desk assistant",
    body: "Routine requests like certificates, ID cards, and billing questions are answered or routed, with a person approving anything that leaves the agency.",
  },
];

const STEPS = [
  {
    title: "Assessment",
    when: "2 weeks, $2,500",
    body: "We map how work moves through your agency, find the three automations with the clearest return, and write your AI use policy. The fee is credited toward a build signed within 30 days.",
  },
  {
    title: "Build",
    when: "3 to 6 weeks, from $12,000",
    body: "We ship one production system connected to your AMS, with logging, a test set, and an approval step your staff can see.",
  },
  {
    title: "Run",
    when: "Monthly, from $2,500",
    body: "We monitor it, fix what breaks, update the policy as tools change, and add one new automation each quarter.",
  },
];

const SAFEGUARDS = [
  "Business-tier AI accounts that don't train on your client data",
  "A written AI use policy your staff can actually follow",
  "A person approves anything sent to a client or carrier",
  "Every AI action is logged, so you can see what happened and why",
];

function DecPage() {
  return (
    <figure className="pa-dec" aria-label="Illustration: fields read from a declarations page and entered into an agency management system">
      <div className="pa-dec-sheet">
        <div className="pa-dec-head">
          <span>Homeowners Policy Declarations</span>
          <span className="pa-dec-pg">Page 1 of 4</span>
        </div>
        <dl className="pa-dec-grid">
          <div><dt>Named insured</dt><dd><mark>Rivera, Daniel &amp; Ana</mark></dd></div>
          <div><dt>Policy period</dt><dd><mark>11/01/2026 – 11/01/2027</mark></dd></div>
          <div><dt>Location</dt><dd>1214 Bayshore Ct, Tampa FL</dd></div>
          <div><dt>Dwelling (A)</dt><dd><mark>$412,000</mark></dd></div>
          <div><dt>Hurricane deductible</dt><dd><mark>2%</mark></dd></div>
          <div><dt>Annual premium</dt><dd><mark>$4,186.00</mark></dd></div>
        </dl>
        <div className="pa-dec-lines" aria-hidden="true"><i /><i /><i /><i /></div>
      </div>
      <div className="pa-dec-ams">
        <div className="pa-ams-title">AMS renewal record</div>
        <ul>
          <li><span>Insured</span><b>Rivera, Daniel &amp; Ana</b></li>
          <li><span>Term</span><b>11/01/26 – 11/01/27</b></li>
          <li><span>Cov. A</span><b>$412,000</b></li>
          <li><span>Hurricane ded.</span><b>2%</b></li>
          <li><span>Premium</span><b>$4,186.00</b></li>
        </ul>
        <div className="pa-ams-status">Ready for review</div>
      </div>
      <figcaption className="pa-sr">
        Example data. A sample declarations page with five fields highlighted, and the same five fields entered into an agency management system record marked ready for review.
      </figcaption>
    </figure>
  );
}

export default function ProductionAI() {
  useEffect(() => {
    document.title = "The Mastery House | AI engineering for independent insurance agencies";
  }, []);

  return (
    <div className="pa">
      <a className="pa-skip" href="#main">Skip to content</a>
      <header className="pa-header">
        <div className="pa-wrap pa-header-row">
          <Link to="/" className="pa-brand">The Mastery House</Link>
          <nav aria-label="Main">
            <a href="#builds">What we build</a>
            <a href="#process">How it works</a>
            <a href="#about">About</a>
            <a className="pa-btn pa-btn-small" href={CALENDLY_URL} target="_blank" rel="noreferrer">Book a call</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="pa-hero">
          <div className="pa-wrap pa-hero-grid">
            <div className="pa-hero-copy">
              <p className="pa-kicker">For independent P&amp;C agencies in Florida</p>
              <h1>Your agents already use AI. Your agency should too.</h1>
              <p className="pa-lede">
                We build AI that works inside your agency management system: it reads the documents, drafts the emails, and answers the routine calls, with your team approving what goes out.
              </p>
              <div className="pa-hero-actions">
                <a className="pa-btn" href={CALENDLY_URL} target="_blank" rel="noreferrer">Book a 30-minute call</a>
                <a className="pa-link" href="#process">See the assessment</a>
              </div>
            </div>
            <DecPage />
          </div>
        </section>

        <section className="pa-gap" aria-labelledby="gap-h">
          <div className="pa-wrap">
            <h2 id="gap-h">The gap is between your people and your systems</h2>
            <p className="pa-section-lede">
              Most agents are pasting client data into a chatbot on their own. That saves them a little time, skips your AMS entirely, and leaves you without a policy.
            </p>
            <div className="pa-stats">
              {STATS.map((s) => (
                <div className="pa-stat" key={s.figure}>
                  <div className="pa-stat-fig">{s.figure}</div>
                  <p>{s.text}</p>
                  <a href={s.href} target="_blank" rel="noreferrer">{s.source}</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="builds" className="pa-builds" aria-labelledby="builds-h">
          <div className="pa-wrap pa-two">
            <div>
              <h2 id="builds-h">What we build</h2>
              <p className="pa-section-lede">
                Four systems that pay for themselves in hours saved or policies written. Each one connects to the AMS you already run, whether that's HawkSoft, AMS360, Applied Epic, or EZLynx.
              </p>
            </div>
            <dl className="pa-build-list">
              {BUILDS.map((b) => (
                <div key={b.title}>
                  <dt>{b.title}</dt>
                  <dd>{b.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="process" className="pa-process" aria-labelledby="process-h">
          <div className="pa-wrap">
            <h2 id="process-h">How it works</h2>
            <ol className="pa-steps">
              {STEPS.map((s) => (
                <li key={s.title}>
                  <h3>{s.title}</h3>
                  <p className="pa-step-when">{s.when}</p>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="pa-safe" aria-labelledby="safe-h">
          <div className="pa-wrap pa-two">
            <div>
              <h2 id="safe-h">Built for client data</h2>
              <p className="pa-section-lede">
                Security is the top reason agencies hold back on AI. Every system we ship comes with the same safeguards.
              </p>
            </div>
            <ul className="pa-checks">
              {SAFEGUARDS.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="about" className="pa-about" aria-labelledby="about-h">
          <div className="pa-wrap pa-about-inner">
            <h2 id="about-h">Who you'll work with</h2>
            <p>
              I'm Darryl Adams, founder of The Mastery House and a production AI engineer based in Wesley Chapel. I've spent about nine years building software, and I'm the founder and CTO of CAIR Living, an AI compliance platform for Florida assisted living facilities. I build tool-calling agents, document pipelines, and approval workflows in TypeScript and Python.
            </p>
            <p>
              I lead every engagement myself. No hand-off to a junior team, and no chatbot sold as a strategy.
            </p>
            <p className="pa-other">
              Not an insurance agency? I also take on production AI builds for other regulated small businesses. <a href={CALENDLY_URL} target="_blank" rel="noreferrer">Tell me what you're working on.</a>
            </p>
          </div>
        </section>

        <section className="pa-cta" aria-labelledby="cta-h">
          <div className="pa-wrap pa-cta-inner">
            <h2 id="cta-h">Start with a 30-minute call</h2>
            <p>We'll look at where your team loses the most hours and whether an assessment makes sense. No pitch deck.</p>
            <a className="pa-btn pa-btn-light" href={CALENDLY_URL} target="_blank" rel="noreferrer">Book a call</a>
          </div>
        </section>
      </main>

      <footer className="pa-footer">
        <div className="pa-wrap pa-footer-row">
          <span>© {new Date().getFullYear()} The Mastery House</span>
          <a href="https://www.linkedin.com/in/darryladams-dev/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
