import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BookButton, CTA, Portrait } from "../Layout";
import {
  SITE,
  GAP_LAYERS,
  TRIGGERS,
  REVIEW_AREAS,
  DELIVERABLES,
  CAIR,
} from "../content";

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | The Mastery House` : "The Mastery House | Production AI Engineering";
  }, [title]);
}

export default function Home() {
  usePageTitle();
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">Production AI Engineering</p>
            <h1>Take your AI from prototype to trustworthy production.</h1>
            <p className="lede">
              Your assistant, RAG pipeline or agent works in the demo. We make it safe, reliable and
              defensible with real users, real data and your customers' security teams watching.
            </p>
            <div className="hero-actions">
              <BookButton />
              <Link className="btn btn-secondary" to="/readiness-review">
                See what the review covers
              </Link>
            </div>
            <p className="byline">
              Led personally by <Link to="/about">{SITE.founder}</Link>, {SITE.founderTitle}.
            </p>
          </div>
          <GapStack />
        </div>
      </section>

      <section className="section">
        <div className="wrap two-col">
          <div>
            <p className="eyebrow">The Production AI Gap</p>
            <h2>The model isn't the hard part anymore.</h2>
          </div>
          <div className="prose">
            <p>
              Any team can get a prototype working with today's models and frameworks. The hard part is
              everything around the model: who it's allowed to act for, what data it can see, what it does
              when a document tells it to ignore its instructions, how you know a change made it worse, and
              what it costs.
            </p>
            <p>
              Those questions decide whether an AI feature can ship to enterprise customers, touch real
              systems, and survive its first security review. That's the work we do.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <p className="eyebrow">When teams call us</p>
          <h2>Signs it's time</h2>
          <ul className="trigger-list">
            {TRIGGERS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="offer-head">
            <div>
              <p className="eyebrow">Where to start</p>
              <h2>Production AI Readiness Review</h2>
              <p className="lede">
                A fixed-scope, 10-business-day review of one AI system, ending with a prioritized plan your
                team can act on.
              </p>
            </div>
            <div className="price-card">
              <p className="price-label">Fixed fee</p>
              <p className="price">From $5,000</p>
              <p className="muted">50% to start, 50% at the readout</p>
              <BookButton variant="small">Book a scoping call</BookButton>
            </div>
          </div>

          <h3 className="sub-head">What we review</h3>
          <div className="card-grid">
            {REVIEW_AREAS.map((a, i) => (
              <article className="card" key={a.title}>
                <span className="card-num">{String(i + 1).padStart(2, "0")}</span>
                <h4>{a.title}</h4>
                <p>{a.body}</p>
              </article>
            ))}
          </div>

          <h3 className="sub-head">What you get</h3>
          <ul className="deliverables">
            {DELIVERABLES.map((d) => (
              <li key={d.title}>
                <strong>{d.title}.</strong> {d.body}
              </li>
            ))}
          </ul>
          <p>
            <Link className="text-link" to="/readiness-review">
              Full scope, timeline and FAQ →
            </Link>
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap two-col">
          <div>
            <p className="eyebrow">Case study</p>
            <h2>CAIR: production AI where mistakes are expensive</h2>
          </div>
          <div className="prose">
            <p>{CAIR.summary}</p>
            <ul className="status-mini">
              {CAIR.status.slice(0, 6).map((s) => (
                <li key={s.item}>
                  <StatusTag state={s.state} /> {s.item}
                </li>
              ))}
            </ul>
            <Link className="text-link" to="/case-studies/cair">
              Read the case study →
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap two-col">
          <div>
            <p className="eyebrow">Who you work with</p>
            <Portrait />
            <h2>{SITE.founder}</h2>
            <p className="muted">{SITE.founderTitle}</p>
          </div>
          <div className="prose">
            <p>
              About ten years building production software — React, TypeScript, APIs, backend systems and
              SaaS — now focused on the engineering that makes AI systems safe to run: authorization, tool
              boundaries, injection defense, reliability, evals and observability.
            </p>
            <p>
              Every engagement is led and done by Darryl directly. No sales team, no hand-off to juniors.
            </p>
            <Link className="text-link" to="/about">
              More about Darryl and The Mastery House →
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap checklist-teaser">
          <div>
            <p className="eyebrow">Free resource</p>
            <h2>The 25-point Production AI Readiness Checklist</h2>
            <p className="lede">
              The questions we start every review with. Answer them honestly and you'll know where your gaps
              are.
            </p>
          </div>
          <Link className="btn btn-secondary" to="/checklist">
            Open the checklist
          </Link>
        </div>
      </section>

      <CTA />
    </>
  );
}

export function StatusTag({ state }) {
  const cls = state === "Built" ? "tag-built" : state === "In progress" ? "tag-progress" : "tag-planned";
  return <span className={`tag ${cls}`}>{state}</span>;
}

function GapStack() {
  return (
    <figure className="gap-stack" aria-label="The layers between an AI prototype and trustworthy production">
      <figcaption>From demo to production</figcaption>
      <ol>
        {GAP_LAYERS.map((l, i) => (
          <li key={l.label} className={i === 0 ? "is-start" : i === GAP_LAYERS.length - 1 ? "is-end" : ""}>
            <span className="layer-label">{l.label}</span>
            <span className="layer-note">{l.note}</span>
          </li>
        ))}
      </ol>
    </figure>
  );
}
