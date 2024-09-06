import React, { useEffect } from "react";
import "../../home.css";
import Case1 from "../../assets/img/portfolio1.png";
import CaseLogo1 from "../../assets/img/ikea.png";
import MacMockUp from "../../assets/img/mac-mockup.png";
import csProfile from "../../assets/img/csprofile.png";
import SemiColon from "../../assets/img/semicolon.svg";

// fake routes - delete later
import ReactImg from "../../assets/img/reactimg.svg";
import NextImg from "../../assets/img/nextimg.svg";
import MUIImg from "../../assets/img/material-ui-img.svg";
import TSImg from "../../assets/img/typescriptimg.svg";

import { BsArrowUpRight } from "react-icons/bs";
import Header from "../../components/Header";
import Marque from "../../components/Marque";
import Booking from "../../components/Booking";
import Footer from "../../components/Footer";
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
import { Tab, Tabs } from "react-bootstrap";
import { FaNodeJs, FaPython, FaSwift } from "react-icons/fa6";
import Testimonials from "../../components/Testimonials";

const Process = () => {
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
    let caseStudyBorderAnim1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".msb-1",
        start: "top 75%",
      },
    });
    caseStudyBorderAnim1
      .fromTo(
        ".msbc-1 .hor-line",
        {
          width: 0,
        },
        {
          width: "100%",
          duration: 0.5,
        }
      )
      .fromTo(
        ".msbc-2 .hor-line",
        {
          width: 0,
        },
        {
          width: "100%",
          duration: 0.5,
        },
        0
      )
      .fromTo(
        ".msbc-1 .ver-line",
        {
          height: 0,
        },
        {
          height: "100%",
          duration: 0.5,
        }
      )
      .fromTo(
        ".msbc-2 .ver-line",
        {
          height: 0,
        },
        {
          height: "100%",
          duration: 0.5,
        },
        "<0"
      );

    let caseStudyBorderAnim2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".msb-2",
        start: "top 75%",
      },
    });
    caseStudyBorderAnim2
      .fromTo(
        ".msbc-3 .ver-line",
        {
          height: 0,
        },
        {
          height: "100%",
          duration: 0.5,
        }
      )
      .fromTo(
        ".msbc-4 .ver-line",
        {
          height: 0,
        },
        {
          height: "100%",
          duration: 0.5,
        },
        0
      )

      .fromTo(
        ".msbc-3 .hor-line",
        {
          width: 0,
        },
        {
          width: "100%",
          duration: 0.5,
        }
      )
      .fromTo(
        ".msbc-4 .hor-line",
        {
          width: 0,
        },
        {
          width: "100%",
          duration: 0.5,
        },
        "<0"
      );
  }, []);
  return (
    <div className="masteryhouse">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="homepage" id="home_page">
            <div className="circle-1"></div>
            <div className="circle-2"></div>
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

            <section className="about-section">
              <div className="about-c-top">
                <h4>Our Proven Process</h4>
                <h3 className="gradient-text custom-h3">
                  Transforming Challenges into Opportunities <br /> with a
                  Strategic Approach
                </h3>
              </div>
              <div className="box">
                <div className="main-home-circle"></div>
                <div className="casestudy-cont ">
                  <div className="steps-to-follow-box">
                    <div className="main-steps-box msb-1">
                      <div className="ms-box-content msbc-1">
                        <div className="hor-line"></div>
                        <div className="ver-line"></div>
                        <h4 className="gradient-text">
                          1. Initial Discovery & Consultation
                        </h4>
                        <p>
                          Our journey begins with a thorough discovery session.
                          We dive deep into understanding your business
                          objectives, pain points, and the specific challenges
                          you face. This helps us tailor our approach to meet
                          your unique needs and set a solid foundation for the
                          project.
                        </p>
                      </div>
                      <div className="ms-box-content msbc-2">
                        <div className="hor-line"></div>
                        <div className="ver-line"></div>
                        <h4 className="gradient-text">
                          2. Strategy & Roadmap Development
                        </h4>
                        <p>
                          Based on insights gathered, we develop a strategic
                          roadmap outlining the solutions best suited to achieve
                          your goals. This includes selecting the right
                          technologies, defining clear milestones, and ensuring
                          all steps align with your vision for growth and
                          efficiency.
                        </p>
                      </div>
                    </div>
                    <img src={MacMockUp} alt="Laptop Mockup" />
                    <div className="main-steps-box msb-2">
                      <div className="ms-box-content msbc-3">
                        <div className="hor-line"></div>
                        <div className="ver-line"></div>
                        <h4 className="gradient-text">
                          3. Solution Design & Development
                        </h4>
                        <p>
                          With a roadmap in hand, we move into the design and
                          development phase. Here, we create custom solutions
                          that are scalable, secure, and seamlessly integrate
                          with your existing systems, ensuring a smooth
                          transition and minimal disruption to your daily
                          operations.
                        </p>
                      </div>
                      <div className="ms-box-content msbc-4">
                        <div className="hor-line"></div>
                        <div className="ver-line"></div>
                        <h4 className="gradient-text">
                          4. Implementation & Optimization
                        </h4>
                        <p>
                          The final phase is all about execution. We deploy the
                          solutions with precision, ensuring everything
                          functions perfectly. Post-deployment, we monitor
                          performance closely and optimize as needed to ensure
                          you get the maximum benefit from the new system.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <Testimonials />
                    <div className="testi-circle"></div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Process;
