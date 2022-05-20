import React from "react";
import "./bodymiddlecard.css";
import { Link } from "react-router-dom";

const BodyMiddleCard = () => {
  return (
    <div>
      <div id="scroll" className="profile">
        <div className="description">Profile</div>
        <Link to="/profile">
          <div className="view-button">View</div>
        </Link>
      </div>
      <div className="work-about">
        <div className="work">
          <div className="work-description">Work</div>
          <Link to="/work">
            <div className="work-view-button">View</div>
          </Link>
        </div>
        <div className="about">
          <div className="about-description">About</div>
          <Link to="/about">
            <div className="about-view-button">View</div>
          </Link>

          <img
            className="social-media"
            src={require("../../Images/social-media.png")}
            alt="About"
          />
        </div>
      </div>
    </div>
  );
};

export default BodyMiddleCard;
