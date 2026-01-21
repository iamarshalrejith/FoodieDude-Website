import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/frontend_assets/assets";
import { FaSearch, FaShoppingBasket } from "react-icons/fa";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  return (
    <div className="navbar">
      <img src={assets.logo} className="logo" alt="logo" />

      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("Mobile-App")}
          className={menu === "Mobile-App" ? "active" : ""}
        >
          Mobile App
        </li>

        <li
          onClick={() => setMenu("Contact-Us")}
          className={menu === "Contact-Us" ? "active" : ""}
        >
          Contact us
        </li>
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
