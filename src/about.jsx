import React, { useEffect } from "react";
import "./home.css";
import Logo from "./assets/img/logo-tms.png";
import Team1 from "./assets/img/team-1.png";
import LinkedIn from "./assets/img/linkedin.png";
import Twitter from "./assets/img/twitter.png";
import Blog1 from "./assets/img/blog1.png";
import Case1 from "./assets/img/case1.png";
import CaseLogo1 from "./assets/img/ikea.png";
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
  BsList,
  BsXLg,
} from "react-icons/bs";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Header from "./components/Header";
import Teamswiper from "./components/Teamswiper";
import Marque from "./components/Marque";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

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

function About() {
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
    gsap.from(".about-circle-3 circle", {
      drawSVG: 0.1,
      duration: 3,
      delay: 1,
    });

    let AboutImgScrollAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-img-box",
        toggleActions: "start pause resume none",
        start: "top 0%",
        end: "bottom 30%",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        markers: false,
      },
    });
    AboutImgScrollAnimation.fromTo(
      ".about-img",
      {
        width: "88%",
        height: "80vh",
      },
      {
        width: "100%",
        height: "100vh",
      }
    ).fromTo(
      ".about-img",
      {
        width: "100%",
        height: "100vh",
      },
      {
        width: "88%",
        height: "80vh",
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
            <Header isActive="about" />
            <section className="about-section">
              <div className="main-about-circle"></div>
              <div className="about-circle-2"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="774"
                height="774"
                fill="none"
                viewBox="0 0 774 774"
                className="about-circle-3"
              >
                <circle
                  cx="387"
                  cy="387"
                  r="386.5"
                  stroke="rgba(255,255,255,0.25)"
                ></circle>
              </svg>
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
                        While we innovate in the digital space, our heart lies
                        in the community. We actively support and contribute to
                        organizations focusing on autism for children.
                      </p>
                    </div>
                    <div className="about-grid-content agc-3">
                      <div className="ag-circle-3"></div>
                      <h5>Tailored Digital Experiences</h5>
                      <p>
                        Our approach is to understand, customize, and deliver
                        unique digital solutions tailored to each client's
                        needs. Every project is a testament to our commitment.
                      </p>
                    </div>
                  </div>
                  <div className="about-img-box">
                    <img src={AboutImg} alt="" className="about-img" />
                  </div>
                  <div className="about-flex">
                    <div className="about-flex-box">
                      <div data-speed={0.85} className="about-circle"></div>
                      <h3>What We Stand For</h3>
                      <p>
                        Innovation, Excellence, and Future-Readiness are the
                        pillars that define our approach. Ourteam of experts
                        brings together diverse skills and deep knowledge in
                        Blockchain, ArtificialIntelligence, and Custom Software
                        Development, ensuring that we deliver solutions that are
                        notonly effective but transformative.
                      </p>
                    </div>
                    <div className="about-flex-box">
                      <div data-speed={0.85} className="about-circle2"></div>
                      <h3>Our Mission</h3>
                      <p>
                        Innovation, Excellence, and Future-Readiness are the
                        pillars that define our approach. Ourteam of experts
                        brings together diverse skills and deep knowledge in
                        Blockchain, ArtificialIntelligence, and Custom Software
                        Development, ensuring that we deliver solutions that are
                        notonly effective but transformative.
                      </p>
                    </div>
                    <div className="about-flex-box">
                      <div data-speed={0.85} className="about-circle3"></div>
                      <h3>Why Choose Us</h3>
                      <p>
                        Innovation, Excellence, and Future-Readiness are the
                        pillars that define our approach. Ourteam of experts
                        brings together diverse skills and deep knowledge in
                        Blockchain, ArtificialIntelligence, and Custom Software
                        Development, ensuring that we deliver solutions that are
                        notonly effective but transformative.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Teamswiper />
            <section className="getintouch-section">
              <div className="marquee-main-box">
                <Marque />
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
export default About;
