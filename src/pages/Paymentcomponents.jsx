import React from "react";
import { FaCreditCard, FaWallet, FaUniversity } from "react-icons/fa";
import "./payment.css";
export const Paymentcomponents = () => {
  return (
    <>
      <section className="payment-section">
        <div className="container">
          <h2>Our Payment Options</h2>
          <p className="subtitle">
            Flexible payment options at Techliteskills Hub. Affordable plans to
            fit your needs, making quality tech education accessible to
            everyone.
          </p>

          <div className="payment-options">
            <div className="card">
              <FaCreditCard className="icon" />
              <h3>One time payment:</h3>
              <p>
                One-time payment, unlimited access. No recurring fees or payment
                deadlines to worry about.
              </p>
            </div>
            <div className="card">
              <FaWallet className="icon" />
              <h3>Installments Payments</h3>
              <p>
                Pay in installments without any additional fees or interest
                charges.
              </p>
            </div>
            <div className="card">
              <FaUniversity className="icon" />
              <h3>Accessibility:</h3>
              <p>
                Open doors to high-quality tech education without the burden of
                upfront costs.
              </p>
            </div>
          </div>

          <p className="bottom-text">
            Start your tech journey with Techliteskills Hub’s flexible payment
            options. Contact our admissions team for assistance and let's take
            the first step together!
          </p>
        </div>
      </section>
    </>
  );
};
