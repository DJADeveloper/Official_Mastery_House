import React, { useEffect } from "react";
import "./home.css";
import ContactImg from "./assets/img/contactimg.png";
import "bootstrap/dist/css/bootstrap.min.css";

import { BsTelephone, BsEnvelope, BsGeoAltFill } from "react-icons/bs";
import Header from "./components/Header";
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

const Contact = () => {
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
            <Header isActive="contact" />
            <section className="about-section contact-section">
              <div className="main-about-circle"></div>
              <div className="about-circle-2"></div>
              <div className="about-circle-3"></div>
              <div className="box">
                <div className="about-content service-content">
                  <div className="about-c-top">
                    <h4>Contact Us</h4>
                    <h1 className="gradient-text">
                      Get in Touch to <br />
                      Forge the Future
                    </h1>
                  </div>
                  <div className="contact-grid">
                    <div className="cg-left">
                      <div className="contact-circle"></div>
                      <h4>Contact Us</h4>
                      <div className="cg-left-form">
                        <input type="text" placeholder="Full Name" />
                        <input type="email" placeholder="Email" />
                        <input type="tel" placeholder="Phone Number" />
                        <input type="text" placeholder="Subject" />
                        <textarea placeholder="Message" rows="4" />
                      </div>
                      <button className="gradient-btn">Submit</button>
                    </div>
                    <div className="cg-right">
                      <img src={ContactImg} alt="" />
                      <div className="contact-info-box">
                        <h5>
                          <span>
                            <BsTelephone />
                          </span>
                          (813) 670-2774
                        </h5>
                        <h5>
                          <span>
                            <BsEnvelope />
                          </span>
                          themasteryhouse@gmail.com
                        </h5>
                        <h5>
                          <span>
                            <BsGeoAltFill />
                          </span>
                          CS - #5013 Millville, NJ 08332
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
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
};

export default Contact;
