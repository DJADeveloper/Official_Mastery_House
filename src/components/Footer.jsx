import React from "react";
import Logo from "../assets/img/logo-tms.png";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="box">
        <div className="footer-content">
          <img src={Logo} alt="" />
          <h5>© 2023 The Mastery House. All rights reserved</h5>
          <div className="tb-social">
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaXTwitter />
            </a>
          </div>
        </div>
        <h6>© 2023 The Mastery House. All rights reserved</h6>
      </div>
    </footer>
  );
};

export default Footer;
