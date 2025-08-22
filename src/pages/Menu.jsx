import React, { useState } from "react";
import "./Menu.css";

const Menu = () => {
  const [popupItem, setPopupItem] = useState(null);
  const [quantities, setQuantities] = useState({});

  const menuCategories = [
    {
      name: "Appetizers",
      items: [
        {
          name: "Bruschetta",
          description: "Toasted bread with tomatoes, basil, and garlic",
          price: "$8.99",
          offer: "Buy 1 Get 1 Free",
          image:
            "https://i.pinimg.com/1200x/d8/3d/80/d83d8074cfa8c86d815e6a0641b70bc2.jpg",
        },
        {
          name: "Calamari Rings",
          description: "Crispy fried squid with marinara sauce",
          price: "$12.99",
          image:
            "https://i.pinimg.com/736x/b8/9b/b0/b89bb0964b80558783cfcf8b5d6ef494.jpg",
        },
        {
          name: "Stuffed Mushrooms",
          description: "Button mushrooms filled with herbs and cheese",
          price: "$10.99",
          image:
            "https://i.pinimg.com/736x/7e/dd/3c/7edd3c86a6222d312dadbf536237174f.jpg",
        },

        {
          name: "Mozzarella Sticks",
          description: "Fried mozzarella cheese served with marinara sauce",
          price: "$7.49",
          image:
            "https://i.pinimg.com/736x/15/33/60/1533606cd3fbf6e70e5e08b5b10eb22e.jpg",
        },

        {
          name: "Spinach Artichoke Dip",
          description: "Creamy spinach and artichoke dip with tortilla chips",
          price: "$8.75",
          image:
            "https://i.pinimg.com/736x/04/6a/a5/046aa59ebfaddd1aee82637a1cf910be.jpg",
        },
        {
          name: "Garlic Parmesan Wings",
          description: "Crispy chicken wings tossed in garlic and parmesan",
          price: "$10.50",
          image:
            "https://i.pinimg.com/1200x/30/75/07/307507675db8766a056da445107ecf29.jpg",
        },
        {
          name: "Shrimp Cocktail",
          description: "Chilled shrimp with tangy cocktail sauce",
          price: "$11.99",
          image:
            "https://i.pinimg.com/1200x/7d/8c/86/7d8c86c42a2aafcdc2f474ed078f7372.jpg",
        },
        {
          name: "Mini Spring Rolls",
          description:
            "Crispy rolls stuffed with vegetables and served with sweet chili sauce",
          price: "$6.99",
          image:
            "https://i.pinimg.com/1200x/aa/f2/52/aaf25289d705cafc858ed440d62a23d6.jpg",
        },
        {
          name: "Caprese Skewers",
          description:
            "Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze",
          price: "$7.95",
          image:
            "https://i.pinimg.com/736x/c5/ad/fa/c5adfa5bd5d3b1c0b24d368db15dc7c0.jpg",
        },
        {
          name: "Loaded Potato Skins",
          description:
            "Potato halves topped with cheese, bacon, and sour cream",
          price: "$8.50",
          image:
            "https://i.pinimg.com/1200x/28/38/b3/2838b3115505556f38776cd587323d4a.jpg",
        },
        {
          name: "Chicken Satay",
          description: "Grilled chicken skewers served with peanut sauce",
          price: "$9.99",
          image:
            "https://i.pinimg.com/1200x/ef/55/f6/ef55f6a65b36c2f8c20a4fc571657820.jpg",
        },
        {
          name: "Caprese Skewers",
          description:
            "Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze",
          price: "$7.95",
          image:
            "https://i.pinimg.com/1200x/c5/ad/fa/c5adfa5bd5d3b1c0b24d368db15dc7c0.jpg",
        },

        {
          name: "Crispy Onion Rings",
          description: "Golden fried onion rings with zesty dipping sauce",
          price: "$6.49",
          image:
            "https://i.pinimg.com/736x/49/8b/d8/498bd806ba69e2c8bed5234519c01ddc.jpg",
        },
        {
          name: "BBQ Meatballs",
          description: "Juicy meatballs glazed with smoky BBQ sauce",
          price: "$8.25",
          image:
            "https://i.pinimg.com/736x/e8/5e/19/e85e1987023782ad23767b7ecd4c4572.jpg",
        },
        {
          name: "Fried Calamari",
          description: "Lightly battered squid rings served with marinara",
          price: "$12.50",
          image:
            "https://i.pinimg.com/736x/45/f5/96/45f59678d9f9f3d3e2c6a9a24cdc261b.jpg",
        },
        {
          name: "Pita & Hummus Platter",
          description: "Warm pita bread served with creamy hummus",
          price: "$7.75",
          image:
            "https://i.pinimg.com/1200x/8a/14/e6/8a14e6811a3299fbf2212a87dd757023.jpg",
        },
        {
          name: "Cheesy Nachos",
          description: "Tortilla chips topped with melted cheese and jalapeños",
          price: "$9.15",
          image:
            "https://i.pinimg.com/736x/56/0f/28/560f28f70d4f0aa39635d8876f15af78.jpg",
        },
        {
          name: "Buffalo Cauliflower Bites",
          description: "Crispy cauliflower tossed in spicy buffalo sauce",
          price: "$8.49",
          image:
            "https://i.pinimg.com/1200x/dd/da/7e/ddda7e6e57b34f84f63e7c86105309be.jpg",
        },
        {
          name: "Prosciutto-Wrapped Melon",
          description: "Sweet melon slices wrapped with salty prosciutto",
          price: "$9.75",
          image:
            "https://i.pinimg.com/736x/5d/42/f6/5d42f662d03403c6abd22a6c2ad24281.jpg",
        },
        {
          name: "Ahi Tuna Tartare",
          description: "Fresh tuna with avocado and citrus dressing",
          price: "$12.99",
          image:
            "https://i.pinimg.com/1200x/9a/3d/90/9a3d90b659321242e44bbd8ad6f633a8.jpg",
        },
        {
          name: "Baked Brie",
          description: "Warm brie cheese topped with honey and almonds",
          price: "$11.50",
          image:
            "https://i.pinimg.com/1200x/a9/1a/5b/a91a5bb9bd27ca0b80771df5bd6b6a0b.jpg",
        },
        {
          name: "Crab Cakes",
          description: "Golden brown crab cakes with remoulade sauce",
          price: "$13.25",
          image:
            "https://i.pinimg.com/1200x/b9/ef/c0/b9efc0326ada1daa632e8800ae984137.jpg",
        },
        {
          name: "Falafel Balls",
          description: "Crispy chickpea fritters served with tahini sauce",
          price: "$7.99",
          image:
            "https://i.pinimg.com/1200x/0e/83/37/0e8337d41984bc47453383f3f8bae4b2.jpg",
        },
        {
          name: "Deviled Eggs",
          description: "Classic deviled eggs with paprika garnish",
          price: "$6.25",
          image:
            "https://i.pinimg.com/1200x/f6/87/4b/f6874b7354ed4e63f1d63e9463cf8f11.jpg",
        },
        {
          name: "Bacon-Wrapped Jalapeños",
          description: "Spicy jalapeños stuffed with cheese, wrapped in bacon",
          price: "$8.99",
          image:
            "https://i.pinimg.com/1200x/39/7d/9f/397d9ff886b719382f740a2c59b35e48.jpg",
        },
        {
          name: "Seared Scallops",
          description: "Pan-seared scallops with lemon butter sauce",
          price: "$14.75",
          image:
            "https://i.pinimg.com/1200x/3f/ab/20/3fab209f4d4e8fa73906957dfc590e27.jpg",
        },
        {
          name: "Truffle Fries",
          description: "Crispy fries tossed with truffle oil and parmesan",
          price: "$7.99",
          image:
            "https://i.pinimg.com/736x/c5/68/db/c568db63aa7a46660c951c8f72be7957.jpg",
        },
      ],
    },
    {
      name: "Main Courses",
      items: [
        {
          name: "Grilled Salmon",
          description: "Atlantic salmon with lemon butter sauce",
          price: "$24.99",
          image:
            "https://i.pinimg.com/736x/a8/ac/21/a8ac21fd838e87e55e23589a826ecfff.jpg",
        },
        {
          name: "Chicken Parmesan",
          description: "Breaded chicken breast with marinara and mozzarella",
          price: "$19.99",
          image:
            "https://i.pinimg.com/1200x/6f/e1/a0/6fe1a057345e104bb814f3a8fb5d7461.jpg",
        },
        {
          name: "Beef Tenderloin",
          description: "8oz tenderloin with garlic mashed potatoes",
          price: "$34.99",
          image:
            "https://i.pinimg.com/1200x/b1/80/b9/b180b9b85cfefd2172a32bdff2065b4c.jpg",
        },
        {
          name: "Vegetarian Lasagna",
          description: "Layers of pasta with vegetables and three cheeses",
          price: "$17.99",
          image:
            "https://i.pinimg.com/1200x/69/ca/09/69ca09ca582e98aee7b80008259fcf08.jpg",
        },

        {
          name: "Ribeye Steak",
          description: "Juicy ribeye grilled to perfection",
          price: "$24.99",
          image:
            "https://i.pinimg.com/736x/5b/f1/e4/5bf1e4b50241c8fc03b262a96b2e3146.jpg",
        },
        {
          name: "Chicken Alfredo Pasta",
          description: "Creamy pasta with grilled chicken",
          price: "$15.99",
          image:
            "https://i.pinimg.com/736x/62/0f/c8/620fc8a1152eaba4d4b4f79b57a33214.jpg",
        },
        {
          name: "Vegetable Stir-Fry",
          description: "Fresh veggies sautéed in savory sauce",
          price: "$13.49",
          image:
            "https://i.pinimg.com/736x/74/03/f3/7403f30ea605c502b7c27a822fb0c74b.jpg",
        },
        {
          name: "Lamb Chops",
          description: "Herb-crusted lamb chops with rosemary",
          price: "$26.99",
          image:
            "https://i.pinimg.com/1200x/1b/61/e2/1b61e2263518bca1083b19996606ec72.jpg",
        },
        {
          name: "Shrimp Scampi",
          description: "Garlic butter shrimp over pasta",
          price: "$19.99",
          image:
            "https://i.pinimg.com/1200x/3a/34/7f/3a347f379b0903df283b21cde2c3d21b.jpg",
        },
        {
          name: "BBQ Ribs",
          description: "Slow-cooked ribs with smoky BBQ sauce",
          price: "$22.49",
          image:
            "https://i.pinimg.com/736x/1b/8f/0c/1b8f0c265a992e4455d7f3cf63fbd05d.jpg",
        },
        {
          name: "Margherita Pizza",
          description: "Classic pizza with tomato, basil, and mozzarella",
          price: "$14.99",
          image:
            "https://i.pinimg.com/1200x/9c/b2/09/9cb209a9ffd3e50a9d20176711cbc2ac.jpg",
        },
        {
          name: "Beef Tacos",
          description: "Three tacos with seasoned beef and toppings",
          price: "$12.99",
          image:
            "https://i.pinimg.com/1200x/db/c4/c0/dbc4c003d5674030efe2173d2b8dcbce.jpg",
        },
        {
          name: "Paneer Butter Masala",
          description: "Indian cottage cheese in creamy tomato gravy",
          price: "$14.49",
          image:
            "https://i.pinimg.com/1200x/75/25/c2/7525c28b815e93b8f4ad4a3bb889090e.jpg",
        },
      ],
    },
    {
      name: "Desserts",
      items: [
        {
          name: "Tiramisu",
          description: "Classic Italian dessert with coffee and mascarpone",
          price: "$7.99",
          image:
            "https://i.pinimg.com/1200x/3d/e7/ca/3de7ca2f1316ed2feefe000d6b8228bf.jpg",
        },
        {
          name: "Chocolate Lava Cake",
          description: "Warm chocolate cake with molten center",
          price: "$8.99",
          image:
            "https://i.pinimg.com/1200x/0c/e1/4e/0ce14e1ef631166a411c20a62f32618f.jpg",
        },
        {
          name: "Cheesecake",
          description: "New York style cheesecake with berry compote",
          price: "$6.99",
          image:
            "https://i.pinimg.com/736x/de/a0/1a/dea01a87b4e0389b06ea43a19e6af30c.jpg",
        },

        {
          name: "Ice Cream Sundae",
          description: "Vanilla ice cream with chocolate syrup",
          price: "$4.99",
          image:
            "https://i.pinimg.com/736x/08/8d/ff/088dff792f3952c49c80f2e063e2c697.jpg",
        },
        {
          name: "Apple Pie",
          description: "Warm apple pie with cinnamon",
          price: "$5.49",
          image:
            "https://i.pinimg.com/736x/c1/70/1f/c1701fb98854426eb008f81c40783dc3.jpg",
        },
        {
          name: "Banoffee Pie",
          description: "Banana and toffee layered with whipped cream",
          price: "$6.49",
          image:
            "https://i.pinimg.com/1200x/ef/c6/1f/efc61f4eb3425a1926c81e5ebe6c7b3f.jpg",
        },
        {
          name: "Panna Cotta",
          description: "Creamy Italian dessert with berry coulis",
          price: "$5.99",
          image:
            "https://i.pinimg.com/1200x/39/3b/eb/393beb2737427e082f4d0f76bbbdec3d.jpg",
        },
        {
          name: "Macarons",
          description: "Colorful French almond meringue cookies",
          price: "$4.49",
          image:
            "https://i.pinimg.com/1200x/ac/7d/7b/ac7d7b10d57ddcc7522dd421a3580486.jpg",
        },
      ],
    },
  ];

  const handlePlusClick = (itemName) => {
    setPopupItem(itemName);
    setQuantities((prev) => ({
      ...prev,
      [itemName]: prev[itemName] || 1,
    }));
  };

  const adjustQuantity = (itemName, amount) => {
    setQuantities((prev) => {
      const newQty = Math.max(1, (prev[itemName] || 1) + amount);
      return { ...prev, [itemName]: newQty };
    });
  };

  return (
    <div className="wrap-container">
      <section className="head-section">
        <h1 className="main-title">Our Menu</h1>
        <p className="main-subtitle">
          Discover our delicious selection of dishes
        </p>
      </section>

      <section className="category-section">
        {menuCategories.map((category, i) => (
          <div key={i} className="category-box">
            <h2 className="category-heading">{category.name}</h2>

            <div className="items-grid">
              {category.items.map((item, j) => (
                <div key={j} className="item-card">
                  <div className="text-content">
                    <h3 className="item-title">{item.name}</h3>
                    <p className="item-desc">{item.description}</p>
                    <div className="price-offer-row">
                      <span className="item-price">{item.price}</span>
                      {item.offer && (
                        <span className="item-offer">{item.offer}</span>
                      )}
                    </div>
                  </div>

                  <div className="image-wrapper">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="item-image"
                    />
                    <div
                      className="plus-btn"
                      onClick={() => handlePlusClick(item.name)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 22 22"
                        fill="#2F3D48"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.1007 3.09975C14.1007 1.3878 12.7129 0 11.001 0C9.28905 0 7.90124 1.3878 7.90124 3.09975L7.90124 7.89926H3.09975C1.3878 7.89926 0 9.28707 0 10.999C0 12.711 1.3878 14.0988 3.09975 14.0988H7.90124L7.90124 18.9003C7.90124 20.6122 9.28904 22 11.001 22C12.7129 22 14.1007 20.6122 14.1007 18.9003V14.0988H18.9003C20.6122 14.0988 22 12.711 22 10.999C22 9.28707 20.6122 7.89926 18.9003 7.89926H14.1007V3.09975Z"
                        />
                      </svg>
                    </div>

                    {popupItem === item.name && (
                      <div className="quantity-box">
                        <button
                          className="qty-btn"
                          onClick={() => adjustQuantity(item.name, -1)}
                        >
                          -
                        </button>
                        <span className="qty-num">
                          {quantities[item.name] || 1}
                        </span>
                        <button
                          className="qty-btn"
                          onClick={() => adjustQuantity(item.name, 1)}
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Menu;
