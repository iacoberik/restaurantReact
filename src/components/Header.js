import logo from "../img/header_logo.png";

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

export default Header;
