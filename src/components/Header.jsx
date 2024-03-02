import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo-tms.png";

import {
  BsChevronRight,
  BsChevronLeft,
  BsArrowRight,
  BsArrowUpRight,
  BsList,
  BsXLg,
} from "react-icons/bs";

const Header = (props) => {
  const [isActive, setIsActive] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // Toggle mobile menu visibility
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
          <img src={Logo} alt="" />
          <div className="header_right">
            <Link
              className={`${props.isActive == "home" ? "active" : ""}`}
              to="/"
            >
              Home
            </Link>
            <Link
              className={`${props.isActive == "about" ? "active" : ""}`}
              to="/about"
            >
              About
            </Link>
            <Link
              className={`${props.isActive == "casestudy" ? "active" : ""}`}
              to="/casestudy"
            >
              Case Studies
            </Link>
            <Link
              className={`${props.isActive == "services" ? "active" : ""}`}
              to="/service"
            >
              Services
            </Link>
            <Link
              className={`${props.isActive == "contact" ? "active" : ""}`}
              to="/contact"
            >
              Contact
            </Link>
          </div>
          <div className="hr-mob-icon" onClick={toggleMobileMenu}>
            <BsList />
          </div>
          {isMobileMenuOpen && (
            <div className="mobile-menu">
              <div className="mob-circle-1"></div>
              <div className="mob-circle-2"></div>
              <div className="mobile-menu-top">
                <img src={Logo} alt="" />
                <BsXLg onClick={closeMobileMenu} />
              </div>
              <div className="mobile-menu-bottom">
                <Link
                  className={`${props.isActive == "home" ? "active" : ""}`}
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className={`${props.isActive == "about" ? "active" : ""}`}
                  to="/about"
                >
                  About
                </Link>
                <Link
                  className={`${props.isActive == "casestudy" ? "active" : ""}`}
                  to="/casestudy"
                >
                  Case Studies
                </Link>
                <Link
                  className={`${props.isActive == "services" ? "active" : ""}`}
                  to="/service"
                >
                  Services
                </Link>
                <Link
                  className={`${props.isActive == "contact" ? "active" : ""}`}
                  to="/contact"
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
