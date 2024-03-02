import React, { useState } from "react";
import "./home.css";
import ServiceImg from "./assets/img/serviceimg.png";
import AboutImg from "./assets/img/aboutimg.png";
import ReactImg from "./assets/img/reactimg.svg";
import NextImg from "./assets/img/nextimg.svg";
import MUIImg from "./assets/img/material-ui-img.svg";
import TSImg from "./assets/img/typescriptimg.svg";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import Header from "./components/Header";
import Marque from "./components/Marque";
import Footer from "./components/Footer";
import Booking from "./components/Booking";

const Service = () => {
  return (
    <div className="masteryhouse">
      <main className="homepage" id="home_page">
        {/* <div className="circle-1"></div>
            <div className="circle-2"></div> */}
        <div className="circle-3"></div>
        <Header isActive="services" />
        <section className="about-section">
          <div className="main-about-circle"></div>
          <div className="about-circle-2"></div>
          <div className="about-circle-3"></div>
          <div className="box">
            <div className="about-content service-content">
              <div className="about-c-top">
                <h4>Blockchain Development</h4>
                <h1 className="gradient-text">
                  Unlocking the Potential <br />
                  of Blockchain Technology
                </h1>
                <p>
                  Blockchain technology offers unprecedented security,
                  transparency, and efficiency. At TheMastery House, we harness
                  these qualities to deliver custom blockchain development
                  servicesthat are as innovative as they are reliable. From
                  creating smart contracts that automatetransactions without
                  intermediaries to developing decentralized applications
                  (dApps) that opennew avenues for your business, our blockchain
                  solutions are designed to set you apart in thedigital
                  landscape.
                </p>
              </div>
              <img src={ServiceImg} alt="" />
              <div className="about-flex service-flex">
                <div className="about-flex-box">
                  <div className="about-circle"></div>
                  <h3>Smart Contract Development</h3>
                  <p>
                    Streamline operations and ensure trust with our smart
                    contract development services, tailored to automate your
                    processes and secure your transactions.
                  </p>
                </div>
                <div className="about-flex-box">
                  <div className="about-circle2"></div>
                  <h3>Decentralized Applications (dApps)</h3>
                  <p>
                    Revolutionize your online presence with dApps that offer
                    unparalleled security, uptime, and user control,
                    custom-built for your specific business needs.
                  </p>
                </div>
                <div className="about-flex-box">
                  <div className="about-circle3"></div>
                  <h3>Token Development</h3>
                  <p>
                    Expand your digital footprint with custom tokens, designed
                    to suit your business model, whether it’s for a new
                    cryptocurrency or a unique utility token within your
                    ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="technologies-section">
          <div className="box">
            <div className="technologies-content">
              <h3 className="gradient-text">Technologies & Tools We Use</h3>
              <div className="technologies-tabs">
                <Tabs defaultActiveKey="Frontend" id="uncontrolled-tab-example">
                  <Tab eventKey="Frontend" title="Frontend Development">
                    <div className="technologies-tabContent">
                      <p>
                        Our expertise ensures an exceptional user experience
                        with cutting-edge technology at the forefront of
                        frontend development.
                      </p>
                      <div className="technologies-box">
                        <div className="tb-box-img">
                          <img src={ReactImg} alt="" />
                          <h4>React</h4>
                        </div>
                        <div className="tb-box-img">
                          <img src={NextImg} alt="" />
                          <h4>Next</h4>
                        </div>
                        <div className="tb-box-img">
                          <img src={MUIImg} alt="" />
                          <h4>MUI</h4>
                        </div>
                        <div className="tb-box-img">
                          <img src={TSImg} alt="" />
                          <h4>Typescript</h4>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="Backend" title="Backend Development">
                    <div className="technologies-tabContent">
                      <p>
                        Our expertise ensures an exceptional user experience
                        with cutting-edge technology at the forefront of
                        frontend development.
                      </p>
                      <div className="technologies-box">
                        <div className="tb-box-img">
                          <img src={ReactImg} alt="" />
                          <h4>React</h4>
                        </div>
                        <div className="tb-box-img">
                          <img src={NextImg} alt="" />
                          <h4>Next</h4>
                        </div>
                        <div className="tb-box-img">
                          <img src={MUIImg} alt="" />
                          <h4>MUI</h4>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="Web3" title="Web3">
                    <div className="technologies-tabContent">
                      <p>
                        Our expertise ensures an exceptional user experience
                        with cutting-edge technology at the forefront of
                        frontend development.
                      </p>
                      <div className="technologies-box">
                        <div className="tb-box-img">
                          <img src={ReactImg} alt="" />
                          <h4>React</h4>
                        </div>
                        <div className="tb-box-img">
                          <img src={MUIImg} alt="" />
                          <h4>MUI</h4>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="Mobile Development" title="Mobile Development">
                    <div className="technologies-tabContent">
                      <p>
                        Our expertise ensures an exceptional user experience
                        with cutting-edge technology at the forefront of
                        frontend development.
                      </p>
                      <div className="technologies-box">
                        <div className="tb-box-img">
                          <img src={ReactImg} alt="" />
                          <h4>React</h4>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="AI Development" title="AI Development">
                    <div className="technologies-tabContent">
                      <p>
                        Our expertise ensures an exceptional user experience
                        with cutting-edge technology at the forefront of
                        frontend development.
                      </p>
                      <div className="technologies-box">
                        <div className="tb-box-img">
                          <img src={ReactImg} alt="" />
                          <h4>React</h4>
                        </div>
                        <div className="tb-box-img">
                          <img src={NextImg} alt="" />
                          <h4>Next</h4>
                        </div>
                        <div className="tb-box-img">
                          <img src={MUIImg} alt="" />
                          <h4>MUI</h4>
                        </div>
                        <div className="tb-box-img">
                          <img src={TSImg} alt="" />
                          <h4>Typescript</h4>
                        </div>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
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

export default Service;
