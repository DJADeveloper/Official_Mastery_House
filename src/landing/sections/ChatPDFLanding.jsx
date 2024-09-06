import React, { useEffect, useState } from "react";
import "../../home.css";
import ChatPDFImg from "../../assets/img/chatPdf.png"; // Replace with actual image path
import "bootstrap/dist/css/bootstrap.min.css";

import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { Oval } from "react-loader-spinner";

const ChatPDFLanding = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const Google_Form_URL = "https://forms.gle/dSCaVfNS31pYjiUZ8";

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
      // Add user to Klaviyo
      await addToKlaviyo(formData);
      // Send email with link to Google Form
      await sendEmailWithFormLink(formData.email);

      console.log("SUCCESS!");
      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("FAILED...", error);
      alert("Failed to send the message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const addToKlaviyo = async (data) => {
    return fetch("http://localhost:5001/add-to-klaviyo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        fullName: data.fullName,
      }),
    });
  };

  const sendEmailWithFormLink = async (email) => {
    return fetch("http://localhost:5001/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: email,
        subject: "Complete Your Subscription",
        body: `Thank you for signing up! Please complete your subscription by filling out this form: ${Google_Form_URL}`,
      }),
    });
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

            <section className="about-section chatpdf-section">
              <div className="main-about-circle"></div>
              <div className="about-circle-2"></div>
              <div className="about-circle-3"></div>
              <div className="box">
                <div className="about-content chatpdf-content">
                  <div className="about-c-top">
                    <h4>ChatPDF</h4>
                    <h1 className="gradient-text">
                      Transform Your Documents <br />
                      into Actionable Insights
                    </h1>
                  </div>
                  <div style={{ padding: "0px", margin: "auto" }}>
                    <img
                      className="chatpdfImg"
                      src={ChatPDFImg}
                      alt="ChatPDF"
                      // style={{ height: "100%", width: "auto !important" }}
                    />
                  </div>

                  <div className="contact-grid">
                    <div className="cg-right">
                      <div className="chatpdf-info-box">
                        <div className="git-b-top">
                          <h3 className="gradient-text">Book a Call with Us</h3>
                          <p>
                            Join us at The Mastery House in Tampa. Let's set the
                            benchmark in digital excellence.
                          </p>
                        </div>
                        <div className="gitsvg-box">
                          <div>
                            <span>
                              Quick Data Extraction
                              <h6>
                                Instantly pull out key insights from any
                                document without the manual hassle.
                              </h6>
                            </span>
                          </div>
                          <div>
                            <span>
                              Smart Analysis
                              <h6>
                                Utilize advanced AI to analyze and interpret
                                data for more informed decision-making.
                              </h6>
                            </span>
                          </div>
                          <div>
                            <span>
                              Customized Reports
                              <h6>
                                Generate tailored reports that align with your
                                business needs, keeping you ahead of the curve.
                              </h6>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="cg-left">
                      <div className="contact-circle"></div>
                      <h4>Get Started with ChatPDF</h4>
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
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ChatPDFLanding;
