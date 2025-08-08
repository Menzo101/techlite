import React from "react";
import "./section.css"; // make sure to style the classes
import logoOne from "../assets/icons/iconSuccess.svg";
import logoTwo from "../assets/icons/iconCoin.svg";
import logoThree from "../assets/icons/iconPeople.svg";

export const Service = () => {
  return (
    <section className="community-section">
      <div className="community-container">
        {/* Left Side */}
        <div className="community-text">
          <h2>Join our community learning platform today</h2>
          <p>
            Join our vibrant tech community to connect with like-minded
            individuals, network, and collaborate on projects. Grow your network
            and thrive with fellow tech enthusiasts.
          </p>
          <button className="join-button">Join Now</button>
        </div>

        {/* Right Side */}
        <div className="community-stats">
          <div className="stat-card">
            <div className="stat-icon">
              <img src={logoOne} alt="" />
            </div>
            <h4 className="stat-text">Over 500 Student Trained</h4>
            <p className="stat-para">
              Alumni trained in tech professions across multiple countries.
            </p>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <img src={logoTwo} alt="" />
            </div>
            <h4 className="stat-text">9.3/10 Instructor Rating</h4>
            <p className="stat-para">
              Average rating of our expert instructors
            </p>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <img src={logoThree} alt="" />
            </div>
            <h4 className="stat-text">Expanding Opportunities</h4>
            <p className="stat-para">
              Helping learners build real-world projects and portfolios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
