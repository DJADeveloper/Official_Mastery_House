import React, { useState } from "react";
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
import AboutImg from "./assets/img/aboutimg.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import {
  BsChevronRight,
  BsChevronLeft,
  BsArrowRight,
  BsArrowUpRight,
  BsXLg,
  BsList,
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
const Blogs = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
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
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/casestudy">Case Studies</a>
                <a href="/service">Services</a>
                <a href="/contact">Contact</a>
              </div>
              <div className="hr-mob-icon" onClick={toggleMobileMenu}>
                <BsList />
              </div>
              {isMobileMenuOpen && (
                <div className="mobile-menu">
                  <div className="mobile-menu-top">
                    <img src={Logo} alt="" />
                    <BsXLg onClick={closeMobileMenu} />
                  </div>
                  <div className="mobile-menu-bottom">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/casestudy">Case Studies</a>
                    <a href="/service">Services</a>
                    <a href="/contact">Contact</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>
        <section className="about-section blogs-main-section">
          <div className="main-about-circle"></div>
          <div className="about-circle-2"></div>
          <div className="about-circle-3"></div>
          <div className="box">
            <div className="about-content ">
              <div className="about-c-top">
                <h4>Read Our Blogs</h4>
                <h1 className="gradient-text">
                  Our Blog on the <br />
                  Cutting Edge of Tech
                </h1>
              </div>
              <div className="blogs-grid">
                <div className="blog-main-cont bm-r-cont">
                  <img src={Blog1} alt="" />
                  <div>
                    <h4>
                      Navigating the Future: How AI is Redefining Our Approach
                      to Problem-Solving
                    </h4>
                    <a href="#">
                      Read More <BsArrowRight />
                    </a>
                  </div>
                </div>
                <div className="blog-main-cont bm-r-cont">
                  <img src={Blog1} alt="" />
                  <div>
                    <h4>
                      Navigating the Future: How AI is Redefining Our Approach
                      to Problem-Solving
                    </h4>
                    <a href="#">
                      Read More <BsArrowRight />
                    </a>
                  </div>
                </div>
                <div className="blog-main-cont bm-r-cont">
                  <img src={Blog1} alt="" />
                  <div>
                    <h4>
                      Navigating the Future: How AI is Redefining Our Approach
                      to Problem-Solving
                    </h4>
                    <a href="#">
                      Read More <BsArrowRight />
                    </a>
                  </div>
                </div>
                <div className="blog-main-cont bm-r-cont">
                  <img src={Blog1} alt="" />
                  <div>
                    <h4>
                      Navigating the Future: How AI is Redefining Our Approach
                      to Problem-Solving
                    </h4>
                    <a href="#">
                      Read More <BsArrowRight />
                    </a>
                  </div>
                </div>
                <div className="blog-main-cont bm-r-cont">
                  <img src={Blog1} alt="" />
                  <div>
                    <h4>
                      Navigating the Future: How AI is Redefining Our Approach
                      to Problem-Solving
                    </h4>
                    <a href="#">
                      Read More <BsArrowRight />
                    </a>
                  </div>
                </div>
                <div className="blog-main-cont bm-r-cont">
                  <img src={Blog1} alt="" />
                  <div>
                    <h4>
                      Navigating the Future: How AI is Redefining Our Approach
                      to Problem-Solving
                    </h4>
                    <a href="#">
                      Read More <BsArrowRight />
                    </a>
                  </div>
                </div>
                <div className="blog-main-cont bm-r-cont">
                  <img src={Blog1} alt="" />
                  <div>
                    <h4>
                      Navigating the Future: How AI is Redefining Our Approach
                      to Problem-Solving
                    </h4>
                    <a href="#">
                      Read More <BsArrowRight />
                    </a>
                  </div>
                </div>
                <div className="blog-main-cont bm-r-cont">
                  <img src={Blog1} alt="" />
                  <div>
                    <h4>
                      Navigating the Future: How AI is Redefining Our Approach
                      to Problem-Solving
                    </h4>
                    <a href="#">
                      Read More <BsArrowRight />
                    </a>
                  </div>
                </div>
                <div className="blog-main-cont bm-r-cont">
                  <img src={Blog1} alt="" />
                  <div>
                    <h4>
                      Navigating the Future: How AI is Redefining Our Approach
                      to Problem-Solving
                    </h4>
                    <a href="#">
                      Read More <BsArrowRight />
                    </a>
                  </div>
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
            <h6>© 2023 The Mastery House. All rights reserved</h6>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Blogs;
