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

function Seo() {
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
                    src={Blog2}
                    alt="SEO in the Age of AI: Navigating New Horizons in Search Engine Optimization"
                  />
                  <Link to="/blogs">
                    <BsArrowLeft />
                    Blogs
                  </Link>
                  <h1>
                    SEO in the Age of AI: Navigating New Horizons <br />
                    in Search Engine Optimization
                  </h1>
                  <p>
                    In the ever-evolving landscape of digital marketing, the
                    integration of artificial intelligence (AI) has ushered in a
                    transformative era for search engine optimization (SEO). As
                    AI becomes more deeply embedded in search algorithms,
                    businesses and marketers must navigate these changes to
                    maintain and enhance their digital visibility.
                    <br />
                    <br />
                    The rise of AI has fundamentally changed how search engines
                    interpret and rank content. For instance, Google's advanced
                    AI algorithms now analyze search queries with a human-like
                    understanding, focusing on context and user intent rather
                    than just keywords. This shift from a keyword-centric
                    approach to one that prioritizes semantic search and user
                    intent presents new opportunities and challenges for content
                    creators and digital marketers.
                    <br />
                    <br />
                    The cornerstone of modern SEO strategies is now
                    understanding and anticipating user intent. AI-powered
                    search engines excel at interpreting the purpose behind each
                    query—whether a user seeks to purchase a product, gain
                    knowledge, or find specific information. Content that
                    effectively aligns with this intent is more likely to
                    achieve higher rankings in search results.
                    <br />
                    <br />
                    Despite the technological advancements, the foundational
                    principle of SEO remains unchanged: "Content is King."
                    However, in the age of AI, the approach to creating content
                    has evolved. High-quality, well-researched, and engaging
                    content continues to perform well, but it must now be
                    optimized for AI-driven search algorithms that value
                    context, relevance, and user engagement over traditional
                    keyword stuffing.
                    <br />
                    <br />
                    Navigating SEO in the age of AI requires a strategic blend
                    of embracing cutting-edge technologies and adhering to
                    timeless content creation principles. By leveraging AI's
                    capabilities in search engines, focusing on delivering
                    value-driven content that meets user intent, and maintaining
                    a commitment to producing high-quality, relevant material,
                    businesses can thrive in this dynamic digital environment.
                    <br />
                    <br />
                    At The Mastery House, we specialize in crafting SEO
                    strategies that are not only aligned with the latest
                    technological advancements but also rooted in a deep
                    understanding of digital marketing fundamentals. Let us help
                    you optimize your digital presence and stay ahead in the age
                    of AI-driven SEO.
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
export default Seo;
