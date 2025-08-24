import React from "react";
import { Link } from "react-router-dom";
import "./Desserts.css";
import v3 from "../assets/dessert.mp4";

const dessertsData = [
  {
    img: "https://i.pinimg.com/736x/dc/4a/d2/dc4ad2c665b89e56cdecdc66015eb03e.jpg",
    title: "Classic Cheesecake",
    description: "Creamy New York cheesecake with a graham cracker crust.",
    price: "$8",
  },
  {
    img: "https://i.pinimg.com/1200x/0c/e1/4e/0ce14e1ef631166a411c20a62f32618f.jpg",
    title: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a gooey molten center.",
    price: "$9",
  },
  {
    img: "https://i.pinimg.com/1200x/51/8a/ee/518aeeae96e41df39b5274c40aa63619.jpg",
    title: "Tiramisu",
    description: "Coffee-soaked ladyfingers layered with mascarpone cream.",
    price: "$7",
  },
  {
    img: "https://i.pinimg.com/1200x/00/66/05/00660552ebd48f82519c68f21eb26e65.jpg",
    title: "Macarons",
    description: "Colorful French almond meringue cookies with creamy filling.",
    price: "$5",
  },
  {
    img: "https://i.pinimg.com/736x/5d/04/42/5d04424fbb7f6f2ea305bb80af630d54.jpg",
    title: "Crème Brûlée",
    description: "Rich custard topped with a layer of caramelized sugar.",
    price: "$8",
  },
  {
    img: "https://i.pinimg.com/1200x/75/88/d2/7588d23cecf88e0652ec3d09748fdc00.jpg",
    title: "Fruit Tart",
    description:
      "Crispy pastry filled with cream and topped with fresh fruits.",
    price: "$7",
  },
  {
    img: "https://i.pinimg.com/736x/4e/77/75/4e7775d548b5954bafe04b7c5ef8e190.jpg",
    title: "Chocolate Mousse",
    description: "Light and airy chocolate mousse with whipped cream topping.",
    price: "$6",
  },
  {
    img: "https://i.pinimg.com/736x/67/e8/d8/67e8d8bb0beb93be4b051388f008e178.jpg",
    title: "Baklava",
    description:
      "Layers of filo pastry filled with nuts and drizzled with honey.",
    price: "$5",
  },
  {
    img: "https://i.pinimg.com/1200x/14/88/6e/14886eddf4a408e8867fb3971629e969.jpg",
    title: "Panna Cotta",
    description:
      "Smooth Italian dessert made with sweetened cream and gelatin.",
    price: "$7",
  },
  {
    img: "https://i.pinimg.com/1200x/b2/2c/25/b22c2539c30e31e607def95f969446af.jpg",
    title: "Brownie Sundae",
    description:
      "Fudgy brownie topped with ice cream, chocolate sauce, and nuts.",
    price: "$6",
  },
  {
    img: "https://i.pinimg.com/736x/2b/bd/8d/2bbd8ddef0efd324f26cadb9b0f4c17d.jpg",
    title: "Coconut Cream Pie",
    description:
      "Creamy coconut filling in a flaky pie crust topped with whipped cream.",
    price: "$7",
  },
];

const Desserts = () => {
  return (
    <div className="desserts-page">
      <section className="desserts-hero">
        <video
          className="desserts-video-bg"
          autoPlay
          loop
          muted
          playsInline
          src={v3}
          type="video/mp4"
        />
        <div className="desserts-hero-content">
          <h1 className="desserts-title">Sweet Desserts</h1>
          <p className="desserts-subtitle">
            Treat yourself with our delightful desserts, crafted with the finest
            ingredients and bursting with flavors that will make every bite a
            sweet moment to savor.
          </p>
        </div>
      </section>

      <section className="desserts-grid container">
        {dessertsData.map((item, index) => (
          <div key={index} className="desserts-card">
            <img src={item.img} alt={item.title} className="desserts-img" />
            <div className="desserts-info">
              <h3 className="desserts-name">{item.title}</h3>
              <p className="desserts-desc">{item.description}</p>
              <p className="desserts-price">{item.price}</p>
            </div>
          </div>
        ))}
      </section>

      <div className="desserts-back">
        <Link to="/menu" className="desserts-btn">
          ⬅ Back to Menu
        </Link>
      </div>
    </div>
  );
};

export default Desserts;
