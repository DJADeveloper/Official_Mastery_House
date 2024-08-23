import React, { useState, useEffect } from "react";
import "./home.css";
// import HeroImg from "./assets/img/hero-img.png";
import Blockchain from "./assets/img/blockchain.svg";
import Consulting from "./assets/img/consulting.svg";
import Development from "./assets/img/ai-development.svg";
import Software from "./assets/img/software.svg";
import Rectangle from "./assets/img/Rectangle-Purple.png";
import Circle from "./assets/img/Circle-Green.png";
import Team1 from "./assets/img/team-1.png";
import Blog1 from "./assets/img/blog1.png";
import Blog2 from "./assets/img/blog2.png";
import Blog3 from "./assets/img/blog3.png";
import Blog4 from "./assets/img/blog4.png";
import Blog5 from "./assets/img/blog5.png";
import ServiceImg from "./assets/img/serviceimg.png";
import AboutImg from "./assets/img/aboutimg.png";

import ReactImg from "./assets/img/reactimg.svg";
import NextImg from "./assets/img/nextimg.svg";
import MUIImg from "./assets/img/material-ui-img.svg";
import TSImg from "./assets/img/typescriptimg.svg";
import Tab from "react-bootstrap/Tab";
import Zepline from "./assets/img/zepline.svg";
import Flask from "./assets/img/flask.svg";
import Mat from "./assets/img/matlab.svg";
import Tabs from "react-bootstrap/Tabs";
import { FaNodeJs, FaPython, FaSwift } from "react-icons/fa6";
import Case1 from "./assets/projectImages/unifit/unifit-banner.png";
import Case2 from "./assets/projectImages/nwm/nwm-banner.png";
import Case3 from "./assets/projectImages/jobskuyy/jobskuyy-banner.png";
import Case4 from "./assets/projectImages/definitity/definity-banner.png";
import CaseLogo1 from "./assets/projectImages/unifit/unifit-logo.png";
import CaseLogo2 from "./assets/projectImages/nwm/nwm-logo.png";
import CaseLogo3 from "./assets/projectImages/jobskuyy/jobskuyy-logo.png";
import CaseLogo4 from "./assets/projectImages/definitity/definity-logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { Link, Route, Switch } from "react-router-dom";
import {
  BsChevronRight,
  BsChevronLeft,
  BsArrowRight,
  BsArrowUpRight,
  BsList,
  BsXLg,
  BsChevronDown,
} from "react-icons/bs";
import Accordion from "react-bootstrap/Accordion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Booking from "./components/Booking";
import Marque from "./components/Marque";
import Teamswiper from "./components/Teamswiper";

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
import HeroImg from "./components/HeroImg";
import NewsletterForm from "./components/NewsLetterForm";
// import Chatbot from "./components/Chatbot";

