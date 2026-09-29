import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./site.css";
import Layout from "./Layout";
import ScrollToTop from "./ScrollToTop";
import Home from "./pages/Home";
import ReadinessReview from "./pages/ReadinessReview";
import CairCaseStudy from "./pages/CairCaseStudy";
import Checklist from "./pages/Checklist";
import About from "./pages/About";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/readiness-review" element={<ReadinessReview />} />
          <Route path="/case-studies/cair" element={<CairCaseStudy />} />
          <Route path="/checklist" element={<Checklist />} />
          <Route path="/about" element={<About />} />
          {/* Old site URLs, so existing links and search results still land somewhere useful. */}
          <Route path="/services/ai-development" element={<Navigate to="/readiness-review" replace />} />
          <Route path="/service" element={<Navigate to="/readiness-review" replace />} />
          <Route path="/contact" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
