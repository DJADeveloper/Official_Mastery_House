import React from "react";
import "./home.css";
import Logo from "./assets/img/logo.png";
import HeroImg from "./assets/img/hero-img.png";
import Blockchain from "./assets/img/blockchain.png";
import Consulting from "./assets/img/consulting.png";
import Development from "./assets/img/ai-development.png";
import Software from "./assets/img/software.png";
import Rectangle from "./assets/img/Rectangle-Purple.png";
import Circle from "./assets/img/Circle-Green.png";
import Team1 from "./assets/img/team-1.png";
import LinkedIn from "./assets/img/linkedin.png";
import Twitter from "./assets/img/twitter.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import Marquee from "react-fast-marquee";

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

function Home(props) {
  return (
    <div className="masteryhouse">
      <main className="homepage" id="home_page">
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
        <div className="circle-4"></div>
        <header>
          <div className="box">
            <div className="header_cont">
              <img src={Logo} alt="" />
              <div className="header_right">
                <a href="#">Blockchain Development</a>
                <a href="#">AI Development</a>
                <a href="#">Software Development</a>
                <a href="#">Consulting</a>
                <a href="#">About</a>
              </div>
            </div>
          </div>
        </header>
        <section className="hero-section">
          <div className="box">
            <div className="hero-content">
              <div className="hero-cont-left">
                <span>Welcome to The Mastery House</span>
                <h1 className="gradient-text">
                  Where Innovation Meets Mastery in Blockchain & AI
                </h1>
                <p>
                  Embark on a journey of digital transformation with The Mastery
                  House, your premier partner inblockchain and AI. Our mastery
                  in cutting-edge technologies paves the way for
                  innovativesolutions tailored to your business needs.
                  Experience the future of software development andjoin a
                  community where every client is not just valued but celebrated
                  as a respected guest."
                </p>
                <button className="gradient-btn">Get Started</button>
              </div>
              <div className="hero-cont-right">
                <img src={HeroImg} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="service-section">
          <div className="box">
            <div className="service-content">
              <h4>
                Discover our comprehensive suite of services designed to{" "}
                <span className="gradient-text">elevate your business</span> in
                the digital era
              </h4>
              <div className="service-grid-cont">
                <div className="service-grid-box">
                  <div className="circle-sm-1"></div>
                  <img src={Blockchain} alt="" />
                  <h5>Blockchain Development</h5>
                  <p>
                    Unlock the power of blockchain with our bespoke development
                    services, including smart contracts, decentralised
                    applications (dApps), and token development.
                  </p>
                  <div className="service-btn">
                    <div className="inner-service-btn">
                      <span>Learn More</span>
                    </div>
                  </div>
                </div>
                <div className="service-grid-box sgb-2">
                  <img src={Development} alt="" />
                  <h5>AI Development</h5>
                  <p>
                    Leverage artificial intelligence to transform your
                    operations, with services ranging from machine learning
                    solutions to natural language processing and AI integration.
                  </p>
                  <div className="service-btn">
                    <div className="inner-service-btn">
                      <span>Learn More</span>
                    </div>
                  </div>
                </div>
                <div className="service-grid-box sgb-3">
                  <div className="circle-sm-3"></div>
                  <img src={Consulting} alt="" />
                  <h5>Consulting and Strategy</h5>
                  <p>
                    Navigate the digital landscape with confidence, thanks to
                    our expert consultation in blockchain and AI strategy,
                    ensuring your technology roadmap is robust and future-proof.
                  </p>
                  <div className="service-btn">
                    <div className="inner-service-btn">
                      <span>Learn More</span>
                    </div>
                  </div>
                </div>
                <div className="service-grid-box sgb-4">
                  <div className="circle-sm-4"></div>
                  <img src={Software} alt="" />
                  <h5>Software Development</h5>
                  <p>
                    Build your digital foundation with our custom software
                    development, mobile app creation, and web development
                    services, tailored to meet your unique requirements.
                  </p>
                  <div className="service-btn">
                    <div className="inner-service-btn">
                      <span>Learn More</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-graphic-text">
                <img src={Rectangle} alt="" className="rect-img" />
                <img src={Circle} alt="" className="cir-img" />
                <h3>
                  At The Mastery House, we believe in the power of innovation,
                  mastery, and a client-centric approach. Founded on the
                  principles of excellence and dedication, our team of experts
                  is committed to delivering cutting-edge solutions that not
                  only meet but exceed your expectations.
                </h3>
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
                  slidesPerView: 1.5,
                  spaceBetween: 25,
                },
                1000: {
                  slidesPerView: 3.15,
                },
              }}
            >
              <SwiperSlide>
                <div className="team-card">
                  <img src={Team1} />
                  <div className="team-bottom">
                    <h5>
                      Emilia Clark <br />
                      <span>CEO, Founder</span>
                    </h5>
                    <div className="tb-social">
                      <img src={LinkedIn} alt="" />
                      <img src={Twitter} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="team-card">
                  <img src={Team1} />
                  <div className="team-bottom">
                    <h5>
                      Emilia Clark <br />
                      <span>CEO, Founder</span>
                    </h5>
                    <div className="tb-social">
                      <img src={LinkedIn} alt="" />
                      <img src={Twitter} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="team-card">
                  <img src={Team1} />
                  <div className="team-bottom">
                    <h5>
                      Emilia Clark <br />
                      <span>CEO, Founder</span>
                    </h5>
                    <div className="tb-social">
                      <img src={LinkedIn} alt="" />
                      <img src={Twitter} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="team-card">
                  <img src={Team1} />
                  <div className="team-bottom">
                    <h5>
                      Emilia Clark <br />
                      <span>CEO, Founder</span>
                    </h5>
                    <div className="tb-social">
                      <img src={LinkedIn} alt="" />
                      <img src={Twitter} alt="" />
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
          <div className="box">
            <div className="git-box">
              <div className="git-circle-1"></div>
              <div className="git-circle-2"></div>
              <h3 className="gradient-text">We Are Always Here To Help</h3>
              <p>
                Ready to transform your business with blockchain and AI? Consult
                with our masters today and take the first step towards a future
                of innovation and success.
              </p>
              <button className="gradient-btn">Get Started</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
export default Home;
