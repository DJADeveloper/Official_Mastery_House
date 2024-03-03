import React, { useEffect } from "react";
import "./home.css";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Blog1 from "./assets/img/blog1.png";

import {
  BsChevronRight,
  BsChevronLeft,
  BsArrowRight,
  BsArrowUpRight,
  BsArrowLeft,
  BsXLg,
  BsList,
} from "react-icons/bs";
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

function Blog() {
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
            <Header isActive="blog" />
            <section className="main-blog-section">
              <div className="main-blog-circle"></div>
              <div className="box">
                <div className="blog-page-cont">
                  <img src={Blog1} alt="" />
                  <a href="#">
                    <BsArrowLeft />
                    Blogs
                  </a>
                  <h1>
                    Navigating the Future: How AI is Redefining Our <br />{" "}
                    Approach to Problem-Solving
                  </h1>
                  <p>
                    Navigating the future through the lens of artificial
                    intelligence (AI) reveals a landscape where the very fabric
                    of problem-solving is being redefined, transforming
                    challenges into opportunities with unprecedented speed and
                    precision. As we stand on the cusp of this technological
                    renaissance, AI has emerged not just as a tool, but as a
                    pivotal partner in addressing the myriad complexities of
                    modern life, from healthcare diagnostics and climate change
                    mitigation to enhancing efficiency in the workplace and
                    revolutionizing the educational landscape.
                    <br />
                    <br />
                    The essence of AI lies in its ability to sift through vast
                    datasets, extracting patterns and insights that elude human
                    cognition, thus enabling solutions that are not only
                    innovative but also highly tailored to specific challenges.
                    This capability is not merely augmenting human effort but,
                    in many cases, is surpassing what we thought possible,
                    pushing the boundaries of creativity and strategic thinking.
                    By leveraging machine learning algorithms, predictive
                    analytics, and natural language processing, AI is fostering
                    a new era of decision-making, where data-driven insights
                    lead to more informed, equitable, and sustainable outcomes.
                    <br />
                    <br />
                    However, as we embrace this journey, it's imperative to
                    navigate the ethical implications and societal impacts with
                    vigilance and responsibility, ensuring that the advancement
                    of AI operates within a framework that prioritizes human
                    welfare and equity. In this transformative period, our
                    approach to problem-solving is not just being redefined by
                    the capabilities of AI but is also reshaping our
                    aspirations, urging us to envision a future where technology
                    and humanity converge in harmony to address the most
                    pressing challenges of our time, heralding a new chapter of
                    innovation, inclusivity, and resilience. Navigating the
                    future through the lens of artificial intelligence (AI)
                    reveals a landscape where the very fabric of problem-solving
                    is being redefined, transforming challenges into
                    opportunities with unprecedented speed and precision. As we
                    stand on the cusp of this technological renaissance, AI has
                    emerged not just as a tool, but as a pivotal partner in
                    addressing the myriad complexities of modern life, from
                    healthcare diagnostics and climate change mitigation to
                    enhancing efficiency in the workplace and revolutionizing
                    the educational landscape.
                    <br />
                    <br />
                    The essence of AI lies in its ability to sift through vast
                    datasets, extracting patterns and insights that elude human
                    cognition, thus enabling solutions that are not only
                    innovative but also highly tailored to specific challenges.
                    This capability is not merely augmenting human effort but,
                    in many cases, is surpassing what we thought possible,
                    pushing the boundaries of creativity and strategic thinking.
                    By leveraging machine learning algorithms, predictive
                    analytics, and natural language processing, AI is fostering
                    a new era of decision-making, where data-driven insights
                    lead to more informed, equitable, and sustainable outcomes.
                    <br />
                    However, as we embrace this journey, it's imperative to
                    navigate the ethical implications and societal impacts with
                    vigilance and responsibility, ensuring that the advancement
                    of AI operates within a framework that prioritizes human
                    welfare and equity. In this transformative period, our
                    approach to problem-solving is not just being redefined by
                    the capabilities of AI but is also reshaping our
                    aspirations, urging us to envision a future where technology
                    and humanity converge in harmony to address the most
                    pressing challenges of our time, heralding a new chapter of
                    innovation, inclusivity, and resilience.
                  </p>
                </div>
              </div>
            </section>
            <section className="blog-section">
              <div data-speed={0.5} className="blogcircle-1"></div>
              <div className="blogcircle-2"></div>
              <div className="box">
                <div className="blog-cont">
                  <div className="casestudy-head">
                    <h3 className="gradient-text">You May Also Like</h3>
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
                            Navigating the Future: How AI is Redefining Our
                            Approach to Problem-Solving
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
                            Navigating the Future: How AI is Redefining Our
                            Approach to Problem-Solving
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
                            Navigating the Future: How AI is Redefining Our
                            Approach to Problem-Solving
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
                            Navigating the Future: How AI is Redefining Our
                            Approach to Problem-Solving
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
                            Navigating the Future: How AI is Redefining Our
                            Approach to Problem-Solving
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
export default Blog;
