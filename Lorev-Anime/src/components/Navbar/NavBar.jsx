import "./navbar.css";
import logo from "../../assets/logo.svg";
import meniIcon from "../../assets/menu-icon.png";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [darkNav, setDarkNav] = useState(false);
  const [menuInvisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    menuInvisible === false ? setMenuVisible(true) : setMenuVisible(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setDarkNav(true) : setDarkNav(false);
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
        <li>
          <Link to="products" smooth="true" duration={500} offset={-260}>
            Products
          </Link>
        </li>
        <li>
          <Link to="events" smooth="true" duration={500} offset={-260}>
            Events
          </Link>
        </li>
        <li>
          <Link to="documentaries" smooth="true" duration={500} offset={-260}>
            Documentary
          </Link>
        </li>
        <li><Link to="motivationals" smooth="true" duration={500} offset={-260}>
            Motivational
          </Link></li>
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
