import { CTA } from "../Layout";
import { usePageTitle, StatusTag } from "./Home";
import { CAIR } from "../content";

export default function CairCaseStudy() {
  usePageTitle("CAIR case study");
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Case study · Health-tech SaaS</p>
          <h1>CAIR: production AI where mistakes are expensive</h1>
          <p className="lede">{CAIR.summary}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap two-col">
          <div>
            <h2>Why it's hard</h2>
          </div>
          <ul className="check-list plain">
            {CAIR.context.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <h2>How it's engineered</h2>
          <div className="card-grid three">
            {CAIR.approaches.map((a) => (
              <article className="card" key={a.title}>
                <h4>{a.title}</h4>
                <p>{a.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap two-col">
          <div>
            <h2>Where it stands</h2>
            <p className="muted">
              Updated as work ships. Honest status matters more than a clean-looking list.
            </p>
          </div>
          <table className="status-table">
            <thead>
              <tr>
                <th scope="col">Capability</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {CAIR.status.map((s) => (
                <tr key={s.item}>
                  <td>{s.item}</td>
                  <td>
                    <StatusTag state={s.state} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap two-col">
          <div>
            <h2>What it means for your system</h2>
          </div>
          <div className="prose">
            <p>
              The same questions come up in every AI product that touches real data: who the model acts for,
              what it can see, what it can change, and how you'd know if it went wrong. CAIR is where those
              answers get built and tested first. The Readiness Review applies them to your system.
            </p>
            <p className="note">{CAIR.disclaimer}</p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
