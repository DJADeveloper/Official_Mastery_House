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
                  <img src={Blog2} alt="" />
                  <a href="#">
                    <BsArrowLeft />
                    Blogs
                  </a>
                  <h1>
                    SEO in the Age of AI: Navigating New Horizons <br />
                    in Search Engine Optimization
                  </h1>
                  <p>
                    In the ever-evolving landscape of digital marketing, the
                    advent of artificial intelligence (AI) has heralded a new
                    era for search engine optimization (SEO). As AI becomes
                    increasingly integrated into search algorithms, it’s crucial
                    for businesses and marketers to understand and adapt to
                    these changes.
                    <br />
                    <br />
                    AI has transformed how search engines understand and rank
                    content. Google's AI algorithm, for example, now interprets
                    search queries with a level of understanding that mimics
                    human thought processes. This shift from keyword-centric SEO
                    to context and intent-based search has significant
                    implications for content creators and marketers.
                    <br />
                    <br />
                    The crux of modern SEO lies in understanding and matching
                    user intent. AI-powered search engines are adept at
                    discerning the underlying purpose of a query. Whether a user
                    is looking to buy, learn, or find a specific website, the
                    content that aligns closely with their intent ranks higher.
                    <br />
                    <br />
                    Despite the technological advancements, the core principle
                    of SEO remains unchanged – quality content is king. Content
                    that is well-researched, informative, and engaging will
                    continue to rank well. The difference lies in how you tailor
                    this content to align with AI-driven search parameters.
                    <br />
                    <br />
                    Navigating SEO in the age of AI requires a blend of adapting
                    to new technologies and adhering to timeless content
                    creation principles. By understanding and leveraging AI's
                    role in search engines, focusing on user intent, and
                    consistently creating high-quality, relevant content,
                    marketers can effectively optimize their digital presence in
                    this new era.
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
export default Seo;
