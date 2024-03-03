import React, { useEffect } from "react";
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

import gsap from "gsap";
import {
  Back,
  Power3,
  Power1,
  Power2,
  Power4,
  Linear,
  Expo,
  Circ,
} from "gsap/dist/gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

const Blogs = () => {
  gsap.registerPlugin(
    Draggable,
    SplitText,
    InertiaPlugin,
    ScrollSmoother,
    ScrollTrigger,
    DrawSVGPlugin
  );
  useEffect(() => {
    ScrollSmoother.create({
      smooth: 1.15,
      effects: true,
      smoothTouch: 0,
    });
    gsap.from(".circle-3 circle", {
      drawSVG: 0.1,
      duration: 3,
      delay: 1,
    });
    gsap.from(".about-circle-3 circle", {
      drawSVG: 0.1,
      duration: 3,
      delay: 1,
    });
  }, []);
  return (
    <div className="masteryhouse">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="homepage" id="home_page">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="774"
              height="774"
              fill="none"
              viewBox="0 0 774 774"
              className="circle-3"
            >
              <circle
                cx="387"
                cy="387"
                r="386.5"
                stroke="rgba(255,255,255,0.25)"
              ></circle>
            </svg>
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
                          Navigating the Future: How AI is Redefining Our
                          Approach to Problem-Solving
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
                          Navigating the Future: How AI is Redefining Our
                          Approach to Problem-Solving
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
                          Navigating the Future: How AI is Redefining Our
                          Approach to Problem-Solving
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
                          Navigating the Future: How AI is Redefining Our
                          Approach to Problem-Solving
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
                          Navigating the Future: How AI is Redefining Our
                          Approach to Problem-Solving
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
                          Navigating the Future: How AI is Redefining Our
                          Approach to Problem-Solving
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
                          Navigating the Future: How AI is Redefining Our
                          Approach to Problem-Solving
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
                          Navigating the Future: How AI is Redefining Our
                          Approach to Problem-Solving
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
                          Navigating the Future: How AI is Redefining Our
                          Approach to Problem-Solving
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
      </div>
    </div>
  );
};

export default Blogs;
