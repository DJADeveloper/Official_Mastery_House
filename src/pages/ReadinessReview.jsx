import { CTA, BookButton } from "../Layout";
import { usePageTitle } from "./Home";
import { REVIEW_AREAS, DELIVERABLES, TIMELINE, PRINCIPLES, FAQ, NEXT_STEPS } from "../content";

export default function ReadinessReview() {
  usePageTitle("Production AI Readiness Review");
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">The offer</p>
          <h1>Production AI Readiness Review</h1>
          <p className="lede">
            An independent engineering review of one AI system: an assistant, RAG pipeline, copilot or
            tool-calling agent. Ten business days, fixed fee, and a prioritized plan at the end.
          </p>
          <dl className="facts">
            <div>
              <dt>Scope</dt>
              <dd>One AI system</dd>
            </div>
            <div>
              <dt>Duration</dt>
              <dd>10 business days</dd>
            </div>
            <div>
              <dt>Your team's time</dt>
              <dd>About 3 hours</dd>
            </div>
            <div>
              <dt>Fee</dt>
              <dd>From $5,000, fixed</dd>
            </div>
          </dl>
          <BookButton />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>What we review</h2>
          <div className="card-grid">
            {REVIEW_AREAS.map((a, i) => (
              <article className="card" key={a.title}>
                <span className="card-num">{String(i + 1).padStart(2, "0")}</span>
                <h4>{a.title}</h4>
                <p>{a.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap two-col">
          <div>
            <h2>What you get</h2>
          </div>
          <ul className="deliverables">
            {DELIVERABLES.map((d) => (
              <li key={d.title}>
                <strong>{d.title}.</strong> {d.body}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>How it runs</h2>
          <ol className="timeline">
            {TIMELINE.map((t) => (
              <li key={t.when}>
                <span className="timeline-when">{t.when}</span>
                <span>{t.what}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap two-col">
          <div>
            <h2>How we work</h2>
          </div>
          <ul className="check-list">
            {PRINCIPLES.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>After the review</h2>
          <p className="lede">
            Many teams fix findings themselves with the roadmap. If you'd rather have help, there are two ways
            to continue.
          </p>
          <div className="two-cards">
            {NEXT_STEPS.map((s) => (
              <article className="card" key={s.title}>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap faq">
          <h2>Questions</h2>
          {FAQ.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
