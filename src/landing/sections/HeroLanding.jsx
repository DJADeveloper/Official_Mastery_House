import React from "react";
import { Link } from "react-router-dom";
import ServiceImg from "../../assets/img/serviceimg.png";
import Marque from "../../components/Marque";
import HeaderLanding from "./HeaderLanding";

const HeroLanding = (props) => {
  return (
    <section className=" hero-section">
      <div className="main-about-circle"></div>
      <div className="about-circle-2"></div>
      <div className="about-circle-3"></div>
      <div className="box">
        <div className="about-content service-content">
          <div className="about-c-top">
            {/* <h4>
                      Scale with smart automation solutions tailored to your
                      needs.
                    </h4> */}
            <h1 className="gradient-text">
              Revolutionize Your Business Operations <br /> with Automation{" "}
            </h1>
            <p>
              At The Mastery House, we empower businesses to thrive by
              automating repetitive tasks, optimizing workflows, and integrating
              smart solutions. Our tailored automation services are designed to
              increase efficiency, minimize errors, and free up your team to
              focus on what truly matters—growing your business.
            </p>
            <Link to="contact">
              <button className="gradient-btn">
                Transform Your Business Today{" "}
              </button>
            </Link>
          </div>
          <img src={ServiceImg} alt="Business Automation Services" />
        </div>
      </div>
    </section>
  );
};

export default HeroLanding;
