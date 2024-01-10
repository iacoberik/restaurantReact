import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../img/header_logo.png";
import ButtonDefault from "./ButtonDefault";

const Header = () => {
  const [logText, setLogText] = useState("Login");

  //If the dependency array from useEffect is not used, i will render every time the component will render after it mounts

  //If the dependency array is empty, it will render only one time after the component will mount.(only on initial render)

  //If the dependency array has value like [logText], it will be called after the component render every time the value of it changes

  useEffect(() => {
    console.log("useEffect called");
  }, []);

  console.log("HEADER RENDERED");

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
              <li className="nav-item_link">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item_link">
                <Link to="/About">About Us</Link>
              </li>
              <li className="nav-item_link">
                <Link to="/Contact">Contact</Link>
              </li>
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
