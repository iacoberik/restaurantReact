import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../img/header_logo.png";
import ButtonDefault from "./ButtonDefault";
import useInternetStatus from "../utils/useInternetStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [logText, setLogText] = useState("Login");
  const onlineStatuss = useInternetStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  //If the dependency array from useEffect is not used, i will render every time the component will render after it mounts
  //If the dependency array is empty, it will render only one time after the component will mount.(only on initial render)
  //If the dependency array has value like [logText], it will be called after the component render every time the value of it changes

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
              <li className="nav-item_status">
                Status: {onlineStatuss ? "Online 🟢" : "Offline 🔴"}
              </li>
              <li className="nav-item_link">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item_link">
                <Link to="/About">About Us</Link>
              </li>
              <li className="nav-item_link">
                <Link to="/Contact">Contact</Link>
              </li>
              <li className="nav-item_link">
                <Link to="/Cart">
                  Cart {cartItems.length > 0 && `(${cartItems.length})`}
                </Link>
              </li>
              <ButtonDefault onClick={logged} buttonText={logText} />
              {logText === "Logout" && <li>{loggedInUser}</li>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
