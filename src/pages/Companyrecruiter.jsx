import React from "react";
import "./companyrecruiter.css";
import Marquee from "react-fast-marquee";
import { allCompanyIcons } from "../data";
export const Companyrecruiter = () => {
  return (
    <>
      <div className="company-container">
        <h1>
          Best company recruit <br /> our alumni
        </h1>

        <div className="company-icons">
          {allCompanyIcons.map((element) => {
            return (
              <div key={element.id} className="everythingall">
                <img src={element.icon} className="my-image" />
              </div>
            );
          })}
        </div>

        <div className="company-icons"></div>
      </div>
    </>
  );
};
