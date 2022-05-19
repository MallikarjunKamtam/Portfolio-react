import React from "react";
import "./profile.css";
const Profile = () => {
  return (
    <div>
      <div className="skills">
        <h2>I Love ❤️ working with...</h2>
        <div className="skills-row">
          <img
            className="skill"
            src={require("../../Images/html.png")}
            alt=""
          />
          <img
            className="skill"
            src={require("../../Images/css-3.png")}
            alt=""
          />
          <img className="skill" src={require("../../Images/js.png")} alt="" />
        </div>

        <div className="skills-row">
          <img
            className="skill"
            src={require("../../Images/physics.png")}
            alt=""
          />
          <img
            className="skill"
            src={require("../../Images/photoshop.png")}
            alt=""
          />
          <img
            className="skill"
            src={require("../../Images/premiere.png")}
            alt=""
          />
        </div>

        <img className="skill" src={require("../../Images/figma.png")} alt="" />
      </div>

      <div className="awards">
        <div className="award">
          <img
            className="award-img"
            src={require("../../Images/award1.jpg")}
            alt=""
          />
        </div>
        <div className="award">
          <img
            className="award-img"
            src={require("../../Images/award2.jpg")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
