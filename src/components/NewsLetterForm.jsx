import React, { useEffect, useState } from "react";
import "../home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { Oval } from "react-loader-spinner";
import ChatPDFImg from "../assets/img/chatPdf.png";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const NewsletterForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const Google_Form_URL = "https://forms.gle/dSCaVfNS31pYjiUZ8";
  const chatPDFLink = "https://chat-with-pdf-ai-saas-challenge-app.vercel.app";

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
      await addToKlaviyo(formData);
      await sendEmailWithFormLink(formData.email);

      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
      });
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
        body: `Thank you for signing up! Please complete your subscription by filling out this form: ${Google_Form_URL}. Here is your access to chatPDF: ${chatPDFLink}`,
      }),
    });
  };

  return (
    <div className="masteryhouse">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="home_page">
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
            <section className="team-section">
              <div className="main-about-circle"></div>
              <div className="about-circle-2"></div>
              <div className="about-circle-3"></div>
              <div className="box">
                <div>
                  <div className="about-c-top">
                    <h4>Subscribe to Our Newsletter</h4>
                    <h3 className="gradient-text custom-h3">
                      Stay Updated with The Mastery House
                    </h3>
                    <p
                      style={{
                        color: "var(--color-slate-300)",
                        fontSize: "1.8rem",
                        fontWeight: "300",
                      }}
                    >
                      Sign up now to receive ChatPDF, the innovative tool that
                      turns documents into actionable insights, and stay updated
                      with the latest trends in AI and business automation.
                    </p>
                    <div>
                      <img
                        className="chatpdfImg"
                        src={ChatPDFImg}
                        alt="ChatPDF"
                        style={{ maxHeight: "700px", paddingBottom: "20px" }}
                      />
                    </div>
                  </div>
                  <div className="contact-grid">
                    <div
                      className="cg-right"
                      style={{
                        display: "flex",
                        alignItems: "flex-end",
                      }}
                    >
                      <ul
                        style={{
                          color: "var(--color-slate-300)",
                          fontSize: "1.8rem",
                          fontWeight: "400",
                          lineHeight: "150%",
                          marginTop: "40px",
                        }}
                      >
                        <li style={{ marginBottom: "15px", maxWidth: "500px" }}>
                          <strong>
                            <span style={{ color: "#857dff" }}>
                              Instant Access to ChatPDF
                            </span>{" "}
                            <br />
                          </strong>
                          Unlock the potential of your documents with smart,
                          AI-driven insights and data extraction tools.
                        </li>
                        <li style={{ marginBottom: "15px", maxWidth: "500px" }}>
                          <strong>
                            <span style={{ color: "#857dff" }}>
                              Exclusive AI/Automation Tips
                            </span>
                            <br />
                          </strong>
                          Learn best practices and strategies to automate and
                          optimize your business operations.
                        </li>
                        <li style={{ marginBottom: "15px", maxWidth: "500px" }}>
                          <strong>
                            <span style={{ color: "#857dff" }}>
                              Latest Industry Trends
                            </span>{" "}
                            <br />
                          </strong>
                          Stay up-to-date with the newest trends and
                          advancements in AI and automation technology.
                        </li>
                        <li style={{ marginBottom: "15px", maxWidth: "500px" }}>
                          <strong>
                            <span style={{ color: "#857dff" }}>
                              Case Studies and Insights
                            </span>{" "}
                            <br />
                          </strong>
                          Discover real-life applications of AI and automation
                          that are driving business success.
                        </li>
                      </ul>
                    </div>
                    <div
                      className="cg-left"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        // paddingInline: "80px",
                        // backgroundColor: "transparent",
                      }}
                    >
                      <div className="contact-circle"></div>
                      {!isMobile && (
                        <form
                          className={`cg-left-form`}
                          onSubmit={handleSubmit}
                        >
                          {isSubmitted ? (
                            <div className="chatpdf-container ">
                              <h2
                                className="custom-h3"
                                style={{
                                  paddingTop: "20px",
                                  paddingBottom: "20px",
                                }}
                              >
                                Success!
                              </h2>
                              <div className="check-circle">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="48"
                                  height="48"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="green-check"
                                >
                                  <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                              </div>
                              <p
                                style={{
                                  padding: "20px",
                                }}
                              >
                                Thank you for signing up! Please check your
                                email for further instructions and your access
                                to ChatPDF.
                              </p>

                              <Link
                                to={chatPDFLink}
                                style={{
                                  paddingLeft: "20px",
                                  paddingRight: "20px",
                                }}
                              >
                                <button
                                  type="button"
                                  className="gradient-border-btn"
                                  // disabled={isSubmitting}
                                  style={{ width: "100%" }}
                                >
                                  Go to ChatPDF
                                </button>
                              </Link>
                            </div>
                          ) : (
                            <div className="cg-left-form">
                              <h3
                                className="custom-h3"
                                style={{
                                  color: "var(--color-slate-300)",
                                  fontWeight: "400",
                                  lineHeight: "150%",
                                }}
                              >
                                Unlock Instant Access to Game-Changing Insights!
                              </h3>

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
                                style={{ width: "100%" }}
                              >
                                {isSubmitting ? (
                                  <Oval
                                    height={20}
                                    width={20}
                                    color="#fff"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    visible={true}
                                    ariaLabel="oval-loading"
                                    secondaryColor="#f3f4f6"
                                    strokeWidth={2}
                                    strokeWidthSecondary={2}
                                  />
                                ) : (
                                  "Get Access Now"
                                )}
                              </button>
                            </div>
                          )}
                        </form>
                      )}
                    </div>
                    {isMobile && (
                      <form className={`cg-left-form`} onSubmit={handleSubmit}>
                        {isSubmitted ? (
                          <div className="chatpdf-container about-section">
                            <h2
                              className="custom-h3"
                              style={{
                                paddingTop: "20px",
                                paddingBottom: "20px",
                              }}
                            >
                              Success!
                            </h2>
                            <div className="check-circle">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="48"
                                height="48"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="green-check"
                              >
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            </div>
                            <p
                              style={{
                                padding: "20px",
                              }}
                            >
                              Thank you for signing up! Please check your email
                              for further instructions and your access to
                              ChatPDF.
                            </p>

                            <Link
                              to={chatPDFLink}
                              style={{
                                paddingLeft: "20px",
                                paddingRight: "20px",
                              }}
                            >
                              <button
                                type="button"
                                className="gradient-border-btn"
                                // disabled={isSubmitting}
                                style={{ width: "100%" }}
                              >
                                Go to ChatPDF
                              </button>
                            </Link>
                          </div>
                        ) : (
                          <div className="cg-left-form">
                            <h3
                              className="custom-h3"
                              style={{
                                color: "var(--color-slate-300)",
                                fontWeight: "400",
                                lineHeight: "150%",
                              }}
                            >
                              Unlock Instant Access to Game-Changing Insights!
                            </h3>

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
                              style={{ width: "100%" }}
                            >
                              {isSubmitting ? (
                                <Oval
                                  height={20}
                                  width={20}
                                  color="#fff"
                                  wrapperStyle={{}}
                                  wrapperClass=""
                                  visible={true}
                                  ariaLabel="oval-loading"
                                  secondaryColor="#f3f4f6"
                                  strokeWidth={2}
                                  strokeWidthSecondary={2}
                                />
                              ) : (
                                "Get Access Now"
                              )}
                            </button>
                          </div>
                        )}
                      </form>
                    )}
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

export default NewsletterForm;
