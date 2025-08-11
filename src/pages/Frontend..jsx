import React, { useState } from "react";
import "./frontend.css";
import { NavLink } from "react-router-dom";
import { tabs } from "../data.js";
import { Companyrecruiter } from "./Companyrecruiter.jsx";
import { Slider } from "./Slider.jsx";
import { Service } from "./Service.jsx";

import frontendImage from "../assets/frontend.png";
import { Paymentcomponents } from "./Paymentcomponents.jsx";
import { Contactform } from "./Contactform.jsx";
import { Navbar } from "./Navbar.jsx";

export const Frontend = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <Navbar />
      <section className="course-section">
        <div className="frontend-container">
          <div className="course-content">
            <h2>
              Front-end Web <br /> Development Course
            </h2>
            <p>
              Unlock your web development potential with TechEliteskills Hub.{" "}
              <br />
              Our comprehensive course covers foundational <br /> concepts to
              advanced techniques, with hands-on training <br /> and real-world
              projects. Build dynamic websites and apps, <br /> and launch or
              advance your career.
            </p>
            <NavLink to="/contact">
              <button className="advisor-btn">Speak to advisor</button>
            </NavLink>

            <ul className="course-features">
              <li>4 Months</li>
              <li>6 hours/week</li>
              <li>Online</li>
              <li>Morning and Evening</li>
              <li>Professional support</li>
              <li>International certifications</li>
            </ul>
          </div>
          <div className="course-image-container">
            <img src={frontendImage} alt="Developer" className="course-image" />
            <div className="students-count">120,000</div>
          </div>
        </div>
      </section>

      <section className="details-section">
        <div className="details-menu">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`details-button ${
                activeTab === index ? "active" : ""
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="details-content">
          <h3 className="details-heading">{tabs[activeTab].title}</h3>
          <p>{tabs[activeTab].content}</p>
        </div>
      </section>
      <section>
        <Companyrecruiter />
      </section>
      <Service />
      <section>
        <Slider />
      </section>
      <Paymentcomponents />
      <Contactform />
    </>
  );
};
