import React, { useState } from "react";
import "./home.css";
import Case1 from "./assets/img/case1.png";
import CaseLogo1 from "./assets/img/ikea.png";
import LaptopMockup from "./assets/img/Mockup.png";
import csProfile from "./assets/img/csprofile.png";
import SemiColon from "./assets/img/semicolon.svg";

import { BsArrowUpRight } from "react-icons/bs";
import Header from "./components/Header";
import Marque from "./components/Marque";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

const Casestudy = () => {
  return (
    <div className="masteryhouse">
      <main className="homepage" id="home_page">
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
        <Header isActive="casestudy" />
        <section className="casestudy-section hero-section cs-section-2">
          {/* <div className="main-home-circle"></div> */}
          <div className="box">
            <div className="casestudy-cont main-cs-page">
              <div className="casestudy-main">
                <div className="cs-main-grid">
                  <div className="cs-main-right">
                    <img src={Case1} alt="" />
                  </div>
                  <div className="cs-main-left">
                    <img src={CaseLogo1} alt="" />
                    <div className="cs-main-btn">
                      <h4>
                        Decentralized Marketplace for Eco-Friendly Products
                      </h4>
                      <h5>
                        Visit Website <BsArrowUpRight />
                      </h5>
                    </div>
                    <p>
                      EcoMarket, an online platform for eco-friendly products,
                      faced challenges in ensuring transparency and security in
                      transactions. They sought a solution that would in still
                      trust in their marketplace and streamline operations.
                    </p>
                    <div className="ind-serv-box">
                      <span>
                        Industry <h6>Retail</h6>
                      </span>
                      <span>
                        Client <h6>Tyrion Lannister</h6>
                      </span>
                      <span>
                        Services <h6>Blockchain Development, Deployment</h6>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="steps-to-follow-box">
                <div className="main-steps-box">
                  <div className="ms-box-content msbc-1">
                    <h4 className="gradient-text">
                      1. Conceptualization of the project
                    </h4>
                    <p>
                      We started with the customer journey mapping process,
                      ensuring that we have a complete understanding of the
                      roadblocks IKEA offline customers face when shopping
                      in-store. The understanding then laid the basis for the
                      ERP solution’s feature-set and the integration choices.
                    </p>
                  </div>
                  <div className="ms-box-content msbc-2 ">
                    <h4 className="gradient-text">
                      2. Creation of an ERP solution
                    </h4>
                    <p>
                      We started with the customer journey mapping process,
                      ensuring that we have a complete understanding of the
                      roadblocks IKEA offline customers face when shopping
                      in-store. The understanding then laid the basis for the
                      ERP solution’s feature-set and the integration choices.
                    </p>
                  </div>
                </div>
                <img src={LaptopMockup} alt="" />
                <div className="main-steps-box">
                  <div className="ms-box-content msbc-3">
                    <h4 className="gradient-text">
                      3. Integrate the facility to gather customers’ information
                    </h4>
                    <p>
                      We started with the customer journey mapping process,
                      ensuring that we have a complete understanding of the
                      roadblocks IKEA offline customers face when shopping
                      in-store. The understanding then laid the basis for the
                      ERP solution’s feature-set and the integration choices.
                    </p>
                  </div>
                  <div className="ms-box-content msbc-2 msbc-4 ">
                    <h4 className="gradient-text">
                      4. Deploy the solution across individual IKEA stores
                    </h4>
                    <p>
                      We started with the customer journey mapping process,
                      ensuring that we have a complete understanding of the
                      roadblocks IKEA offline customers face when shopping
                      in-store. The understanding then laid the basis for the
                      ERP solution’s feature-set and the integration choices.
                    </p>
                  </div>
                </div>
              </div>
              <div className="testimonial-cs-box">
                <p>
                  <img src={SemiColon} alt="" />
                  Tackling the Recursion and Dynamic Programming course was like
                  embarking on an intellectual adventure. Initially, the
                  concepts seemed daunting, but as I dove deeper, everything
                  started to click. The course's practical approach, with its
                  emphasis on problem-solving and real-world applications, truly
                  demystified these topics for me. It's not just a course; it's
                  a brain gym where I strengthened my logical and analytical
                  muscles.
                </p>
                <div className="test-cs-profile">
                  <img src={csProfile} alt="" />
                  <h6>
                    John Smith <span>CTO - IKEA</span>
                  </h6>
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
  );
};

export default Casestudy;
