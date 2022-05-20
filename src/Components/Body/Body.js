import React from "react";
import Greeting from "./Greeting";
import "./Body.css";
import BodyMiddle from "./BodyMiddle";
import { Link } from "react-router-dom";
const Body = () => {
  const scroller = () => {
    window.scrollTo({
      top: 670,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <Greeting />

      <div onClick={scroller} className="down-arrow">
        <i className="fi fi-rr-angle-down"></i>
      </div>

      <BodyMiddle />
    </div>
  );
};

export default Body;
