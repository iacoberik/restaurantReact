import { useState } from "react";
import logo from "../img/header_logo.png";
import ButtonDefault from "./ButtonDefault";

const Header = () => {
  const [logText, setLogText] = useState("Login");

  const logged = () => {
    logText === "Login" ? setLogText("Logout") : setLogText("Login");
  };

  return (
    <div className="header">
      <div className="pane--inner">
        <div className="header-navigation">
          <div className="logo-container">
            <img className="header-logo logo" src={logo} alt="logo"></img>
          </div>
          <div className="nav-items">
            <ul>
              <li className="nav-item_link">Home</li>
              <li className="nav-item_link">About Us</li>
              <li className="nav-item_link">Contact</li>
              <li className="nav-item_link">Cart</li>
              <ButtonDefault onClick={logged} buttonText={logText} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
