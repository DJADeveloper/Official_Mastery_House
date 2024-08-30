import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import "../home.css";
import { Link } from "react-router-dom";

import csProfile from "../assets/img/csprofile.png";
import SemiColon from "../assets/img/semicolon.svg";

const Testimonials = () => {
  return (
    <section className="testimonial-section">
      <div className="team-circle-1"></div>
      <div className="team-circle-2"></div>
      <div className="box">
        <div className="swiper-head">
          <div className="swiper-head-right">
            <h2 className="gradient-text">Stories from Our Guests</h2>
          </div>

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
          spaceBetween={30}
          slidesPerView={1}
          modules={[Navigation, EffectCoverflow, Autoplay]} // Ensure Autoplay module is included
          effect={"coverflow"}
          speed={800}
          autoplay={{
            delay: 3000, // Time delay in milliseconds
            disableOnInteraction: false, // Continue autoplay after user interaction
          }}
          loop={true}
          coverflowEffect={{
            rotate: 30, // Tilt the slide
            stretch: 0,
            depth: 100, // Depth between slides
            modifier: 1,
            slideShadows: true, // Adds shadow on sides
          }}
          navigation={{
            nextEl: ".team-next",
            prevEl: ".team-prev",
          }}
          breakpoints={{
            750: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1300: {
              slidesPerView: 1.5,
              spaceBetween: 40,
            },
          }}
        >
          <SwiperSlide>
            <div className="testimonial-cs-box-component">
              <div className="testi-circle"></div>
              <img src={SemiColon} alt="" />
              <p>
                I can’t even put into words how much I love the website The
                MasteryHouse has put together for me. They listened to all my
                concerns, paid special attention to the detail I had to have,
                and executed my desired website better than I imagined. The
                Mastery House was patient when I was not. LOL They were helpful
                & kind and I would tell anyone to use their services. Thank you
                again!
              </p>
              <div className="test-cs-profile">
                {/* <img src={csProfile} alt="" /> */}
                <h6>
                  Dylan Reback <span>CEO - KIND OF A BIG DYL</span>
                </h6>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-cs-box-component">
              <div className="testi-circle"></div>
              <img src={SemiColon} alt="" />
              <p>
                It’s always exciting to see a project come to fruition and
                having a skilled professional like The Mastery House handle It,
                can make a big difference in the quality and outcome of your
                website. Exceptional!
              </p>
              <div className="test-cs-profile">
                {/* <img src={csProfile} alt="" /> */}
                <h6>
                  Ann Marie <span>Operations Manager - The French Chateau</span>
                </h6>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-cs-box-component">
              <div className="testi-circle"></div>
              <img src={SemiColon} alt="" />
              <p>
                The Mastery House has not only provided an excellent touch to
                all that they've done for my business but they continually
                monitor and comes up with new ideas and strategies as well as
                adding to the suggestions of the clients... Superb Service.
              </p>
              <div className="test-cs-profile">
                {/* <img src={csProfile} alt="" /> */}
                <h6>
                  Lydel <span>Technologist - DigiDex</span>
                </h6>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-cs-box-component">
              <div className="testi-circle"></div>
              <img src={SemiColon} alt="" />
              <p>
                The Mastery House was pivotal in building our MVP app for
                UniFit. Their team quickly understood our needs and delivered a
                sleek, user-friendly app that perfectly matches our eco-friendly
                fitness brand. Their expertise and responsiveness have been
                invaluable in helping us enhance customer experience and drive
                growth. Highly recommended for any business looking to scale
                with innovative tech solutions!
              </p>
              <div className="test-cs-profile">
                {/* <img src={csProfile} alt="" /> */}
                <h6>
                  James <span>CTO - UniFit</span>
                </h6>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-cs-box-component">
              <div className="testi-circle"></div>
              <img src={SemiColon} alt="" />
              <p>
                The Mastery House has been an incredible partner for Toria
                Support Care Services. They expertly handled our marketing, web
                maintenance, and built an internal app for resident records and
                employee logins. Their solutions have streamlined our operations
                and enhanced our efficiency as an assisted living facility.
                Their team is professional, responsive, and truly understands
                our needs. We highly recommend them!
              </p>
              <div className="test-cs-profile">
                {/* <img src={csProfile} alt="" /> */}
                <h6>
                  Victoria <span>CEO - Toria Support Care Services</span>
                </h6>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
