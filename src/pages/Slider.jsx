import React from "react";
import { testimonial } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "./testimonialSlider.css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Slider = () => {
  return (
    <div id="black-container">
      <div className="black-slider">
        <h2>Students Success Story</h2>
        <div className="custom-prev">←</div>
        <div className="custom-next">→</div>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
        >
          {testimonial.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="black-card">
                <p>
                  Enrolling in Techliteskills data analysis program was a
                  game-changer! The comprehensive curriculum, hands-on projects,
                  and supportive instructors gave me the skills and confidence
                  to excel in data analysis. Now, I can extract valuable
                  insights with ease, thanks to this program
                </p>
                <div className="slider-picture">
                  <img src={item.img} className="blackImage" />
                  <h4 className="black-name"> {item.name}</h4>
                </div>
              </div>
              <br />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
