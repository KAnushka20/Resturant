import React from "react";
import { Link } from "react-router-dom";
import "./Appetizers.css";
import v1 from "../assets/appetizers.mp4.mp4";
const appetizersData = [
  {
    img: "https://i.pinimg.com/1200x/d8/3d/80/d83d8074cfa8c86d815e6a0641b70bc2.jpg",
    title: "Bruschetta",
    description: "Grilled bread topped with tomatoes, garlic, and basil.",
    price: "$6",
  },
  {
    img: "https://i.pinimg.com/1200x/c1/8f/ae/c18faecf99723fa3358bbe8758655b52.jpg",
    title: "Spring Rolls",
    description: "Crispy rolls stuffed with fresh vegetables.",
    price: "$5",
  },
  {
    img: "https://i.pinimg.com/736x/35/ff/1f/35ff1fef0bab6b11ff6b7a447b7327c3.jpg",
    title: "Stuffed Mushrooms",
    description: "Mushrooms filled with cheese and herbs.",
    price: "$7",
  },
  {
    img: "https://i.pinimg.com/736x/58/5b/b7/585bb77bcceae48e050e6184395334bf.jpg",
    title: "Garlic Bread",
    description: "Crispy bread infused with garlic butter and herbs.",
    price: "$5",
  },
  {
    img: "https://i.pinimg.com/736x/15/33/60/1533606cd3fbf6e70e5e08b5b10eb22e.jpg",
    title: "Mozzarella Sticks",
    description: "Golden-fried mozzarella served with marinara sauce.",
    price: "$7",
  },
  {
    img: "https://i.pinimg.com/736x/2b/84/f0/2b84f09a4b454176d0b0b369aacd9c52.jpg",
    title: "Chicken Wings",
    description: "Spicy buffalo chicken wings with ranch dip.",
    price: "$10",
  },
  {
    img: "https://i.pinimg.com/1200x/c5/ad/fa/c5adfa5bd5d3b1c0b24d368db15dc7c0.jpg",
    title: "Caprese Skewers",
    description:
      "Cherry tomatoes, mozzarella, and basil drizzled with balsamic glaze.",
    price: "$9",
  },

  {
    img: "https://i.pinimg.com/736x/48/06/88/480688ea03cd98f6cdc1422448d862d5.jpg",
    title: "Shrimp Cocktail",
    description: "Chilled shrimp served with tangy cocktail sauce.",
    price: "$12",
  },
  {
    img: "https://i.pinimg.com/1200x/49/8b/d8/498bd806ba69e2c8bed5234519c01ddc.jpg",
    title: "Onion Rings",
    description: "Crispy fried onion rings with spicy mayo dip.",
    price: "$6",
  },
  {
    img: "https://i.pinimg.com/736x/6b/7b/0f/6b7b0fb615108514b56b58f6a33e22e3.jpg",
    title: "Nachos",
    description: "Tortilla chips loaded with cheese, jalapeños, and salsa.",
    price: "$9",
  },
];

const Appetizers = () => {
  return (
    <div className="appetizers-page">
      <section className="appetizers-hero">
        {/* Background Video */}
        <video
          className="appetizers-video-bg"
          src={v1} // <-- put your video file here
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Overlay for readability */}
        <div className="appetizers-overlay"></div>

        {/* Hero Content */}
        <div className="appetizers-content">
          <h1 className="appetizers-title">Tasty Appetizers</h1>
          <p className="appetizers-subtitle">
            Start your meal with these delicious bites, crafted to awaken your
            taste buds and set the perfect tone for the courses ahead.
          </p>
        </div>
      </section>

      <section className="appetizers-grid container">
        {appetizersData.map((item, index) => (
          <div key={index} className="appetizers-card">
            <img src={item.img} alt={item.title} className="appetizers-img" />
            <div className="appetizers-info">
              <h3 className="appetizers-name">{item.title}</h3>
              <p className="appetizers-desc">{item.description}</p>
              <p className="appetizers-price">{item.price}</p>
            </div>
          </div>
        ))}
      </section>

      <div className="appetizers-back">
        <Link to="/menu" className="appetizers-btn">
          ⬅ Back to Menu
        </Link>
      </div>
    </div>
  );
};

export default Appetizers;
