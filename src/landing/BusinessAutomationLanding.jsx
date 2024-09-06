import React, { useEffect, useState } from "react";
import "../home.css";
import ServiceImg from "../assets/img/serviceimg.png";
import AboutImg from "../assets/img/aboutimg.png";
import ReactImg from "../assets/img/reactimg.svg";
import NextImg from "../assets/img/nextimg.svg";
import MUIImg from "../assets/img/material-ui-img.svg";
import TSImg from "../assets/img/typescriptimg.svg";
import Tab from "react-bootstrap/Tab";
import Zepline from "../assets/img/zepline.svg";
import Flask from "../assets/img/flask.svg";
import Mat from "../assets/img/matlab.svg";
import Tabs from "react-bootstrap/Tabs";
import { FaNodeJs, FaPython, FaSwift } from "react-icons/fa6";

import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

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
import { Link } from "react-router-dom";
import HeroImg from "../components/HeroImg";

import Marquee from "react-fast-marquee";
import Casestudy from "../casestudy";
import Maincasestudy from "../maincasestudy";
import Teamswiper from "../components/Teamswiper";
import HeroLanding from "./sections/HeroLanding";
import HeaderLanding from "./sections/HeaderLanding";
import AboutLanding from "./sections/AboutLanding";
import Process from "./sections/ProcessLanding";
import ChatPDF from "./sections/ChatPDFLanding";
import Testimonials from "../components/Testimonials";
import NewsletterForm from "../components/NewsLetterForm";
import BenefitsLanding from "./sections/BenefitsLanding";

const BusinessAutomationLanding = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // Media query to detect mobile screen size
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
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
            <HeaderLanding isActive="services" />
            <HeroLanding />=
            <AboutLanding />
            <NewsletterForm />
            <Process />
            <BenefitsLanding />
            <Booking />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
};

export default BusinessAutomationLanding;
