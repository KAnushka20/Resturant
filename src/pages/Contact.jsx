import React from "react";
import Navbar from "../components/Navbar"; // ✅ adjust path if needed
import "./Contact.css";

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>We’d love to hear from you! Reach out anytime.</p>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="contact-section">
        <div className="contact-text">
          <h2>Have a question?</h2>
          <p>Get in touch with us today.</p>
          <ul>
            <li>📍 123 Food Street, Flavor Town</li>
            <li>📞 (123) 456-7890</li>
            <li>✉️ info@deliciousbites.com</li>
          </ul>
        </div>
        <div className="contact-image">
          <img src="/assets/food1.gif" alt="Delicious Food" />
        </div>
      </section>

      {/* Catering Request Section */}
      <section className="contact-section alt">
        <div className="contact-image">
          <img src="/assets/food2.gif" alt="Catering Food" />
        </div>
        <div className="contact-text">
          <h2>Catering Request</h2>
          <p>We’re ready to help you make your event special!</p>
          <ul>
            <li>📍 456 Event Avenue, Party City</li>
            <li>📞 (987) 654-3210</li>
            <li>✉️ catering@deliciousbites.com</li>
          </ul>
        </div>
      </section>

      {/* Address Section */}
      <section className="contact-address">
        <h2>Our Locations</h2>
        <p>Visit us at multiple locations across the city.</p>
        <ul>
          <li>🍴 Downtown Branch: 789 Main Street</li>
          <li>🍴 Uptown Branch: 101 North Avenue</li>
          <li>🍴 Riverside Branch: 202 River Road</li>
        </ul>
      </section>
    </>
  );
};

export default Contact;
