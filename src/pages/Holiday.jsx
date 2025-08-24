import React from "react";
import "./Holiday.css";

const Holiday = () => {
  return (
    <div className="holiday-page">
      {/* Hero Section */}
      <section className="holiday-hero">
        <div className="holiday-hero-overlay">
          <h1 className="holiday-hero-title">Holiday Parties</h1>
          <p className="holiday-hero-subtitle">
            Festive celebrations with seasonal flavors and joy.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="holiday-about">
        <div className="holiday-container">
          <h2 className="holiday-about-title">Seasonal Magic</h2>
          <p className="holiday-about-text">
            Celebrate Christmas, New Year, and festive holidays with our
            specially curated seasonal menus. We bring warmth, joy, and taste to
            your gatherings.
          </p>
        </div>
      </section>

      {/* Info with Image */}
      <section className="holiday-info">
        <div className="holiday-info-text">
          <h2>Festive Touch</h2>
          <p>
            From cozy dinners to grand holiday feasts, our decorations, menus,
            and service spread festive cheer to everyone.
          </p>
        </div>
        <div className="holiday-info-img">
          <img
            src="https://i.pinimg.com/736x/3b/92/77/3b927781af5f6e3f5b91d7f8d4f79d25.jpg"
            alt="Holiday Dinner"
          />
        </div>
      </section>

      {/* Slider Section */}
      <section className="holiday-slider">
        <h2 className="holiday-slider-title">Holiday Highlights</h2>
        <div className="holiday-slider-container">
          <div className="holiday-card">
            <img
              src="https://i.pinimg.com/736x/52/b2/6d/52b26d9a6a5e7c1af62f785a7f38ddc2.jpg"
              alt="Christmas Dinner"
            />
            <p>Christmas Feast</p>
          </div>
          <div className="holiday-card">
            <img
              src="https://i.pinimg.com/736x/0a/64/3e/0a643e7ffddfa4e00a36d64568b5112e.jpg"
              alt="New Year"
            />
            <p>New Year Celebrations</p>
          </div>
          <div className="holiday-card">
            <img
              src="https://i.pinimg.com/736x/ee/c8/44/eec8440ab8fa4e10b1f3f3c51baf963d.jpg"
              alt="Festive Decor"
            />
            <p>Festive Decor</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Holiday;
