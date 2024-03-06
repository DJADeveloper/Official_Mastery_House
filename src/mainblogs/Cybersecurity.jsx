import React, { useEffect } from "react";
import "../home.css";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Blog1 from "../assets/img/blog1.png";
import Blog2 from "../assets/img/blog2.png";
import Blog3 from "../assets/img/blog3.png";
import Blog4 from "../assets/img/blog4.png";
import Blog5 from "../assets/img/blog5.png";
import Blog6 from "../assets/img/blog6.png";

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

function Cybersecurity() {
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
                  <img src={Blog6} alt="" />
                  <a href="#">
                    <BsArrowLeft />
                    Blogs
                  </a>
                  <h1>Cybersecurity: Fortifying the Digital Frontier</h1>
                  <p>
                    As we delve deeper into 2023, the digital landscape has
                    become more complex and intertwined with our daily lives.
                    Cybersecurity is no longer a niche concern but a universal
                    imperative. The digital frontier is continuously evolving,
                    demanding adaptive and robust security measures.
                    <br />
                    <br />
                    The threat landscape is growing in sophistication, with
                    cybercriminals leveraging AI and machine learning to execute
                    attacks. This has prompted an arms race between threat
                    actors and defenders, with each side employing increasingly
                    advanced technology.
                    <br />
                    <br />
                    Organizations are now prioritizing the implementation of
                    comprehensive cybersecurity strategies. This involves not
                    only technological solutions like advanced firewalls and
                    intrusion detection systems but also a strong emphasis on
                    training employees to recognize and respond to cyber
                    threats.
                    <br />
                    <br />
                    Another critical aspect of fortifying the digital frontier
                    is the adoption of a proactive approach to security. This
                    means continuous monitoring, regular security assessments,
                    and the use of predictive analytics to identify potential
                    vulnerabilities before they can be exploited.
                    <br />
                    <br />
                    Privacy regulations and compliance standards are also
                    playing a significant role in shaping cybersecurity
                    practices. Companies are increasingly being held accountable
                    for protecting customer data, compelling them to adopt more
                    stringent security measures.
                    <br />
                    <br />
                    In conclusion, cybersecurity in 2023 is about resilience,
                    adaptability, and vigilance. It's a commitment to protecting
                    not just data and networks, but also the trust and wellbeing
                    of individuals and communities. As we continue to navigate
                    the digital age, fortifying the digital frontier is a
                    responsibility that falls on everyone – from individual
                    users to large organizations.
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
export default Cybersecurity;
