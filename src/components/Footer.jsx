import React from "react";
import Logo from "../assets/img/tms-logo.png";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="box">
        <div className="footer-content">
          <Link to="/">
            <img src={Logo} alt="" style={{ width: "80%", height: "auto" }} />
          </Link>
          <h5>© 2023 The Mastery House. All rights reserved</h5>
          <div className="tb-social">
            <Link to="http://linkedin.com/in/the-mastery-house-727664204/">
              <FaLinkedinIn />
            </Link>
            <Link to="http://instagram.com/themasteryhouse">
              <BsInstagram />
            </Link>
            <Link to="http://facebook.com/themasteryhouse">
              <FaFacebookF />
            </Link>
          </div>
        </div>
        <h6>© 2024 The Mastery House. All rights reserved</h6>
      </div>
    </footer>
  );
};

export default Footer;
