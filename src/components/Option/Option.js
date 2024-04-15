import React from "react";
import "./Option.css";

const Option = ({ optionValue }) => {
  return (
    <div className="option-container">
      <span> {optionValue} </span>
    </div>
  );
};

export default Option;
