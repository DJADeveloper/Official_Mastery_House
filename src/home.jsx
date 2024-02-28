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
  BsList,
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

function Home(props) {
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
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/casestudy">Case Studies</a>
                <a href="/service">Services</a>
                <a href="/contact">Contact</a>
              </div>
              <div className="hr-mob-icon">
                <BsList />
              </div>
            </div>
          </div>
        </header>
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
              <h2>
                Discover our comprehensive suite of services designed to{" "}
                <span className="gradient-text">elevate your business</span> in
                the digital era
              </h2>
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
              <h6>
                View All <BsArrowRight />
              </h6>
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
                  slidesPerView: 3.15,
                },
                1300: {
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
        <section className="casestudy-section">
          <div className="case-circle1"></div>
          <div className="case-circle2"></div>
          <div className="case-circle3"></div>
          <div className="box">
            <div className="casestudy-cont">
              <div className="casestudy-head">
                <h3 className="gradient-text">Case Study</h3>
                <h6>
                  View All <BsArrowRight />
                </h6>
              </div>
              <div className="casestudy-main">
                <div className="cs-main-grid">
                  <div className="cs-main-right">
                    <img src={Case1} alt="" />
                  </div>
                  <div className="cs-main-left">
                    <img src={CaseLogo1} alt="" />
                    <p>
                      Deploying IoT-powered kiosks integrated with a custom ERP
                      solution, we enhanced IKEA’s customer onboarding, product
                      exploration, and data-driven marketing.{" "}
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
                <div className="cs-main-grid middle-main-grid">
                  <div className="cs-main-left">
                    <img src={CaseLogo1} alt="" />
                    <p>
                      Deploying IoT-powered kiosks integrated with a custom ERP
                      solution, we enhanced IKEA’s customer onboarding, product
                      exploration, and data-driven marketing.{" "}
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
                      Deploying IoT-powered kiosks integrated with a custom ERP
                      solution, we enhanced IKEA’s customer onboarding, product
                      exploration, and data-driven marketing.{" "}
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
          <div className="blogcircle-1"></div>
          <div className="blogcircle-2"></div>
          <div className="box">
            <div className="blog-cont">
              <div className="casestudy-head">
                <h3 className="gradient-text">Read Our Blogs</h3>
                <h6>
                  View All <BsArrowRight />
                </h6>
              </div>
              <div className="blog-grid">
                <div className="blog-grid-left">
                  <div className="blog-main-cont">
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
                <div className="blog-grid-right">
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
          </div>
        </section>
        <section className="faq-section">
          <div className="faqrectangle"></div>
          <div className="faq-circle"></div>
          <div className="box">
            <div className="faq-content">
              <h3 className="gradient-text">Frequently Asked Questions</h3>
              <div className="faq-accordian-box">
                <Accordion defaultActiveKey={["0"]} alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <h5 className="gradient-text">
                        How frequently am I supposed to pay for this course?
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      Investing in this course is both economical and practical.
                      With a single payment of $9.99, you unlock lifetime access
                      to a wealth of knowledge and resources. This one-off
                      payment model not only makes it affordable but also
                      ensures that you can learn at your own pace without
                      worrying about recurring fees. It's designed to be a
                      cost-effective solution for those eager to expand their
                      skills without the financial burden of subscription-based
                      models. Consider this a small investment in your personal
                      or professional development that pays dividends in
                      knowledge and expertise over time.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <h5 className="gradient-text">
                        How frequently am I supposed to pay for this course?
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      Investing in this course is both economical and practical.
                      With a single payment of $9.99, you unlock lifetime access
                      to a wealth of knowledge and resources. This one-off
                      payment model not only makes it affordable but also
                      ensures that you can learn at your own pace without
                      worrying about recurring fees. It's designed to be a
                      cost-effective solution for those eager to expand their
                      skills without the financial burden of subscription-based
                      models. Consider this a small investment in your personal
                      or professional development that pays dividends in
                      knowledge and expertise over time.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <h5 className="gradient-text">
                        How frequently am I supposed to pay for this course?
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      Investing in this course is both economical and practical.
                      With a single payment of $9.99, you unlock lifetime access
                      to a wealth of knowledge and resources. This one-off
                      payment model not only makes it affordable but also
                      ensures that you can learn at your own pace without
                      worrying about recurring fees. It's designed to be a
                      cost-effective solution for those eager to expand their
                      skills without the financial burden of subscription-based
                      models. Consider this a small investment in your personal
                      or professional development that pays dividends in
                      knowledge and expertise over time.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      <h5 className="gradient-text">
                        How frequently am I supposed to pay for this course?
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      Investing in this course is both economical and practical.
                      With a single payment of $9.99, you unlock lifetime access
                      to a wealth of knowledge and resources. This one-off
                      payment model not only makes it affordable but also
                      ensures that you can learn at your own pace without
                      worrying about recurring fees. It's designed to be a
                      cost-effective solution for those eager to expand their
                      skills without the financial burden of subscription-based
                      models. Consider this a small investment in your personal
                      or professional development that pays dividends in
                      knowledge and expertise over time.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      <h5 className="gradient-text">
                        How frequently am I supposed to pay for this course?
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      Investing in this course is both economical and practical.
                      With a single payment of $9.99, you unlock lifetime access
                      to a wealth of knowledge and resources. This one-off
                      payment model not only makes it affordable but also
                      ensures that you can learn at your own pace without
                      worrying about recurring fees. It's designed to be a
                      cost-effective solution for those eager to expand their
                      skills without the financial burden of subscription-based
                      models. Consider this a small investment in your personal
                      or professional development that pays dividends in
                      knowledge and expertise over time.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>
                      <h5 className="gradient-text">
                        How frequently am I supposed to pay for this course?
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      Investing in this course is both economical and practical.
                      With a single payment of $9.99, you unlock lifetime access
                      to a wealth of knowledge and resources. This one-off
                      payment model not only makes it affordable but also
                      ensures that you can learn at your own pace without
                      worrying about recurring fees. It's designed to be a
                      cost-effective solution for those eager to expand their
                      skills without the financial burden of subscription-based
                      models. Consider this a small investment in your personal
                      or professional development that pays dividends in
                      knowledge and expertise over time.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
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
}
export default Home;
