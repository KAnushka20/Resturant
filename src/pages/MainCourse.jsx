import React from "react";
import { Link } from "react-router-dom";
import "./MainCourse.css";
import v2 from "../assets/maincourse.mp4";

const mainCourseData = [
  {
    img: "https://i.pinimg.com/736x/c4/55/36/c4553600210e2b4ac159d15a429506e6.jpg",
    title: "Grilled Salmon",
    description: "Fresh salmon fillet with herbs and lemon butter sauce.",
    price: "$15",
  },
  {
    img: "https://i.pinimg.com/736x/64/10/28/6410280ea008a6ca9e706e15cd288860.jpg",
    title: "Ribeye Steak",
    description: "Juicy grilled ribeye with garlic mashed potatoes.",
    price: "$20",
  },
  {
    img: "https://i.pinimg.com/736x/e5/db/8e/e5db8e4b7790e87fe7d45ced7d8930d2.jpg",
    title: "Chicken Parmesan",
    description: "Breaded chicken topped with marinara and mozzarella.",
    price: "$13",
  },
  {
    img: "https://i.pinimg.com/736x/15/0a/3b/150a3b8d0cd84cecf571568e89e13e28.jpg",
    title: "Beef Steak",
    description: "Juicy ribeye steak served with garlic mashed potatoes.",
    price: "$22",
  },
  {
    img: "https://i.pinimg.com/736x/94/ed/51/94ed516e1d1ed82e6a1da3c86ea0877a.jpg",
    title: "Spaghetti Bolognese",
    description: "Classic Italian pasta with rich meat sauce and parmesan.",
    price: "$12",
  },
  {
    img: "https://i.pinimg.com/1200x/58/4f/43/584f430dd54f19fd2a36e1391fcf7507.jpg",
    title: "Grilled Chicken Caesar",
    description:
      "Grilled chicken over romaine with Caesar dressing and croutons.",
    price: "$14",
  },
  {
    img: "https://i.pinimg.com/1200x/4e/24/3c/4e243c6b7f14968852b807be96372d7c.jpg",
    title: "Shrimp Scampi",
    description: "Sautéed shrimp in garlic butter sauce served with pasta.",
    price: "$17",
  },
  {
    img: "https://i.pinimg.com/1200x/6e/7a/a4/6e7aa43edabcbaf366fa26bb2d044d9d.jpg",
    title: "Vegetable Stir-Fry",
    description: "Fresh vegetables sautéed in soy-ginger sauce with rice.",
    price: "$11",
  },
  {
    img: "https://i.pinimg.com/736x/a5/b9/93/a5b993caf43ce38f4fcad9a69d9db510.jpg",
    title: "Lamb Chops",
    description: "Grilled lamb chops served with rosemary and garlic sauce.",
    price: "$24",
  },
  {
    img: "https://i.pinimg.com/736x/18/ef/32/18ef32d09785274a4eaa58b5a3824913.jpg",
    title: "BBQ Ribs",
    description: "Slow-cooked pork ribs glazed with our signature BBQ sauce.",
    price: "$20",
  },
  {
    img: "https://i.pinimg.com/1200x/e0/cb/a9/e0cba96b8766cab04ac1bd920b84c8ba.jpg",
    title: "Seafood Paella",
    description: "Spanish rice dish with shrimp, mussels, and saffron.",
    price: "$19",
  },
  {
    img: "https://i.pinimg.com/1200x/97/d2/90/97d290c2625e1495ce104a7dea7a415a.jpg",
    title: "Stuffed Bell Peppers",
    description:
      "Bell peppers filled with rice, beef, and herbs baked to perfection.",
    price: "$15",
  },
];

const MainCourse = () => {
  return (
    <div className="maincourse-page">
      <section className="maincourse-hero">
        <video
          className="maincourse-video-bg"
          autoPlay
          loop
          muted
          playsInline
          src={v2}
          type="video/mp4"
        />
        <div className="maincourse-hero-content">
          <h1 className="maincourse-title">Delicious Main Courses</h1>
          <p className="maincourse-subtitle">
            Satisfy your hunger with our hearty meals, made fresh daily with
            wholesome ingredients to delight your taste buds and keep you coming
            back for more.
          </p>
        </div>
      </section>

      <section className="maincourse-grid container">
        {mainCourseData.map((item, index) => (
          <div key={index} className="maincourse-card">
            <img src={item.img} alt={item.title} className="maincourse-img" />
            <div className="maincourse-info">
              <h3 className="maincourse-name">{item.title}</h3>
              <p className="maincourse-desc">{item.description}</p>
              <p className="maincourse-price">{item.price}</p>
            </div>
          </div>
        ))}
      </section>

      <div className="maincourse-back">
        <Link to="/menu" className="maincourse-btn">
          ⬅ Back to Menu
        </Link>
      </div>
    </div>
  );
};

export default MainCourse;
