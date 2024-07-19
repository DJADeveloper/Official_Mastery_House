import React, { useState, useEffect } from "react";
import "../home.css";

const BookACall = ({ onClose, position }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    date: "",
    time: "",
  });
  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState("");

  useEffect(() => {
    if (position) {
      const popup = document.querySelector(".book-a-call-container");
      if (popup) {
        popup.style.top = `${position.top}px`;
        popup.style.left = `${position.left}px`;
      }
    }
  }, [position]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch("https://formspree.io/f/mnnaneen", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus("Message sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          date: "",
          time: "",
        });
      } else {
        setSubmissionStatus(
          "Failed to send the message. Please try again later."
        );
      }
    } catch (error) {
      setSubmissionStatus(
        "Failed to send the message. Please try again later."
      );
    }
  };

  return (
    <div className="book-a-call-overlay" onClick={onClose}>
      <div
        className="book-a-call-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h3>Book a 30-Minute Call</h3>
        <form onSubmit={handleSubmit} className="cg-left-form">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className={errors.fullName ? "error" : ""}
            required
          />
          {errors.fullName && (
            <span className="error-text">{errors.fullName}</span>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "error" : ""}
            required
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={errors.date ? "error" : ""}
            required
          />
          {errors.date && <span className="error-text">{errors.date}</span>}
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className={errors.time ? "error" : ""}
            required
          />
          {errors.time && <span className="error-text">{errors.time}</span>}
          <button type="submit" className="gradient-btn">
            Submit
          </button>
        </form>
        {submissionStatus && (
          <p className="submission-status">{submissionStatus}</p>
        )}
      </div>
    </div>
  );
};

export default BookACall;
