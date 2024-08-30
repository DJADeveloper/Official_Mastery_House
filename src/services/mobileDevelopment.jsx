import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide
import { Navigation, Thumbs } from "swiper/modules"; // Import Swiper modules
import { useMediaQuery } from "react-responsive";
import "../home.css";
import ServiceImg from "../assets/img/serviceimg.png";
import AboutImg from "../assets/img/aboutimg.png";
import ReactImg from "../assets/img/reactimg.svg";
import NextImg from "../assets/img/nextimg.svg";
import MUIImg from "../assets/img/material-ui-img.svg";
import TSImg from "../assets/img/typescriptimg.svg";
import Zepline from "../assets/img/zepline.svg";
import Flask from "../assets/img/flask.svg";
import Mat from "../assets/img/matlab.svg";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import Header from "../components/Header";
import Marque from "../components/Marque";
import Footer from "../components/Footer";
import Booking from "../components/Booking";

import { FaNodeJs, FaPython, FaSwift } from "react-icons/fa6";

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

const MobileDevelopmentService = () => {
  gsap.registerPlugin(
    Draggable,
    SplitText,
    InertiaPlugin,
    ScrollSmoother,
    ScrollTrigger,
    DrawSVGPlugin
  );
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
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
            {/* Mobile Development Section */}
            <section className="about-section">
              <div className="main-about-circle"></div>
              <div className="about-circle-2"></div>
              <div className="about-circle-3"></div>
              <div className="box">
                <div className="about-content service-content">
                  <div className="about-c-top">
                    <h4>Mobile Development Services</h4>
                    <h1 className="gradient-text">
                      Innovative Mobile App Development Solutions
                    </h1>
                    <p>
                      In today’s mobile-first world, having a robust mobile
                      presence is essential. At The Mastery House, we specialize
                      in creating innovative and user-friendly mobile
                      applications that enhance customer engagement and drive
                      business growth. Whether you need a{" "}
                      <strong>consumer-facing app</strong> or a
                      <strong>complex enterprise solution</strong>, our team has
                      the expertise to bring your mobile vision to life.
                    </p>
                  </div>
                  <img src={ServiceImg} alt="Mobile Development Services" />
                  <div className="about-flex service-flex">
                    <div className="about-flex-box">
                      <div className="about-circle about-circle1"></div>
                      <h3>iOS and Android App Development</h3>
                      <p>
                        We develop high-quality mobile apps for iOS and Android
                        platforms that deliver seamless performance and
                        exceptional user experiences.
                      </p>
                    </div>
                    <div className="about-flex-box">
                      <div className="about-circle about-circle2"></div>
                      <h3>Cross-Platform Mobile Solutions</h3>
                      <p>
                        Create versatile cross-platform mobile apps that provide
                        a consistent user experience across all devices and
                        operating systems.
                      </p>
                    </div>
                    <div className="about-flex-box">
                      <div className="about-circle about-circle3"></div>
                      <h3>Enterprise Mobile Applications</h3>
                      <p>
                        Implement robust enterprise mobile solutions designed to
                        optimize business processes and enhance workforce
                        productivity.
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
                      Benefits of Choosing Our Mobile Development Services
                    </h2>
                    <p>
                      At The Mastery House, our mobile development services are
                      designed to provide seamless, high-performance
                      applications that enhance user experience and drive
                      engagement. Here are some of the key benefits you will
                      enjoy:
                    </p>
                  </div>
                  <div className="about-grid">
                    {/* Grid Layout for larger screens */}
                    <div className="about-grid-content">
                      <div className="ag-circle-1"></div>
                      <h5>Cross-Platform Development</h5>
                      <p>
                        Develop applications that run smoothly on both iOS and
                        Android platforms. Our cross-platform approach ensures
                        consistent performance and reduces development costs and
                        time to market.
                      </p>
                    </div>
                    <div className="about-grid-content agc-2">
                      <div className="ag-circle-2"></div>
                      <h5>Native App Performance</h5>
                      <p>
                        Achieve optimal performance with native app development.
                        We utilize the latest frameworks and tools to build
                        high-performance apps that provide a seamless user
                        experience.
                      </p>
                    </div>
                    <div className="about-grid-content agc-3">
                      <div className="ag-circle-3"></div>
                      <h5>Enhanced User Engagement</h5>
                      <p>
                        Our mobile apps are designed with user engagement in
                        mind. Through intuitive interfaces and interactive
                        features, we ensure users stay engaged and return
                        frequently.
                      </p>
                    </div>
                    {!isMobile && (
                      <div>
                        <div className="about-grid-content">
                          <div className="ag-circle-1"></div>
                          <h5>Security and Compliance</h5>
                          <p>
                            We prioritize security in our mobile applications.
                            Our development practices adhere to the highest
                            standards, ensuring your apps are safe, secure, and
                            compliant with industry regulations.
                          </p>
                        </div>
                        <div className="about-grid-content agc-2">
                          <div className="ag-circle-2"></div>
                          <h5>Scalable Solutions</h5>
                          <p>
                            Build mobile apps that grow with your business. Our
                            scalable development approach ensures your app can
                            handle increasing traffic and new features without
                            compromising performance.
                          </p>
                        </div>
                        <div className="about-grid-content agc-3">
                          <div className="ag-circle-3"></div>
                          <h5>Post-Launch Support</h5>
                          <p>
                            We provide ongoing support and maintenance services
                            to ensure your app remains up-to-date, secure, and
                            fully functional after launch, allowing you to focus
                            on your core business.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
            <section className="technologies-section">
              <div className="box">
                <div className="technologies-content">
                  <h3 className=" gradient-text">
                    Technologies & Tools We Use
                  </h3>
                  <div className="technologies-tabs">
                    <Tabs
                      defaultActiveKey="Mobile Development"
                      id="uncontrolled-tab-example"
                    >
                      {/* <Tab eventKey="Frontend" title="Frontend Development">
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
                      </Tab> */}
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
                      {/* <Tab eventKey="AI Development" title="AI Development">
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
                      </Tab> */}
                    </Tabs>
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
};

export default MobileDevelopmentService;
