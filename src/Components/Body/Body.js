import React from "react";
import Greeting from "./Greeting";
import "./Body.css";
import BodyMiddle from "./BodyMiddle";

const Body = () => {
  return (
    <div>
      <Greeting />
      <div className="down-arrow">
        <i className="fi fi-rr-angle-down"></i>
      </div>
      <BodyMiddle />
    </div>
  );
};

export default Body;
