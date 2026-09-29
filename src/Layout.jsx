import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { SITE } from "./content";

export function BookButton({ children = "Book a scoping call", variant = "primary" }) {
  return (
    <a className={`btn btn-${variant}`} href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function Wordmark() {
  return (
    <Link to="/" className="wordmark" aria-label="The Mastery House, home">
      <span className="wordmark-name">The Mastery House</span>
      <span className="wordmark-sub">Production AI Engineering</span>
    </Link>
  );
}

const NAV = [
  { to: "/readiness-review", label: "Readiness Review" },
  { to: "/case-studies/cair", label: "Case study" },
  { to: "/checklist", label: "Checklist" },
  { to: "/about", label: "About" },
];

export default function Layout() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="wrap header-inner">
          <Wordmark />
          <button
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "Close" : "Menu"}
          </button>
          <nav id="site-nav" className={`site-nav ${open ? "is-open" : ""}`} aria-label="Main">
            {NAV.map((n) => (
              <NavLink key={n.to} to={n.to} onClick={() => setOpen(false)}>
                {n.label}
              </NavLink>
            ))}
            <BookButton variant="small">Book a call</BookButton>
          </nav>
        </div>
      </header>
      <main id="main">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="wrap footer-inner">
          <div>
            <p className="footer-name">{SITE.company}</p>
            <p className="muted">
              {SITE.practice} · {SITE.location}
            </p>
          </div>
          <div className="footer-links">
            <Link to="/readiness-review">Readiness Review</Link>
            <Link to="/case-studies/cair">CAIR case study</Link>
            <Link to="/checklist">Checklist</Link>
            <Link to="/about">About</Link>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </div>
          <p className="muted footer-copy">© {new Date().getFullYear()} {SITE.company}</p>
        </div>
      </footer>
    </>
  );
}

export function CTA({ title = "Find out where your AI system stands.", body }) {
  return (
    <section className="cta">
      <div className="wrap cta-inner">
        <h2>{title}</h2>
        <p>
          {body ||
            "Start with a 30-minute scoping call. You'll leave with a clear view of whether a review makes sense and what it would cover, even if you don't book one."}
        </p>
        <div className="cta-actions">
          <BookButton />
          <a className="btn btn-ghost-light" href={`mailto:${SITE.email}`}>
            Email instead
          </a>
        </div>
      </div>
    </section>
  );
}

export function Portrait() {
  return SITE.photo ? (
    <img className="portrait" src={SITE.photo} alt={SITE.founder} width="120" height="120" />
  ) : (
    <div className="monogram" aria-hidden="true">
      DA
    </div>
  );
}
