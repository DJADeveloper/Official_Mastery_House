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

const NewsletterForm = () => {
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
      // Send email with link to Google Form
      await sendEmailWithFormLink(formData.email);

      console.log("SUCCESS!");
      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
      });
      setTimeout(() => setIsSubmitted(false), 5000); // Hide confirmation after 5 seconds
    } catch (error) {
      console.error("FAILED...", error);
      alert("Failed to send the message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const sendEmailWithFormLink = async (email) => {
    // Replace with your backend API or service for sending emails
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
            <section className="">
              <div className="main-about-circle"></div>
              <div className="about-circle-2"></div>
              <div className="about-circle-3"></div>
              <div className="box">
                <div className="about-content service-content newsletter-section">
                  <div className="about-c-top">
                    <h4>Subscribe to Our Newsletter</h4>
                    <h1 className="gradient-text">
                      Stay Updated with The Mastery House
                    </h1>
                  </div>
                  <div className="contact-grid">
                    <div className="cg-left">
                      <div className="contact-circle"></div>
                      <form className="cg-left-form" onSubmit={handleSubmit}>
                        <h4
                          style={{
                            color: "var(--color-slate-300)",
                            marginBottom: "10px",
                            fontWeight: "400",
                            lineHeight: "150%",
                          }}
                        >
                          Subscribe to Our Newsletter for Exclusive
                          AI/Automation Insights
                        </h4>

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
                            "Submit"
                          )}
                        </button>
                      </form>
                      {/* <div className="privacy-policy">
                        By signing up, you agree to our Privacy Policy ,
                        including the use of cookies and transfer of your
                        personal information.
                      </div> */}
                      {isSubmitted && (
                        <p className="success-message">
                          Thank you for signing up! Please check your email for
                          further instructions.
                        </p>
                      )}
                    </div>
                    <div>
                      {/* <h2
                        style={{
                          color: "var(--color-slate-300)",
                          marginBottom: "10px",
                          fontWeight: "400",
                          lineHeight: "150%",
                        }}
                      >
                        Unlock Your Business’s Potential with a Free
                        AI/Automation Audit
                      </h2> */}
                      <p
                        style={{
                          color: "var(--color-slate-300)",
                          fontSize: "1.8rem",
                          fontWeight: "300",
                          marginTop: "5px",
                          marginBottom: "25px",
                        }}
                      >
                        Discover how automation can streamline your operations
                        and boost your efficiency. Sign up for our newsletter
                        and receive:
                      </p>
                      <ul
                        style={{
                          color: "var(--color-slate-300)",
                          fontSize: "1.8rem",
                          fontWeight: "400",
                          lineHeight: "150%",
                        }}
                      >
                        <li style={{ marginBottom: "10px" }}>
                          <strong>Free AI/Automation Audit:</strong> Receive a
                          personalized audit to identify areas for improvement
                          and optimization.
                        </li>
                        <li style={{ marginBottom: "10px" }}>
                          <strong>Exclusive Industry Insights:</strong> Stay
                          informed with the latest trends and developments in AI
                          and automation.
                        </li>
                        <li style={{ marginBottom: "10px" }}>
                          <strong>Updates on Latest Trends:</strong> Get updates
                          on the latest AI and automation trends to stay ahead
                          of the competition.
                        </li>
                        <li style={{ marginBottom: "10px" }}>
                          <strong>Case Studies and Success Stories:</strong>{" "}
                          Learn from real-world examples of how AI and
                          automation are transforming businesses.
                        </li>
                        <li style={{ marginBottom: "10px" }}>
                          <strong>Special Offers and Promotions:</strong> Enjoy
                          exclusive offers and promotions tailored for your
                          business needs.
                        </li>
                      </ul>
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

export default NewsletterForm;
