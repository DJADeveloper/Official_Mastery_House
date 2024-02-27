import React from "react";
import "./home.css";
import Logo from "./assets/img/logo.png";
import HeroImg from "./assets/img/hero-img.png";
import Blockchain from "./assets/img/blockchain.svg";
import Consulting from "./assets/img/consulting.svg";
import Development from "./assets/img/ai-development.svg";
import Software from "./assets/img/software.svg";
import Rectangle from "./assets/img/Rectangle-Purple.png";
import Circle from "./assets/img/Circle-Green.png";
import Team1 from "./assets/img/team-1.png";
import LinkedIn from "./assets/img/linkedin.png";
import Twitter from "./assets/img/twitter.png";
import Blog1 from "./assets/img/blog1.png";
import Case1 from "./assets/img/case1.png";
import CaseLogo1 from "./assets/img/ikea.png";
import Booking from "./assets/img/booking.png";
import GIT1 from "./assets/img/Capa_1.svg";
import GIT2 from "./assets/img/asssvg.svg";
import GIT3 from "./assets/img/epmsvg.svg";
import LaptopMockup from "./assets/img/Mockup.png";
import csProfile from "./assets/img/csprofile.png";
import SemiColon from "./assets/img/semicolon.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { Route, Switch } from "react-router-dom";

import {
  BsChevronRight,
  BsChevronLeft,
  BsArrowRight,
  BsArrowUpRight,
} from "react-icons/bs";
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
const casestudy = () => {
  return (
    <div className="masteryhouse">
      <main className="homepage" id="home_page">
        <div className="circle-1"></div>
        <div className="circle-2"></div>
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
        <section className="casestudy-section hero-section cs-section-2">
          <div className="main-home-circle"></div>
          <div className="box">
            <div className="casestudy-cont main-cs-page">
              <div className="main-cs-circle"></div>
              <div className="casestudy-main">
                <div className="cs-main-grid">
                  <div className="cs-main-right">
                    <img src={Case1} alt="" />
                  </div>
                  <div className="cs-main-left">
                    <img src={CaseLogo1} alt="" />
                    <div className="cs-main-btn">
                      <h4>
                        Decentralized Marketplace for Eco-Friendly Products
                      </h4>
                      <h5>
                        Visit Website <BsArrowUpRight />
                      </h5>
                    </div>
                    <p>
                      EcoMarket, an online platform for eco-friendly products,
                      faced challenges in ensuring transparency and security in
                      transactions. They sought a solution that would in still
                      trust in their marketplace and streamline operations.
                    </p>
                    <div className="ind-serv-box">
                      <span>
                        Industry <h6>Retail</h6>
                      </span>
                      <span>
                        Client <h6>Tyrion Lannister</h6>
                      </span>
                      <span>
                        Services <h6>Blockchain Development, Deployment</h6>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="steps-to-follow-box">
                <div className="main-steps-box">
                  <div className="ms-box-content">
                    <h4 className="gradient-text">
                      1. Conceptualization of the project
                    </h4>
                    <p>
                      We started with the customer journey mapping process,
                      ensuring that we have a complete understanding of the
                      roadblocks IKEA offline customers face when shopping
                      in-store. The understanding then laid the basis for the
                      ERP solution’s feature-set and the integration choices.
                    </p>
                  </div>
                  <div className="ms-box-content msbc-2 ">
                    <h4 className="gradient-text">
                      2. Creation of an ERP solution
                    </h4>
                    <p>
                      We started with the customer journey mapping process,
                      ensuring that we have a complete understanding of the
                      roadblocks IKEA offline customers face when shopping
                      in-store. The understanding then laid the basis for the
                      ERP solution’s feature-set and the integration choices.
                    </p>
                  </div>
                </div>
                <img src={LaptopMockup} alt="" />
                <div className="main-steps-box">
                  <div className="ms-box-content msbc-3">
                    <h4 className="gradient-text">
                      3. Integrate the facility to gather customers’ information
                    </h4>
                    <p>
                      We started with the customer journey mapping process,
                      ensuring that we have a complete understanding of the
                      roadblocks IKEA offline customers face when shopping
                      in-store. The understanding then laid the basis for the
                      ERP solution’s feature-set and the integration choices.
                    </p>
                  </div>
                  <div className="ms-box-content msbc-2 msbc-4 ">
                    <h4 className="gradient-text">
                      4. Deploy the solution across individual IKEA stores
                    </h4>
                    <p>
                      We started with the customer journey mapping process,
                      ensuring that we have a complete understanding of the
                      roadblocks IKEA offline customers face when shopping
                      in-store. The understanding then laid the basis for the
                      ERP solution’s feature-set and the integration choices.
                    </p>
                  </div>
                </div>
              </div>
              <div className="testimonial-cs-box">
                <p>
                  <img src={SemiColon} alt="" />
                  Tackling the Recursion and Dynamic Programming course was like
                  embarking on an intellectual adventure. Initially, the
                  concepts seemed daunting, but as I dove deeper, everything
                  started to click. The course's practical approach, with its
                  emphasis on problem-solving and real-world applications, truly
                  demystified these topics for me. It's not just a course; it's
                  a brain gym where I strengthened my logical and analytical
                  muscles.
                </p>
                <div className="test-cs-profile">
                  <img src={csProfile} alt="" />
                  <h6>
                    John Smith <span>CTO - IKEA</span>
                  </h6>
                </div>
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

export default casestudy;
