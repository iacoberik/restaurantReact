import React from "react";
import ReactDOM from "react-dom/client";

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

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="header-logo logo"
          src="https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png"
          alt="logo"
        ></img>
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
  return (
    <div className="restaurant-card">
      <img></img>
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
      <div className="search-container">Search</div>
      <div className="restaurants-container">
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
