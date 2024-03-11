import React from "react";
import Book from "../assets/img/booking.png";
import GIT1 from "../assets/img/Capa_1.svg";
import GIT2 from "../assets/img/asssvg.svg";
import GIT3 from "../assets/img/epmsvg.svg";
import { Link } from "react-router-dom";

const Booking = () => {
  return (
    <section className="booking-section">
      <div className="booking-cont">
        <div className="booking-img">
          <img src={Book} alt="" />
        </div>
        <div className="git-box">
          <div className="git-circle-1"></div>
          <div className="git-circle-2"></div>
          <div className="git-b-top">
            <h3 className="gradient-text">Book a Call with Us</h3>
            <p>
              Join us at The Mastery House in Tampa. Let's set the benchmark in
              digital excellence.
            </p>
          </div>
          <div className="gitsvg-box">
            <div>
              <img src={GIT1} alt="" />
              <span>
                Initial Consultation{" "}
                <h6>
                  Let's discuss how we can redefine the digital narrative
                  together.
                </h6>
              </span>
            </div>
            <div>
              <img src={GIT2} alt="" />
              <span>
                Advanced Strategy Session
                <h6>
                  Deep dive into your digital needs and plot the course ahead.
                </h6>
              </span>
            </div>
            <div>
              <img src={GIT3} alt="" />
              <span>
                Exclusive Partnership Meeting
                <h6>Let's collaborate and create digital excellence.</h6>
              </span>
            </div>
          </div>
          <Link to="/contact">
            <button className="gradient-btn">Book a Call</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Booking;
