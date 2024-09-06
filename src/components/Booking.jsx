import React, { useState, useEffect } from "react";
import Book from "../assets/img/booking.png";
import GIT1 from "../assets/img/Capa_1.svg";
import GIT2 from "../assets/img/asssvg.svg";
import GIT3 from "../assets/img/epmsvg.svg";
import BookACall from "./BookACall";
import CustomCalendlyButton from "./CustomCalendlyButton";
import { InlineWidget } from "react-calendly";

const Booking = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOpenBooking = (e) => {
    if (!isMobile) {
      const rect = e.target.getBoundingClientRect();
      setPosition({
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
      });
    } else {
      setPosition({
        top: window.scrollY + window.innerHeight / 2,
        left: window.scrollX + window.innerWidth / 2,
      });
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <section className="booking-section">
      <div className="booking-cont">
        <div className="booking-img">
          <img src={Book} alt="Booking" />
        </div>
        <div className="git-box">
          <div className="git-circle-1"></div>
          <div className="git-circle-2"></div>
          <div className="git-b-top">
            <h3 className="gradient-text">Let's Connect</h3>
            <p>
              We’re here to help you navigate the future of business with
              innovative solutions. Schedule a call today, and let’s talk about
              how we can solve your unique challenges and help you thrive.
            </p>
          </div>
          <div className="gitsvg-box">
            <div>
              <img src={GIT1} alt="Initial Consultation" />
              <span>
                Initial Consultation{" "}
                <h6>
                  Connect with our team to discuss your business goals and how
                  we can help you achieve them.
                </h6>
              </span>
            </div>
            <div>
              <img src={GIT2} alt="Advanced Strategy Session" />
              <span>
                Strategy Session
                <h6>
                  Let’s work together to explore tailored solutions that will
                  drive your business forward.
                </h6>
              </span>
            </div>
            <div>
              <img src={GIT3} alt="Exclusive Partnership Meeting" />
              <span>
                Partnership Meeting
                <h6>
                  Discover how we can partner to deliver transformative results
                  that push the boundaries of what's possible.
                </h6>
              </span>
            </div>
          </div>
          {/* Replacing the original button with the CustomCalendlyButton */}
          <CustomCalendlyButton />
        </div>
      </div>
      {isBookingOpen && (
        <BookACall
          onClose={handleCloseBooking}
          style={{
            position: "absolute",
            top: isMobile ? "50%" : position.top,
            left: isMobile ? "50%" : position.left,
            transform: isMobile ? "translate(-50%, -50%)" : "none",
            zIndex: 1000,
          }}
        />
      )}
    </section>
  );
};

export default Booking;
