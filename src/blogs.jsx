import React, { useEffect } from "react";
import "./home.css";
import Blog1 from "./assets/img/blog1.png";
import Blog2 from "./assets/img/blog2.png";
import Blog3 from "./assets/img/blog3.png";
import Blog4 from "./assets/img/blog4.png";
import Blog5 from "./assets/img/blog5.png";
import Blog6 from "./assets/img/blog6.png";
import Blog7 from "./assets/img/blog7.png";

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
                    <a href="/blog/seo" className="blog-main-cont bm-r-cont">
                      <img src={Blog2} alt="" />
                      <div>
                        <h4>
                          SEO in the Age of AI: Navigating New Horizons in
                          Search Engine Optimization
                        </h4>
                        <a href="/blog/seo">
                          Read More <BsArrowRight />
                        </a>
                      </div>
                    </a>
                    <a href="/blog/ai" className="blog-main-cont bm-r-cont">
                      <img src={Blog1} alt="" />
                      <div>
                        <h4>The Rise of AI: Transforming Business in 2023</h4>
                        <a href="/blog/ai">
                          Read More <BsArrowRight />
                        </a>
                      </div>
                    </a>
                    <a
                      href="/blog/decoding"
                      className="blog-main-cont bm-r-cont"
                    >
                      <img src={Blog3} alt="" />
                      <div>
                        <h4>
                          Decoding the Success DNA: The Digital Landscape in
                          2023
                        </h4>
                        <a href="/blog/decoding">
                          Read More <BsArrowRight />
                        </a>
                      </div>
                    </a>
                    <a
                      href="/blog/quantum"
                      className="blog-main-cont bm-r-cont"
                    >
                      <img src={Blog4} alt="" />
                      <div>
                        <h4>Quantum Computing: The Next Frontier in 2023</h4>
                        <a href="/blog/quantum">
                          Read More <BsArrowRight />
                        </a>
                      </div>
                    </a>
                    <a
                      href="/blog/ar-trends"
                      className="blog-main-cont bm-r-cont"
                    >
                      <img src={Blog5} alt="" />
                      <div>
                        <h4>
                          Augmented Reality: Merging Digital and Physical Realms
                        </h4>
                        <a href="/blog/ar-trends">
                          Read More <BsArrowRight />
                        </a>
                      </div>
                    </a>
                    <a
                      href="/blog/cybersecurity"
                      className="blog-main-cont bm-r-cont"
                    >
                      <img src={Blog6} alt="" />
                      <div>
                        <h4>Cybersecurity: Fortifying the Digital Frontier</h4>
                        <a href="/blog/cybersecurity">
                          Read More <BsArrowRight />
                        </a>
                      </div>
                    </a>
                    <a
                      href="/blog/sustainable-tech"
                      className="blog-main-cont bm-r-cont"
                    >
                      <img src={Blog7} alt="" />
                      <div>
                        <h4>
                          Harnessing Green Innovation: The Sustainable Tech
                          Revolution
                        </h4>
                        <a href="/blog/sustainable-tech">
                          Read More <BsArrowRight />
                        </a>
                      </div>
                    </a>
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
