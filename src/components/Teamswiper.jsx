import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { BsChevronLeft, BsChevronRight, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Team1 from "../assets/img/team-1.png";
import "../home.css";
import { Link } from "react-router-dom";

const Teamswiper = () => {
  return (
    <section className="team-section">
      <div className="team-circle-1"></div>
      <div className="team-circle-2"></div>
      <div className="box">
        <div className="swiper-head">
          <h2 className="gradient-text">Our Team</h2>
          <div className="sh-right">
            <span className="team-prev">
              <BsChevronLeft />
            </span>
            <span className="team-next">
              <BsChevronRight />
            </span>
          </div>
        </div>
        <Swiper
          spaceBetween={15}
          slidesPerView={1.1}
          modules={[Navigation]}
          navigation={{
            nextEl: ".team-next",
            prevEl: ".team-prev",
          }}
          breakpoints={{
            750: {
              slidesPerView: 2.5,
              spaceBetween: 25,
            },
            1000: {
              slidesPerView: 3.15,
            },
            1300: {
              slidesPerView: 4.15,
            },
          }}
        >
          <SwiperSlide>
            <div className="team-card">
              <img src={Team1} />
              <div className="team-bottom">
                <h5>
                  Emilia Clark
                  <span>CEO, Founder</span>
                </h5>
                <div className="tb-social-box">
                  <Link
                    to="http://linkedin.com/in/the-mastery-house-727664204/"
                    className="tbs-social-icon"
                  >
                    <FaLinkedinIn />
                  </Link>
                  <Link
                    to="http://instagram.com/themasteryhouse"
                    className="tbs-social-icon"
                  >
                    <BsInstagram />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="team-card">
              <img src={Team1} />
              <div className="team-bottom">
                <h5>
                  Emilia Clark
                  <span>CEO, Founder</span>
                </h5>
                <div className="tb-social-box">
                  <Link
                    to="http://linkedin.com/in/the-mastery-house-727664204/"
                    className="tbs-social-icon"
                  >
                    <FaLinkedinIn />
                  </Link>
                  <Link
                    to="http://instagram.com/themasteryhouse"
                    className="tbs-social-icon"
                  >
                    <BsInstagram />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="team-card">
              <img src={Team1} />
              <div className="team-bottom">
                <h5>
                  Emilia Clark
                  <span>CEO, Founder</span>
                </h5>
                <div className="tb-social-box">
                  <Link
                    to="http://linkedin.com/in/the-mastery-house-727664204/"
                    className="tbs-social-icon"
                  >
                    <FaLinkedinIn />
                  </Link>
                  <Link
                    to="http://instagram.com/themasteryhouse"
                    className="tbs-social-icon"
                  >
                    <BsInstagram />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="team-card">
              <img src={Team1} />
              <div className="team-bottom">
                <h5>
                  Emilia Clark
                  <span>CEO, Founder</span>
                </h5>
                <div className="tb-social-box">
                  <Link
                    to="http://linkedin.com/in/the-mastery-house-727664204/"
                    className="tbs-social-icon"
                  >
                    <FaLinkedinIn />
                  </Link>
                  <Link
                    to="http://instagram.com/themasteryhouse"
                    className="tbs-social-icon"
                  >
                    <BsInstagram />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="team-card">
              <img src={Team1} />
              <div className="team-bottom">
                <h5>
                  Emilia Clark
                  <span>CEO, Founder</span>
                </h5>
                <div className="tb-social-box">
                  <Link
                    to="http://linkedin.com/in/the-mastery-house-727664204/"
                    className="tbs-social-icon"
                  >
                    <FaLinkedinIn />
                  </Link>
                  <Link
                    to="http://instagram.com/themasteryhouse"
                    className="tbs-social-icon"
                  >
                    <BsInstagram />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="team-card">
              <img src={Team1} />
              <div className="team-bottom">
                <h5>
                  Emilia Clark
                  <span>CEO, Founder</span>
                </h5>
                <div className="tb-social-box">
                  <Link
                    to="http://linkedin.com/in/the-mastery-house-727664204/"
                    className="tbs-social-icon"
                  >
                    <FaLinkedinIn />
                  </Link>
                  <Link
                    to="http://instagram.com/themasteryhouse"
                    className="tbs-social-icon"
                  >
                    <BsInstagram />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="team-card">
              <img src={Team1} />
              <div className="team-bottom">
                <h5>
                  Emilia Clark
                  <span>CEO, Founder</span>
                </h5>
                <div className="tb-social-box">
                  <Link
                    to="http://linkedin.com/in/the-mastery-house-727664204/"
                    className="tbs-social-icon"
                  >
                    <FaLinkedinIn />
                  </Link>
                  <Link
                    to="http://instagram.com/themasteryhouse"
                    className="tbs-social-icon"
                  >
                    <BsInstagram />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Teamswiper;
