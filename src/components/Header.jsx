import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/potential-logos/potential-logo2.svg"; // Corrected path to use consistent logo

import {
  BsChevronRight,
  BsChevronLeft,
  BsArrowRight,
  BsArrowUpRight,
  BsList,
  BsXLg,
  BsChevronDown,
} from "react-icons/bs";
import CustomCalendlyButton from "./CustomCalendlyButton";

const Header = (props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownSerOpen, setIsDropdownSerOpen] = useState(false);

  const toggleDropdownServ = () => {
    setIsDropdownSerOpen(!isDropdownSerOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header>
      <div className="box">
        <div className="header_cont">
          <Link to="/">
            <img src={Logo} alt="tmh-logo" style={{ width: "250px" }} />
          </Link>

          <div className="header_right">
            <Link
              className={`${props.isActive === "home" ? "active" : ""}`}
              to="/"
            >
              Home
            </Link>
            <Link
              className={`${props.isActive === "about" ? "active" : ""}`}
              to="/about"
            >
              About
            </Link>
            <Link
              className={`${props.isActive === "services" ? "active" : ""}`}
              onClick={toggleDropdownServ}
            >
              Services <BsChevronDown />
              {isDropdownSerOpen && (
                <div className="dropdown-box">
                  <Link
                    to="/services/web-development"
                    onClick={closeMobileMenu}
                  >
                    Web Development
                  </Link>
                  <Link to="/services/software-development">
                    Software Development
                  </Link>
                  <Link to="/services/ai-development">AI Development</Link>
                  <Link to="/services/mobile-development">
                    Mobile Development
                  </Link>
                  <Link to="/services/business-automation">
                    Business Automation
                  </Link>
                </div>
              )}
            </Link>
            <Link
              className={`${props.isActive === "contact" ? "active" : ""}`}
              to="/blogs"
            >
              Blog
            </Link>
            <Link
              className={`${props.isActive === "contact" ? "active" : ""}`}
              to="/contact"
            >
              Contact
            </Link>
            {/* Updated Call to Action Button */}
          </div>
          <CustomCalendlyButton />

          {/* Mobile Menu Icon */}
          <div className="hr-mob-icon" onClick={toggleMobileMenu}>
            <BsList />
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="mobile-menu">
              <div className="mob-circle-1"></div>
              <div className="mob-circle-2"></div>
              <div className="mobile-menu-top">
                <Link to="/">
                  <img
                    src={Logo}
                    alt="tmh-logo"
                    style={{ width: "80%", height: "auto" }}
                  />
                </Link>
                <BsXLg onClick={closeMobileMenu} />
              </div>
              <div className="mobile-menu-bottom">
                <Link
                  className={`${props.isActive === "home" ? "active" : ""}`}
                  to="/"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
                <Link
                  className={`${props.isActive === "about" ? "active" : ""}`}
                  to="/about"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
                <Link
                  className={`${props.isActive === "services" ? "active" : ""}`}
                  onClick={toggleDropdownServ}
                >
                  Services <BsChevronDown />
                  {isDropdownSerOpen && (
                    <div className="dropdown-box">
                      <Link
                        to="/services/web-development"
                        onClick={closeMobileMenu}
                      >
                        Web Development
                      </Link>
                      <Link
                        to="/services/software-development"
                        onClick={closeMobileMenu}
                      >
                        Software Development
                      </Link>
                      <Link
                        to="/services/ai-development"
                        onClick={closeMobileMenu}
                      >
                        AI Development
                      </Link>
                      <Link
                        to="/services/mobile-development"
                        onClick={closeMobileMenu}
                      >
                        Mobile Development
                      </Link>
                      <Link
                        to="/services/business-automation"
                        onClick={closeMobileMenu}
                      >
                        Business Automation
                      </Link>
                    </div>
                  )}
                </Link>
                <Link
                  className={`${props.isActive === "blogs" ? "active" : ""}`}
                  to="/blogs"
                  onClick={closeMobileMenu}
                >
                  Blog
                </Link>
                <Link
                  className={`${props.isActive === "contact" ? "active" : ""}`}
                  to="/contact"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
