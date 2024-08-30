import React, { useEffect, useState } from "react";
import "./home.css";
import ContactImg from "./assets/img/digitalTampa.png";
import "bootstrap/dist/css/bootstrap.min.css";

import { BsTelephone, BsEnvelope, BsGeoAltFill } from "react-icons/bs";
import Header from "./components/Header";
import Marque from "./components/Marque";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const validate = (name, value) => {
    switch (name) {
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Invalid email address";
      case "phoneNumber":
        return /^[0-9]{10}$/.test(value) ? "" : "Invalid phone number";
      default:
        return value.trim() ? "" : "This field is required";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validate(name, value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = Object.keys(formData).reduce((acc, key) => {
      const error = validate(key, formData[key]);
      if (error) {
        acc[key] = error;
      }
      return acc;
    }, {});

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mnnaneen", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("SUCCESS!", response.status, response.statusText);
        setIsSubmitted(true);
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setIsSubmitted(false), 5000); // Hide confirmation after 5 seconds
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("FAILED...", error);
      alert("Failed to send the message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <Header isActive="contact" />
            <section className="about-section contact-section">
              <div className="main-about-circle"></div>
              <div className="about-circle-2"></div>
              <div className="about-circle-3"></div>
              <div className="box">
                <div className="about-content service-content">
                  <div className="about-c-top">
                    <h4>Contact Us</h4>
                    <h1 className="gradient-text">
                      Get in Touch to <br />
                      Forge the Future
                    </h1>
                  </div>
                  <div className="contact-grid">
                    <div className="cg-left">
                      <div className="contact-circle"></div>
                      <h4>Contact Us</h4>
                      <form className="cg-left-form" onSubmit={handleSubmit}>
                        <input
                          type="text"
                          name="fullName"
                          placeholder="Full Name"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                        />
                        {errors.fullName && (
                          <span className="error">{errors.fullName}</span>
                        )}
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        {errors.email && (
                          <span className="error">{errors.email}</span>
                        )}
                        <input
                          type="tel"
                          name="phoneNumber"
                          placeholder="Phone Number"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          required
                        />
                        {errors.phoneNumber && (
                          <span className="error">{errors.phoneNumber}</span>
                        )}
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                        {errors.subject && (
                          <span className="error">{errors.subject}</span>
                        )}
                        <textarea
                          name="message"
                          placeholder="Message"
                          rows="4"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                        {errors.message && (
                          <span className="error">{errors.message}</span>
                        )}
                        <button
                          type="submit"
                          className="gradient-btn"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Submitting..." : "Submit"}
                        </button>
                      </form>
                      {isSubmitted && (
                        <div className="success-message">
                          Message sent successfully!
                        </div>
                      )}
                    </div>
                    <div className="cg-right">
                      <img
                        src={ContactImg}
                        alt="digital tampa skyline with gradient background"
                        style={{ height: "400px", width: "auto" }}
                      />
                      <div className="contact-info-box">
                        <h5>
                          <span>
                            <BsTelephone />
                          </span>
                          (813) 670-2774
                        </h5>
                        <h5>
                          <span>
                            <BsEnvelope />
                          </span>
                          themasteryhouse@gmail.com
                        </h5>
                        <h5>
                          <span>
                            <BsGeoAltFill />
                          </span>
                          Tampa, FL
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="getintouch-section"></section>
            <Booking />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Contact;
