import { CTA } from "../Layout";
import { usePageTitle } from "./Home";
import { SITE, OTHER_WORK } from "../content";

export default function About() {
  usePageTitle("About");
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">About</p>
          <h1>A small practice, on purpose.</h1>
          <p className="lede">
            The Mastery House is a software studio founded in 2019 and led by {SITE.founder}. Today it's
            focused on one thing: getting AI systems safely and reliably into production.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap two-col">
          <div>
            <div className="monogram" aria-hidden="true">DA</div>
            <h2>{SITE.founder}</h2>
            <p className="muted">{SITE.founderTitle}</p>
            <p>
              <a className="text-link" href={SITE.github} target="_blank" rel="noopener noreferrer">
                GitHub →
              </a>
            </p>
          </div>
          <div className="prose">
            <p>
              Darryl is a full-stack engineer with about ten years of experience building production software
              across agencies, startups and his own products, mostly in React, TypeScript, APIs, backend systems
              and SaaS.
            </p>
            <p>
              His focus now is applied AI systems engineering: context and retrieval, tool calling and MCP,
              agent architecture, deterministic authorization, prompt-injection defense, reliability
              (timeouts, retries, idempotency, durable execution), observability and evaluations.
            </p>
            <p>
              He's also the founder and CTO of CAIR, a multi-tenant platform for assisted-living facilities
              with an AI assistant built for health-sensitive data. It's the proving ground for the methods
              used in client work.
            </p>
            <h3>Why a person, not an agency</h3>
            <p>
              Production AI problems sit at the seams between the model, your data and your systems. Finding
              them takes someone who reads the code and the traces, not a slide deck. When you hire The
              Mastery House, Darryl does the work.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <p className="eyebrow">Earlier client work</p>
          <h2>Software, apps and automation</h2>
          <p className="lede">
            Before focusing on production AI, The Mastery House built websites, apps and automation for
            small businesses and startups.
          </p>
          <div className="quote-grid">
            {OTHER_WORK.map((t) => (
              <blockquote className="quote" key={t.who}>
                <p>“{t.quote}”</p>
                <footer>
                  <strong>{t.who}</strong> · {t.role}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
