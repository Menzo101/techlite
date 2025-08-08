import React from "react";
import logoImg from "../assets/headicon.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Contactform } from "./Contactform";
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <header className="header-container">
        <img src={logoImg} alt="" />

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
                <li>
                  <NavLink className="new-links">School of Engineering</NavLink>

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
                <li>
                  <NavLink className="new-links">School of Data</NavLink>
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
                <li>
                  <NavLink className="new-links"> School of Designs </NavLink>
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
                <li>
                  <NavLink className="new-links">school of AI</NavLink>
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
                  <NavLink className="new-links" to="/allcourses">
                    All Courses
                  </NavLink>
                </li>
              </ul>
            </li>
            <p className="nana-btn" onClick={toggleMenu}>
              x
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
