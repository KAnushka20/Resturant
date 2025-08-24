import React from "react";
import "./Birthday.css";

const Birthday = () => {
  return (
    <div className="birthday-page">
      {/* Hero Section */}
      <section className="birthday-hero">
        <div className="birthday-hero-overlay">
          <h1 className="birthday-hero-title">Birthday Parties</h1>
          <p className="birthday-hero-subtitle">
            Celebrate your special day with joy, food, and unforgettable
            memories.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="birthday-about">
        <div className="birthday-container">
          <h2 className="birthday-about-title">Make Your Day Truly Special</h2>
          <p className="birthday-about-text">
            Our birthday catering service provides customized menus, delightful
            decorations, and an unforgettable experience. Whether it’s a kid’s
            party, a milestone celebration, or a surprise gathering, we make it
            extraordinary.
          </p>
        </div>
      </section>

      {/* Info with Image */}
      <section className="birthday-info">
        <div className="birthday-info-text">
          <h2>Tailored Just for You</h2>
          <p>
            From delicious cakes to live food stations, our birthday parties
            feature everything you love. Our team ensures every detail matches
            your style and preferences.
          </p>
        </div>
        <div className="birthday-info-img">
          <img
            src="https://i.pinimg.com/736x/4c/8c/27/4c8c277f2a20c8b2c31a4ef2c3b0831a.jpg"
            alt="Birthday Celebration"
          />
        </div>
      </section>

      {/* Slider Section */}
      <section className="birthday-slider">
        <h2 className="birthday-slider-title">Birthday Highlights</h2>
        <div className="birthday-slider-container">
          <div className="birthday-card">
            <img
              src="https://i.pinimg.com/736x/09/43/2e/09432e8c08f39e8f639aa7f0bdbdb4c2.jpg"
              alt="Cake"
            />
            <p>Delicious Custom Cakes</p>
          </div>
          <div className="birthday-card">
            <img
              src="https://i.pinimg.com/736x/f6/c6/76/f6c676f4a1d8b6c1587e7dc57d048aba.jpg"
              alt="Decor"
            />
            <p>Beautiful Decorations</p>
          </div>
          <div className="birthday-card">
            <img
              src="https://i.pinimg.com/736x/5f/1d/fc/5f1dfc8a58d0db16e7d659ef26a13a9a.jpg"
              alt="Entertainment"
            />
            <p>Fun & Entertainment</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Birthday;
