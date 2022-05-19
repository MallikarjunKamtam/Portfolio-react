import React from "react";
import "./about.css";
import aboutData from "./AboutData";

const About = () => {
  return (
    <div>
      {aboutData.map((item) => (
        <div className="about-me" key={item.id}>
          <div className="icons"> {item.icon}</div>

          <div>
            <h2>{item.head}</h2>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
