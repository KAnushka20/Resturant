import React from "react";
import "./EventsAndCatering.css";

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

const EventsAndCatering = () => {
  return (
    <div className="events-page">
      {/* Hero Section */}
      <section className="events-hero">
        <div className="events-hero-overlay">
          <h1 className="events-hero-title">Events & Catering</h1>
          <p className="events-hero-subtitle">
            Memorable celebrations crafted with care and flavor
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="events-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">SPECIAL OCCASIONS</span>
            <h2 className="section-title">Our Events & Catering Services</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              From corporate gatherings to private dinners, we bring food and
              experiences that leave lasting memories.
            </p>
          </div>

          <div className="events-grid">
            {eventsData.map((event, index) => (
              <div key={index} className="event-card-wrapper">
                <div className="event-image-card">
                  <img
                    src={event.img}
                    alt={event.alt}
                    className="event-image"
                  />
                  <span className="event-tag">{event.tag}</span>
                </div>
                <div className="event-text-card">
                  <div className="event-header">
                    <h3 className="event-title">{event.title}</h3>
                    <span className="event-date">{event.date}</span>
                  </div>
                  <p className="event-description">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsAndCatering;
