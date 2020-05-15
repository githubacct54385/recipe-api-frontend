import React from "react";
import "../../styles/AppStyles.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-wrapper">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default Loader;
