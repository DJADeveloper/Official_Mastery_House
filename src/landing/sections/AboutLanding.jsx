import React, { useEffect } from "react";
import "../../home.css";

import AboutImg from "../../assets/img/aboutimg.png";
import "bootstrap/dist/css/bootstrap.min.css";

import "swiper/css";
import "swiper/css/navigation";

import Header from "../../components/Header";

import gsap from "gsap";

import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
import Marque from "../../components/Marque";

function AboutLanding() {
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

            <section>
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
                    <h4>Your Partner in Overcoming Business Hurdles</h4>
                    <h3 className="gradient-text custom-h3">
                      Are These Challenges Slowing <br />
                      Your Business Down?
                    </h3>
                  </div>
                  <div className="about-grid">
                    <div className="about-grid-content">
                      <div className="ag-circle-1"></div>
                      <h5>Manual Processes Consuming Valuable Time?</h5>
                      <p>
                        Are your team members spending too much time on
                        repetitive tasks like data entry, scheduling, or report
                        generation? Manual processes not only consume valuable
                        time but also lead to burnout and reduced productivity.
                        Automation can free up your team to focus on strategic
                        initiatives that drive growth and innovation.
                      </p>
                    </div>
                    <div className="about-grid-content agc-2">
                      <div className="ag-circle-2"></div>
                      <h5>High Operational Costs?</h5>
                      <p>
                        Is your business facing high operational costs because
                        of manual errors and inefficient workflows? These
                        inefficiencies can lead to costly mistakes and wasted
                        resources, directly impacting your bottom line.
                        Implementing automation reduces human error, optimizes
                        workflows, and lowers overall operational costs,
                        improving your profitability.
                      </p>
                    </div>
                    <div className="about-grid-content agc-3">
                      <div className="ag-circle-3"></div>
                      <h5>Difficulty in Scaling Operations?</h5>
                      <p>
                        Are outdated processes and limited resources preventing
                        you from scaling your operations effectively? In today’s
                        fast-paced market, the ability to scale quickly and
                        efficiently is crucial for growth. Automation provides
                        the scalability your business needs to handle increased
                        workloads, adapt to market demands, and expand without
                        the need for substantial investments in additional
                        resources.
                      </p>
                    </div>
                  </div>
                  <img src={AboutImg} alt="" />
                  {/* <section className="getintouch-section">
                    <div className="marquee-main-box">
                      <Marque />
                    </div>
                  </section> */}
                  <section className="about-section">
                    <div className="box">
                      <div className="about-content">
                        <div className="about-c-top">
                          <h4>
                            Our tailored automation services are designed to
                            address your unique business needs.{" "}
                          </h4>
                          <h3 className="gradient-text custom-h3">
                            Solutions Built For Your Success{" "}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div style={{ paddingTop: "100px" }}>
                      <div className="about-flex">
                        <div className="about-flex-box">
                          <div className="about-circle about-circle1"></div>
                          <h3>Process Automation</h3>
                          <p>
                            Automate repetitive tasks like data entry,
                            invoicing, and inventory management to streamline
                            your operations. This not only enhances efficiency
                            but also reduces operational costs by minimizing
                            human error and freeing up your team to focus on
                            more strategic activities.
                          </p>
                        </div>
                        <div className="about-flex-box">
                          <div className="about-circle about-circle2"></div>
                          <h3>Workflow Integration</h3>
                          <p>
                            Integrate intelligent workflows into your existing
                            systems to ensure smooth and efficient operations.
                            Our automation solutions optimize resource
                            utilization, boost productivity, and provide
                            real-time visibility into your processes, allowing
                            for quicker, more informed decision-making.
                          </p>
                        </div>
                        <div className="about-flex-box">
                          <div className="about-circle about-circle3"></div>
                          <h3>Custom Automation Solutions</h3>
                          <p>
                            Develop bespoke automation systems tailored
                            specifically to your business’s unique needs. From
                            automated marketing campaigns to custom reporting
                            tools, our solutions ensure your operations are both
                            efficient and aligned with your strategic goals,
                            providing you with a competitive edge in the market.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
export default AboutLanding;
