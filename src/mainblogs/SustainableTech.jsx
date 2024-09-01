import React, { useEffect } from "react";
import "../home.css";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Blog1 from "../assets/img/blog1.png";
import Blog2 from "../assets/img/blog2.png";
import Blog3 from "../assets/img/blog3.png";
import Blog4 from "../assets/img/blog4.png";
import Blog5 from "../assets/img/blog5.png";
import Blog7 from "../assets/img/blog7.png";
import Blog8 from "../assets/img/blog8.png";

import {
  BsChevronRight,
  BsChevronLeft,
  BsArrowRight,
  BsArrowUpRight,
  BsArrowLeft,
  BsXLg,
  BsList,
} from "react-icons/bs";
import Header from "../components/Header";
import Marque from "../components/Marque";
import Booking from "../components/Booking";
import Footer from "../components/Footer";
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

function Sustainabletech() {
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
                  <img
                    src={Blog7}
                    alt="Harnessing Green Innovation: The Sustainable Tech Revolution"
                  />
                  <Link to="/blogs">
                    <BsArrowLeft />
                    Blogs
                  </Link>
                  <h1>
                    Harnessing Green Innovation: The Sustainable <br />
                    Tech Revolution
                  </h1>
                  <p>
                    In 2025, green innovation is no longer a mere trend—it's an
                    imperative. As the urgency to combat climate change
                    intensifies, the integration of sustainable technology is
                    emerging as a vital strategy in our quest for a greener
                    future. At the forefront of this revolution are technologies
                    that prioritize efficiency, reduce environmental impact, and
                    foster a sustainable ecosystem.
                    <br />
                    <br />
                    One of the most significant advancements driving this shift
                    is the proliferation of renewable energy solutions. Solar
                    panels and wind turbines are not only becoming more
                    efficient but also increasingly affordable. These
                    technologies are crucial in reducing global carbon
                    footprints, enabling both individuals and organizations to
                    contribute actively to sustainability goals. The rise in
                    renewable energy adoption is a testament to the growing
                    recognition of the need for clean, sustainable power
                    sources.
                    <br />
                    <br />
                    The automotive sector is undergoing a profound
                    transformation with the surge in electric vehicles (EVs).
                    Thanks to significant advancements in battery technology and
                    charging infrastructure, EVs are becoming more accessible
                    and practical for everyday use. This shift away from fossil
                    fuel dependency represents a critical step towards a
                    sustainable future, reducing greenhouse gas emissions and
                    promoting environmental stewardship.
                    <br />
                    <br />
                    Green innovation is not limited to large-scale solutions; it
                    permeates our daily lives through smart home devices and
                    sustainable gadgets. From energy-efficient lighting systems
                    to biodegradable electronics, technology is being reimagined
                    with sustainability at its core. These advancements not only
                    reduce energy consumption but also minimize waste, aligning
                    with global efforts to promote sustainability.
                    <br />
                    <br />
                    The tech industry is also witnessing a paradigm shift
                    towards the circular economy. Leading companies are
                    increasingly focusing on sustainable manufacturing processes
                    and product lifecycles, emphasizing recycling, reusability,
                    and reduced environmental impact. This approach not only
                    supports sustainability but also drives innovation in
                    product design and development.
                    <br />
                    <br />
                    The sustainable tech revolution is about more than just
                    creating eco-friendly products; it embodies a transformative
                    shift in mindset. It calls for a holistic approach to
                    technology, where environmental impact is considered
                    alongside functionality and design. This perspective is
                    vital in driving long-term sustainable development and
                    fostering a more environmentally conscious tech industry.
                    <br />
                    <br />
                    As we navigate through 2025, the momentum of green
                    innovation continues to build, challenging us to rethink the
                    relationship between technology and sustainability. It
                    inspires a future where technological advancement and
                    environmental responsibility go hand in hand, ensuring a
                    positive legacy for future generations.
                    <br />
                    <br />
                    At The Mastery House, we are committed to driving this
                    sustainable revolution by integrating green innovation into
                    our technology solutions. Join us on this journey towards a
                    more sustainable future, where technology is a force for
                    good in preserving our planet.
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
                    <h3 className="gradient-text">Read Our Blogs</h3>
                    <Link to="/blogs">
                      View All <BsArrowRight />
                    </Link>
                  </div>
                  <div className="blog-grid">
                    <div className="blog-grid-left">
                      <Link
                        to="/blogs/automation-business"
                        className="blog-main-cont bm-r-cont"
                      >
                        <img src={Blog8} alt="" />
                        <div>
                          <h4>
                            How AI and Automation Can Transform Small Businesses
                          </h4>
                          <a href="/blogs/automation-business">
                            Read More <BsArrowRight />
                          </a>
                        </div>
                      </Link>
                    </div>
                    <div className="blog-grid-right bgr-home">
                      <Link to="/blogs/ai" className="blog-main-cont bm-r-cont">
                        <img src={Blog1} alt="" />
                        <div>
                          <h4>The Rise of AI: Transforming Business in 2025</h4>
                          <a href="/blogs/ai">
                            Read More <BsArrowRight />
                          </a>
                        </div>
                      </Link>
                      <Link
                        to="/blogs/decoding"
                        className="blog-main-cont bm-r-cont"
                      >
                        <img src={Blog3} alt="" />
                        <div>
                          <h4>
                            Decoding the Success DNA: The Digital Landscape in
                            2025
                          </h4>
                          <a href="/blogs/decoding">
                            Read More <BsArrowRight />
                          </a>
                        </div>
                      </Link>
                      <Link
                        to="/blogs/quantum"
                        className="blog-main-cont bm-r-cont"
                      >
                        <img src={Blog4} alt="" />
                        <div>
                          <h4>Quantum Computing: The Next Frontier in 2025</h4>
                          <a href="/blogs/quantum">
                            Read More <BsArrowRight />
                          </a>
                        </div>
                      </Link>
                      <Link
                        to="/blogs/ar-trends"
                        className="blog-main-cont bm-r-cont"
                      >
                        <img src={Blog5} alt="" />
                        <div>
                          <h4>
                            Augmented Reality: Merging Digital and Physical
                            Realms
                          </h4>
                          <a href="/blogs/ar-trends">
                            Read More <BsArrowRight />
                          </a>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="getintouch-section">
              <div className="marquee-main-box">{/* <Marque /> */}</div>
            </section>
            <Booking />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
export default Sustainabletech;
