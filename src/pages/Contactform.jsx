import React from "react";
import "./contactform.css";

export const Contactform = () => {
  return (
    <>
      <section className="form-section">
        <div className="form-container">
          <h2>Application Form</h2>
          <p>Fill out the form to receive to get in touch with us</p>
          <form
            action="https://formsubmit.co/techliteskills@gmail.com"
            method="POST"
          >
            <div className="row">
              <input
                type="text"
                placeholder="First Name"
                name="firstname"
                required
              />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="text"
                placeholder="Surname"
                name="lastname"
                required
              />
            </div>
            <div className="row">
              <div className="phone-input">
                <input
                  type="tel"
                  placeholder="Phone number"
                  name="phonenumber"
                  required
                />
              </div>
            </div>
            <div className="row">
              <input type="email" placeholder="Email" name="email" required />
            </div>
            <div className="row">
              <select name="program" required>
                <option value="" selected>
                  What program do you want enquiries on?
                </option>
                <option value="web-dev">Web Development</option>
                <option value="ui-ux">UI/UX Design</option>
                <option value="data">Data Analytics</option>
                <option value="dataScience">Data Science</option>
                <option value="cybersecurity">Cybersecurity</option>
                <option value="graphicsDesign">Graphics Design</option>
                <option value="Ai">Ai&&GenAi</option>
                <option value="frontend">Frontend Development</option>
                <option value="backend">Backend Development</option>
              </select>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
};
