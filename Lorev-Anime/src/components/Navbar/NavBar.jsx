import "./navbar.css";
import logo from "../../assets/logo.svg";
import meniIcon from "../../assets/menu-icon.png";
import { useState } from "react";

const NavBar = () => {
  const [menuInvisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    menuInvisible === false ? setMenuVisible(true) : setMenuVisible(false);
  };
  return (
    <nav className="container">
      <img src={logo} alt="logo" className="logo" />
      <ul className={!menuInvisible ? "hide-menu" : ""}>
        <li>Events</li>
        <li>Products</li>
        <li>Documentary</li>
        <li>Motivational</li>
      </ul>
      <img
        src={meniIcon}
        alt="menu"
        className="menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default NavBar;
