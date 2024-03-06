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

function ARtrends() {
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
                  <img src={Blog5} alt="" />
                  <a href="#">
                    <BsArrowLeft />
                    Blogs
                  </a>
                  <h1>
                    Augmented Reality: Merging Digital <br /> and Physical
                    Realms
                  </h1>
                  <p>
                    In 2023, augmented reality (AR) is not just a futuristic
                    concept but a tangible part of everyday life. It seamlessly
                    blends the digital and physical worlds, creating experiences
                    that are immersive and interactive.
                    <br />
                    <br />
                    The impact of AR technology is evident across various
                    sectors. In retail, it allows customers to visualize
                    products in their own space before making a purchase. In
                    education, AR brings learning to life, making complex
                    concepts easier to grasp.
                    <br />
                    <br />
                    The healthcare industry also benefits from AR. Surgeons use
                    it for intricate procedures, overlaying vital information
                    directly onto their field of view. This integration of
                    digital information with the real world enhances precision
                    and efficiency.
                    <br />
                    <br />
                    One of the key drivers of AR's growth is the advancement in
                    mobile technology. With smartphones becoming more powerful,
                    AR experiences are more accessible than ever. This ubiquity
                    is driving innovation and adoption across different
                    demographics.
                    <br />
                    <br />
                    However, the true potential of AR lies in its ability to
                    create a more connected and interactive world. From virtual
                    fitting rooms to interactive museum exhibits, AR is
                    redefining the way we interact with our surroundings.
                    <br />
                    <br />
                    As we look towards the future, the fusion of AR with other
                    emerging technologies like AI and IoT promises even more
                    exciting possibilities. The continued evolution of AR is not
                    just changing our digital interactions but reshaping our
                    physical world.
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
                    <a href="#">
                      View All <BsArrowRight />
                    </a>
                  </div>
                  <div className="blog-grid">
                    <div className="blog-grid-left">
                      <div className="blog-main-cont">
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
                      </div>
                    </div>
                    <div className="blog-grid-right bgr-home">
                      <div className="blog-main-cont bm-r-cont">
                        <img src={Blog1} alt="" />
                        <div>
                          <h4>The Rise of AI: Transforming Business in 2023</h4>
                          <a href="/blog/ai">
                            Read More <BsArrowRight />
                          </a>
                        </div>
                      </div>
                      <div className="blog-main-cont bm-r-cont">
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
                      </div>
                      <div className="blog-main-cont bm-r-cont">
                        <img src={Blog4} alt="" />
                        <div>
                          <h4>Quantum Computing: The Next Frontier in 2023</h4>
                          <a href="/blog/quantum">
                            Read More <BsArrowRight />
                          </a>
                        </div>
                      </div>
                      <div className="blog-main-cont bm-r-cont">
                        <img src={Blog5} alt="" />
                        <div>
                          <h4>
                            Augmented Reality: Merging Digital and Physical
                            Realms
                          </h4>
                          <a href="/blog/ar-trends">
                            Read More <BsArrowRight />
                          </a>
                        </div>
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
}
export default ARtrends;
