import React, { useEffect } from "react";

import { useLocation } from "react-router-dom";

const CustomCalendlyButton = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Check if the current path ends with '/contact' or '/landing/business-automation/contact'
  const isContactPage =
    currentPath.endsWith("/contact") ||
    currentPath.endsWith("/landing/business-automation/contact");

  useEffect(() => {
    // Dynamically load the Calendly script when the component mounts
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Function to trigger Calendly popup
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/themasteryhouse/30min",
      });
      return false;
    } else {
      console.error("Calendly script not loaded yet.");
    }
  };

  return (
    <button
      onClick={openCalendly}
      className="gradient-btn"
      style={{ minWidth: "125px" }}
    >
      {isContactPage ? "Let's Connect" : "Get Started"}
    </button>
  );
};

export default CustomCalendlyButton;
