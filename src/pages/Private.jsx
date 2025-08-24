import React from "react";
import "./Private.css";

const Private = () => {
  return (
    <div className="private-page">
      {/* Hero Section */}
      <section className="private-hero">
        <div className="private-hero-overlay">
          <h1 className="private-hero-title">Private Dinners</h1>
          <p className="private-hero-subtitle">
            Intimate gatherings with personalized menus and premium service.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="private-about">
        <div className="private-container">
          <h2 className="private-about-title">Exquisite Private Dining</h2>
          <p className="private-about-text">
            We provide a luxurious dining experience for intimate gatherings,
            anniversaries, and special dinners. Enjoy chef-crafted menus in a
            serene atmosphere.
          </p>
        </div>
      </section>

      {/* Info with Image */}
      <section className="private-info">
        <div className="private-info-text">
          <h2>Exclusive & Personal</h2>
          <p>
            Our team designs every private dinner with a touch of elegance and
            exclusivity. From menu design to service style, everything is
            tailored to your preference.
          </p>
        </div>
        <div className="private-info-img">
          <img
            src="https://i.pinimg.com/736x/55/87/9c/55879c6ea0577a42f043f8b8047dbf68.jpg"
            alt="Private Dinner"
          />
        </div>
      </section>

      {/* Slider Section */}
      <section className="private-slider">
        <h2 className="private-slider-title">Private Dining Highlights</h2>
        <div className="private-slider-container">
          <div className="private-card">
            <img
              src="https://i.pinimg.com/736x/f1/84/49/f18449f7c8c8c7ff4866f8e1b8123b64.jpg"
              alt="Luxury Dining"
            />
            <p>Luxury Ambiance</p>
          </div>
          <div className="private-card">
            <img
              src="https://i.pinimg.com/736x/c9/92/f4/c992f4faae225bb5c93c9bd7b34e3e71.jpg"
              alt="Wine Pairing"
            />
            <p>Exclusive Wine Pairing</p>
          </div>
          <div className="private-card">
            <img
              src="https://i.pinimg.com/736x/02/f9/14/02f91424cf24f7c9a021f22b5e37b0ec.jpg"
              alt="Personal Chef"
            />
            <p>Personal Chef Service</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Private;
