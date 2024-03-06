import React, { useEffect } from "react";
import "../home.css";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Blog1 from "../assets/img/blog1.png";
import Blog2 from "../assets/img/blog2.png";
import Blog3 from "../assets/img/blog3.png";
import Blog4 from "../assets/img/blog4.png";
import Blog5 from "../assets/img/blog5.png";
import Blog7 from "../assets/img/blog7.png";

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

function Sustainabletech() {
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
                  <img src={Blog7} alt="" />
                  <a href="#">
                    <BsArrowLeft />
                    Blogs
                  </a>
                  <h1>
                    Harnessing Green Innovation: The Sustainable <br />
                    Tech Revolution
                  </h1>
                  <p>
                    The year 2023 marks a pivotal moment in the realm of
                    technology, where green innovation is not just a trend but a
                    necessity. As the world grapples with climate change,
                    sustainable technology is emerging as the beacon of hope.
                    <br />
                    <br />
                    This revolution is characterized by a surge in renewable
                    energy solutions, like solar panels and wind turbines, that
                    are becoming more efficient and affordable. These
                    technologies are essential in reducing our carbon footprint
                    and fostering a sustainable future.
                    <br />
                    <br />
                    In the automotive sector, electric vehicles (EVs) are at the
                    forefront of this change. With advancements in battery
                    technology, EVs are becoming more accessible, signaling a
                    significant shift away from fossil fuel dependence.
                    <br />
                    <br />
                    Green innovation is also evident in everyday gadgets. From
                    energy-saving smart home devices to biodegradable
                    electronics, technology is being reimagined with
                    sustainability at its core.
                    <br />
                    <br />
                    Beyond individual gadgets, the tech industry is also
                    witnessing a shift in its overall approach. Companies are
                    increasingly adopting circular economy principles, focusing
                    on sustainability in manufacturing processes and product
                    lifecycles.
                    <br />
                    <br />
                    The sustainable tech revolution is not just about creating
                    greener products; it's about transforming our mindset. It
                    encourages a holistic view of technology, where
                    environmental impact is as crucial as functionality and
                    design.
                    <br />
                    <br />
                    As we journey further into 2023, green innovation continues
                    to inspire and challenge us. It propels us towards a future
                    where technology and sustainability are inextricably linked,
                    driving positive change for our planet and generations to
                    come.
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
export default Sustainabletech;
