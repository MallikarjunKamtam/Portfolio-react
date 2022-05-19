import React from "react";
import { Link } from "react-router-dom";
import "./MenuItems.css";

const MenuItems = () => {
  return (
    <div className="menu-items-container">
      <Link to="/about">
        <h1>About</h1>
      </Link>

      <Link to="/work">
        <h1>Work</h1>
      </Link>

      <Link to="/profile">
        <h1>Profile/Interests</h1>
      </Link>

      <Link to="/">
        <h1>Contact</h1>
      </Link>
    </div>
  );
};

export default MenuItems;
