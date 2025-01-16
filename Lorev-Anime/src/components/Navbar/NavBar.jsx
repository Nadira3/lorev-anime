import "./navbar.css";
import logo from "../../assets/logo.svg";
import meniIcon from "../../assets/menu-icon.png";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [darkNav, setDarkNav] = useState(false);
  const toggleMenu = () => {
    menuInvisible === false ? setMenuVisible(true) : setMenuVisible(false);
  };
  
  const [menuInvisible, setMenuVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 700 ? setDarkNav(true) : setDarkNav(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={darkNav ? "container dark-nav" : "container"}>
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
