import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide
import { Navigation, Thumbs } from "swiper/modules"; // Import Swiper modules
import { useMediaQuery } from "react-responsive";
import "../home.css";
import ServiceImg from "../assets/img/serviceimg.png"; // Image representing Software Development
import ReactImg from "../assets/img/reactimg.svg";
import NextImg from "../assets/img/nextimg.svg";
import MUIImg from "../assets/img/material-ui-img.svg";
import TSImg from "../assets/img/typescriptimg.svg";
import Zepline from "../assets/img/zepline.svg";
import Flask from "../assets/img/flask.svg";
import Mat from "../assets/img/matlab.svg";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { FaNodeJs, FaPython, FaSwift } from "react-icons/fa6";

import Header from "../components/Header";
import Marque from "../components/Marque";
import Footer from "../components/Footer";
import Booking from "../components/Booking";

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

const SoftwareDevelopment = () => {
  gsap.registerPlugin(
    Draggable,
    SplitText,
    InertiaPlugin,
    ScrollSmoother,
    ScrollTrigger,
    DrawSVGPlugin
  );
  // State for Swiper thumbs
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // Media query to detect if the screen is mobile-sized
  const isMobile = useMediaQuery({ maxWidth: 767 });
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

    let about3CirclesAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-flex-box",
        start: "top 75%",
      },
    });

    about3CirclesAnim.fromTo(
      ".about-circle",
      {
        x: "-30px",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.085,
      }
    );
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
            <Header isActive="services" />

            {/* Software Development Section */}
            <section className="about-section">
              <div className="main-about-circle"></div>
              <div className="about-circle-2"></div>
              <div className="about-circle-3"></div>
              <div className="box">
                <div className="about-content service-content">
                  <div className="about-c-top">
                    <h4>Software Development Services</h4>
                    <h1 className="gradient-text">
                      Custom Software Development Solutions
                    </h1>
                    <p>
                      At The Mastery House, we specialize in delivering
                      <strong>custom software development services</strong>
                      tailored to your business needs. Our expertise spans
                      <strong>
                        enterprise software solutions, scalable software
                        development,
                      </strong>
                      and <strong>legacy system modernization</strong>. We
                      integrate the latest technologies to provide robust and
                      efficient software that drives business growth and
                      streamlines operations.
                    </p>
                  </div>
                  <img src={ServiceImg} alt="Software Development Services" />
                  <div className="about-flex service-flex">
                    <div className="about-flex-box">
                      <div className="about-circle about-circle1"></div>
                      <h3>Custom Software Development</h3>
                      <p>
                        Our custom software solutions are designed to align
                        perfectly with your business goals, enhancing
                        productivity and efficiency.
                      </p>
                    </div>
                    <div className="about-flex-box">
                      <div className="about-circle about-circle2"></div>
                      <h3>Enterprise Software Solutions</h3>
                      <p>
                        We build powerful enterprise applications that optimize
                        your business processes and improve overall efficiency.
                      </p>
                    </div>
                    <div className="about-flex-box">
                      <div className="about-circle about-circle3"></div>
                      <h3>System Integration Services</h3>
                      <p>
                        Seamlessly integrate new software with existing systems
                        to ensure smooth operations and enhanced performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="benefits-section">
              <div className="box">
                <div className="about-content">
                  <div className="about-c-top">
                    <h2 className="custom-h2 gradient-text">
                      Benefits of Choosing Our Web Development Services
                    </h2>
                    <p>
                      At The Mastery House, we deliver exceptional web
                      development services that not only meet your business
                      needs but also drive growth and success. Here are some of
                      the key benefits you will enjoy:
                    </p>
                  </div>
                  <div className="about-grid">
                    {/* Grid Layout for larger screens */}
                    <div className="about-grid-content">
                      <div className="ag-circle-1"></div>
                      <h5>Custom Solutions for Unique Challenges</h5>
                      <p>
                        At The Mastery House, we recognize that each business is
                        unique. Our web development services are tailored to
                        meet your specific needs, ensuring innovative,
                        efficient, and scalable solutions that directly address
                        your challenges.
                      </p>
                    </div>
                    <div className="about-grid-content agc-2">
                      <div className="ag-circle-2"></div>
                      <h5>Reduce Costs</h5>
                      <p>
                        By optimizing your web development processes, we help
                        reduce waste and improve productivity. Our efficient
                        development practices ensure that you get more out of
                        your existing resources, driving down costs while
                        delivering quality.
                      </p>
                    </div>
                    <div className="about-grid-content agc-3">
                      <div className="ag-circle-3"></div>
                      <h5>Drive Business Growth</h5>
                      <p>
                        Our focus is on building resilient, outcomes-driven web
                        solutions that attract and retain users. With a website
                        that effectively converts visitors into customers, we
                        help you drive sustained business growth.
                      </p>
                    </div>
                    {!isMobile && (
                      <>
                        <div className="about-grid-content">
                          <div className="ag-circle-1"></div>
                          <h5>Accelerate Innovation</h5>
                          <p>
                            Stay ahead of the competition with websites designed
                            to support rapid innovation. Our development teams
                            enhance your website's capabilities, improving
                            efficiency and reducing the time to market for new
                            features.
                          </p>
                        </div>
                        <div className="about-grid-content agc-2">
                          <div className="ag-circle-2"></div>
                          <h5>Enhance User Experience</h5>
                          <p>
                            We prioritize creating seamless and intuitive user
                            experiences that keep visitors engaged. By focusing
                            on usability and accessibility, we ensure that your
                            website provides a positive experience for all
                            users.
                          </p>
                        </div>
                        <div className="about-grid-content agc-3">
                          <div className="ag-circle-3"></div>
                          <h5>Boost SEO Performance</h5>
                          <p>
                            Our SEO-optimized web development practices ensure
                            that your website is easily discoverable by search
                            engines. Higher rankings lead to increased
                            visibility, driving more organic traffic to your
                            business.
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </section>
            {/* Technologies & Tools Section */}
            <section className="technologies-section">
              <div className="box">
                <div className="technologies-content">
                  <h3 className="gradient-text">Technologies & Tools We Use</h3>
                  <div className="technologies-tabs">
                    <Tabs
                      defaultActiveKey="Frontend"
                      id="uncontrolled-tab-example"
                    >
                      <Tab eventKey="Frontend" title="Frontend Development">
                        <div className="technologies-tabContent">
                          <p>
                            We use cutting-edge technologies to ensure an
                            exceptional user experience in our frontend
                            development.
                          </p>
                          <div className="technologies-box">
                            <div className="tb-box-img">
                              <img src={ReactImg} alt="React" />
                              <h4>React</h4>
                            </div>
                            <div className="tb-box-img">
                              <img src={NextImg} alt="Next.js" />
                              <h4>Next.js</h4>
                            </div>
                            <div className="tb-box-img">
                              <img src={MUIImg} alt="Material UI" />
                              <h4>Material UI</h4>
                            </div>
                            <div className="tb-box-img">
                              <img src={TSImg} alt="TypeScript" />
                              <h4>TypeScript</h4>
                            </div>
                          </div>
                        </div>
                      </Tab>
                      <Tab eventKey="Backend" title="Backend Development">
                        <div className="technologies-tabContent">
                          <p>
                            Our backend development ensures seamless data
                            management and integration for robust server-side
                            solutions.
                          </p>
                          <div className="technologies-box">
                            <div className="tb-box-img">
                              <FaPython />
                              <h4>Python</h4>
                            </div>
                            <div className="tb-box-img">
                              <FaNodeJs />
                              <h4>Node.js</h4>
                            </div>
                            <div className="tb-box-img">
                              <img src={Flask} alt="Flask" />
                              <h4>Flask</h4>
                            </div>
                          </div>
                        </div>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action Section */}
            <section className="getintouch-section">
              <div className="marquee-main-box">{/* <Marque /> */}</div>
            </section>

            {/* Booking and Footer Components */}
            <Booking />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDevelopment;
