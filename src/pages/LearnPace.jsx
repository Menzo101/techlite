import React from "react";
import { NavLink } from "react-router-dom";
import { Contactform } from "./Contactform";

import { Navbar } from "./Navbar";
import { testimonial } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";

import newabout from "../assets/courses/newabout.png";
import { FaCheckCircle } from "react-icons/fa";
import image1 from "../assets/placeholder1.jpg";
import image2 from "../assets/placeholder3.jpg";
import dataSciencePic from "../assets/courses/dataScience.png";
import image4 from "../assets/placeholder4.jpg";
import image5 from "../assets/cyberimage.jpg";
import sampleImg from "../assets/courses/editimg.png";
import {
  FiSettings,
  FiMessageSquare,
  FiBookOpen,
  FiBriefcase,
} from "react-icons/fi";

import paceOne from "../assets/courses/paceone.png";
import paceTwo from "../assets/courses/pacetwo.png";
import paceThree from "../assets/courses/pacethree.png";
import paceFour from "../assets/courses/pacefour.png";
import paceFive from "../assets/courses/pagefive.png";
import paceSix from "../assets/courses/pagesix.png";
const cards = [
  {
    id: 1,
    img: paceOne, // Replace with your image path
  },
  {
    id: 2,
    img: paceTwo,
  },
  {
    id: 3,
    img: paceThree,
  },
  {
    id: 4,
    img: paceFour,
  },

  {
    id: 5,
    img: paceFive,
  },
  {
    id: 6,
    img: paceSix,
  },
];
const features = [
  {
    icon: <FiSettings />,
    title:
      "Customize your learning path to match your career goals and learning style.",
  },
  {
    icon: <FiMessageSquare />,
    title: "Provide personalized feedback on your projects and code.",
  },
  {
    icon: <FiBookOpen />,
    title:
      "Guide you through complex topics and answer your specific questions in real time.",
  },
  {
    icon: <FiBriefcase />,
    title: "Offer career advice and insights into the tech industry.",
  },
];
export const LearnPace = () => {
  return (
    <>
      <>
        <Navbar />
        <section className="learn-section">
          <div className="learn-container">
            <div className="learn-content">
              <h1>Learn at your place</h1>
              <p>
                TECH ELITE SKILLS is an online school focused on your success.{" "}
                <br />
                We pair you with a tech pro who guides you through learning tech
                skills <br /> at your own pace. Get the skills and certificate
                you need for your dream tech job.
              </p>
            </div>
            <div className="learn-image" />
            <img src={newabout} />
          </div>
        </section>
        {/* next session */}
        <section className="why-container">
          <h2 className="why-title">Why Choose Tech Elite Skills?</h2>
          <p className="why-subtitle">
            We believe that true mastery comes from personalized guidance and
            hands-on experience. That’s why we’ve built a learning platform that
            is flexible, effective, and deeply personal. Personalized 1-on-1
            Coaching & Mentorship
          </p>

          <div className="features-grid">
            {features.map((item, index) => (
              <div key={index} className="feature-card">
                <div className="icon">{item.icon}</div>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </section>
        {/* vision sections */}
        <div className="peace-wrapper">
          <div className="paceslider-container">
            <div className="paceslider-header">
              <h1>Learn at Your Own Pace</h1>
              <p>
                Life is busy, and we get it. Our program is built to fit your
                schedule,
                <br />
                not the other way around.
              </p>
            </div>
            <div className="paceslider-cards">
              {cards.map((card, idx) => (
                <div className="peaceslider-card" key={idx}>
                  <img src={card.img} alt={card.title} />
                  <div className="paceslider-content">
                    <strong>{card.title}</strong>
                    <div>{card.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* courses */}

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
        {/* mission section  */}
        <section className="journey-container">
          <h2 className="journey-title">
            How It Works: <br /> Your Journey to Success
          </h2>
          <div className="journey-content">
            <div className="journey-image">
              <img src={sampleImg} alt="Mentorship" className="journey-image" />
            </div>

            <div className="journey-steps">
              <div className="step">
                <FaCheckCircle className="icon" />
                <div>
                  <h4>Get Matched</h4>
                  <p>
                    We will pair you with a hand-picked mentor who is an expert
                    in your chosen field.
                  </p>
                </div>
              </div>
              <div className="step">
                <FaCheckCircle className="icon" />
                <div>
                  <h4>Choose Your Course</h4>
                  <p>
                    Browse our catalog and select the tech skill you want to
                    master.
                  </p>
                </div>
              </div>
              <div className="step">
                <FaCheckCircle className="icon" />
                <div>
                  <h4>Start Learning</h4>
                  <p>
                    Begin your personalized learning journey with weekly
                    one-on-one sessions, practical projects, and continuous
                    support.
                  </p>
                </div>
              </div>
              <div className="step">
                <FaCheckCircle className="icon" />
                <div>
                  <h4>Get Certified</h4>
                  <p>
                    Complete your course, earn your certificate, and receive
                    personalized career guidance.
                  </p>
                </div>
              </div>
              <div className="step">
                <FaCheckCircle className="icon" />
                <div>
                  <h4>Launch Your Career</h4>
                  <p>
                    Browse our catalog and select the tech skill you want to
                    master, use your new skills, portfolio, and confidence to
                    land opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                      Enrolling in TechEliteskill data analysis program was a
                      game-changer! The comprehensive curriculum, hands-on
                      projects, and supportive instructors gave me the skills
                      and confidence to excel in data analysis. Now, I can
                      extract valuable insights with ease, thanks to this
                      program
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

        {/* speak to advisor */}
        <div className="tf-container">
          <h1 className="tf-title">Ready to Transform Your Future?</h1>
          <p className="tf-subtitle">
            Do not wait to start the career you have always
            <br />
            wanted. Get the personalized attention and expert
            <br />
            guidance you need to succeed.
          </p>
          <div className="tf-buttons">
            <button className="tf-btn tf-btn-primary">
              EXPLORE OUR COURSES
            </button>
            <button className="tf-btn tf-btn-outline">SPEAK TO ADVISOR</button>
          </div>
        </div>
        {/* contactform */}
        <Contactform />

        {/* footer section */}
      </>
    </>
  );
};
