import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-wrapper">
      {/* Header Section */}
      <section className="about-header">
        <div className="about-header-content">
          <h1 className="about-title">About Us</h1>
          <p className="about-subtitle">
            Learn about our story and passion for great food
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="about-story-container">
          <h2 className="about-section-title">Our Story</h2>
          <div className="about-story-grid">
            <div className="about-story-text">
              <p>
                Delicious Bites was founded in 2020 with a simple mission: to
                serve exceptional food that brings people together. What started
                as a small family restaurant has grown into a beloved dining
                destination known for its warm atmosphere and outstanding
                cuisine.
              </p>
              <p>
                Our head chef, Maria Rodriguez, brings over 15 years of culinary
                experience from top restaurants around the world. She combines
                traditional cooking techniques with modern innovation to create
                dishes that surprise and delight our guests.
              </p>
              <p>
                We believe that great food starts with great ingredients. That's
                why we partner with local farms and suppliers to ensure every
                dish is made with the freshest, highest-quality ingredients
                available.
              </p>
            </div>
            <div className="about-story-image">
              <span role="img" aria-label="plate" className="about-icon">
                🍽️
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="promise-section">
        <div className="promise-container">
          {/* Text Content */}
          <div className="promise-text">
            <h3 className="promise-title">Our Promise</h3>
            <ul className="promise-list">
              <li>Fresh, high-quality ingredients sourced with care</li>
              <li>Warm, welcoming service for every guest</li>
              <li>Innovative dishes that respect tradition</li>
              <li>A vibrant, inclusive atmosphere for all</li>
            </ul>
          </div>

          {/* Image */}
          <div className="promise-image-wrapper">
            <img
              src="https://i.pinimg.com/1200x/d7/d4/2a/d7d42ad9f6f3b1a15dd5b87b4a8a166a.jpg"
              alt="Interior view of Red Onion NYC restaurant"
              className="promise-image"
              loading="lazy"
              width="420"
              height="320"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <div className="about-team-container">
          <h2 className="about-section-title">Meet Our Team</h2>
          <div className="about-team-grid">
            {[
              {
                emoji: "👩‍🍳",
                name: "Maria Rodriguez",
                role: "Head Chef",
                desc: "15+ years of culinary experience specializing in Mediterranean and fusion cuisine.",
              },
              {
                emoji: "👨‍💼",
                name: "James Wilson",
                role: "Restaurant Manager",
                desc: "Passionate about hospitality with 10 years of experience in fine dining service.",
              },
              {
                emoji: "👩‍🍳",
                name: "Sarah Chen",
                role: "Pastry Chef",
                desc: "Award-winning pastry chef known for creative desserts and artisanal breads.",
              },
            ].map((member, index) => (
              <div className="about-team-card" key={index}>
                <div className="about-avatar">
                  <span role="img" aria-label="team" className="about-icon">
                    {member.emoji}
                  </span>
                </div>
                <h3 className="about-name">{member.name}</h3>
                <p className="about-role">{member.role}</p>
                <p className="about-description">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="about-values-container">
          <h2 className="about-section-title">Our Values</h2>
          <div className="about-values-grid">
            {[
              {
                emoji: "🌱",
                title: "Sustainability",
                desc: "We're committed to sustainable practices and supporting local farmers.",
              },
              {
                emoji: "❤️",
                title: "Passion",
                desc: "Every dish is prepared with love and attention to detail.",
              },
              {
                emoji: "🤝",
                title: "Community",
                desc: "We believe in building strong connections with our community.",
              },
              {
                emoji: "⭐",
                title: "Excellence",
                desc: "We strive for excellence in everything we do, from food to service.",
              },
            ].map((value, index) => (
              <div className="about-value-card" key={index}>
                <div className="about-value-icon">{value.emoji}</div>
                <h3 className="about-value-title">{value.title}</h3>
                <p className="about-value-desc">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