function Home(props) {
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
    gsap.from(".service-icon-1 path", {
      drawSVG: 0.1,
      duration: 3,
      delay: 1,
    });

    const aboutTextHeading = new SplitText(".about-text", {
      type: "words, lines",
      wordsClass: "about-text-word-++",
      reduceWhiteSpace: true,
    });

    let aboutTextAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".service-graphic-text",
        toggleActions: "start pause resume none",
        start: "top 75%",
        scrub: 1,
      },
    });

    aboutTextAnim.fromTo(
      aboutTextHeading.words,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 3,
        stagger: 0.075,
      }
    );

    gsap.fromTo(
      ".gradient-text",
      {
        filter: "hue-rotate(0)",
      },
      {
        filter: "hue-rotate(30deg)",
        duration: 5,
        yoyo: true,
        repeat: -1,
      }
    );

    let caseCircle3Anim = gsap.timeline({
      scrollTrigger: {
        trigger: ".case-circle1 circle",
        start: "top 75%",
      },
    });

    caseCircle3Anim.from(".case-circle1 circle", {
      drawSVG: 0.1,
      duration: 3,
    });
    caseCircle3Anim.from(".case-circle2 circle", {
      drawSVG: 0.1,
      duration: 3,
    });
    caseCircle3Anim.from(".case-circle3 circle", {
      drawSVG: 0.1,
      duration: 3,
    });
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
            <Header isActive="home" />

            <section className="hero-section">
              <div className="main-home-circle"></div>
              <div className="box">
                <div className="hero-content">
                  <div className="hero-cont-left">
                    <span>Welcome to The Mastery House</span>
                    <h1 className="gradient-text">
                      Where Innovation Meets Mastery in Software & AI
                      Development
                    </h1>
                    <p>
                      At The Mastery House, we excel in driving digital
                      transformation through innovative technology solutions.
                      With expertise in AI, software, mobile development, and
                      business automation, we help businesses navigate the
                      complexities of the digital world.
                    </p>
                    <Link to="/contact">
                      <button className="gradient-btn">
                        Start Your Digital Story
                      </button>
                    </Link>
                  </div>
                  <div className="hero-cont-right">
                    <HeroImg />
                  </div>
                </div>
              </div>
            </section>
            <section className="service-section" id="services">
              <div className="box">
                <div className="service-content">
                  <h2>
                    Discover our comprehensive suite of services designed to{" "}
                    <span className="gradient-text">elevate your business</span>{" "}
                    in the digital era
                  </h2>
                  <div className="service-grid-cont">
                    <div className="service-grid-box">
                      <div className="circle-sm circle-sm-1"></div>
                      {/* <img src={Blockchain} alt="" /> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="75"
                        height="75"
                        fill="none"
                        viewBox="0 0 75 75"
                        className="service-icon-1"
                      >
                        <path
                          fill="url(#paint0_linear_488_1000)"
                          d="M15.777 22.03a1.1 1.1 0 001.541-.193l.01-.011a1.099 1.099 0 00-1.735-1.35 1.105 1.105 0 00.184 1.554zm4.394-3.299c.452-.418.49-1.115.068-1.566a1.101 1.101 0 00-1.552-.054 1.098 1.098 0 101.484 1.62zm-8.242 11.19a1.098 1.098 0 001.393-.689l.005-.014a1.099 1.099 0 10-2.082-.704l-.004.014a1.098 1.098 0 00.688 1.393zm-.718 4.325a1.099 1.099 0 001.086-.938 1.099 1.099 0 10-2.17-.351l-.001.012a1.103 1.103 0 001.085 1.277zM12.3 41.71a1.096 1.096 0 00-1.268-.888 1.102 1.102 0 00-.896 1.268v.004a1.099 1.099 0 102.168-.356l-.004-.028zm1.216-15.9a1.101 1.101 0 001.492-.433l.014-.025a1.096 1.096 0 00-.45-1.48 1.102 1.102 0 00-1.487.443l-.002.003c-.292.532-.098 1.2.433 1.493zm49.18 15.929a1.106 1.106 0 001.088 1.258 1.1 1.1 0 001.083-.923 1.099 1.099 0 10-2.171-.335zm.35-4.287a.976.976 0 000 .048v.015a1.099 1.099 0 102.197 0V37.5a.99.99 0 000-.048c0-.613-.489-1.114-1.1-1.114-.612 0-1.098.502-1.098 1.114zm-.354-4.211c.102.597.66 1 1.245.914a1.103 1.103 0 00.919-1.296 1.098 1.098 0 00-2.164.382zm-5.05-11.454a1.102 1.102 0 001.541.179 1.1 1.1 0 00.182-1.543l-.003-.004a1.099 1.099 0 10-1.72 1.368zm4.01 7.37a1.099 1.099 0 002.081-.704l-.006-.02a1.092 1.092 0 00-1.392-.675 1.105 1.105 0 00-.683 1.398zm-5.325-10.54a1.105 1.105 0 00-.075-1.563 1.093 1.093 0 00-1.547.07 1.105 1.105 0 00.07 1.557c.445.41 1.14.383 1.552-.064zm3.64 6.713a1.098 1.098 0 001.911-1.083 1.099 1.099 0 10-1.912 1.083zm-49.11 13.3c.606 0 1.098-.492 1.098-1.099 0-.612-.489-1.113-1.099-1.113-.613 0-1.099.502-1.099 1.114 0 .606.492 1.098 1.1 1.098zM65.477 62.55h-3.662a3.3 3.3 0 01-3.296-3.296 1.099 1.099 0 10-2.197 0 5.5 5.5 0 005.493 5.493h3.662a5.5 5.5 0 005.494-5.493 5.5 5.5 0 00-5.493-5.493h-1.465a1.099 1.099 0 100 2.197h1.465a3.3 3.3 0 013.295 3.296 3.3 3.3 0 01-3.296 3.296zM34.938 10.254h-3.663a5.5 5.5 0 00-5.493 5.493 5.5 5.5 0 005.493 5.493h1.465a1.099 1.099 0 000-2.197h-1.465a3.3 3.3 0 01-3.296-3.296 3.3 3.3 0 013.296-3.296h3.663a3.3 3.3 0 013.295 3.296 1.099 1.099 0 002.198 0 5.5 5.5 0 00-5.493-5.493zm8.789 8.789h-3.663a3.3 3.3 0 01-3.295-3.296 1.099 1.099 0 10-2.198 0 5.5 5.5 0 005.493 5.493h3.663a5.5 5.5 0 005.493-5.493 5.5 5.5 0 00-5.493-5.493H42.26a1.099 1.099 0 100 2.197h1.465a3.3 3.3 0 013.296 3.296 3.3 3.3 0 01-3.296 3.296zM39.62 62.959a1.099 1.099 0 00.161 2.19l.031-.002a1.1 1.1 0 00-.192-2.189zm19.633-19.453c-3.607 0-7 1.186-9.814 3.431a1.099 1.099 0 001.37 1.718 13.404 13.404 0 018.444-2.952c7.471 0 13.55 6.078 13.55 13.55 0 7.471-6.079 13.55-13.55 13.55-7.471 0-13.55-6.079-13.55-13.55 0-2.507.69-4.956 1.995-7.08a1.099 1.099 0 00-1.873-1.15 15.716 15.716 0 00-2.32 8.23C43.506 67.936 50.57 75 59.254 75S75 67.936 75 59.253s-7.064-15.747-15.747-15.747zM56.69 53.76h-3.663a5.5 5.5 0 00-5.493 5.493 5.5 5.5 0 005.493 5.493h1.465a1.099 1.099 0 100-2.197h-1.465a3.3 3.3 0 01-3.296-3.296 3.3 3.3 0 013.296-3.296h3.663a3.3 3.3 0 013.295 3.296 1.099 1.099 0 102.198 0 5.5 5.5 0 00-5.493-5.493zm-36.182 0a1.099 1.099 0 000 2.197h1.465a3.3 3.3 0 013.296 3.296 3.3 3.3 0 01-3.296 3.296H18.31a3.3 3.3 0 01-3.296-3.296 1.099 1.099 0 10-2.198 0 5.5 5.5 0 005.494 5.493h3.662a5.5 5.5 0 005.493-5.493 5.5 5.5 0 00-5.493-5.493h-1.465zm-9.522 8.789H9.521a3.3 3.3 0 01-3.295-3.296 3.3 3.3 0 013.295-3.296h3.663a3.3 3.3 0 013.296 3.296 1.099 1.099 0 102.197 0 5.5 5.5 0 00-5.493-5.493H9.52a5.5 5.5 0 00-5.493 5.493 5.5 5.5 0 005.493 5.493h1.465a1.099 1.099 0 100-2.197zm42.261-46.802C53.247 7.064 46.183 0 37.5 0a15.748 15.748 0 00-15.562 13.326 1.099 1.099 0 002.172.335A13.549 13.549 0 0137.5 2.197c7.471 0 13.55 6.079 13.55 13.55 0 7.471-6.079 13.55-13.55 13.55-6.396 0-11.976-4.538-13.269-10.79a1.098 1.098 0 10-2.152.444c1.503 7.268 7.988 12.543 15.421 12.543 8.683 0 15.747-7.064 15.747-15.747zM35.413 62.961l-.03-.002a1.096 1.096 0 00-1.172 1.009 1.102 1.102 0 001.006 1.182h.003a1.099 1.099 0 00.193-2.189zM15.747 43.506C7.064 43.506 0 50.57 0 59.253S7.064 75 15.747 75s15.747-7.064 15.747-15.747-7.064-15.747-15.747-15.747zm0 29.297c-7.471 0-13.55-6.079-13.55-13.55 0-7.471 6.079-13.55 13.55-13.55 7.471 0 13.55 6.078 13.55 13.55 0 7.471-6.079 13.55-13.55 13.55z"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_488_1000"
                            x1="37.5"
                            x2="37.5"
                            y1="0"
                            y2="75"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#0FA"></stop>
                            <stop offset="1" stopColor="#fff"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      <h5>AI Development</h5>
                      <p>
                        Transform your business with cutting-edge AI solutions.
                        From machine learning and NLP to predictive analytics,
                        we harness the power of AI to deliver actionable
                        insights and drive innovation.
                      </p>

                      <Link to="/services/ai-Development">
                        <div className="service-btn">
                          <div className="inner-service-btn">
                            <span>Explore Our Services</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="service-grid-box sgb-2">
                      <div className="circle-sm circle-sm-2"></div>
                      <img src={Development} alt="" />
                      <h5>Software Development</h5>
                      <p>
                        Custom software solutions designed to meet your business
                        needs. Our expertise ranges from enterprise applications
                        to system integration, ensuring robust, scalable, and
                        secure software development.
                      </p>
                      <Link to="/services/software-Development">
                        <div className="service-btn">
                          <div className="inner-service-btn">
                            <span>Explore Our Services</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="service-grid-box sgb-4">
                      <div className="circle-sm circle-sm-4"></div>
                      <img src={Software} alt="" />
                      <h5>Mobile Development</h5>
                      <p>
                        Innovative mobile applications for iOS and Android. We
                        create user-friendly apps that boost customer engagement
                        and drive business growth, from consumer-facing apps to
                        complex enterprise solutions.
                      </p>
                      <Link to="/services/mobile-development">
                        <div className="service-btn">
                          <div className="inner-service-btn">
                            <span>Explore Our Services</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="service-grid-box sgb-3">
                      <div className="circle-sm circle-sm-3"></div>
                      <img src={Consulting} alt="" />
                      <h5>Business Automation</h5>
                      <p>
                        Enhance productivity with our tailored automation
                        solutions. We streamline operations by automating
                        repetitive tasks and integrating intelligent workflows,
                        helping your business run efficiently.
                      </p>
                      <Link to="/services/business-automation">
                        <div className="service-btn">
                          <div className="inner-service-btn">
                            <span>Explore Our Services</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="service-graphic-text">
                    <img
                      data-speed={1.35}
                      src={Rectangle}
                      alt=""
                      className="rect-img"
                    />
                    <img
                      data-speed={0.85}
                      src={Circle}
                      alt=""
                      className="cir-img"
                    />
                    <h3 className="about-text">
                      At The Mastery House, we believe in the power of
                      innovation, mastery, and a client-centric approach.
                      Founded on the principles of excellence and dedication,
                      our team of experts is committed to delivering
                      cutting-edge solutions that not only meet but exceed your
                      expectations.
                    </h3>
                  </div>
                  <Link to="/about">
                    Learn More <BsArrowRight />
                  </Link>
                </div>
              </div>
            </section>
            <section className="casestudy-section" id="casestudy">
              <svg
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
              </svg>
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
              <div className="box">
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
                          Leveraging cutting-edge AI and automation
                          technologies, we transformed UniFit into a leading
                          eco-friendly fitness brand. The Mastery House crafted
                          the brand's identity, developed a suite of SaaS tools,
                          and significantly scaled the company's operations,
                          driving customer engagement and retention through
                          innovative digital solutions.
                        </p>
                        <div className="ind-serv-box">
                          <span>
                            Industry <h6>Health & Fitness</h6>
                          </span>
                          <span>
                            Services{" "}
                            <h6>
                              Brand Development, SaaS Development, Business
                              Scaling
                            </h6>
                          </span>
                        </div>
                        {/* <div className="cs-main-btn">
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
                        </div> */}
                      </div>
                    </div>
                    {/* <div className="cs-main-grid middle-main-grid">
                      <div className="cs-main-left">
                        <img src={CaseLogo2} alt="" />
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
                        <img src={Case2} alt="" />
                      </div>
                    </div> */}
                    <div className="cs-main-grid middle-main-grid">
                      <div className="cs-main-left">
                        <img src={CaseLogo4} alt="" />
                        <p>
                          By integrating blockchain technology with AI-driven
                          security protocols, The Mastery House elevated
                          Definity Exchange's platform, ensuring seamless
                          cryptocurrency transactions with enhanced reliability
                          and security. Our comprehensive approach also included
                          developing a user-friendly interface and optimizing
                          the platform for low-latency trading, significantly
                          improving user experience and engagement.
                        </p>
                        <div className="ind-serv-box">
                          <span>
                            Industry <h6>Fintech</h6>
                          </span>
                          <span>
                            Services{" "}
                            <h6>
                              Blockchain Integration, AI Security Enhancement,
                              UX/UI Design
                            </h6>
                          </span>
                        </div>
                        {/* <div className="cs-main-btn">
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
                        </div> */}
                      </div>
                      <div className="cs-main-right">
                        <img src={Case4} alt="" />
                      </div>
                    </div>

                    <div className="cs-main-grid">
                      <div className="cs-main-right">
                        <img src={Case3} alt="" />
                      </div>
                      <div className="cs-main-left">
                        <img src={CaseLogo3} alt="" />
                        <p>
                          The Mastery House developed a versatile SaaS template
                          for JobSkyy, enabling the company to offer a scalable
                          recruitment platform to its users. This template not
                          only streamlined the job matching process with
                          AI-driven recommendations but also allowed JobSkyy to
                          sell the software as a white-label solution,
                          empowering other companies to deploy their own branded
                          recruitment platforms with ease.
                        </p>
                        <div className="ind-serv-box">
                          <span>
                            Industry <h6>Human Resources</h6>
                          </span>
                          <span>
                            Services{" "}
                            <h6>
                              SaaS Development, AI Integration, White-Label
                              Solutions
                            </h6>
                          </span>
                        </div>
                        {/* Button area */}
                        {/* <div className="cs-main-btn">
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
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <NewsletterForm />
            </section>
            {/* <section className="getintouch-section">
              <div className="marquee-main-box">
                <Marque />
              </div>
            </section> */}
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
                            Our expertise ensures an exceptional user experience
                            with cutting-edge technology at the forefront of
                            frontend development.
                          </p>
                          <div className="technologies-box">
                            <div className="tb-box-img">
                              <img src={ReactImg} alt="" />
                              <h4>React</h4>
                            </div>
                            <div className="tb-box-img">
                              <img src={NextImg} alt="" />
                              <h4>Next</h4>
                            </div>
                            <div className="tb-box-img">
                              <img src={MUIImg} alt="" />
                              <h4>MUI</h4>
                            </div>
                            <div className="tb-box-img">
                              <img src={TSImg} alt="" />
                              <h4>Typescript</h4>
                            </div>
                          </div>
                        </div>
                      </Tab>
                      <Tab eventKey="Backend" title="Backend Development">
                        <div className="technologies-tabContent">
                          <p>
                            Our expertise ensures an exceptional user experience
                            with cutting-edge technology at the forefront of
                            frontend development.
                          </p>
                          <div className="technologies-box">
                            <div className="tb-box-img">
                              <FaPython />
                              <h4>Python</h4>
                            </div>
                            <div className="tb-box-img">
                              <FaNodeJs />
                              <h4>Node Js</h4>
                            </div>
                            <div className="tb-box-img">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#fff"
                                width="85px"
                                height="85px"
                                viewBox="0 0 24 24"
                                role="img"
                              >
                                <path d="M11.146 0h3.924v18.165c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.001 2.65-6.6 6.753-6.6.637 0 1.121.051 1.707.204V0zm0 9.143a3.894 3.894 0 0 0-1.325-.204c-1.988 0-3.134 1.223-3.134 3.364 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.097c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.529 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39V.021z" />
                              </svg>
                              <h4>Django</h4>
                            </div>
                            <div className="tb-box-img">
                              <img src={Flask} alt="" />
                              <h4>Flask</h4>
                            </div>
                          </div>
                        </div>
                      </Tab>
                      <Tab eventKey="Web3" title="Web3">
                        <div className="technologies-tabContent">
                          <p>
                            Our expertise ensures an exceptional user experience
                            with cutting-edge technology at the forefront of
                            frontend development.
                          </p>
                          <div className="technologies-box">
                            <div className="tb-box-img">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="120px"
                                width="120px"
                                viewBox="-78.58515 -203.242 681.0713 1219.452"
                              >
                                <path
                                  d="M391.93 0L261.226 232.302H0L130.614 0H391.93"
                                  opacity=".45"
                                  fill="#fff"
                                />
                                <path
                                  d="M261.226 232.302h261.318L391.93 0H130.614z"
                                  opacity=".6"
                                  fill="#fff"
                                />
                                <path
                                  d="M130.614 464.514l130.612-232.212L130.614 0 0 232.302z"
                                  opacity=".8"
                                  fill="#fff"
                                />
                                <path
                                  d="M131.879 812.967l130.704-232.303h261.318L393.196 812.967H131.879"
                                  opacity=".45"
                                  fill="#fff"
                                />
                                <path
                                  d="M262.582 580.665H1.265l130.613 232.303h261.317z"
                                  opacity=".6"
                                  fill="#fff"
                                />
                                <path
                                  d="M393.196 348.453L262.582 580.665l130.614 232.303L523.9 580.665z"
                                  opacity=".8"
                                  fill="#fff"
                                />
                              </svg>
                              <h4>Solidity</h4>
                            </div>
                            <div className="tb-box-img">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#fff"
                                width="85px"
                                height="85px"
                                viewBox="0 0 32 32"
                              >
                                <path d="M 13 7 L 13 8.40625 C 8.035156 9.6875 4.410156 14.082031 4.125 19.375 C 2.953125 19.785156 2 20.695313 2 22 L 2 25 L 30 25 L 30 22 C 30 20.695313 29.046875 19.785156 27.875 19.375 C 27.589844 14.082031 23.964844 9.6875 19 8.40625 L 19 7 Z M 15.03125 9 L 17 9 C 16.980469 9.113281 16.980469 9.230469 17 9.34375 L 17 15 L 19 15 L 19 10.5 C 22.738281 11.679688 25.566406 14.972656 25.96875 19 L 24 19 L 24 21 L 27 21 C 27.566406 21 28 21.433594 28 22 L 28 23 L 4 23 L 4 22 C 4 21.433594 4.433594 21 5 21 L 8 21 L 8 19 L 6.03125 19 C 6.433594 14.972656 9.261719 11.679688 13 10.5 L 13 15 L 15 15 L 15 9.5 C 15.050781 9.339844 15.0625 9.167969 15.03125 9 Z" />
                              </svg>
                              <h4>Hardhat</h4>
                            </div>
                            <div className="tb-box-img">
                              <img src={Zepline} alt="" />
                              <h4>OpenZeplin</h4>
                            </div>
                            <div className="tb-box-img">
                              <svg
                                viewBox="0 0 64 64"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="#fff"
                              >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                  id="SVGRepo_tracerCarrier"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                  <path d="m54 26 2 2-4 4 4 12-2 10-12-4-6 4h-8l-6-4-12 4-2-10 4-12-4-4 2-2-2-10 2-8 14 8h16l14-8 2 8-2 10z"></path>
                                  <path d="m40 16-2 8-2 16h-8l-2-16-2-8"></path>
                                  <path d="m28 40-6 10"></path>
                                  <path d="m36 40 6 10"></path>
                                  <path d="M32 48v6"></path>
                                  <path d="m12 32 14-8"></path>
                                  <path d="m38 24 14 8"></path>
                                  <path d="m28 40-10-4"></path>
                                  <path d="m36 40 10-4"></path>
                                </g>
                              </svg>
                              <h4>Metmask</h4>
                            </div>
                            <div className="tb-box-img">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#fff"
                                width="85px"
                                height="85px"
                                viewBox="0 0 32 32"
                              >
                                <path d="M15.927 23.959l-9.823-5.797 9.817 13.839 9.828-13.839-9.828 5.797zM16.073 0l-9.819 16.297 9.819 5.807 9.823-5.801z" />
                              </svg>
                              <h4>Ethers</h4>
                            </div>
                          </div>
                        </div>
                      </Tab>
                      <Tab
                        eventKey="Mobile Development"
                        title="Mobile Development"
                      >
                        <div className="technologies-tabContent">
                          <p>
                            Our expertise ensures an exceptional user experience
                            with cutting-edge technology at the forefront of
                            frontend development.
                          </p>
                          <div className="technologies-box">
                            <div className="tb-box-img">
                              <FaSwift />
                              <h4>swift</h4>
                            </div>
                            <div className="tb-box-img">
                              <img src={ReactImg} alt="" />
                              <h4>React Native</h4>
                            </div>
                            <div className="tb-box-img">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#fff"
                                width="85px"
                                height="85px"
                                viewBox="0 0 32 32"
                              >
                                <path d="M24.292 15.547c1.968 0.131 3.729-1.213 4.115-3.145-0.475-0.735-1.287-1.177-2.161-1.177-2.272-0.052-3.491 2.651-1.953 4.323zM15.115 4.697l5.359-3.104-1.708-0.963-7.391 4.281 0.589 0.328 1.119 0.629 2.032-1.176zM21.161 1.307c0.089 0.027 0.161 0.1 0.188 0.188l2.484 7.593c0.047 0.131-0.005 0.272-0.125 0.344-1.968 1.156-2.916 3.489-2.317 5.693 0.656 2.391 2.937 3.953 5.401 3.703 0.135-0.011 0.265 0.073 0.307 0.203l2.563 7.803c0.041 0.131-0.011 0.271-0.125 0.344l-7.859 4.771c-0.037 0.021-0.084 0.036-0.131 0.036-0.068 0.016-0.14 0-0.203-0.041l-2.765-1.797c-0.048-0.031-0.084-0.077-0.109-0.129l-5.396-12.896-8.219 4.875c-0.016 0.011-0.037 0.021-0.052 0.032-0.084 0.036-0.183 0.025-0.261-0.021l-1.859-1.093c-0.136-0.073-0.188-0.245-0.115-0.381l7.953-15.749c0.025-0.057 0.077-0.104 0.135-0.131l7.959-4.609c0.088-0.052 0.197-0.057 0.292-0.005zM12.839 6.407l-1.932-1.089-7.693 15.229 1.396 0.823 6.631-9.015c0.063-0.089 0.167-0.136 0.271-0.12 0.104 0.011 0.192 0.077 0.235 0.177l7.228 17.296 1.933 1.251-8.063-24.552zM26.245 16.964c-2.256 0-3.787-2.292-2.923-4.376 0.86-2.083 3.563-2.619 5.156-1.025 0.595 0.593 0.928 1.396 0.928 2.235 0.005 1.749-1.412 3.167-3.161 3.167z" />
                              </svg>
                              <h4>expo CLI</h4>
                            </div>
                            <div className="tb-box-img">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#fff"
                                width="85px"
                                height="85px"
                                viewBox="0 0 512 512"
                                id="icons"
                              >
                                <path
                                  id="icon"
                                  d="M93.19,329.38,140.64,25.31c1.64-10.37,15.55-12.82,20.46-3.55l51,95.45ZM432,400,385.26,123.21a11,11,0,0,0-18.54-6L80,400l159.36,91.91a33.18,33.18,0,0,0,31.91,0ZM302.36,158.93,265.82,89.39a10.86,10.86,0,0,0-19.36,0L85.83,375.74Z"
                                />
                              </svg>
                              <h4>Firebase</h4>
                            </div>
                          </div>
                        </div>
                      </Tab>
                      <Tab eventKey="AI Development" title="AI Development">
                        <div className="technologies-tabContent">
                          <p>
                            Our expertise ensures an exceptional user experience
                            with cutting-edge technology at the forefront of
                            frontend development.
                          </p>
                          <div className="technologies-box">
                            <div className="tb-box-img">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#fff"
                                width="85px"
                                height="85px"
                                viewBox="0 0 32 32"
                              >
                                <path d="M26.135 16l0.13 6.266-4.13-2.401v8.938l-5.469 3.198v-32l13.599 7.865v7.068l-8.13-4.797v3.599zM1.734 7.865l13.599-7.865v32l-5.469-3.198v-18.667l-8.13 4.797z" />
                              </svg>
                              <h4>Tensor Flow</h4>
                            </div>
                            <div className="tb-box-img">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#fff"
                                width="85px"
                                height="85px"
                                viewBox="0 0 24 24"
                                role="img"
                              >
                                <path d="M16.922 0h2.623v18.104h-2.623zm-4.126 12.94h2.623v2.57h-2.623zm0-7.037h2.623v5.446h-2.623zm0 11.197h2.623v5.446h-2.623zM4.456 5.896h2.622V24H4.455zm4.213 2.559h2.623v2.57H8.67zm0 4.151h2.623v5.447H8.67zm0-11.187h2.623v5.446H8.67Z" />
                              </svg>
                              <h4>Pandas</h4>
                            </div>
                            <div className="tb-box-img">
                              <svg
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#fff"
                                stroke="#fff"
                              >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                  id="SVGRepo_tracerCarrier"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                  <polygon
                                    points="14.048 7.689 9.405 5.327 4.309 7.89 9.078 10.303 14.048 7.689"
                                    fill="#fff"
                                  ></polygon>
                                  <polygon
                                    points="16.177 8.771 21.045 11.247 15.994 13.803 11.218 11.386 16.177 8.771"
                                    fill="#fff"
                                  ></polygon>
                                  <polygon
                                    points="22.678 5.363 27.679 7.89 23.207 10.153 18.328 7.674 22.678 5.363"
                                    fill="#fff"
                                  ></polygon>
                                  <polygon
                                    points="20.526 4.274 16.023 2 11.57 4.239 16.209 6.597 20.526 4.274"
                                    fill="#fff"
                                  ></polygon>
                                  <polygon
                                    points="17.006 23.809 17.006 30 22.46 27.258 22.454 21.064 17.006 23.809"
                                    fill="#fff"
                                  ></polygon>
                                  <polygon
                                    points="22.452 18.903 22.446 12.774 17.006 15.499 17.006 21.63 22.452 18.903"
                                    fill="#fff"
                                  ></polygon>
                                  <polygon
                                    points="29 17.754 29 23.969 24.348 26.308 24.345 20.122 29 17.754"
                                    fill="#fff"
                                  ></polygon>
                                  <polygon
                                    points="29 15.581 29 9.491 24.339 11.826 24.343 17.967 29 15.581"
                                    fill="#fff"
                                  ></polygon>
                                  <path
                                    d="M15.08,15.5l-3.674-1.861v8.045S6.913,12.05,6.5,11.185a.9.9,0,0,0-.331-.264C5.361,10.5,3,9.29,3,9.29V23.5L6.266,25.26V17.832s4.445,8.607,4.49,8.7a4.026,4.026,0,0,0,.968,1.32c.635.423,3.357,2.073,3.357,2.073Z"
                                    fill="#ffffff"
                                  ></path>
                                </g>
                              </svg>
                              <h4>numpy</h4>
                            </div>
                            <div className="tb-box-img">
                              <img src={Mat} alt="" />
                              <h4>matplotlib</h4>
                            </div>
                            <div className="tb-box-img">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#fff"
                                width="85px"
                                height="85px"
                                viewBox="0 0 32 32"
                              >
                                <path d="M16.005 0.052l-9.369 9.375c-2.491 2.464-3.891 5.819-3.891 9.319s1.4 6.853 3.891 9.317c2.457 2.484 5.817 3.885 9.317 3.885s6.853-1.401 9.312-3.885c5.297-5.188 5.297-13.563 0.115-18.636l-2.317 2.313c3.859 3.859 3.859 10.145 0 14.005-3.86 3.859-10.145 3.859-14.005 0-3.86-3.86-3.86-10.147 0-14.005l6.177-6.172 0.776-0.885zM20.749 5.235c-0.973 0-1.765 0.792-1.765 1.765s0.792 1.76 1.765 1.76c0.975 0 1.761-0.787 1.761-1.76s-0.787-1.765-1.761-1.765z" />
                              </svg>
                              <h4>Pytorch</h4>
                            </div>
                            <div className="tb-box-img">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#fff"
                                width="85px"
                                height="85px"
                                viewBox="0 0 24 24"
                                role="img"
                              >
                                <path d="M4.37 18.34c-.9-.09-1.8-.26-2.68-.5l-.08-.02.02-.08c.26-.85.59-1.68.98-2.47l.04-.08.07.04c.59.33 1.22.63 1.85.89l.06.02-.01.06c-.1.67-.15 1.36-.17 2.05v.09h-.08zM6.31 6.23v-.02c-.52.01-1.04.04-1.55.1.06.53.16 1.05.27 1.56.36-.6.79-1.15 1.28-1.64zM4.46 18.95v-.07l-.07-.01c-.76-.07-1.53-.2-2.29-.38l-.2-.05.11.18c.69 1.04 1.53 1.96 2.5 2.74l.16.13-.03-.2c-.11-.8-.17-1.59-.18-2.34zM8.17.7c-.93.32-1.81.75-2.62 1.28.61.11 1.22.25 1.81.43.24-.59.51-1.15.81-1.71zm3.87-.64c-.46 0-.91.03-1.36.08.63.44 1.24.92 1.81 1.45l.48.44-.47.45c-.39.37-.76.77-1.12 1.2l-.02.02s-.07.08-.18.21c.28-.03.57-.05.86-.05 4.49 0 8.14 3.64 8.14 8.14 0 4.49-3.64 8.14-8.14 8.14-1.56 0-3.02-.44-4.25-1.2-.61.07-1.22.1-1.84.1-.29 0-.57-.01-.86-.02.02.93.11 1.88.26 2.88 1.91 1.29 4.21 2.05 6.69 2.05 6.6 0 11.94-5.35 11.94-11.94 0-6.6-5.34-11.95-11.94-11.95zm-1.58 2.82c.24-.28.48-.55.73-.82-.56-.48-1.15-.91-1.77-1.3-.38.64-.71 1.31-.99 1.99.54.2 1.06.43 1.58.68.23-.31.4-.49.45-.55zM2.35 9.7l.05.07.07-.05c.55-.4 1.13-.77 1.73-1.1l.06-.02-.02-.07c-.18-.67-.32-1.37-.41-2.08l-.01-.08-.08.02c-.88.16-1.76.4-2.6.7l-.08.03.03.08c.35.86.77 1.7 1.26 2.5zm-.14 1.15l-.07.05C1.5 11.42.89 12 .33 12.62l-.06.06.06.05c.62.54 1.29 1.04 1.99 1.48l.07.05.04-.07c.31-.56.67-1.11 1.05-1.64l.04-.05-.04-.05c-.44-.49-.85-1-1.23-1.54l-.04-.06zm4.69 7.53l.21-.01-.16-.13c-.64-.52-1.19-1.13-1.64-1.83v-.02l-.13-.06-.02.11c-.08.6-.13 1.22-.14 1.86v.08h.08c.28.02.57.02.85.02.31.01.63 0 .95-.02zM6.5 5.19c.13-.59.29-1.17.48-1.74-.75-.21-1.52-.37-2.29-.48-.07.78-.08 1.56-.03 2.33.61-.07 1.23-.1 1.84-.11zm1.15-.04c.52-.33 1.08-.61 1.67-.82-.42-.19-.84-.37-1.28-.53-.15.44-.28.9-.39 1.35zm-5.55 9.7l-.06-.04c-.62-.39-1.21-.82-1.77-1.28l-.16-.13.03.21c.15 1.15.47 2.26.94 3.32l.08.19.07-.19c.23-.68.52-1.35.84-1.99l.03-.09zM3.63 3.52c-.71.71-1.34 1.5-1.85 2.37.62-.18 1.24-.33 1.87-.44-.04-.64-.05-1.28-.02-1.93zm.36 8.38l.01-.21c.03-.73.15-1.44.37-2.13l.06-.2-.18.1c-.47.27-.93.57-1.37.89l-.07.05.05.07c.31.44.64.87.99 1.28l.14.15zm.08 1.22l-.03-.2-.12.18c-.33.47-.64.95-.92 1.45l-.04.07.07.04c.5.28 1.03.54 1.56.77l.19.08-.09-.19c-.31-.7-.52-1.44-.62-2.2zm-2.33-2.85l.06-.05-.04-.06c-.37-.6-.71-1.23-1.01-1.87l-.09-.18-.06.2C.25 9.39.06 10.52.03 11.66l-.01.21.15-.15c.49-.52 1.02-1.02 1.57-1.45z" />
                              </svg>
                              <h4>Anaconda</h4>
                            </div>
                          </div>
                        </div>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div>
            </section>

            {/* <Teamswiper /> */}

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
                      <Link to="/blogs/seo" className="blog-main-cont">
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
                      </Link>
                    </div>
                    <div className="blog-grid-right bgr-home">
                      <Link to="/blogs/ai" className="blog-main-cont bm-r-cont">
                        <img src={Blog1} alt="" />
                        <div>
                          <h4>The Rise of AI: Transforming Business in 2023</h4>
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
                            2023
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
                          <h4>Quantum Computing: The Next Frontier in 2023</h4>
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

            <section className="faq-section">
              <div data-speed={0.85} className="faqrectangle"></div>
              <div className="faq-circle"></div>
              <div className="box">
                <div className="faq-content">
                  <h3 className="gradient-text">Frequently Asked Questions</h3>
                  <div className="faq-accordian-box">
                    <Accordion defaultActiveKey={"0"}>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <h5>
                            What is AI Development and how can it benefit my
                            business?
                          </h5>
                          <BsChevronDown />
                        </Accordion.Header>
                        <Accordion.Body>
                          AI Development involves creating systems that can
                          perform tasks that typically require human
                          intelligence, such as visual perception, speech
                          recognition, decision-making, and language
                          translation. By implementing AI in your business, you
                          can improve efficiency, enhance customer experiences,
                          and gain insights through data analysis.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          <h5>
                            How does Business Automation improve operational
                            efficiency?
                          </h5>
                          <BsChevronDown />
                        </Accordion.Header>
                        <Accordion.Body>
                          Business Automation involves using technology to
                          perform repetitive tasks, freeing up human workers for
                          more strategic activities. It helps streamline
                          operations, reduce errors, and save time and costs.
                          Examples include automated inventory management,
                          customer relationship management, and workflow
                          automation.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          <h5>
                            What types of Software Development services do you
                            offer?
                          </h5>
                          <BsChevronDown />
                        </Accordion.Header>
                        <Accordion.Body>
                          We offer a range of Software Development services
                          including custom software solutions, web development,
                          and enterprise software development. Our team
                          specializes in creating scalable, secure, and
                          user-friendly software tailored to your business
                          needs.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          <h5>
                            Can you develop mobile apps for both iOS and
                            Android?
                          </h5>
                          <BsChevronDown />
                        </Accordion.Header>
                        <Accordion.Body>
                          Yes, we develop mobile applications for both iOS and
                          Android platforms. Our mobile development services
                          include designing, coding, and deploying apps that
                          offer a seamless user experience and meet your
                          business objectives.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header>
                          <h5>
                            How long does it take to develop a custom software
                            solution?
                          </h5>
                          <BsChevronDown />
                        </Accordion.Header>
                        <Accordion.Body>
                          The timeline for developing a custom software solution
                          varies depending on the project's complexity and
                          scope. Typically, it involves several phases including
                          requirements gathering, design, development, testing,
                          and deployment. We work closely with clients to ensure
                          timely delivery and high-quality results.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="5">
                        <Accordion.Header>
                          <h5>
                            What industries do you have experience working with?
                          </h5>
                          <BsChevronDown />
                        </Accordion.Header>
                        <Accordion.Body>
                          We have extensive experience working with various
                          industries including healthcare, finance, retail,
                          fitness, and more. Our solutions are tailored to meet
                          the specific needs and challenges of each industry,
                          ensuring effective results and satisfied clients.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </div>
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
export default Home;
