import React, { useState } from "react";
import "./home.css";
import Logo from "./assets/img/logo.png";
import Team1 from "./assets/img/team-1.png";
import LinkedIn from "./assets/img/linkedin.png";
import Twitter from "./assets/img/twitter.png";
import Booking from "./assets/img/booking.png";
import GIT1 from "./assets/img/Capa_1.svg";
import GIT2 from "./assets/img/asssvg.svg";
import GIT3 from "./assets/img/asssvg.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
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

function Blog() {
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
                  <div className="mob-circle-1"></div>
                  <div className="mob-circle-2"></div>
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
                Navigating the Future: How AI is Redefining Our <br /> Approach
                to Problem-Solving
              </h1>
              <p>
                Navigating the future through the lens of artificial
                intelligence (AI) reveals a landscape where the very fabric of
                problem-solving is being redefined, transforming challenges into
                opportunities with unprecedented speed and precision. As we
                stand on the cusp of this technological renaissance, AI has
                emerged not just as a tool, but as a pivotal partner in
                addressing the myriad complexities of modern life, from
                healthcare diagnostics and climate change mitigation to
                enhancing efficiency in the workplace and revolutionizing the
                educational landscape.
                <br />
                <br />
                The essence of AI lies in its ability to sift through vast
                datasets, extracting patterns and insights that elude human
                cognition, thus enabling solutions that are not only innovative
                but also highly tailored to specific challenges. This capability
                is not merely augmenting human effort but, in many cases, is
                surpassing what we thought possible, pushing the boundaries of
                creativity and strategic thinking. By leveraging machine
                learning algorithms, predictive analytics, and natural language
                processing, AI is fostering a new era of decision-making, where
                data-driven insights lead to more informed, equitable, and
                sustainable outcomes.
                <br />
                <br />
                However, as we embrace this journey, it's imperative to navigate
                the ethical implications and societal impacts with vigilance and
                responsibility, ensuring that the advancement of AI operates
                within a framework that prioritizes human welfare and equity. In
                this transformative period, our approach to problem-solving is
                not just being redefined by the capabilities of AI but is also
                reshaping our aspirations, urging us to envision a future where
                technology and humanity converge in harmony to address the most
                pressing challenges of our time, heralding a new chapter of
                innovation, inclusivity, and resilience. Navigating the future
                through the lens of artificial intelligence (AI) reveals a
                landscape where the very fabric of problem-solving is being
                redefined, transforming challenges into opportunities with
                unprecedented speed and precision. As we stand on the cusp of
                this technological renaissance, AI has emerged not just as a
                tool, but as a pivotal partner in addressing the myriad
                complexities of modern life, from healthcare diagnostics and
                climate change mitigation to enhancing efficiency in the
                workplace and revolutionizing the educational landscape.
                <br />
                <br />
                The essence of AI lies in its ability to sift through vast
                datasets, extracting patterns and insights that elude human
                cognition, thus enabling solutions that are not only innovative
                but also highly tailored to specific challenges. This capability
                is not merely augmenting human effort but, in many cases, is
                surpassing what we thought possible, pushing the boundaries of
                creativity and strategic thinking. By leveraging machine
                learning algorithms, predictive analytics, and natural language
                processing, AI is fostering a new era of decision-making, where
                data-driven insights lead to more informed, equitable, and
                sustainable outcomes.
                <br />
                However, as we embrace this journey, it's imperative to navigate
                the ethical implications and societal impacts with vigilance and
                responsibility, ensuring that the advancement of AI operates
                within a framework that prioritizes human welfare and equity. In
                this transformative period, our approach to problem-solving is
                not just being redefined by the capabilities of AI but is also
                reshaping our aspirations, urging us to envision a future where
                technology and humanity converge in harmony to address the most
                pressing challenges of our time, heralding a new chapter of
                innovation, inclusivity, and resilience.
              </p>
            </div>
          </div>
        </section>
        <section className="blog-section">
          <div className="blogcircle-1"></div>
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
}
export default Blog;
