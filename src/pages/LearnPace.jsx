import React from "react";
import { programs } from "../data";
import { Service } from "./Service";
import { Faq } from "./Faq";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const LearnPace = () => {
  return (
    <>
      <>
        <Navbar />
        <section className="about-section">
          <div className="about-container">
            <div className="about-image" />

            <div className="about-content">
              <h1>Learn at your place</h1>
              <p>
                Techlite skills is an online learning platform that offers
                affordable and accessible tech skill training programs designed
                to empower individuals <br /> to thrive in the digital economy.
              </p>
            </div>
          </div>
        </section>

        {/* vision sections */}
        <section className="vision-section">
          <div className="vision-content">
            <div className="vision-image">
              <img src="/header/vision.png" alt="" />
            </div>
            <div className="vision-container2">
              <h1>Our Vision</h1>
              <p>
                Our vision is to create a more inclusive and equitable tech
                industry <br /> by providing accessible training opportunities
                to all. We aspire to cultivate <br /> a community of skilled and
                empowered individuals who can leverage <br /> their knowledge to
                drive innovation, foster economic growth, and <br /> positively
                impact society, regardless of their financial resources
              </p>
            </div>
          </div>
        </section>

        {/* mission section  */}

        <section className="mission-section">
          <div className="mission-content">
            <div className="mission-image">
              <img src="/header/mission.png" alt="" />
            </div>
            <div className="mission-container2">
              <h1>Our Mission</h1>
              <p>
                Our mission is to empower individuals from diverse backgrounds
                with <br /> the essential tech skills they need to thrive in
                today’s digital world, all at <br /> an affordable cost. We are
                committed to breaking down financial <br /> barriers and
                ensuring that everyone has access to quality tech <br />{" "}
                education, regardless of their economic status
              </p>
            </div>
          </div>
        </section>
        {/* board-director section */}
        <div className="board-program-container">
          {/* Board of Directors Section */}
          <section className="board-section">
            <h2>Our Board of directors</h2>
            <div className="director-card">
              <img src="/header/backend.png" alt="Tobi Joseph" />
              <h4>
                <span>TOBI</span> JOSEPH
              </h4>
              <p>Co-founder Techlite</p>
            </div>
          </section>

          {/* Program Section */}
          <section className="program-section">
            <h2>Our Program</h2>
            <p className="program-description">
              Techliteskills Hub offers affordable programs to equip individuals
              with essential tech skills. Our courses cater to all levels, from
              beginners to seasoned professionals, and provide the skills needed
              to succeed in tech.
            </p>
          </section>
        </div>
        {/* workflow  */}
        <div className="program-grid">
          {programs.map((program, index) => (
            <div key={index} className="program-card">
              <div className="program-icon">
                <img src={program.icon} alt="progImg" />
              </div>
              <h3 className="program-card-title">{program.title}</h3>
              <p className="program-card-description">{program.description}</p>
            </div>
          ))}
        </div>
        {/* service section  */}
        <Service />

        {/* faq section */}
        <Faq />

        {/* footer section */}
      </>
    </>
  );
};
