import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Logo from "../assets/img/logo-tms.png";
import Logo from "../assets/img/tms-logo.png";

import {
  BsChevronRight,
  BsChevronLeft,
  BsArrowRight,
  BsArrowUpRight,
  BsList,
  BsXLg,
  BsChevronDown,
} from "react-icons/bs";
import gsap from "gsap";

const Header = (props) => {
  const [isActive, setIsActive] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownSerOpen, setIsDropdownSerOpen] = useState(false);

  const [isLightMode, setIsLightMode] = useState(false);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    document.documentElement.classList.toggle("light-mode");
  };

  const toggleDropdownServ = () => {
    setIsDropdownSerOpen(!isDropdownSerOpen);
  };
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
          <Link to="/">
            <img src={Logo} alt="tmh-logo" style={{ width: "250px" }} />
          </Link>

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
              onClick={toggleDropdownServ}
            >
              Services <BsChevronDown />
              {isDropdownSerOpen && (
                <div className="dropdown-box">
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
              className={`${props.isActive == "contact" ? "active" : ""}`}
              to="/blogs"
            >
              Blog
            </Link>
            <Link
              className={`${props.isActive == "contact" ? "active" : ""}`}
              to="/contact"
            >
              Contact
            </Link>
            {/* <button onClick={toggleTheme}>Toggle Light Mode</button> */}
          </div>
          <div className="hr-mob-icon" onClick={toggleMobileMenu}>
            <BsList />
          </div>
          {isMobileMenuOpen && (
            <div className="mobile-menu">
              <div className="mob-circle-1"></div>
              <div className="mob-circle-2"></div>
              <div className="mobile-menu-top">
                <Link to="/">
                  <img src={Logo} alt="" />
                </Link>
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
                {/* <Link
                  className={`${props.isActive == "casestudy" ? "active" : ""}`}
                  to="/casestudy"
                >
                  Case Studies
                </Link> */}
                <Link
                  className={`${props.isActive == "services" ? "active" : ""}`}
                  onClick={toggleDropdownServ}
                >
                  Services <BsChevronDown />
                  {isDropdownSerOpen && (
                    <div className="dropdown-box">
                      <Link to="/services/blockchain-development">
                        Blockchain Development
                      </Link>
                      <Link to="/services/software-development">
                        Software Development
                      </Link>
                      <Link to="/services/ai-development">AI Development</Link>
                      <Link to="/services/consulting">
                        Consulting and Strategy
                      </Link>
                    </div>
                  )}
                </Link>
                <Link
                  className={`${props.isActive == "contact" ? "active" : ""}`}
                  to="/blogs"
                >
                  Blog
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
