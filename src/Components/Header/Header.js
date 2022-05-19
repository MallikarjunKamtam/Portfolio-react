import React, { useState } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation().pathname;

  return (
    <div className="header-container">
      <Link style={{ textDecoration: "none", color: "black" }} to="/">
        <div className="logo-container">
          <img
            className="dp"
            src={require("../../Images/dp.png")}
            alt="profile"
          />
        </div>
      </Link>

      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={`${location == "/" ? "/menuList" : "/"}`}
      >
        <div className="menu-container">
          {location === "/" ? (
            <i className="fi fi-br-list"></i>
          ) : (
            <i className="fi fi-bs-angle-left"></i>
          )}
        </div>
      </Link>
    </div>
  );
};

{
  /* <i class="fi fi-rr-arrow-small-left"></i> */
}

export default Header;
