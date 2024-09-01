import React, { useEffect } from "react";
import "../home.css";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Blog1 from "../assets/img/blog1.png";
import Blog2 from "../assets/img/blog2.png";
import Blog3 from "../assets/img/blog3.png";
import Blog4 from "../assets/img/blog4.png";
import Blog5 from "../assets/img/blog5.png";
import Blog8 from "../assets/img/blog8.png";

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
                  <img
                    src={Blog1}
                    alt="The Rise of AI: Transforming Business in 2025"
                  />
                  <Link to="/blogs">
                    <BsArrowLeft />
                    Blogs
                  </Link>
                  <h1>The Rise of AI: Transforming Business in 2025</h1>
                  <h3>
                    Embracing the New Collaborator: Artificial Intelligence
                  </h3>
                  <h5>
                    In today's rapidly evolving digital era, businesses are
                    discovering a powerful new ally in artificial intelligence
                    (AI). Contrary to the cold, mechanical image often portrayed
                    in science fiction, AI in 2025 is more like a warm, guiding
                    force—propelling enterprises toward new horizons of
                    efficiency, innovation, and personalization.
                  </h5>
                  <p>
                    Imagine stepping into an office where your coffee is brewed
                    precisely to your taste, thanks to an AI-driven system that
                    remembers your preferences. Envision a conference room where
                    a virtual assistant not only transcribes meeting notes but
                    also provides actionable insights based on real-time market
                    data. This is the business landscape of 2025, where AI has
                    transcended its role as a mere tool to become a strategic
                    partner in daily operations.
                    <br />
                    <br />
                    For those unfamiliar with the latest technological
                    advancements, the integration of AI in 2025 isn't about
                    overwhelming disruptions—it's about enhancing existing
                    processes to make life easier. For tech enthusiasts, it's
                    about leveraging sophisticated algorithms that analyze
                    massive datasets at lightning speed, offering valuable
                    insights that drive strategic business decisions.
                    <br />
                    <br />
                    Consider a typical day in the life of a modern business in
                    2025: Morning commutes are optimized by AI, reducing traffic
                    congestion and minimizing carbon footprints. Upon arrival at
                    the office, AI-powered tools prioritize your daily tasks
                    based on your productivity patterns, maximizing efficiency.
                    During meetings, AI-driven data analytics provide a
                    comprehensive backdrop, fostering informed and impactful
                    discussions.
                    <br />
                    <br />
                    The rise of AI in business is not just about deploying
                    smarter machines; it's about cultivating a more intelligent
                    approach to work—one where every stakeholder finds enhanced
                    value and productivity. As we move further into 2025,
                    embracing AI means aligning with a future where business and
                    technology coalesce seamlessly, opening up a world of
                    endless possibilities.
                    <br />
                    <br />
                    At The Mastery House, we understand the transformative power
                    of AI and its potential to redefine business landscapes. By
                    integrating AI-driven solutions into your operations, you
                    can not only streamline processes but also unlock new
                    avenues for growth and innovation. Join us on this exciting
                    journey and let's shape a smarter, more efficient future
                    together.
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
                      <Link
                        to="/blogs/automation-business"
                        className="blog-main-cont bm-r-cont"
                      >
                        <img src={Blog8} alt="" />
                        <div>
                          <h4>
                            How AI and Automation Can Transform Small Businesses
                          </h4>
                          <a href="/blogs/automation-business">
                            Read More <BsArrowRight />
                          </a>
                        </div>
                      </Link>
                    </div>
                    <div className="blog-grid-right bgr-home">
                      <Link to="/blogs/ai" className="blog-main-cont bm-r-cont">
                        <img src={Blog1} alt="" />
                        <div>
                          <h4>The Rise of AI: Transforming Business in 2025</h4>
                          <a href="/blogs/ai">
                            Read More <BsArrowRight />
                          </a>
                        </div>
                      </Link>
                      <Link
                        to="/blogs/decoding"
                        className="blog-main-cont bm-r-cont"
                      >
                        <img src={Blog3} alt="" />
                        <div>
                          <h4>
                            Decoding the Success DNA: The Digital Landscape in
                            2025
                          </h4>
                          <a href="/blogs/decoding">
                            Read More <BsArrowRight />
                          </a>
                        </div>
                      </Link>
                      <Link
                        to="/blogs/quantum"
                        className="blog-main-cont bm-r-cont"
                      >
                        <img src={Blog4} alt="" />
                        <div>
                          <h4>Quantum Computing: The Next Frontier in 2025</h4>
                          <a href="/blogs/quantum">
                            Read More <BsArrowRight />
                          </a>
                        </div>
                      </Link>
                      <Link
                        to="/blogs/ar-trends"
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
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="getintouch-section">
              <div className="marquee-main-box">{/* <Marque /> */}</div>
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
