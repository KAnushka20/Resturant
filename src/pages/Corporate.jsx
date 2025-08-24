import React from "react";
import "./Corporate.css";

const Corporate = () => {
  return (
    <div className="corporate-page">
      {/* Hero Section */}
      <section className="corporate-hero">
        <div className="corporate-hero-overlay">
          <h1 className="corporate-hero-title">Corporate Events</h1>
          <p className="corporate-hero-subtitle">
            Professional catering for meetings, conferences, and business
            celebrations.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="corporate-about">
        <div className="corporate-container">
          <h2 className="corporate-about-title">Professional Service</h2>
          <p className="corporate-about-text">
            We specialize in creating a seamless corporate dining experience.
            From small board meetings to large conferences, our catering ensures
            your business events are successful.
          </p>
        </div>
      </section>

      {/* Info with Image */}
      <section className="corporate-info">
        <div className="corporate-info-text">
          <h2>Why Choose Us?</h2>
          <p>
            Our menus are designed to impress clients and energize teams. From
            gourmet meals to buffet setups, we tailor everything for your
            corporate goals.
          </p>
        </div>
        <div className="corporate-info-img">
          <img
            src="https://i.pinimg.com/736x/0d/6d/46/0d6d46342d4f2b390df8a3d346e8b09c.jpg"
            alt="Corporate Meeting"
          />
        </div>
      </section>

      {/* Slider Section */}
      <section className="corporate-slider">
        <h2 className="corporate-slider-title">Corporate Highlights</h2>
        <div className="corporate-slider-container">
          <div className="corporate-card">
            <img
              src="https://i.pinimg.com/736x/c7/4b/4f/c74b4f3b48a5ccf2e6f930fa980fa1ab.jpg"
              alt="Buffet"
            />
            <p>Premium Buffet Menus</p>
          </div>
          <div className="corporate-card">
            <img
              src="https://i.pinimg.com/736x/7c/19/2f/7c192f7aa0a875573d60647e78b63094.jpg"
              alt="Conference"
            />
            <p>Conference Catering</p>
          </div>
          <div className="corporate-card">
            <img
              src="https://i.pinimg.com/736x/df/0d/2a/df0d2a1d7eb6f4fc4e3e0640b573e59d.jpg"
              alt="Networking"
            />
            <p>Networking Events</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Corporate;
