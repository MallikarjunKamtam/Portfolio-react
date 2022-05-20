import React from "react";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="pnf-container">
      <h3>404 Error</h3>
      <h4>PAGE NOT FOUND !!!</h4>
      <div className="pnf-img-container">
        <img className="pnf" src={require("../../Images/lost.png")} alt="" />
        <img className="pnf" src={require("../../Images/error.png")} alt="" />
      </div>
    </div>
  );
};

export default PageNotFound;
