import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Router, Routes, Switch } from "react-router-dom";
import About from "./about";
import Home from "./home";
import Blog from "./blog";

const root = document.getElementById("root");
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

ReactDOM.createRoot(root).render(<App />);
