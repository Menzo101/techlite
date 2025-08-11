import React from "react";

import backgroundVideo from "../assets/studentvideo.mp4";
import image1 from "../assets/placeholder1.jpg";
import image2 from "../assets/placeholder3.jpg";
import dataSciencePic from "../assets/courses/dataScience.png";
import image4 from "../assets/placeholder4.jpg";
import image5 from "../assets/cyberimage.jpg";

import icon1 from "../assets/icons/icon-ai.svg";
import icon2 from "../assets/icons/icon-book.svg";
import icon3 from "../assets/icons/icon-money.svg";

import Marquee from "react-fast-marquee";
import icon5 from "../assets/icons/icon-timer.svg";
// import icon6 from "../assets/icons/iconshield.svg";
import { Faq } from "../pages/Faq.jsx";
import { myImages } from "../data.js";
import { Slider } from "./Slider.jsx";
import { Service } from "./Service.jsx";
import { Footer } from "./Footer.jsx";

import { testimonial } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Navbar } from "./Navbar.jsx";
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import { NavLink, useNavigate } from "react-router-dom";
export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="marque-section">
        <div className="marquee-container">
          <Marquee duration={1000}>
            {myImages.map((element) => {
              return (
                <div className="marquee">
                  <img src={element.img} />
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>

      {/* hero-section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Learn. Code. Design</h1>
          <p>
            Your destination for quality tech skills training at minimal rates.
          </p>

          <button className="cta-button" onClick={() => navigate("/contact")}>
            Apply now
          </button>
        </div>
      </div>
      {/* let chat btn */}
      <div className="letChat-btn">
        <div className="line"></div>
        <button className="chat-button">
          <span className="chat-icon">💬</span> Let's Chat
        </button>
      </div>
      {/* video Backgrounnd section */}
      <section className="video-background-section">
        <div className="video-background">
          <video src={backgroundVideo} autoPlay loop muted></video>
        </div>
      </section>

      {/* service section */}
      <section className="ourService-section">
        <div className="ourService-container">
          <h2 className="title">What we offer</h2>
          <p className="paragraph">
            Our courses are designed to equip you with the skills and knowledge
            needed to <br />
            succeed in the tech industry.
          </p>
          <marquee speed={100} pauseonhover="true" loop={0}>
            <div className="brochure-container">
              <div className="boxOne">
                <img src={icon1} alt="" className="allIcon" />
                <p className="boxOne-text">Flexible learning options</p>
              </div>
              <div className="boxOne">
                <img src={icon5} alt="" className="allIcon" />
                <p className="boxOne-text">Certificate</p>
              </div>
              <div className="boxOne">
                <img src={icon2} alt="" className="allIcon" />
                <p className="boxOne-text">Career Support Service</p>
              </div>

              <div className="boxTwo">
                <img src={icon3} className="allIcon" />
                <p className="boxTwo-text">Support Customer Service</p>
              </div>
              {/* <div className="boxTwo">
                <img src={icon6} className="allIcon" />
                <p className="boxTwo-text">Community and Service</p>
              </div> */}

              <div className="boxTwo">
                <img src={icon3} className="allIcon" />
                <p className="boxTwo-text">Hands on Learning</p>
              </div>
              <div className="boxTwo">
                <img src={icon3} className="allIcon" />
                <p className="boxTwo-text">Hands on Learning</p>
              </div>
              <div className="boxTwo">
                <img src={icon3} className="allIcon" />
                <p className="boxTwo-text">Hands on Learning</p>
              </div>
              <div className="boxTwo">
                <img src={icon3} className="allIcon" />
                <p className="boxTwo-text">Hands on Learning</p>
              </div>
              <div className="boxTwo">
                <img src={icon3} className="allIcon" />
                <p className="boxTwo-text">Hands on Learning</p>
              </div>
              <div className="boxTwo">
                <img src={icon3} className="allIcon" />
                <p className="boxTwo-text">Hands on Learning</p>
              </div>
              <div className="boxTwo">
                <img src={icon3} className="allIcon" />
                <p className="boxTwo-text">Hands on Learning</p>
              </div>
            </div>
          </marquee>
        </div>
      </section>

      {/* gallery section */}
      <section className="gallery-placeholder">
        <div className="gallery-content">
          <h2>Our Courses</h2>
          <p>
            Our online learning platform offers afforable and accessible tech
            skill training <br />
            programs designed to empower individuals to thrive in the digital
            economy.
          </p>
        </div>

        <div className="card-container">
          <div className="card">
            <div className="overlay"></div>
            <img src={image1} alt="UI/UX Design Preview" className="mockup" />
            <NavLink to="/dataanalysis" className="label">
              Data Analysis
            </NavLink>
          </div>
          <div className="card">
            <div className="overlay"></div>
            <img src={image2} alt="UI/UX Design Preview" className="mockup" />
            <NavLink to="/designer" className="label">
              Designs
            </NavLink>
          </div>
          <div className="card">
            <div className="overlay"></div>
            <img src={image5} alt="UI/UX Design Preview" className="mockup" />
            <NavLink to="/cybersecurity" className="label">
              Cybersecurity
            </NavLink>
          </div>
          <div className="card">
            <div className="overlay"></div>
            <img src={image4} alt="UI/UX Design Preview" className="mockup" />
            <NavLink to="/frontend" className="label">
              Web Development
            </NavLink>
          </div>
          <div className="card">
            <div className="overlay"></div>
            <img
              src={dataSciencePic}
              alt="UI/UX Design Preview"
              className="mockup"
            />
            <NavLink to="/datascience" className="label">
              Data Science
            </NavLink>
          </div>
        </div>

        <NavLink to="/about" id="about-link">
          <button className="gallery-btn">Learn more</button>
        </NavLink>
      </section>

      {/* community section */}
      <Service />

      {/* testimonial section */}
      <div id="testimonial-container">
        <div className="testimonial-slider">
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
                <div className="testimonial-card">
                  <p>
                    Enrolling in TechEliteskills data analysis program was a
                    game-changer! The comprehensive curriculum, hands-on
                    projects, and supportive instructors gave me the skills and
                    confidence to excel in data analysis. Now, I can extract
                    valuable insights with ease, thanks to this program
                  </p>
                  <div className="testimonial-picture">
                    <img src={item.img} />
                    <h4 className="testimonial-name"> {item.name}</h4>
                  </div>
                </div>
                <br />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* faq section */}
      <Faq />
    </>
  );
};
