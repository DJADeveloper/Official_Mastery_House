import { useState } from "react";
import { CTA } from "../Layout";
import { usePageTitle } from "./Home";
import { CHECKLIST, SITE } from "../content";

const TOTAL = CHECKLIST.reduce((n, g) => n + g.items.length, 0);

function verdict(score) {
  if (score === TOTAL) return "Strong position. A review would mostly confirm it, and document it for customers.";
  if (score >= 19) return "Solid foundations with a few gaps. Those gaps are usually where incidents come from.";
  if (score >= 11) return "Real exposure. Worth fixing before an enterprise customer or a launch forces the issue.";
  return "Early stage. Treat this list as your production plan.";
}

export default function Checklist() {
  usePageTitle("Production AI Readiness Checklist");
  const [checked, setChecked] = useState({});
  const score = Object.values(checked).filter(Boolean).length;
  const toggle = (id) => setChecked((c) => ({ ...c, [id]: !c[id] }));

  const gaps = CHECKLIST.flatMap((g, gi) =>
    g.items.filter((_, ii) => !checked[`q-${gi}-${ii}`]).map((item) => `- ${item}`)
  );
  const mailto =
    `mailto:${SITE.email}?subject=${encodeURIComponent(`Readiness checklist: ${score}/${TOTAL}`)}` +
    `&body=${encodeURIComponent(
      `Hi Darryl,\n\nI scored ${score}/${TOTAL} on the Production AI Readiness Checklist. ` +
        `The gaps I'd like to talk through:\n\n${gaps.join("\n")}\n\nAbout our system:\n`
    )}`;

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Free resource</p>
          <h1>Production AI Readiness Checklist</h1>
          <p className="lede">
            {TOTAL} questions we start every review with. Tick the ones you can answer "yes" to with
            evidence, not intentions.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap checklist-layout">
          <div className="checklist">
            {CHECKLIST.map((g, gi) => (
              <fieldset key={g.group}>
                <legend>{g.group}</legend>
                {g.items.map((item, ii) => {
                  const id = `q-${gi}-${ii}`;
                  return (
                    <label key={id} htmlFor={id} className="check-item">
                      <input id={id} type="checkbox" checked={!!checked[id]} onChange={() => toggle(id)} />
                      <span>{item}</span>
                    </label>
                  );
                })}
              </fieldset>
            ))}
          </div>
          <aside className="score-card" aria-live="polite">
            <p className="price-label">Your score</p>
            <p className="price">
              {score} / {TOTAL}
            </p>
            <p>{verdict(score)}</p>
            <div className="score-actions">
              <a className="btn btn-primary" href={mailto}>
                Get Darryl's read on your gaps
              </a>
              <button className="btn btn-secondary" type="button" onClick={() => window.print()}>
                Print or save as PDF
              </button>
            </div>
            <p className="muted small">
              Opens an email with your score and unchecked items. Darryl replies personally.
            </p>
          </aside>
        </div>
      </section>

      <CTA
        title="Want an outside view of the unchecked boxes?"
        body="The Readiness Review tests each of these against your actual system and gives you a prioritized fix list in ten business days."
      />
    </>
  );
}
