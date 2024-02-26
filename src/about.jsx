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

function About() {
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
            <div className="about-content">
              <div className="about-c-top">
                <h4>About The Mastery House</h4>
                <h1 className="gradient-text">
                  A Dream Team for <br /> AI, Blockchain, and Software{" "}
                </h1>
              </div>
              <div className="about-grid">
                <div className="about-grid-content">
                  <div className="ag-circle-1"></div>
                  <h5>Innovative Digital Solutions</h5>
                  <p>
                    The Mastery House is where passion for technology meets
                    innovative solutions. We continuously drive forward,
                    pioneering new paths in the digital world.
                  </p>
                </div>
                <div className="about-grid-content agc-2">
                  <div className="ag-circle-2"></div>
                  <h5>Community Commitment</h5>
                  <p>
                    While we innovate in the digital space, our heart lies in
                    the community. We actively support and contribute to
                    organizations focusing on autism for children.
                  </p>
                </div>
                <div className="about-grid-content agc-3">
                  <div className="ag-circle-3"></div>
                  <h5>Tailored Digital Experiences</h5>
                  <p>
                    Our approach is to understand, customize, and deliver unique
                    digital solutions tailored to each client's needs. Every
                    project is a testament to our commitment.
                  </p>
                </div>
              </div>
              <img src={AboutImg} alt="" />
              <div className="about-flex">
                <div className="about-flex-box">
                  <div className="about-circle"></div>
                  <h3>What We Stand For</h3>
                  <p>
                    Innovation, Excellence, and Future-Readiness are the pillars
                    that define our approach. Ourteam of experts brings together
                    diverse skills and deep knowledge in Blockchain,
                    ArtificialIntelligence, and Custom Software Development,
                    ensuring that we deliver solutions that are notonly
                    effective but transformative.
                  </p>
                </div>
                <div className="about-flex-box">
                  <div className="about-circle2"></div>
                  <h3>Our Mission</h3>
                  <p>
                    Innovation, Excellence, and Future-Readiness are the pillars
                    that define our approach. Ourteam of experts brings together
                    diverse skills and deep knowledge in Blockchain,
                    ArtificialIntelligence, and Custom Software Development,
                    ensuring that we deliver solutions that are notonly
                    effective but transformative.
                  </p>
                </div>
                <div className="about-flex-box">
                  <div className="about-circle3"></div>
                  <h3>Why Choose Us</h3>
                  <p>
                    Innovation, Excellence, and Future-Readiness are the pillars
                    that define our approach. Ourteam of experts brings together
                    diverse skills and deep knowledge in Blockchain,
                    ArtificialIntelligence, and Custom Software Development,
                    ensuring that we deliver solutions that are notonly
                    effective but transformative.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="team-section">
          <div className="team-circle-1"></div>
          <div className="team-circle-2"></div>
          <div className="box">
            <div className="swiper-head">
              <h2 className="gradient-text">Our Team</h2>
              <div className="sh-right">
                <span className="team-prev">
                  <BsChevronLeft />
                </span>
                <span className="team-next">
                  <BsChevronRight />
                </span>
              </div>
            </div>
            <Swiper
              spaceBetween={15}
              slidesPerView={1.1}
              modules={[Navigation]}
              navigation={{
                nextEl: ".team-next",
                prevEl: ".team-prev",
              }}
              breakpoints={{
                750: {
                  slidesPerView: 2.5,
                  spaceBetween: 25,
                },
                1000: {
                  slidesPerView: 4.15,
                },
              }}
            >
              <SwiperSlide>
                <div className="team-card">
                  <img src={Team1} />
                  <div className="team-bottom">
                    <h5>
                      Emilia Clark
                      <span>CEO, Founder</span>
                    </h5>
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
              </SwiperSlide>
              <SwiperSlide>
                <div className="team-card">
                  <img src={Team1} />
                  <div className="team-bottom">
                    <h5>
                      Emilia Clark
                      <span>CEO, Founder</span>
                    </h5>
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
              </SwiperSlide>
              <SwiperSlide>
                <div className="team-card">
                  <img src={Team1} />
                  <div className="team-bottom">
                    <h5>
                      Emilia Clark
                      <span>CEO, Founder</span>
                    </h5>
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
              </SwiperSlide>
              <SwiperSlide>
                <div className="team-card">
                  <img src={Team1} />
                  <div className="team-bottom">
                    <h5>
                      Emilia Clark
                      <span>CEO, Founder</span>
                    </h5>
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
              </SwiperSlide>
              <SwiperSlide>
                <div className="team-card">
                  <img src={Team1} />
                  <div className="team-bottom">
                    <h5>
                      Emilia Clark
                      <span>CEO, Founder</span>
                    </h5>
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
              </SwiperSlide>
              <SwiperSlide>
                <div className="team-card">
                  <img src={Team1} />
                  <div className="team-bottom">
                    <h5>
                      Emilia Clark
                      <span>CEO, Founder</span>
                    </h5>
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
              </SwiperSlide>
              <SwiperSlide>
                <div className="team-card">
                  <img src={Team1} />
                  <div className="team-bottom">
                    <h5>
                      Emilia Clark
                      <span>CEO, Founder</span>
                    </h5>
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
              </SwiperSlide>
            </Swiper>
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
}
export default About;
