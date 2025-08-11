import React, { useState } from "react";
import { tabs } from "../data.js";
import dataAnalysisImage from "../assets/dataanalysis.png";
import { Slider } from "./Slider.jsx";
import { Companyrecruiter } from "./Companyrecruiter.jsx";
import { Service } from "./Service.jsx";
import { Paymentcomponents } from "./Paymentcomponents.jsx";
import { Contactform } from "./Contactform.jsx";
import { Navbar } from "./Navbar.jsx";
import { NavLink } from "react-router-dom";

export const Dataanalysis = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <Navbar />
      <section className="course-section">
        <div className="everything-container">
          <div className="course-content">
            <h2>Data Analysis Course</h2>
            <p>
              Techliteskills Hub's Cybersecurity course equips learners <br />{" "}
              with essential skills to protect systems, networks, and data{" "}
              <br /> from cyber threats. Gain comprehensive knowledge and <br />
              prepare for a career in this in-demandfield.
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
            <img
              src={dataAnalysisImage}
              alt="Developer"
              className="course-image"
            />
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
