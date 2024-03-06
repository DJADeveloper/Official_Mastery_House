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
import Case1 from "./assets/img/case1.png";
import CaseLogo1 from "./assets/img/ikea.png";
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
                      Where Innovation Meets Mastery in Blockchain & AI
                    </h1>
                    <p>
                      Embark on a journey of digital transformation with The
                      Mastery House, your premier partner inblockchain and AI.
                      Our mastery in cutting-edge technologies paves the way for
                      innovativesolutions tailored to your business needs.
                      Experience the future of software development andjoin a
                      community where every client is not just valued but
                      celebrated as a respected guest."
                    </p>
                    <button className="gradient-btn">Get Started</button>
                  </div>
                  <div className="hero-cont-right">
                    {/* <img src={HeroImg} alt="" /> */}
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
                      <h5>Blockchain Development</h5>
                      <p>
                        Unlock the power of blockchain with our bespoke
                        development services, including smart contracts,
                        decentralised applications (dApps), and token
                        development.
                      </p>

                      <Link to="/services/blockchain-development">
                        <div className="service-btn">
                          <div className="inner-service-btn">
                            <span>Learn More</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="service-grid-box sgb-2">
                      <div className="circle-sm circle-sm-2"></div>
                      <img src={Development} alt="" />
                      <h5>AI Development</h5>
                      <p>
                        Leverage artificial intelligence to transform your
                        operations, with services ranging from machine learning
                        solutions to natural language processing and AI
                        integration.
                      </p>
                      <Link to="/services/ai-development">
                        <div className="service-btn">
                          <div className="inner-service-btn">
                            <span>Learn More</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="service-grid-box sgb-4">
                      <div className="circle-sm circle-sm-4"></div>
                      <img src={Software} alt="" />
                      <h5>Software Development</h5>
                      <p>
                        Build your digital foundation with our custom software
                        development, mobile app creation, and web development
                        services, tailored to meet your unique requirements.
                      </p>
                      <Link to="/services/software-development">
                        <div className="service-btn">
                          <div className="inner-service-btn">
                            <span>Learn More</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="service-grid-box sgb-3">
                      <div className="circle-sm circle-sm-3"></div>
                      <img src={Consulting} alt="" />
                      <h5>Consulting and Strategy</h5>
                      <p>
                        Navigate the digital landscape with confidence, thanks
                        to our expert consultation in blockchain and AI
                        strategy, ensuring your technology roadmap is robust and
                        future-proof.
                      </p>
                      <Link to="/services/consulting">
                        <div className="service-btn">
                          <div className="inner-service-btn">
                            <span>Learn More</span>
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
                  <a href="/about">
                    Learn More <BsArrowRight />
                  </a>
                </div>
              </div>
            </section>
            <Teamswiper />
            <section className="getintouch-section">
              <div className="marquee-main-box">
                <Marque />
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
                            <div className="inner-service-btn">
                              <span>
                                Learn More <BsArrowUpRight />
                              </span>
                            </div>
                          </div>
                          <h5>
                            Visit Website <BsArrowUpRight />
                          </h5>
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
                            <div className="inner-service-btn">
                              <span className="gradient-text">
                                Learn More <BsArrowUpRight />
                              </span>
                            </div>
                          </div>
                          <h5>
                            Visit Website <BsArrowUpRight />
                          </h5>
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
                            <div className="inner-service-btn">
                              <span className="gradient-text">
                                Learn More <BsArrowUpRight />
                              </span>
                            </div>
                          </div>
                          <h5>
                            Visit Website <BsArrowUpRight />
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
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
                            How frequently am I supposed to pay for this course?
                          </h5>
                          <BsChevronDown />
                        </Accordion.Header>
                        <Accordion.Body>
                          Investing in this course is both economical and
                          practical. With a single payment of $9.99, you unlock
                          lifetime access to a wealth of knowledge and
                          resources. This one-off payment model not only makes
                          it affordable but also ensures that you can learn at
                          your own pace without worrying about recurring fees.
                          It's designed to be a cost-effective solution for
                          those eager to expand their skills without the
                          financial burden of subscription-based models.
                          Consider this a small investment in your personal or
                          professional development that pays dividends in
                          knowledge and expertise over time.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          <h5>
                            How frequently am I supposed to pay for this course?
                          </h5>
                          <BsChevronDown />
                        </Accordion.Header>
                        <Accordion.Body>
                          Investing in this course is both economical and
                          practical. With a single payment of $9.99, you unlock
                          lifetime access to a wealth of knowledge and
                          resources. This one-off payment model not only makes
                          it affordable but also ensures that you can learn at
                          your own pace without worrying about recurring fees.
                          It's designed to be a cost-effective solution for
                          those eager to expand their skills without the
                          financial burden of subscription-based models.
                          Consider this a small investment in your personal or
                          professional development that pays dividends in
                          knowledge and expertise over time.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          <h5>
                            How frequently am I supposed to pay for this course?
                          </h5>
                          <BsChevronDown />
                        </Accordion.Header>
                        <Accordion.Body>
                          Investing in this course is both economical and
                          practical. With a single payment of $9.99, you unlock
                          lifetime access to a wealth of knowledge and
                          resources. This one-off payment model not only makes
                          it affordable but also ensures that you can learn at
                          your own pace without worrying about recurring fees.
                          It's designed to be a cost-effective solution for
                          those eager to expand their skills without the
                          financial burden of subscription-based models.
                          Consider this a small investment in your personal or
                          professional development that pays dividends in
                          knowledge and expertise over time.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          <h5>
                            How frequently am I supposed to pay for this course?
                          </h5>
                          <BsChevronDown />
                        </Accordion.Header>
                        <Accordion.Body>
                          Investing in this course is both economical and
                          practical. With a single payment of $9.99, you unlock
                          lifetime access to a wealth of knowledge and
                          resources. This one-off payment model not only makes
                          it affordable but also ensures that you can learn at
                          your own pace without worrying about recurring fees.
                          It's designed to be a cost-effective solution for
                          those eager to expand their skills without the
                          financial burden of subscription-based models.
                          Consider this a small investment in your personal or
                          professional development that pays dividends in
                          knowledge and expertise over time.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header>
                          <h5>
                            How frequently am I supposed to pay for this course?
                          </h5>
                          <BsChevronDown />
                        </Accordion.Header>
                        <Accordion.Body>
                          Investing in this course is both economical and
                          practical. With a single payment of $9.99, you unlock
                          lifetime access to a wealth of knowledge and
                          resources. This one-off payment model not only makes
                          it affordable but also ensures that you can learn at
                          your own pace without worrying about recurring fees.
                          It's designed to be a cost-effective solution for
                          those eager to expand their skills without the
                          financial burden of subscription-based models.
                          Consider this a small investment in your personal or
                          professional development that pays dividends in
                          knowledge and expertise over time.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="5">
                        <Accordion.Header>
                          <h5>
                            How frequently am I supposed to pay for this course?
                          </h5>
                          <BsChevronDown />
                        </Accordion.Header>
                        <Accordion.Body>
                          Investing in this course is both economical and
                          practical. With a single payment of $9.99, you unlock
                          lifetime access to a wealth of knowledge and
                          resources. This one-off payment model not only makes
                          it affordable but also ensures that you can learn at
                          your own pace without worrying about recurring fees.
                          It's designed to be a cost-effective solution for
                          those eager to expand their skills without the
                          financial burden of subscription-based models.
                          Consider this a small investment in your personal or
                          professional development that pays dividends in
                          knowledge and expertise over time.
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
