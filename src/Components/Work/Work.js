import React from "react";
import "./work.css";
import data from "./WorksData";

const Work = () => {
  return (
    <div>
      <div>
        <h1>
          Checkout my projects at{" "}
          <a
            className="repos"
            href="https://github.com/MallikarjunKamtam?tab=repositories"
          >
            Github
          </a>
        </h1>
      </div>
      <div className="works">
        {data.map((item) => (
          <div key={Math.random()}>
            <a href={item.link}>
              <h2>{item.project}</h2>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
