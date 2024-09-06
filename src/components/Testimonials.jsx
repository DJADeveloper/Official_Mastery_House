import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import CaseLogo1 from "../assets/projectImages/unifit/unifit-logo.png";
import CaseLogo2 from "../assets/projectImages/fco/fco-logo.png";
import {
  EffectCoverflow,
  Navigation,
  Autoplay,
  Pagination,
} from "swiper/modules";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import "../home.css";

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
          slidesPerView={2}
          modules={[Navigation, EffectCoverflow, Autoplay, Pagination]} // Add Autoplay module here
          // effect={"coverflow"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={{
            nextEl: ".team-next",
            prevEl: ".team-prev",
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
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
          touchRatio={1}
          touchAngle={45}
          grabCursor={true}
        >
          <SwiperSlide>
            <div className="testimonial-cs-box-component">
              <div className="testi-circle"></div>
              <img src={SemiColon} alt="" />
              <p>
                I can’t even put into words how much I love the website The
                Mastery House has put together for me. They listened to all my
                concerns, paid special attention to the detail I had to have,
                and executed my desired website better than I imagined. Highly
                recommend their services!
              </p>
              <div className="test-cs-profile">
                <h6>
                  Dylan <span>CEO - KIND OF A BIG DYL</span>
                </h6>
                {/* <img src={CaseLogo1} alt="" /> */}
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-cs-box-component">
              <div className="testi-circle"></div>
              <img src={SemiColon} alt="" />
              <p>
                It's always exciting to see a project come to fruition. Having
                The Mastery House handle it made a big difference in the quality
                and outcome of our website. Their team is professional and
                innovative, delivering exceptional results!
              </p>
              <div className="test-cs-profile">
                <h6>
                  Ann Marie{" "}
                  <span>Manager of Operations - The French Chateau</span>
                </h6>
                {/* <img src={CaseLogo2} alt="" /> */}
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-cs-box-component">
              <div className="testi-circle"></div>
              <img src={SemiColon} alt="" />
              <p>
                The Mastery House consistently provides superb service. They not
                only execute flawlessly but also bring new ideas and strategies,
                adding immense value to our business. Truly a pleasure to work
                with such a dedicated team!
              </p>
              <div className="test-cs-profile">
                <h6>
                  Lydel <span>Technologist - DigiDex</span>
                </h6>
                {/* <img src={CaseLogo1} alt="" /> */}
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-cs-box-component">
              <div className="testi-circle"></div>
              <img src={SemiColon} alt="" />
              <p>
                Building our MVP app with The Mastery House was a game-changer
                for UniFit. They delivered a sleek, user-friendly app that
                aligns perfectly with our brand. Their team's expertise and
                responsiveness have been crucial to our growth.
              </p>
              <div className="test-cs-profile">
                <h6>
                  Rachel <span>CTO - UniFit</span>
                </h6>
                {/* <img src={CaseLogo1} alt="" /> */}
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-cs-box-component">
              <div className="testi-circle"></div>
              <img src={SemiColon} alt="" />
              <p>
                Our partnership with The Mastery House has been invaluable. They
                streamlined our marketing, maintained our website, and developed
                an internal app that has greatly improved our operations. A
                professional team that truly understands our needs!
              </p>
              <div className="test-cs-profile">
                <h6>
                  Victoria
                  <span>Director - Toria Support Care Services</span>
                  {/* <img src={CaseLogo1} alt="" /> */}
                </h6>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-cs-box-component">
              <div className="testi-circle"></div>
              <img src={SemiColon} alt="" />
              <p>
                Partnering with The Mastery House was transformative for
                Northwood Manor. They automated our digital marketing and social
                media, saving us time and money. The improvements have enhanced
                our outreach and efficiency.
              </p>
              <div className="test-cs-profile">
                <h6>
                  Shereve <span>Administrator - Northwood Manor</span>
                </h6>
                {/* <img src={CaseLogo1} alt="" /> */}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
