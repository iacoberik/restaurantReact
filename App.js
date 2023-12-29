import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import logo from "./img/header_logo.png";

// Namaste react layout

// Header
// 	- Logo
// 	- NavItems
// Body
// 	- Search Bar
// 	- Restaurants Cotainer
// 		- Restaurant Card
// -img
// -name of it - couisin - delivery time
// Footer
// 	-Copyright
// 	-Links
// 	-Address
// 	-Contant

//React Element => creating an object => On render() to the dom it becomes be HTML

const imgTest =
  "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="header-logo logo" src={logo} alt="logo"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li className="nav-item_link">Home</li>
          <li className="nav-item_link">About Us</li>
          <li className="nav-item_link">Contact</li>
          <li className="nav-item_link">Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  const [shadowBox, setShadownBox] = useState(
    "0 2px 4px #0e1e251f, 0 2px 16px #0e1e2552"
  );

  let imgTest =
    "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg";
  let cardStyle = {
    aspectRatio: 14 / 16,
    borderRadius: "10px",
    flexDirection: "column",
    maxHeight: "375px",
    marginTop: "20px",
    padding: "10px 15px",
    transition: "all .2s ease-in-out",
    display: "flex",
    boxShadow: shadowBox,
    marginInline: "auto",
  };

  return (
    <div
      className="restaurant-card"
      style={cardStyle}
      onMouseEnter={() =>
        setShadownBox(
          "rgba(14, 30, 37, 0.24) 0px 2px 6px 0px, rgba(14, 30, 37, 0.42) 0px 2px 20px 0px"
        )
      }
      onMouseLeave={() =>
        setShadownBox("0 2px 4px #0e1e251f, 0 2px 16px #0e1e2552")
      }
    >
      <img src={imgTest}></img>
      <div className="restaurant-details">
        <h3 className="details-title">Pizza Hut</h3>
        <p className="details-info">Estimating 40 mins</p>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-container">
      <div className="search-container">Search...</div>
      <div className="restaurants-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
