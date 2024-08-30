import React, { useEffect } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import Case1 from "./assets/img/case1.png";
import CaseLogo1 from "./assets/img/ikea.png";

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
import Header from "./components/Header";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import { Tab, Tabs } from "react-bootstrap";

// SOFTWARE PROJECTS
import softwareProject1 from "../src/assets/projectImages/saim/Extract.png";
import softwareProject2 from "../src/assets/projectImages/saim/Musee.png";
import softwareProject3 from "../src/assets/projectImages/saim/Ovili nest.png";
import softwareProject5 from "../src/assets/largerProjectImages/Outkast.png";
import softwareProject6 from "../src/assets/projectImages/saim/outkast2.png";

import softwareProject8 from "../src/assets/largerProjectImages/uptrend-agency-1.png";
import softwareProject9 from "../src/assets/projectImages/saim/Sleek Geek.png";

// AI PROJECTS
import aiProject1 from "../src/assets/largerProjectImages/unchained-robotics.png";
import aiProject2 from "../src/assets/projectImages/saim/maester ai.png";

// Blockchain Projects

// Mobile Projects
import mobileProject1 from "../src/assets/projectImages/saim/SweetSpot.png";
import mobileProject2 from "../src/assets/projectImages/saim/hitpikr.png";
import mobileProject3 from "../src/assets/projectImages/jobskuyy/jobskuyy-banner.png";

// Web Development

import webDevProject1 from "../src/assets/projectImages/unifit/unifit-banner.png";
import webDevProject2 from "../src/assets/projectImages/nwm/nwm-banner.png";
import webDevProject3 from "../src/assets/projectImages/definitity/definity-banner.png";
// import webDevProject4 from "../src/assets/projectImages/.png";

// Business Automation

import ReactImg from "./assets/img/reactimg.svg";
import NextImg from "./assets/img/nextimg.svg";
import MUIImg from "./assets/img/material-ui-img.svg";
import TSImg from "./assets/img/typescriptimg.svg";

