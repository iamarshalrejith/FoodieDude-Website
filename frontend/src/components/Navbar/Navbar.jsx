import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/frontend_assets/assets";
import { FaSearch, FaShoppingBasket } from "react-icons/fa";
import {Link} from "react-router-dom"

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  return (
    <div className="navbar">
      <img src={assets.logo} className="logo" alt="logo" />

      <ul className="navbar-menu">
        <Link to='/'
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </Link>
        <a href="#explore-menu"
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a href="#app-download"
          onClick={() => setMenu("Mobile-App")}
          className={menu === "Mobile-App" ? "active" : ""}
        >
          Mobile App
        </a>

        <a href="#footer"
          onClick={() => setMenu("Contact-Us")}
          className={menu === "Contact-Us" ? "active" : ""}
        >
          Contact us
        </a>
      </ul>

      <div className="navbar-right">
        {/* Search Icon */}
        <FaSearch className="nav-icon" />

        {/* Basket Icon */}
        <div className="navbar-search-icon">
          <FaShoppingBasket className="nav-icon" />
          <div className="dot"></div>
        </div>

        <button>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
