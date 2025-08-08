import React from "react";
import logoImg from "../assets/icons/footerIcon.svg";
import directbox from "../assets/icons/iconsax-directbox-default.svg";
import phoneicons from "../assets/icons/iconsax-call.svg";
import whatsappicons from "../assets/icons/iconsax-whatsapp.svg";
import instagramicons from "../assets/icons/iconsax-instagram.svg";
import twittericons from "../assets/icons/Layer_1.svg";
import facebookicons from "../assets/icons/iconsax-facebook.svg";
import locationicons from "../assets/icons/iconsax-location-tick.svg";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <section className="lastHeading-container">
        <div className="allmy-container">
          <div className="footer-section">
            <div className="footerOne-container">
              <img src={logoImg} alt="" className="footerOne-image" />
              <p className="firstFooter-text">
                Techliteskills Hub is a registered ICT Training company in Lagos
                Nigeria. Over the years, we have trained several students in
                Canada, UK, United States, Nigeria and more.
              </p>
              <div className="firstFooter-icons">
                <img src={instagramicons} alt="" />
                <img src={twittericons} alt="" />
                <img src={facebookicons} alt="" />
              </div>
            </div>
            <div className="footerTwo-container">
              <p id="footer-link">Page Link</p>
              <ul className="footerTwo-links">
                <li className="footer-link">
                  <NavLink to="/" className="footer-link">
                    Home
                  </NavLink>
                </li>
                <li className="footer-link">
                  <NavLink to="/about" className="footer-link">
                    About
                  </NavLink>
                </li>
                <li className="footer-link">
                  <NavLink to="learnAtPace" className="footer-link">
                    learn at your pace
                  </NavLink>
                </li>
                <li className="footer-link">Become a student</li>
              </ul>
            </div>
            <div className="footerThree-container">
              <p id="footer-link">Our Courses</p>
              <ul className="footerTwo-links">
                <li className="footer-link">
                  <NavLink to="/frontend" className="footer-link">
                    Web development
                  </NavLink>
                </li>
                <li className="footer-link">
                  <NavLink to="/designer" className="footer-link">
                    UI/UX design
                  </NavLink>
                </li>
                <li className="footer-link">
                  <NavLink to="/cybersecurity" className="footer-link">
                    Cyber security
                  </NavLink>
                </li>
                <li className="footer-link">
                  <NavLink to="/dataanalysis" className="footer-link">
                    Data analysis
                  </NavLink>
                </li>
                <li className="footer-link">
                  <NavLink to="/datascience" className="footer-link">
                    Data science
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="footerFour-container">
              <p id="footer-link">Contact info</p>
              <ul className="footerTwo-links">
                <li className="footer-flex">
                  <img src={phoneicons} />
                  {/* <div className="footer-link">home</div> */}
                  <div className="footer-link">+2340103044943</div>
                </li>
                <li className="footer-flex">
                  <img src={whatsappicons} alt="" className="footer-image" />
                  <div className="footer-link">+2348058295710</div>
                </li>
                <li className="footer-flex">
                  <img src={directbox} alt="" className="footer-image" />
                  <div className="footer-link">techliteskills@gmail.com</div>
                </li>

                <li className="footer-flex">
                  <img src={locationicons} alt="" />
                  <div className="footer-link">
                    Block 7A, plot 4, hilltop estate, Alimosho, Aboru 100001,
                    Lagos, Nigeria
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <p id="textme">Copyright 2025 Techliteskills. All Right Reserved.</p>
        </div>
      </section>
    </>
  );
};
