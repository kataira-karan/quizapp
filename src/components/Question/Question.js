import React from "react";
import "./Question.css";

const Question = ({ question, index }) => {
  return (
    <div className="question-container">
      <span className="question-number">{index + 1}</span>
      <span>{question}</span>
    </div>
  );
};

export default Question;
