import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import video from "../assets/hero-video.mp4.mp4";

const eventsData = [
  {
    img: "https://i.pinimg.com/1200x/e0/c7/b6/e0c7b61a6fd1114526f697e96ac1f761.jpg",
    alt: "Birthday Parties",
    tag: "Celebration",
    title: "Birthday Parties",
    date: "June 15-17, 2023",
    description:
      "Join us for unforgettable birthday celebrations featuring custom menus and festive decorations.",
  },
  {
    img: "https://i.pinimg.com/736x/94/c1/85/94c185c59d1f36fee8be8fa2f1161353.jpg",
    alt: "Corporate Events",
    tag: "Business",
    title: "Corporate Events",
    date: "July 22-24, 2023",
    description:
      "Professional catering services for meetings, conferences, and corporate gatherings.",
  },
  {
    img: "https://i.pinimg.com/1200x/03/5f/88/035f88708e05b8c52e8f8fe905604b98.jpg",
    alt: "Holiday Parties",
    tag: "Seasonal",
    title: "Holiday Parties",
    date: "August 5-7, 2023",
    description:
      "Festive holiday celebrations with seasonal menus and joyful ambiance.",
  },
  {
    img: "https://i.pinimg.com/736x/71/b9/25/71b92549943b7a7bffba605985385cd6.jpg",
    alt: "Private Dinners",
    tag: "Exclusive",
    title: "Private Dinners",
    date: "September 10-30, 2023",
    description:
      "Intimate gatherings with personalized menus and premium service.",
  },
];

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section with Video */}
      <section className="home-hero-section">
        <video
          className="hero-video"
          src={video} // replace with your actual video file
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="home-hero-content">
          <h1 className="home-hero-title">Welcome to Delicious Bites</h1>
          <p className="home-hero-subtitle">
            Experience the finest cuisine crafted with love and passion
          </p>
          <Link to="/menu" className="home-hero-button">
            View Our Menu
          </Link>
        </div>
      </section>

      {/* ====== About Section ====== */}
      <section className="about-story">
        <div className="about-story-container">
          <h2 className="about-section-title">Our Story</h2>
          <div className="about-story-grid">
            <div className="about-story-text">
              <p>
                Founded in 2020, Delicious Bites began as a small family
                restaurant with a mission to serve exceptional food that brings
                people together. Now a beloved dining destination, it is known
                for its warm atmosphere and outstanding cuisine, crafted by head
                chef Maria Rodriguez, who has over 15 years of culinary
                experience. By combining traditional techniques with modern
                innovation and sourcing the freshest ingredients from local
                farms, we create dishes that surprise and delight our guests.
              </p>
            </div>
            <div className="about-story-image">
              <img
                src="https://i.pinimg.com/1200x/9e/c2/23/9ec223db73160b49501b6dafcf8df79a.jpg"
                alt="About-us"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====== Specialscocktails  Section ====== */}
      {/* ====== Special Cocktails Section ====== */}
      <section className="cocktails-specials-section">
        <div className="cocktails-section-wrapper">
          <h2 className="cocktails-section-title">Our Special Cocktails</h2>
          <div className="cocktails-grid">
            {/* Card 1 */}
            <div className="cocktails-card">
              <div className="cocktails-card-inner">
                {/* Front */}
                <div className="cocktails-card-front bg-orange">
                  <img
                    src="https://i.pinimg.com/736x/4b/52/4f/4b524f24b476afc360e2c9921c7ebd5e.jpg"
                    alt="Moody Mixologist’s Raspberry Passionfruit Tequila Sour"
                  />
                </div>
                {/* Back */}
                <div className="cocktails-card-back">
                  <h3 className="cocktails-card-title">
                    Moody Mixologist’s Raspberry Passionfruit Tequila Sour
                  </h3>
                  <p className="cocktails-card-description">
                    refreshing cocktail that combines tequila with tart
                    raspberry and passion fruit flavors, creating a delightful
                    sweet and sour balance. Perfect for warm days! Bookmark
                    message Copy message
                  </p>
                  <span className="cocktails-card-price">$18.99</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="cocktails-card">
              <div className="cocktails-card-inner">
                <div className="cocktails-card-front bg-red">
                  <img
                    src="https://i.pinimg.com/1200x/09/e6/f6/09e6f635d91e073216960c278cb9c2d7.jpg"
                    alt="Desert Rose"
                  />
                </div>
                <div className="cocktails-card-back">
                  <h3 className="cocktails-card-title">Desert Rose</h3>
                  <p className="cocktails-card-description">
                    refreshing cocktail made with gin, elderflower liqueur, and
                    citrus, garnished with edible flowers. Perfect for warm
                    days!
                  </p>
                  <span className="cocktails-card-price">$32.99</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="cocktails-card">
              <div className="cocktails-card-inner">
                <div className="cocktails-card-front bg-green">
                  <img
                    src="https://i.pinimg.com/1200x/f0/67/c5/f067c50f7c39014f9943f216cb8aea1b.jpg"
                    alt="Passion Fruit Margarita"
                  />
                </div>
                <div className="cocktails-card-back">
                  <h3 className="cocktails-card-title">
                    Passion Fruit Margarita
                  </h3>
                  <p className="cocktails-card-description">
                    tropical cocktail made with tequila, passion fruit juice,
                    lime juice, and orange liqueur. Refreshing and vibrant!
                  </p>
                  <span className="cocktails-card-price">$14.99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== Specials Section (Curved Images) ====== */}
      <section className="home-specials-section">
        <div className="home-section-wrapper">
          <h2 className="home-section-title">Our Special Dishes</h2>
          <div className="home-dishes-grid">
            {/* Card 1 */}
            <div className="home-dish-card">
              <div className="home-dish-image curved">
                <img
                  src="https://i.pinimg.com/1200x/97/4c/91/974c911212456f8941899ec8f8268ada.jpg"
                  alt="Pasta Primavera"
                />
              </div>
              <div className="home-dish-content">
                <h3 className="home-dish-title">Pasta Primavera</h3>
                <p className="home-dish-description">
                  Fresh vegetables and herbs tossed with perfectly cooked pasta.
                </p>
                <span className="home-dish-price">$18.99</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="home-dish-card">
              <div className="home-dish-image curved">
                <img
                  src="https://i.pinimg.com/1200x/6d/3d/6f/6d3d6f1d14f4953d25e8ae62ab3307d3.jpg"
                  alt="Grilled Ribeye"
                />
              </div>
              <div className="home-dish-content">
                <h3 className="home-dish-title">Grilled Ribeye</h3>
                <p className="home-dish-description">
                  Premium ribeye steak grilled to perfection with seasonal
                  sides.
                </p>
                <span className="home-dish-price">$32.99</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="home-dish-card">
              <div className="home-dish-image curved">
                <img
                  src="https://i.pinimg.com/1200x/58/4f/43/584f430dd54f19fd2a36e1391fcf7507.jpg"
                  alt="Caesar Salad"
                />
              </div>
              <div className="home-dish-content">
                <h3 className="home-dish-title">Caesar Salad</h3>
                <p className="home-dish-description">
                  Crisp romaine lettuce with house-made dressing and croutons.
                </p>
                <span className="home-dish-price">$14.99</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== Specials Desert Section ====== */}
      <section className="desert-specials-section">
        <div className="desert-section-wrapper">
          <h2 className="desert-section-title">Our Special Desert</h2>
          <div className="desert-grid">
            {/* Card 1 */}
            <div className="desert-card">
              <div className="desert-card-image bg-orange">
                <img
                  src="https://i.pinimg.com/1200x/0b/94/bb/0b94bba485465ada9cd6a6adc8843590.jpg"
                  alt="Glossy Pomegranate Mousse Domes"
                />
              </div>

              {/* U-shaped divider */}
              <div className="desert-divider"></div>

              <div className="desert-card-content">
                <h3 className="desert-card-title">
                  Glossy Pomegranate Mousse Domes
                </h3>
                <p className="desert-card-description">
                  Elegant mousse with pomegranate, glaze, and chocolate base.
                </p>
                <span className="desert-card-price">$18.99</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="desert-card">
              <div className="desert-card-image bg-red">
                <img
                  src="https://i.pinimg.com/736x/85/bd/db/85bddba75b4950292c83afb1347ddc11.jpg"
                  alt="Decadent Chocolate Soufflés"
                />
              </div>

              <div className="desert-divider"></div>

              <div className="desert-card-content">
                <h3 className="desert-card-title">
                  Decadent Chocolate Soufflés
                </h3>
                <p className="desert-card-description">
                  A light, airy soufflé bursting with rich chocolate flavor
                </p>
                <span className="desert-card-price">$32.99</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="desert-card">
              <div className="desert-card-image bg-green">
                <img
                  src="https://i.pinimg.com/736x/a7/0d/04/a70d04ac979887c615b1a115eeecb7c4.jpg"
                  alt="Fontainebleau Dessert Garni"
                />
              </div>

              <div className="desert-divider"></div>

              <div className="desert-card-content">
                <h3 className="desert-card-title">
                  Fontainebleau Dessert Garni
                </h3>
                <p className="desert-card-description">
                  A delicate French cream dessert, whipped to airy perfection
                </p>
                <span className="desert-card-price">$14.99</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== Events Section ====== */}
      {/* ====== Events Section ====== */}
      <section className="events-section-unique">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">SPECIAL OCCASIONS</span>
            <h2 className="section-title">Events &amp; Catering Services</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              We create memorable experiences for all types of events, from
              corporate gatherings to private celebrations.
            </p>
          </div>

          {/* Slider wrapper */}
          <div className="events-slider-wrapper-unique">
            {/* Left arrow */}
            <button
              className="slider-arrow-unique left"
              onClick={() => {
                document
                  .querySelector(".events-slider-unique")
                  .scrollBy({ left: -300, behavior: "smooth" });
              }}
            >
              &#10094;
            </button>

            <div className="events-slider-unique">
              <div className="events-track-unique">
                {eventsData.map((event, index) => (
                  <div key={index} className="event-card-unique">
                    <div className="event-image-wrapper-unique">
                      <img
                        src={event.img}
                        alt={event.alt}
                        className="event-image-unique"
                      />
                      <span className="event-tag-unique">{event.tag}</span>
                    </div>
                    <div className="event-content-unique">
                      <div className="event-header-unique">
                        <h3 className="event-title-unique">{event.title}</h3>
                        <span className="event-date-unique">{event.date}</span>
                      </div>
                      <p className="event-description-unique">
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right arrow */}
            <button
              className="slider-arrow-unique right"
              onClick={() => {
                document
                  .querySelector(".events-slider-unique")
                  .scrollBy({ left: 300, behavior: "smooth" });
              }}
            >
              &#10095;
            </button>
          </div>

          <div className="view-all-wrapper-unique">
            <a href="/Events-Catering" className="view-all-btn-unique">
              View All Events
            </a>
          </div>
        </div>
      </section>

      {/* ====== Features Section ====== */}
      <section className="home-features-section">
        <div className="home-section-wrapper">
          <h2 className="homefeature-section-title">Why Choose Us?</h2>
          <div className="home-features-grid">
            <div className="home-feature-card">
              <div className="home-feature-image">
                <img
                  src="https://i.pinimg.com/1200x/4a/f2/05/4af205d49fed2c4c9d8da12e97ba439f.jpg"
                  alt="Expert Chefs"
                />
              </div>
              <div className="home-feature-content">
                <h3 className="home-feature-title">Expert Chefs</h3>
                <p className="home-feature-text">
                  Our experienced chefs create culinary masterpieces using the
                  finest ingredients.
                </p>
              </div>
            </div>

            <div className="home-feature-card">
              <div className="home-feature-image">
                <img
                  src="https://i.pinimg.com/1200x/5d/4e/64/5d4e64d4d83907431934da54df3122d5.jpg"
                  alt="Quality Ingredients"
                />
              </div>
              <div className="home-feature-content">
                <h3 className="home-feature-title">Quality Ingredients</h3>
                <p className="home-feature-text">
                  We source only the freshest, highest-quality ingredients for
                  our dishes.
                </p>
              </div>
            </div>

            <div className="home-feature-card">
              <div className="home-feature-image">
                <img
                  src="https://i.pinimg.com/736x/2f/f0/ea/2ff0eafc067195c090eb38c9898b37da.jpg"
                  alt="Award Winning"
                />
              </div>
              <div className="home-feature-content">
                <h3 className="home-feature-title">Award Winning</h3>
                <p className="home-feature-text">
                  Recognized for excellence in taste, service, and dining
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
