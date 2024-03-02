import React, { useState } from "react";
import "./home.css";
import Blog1 from "./assets/img/blog1.png";

import {
  BsChevronRight,
  BsChevronLeft,
  BsArrowRight,
  BsArrowUpRight,
  BsXLg,
  BsList,
} from "react-icons/bs";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Header from "./components/Header";
import Marque from "./components/Marque";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

const Blogs = () => {
  return (
    <div className="masteryhouse">
      <main className="homepage" id="home_page">
        {/* <div className="circle-1"></div>
            <div className="circle-2"></div> */}
        <div className="circle-3"></div>
        <Header isActive="blog" />
        <section className="about-section blogs-main-section">
          <div className="main-about-circle"></div>
          <div className="about-circle-2"></div>
          <div className="about-circle-3"></div>
          <div className="box">
            <div className="about-content ">
              <div className="about-c-top">
                <h4>Read Our Blogs</h4>
                <h1 className="gradient-text">
                  Our Blog on the <br />
                  Cutting Edge of Tech
                </h1>
              </div>
              <div className="blogs-grid">
                <div className="blog-main-cont bm-r-cont">
                  <img src={Blog1} alt="" />
                  <div>
                    <h4>
                      Navigating the Future: How AI is Redefining Our Approach
                      to Problem-Solving
                    </h4>
                    <a href="#">
                      Read More <BsArrowRight />
                    </a>
                  </div>
                </div>
                <div className="blog-main-cont bm-r-cont">
                  <img src={Blog1} alt="" />
                  <div>
                    <h4>
                      Navigating the Future: How AI is Redefining Our Approach
                      to Problem-Solving
                    </h4>
                    <a href="#">
                      Read More <BsArrowRight />
                    </a>
                  </div>
                </div>
                <div className="blog-main-cont bm-r-cont">
                  <img src={Blog1} alt="" />
                  <div>
                    <h4>
                      Navigating the Future: How AI is Redefining Our Approach
                      to Problem-Solving
                    </h4>
                    <a href="#">
                      Read More <BsArrowRight />
                    </a>
                  </div>
                </div>
                <div className="blog-main-cont bm-r-cont">
                  <img src={Blog1} alt="" />
                  <div>
                    <h4>
                      Navigating the Future: How AI is Redefining Our Approach
                      to Problem-Solving
                    </h4>
                    <a href="#">
                      Read More <BsArrowRight />
                    </a>
                  </div>
                </div>
                <div className="blog-main-cont bm-r-cont">
                  <img src={Blog1} alt="" />
                  <div>
                    <h4>
                      Navigating the Future: How AI is Redefining Our Approach
                      to Problem-Solving
                    </h4>
                    <a href="#">
                      Read More <BsArrowRight />
                    </a>
                  </div>
                </div>
                <div className="blog-main-cont bm-r-cont">
                  <img src={Blog1} alt="" />
                  <div>
                    <h4>
                      Navigating the Future: How AI is Redefining Our Approach
                      to Problem-Solving
                    </h4>
                    <a href="#">
                      Read More <BsArrowRight />
                    </a>
                  </div>
                </div>
                <div className="blog-main-cont bm-r-cont">
                  <img src={Blog1} alt="" />
                  <div>
                    <h4>
                      Navigating the Future: How AI is Redefining Our Approach
                      to Problem-Solving
                    </h4>
                    <a href="#">
                      Read More <BsArrowRight />
                    </a>
                  </div>
                </div>
                <div className="blog-main-cont bm-r-cont">
                  <img src={Blog1} alt="" />
                  <div>
                    <h4>
                      Navigating the Future: How AI is Redefining Our Approach
                      to Problem-Solving
                    </h4>
                    <a href="#">
                      Read More <BsArrowRight />
                    </a>
                  </div>
                </div>
                <div className="blog-main-cont bm-r-cont">
                  <img src={Blog1} alt="" />
                  <div>
                    <h4>
                      Navigating the Future: How AI is Redefining Our Approach
                      to Problem-Solving
                    </h4>
                    <a href="#">
                      Read More <BsArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="getintouch-section">
          <div className="marquee-main-box">
            <Marque />
          </div>
        </section>
        <Booking />
        <Footer />
      </main>
    </div>
  );
};

export default Blogs;
