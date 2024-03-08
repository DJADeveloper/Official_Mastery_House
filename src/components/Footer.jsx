import React from "react";
import Logo from "../assets/img/logo-tms.png";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="box">
        <div className="footer-content">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
          <h5>© 2023 The Mastery House. All rights reserved</h5>
          <div className="tb-social">
            <Link to="#">
              <FaLinkedinIn />
            </Link>
            <Link to="#">
              <FaXTwitter />
            </Link>
          </div>
        </div>
        <h6>© 2023 The Mastery House. All rights reserved</h6>
      </div>
    </footer>
  );
};

export default Footer;
