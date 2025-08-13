import React from "react";
import logoImg from "../assets/headicon.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Contactform } from "./Contactform";
import { MdKeyboardArrowRight } from "react-icons/md";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <header className="header-container">
        <NavLink to="/" className="logo">
          <img src={logoImg} alt="" />
        </NavLink>

        {/* second nav */}
        <div className={`menu-container ${menuOpen ? "active" : ""}`}>
          <ul className="menu">
            <NavLink className="top-menu" to="/">
              Home
            </NavLink>
            <NavLink className="top-menu" to="/about">
              About
            </NavLink>
            <li className="top-menu">
              Courses
              <ul className="dropdown">
                <li className="flex">
                  <NavLink className="new-links" to="/frontend">
                    School of Engineering
                  </NavLink>
                  <MdKeyboardArrowRight id="arrow" />

                  <ul className="dropdown">
                    <li>
                      <NavLink className="new-links" to="/frontend">
                        Frontend Technologies
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="new-links" to="/backend">
                        Backend Technologies
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="new-links" to="/cybersecurity">
                        Cybersecurity
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="flex">
                  <NavLink className="new-links" to="/datascience">
                    School of Data
                  </NavLink>

                  <MdKeyboardArrowRight id="arrow" />
                  <ul className="dropdown">
                    <li>
                      <NavLink className="new-links" to="/datascience">
                        Data Science
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="new-links" to="/dataanalysis">
                        Data Analysis
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="flex">
                  <NavLink className="new-links" to="/allcourses">
                    {" "}
                    School of Designs{" "}
                  </NavLink>

                  <MdKeyboardArrowRight id="arrow" />
                  <ul className="dropdown">
                    <li>
                      <NavLink className="new-links">Graphics Designs</NavLink>
                    </li>
                    <li>
                      <NavLink className="new-links" to="/designer">
                        Ui/Ux designs
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="flex">
                  <NavLink className="new-links" to="/backend">
                    school of AI
                  </NavLink>
                  <MdKeyboardArrowRight id="arrow" />

                  <ul className="dropdown">
                    <li>
                      <NavLink className="new-links">Coding with AI</NavLink>
                    </li>
                    <li>
                      <NavLink className="new-links">ChatGpt& GenAi</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink className="new-links" id="child" to="/allcourses">
                    All Courses
                  </NavLink>
                </li>
              </ul>
            </li>
            <p className="nana-btn" onClick={toggleMenu}>
              x cancel
            </p>
          </ul>
        </div>
        <div className="head-btn">
          {/* <button to="/contact">Apply now</button> */}
          <button onClick={() => navigate("/contact")}>Apply now</button>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
      </header>
    </>
  );
};
