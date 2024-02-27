import React from "react";
import { Link } from "react-router-dom";

const link = () => {
  return (
    <div className="masteryhouse">
      <main className="homepage" id="home_page">
        <div className="hp-links">
          <Link to="/about">About</Link>
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/service">Service</a>
          <a href="/casestudy">Case Study</a>
          <a href="/blog">Blog</a>
          <a href="/blogs">Blogs</a>
        </div>
      </main>
    </div>
  );
};

export default link;
