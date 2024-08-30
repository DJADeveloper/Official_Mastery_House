import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide
import { Navigation, Thumbs } from "swiper/modules"; // Import Swiper modules
import { useMediaQuery } from "react-responsive";
import "../home.css";
import ServiceImg from "../assets/img/serviceimg.png";
// New image for web development
// import HTML5Img from "./assets/img/html5.svg";
// import CSS3Img from "./assets/img/css3.svg";
// import JSImg from "./assets/img/javascript.svg";
// import ReactImg from "./assets/img/reactimg.svg";
// import NodeImg from "./assets/img/nodejs.svg";
// import WordPressImg from "./assets/img/wordpress.svg";
// import SEOImg from "./assets/img/seo.svg";

import AboutImg from "../assets/img/aboutimg.png";
import ReactImg from "../assets/img/reactimg.svg";
import NextImg from "../assets/img/nextimg.svg";
import MUIImg from "../assets/img/material-ui-img.svg";
import TSImg from "../assets/img/typescriptimg.svg";
import Zepline from "../assets/img/zepline.svg";
import Flask from "../assets/img/flask.svg";
import Mat from "../assets/img/matlab.svg";

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
import { Tab, Tabs } from "react-bootstrap";

const WebDevelopment = () => {
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

            {/* Web Development Section */}
            <section className="about-section">
              <div className="main-about-circle"></div>
              <div className="about-circle-2"></div>
              <div className="about-circle-3"></div>
              <div className="box">
                <div className="about-content service-content">
                  <div className="about-c-top">
                    <h4>Web Development</h4>
                    <h1 className="gradient-text">
                      Elevate Your Online Presence <br />
                      with Our Expert Web Development Services
                    </h1>
                    <p>
                      At The Mastery House, we deliver cutting-edge web
                      development services designed to enhance your digital
                      presence. From creating responsive websites to developing
                      e-commerce platforms and custom web applications, our
                      expert team ensures your business stands out in the
                      digital landscape.
                    </p>
                  </div>
                  <img src={ServiceImg} alt="Web Development Services" />
                  <div className="about-flex service-flex">
                    <div className="about-flex-box">
                      <div className="about-circle about-circle1"></div>
                      <h3>Custom Website Development</h3>
                      <p>
                        Build unique, scalable websites tailored to your
                        business needs, designed to captivate your target
                        audience and drive conversions.
                      </p>
                    </div>
                    <div className="about-flex-box">
                      <div className="about-circle about-circle2"></div>
                      <h3>E-Commerce Development</h3>
                      <p>
                        Develop robust e-commerce platforms with seamless
                        integration and user-friendly design to boost your
                        online sales.
                      </p>
                    </div>
                    <div className="about-flex-box">
                      <div className="about-circle about-circle3"></div>
                      <h3>Responsive Web Design</h3>
                      <p>
                        Create responsive web designs that provide an optimal
                        viewing experience across all devices, ensuring maximum
                        engagement and accessibility.
                      </p>
                    </div>
                    <div className="about-flex-box">
                      <div className="about-circle about-circle1"></div>
                      <h3>SEO-Friendly Websites</h3>
                      <p>
                        Optimize your website for search engines to enhance
                        visibility, attract more traffic, and increase
                        conversions.
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
                  {/* Conditionally render Swiper or Grid based on screen size */}
                  {isMobile ? (
                    <Swiper
                      spaceBetween={20}
                      slidesPerView={1} // 1 slide per view on mobile
                      modules={[Navigation, Thumbs]} // Include Swiper modules
                      thumbs={{ swiper: thumbsSwiper }} // Link to thumbs swiper
                      breakpoints={{
                        640: {
                          slidesPerView: 1,
                        },
                        768: {
                          slidesPerView: 2, // 2 slides per view on tablets
                        },
                        1024: {
                          slidesPerView: 3, // 3 slides per view on desktops
                        },
                      }}
                      style={{
                        width: "100%",
                        overflow: "visible",
                      }}
                    >
                      <SwiperSlide className="about-grid-content">
                        <div className="ag-circle-1"></div>
                        <h5>Custom Solutions for Unique Challenges</h5>
                        <p>
                          At The Mastery House, we recognize that each business
                          is unique. Our web development services are tailored
                          to meet your specific needs, ensuring innovative,
                          efficient, and scalable solutions that directly
                          address your challenges.
                        </p>
                      </SwiperSlide>
                      <SwiperSlide className="about-grid-content">
                        <div className="ag-circle-2"></div>
                        <h5>Reduce Costs</h5>
                        <p>
                          By optimizing your web development processes, we help
                          reduce waste and improve productivity. Our efficient
                          development practices ensure that you get more out of
                          your existing resources, driving down costs while
                          delivering quality.
                        </p>
                      </SwiperSlide>
                      <SwiperSlide className="about-grid-content">
                        <div className="ag-circle-3"></div>
                        <h5>Drive Business Growth</h5>
                        <p>
                          Our focus is on building resilient, outcomes-driven
                          web solutions that attract and retain users. With a
                          website that effectively converts visitors into
                          customers, we help you drive sustained business
                          growth.
                        </p>
                      </SwiperSlide>
                      <SwiperSlide className="about-grid-content">
                        <div className="ag-circle-1"></div>
                        <h5>Accelerate Innovation</h5>
                        <p>
                          Stay ahead of the competition with websites designed
                          to support rapid innovation. Our development teams
                          enhance your website's capabilities, improving
                          efficiency and reducing the time to market for new
                          features.
                        </p>
                      </SwiperSlide>
                      <SwiperSlide className="about-grid-content">
                        <div className="ag-circle-2"></div>
                        <h5>Enhance User Experience</h5>
                        <p>
                          We prioritize creating seamless and intuitive user
                          experiences that keep visitors engaged. By focusing on
                          usability and accessibility, we ensure that your
                          website provides a positive experience for all users.
                        </p>
                      </SwiperSlide>
                      <SwiperSlide className="about-grid-content">
                        <div className="ag-circle-3"></div>
                        <h5>Boost SEO Performance</h5>
                        <p>
                          Our SEO-optimized web development practices ensure
                          that your website is easily discoverable by search
                          engines. Higher rankings lead to increased visibility,
                          driving more organic traffic to your business.
                        </p>
                      </SwiperSlide>
                    </Swiper>
                  ) : (
                    <div className="about-grid">
                      {/* Grid Layout for larger screens */}
                      <div className="about-grid-content">
                        <div className="ag-circle-1"></div>
                        <h5>Custom Solutions for Unique Challenges</h5>
                        <p>
                          At The Mastery House, we recognize that each business
                          is unique. Our web development services are tailored
                          to meet your specific needs, ensuring innovative,
                          efficient, and scalable solutions that directly
                          address your challenges.
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
                          Our focus is on building resilient, outcomes-driven
                          web solutions that attract and retain users. With a
                          website that effectively converts visitors into
                          customers, we help you drive sustained business
                          growth.
                        </p>
                      </div>
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
                          experiences that keep visitors engaged. By focusing on
                          usability and accessibility, we ensure that your
                          website provides a positive experience for all users.
                        </p>
                      </div>
                      <div className="about-grid-content agc-3">
                        <div className="ag-circle-3"></div>
                        <h5>Boost SEO Performance</h5>
                        <p>
                          Our SEO-optimized web development practices ensure
                          that your website is easily discoverable by search
                          engines. Higher rankings lead to increased visibility,
                          driving more organic traffic to your business.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
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

export default WebDevelopment;
