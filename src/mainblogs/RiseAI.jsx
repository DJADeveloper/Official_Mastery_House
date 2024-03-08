import React, { useEffect } from "react";
import "../home.css";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Blog1 from "../assets/img/blog1.png";
import Blog2 from "../assets/img/blog2.png";
import Blog3 from "../assets/img/blog3.png";
import Blog4 from "../assets/img/blog4.png";
import Blog5 from "../assets/img/blog5.png";

import {
  BsChevronRight,
  BsChevronLeft,
  BsArrowRight,
  BsArrowUpRight,
  BsArrowLeft,
  BsXLg,
  BsList,
} from "react-icons/bs";
import Header from "../components/Header";
import Marque from "../components/Marque";
import Booking from "../components/Booking";
import Footer from "../components/Footer";
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
import { Link } from "react-router-dom";

function RiseAI() {
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
            <section className="main-blog-section">
              <div className="main-blog-circle"></div>
              <div className="box">
                <div className="blog-page-cont">
                  <img src={Blog1} alt="" />
                  <a href="#">
                    <BsArrowLeft />
                    Blogs
                  </a>
                  <h1>The Rise of AI: Transforming Business in 2023</h1>
                  <h3>
                    Embracing the New Collaborator: Artificial Intelligence
                  </h3>
                  <h5>
                    In the bustling digital era, businesses are finding a new
                    ally in artificial intelligence (AI). Far from the cold,
                    metallic portrayal in science fiction, today's AI is like a
                    warm breeze, pushing enterprises towards uncharted realms of
                    efficiency and personalization.
                  </h5>
                  <p>
                    Imagine walking into an office where your coffee is brewed
                    just how you like it, thanks to a smart system that
                    remembers your preferences. Picture a conference room where
                    a virtual assistant not only takes notes but also offers
                    insights drawn from the latest market trends. This is the
                    business landscape of 2023, where AI is less of a tool and
                    more of a partner.
                    <br />
                    <br />
                    If you're new to technology, AI in 2023 is not about
                    overwhelming changes; it's about subtle enhancements that
                    make life simpler. For the tech-savvy, it's the advanced
                    algorithms that process data at breakneck speeds, offering
                    insights that inform strategic decisions.
                    <br />
                    <br />
                    Let's take a day in the life of a business in 2023. Morning
                    commutes are optimized by AI, reducing traffic and
                    pollution. At work, AI helps prioritize your tasks based on
                    your productivity patterns. In meetings, data analytics
                    powered by AI provide a backdrop for informed discussions.
                    <br />
                    <br />
                    The rise of AI in business is not just about smarter
                    machines; it's about a smarter way of working where everyone
                    can find value. Join us in embracing the rise of AI in 2023,
                    where business and technology walk hand in hand towards a
                    horizon brimming with possibilities.
                  </p>
                </div>
              </div>
            </section>
            <section className="blog-section">
              <div data-speed={0.5} className="blogcircle-1"></div>
              <div className="blogcircle-2"></div>
              <div className="box">
                <div className="blog-cont">
                  <div className="casestudy-head">
                    <h3 className="gradient-text">Read Our Blogs</h3>
                    <Link to="/blogs">
                      View All <BsArrowRight />
                    </Link>
                  </div>
                  <div className="blog-grid">
                    <div className="blog-grid-left">
                      <a href="/blogs/seo" className="blog-main-cont">
                        <img src={Blog2} alt="" />
                        <div>
                          <h4>
                            SEO in the Age of AI: Navigating New Horizons in
                            Search Engine Optimization
                          </h4>
                          <a href="/blogs/seo">
                            Read More <BsArrowRight />
                          </a>
                        </div>
                      </a>
                    </div>
                    <div className="blog-grid-right bgr-home">
                      <a href="/blogs/ai" className="blog-main-cont bm-r-cont">
                        <img src={Blog1} alt="" />
                        <div>
                          <h4>The Rise of AI: Transforming Business in 2023</h4>
                          <a href="/blogs/ai">
                            Read More <BsArrowRight />
                          </a>
                        </div>
                      </a>
                      <a
                        href="/blogs/decoding"
                        className="blog-main-cont bm-r-cont"
                      >
                        <img src={Blog3} alt="" />
                        <div>
                          <h4>
                            Decoding the Success DNA: The Digital Landscape in
                            2023
                          </h4>
                          <a href="/blogs/decoding">
                            Read More <BsArrowRight />
                          </a>
                        </div>
                      </a>
                      <a
                        href="/blogs/quantum"
                        className="blog-main-cont bm-r-cont"
                      >
                        <img src={Blog4} alt="" />
                        <div>
                          <h4>Quantum Computing: The Next Frontier in 2023</h4>
                          <a href="/blogs/quantum">
                            Read More <BsArrowRight />
                          </a>
                        </div>
                      </a>
                      <a
                        href="/blogs/ar-trends"
                        className="blog-main-cont bm-r-cont"
                      >
                        <img src={Blog5} alt="" />
                        <div>
                          <h4>
                            Augmented Reality: Merging Digital and Physical
                            Realms
                          </h4>
                          <a href="/blogs/ar-trends">
                            Read More <BsArrowRight />
                          </a>
                        </div>
                      </a>
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
}
export default RiseAI;
