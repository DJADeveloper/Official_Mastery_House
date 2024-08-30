import React, { useEffect } from "react";
import "./home.css";

import AboutImg from "./assets/img/aboutimg.png";
import "bootstrap/dist/css/bootstrap.min.css";

import "swiper/css";
import "swiper/css/navigation";

import Header from "./components/Header";

import Booking from "./components/Booking";
import Footer from "./components/Footer";

import gsap from "gsap";

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
      duration: 1,
    });

    let aboutCircle3Anim = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-circle-3 circle",
        start: "top 75%",
      },
    });

    aboutCircle3Anim.from(".about-circle-3 circle", {
      drawSVG: 0.1,
      duration: 3,
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
                      Your Partner in AI, Automation, and Software Development
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
                  <img src={AboutImg} alt="" />
                  <div className="about-flex">
                    <div className="about-flex-box">
                      <div className="about-circle about-circle1"></div>
                      <h3>What We Stand For</h3>
                      <p>
                        Innovation, Excellence, and Future-Readiness are the
                        pillars that define our approach. Our team of experts
                        brings together diverse skills and deep knowledge in AI
                        Development, Business Automation, and Custom Software
                        Development, ensuring that we deliver solutions that are
                        not only effective but transformative.
                      </p>
                    </div>
                    <div className="about-flex-box">
                      <div className="about-circle about-circle2"></div>
                      <h3>Our Mission</h3>
                      <p>
                        At The Mastery House, our mission is to empower
                        businesses through innovative technology solutions. We
                        strive to create a future where technology seamlessly
                        integrates with business processes, driving growth and
                        efficiency.
                      </p>
                    </div>
                    <div className="about-flex-box">
                      <div className="about-circle about-circle3"></div>
                      <h3>Why Choose Us</h3>
                      <p>
                        Our commitment to excellence, combined with our deep
                        industry knowledge and innovative mindset, makes us the
                        ideal partner for your digital transformation journey.
                        We deliver customized solutions that drive real business
                        results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <Teamswiper /> */}
            <section className="getintouch-section">
              {/* <div className="marquee-main-box">
                <Marque />
              </div> */}
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
