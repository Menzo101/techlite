import React from "react";
import { Navbar } from "./Navbar";
import "./allcourses.css";
import { designSchools } from "../data";
import { allProgrammingSchools } from "../data";
import { dataAnalysisSchools } from "../data";
import { productSchool } from "../data";
import { foundationalCourses } from "../data";
import { NavLink, useNavigate } from "react-router-dom";

export const Allcourses = () => {
  return (
    <>
      <Navbar />

      <p className="allcourses-text">
        We have founded <span id="highlightTwo">20 </span>courses for you ..
      </p>
      {/* schools of designs */}
      <section className="designers-courses">
        <h2>School of Design</h2>
        <div className="designers-card">
          {designSchools.map((course) => (
            <div className="designers-card-item" key={course.id}>
              <img src={course.image} alt={course.title} />
              <NavLink id="designLink" to="/contact">
                <h3>{course.title}</h3>
              </NavLink>

              <p>{course.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* programming schools */}
      <section className="programming-courses">
        <h2>School of Programming</h2>
        <div className="programming-card">
          {allProgrammingSchools.map((course) => (
            <div className="programming-card-item" key={course.id}>
              <img src={course.image} alt={course.title} />
              <NavLink id="designLink" to="/contact">
                <h3>{course.title}</h3>
              </NavLink>

              <p>{course.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* schools of Data */}

      <section className="Data-courses">
        <h2>School of Data</h2>
        <div className="Data-card">
          {dataAnalysisSchools.map((course) => (
            <div className="Data-card-item" key={course.id}>
              <img src={course.image} alt={course.title} />
              <NavLink to="/contact" id="designLink">
                <h3>{course.title}</h3>
              </NavLink>

              <p>{course.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* school of management */}
      <section className="management-courses">
        <h2>School of Management</h2>
        <div className="management-card">
          {productSchool.map((course) => (
            <div className="management-card-item" key={course.id}>
              <img src={course.image} alt={course.title} />
              <NavLink to="/contact" id="designLink">
                <h3>{course.title}</h3>
              </NavLink>

              <p>{course.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* school of others */}
      <section className="others-courses">
        <h2>School of others</h2>
        <div className="others-card">
          {foundationalCourses.map((course) => (
            <div className="others-card-item" key={course.id}>
              <img src={course.image} alt={course.title} />
              <NavLink to="/contact" id="designLink">
                <h3>{course.title}</h3>
              </NavLink>

              <p>{course.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
