import React from "react";
import "./home.css";
import Logo from "./assets/img/logo.png";
import Team1 from "./assets/img/team-1.png";
import LinkedIn from "./assets/img/linkedin.png";
import Twitter from "./assets/img/twitter.png";
import Blog1 from "./assets/img/blog1.png";
import Case1 from "./assets/img/case1.png";
import CaseLogo1 from "./assets/img/ikea.png";
import Booking from "./assets/img/booking.png";
import GIT1 from "./assets/img/Capa_1.svg";
import GIT2 from "./assets/img/asssvg.svg";
import GIT3 from "./assets/img/asssvg.svg";
import ServiceImg from "./assets/img/serviceimg.png";
import AboutImg from "./assets/img/aboutimg.png";
import ReactImg from "./assets/img/reactimg.svg";
import NextImg from "./assets/img/nextimg.svg";
import MUIImg from "./assets/img/material-ui-img.svg";
import TSImg from "./assets/img/typescriptimg.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import {
  BsChevronRight,
  BsChevronLeft,
  BsArrowRight,
  BsArrowUpRight,
} from "react-icons/bs";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
import Accordion from "react-bootstrap/Accordion";

const items = [
  {
    name: "AI",
    color: "#9C42F5",
  },
  {
    name: "Blockchain",
    color: "#0FA",
  },
  {
    name: "Software",
    color: "#4579F5",
  },
  {
    name: "Consulting",
    color: "#F43F5E",
  },
  {
    name: "AI",
    color: "#9C42F5",
  },
  {
    name: "Blockchain",
    color: "#0FA",
  },
  {
    name: "Software",
    color: "#4579F5",
  },
  {
    name: "Consulting",
    color: "#F43F5E",
  },
];
const service = () => {
  return (
    <div className="masteryhouse">
      <main className="homepage" id="home_page">
        {/* <div className="circle-1"></div>
            <div className="circle-2"></div> */}
        <div className="circle-3"></div>
        <header>
          <div className="box">
            <div className="header_cont">
              <img src={Logo} alt="" />
              <div className="header_right">
                <a href="#">Home</a>
                <a href="/about">About</a>
                <a href="#">Case Studies</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
              </div>
            </div>
          </div>
        </header>
        <section className="about-section">
          <div className="main-about-circle"></div>
          <div className="about-circle-2"></div>
          <div className="about-circle-3"></div>
          <div className="box">
            <div className="about-content service-content">
              <div className="about-c-top">
                <h4>Blockchain Development</h4>
                <h1 className="gradient-text">
                  Unlocking the Potential <br />
                  of Blockchain Technology
                </h1>
                <p>
                  Blockchain technology offers unprecedented security,
                  transparency, and efficiency. At TheMastery House, we harness
                  these qualities to deliver custom blockchain development
                  servicesthat are as innovative as they are reliable. From
                  creating smart contracts that automatetransactions without
                  intermediaries to developing decentralized applications
                  (dApps) that opennew avenues for your business, our blockchain
                  solutions are designed to set you apart in thedigital
                  landscape.
                </p>
              </div>
              <img src={ServiceImg} alt="" />
              <div className="about-flex service-flex">
                <div className="about-flex-box">
                  <div className="about-circle"></div>
                  <h3>Smart Contract Development</h3>
                  <p>
                    Streamline operations and ensure trust with our smart
                    contract development services, tailored to automate your
                    processes and secure your transactions.
                  </p>
                </div>
                <div className="about-flex-box">
                  <div className="about-circle2"></div>
                  <h3>Decentralized Applications (dApps)</h3>
                  <p>
                    Revolutionize your online presence with dApps that offer
                    unparalleled security, uptime, and user control,
                    custom-built for your specific business needs.
                  </p>
                </div>
                <div className="about-flex-box">
                  <div className="about-circle3"></div>
                  <h3>Token Development</h3>
                  <p>
                    Expand your digital footprint with custom tokens, designed
                    to suit your business model, whether it’s for a new
                    cryptocurrency or a unique utility token within your
                    ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="technologies-section">
          <div className="box">
            <div className="technologies-content">
              <h3 className="gradient-text">Technologies & Tools We Use</h3>
              <div className="technologies-tabs">
                <Tabs defaultActiveKey="Frontend" id="uncontrolled-tab-example">
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
                          <img src={ReactImg} alt="" />
                          <h4>React</h4>
                        </div>
                        <div className="tb-box-img">
                          <img src={MUIImg} alt="" />
                          <h4>MUI</h4>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="Mobile Development" title="Mobile Development">
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
                </Tabs>
              </div>
            </div>
          </div>
        </section>
        <section className="getintouch-section">
          <div className="marquee-main-box">
            <Marquee>
              {items.map((item, index) => (
                <div className="Marquee-Card" key={index}>
                  <h3
                    style={{
                      background: `linear-gradient(180deg, ${item.color} 0%, #e8f0ff 100%)`,
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {item.name}
                  </h3>
                  <div></div>
                </div>
              ))}
            </Marquee>
          </div>
        </section>
        <section className="booking-section">
          <div className="booking-cont">
            <div className="booking-img">
              <img src={Booking} alt="" />
            </div>
            <div className="git-box">
              <div className="git-circle-1"></div>
              <div className="git-circle-2"></div>
              <div className="git-b-top">
                <h3 className="gradient-text">Book a Call with Us</h3>
                <p>
                  Ready to transform your business with blockchain and AI?
                  Consult with our masters todayand take the first step towards
                  a future of innovation and success.
                </p>
              </div>
              <div className="gitsvg-box">
                <div>
                  <img src={GIT1} alt="" />
                  <span>
                    Initial Consultation{" "}
                    <h6>
                      Let's discuss how we can redefine the digital narrative
                      together
                    </h6>
                  </span>
                </div>
                <div>
                  <img src={GIT2} alt="" />
                  <span>
                    Advanced Strategy Session
                    <h6>
                      Deep dive into your digital needs and plot the course
                      ahead
                    </h6>
                  </span>
                </div>
                <div>
                  <img src={GIT3} alt="" />
                  <span>
                    Exclusive Partnership Meeting
                    <h6>Let's collaborate and create digital excellence</h6>
                  </span>
                </div>
              </div>
              <button className="gradient-btn">Get Started</button>
            </div>
          </div>
        </section>
        <footer>
          <div className="box">
            <div className="footer-content">
              <img src={Logo} alt="" />
              <h5>© 2023 The Mastery House. All rights reserved</h5>
              <div className="tb-social">
                <div>
                  <FaLinkedinIn />
                </div>
                <div>
                  <FaXTwitter />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default service;
