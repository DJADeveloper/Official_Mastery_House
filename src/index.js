import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Router, Routes, Switch } from "react-router-dom";
import About from "./about";
import Home from "./home";
import Blog from "./blog";
import Blogs from "./blogs";
import Service from "./service";
import CaseStudy from "./casestudy";
import Contact from "./contact";
import Links from "./link";

const root = document.getElementById("root");
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/service" element={<Service />} />
          <Route path="/casestudy" element={<CaseStudy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/links" element={<Links />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

ReactDOM.createRoot(root).render(<App />);
