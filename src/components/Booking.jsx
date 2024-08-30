import React, { useState, useEffect } from "react";
import Book from "../assets/img/booking.png";
import GIT1 from "../assets/img/Capa_1.svg";
import GIT2 from "../assets/img/asssvg.svg";
import GIT3 from "../assets/img/epmsvg.svg";
import BookACall from "./BookACall";

const Booking = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the device is mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust the breakpoint as needed
    };

    handleResize(); // Call on mount
    window.addEventListener("resize", handleResize); // Add event listener

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  const handleOpenBooking = (e) => {
    if (!isMobile) {
      // For desktop, calculate the position based on button
      const rect = e.target.getBoundingClientRect();
      setPosition({
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
      });
    } else {
      // For mobile, center the form
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
          <button onClick={handleOpenBooking} className="gradient-btn">
            Book a Call
          </button>
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
