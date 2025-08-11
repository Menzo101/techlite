import React from "react";
import designerImage from "../assets/uiux.png";
import { tabs } from "../data.js";
import { useState } from "react";
import { Companyrecruiter } from "./Companyrecruiter.jsx";
import { Service } from "./Service.jsx";
import { Slider } from "./Slider.jsx";
import { Paymentcomponents } from "./Paymentcomponents.jsx";
import { Contactform } from "./Contactform.jsx";
import { Navbar } from "./Navbar.jsx";
import { NavLink } from "react-router-dom";
export const Designer = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <Navbar />
      <section className="course-section">
        <div className="designer-container">
          <div className="course-content">
            <h2>UI/UX Designer Course</h2>
            <p>
              Master UX/UI design with Techliteskills Hub Learn <br />{" "}
              principles, methodologies, and tools to create intuitive <br />{" "}
              and engaging digital experiences
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
            <img src={designerImage} alt="Developer" className="course-image" />
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
          <h3>{tabs[activeTab].title}</h3>
          <p>{tabs[activeTab].content}</p>
        </div>
      </section>
      <Companyrecruiter />
      <Service />
      <Slider />
      <Paymentcomponents />
      <Contactform />
    </>
  );
};
