import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-title">Delicious Bites</h3>
            <p className="footer-text">
              Serving the finest cuisine with passion and dedication since 2020.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact Info</h4>
            <div className="footer-contact">
              <p>📍 123 Food Street, City, State 12345</p>
              <p>📞 (555) 123-4567</p>
              <p>✉️ info@deliciousbites.com</p>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Opening Hours</h4>
            <div className="footer-hours">
              <p>Monday - Friday: 11AM - 10PM</p>
              <p>Saturday: 10AM - 11PM</p>
              <p>Sunday: 10AM - 9PM</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Delicious Bites. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