const Maincasestudy = () => {
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
  });

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
            {/* <Header isActive="casestudy" /> */}

            <section
              className="casestudy-section casestudy-main-page"
              id="casestudy"
            >
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="774"
                height="774"
                fill="none"
                viewBox="0 0 774 774"
                className="case-circle1"
              >
                <circle
                  cx="387"
                  cy="387"
                  r="386.5"
                  stroke="rgba(255,255,255,0.25)"
                ></circle>
              </svg> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="774"
                height="774"
                fill="none"
                viewBox="0 0 774 774"
                className="case-circle2"
              >
                <circle
                  cx="387"
                  cy="387"
                  r="386.5"
                  stroke="rgba(255,255,255,0.25)"
                ></circle>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="774"
                height="774"
                fill="none"
                viewBox="0 0 774 774"
                className="case-circle3"
              >
                <circle
                  cx="387"
                  cy="387"
                  r="386.5"
                  stroke="rgba(255,255,255,0.25)"
                ></circle>
              </svg>

              <section className="technologies-section">
                <div className="box">
                  <div className="technologies-content">
                    <h3 className="gradient-text">Case Studies</h3>
                    <div className="technologies-tabs">
                      <Tabs
                        defaultActiveKey="software"
                        id="uncontrolled-tab-example"
                      >
                        <Tab eventKey="software" title="Software Development">
                          <div className="technologies-tabContent">
                            <div className="casestudy-main">
                              <div className="cs-main-grid">
                                <div className="cs-main-right">
                                  <img src={softwareProject1} alt="" />
                                </div>
                                {/*  */}
                                <div className="cs-main-left">
                                  <img src={CaseLogo1} alt="" />
                                  <p>
                                    Deploying IoT-powered kiosks integrated with
                                    a custom ERP solution, we enhanced IKEA’s
                                    customer onboarding, product exploration,
                                    and data-driven marketing.{" "}
                                  </p>
                                  <div className="ind-serv-box">
                                    <span>
                                      Industry <h6>Retail</h6>
                                    </span>
                                    <span>
                                      Services{" "}
                                      <h6>
                                        Blockchain Development, Deployment
                                      </h6>
                                    </span>
                                  </div>
                                  <div className="cs-main-btn">
                                    <div className="service-btn">
                                      <Link to="/casestudy1">
                                        <div className="inner-service-btn">
                                          <span>
                                            Learn More <BsArrowUpRight />
                                          </span>
                                        </div>
                                      </Link>
                                    </div>
                                    <Link to="/">
                                      <h5>
                                        Visit Website <BsArrowUpRight />
                                      </h5>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              {/*  */}
                              <div className="cs-main-grid middle-main-grid">
                                <div className="cs-main-left">
                                  <img src={CaseLogo1} alt="" />
                                  <p>
                                    Deploying IoT-powered kiosks integrated with
                                    a custom ERP solution, we enhanced IKEA’s
                                    customer onboarding, product exploration,
                                    and data-driven marketing.{" "}
                                  </p>
                                  <div className="ind-serv-box">
                                    <span>
                                      Industry <h6>Retail</h6>
                                    </span>
                                    <span>
                                      Services{" "}
                                      <h6>
                                        Blockchain Development, Deployment
                                      </h6>
                                    </span>
                                  </div>
                                  <div className="cs-main-btn">
                                    <div className="service-btn">
                                      <Link to="/casestudy1">
                                        <div className="inner-service-btn">
                                          <span>
                                            Learn More <BsArrowUpRight />
                                          </span>
                                        </div>
                                      </Link>
                                    </div>
                                    <Link to="/">
                                      <h5>
                                        Visit Website <BsArrowUpRight />
                                      </h5>
                                    </Link>
                                  </div>
                                </div>
                                <div className="cs-main-right">
                                  <img src={softwareProject2} alt="" />
                                </div>
                              </div>
                              {/*  */}
                              <div className="cs-main-grid">
                                <div className="cs-main-right">
                                  <img src={softwareProject3} alt="" />
                                </div>
                                <div className="cs-main-left">
                                  <img src={CaseLogo1} alt="" />
                                  <p>
                                    Deploying IoT-powered kiosks integrated with
                                    a custom ERP solution, we enhanced IKEA’s
                                    customer onboarding, product exploration,
                                    and data-driven marketing.{" "}
                                  </p>
                                  <div className="ind-serv-box">
                                    <span>
                                      Industry <h6>Retail</h6>
                                    </span>
                                    <span>
                                      Services{" "}
                                      <h6>
                                        Blockchain Development, Deployment
                                      </h6>
                                    </span>
                                  </div>
                                  <div className="cs-main-btn">
                                    <div className="service-btn">
                                      <Link to="/casestudy1">
                                        <div className="inner-service-btn">
                                          <span>
                                            Learn More <BsArrowUpRight />
                                          </span>
                                        </div>
                                      </Link>
                                    </div>
                                    <Link to="/">
                                      <h5>
                                        Visit Website <BsArrowUpRight />
                                      </h5>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              {/*  */}
                              <div className="cs-main-grid middle-main-grid">
                                <div className="cs-main-left">
                                  <img src={CaseLogo1} alt="" />
                                  <p>
                                    Deploying IoT-powered kiosks integrated with
                                    a custom ERP solution, we enhanced IKEA’s
                                    customer onboarding, product exploration,
                                    and data-driven marketing.{" "}
                                  </p>
                                  <div className="ind-serv-box">
                                    <span>
                                      Industry <h6>Retail</h6>
                                    </span>
                                    <span>
                                      Services{" "}
                                      <h6>
                                        Blockchain Development, Deployment
                                      </h6>
                                    </span>
                                  </div>
                                  <div className="cs-main-btn">
                                    <div className="service-btn">
                                      <Link to="/casestudy1">
                                        <div className="inner-service-btn">
                                          <span>
                                            Learn More <BsArrowUpRight />
                                          </span>
                                        </div>
                                      </Link>
                                    </div>
                                    <Link to="/">
                                      <h5>
                                        Visit Website <BsArrowUpRight />
                                      </h5>
                                    </Link>
                                  </div>
                                </div>
                                <div className="cs-main-right">
                                  <img src={softwareProject9} alt="" />
                                </div>
                              </div>
                              {/*  */}
                              <div className="cs-main-grid">
                                <div className="cs-main-right">
                                  <img src={softwareProject5} alt="" />
                                </div>
                                <div className="cs-main-left">
                                  <img src={CaseLogo1} alt="" />
                                  <p>
                                    Deploying IoT-powered kiosks integrated with
                                    a custom ERP solution, we enhanced IKEA’s
                                    customer onboarding, product exploration,
                                    and data-driven marketing.{" "}
                                  </p>
                                  <div className="ind-serv-box">
                                    <span>
                                      Industry <h6>Retail</h6>
                                    </span>
                                    <span>
                                      Services{" "}
                                      <h6>
                                        Blockchain Development, Deployment
                                      </h6>
                                    </span>
                                  </div>
                                  <div className="cs-main-btn">
                                    <div className="service-btn">
                                      <Link to="/casestudy1">
                                        <div className="inner-service-btn">
                                          <span>
                                            Learn More <BsArrowUpRight />
                                          </span>
                                        </div>
                                      </Link>
                                    </div>
                                    <Link to="/">
                                      <h5>
                                        Visit Website <BsArrowUpRight />
                                      </h5>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Tab>
                        <Tab eventKey="Web Development" title="Web Development">
                          <div className="technologies-tabContent">
                            <div className="casestudy-main">
                              <div className="cs-main-grid">
                                <div className="cs-main-right">
                                  <img src={webDevProject1} alt="" />
                                </div>
                                <div className="cs-main-left">
                                  <img src={CaseLogo1} alt="" />
                                  <p>
                                    Deploying IoT-powered kiosks integrated with
                                    a custom ERP solution, we enhanced IKEA’s
                                    customer onboarding, product exploration,
                                    and data-driven marketing.{" "}
                                  </p>
                                  <div className="ind-serv-box">
                                    <span>
                                      Industry <h6>Retail</h6>
                                    </span>
                                    <span>
                                      Services{" "}
                                      <h6>
                                        Blockchain Development, Deployment
                                      </h6>
                                    </span>
                                  </div>
                                  <div className="cs-main-btn">
                                    <div className="service-btn">
                                      <Link to="/casestudy1">
                                        <div className="inner-service-btn">
                                          <span>
                                            Learn More <BsArrowUpRight />
                                          </span>
                                        </div>
                                      </Link>
                                    </div>
                                    <Link to="/">
                                      <h5>
                                        Visit Website <BsArrowUpRight />
                                      </h5>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="cs-main-grid middle-main-grid">
                                <div className="cs-main-left">
                                  <img src={CaseLogo1} alt="" />
                                  <p>
                                    Deploying IoT-powered kiosks integrated with
                                    a custom ERP solution, we enhanced IKEA’s
                                    customer onboarding, product exploration,
                                    and data-driven marketing.{" "}
                                  </p>
                                  <div className="ind-serv-box">
                                    <span>
                                      Industry <h6>Retail</h6>
                                    </span>
                                    <span>
                                      Services{" "}
                                      <h6>
                                        Blockchain Development, Deployment
                                      </h6>
                                    </span>
                                  </div>
                                  <div className="cs-main-btn">
                                    <div className="service-btn">
                                      <Link to="/casestudy1">
                                        <div className="inner-service-btn">
                                          <span>
                                            Learn More <BsArrowUpRight />
                                          </span>
                                        </div>
                                      </Link>
                                    </div>
                                    <Link to="/">
                                      <h5>
                                        Visit Website <BsArrowUpRight />
                                      </h5>
                                    </Link>
                                  </div>
                                </div>
                                <div className="cs-main-right">
                                  <img src={webDevProject2} alt="" />
                                </div>
                              </div>
                              <div className="cs-main-grid">
                                <div className="cs-main-right">
                                  <img src={webDevProject3} alt="" />
                                </div>
                                <div className="cs-main-left">
                                  <img src={CaseLogo1} alt="" />
                                  <p>
                                    Deploying IoT-powered kiosks integrated with
                                    a custom ERP solution, we enhanced IKEA’s
                                    customer onboarding, product exploration,
                                    and data-driven marketing.{" "}
                                  </p>
                                  <div className="ind-serv-box">
                                    <span>
                                      Industry <h6>Retail</h6>
                                    </span>
                                    <span>
                                      Services{" "}
                                      <h6>
                                        Blockchain Development, Deployment
                                      </h6>
                                    </span>
                                  </div>
                                  <div className="cs-main-btn">
                                    <div className="service-btn">
                                      <Link to="/casestudy1">
                                        <div className="inner-service-btn">
                                          <span>
                                            Learn More <BsArrowUpRight />
                                          </span>
                                        </div>
                                      </Link>
                                    </div>
                                    <Link to="/">
                                      <h5>
                                        Visit Website <BsArrowUpRight />
                                      </h5>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              {/* <div className="cs-main-grid middle-main-grid">
                                <div className="cs-main-left">
                                  <img src={CaseLogo1} alt="" />
                                  <p>
                                    Deploying IoT-powered kiosks integrated with
                                    a custom ERP solution, we enhanced IKEA’s
                                    customer onboarding, product exploration,
                                    and data-driven marketing.{" "}
                                  </p>
                                  <div className="ind-serv-box">
                                    <span>
                                      Industry <h6>Retail</h6>
                                    </span>
                                    <span>
                                      Services{" "}
                                      <h6>
                                        Blockchain Development, Deployment
                                      </h6>
                                    </span>
                                  </div>
                                  <div className="cs-main-btn">
                                    <div className="service-btn">
                                      <Link to="/casestudy1">
                                        <div className="inner-service-btn">
                                          <span>
                                            Learn More <BsArrowUpRight />
                                          </span>
                                        </div>
                                      </Link>
                                    </div>
                                    <Link to="/">
                                      <h5>
                                        Visit Website <BsArrowUpRight />
                                      </h5>
                                    </Link>
                                  </div>
                                </div>
                                <div className="cs-main-right">
                                  <img src={webDevProject4} alt="" />
                                </div>
                              </div> */}
                              {/* <div className="cs-main-grid">
                                <div className="cs-main-right">
                                  <img src={webDevProject4} alt="" />
                                </div>
                                <div className="cs-main-left">
                                  <img src={CaseLogo1} alt="" />
                                  <p>
                                    Deploying IoT-powered kiosks integrated with
                                    a custom ERP solution, we enhanced IKEA’s
                                    customer onboarding, product exploration,
                                    and data-driven marketing.{" "}
                                  </p>
                                  <div className="ind-serv-box">
                                    <span>
                                      Industry <h6>Retail</h6>
                                    </span>
                                    <span>
                                      Services{" "}
                                      <h6>
                                        Blockchain Development, Deployment
                                      </h6>
                                    </span>
                                  </div>
                                  <div className="cs-main-btn">
                                    <div className="service-btn">
                                      <Link to="/casestudy1">
                                        <div className="inner-service-btn">
                                          <span>
                                            Learn More <BsArrowUpRight />
                                          </span>
                                        </div>
                                      </Link>
                                    </div>
                                    <Link to="/">
                                      <h5>
                                        Visit Website <BsArrowUpRight />
                                      </h5>
                                    </Link>
                                  </div>
                                </div>
                              </div> */}
                            </div>
                          </div>
                        </Tab>
                        {/* <Tab
                          eventKey="Business Automation"
                          title="Business Automation"
                        >
                          <div className="technologies-tabContent">
                            <div className="casestudy-main">
                              <div className="cs-main-grid">
                                <div className="cs-main-right">
                                  <img src={softwareProject4} alt="" />
                                </div>
                                <div className="cs-main-left">
                                  <img src={CaseLogo1} alt="" />
                                  <p>
                                    Deploying IoT-powered kiosks integrated with
                                    a custom ERP solution, we enhanced IKEA’s
                                    customer onboarding, product exploration,
                                    and data-driven marketing.{" "}
                                  </p>
                                  <div className="ind-serv-box">
                                    <span>
                                      Industry <h6>Retail</h6>
                                    </span>
                                    <span>
                                      Services{" "}
                                      <h6>
                                        Blockchain Development, Deployment
                                      </h6>
                                    </span>
                                  </div>
                                  <div className="cs-main-btn">
                                    <div className="service-btn">
                                      <Link to="/casestudy1">
                                        <div className="inner-service-btn">
                                          <span>
                                            Learn More <BsArrowUpRight />
                                          </span>
                                        </div>
                                      </Link>
                                    </div>
                                    <Link to="/">
                                      <h5>
                                        Visit Website <BsArrowUpRight />
                                      </h5>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="cs-main-grid middle-main-grid">
                                <div className="cs-main-left">
                                  <img src={CaseLogo1} alt="" />
                                  <p>
                                    Deploying IoT-powered kiosks integrated with
                                    a custom ERP solution, we enhanced IKEA’s
                                    customer onboarding, product exploration,
                                    and data-driven marketing.{" "}
                                  </p>
                                  <div className="ind-serv-box">
                                    <span>
                                      Industry <h6>Retail</h6>
                                    </span>
                                    <span>
                                      Services{" "}
                                      <h6>
                                        Blockchain Development, Deployment
                                      </h6>
                                    </span>
                                  </div>
                                  <div className="cs-main-btn">
                                    <div className="service-btn">
                                      <Link to="/casestudy1">
                                        <div className="inner-service-btn">
                                          <span>
                                            Learn More <BsArrowUpRight />
                                          </span>
                                        </div>
                                      </Link>
                                    </div>
                                    <Link to="/">
                                      <h5>
                                        Visit Website <BsArrowUpRight />
                                      </h5>
                                    </Link>
                                  </div>
                                </div>
                                <div className="cs-main-right">
                                  <img src={softwareProject4} alt="" />
                                </div>
                              </div>
                              <div className="cs-main-grid">
                                <div className="cs-main-right">
                                  <img src={softwareProject4} alt="" />
                                </div>
                                <div className="cs-main-left">
                                  <img src={CaseLogo1} alt="" />
                                  <p>
                                    Deploying IoT-powered kiosks integrated with
                                    a custom ERP solution, we enhanced IKEA’s
                                    customer onboarding, product exploration,
                                    and data-driven marketing.{" "}
                                  </p>
                                  <div className="ind-serv-box">
                                    <span>
                                      Industry <h6>Retail</h6>
                                    </span>
                                    <span>
                                      Services{" "}
                                      <h6>
                                        Blockchain Development, Deployment
                                      </h6>
                                    </span>
                                  </div>
                                  <div className="cs-main-btn">
                                    <div className="service-btn">
                                      <Link to="/casestudy1">
                                        <div className="inner-service-btn">
                                          <span>
                                            Learn More <BsArrowUpRight />
                                          </span>
                                        </div>
                                      </Link>
                                    </div>
                                    <Link to="/">
                                      <h5>
                                        Visit Website <BsArrowUpRight />
                                      </h5>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="cs-main-grid middle-main-grid">
                                <div className="cs-main-left">
                                  <img src={CaseLogo1} alt="" />
                                  <p>
                                    Deploying IoT-powered kiosks integrated with
                                    a custom ERP solution, we enhanced IKEA’s
                                    customer onboarding, product exploration,
                                    and data-driven marketing.{" "}
                                  </p>
                                  <div className="ind-serv-box">
                                    <span>
                                      Industry <h6>Retail</h6>
                                    </span>
                                    <span>
                                      Services{" "}
                                      <h6>
                                        Blockchain Development, Deployment
                                      </h6>
                                    </span>
                                  </div>
                                  <div className="cs-main-btn">
                                    <div className="service-btn">
                                      <Link to="/casestudy1">
                                        <div className="inner-service-btn">
                                          <span>
                                            Learn More <BsArrowUpRight />
                                          </span>
                                        </div>
                                      </Link>
                                    </div>
                                    <Link to="/">
                                      <h5>
                                        Visit Website <BsArrowUpRight />
                                      </h5>
                                    </Link>
                                  </div>
                                </div>
                                <div className="cs-main-right">
                                  <img src={softwareProject5} alt="" />
                                </div>
                              </div>
                              <div className="cs-main-grid">
                                <div className="cs-main-right">
                                  <img src={softwareProject5} alt="" />
                                </div>
                                <div className="cs-main-left">
                                  <img src={CaseLogo1} alt="" />
                                  <p>
                                    Deploying IoT-powered kiosks integrated with
                                    a custom ERP solution, we enhanced IKEA’s
                                    customer onboarding, product exploration,
                                    and data-driven marketing.{" "}
                                  </p>
                                  <div className="ind-serv-box">
                                    <span>
                                      Industry <h6>Retail</h6>
                                    </span>
                                    <span>
                                      Services{" "}
                                      <h6>
                                        Blockchain Development, Deployment
                                      </h6>
                                    </span>
                                  </div>
                                  <div className="cs-main-btn">
                                    <div className="service-btn">
                                      <Link to="/casestudy1">
                                        <div className="inner-service-btn">
                                          <span>
                                            Learn More <BsArrowUpRight />
                                          </span>
                                        </div>
                                      </Link>
                                    </div>
                                    <Link to="/">
                                      <h5>
                                        Visit Website <BsArrowUpRight />
                                      </h5>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Tab> */}
                        <Tab
                          eventKey="Mobile Development"
                          title="Mobile Development"
                        >
                          <div className="technologies-tabContent">
                            <div className="casestudy-main">
                              <div className="cs-main-grid">
                                <div className="cs-main-right">
                                  <img src={mobileProject1} alt="" />
                                </div>
                                <div className="cs-main-left">
                                  <img src={CaseLogo1} alt="" />
                                  <p>
                                    Deploying IoT-powered kiosks integrated with
                                    a custom ERP solution, we enhanced IKEA’s
                                    customer onboarding, product exploration,
                                    and data-driven marketing.{" "}
                                  </p>
                                  <div className="ind-serv-box">
                                    <span>
                                      Industry <h6>Retail</h6>
                                    </span>
                                    <span>
                                      Services{" "}
                                      <h6>
                                        Blockchain Development, Deployment
                                      </h6>
                                    </span>
                                  </div>
                                  <div className="cs-main-btn">
                                    <div className="service-btn">
                                      <Link to="/casestudy1">
                                        <div className="inner-service-btn">
                                          <span>
                                            Learn More <BsArrowUpRight />
                                          </span>
                                        </div>
                                      </Link>
                                    </div>
                                    <Link to="/">
                                      <h5>
                                        Visit Website <BsArrowUpRight />
                                      </h5>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="cs-main-grid middle-main-grid">
                                <div className="cs-main-left">
                                  <img src={CaseLogo1} alt="" />
                                  <p>
                                    Deploying IoT-powered kiosks integrated with
                                    a custom ERP solution, we enhanced IKEA’s
                                    customer onboarding, product exploration,
                                    and data-driven marketing.{" "}
                                  </p>
                                  <div className="ind-serv-box">
                                    <span>
                                      Industry <h6>Retail</h6>
                                    </span>
                                    <span>
                                      Services{" "}
                                      <h6>
                                        Blockchain Development, Deployment
                                      </h6>
                                    </span>
                                  </div>
                                  <div className="cs-main-btn">
                                    <div className="service-btn">
                                      <Link to="/casestudy1">
                                        <div className="inner-service-btn">
                                          <span>
                                            Learn More <BsArrowUpRight />
                                          </span>
                                        </div>
                                      </Link>
                                    </div>
                                    <Link to="/">
                                      <h5>
                                        Visit Website <BsArrowUpRight />
                                      </h5>
                                    </Link>
                                  </div>
                                </div>
                                <div className="cs-main-right">
                                  <img src={mobileProject2} alt="" />
                                </div>
                              </div>
                              <div className="cs-main-grid">
                                <div className="cs-main-right">
                                  <img src={mobileProject3} alt="" />
                                </div>
                                <div className="cs-main-left">
                                  <img src={CaseLogo1} alt="" />
                                  <p>
                                    Deploying IoT-powered kiosks integrated with
                                    a custom ERP solution, we enhanced IKEA’s
                                    customer onboarding, product exploration,
                                    and data-driven marketing.{" "}
                                  </p>
                                  <div className="ind-serv-box">
                                    <span>
                                      Industry <h6>Retail</h6>
                                    </span>
                                    <span>
                                      Services{" "}
                                      <h6>
                                        Blockchain Development, Deployment
                                      </h6>
                                    </span>
                                  </div>
                                  <div className="cs-main-btn">
                                    <div className="service-btn">
                                      <Link to="/casestudy1">
                                        <div className="inner-service-btn">
                                          <span>
                                            Learn More <BsArrowUpRight />
                                          </span>
                                        </div>
                                      </Link>
                                    </div>
                                    <Link to="/">
                                      <h5>
                                        Visit Website <BsArrowUpRight />
                                      </h5>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              {/* <div className="cs-main-grid middle-main-grid">
                                <div className="cs-main-left">
                                  <img src={CaseLogo1} alt="" />
                                  <p>
                                    Deploying IoT-powered kiosks integrated with
                                    a custom ERP solution, we enhanced IKEA’s
                                    customer onboarding, product exploration,
                                    and data-driven marketing.{" "}
                                  </p>
                                  <div className="ind-serv-box">
                                    <span>
                                      Industry <h6>Retail</h6>
                                    </span>
                                    <span>
                                      Services{" "}
                                      <h6>
                                        Blockchain Development, Deployment
                                      </h6>
                                    </span>
                                  </div>
                                  <div className="cs-main-btn">
                                    <div className="service-btn">
                                      <Link to="/casestudy1">
                                        <div className="inner-service-btn">
                                          <span>
                                            Learn More <BsArrowUpRight />
                                          </span>
                                        </div>
                                      </Link>
                                    </div>
                                    <Link to="/">
                                      <h5>
                                        Visit Website <BsArrowUpRight />
                                      </h5>
                                    </Link>
                                  </div>
                                </div>
                                <div className="cs-main-right">
                                  <img src={softwareProject8} alt="" />
                                </div>
                              </div> */}
                              {/* <div className="cs-main-grid">
                                <div className="cs-main-right">
                                  <img src={softwareProject8} alt="" />
                                </div>
                                <div className="cs-main-left">
                                  <img src={CaseLogo1} alt="" />
                                  <p>
                                    Deploying IoT-powered kiosks integrated with
                                    a custom ERP solution, we enhanced IKEA’s
                                    customer onboarding, product exploration,
                                    and data-driven marketing.{" "}
                                  </p>
                                  <div className="ind-serv-box">
                                    <span>
                                      Industry <h6>Retail</h6>
                                    </span>
                                    <span>
                                      Services{" "}
                                      <h6>
                                        Blockchain Development, Deployment
                                      </h6>
                                    </span>
                                  </div>
                                  <div className="cs-main-btn">
                                    <div className="service-btn">
                                      <Link to="/casestudy1">
                                        <div className="inner-service-btn">
                                          <span>
                                            Learn More <BsArrowUpRight />
                                          </span>
                                        </div>
                                      </Link>
                                    </div>
                                    <Link to="/">
                                      <h5>
                                        Visit Website <BsArrowUpRight />
                                      </h5>
                                    </Link>
                                  </div>
                                </div>
                              </div> */}
                            </div>
                          </div>
                        </Tab>
                        <Tab eventKey="AI Development" title="AI Development">
                          <div className="technologies-tabContent">
                            <div className="casestudy-main">
                              <div className="cs-main-grid">
                                <div className="cs-main-right">
                                  <img src={aiProject1} alt="" />
                                </div>
                                <div className="cs-main-left">
                                  <img src={CaseLogo1} alt="" />
                                  <p>
                                    Deploying IoT-powered kiosks integrated with
                                    a custom ERP solution, we enhanced IKEA’s
                                    customer onboarding, product exploration,
                                    and data-driven marketing.{" "}
                                  </p>
                                  <div className="ind-serv-box">
                                    <span>
                                      Industry <h6>Retail</h6>
                                    </span>
                                    <span>
                                      Services{" "}
                                      <h6>
                                        Blockchain Development, Deployment
                                      </h6>
                                    </span>
                                  </div>
                                  <div className="cs-main-btn">
                                    <div className="service-btn">
                                      <Link to="/casestudy1">
                                        <div className="inner-service-btn">
                                          <span>
                                            Learn More <BsArrowUpRight />
                                          </span>
                                        </div>
                                      </Link>
                                    </div>
                                    <Link to="/">
                                      <h5>
                                        Visit Website <BsArrowUpRight />
                                      </h5>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="cs-main-grid middle-main-grid">
                                <div className="cs-main-left">
                                  <img src={CaseLogo1} alt="" />
                                  <p>
                                    Deploying IoT-powered kiosks integrated with
                                    a custom ERP solution, we enhanced IKEA’s
                                    customer onboarding, product exploration,
                                    and data-driven marketing.{" "}
                                  </p>
                                  <div className="ind-serv-box">
                                    <span>
                                      Industry <h6>Retail</h6>
                                    </span>
                                    <span>
                                      Services{" "}
                                      <h6>
                                        Blockchain Development, Deployment
                                      </h6>
                                    </span>
                                  </div>
                                  <div className="cs-main-btn">
                                    <div className="service-btn">
                                      <Link to="/casestudy1">
                                        <div className="inner-service-btn">
                                          <span>
                                            Learn More <BsArrowUpRight />
                                          </span>
                                        </div>
                                      </Link>
                                    </div>
                                    <Link to="/">
                                      <h5>
                                        Visit Website <BsArrowUpRight />
                                      </h5>
                                    </Link>
                                  </div>
                                </div>
                                <div className="cs-main-right">
                                  <img src={aiProject2} alt="" />
                                </div>
                              </div>
                              {/* <div className="cs-main-grid">
                                <div className="cs-main-right">
                                  <img src={Case1} alt="" />
                                </div>
                                <div className="cs-main-left">
                                  <img src={CaseLogo1} alt="" />
                                  <p>
                                    Deploying IoT-powered kiosks integrated with
                                    a custom ERP solution, we enhanced IKEA’s
                                    customer onboarding, product exploration,
                                    and data-driven marketing.{" "}
                                  </p>
                                  <div className="ind-serv-box">
                                    <span>
                                      Industry <h6>Retail</h6>
                                    </span>
                                    <span>
                                      Services{" "}
                                      <h6>
                                        Blockchain Development, Deployment
                                      </h6>
                                    </span>
                                  </div>
                                  <div className="cs-main-btn">
                                    <div className="service-btn">
                                      <Link to="/casestudy1">
                                        <div className="inner-service-btn">
                                          <span>
                                            Learn More <BsArrowUpRight />
                                          </span>
                                        </div>
                                      </Link>
                                    </div>
                                    <Link to="/">
                                      <h5>
                                        Visit Website <BsArrowUpRight />
                                      </h5>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="cs-main-grid middle-main-grid">
                                <div className="cs-main-left">
                                  <img src={CaseLogo1} alt="" />
                                  <p>
                                    Deploying IoT-powered kiosks integrated with
                                    a custom ERP solution, we enhanced IKEA’s
                                    customer onboarding, product exploration,
                                    and data-driven marketing.{" "}
                                  </p>
                                  <div className="ind-serv-box">
                                    <span>
                                      Industry <h6>Retail</h6>
                                    </span>
                                    <span>
                                      Services{" "}
                                      <h6>
                                        Blockchain Development, Deployment
                                      </h6>
                                    </span>
                                  </div>
                                  <div className="cs-main-btn">
                                    <div className="service-btn">
                                      <Link to="/casestudy1">
                                        <div className="inner-service-btn">
                                          <span>
                                            Learn More <BsArrowUpRight />
                                          </span>
                                        </div>
                                      </Link>
                                    </div>
                                    <Link to="/">
                                      <h5>
                                        Visit Website <BsArrowUpRight />
                                      </h5>
                                    </Link>
                                  </div>
                                </div>
                                <div className="cs-main-right">
                                  <img src={Case1} alt="" />
                                </div>
                              </div>
                              <div className="cs-main-grid">
                                <div className="cs-main-right">
                                  <img src={Case1} alt="" />
                                </div>
                                <div className="cs-main-left">
                                  <img src={CaseLogo1} alt="" />
                                  <p>
                                    Deploying IoT-powered kiosks integrated with
                                    a custom ERP solution, we enhanced IKEA’s
                                    customer onboarding, product exploration,
                                    and data-driven marketing.{" "}
                                  </p>
                                  <div className="ind-serv-box">
                                    <span>
                                      Industry <h6>Retail</h6>
                                    </span>
                                    <span>
                                      Services{" "}
                                      <h6>
                                        Blockchain Development, Deployment
                                      </h6>
                                    </span>
                                  </div>
                                  <div className="cs-main-btn">
                                    <div className="service-btn">
                                      <Link to="/casestudy1">
                                        <div className="inner-service-btn">
                                          <span>
                                            Learn More <BsArrowUpRight />
                                          </span>
                                        </div>
                                      </Link>
                                    </div>
                                    <Link to="/">
                                      <h5>
                                        Visit Website <BsArrowUpRight />
                                      </h5>
                                    </Link>
                                  </div>
                                </div>
                              </div> */}
                            </div>
                          </div>
                        </Tab>
                        <Tab
                          eventKey="Blockchain Development"
                          title="Blockchain Development"
                        >
                          <div className="technologies-tabContent">
                            <div className="casestudy-main">
                              <div className="cs-main-grid">
                                <div className="cs-main-right">
                                  <img src={softwareProject1} alt="" />
                                </div>
                                <div className="cs-main-left">
                                  <img src={CaseLogo1} alt="" />
                                  <p>
                                    Deploying IoT-powered kiosks integrated with
                                    a custom ERP solution, we enhanced IKEA’s
                                    customer onboarding, product exploration,
                                    and data-driven marketing.{" "}
                                  </p>
                                  <div className="ind-serv-box">
                                    <span>
                                      Industry <h6>Retail</h6>
                                    </span>
                                    <span>
                                      Services{" "}
                                      <h6>
                                        Blockchain Development, Deployment
                                      </h6>
                                    </span>
                                  </div>
                                  <div className="cs-main-btn">
                                    <div className="service-btn">
                                      <Link to="/casestudy1">
                                        <div className="inner-service-btn">
                                          <span>
                                            Learn More <BsArrowUpRight />
                                          </span>
                                        </div>
                                      </Link>
                                    </div>
                                    <Link to="/">
                                      <h5>
                                        Visit Website <BsArrowUpRight />
                                      </h5>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="cs-main-grid middle-main-grid">
                                <div className="cs-main-left">
                                  <img src={CaseLogo1} alt="" />
                                  <p>
                                    Deploying IoT-powered kiosks integrated with
                                    a custom ERP solution, we enhanced IKEA’s
                                    customer onboarding, product exploration,
                                    and data-driven marketing.{" "}
                                  </p>
                                  <div className="ind-serv-box">
                                    <span>
                                      Industry <h6>Retail</h6>
                                    </span>
                                    <span>
                                      Services{" "}
                                      <h6>
                                        Blockchain Development, Deployment
                                      </h6>
                                    </span>
                                  </div>
                                  <div className="cs-main-btn">
                                    <div className="service-btn">
                                      <Link to="/casestudy1">
                                        <div className="inner-service-btn">
                                          <span>
                                            Learn More <BsArrowUpRight />
                                          </span>
                                        </div>
                                      </Link>
                                    </div>
                                    <Link to="/">
                                      <h5>
                                        Visit Website <BsArrowUpRight />
                                      </h5>
                                    </Link>
                                  </div>
                                </div>
                                <div className="cs-main-right">
                                  <img src={softwareProject2} alt="" />
                                </div>
                              </div>
                              {/* <div className="cs-main-grid">
                                <div className="cs-main-right">
                                  <img src={Case1} alt="" />
                                </div>
                                <div className="cs-main-left">
                                  <img src={CaseLogo1} alt="" />
                                  <p>
                                    Deploying IoT-powered kiosks integrated with
                                    a custom ERP solution, we enhanced IKEA’s
                                    customer onboarding, product exploration,
                                    and data-driven marketing.{" "}
                                  </p>
                                  <div className="ind-serv-box">
                                    <span>
                                      Industry <h6>Retail</h6>
                                    </span>
                                    <span>
                                      Services{" "}
                                      <h6>
                                        Blockchain Development, Deployment
                                      </h6>
                                    </span>
                                  </div>
                                  <div className="cs-main-btn">
                                    <div className="service-btn">
                                      <Link to="/casestudy1">
                                        <div className="inner-service-btn">
                                          <span>
                                            Learn More <BsArrowUpRight />
                                          </span>
                                        </div>
                                      </Link>
                                    </div>
                                    <Link to="/">
                                      <h5>
                                        Visit Website <BsArrowUpRight />
                                      </h5>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="cs-main-grid middle-main-grid">
                                <div className="cs-main-left">
                                  <img src={CaseLogo1} alt="" />
                                  <p>
                                    Deploying IoT-powered kiosks integrated with
                                    a custom ERP solution, we enhanced IKEA’s
                                    customer onboarding, product exploration,
                                    and data-driven marketing.{" "}
                                  </p>
                                  <div className="ind-serv-box">
                                    <span>
                                      Industry <h6>Retail</h6>
                                    </span>
                                    <span>
                                      Services{" "}
                                      <h6>
                                        Blockchain Development, Deployment
                                      </h6>
                                    </span>
                                  </div>
                                  <div className="cs-main-btn">
                                    <div className="service-btn">
                                      <Link to="/casestudy1">
                                        <div className="inner-service-btn">
                                          <span>
                                            Learn More <BsArrowUpRight />
                                          </span>
                                        </div>
                                      </Link>
                                    </div>
                                    <Link to="/">
                                      <h5>
                                        Visit Website <BsArrowUpRight />
                                      </h5>
                                    </Link>
                                  </div>
                                </div>
                                <div className="cs-main-right">
                                  <img src={Case1} alt="" />
                                </div>
                              </div>
                              <div className="cs-main-grid">
                                <div className="cs-main-right">
                                  <img src={Case1} alt="" />
                                </div>
                                <div className="cs-main-left">
                                  <img src={CaseLogo1} alt="" />
                                  <p>
                                    Deploying IoT-powered kiosks integrated with
                                    a custom ERP solution, we enhanced IKEA’s
                                    customer onboarding, product exploration,
                                    and data-driven marketing.{" "}
                                  </p>
                                  <div className="ind-serv-box">
                                    <span>
                                      Industry <h6>Retail</h6>
                                    </span>
                                    <span>
                                      Services{" "}
                                      <h6>
                                        Blockchain Development, Deployment
                                      </h6>
                                    </span>
                                  </div>
                                  <div className="cs-main-btn">
                                    <div className="service-btn">
                                      <Link to="/casestudy1">
                                        <div className="inner-service-btn">
                                          <span>
                                            Learn More <BsArrowUpRight />
                                          </span>
                                        </div>
                                      </Link>
                                    </div>
                                    <Link to="/">
                                      <h5>
                                        Visit Website <BsArrowUpRight />
                                      </h5>
                                    </Link>
                                  </div>
                                </div>
                              </div> */}
                            </div>
                          </div>
                        </Tab>
                      </Tabs>
                    </div>
                  </div>
                </div>
              </section>
              {/* <div className="box">
                <div className="casestudy-cont">
                  <div className="casestudy-head">
                    <h3 className="gradient-text">Case Study</h3>
                  </div>
                  <div className="casestudy-main">
                    <div className="cs-main-grid">
                      <div className="cs-main-right">
                        <img src={Case1} alt="" />
                      </div>
                      <div className="cs-main-left">
                        <img src={CaseLogo1} alt="" />
                        <p>
                          Deploying IoT-powered kiosks integrated with a custom
                          ERP solution, we enhanced IKEA’s customer onboarding,
                          product exploration, and data-driven marketing.{" "}
                        </p>
                        <div className="ind-serv-box">
                          <span>
                            Industry <h6>Retail</h6>
                          </span>
                          <span>
                            Services <h6>Blockchain Development, Deployment</h6>
                          </span>
                        </div>
                        <div className="cs-main-btn">
                          <div className="service-btn">
                            <Link to="/casestudy1">
                              <div className="inner-service-btn">
                                <span>
                                  Learn More <BsArrowUpRight />
                                </span>
                              </div>
                            </Link>
                          </div>
                          <Link to="/">
                            <h5>
                              Visit Website <BsArrowUpRight />
                            </h5>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="cs-main-grid middle-main-grid">
                      <div className="cs-main-left">
                        <img src={CaseLogo1} alt="" />
                        <p>
                          Deploying IoT-powered kiosks integrated with a custom
                          ERP solution, we enhanced IKEA’s customer onboarding,
                          product exploration, and data-driven marketing.{" "}
                        </p>
                        <div className="ind-serv-box">
                          <span>
                            Industry <h6>Retail</h6>
                          </span>
                          <span>
                            Services <h6>Blockchain Development, Deployment</h6>
                          </span>
                        </div>
                        <div className="cs-main-btn">
                          <div className="service-btn">
                            <Link to="/casestudy1">
                              <div className="inner-service-btn">
                                <span>
                                  Learn More <BsArrowUpRight />
                                </span>
                              </div>
                            </Link>
                          </div>
                          <Link to="/">
                            <h5>
                              Visit Website <BsArrowUpRight />
                            </h5>
                          </Link>
                        </div>
                      </div>
                      <div className="cs-main-right">
                        <img src={Case1} alt="" />
                      </div>
                    </div>
                    <div className="cs-main-grid">
                      <div className="cs-main-right">
                        <img src={Case1} alt="" />
                      </div>
                      <div className="cs-main-left">
                        <img src={CaseLogo1} alt="" />
                        <p>
                          Deploying IoT-powered kiosks integrated with a custom
                          ERP solution, we enhanced IKEA’s customer onboarding,
                          product exploration, and data-driven marketing.{" "}
                        </p>
                        <div className="ind-serv-box">
                          <span>
                            Industry <h6>Retail</h6>
                          </span>
                          <span>
                            Services <h6>Blockchain Development, Deployment</h6>
                          </span>
                        </div>
                        <div className="cs-main-btn">
                          <div className="service-btn">
                            <Link to="/casestudy1">
                              <div className="inner-service-btn">
                                <span>
                                  Learn More <BsArrowUpRight />
                                </span>
                              </div>
                            </Link>
                          </div>
                          <Link to="/">
                            <h5>
                              Visit Website <BsArrowUpRight />
                            </h5>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="cs-main-grid middle-main-grid">
                      <div className="cs-main-left">
                        <img src={CaseLogo1} alt="" />
                        <p>
                          Deploying IoT-powered kiosks integrated with a custom
                          ERP solution, we enhanced IKEA’s customer onboarding,
                          product exploration, and data-driven marketing.{" "}
                        </p>
                        <div className="ind-serv-box">
                          <span>
                            Industry <h6>Retail</h6>
                          </span>
                          <span>
                            Services <h6>Blockchain Development, Deployment</h6>
                          </span>
                        </div>
                        <div className="cs-main-btn">
                          <div className="service-btn">
                            <Link to="/casestudy1">
                              <div className="inner-service-btn">
                                <span>
                                  Learn More <BsArrowUpRight />
                                </span>
                              </div>
                            </Link>
                          </div>
                          <Link to="/">
                            <h5>
                              Visit Website <BsArrowUpRight />
                            </h5>
                          </Link>
                        </div>
                      </div>
                      <div className="cs-main-right">
                        <img src={Case1} alt="" />
                      </div>
                    </div>
                    <div className="cs-main-grid">
                      <div className="cs-main-right">
                        <img src={Case1} alt="" />
                      </div>
                      <div className="cs-main-left">
                        <img src={CaseLogo1} alt="" />
                        <p>
                          Deploying IoT-powered kiosks integrated with a custom
                          ERP solution, we enhanced IKEA’s customer onboarding,
                          product exploration, and data-driven marketing.{" "}
                        </p>
                        <div className="ind-serv-box">
                          <span>
                            Industry <h6>Retail</h6>
                          </span>
                          <span>
                            Services <h6>Blockchain Development, Deployment</h6>
                          </span>
                        </div>
                        <div className="cs-main-btn">
                          <div className="service-btn">
                            <Link to="/casestudy1">
                              <div className="inner-service-btn">
                                <span>
                                  Learn More <BsArrowUpRight />
                                </span>
                              </div>
                            </Link>
                          </div>
                          <Link to="/">
                            <h5>
                              Visit Website <BsArrowUpRight />
                            </h5>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </section>
            {/* <Booking />
            <Footer /> */}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Maincasestudy;
