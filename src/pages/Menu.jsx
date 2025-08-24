import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  const menuCategories = [
    {
      name: "Appetizers",
      image:
        "https://i.pinimg.com/1200x/d8/3d/80/d83d8074cfa8c86d815e6a0641b70bc2.jpg",
      items: [
        {
          name: "Bruschetta",
          description: "Toasted bread with tomatoes, basil, and garlic",
          price: "$8.99",
        },
        {
          name: "Calamari Rings",
          description: "Crispy fried squid with marinara sauce",
          price: "$12.99",
        },
        {
          name: "Stuffed Mushrooms",
          description: "Button mushrooms filled with herbs and cheese",
          price: "$10.99",
        },
        {
          name: "Mozzarella Sticks",
          description: "Fried mozzarella cheese served with marinara sauce",
          price: "$7.49",
        },
      ],
      path: "/appetizers",
    },
    {
      name: "Main Dishes",
      image:
        "https://i.pinimg.com/1200x/b1/80/b9/b180b9b85cfefd2172a32bdff2065b4c.jpg",
      items: [
        {
          name: "Grilled Salmon",
          description: "Atlantic salmon with lemon butter sauce",
          price: "$24.99",
        },
        {
          name: "Chicken Parmesan",
          description: "Breaded chicken breast with marinara and mozzarella",
          price: "$19.99",
        },
        {
          name: "Beef Tenderloin",
          description: "8oz tenderloin with garlic mashed potatoes",
          price: "$34.99",
        },
        {
          name: "Vegetarian Lasagna",
          description: "Layers of pasta with vegetables and three cheeses",
          price: "$17.99",
        },
      ],
      path: "/maincourse",
    },
    {
      name: "Desserts",
      image:
        "https://i.pinimg.com/1200x/3d/e7/ca/3de7ca2f1316ed2feefe000d6b8228bf.jpg",
      items: [
        {
          name: "Tiramisu",
          description: "Classic Italian dessert with coffee and mascarpone",
          price: "$7.99",
        },
        {
          name: "Chocolate Lava Cake",
          description: "Warm chocolate cake with molten center",
          price: "$8.99",
        },
        {
          name: "Cheesecake",
          description: "New York style cheesecake with berry compote",
          price: "$6.99",
        },
        {
          name: "Ice Cream Sundae",
          description: "Vanilla ice cream with chocolate syrup",
          price: "$4.99",
        },
      ],
      path: "/desserts",
    },
  ];

  return (
    <div className="menu-wrapper">
      <h1 className="menu-title">Our Menu</h1>

      {menuCategories.map((category, index) => (
        <div
          key={index}
          className={`menu-category ${
            index % 2 === 0 ? "image-left" : "image-right"
          }`}
        >
          {/* category image */}
          <div className="category-image">
            <img src={category.image} alt={category.name} />
          </div>

          {/* dish list */}
          <div className="category-details">
            <h2 className="category-heading">{category.name}</h2>
            <ul className="dish-list">
              {category.items.map((item, i) => (
                <li key={i} className="dish-item">
                  <div className="dish-name">{item.name}</div>
                  <div className="dish-price">{item.price}</div>
                  <p className="dish-desc">{item.description}</p>
                </li>
              ))}
            </ul>
            <Link to={category.path} className="view-all-btn">
              View All
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
