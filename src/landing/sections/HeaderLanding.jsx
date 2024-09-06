import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/potential-logos/potential-logo2.svg"; // Corrected path to use consistent logo
import {
  BsChevronRight,
  BsChevronLeft,
  BsArrowRight,
  BsArrowUpRight,
  BsList,
  BsXLg,
  BsChevronDown,
} from "react-icons/bs";
import CustomCalendlyButton from "../../components/CustomCalendlyButton";
import { useMediaQuery } from "react-responsive";

const HeaderLanding = (props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownSerOpen, setIsDropdownSerOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

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
        <div
          className="header_cont"
          style={{
            display: "flex",
            justifyContent: isMobile && "center",
            alignItems: "center",
          }}
        >
          <Link to="/">
            <img src={Logo} alt="tmh-logo" style={{ width: "250px" }} />
          </Link>

          {!isMobile && <CustomCalendlyButton />}
        </div>
      </div>
    </header>
  );
};

export default HeaderLanding;
