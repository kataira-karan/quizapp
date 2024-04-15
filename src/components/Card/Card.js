import React, { useRef, useState, useEffect } from "react";
import "./Card.css";
import Header from "../Header/Header";
import Question from "../Question/Question";
import Option from "../Option/Option";

const Card = () => {
  const questions = [
    {
      question:
        "A flashing red traffic light signifies that a driver should do what?",
      A: "stop",
      B: "speed up",
      C: "proceed with caution",
      D: "honk the horn",
      answer: "A",
    },
    {
      question: "A knish is traditionally stuffed with what filling?",
      A: "potato",
      B: "creamed corn",
      C: "lemon custard",
      D: "raspberry jelly",
      answer: "A",
    },
    {
      question: "A pita is a type of what?",
      A: "fresh fruit",
      B: "flat bread",
      C: "French tart",
      D: "friend bean dip",
      answer: "B",
    },
    {
      question:
        "A portrait that comically exaggerates a person's physical traits is called a what?",
      A: "landscape",
      B: "caricature",
      C: "still life",
      D: "Impressionism",
      answer: "B",
    },
    {
      question: "A second-year college student is usually called a what?",
      A: "sophomore",
      B: "senior",
      C: "freshman ",
      D: "junior ",
      answer: "A",
    },
    {
      question:
        "A student who earns a J.D. can begin his or her career as a what?",
      A: "lawyer",
      B: "bricklayer",
      C: "doctor",
      D: "accountant",
      answer: "A",
    },
  ];

  const optA = useRef(null);
  const optB = useRef(null);
  const optC = useRef(null);
  const optD = useRef(null);

  const [index, setindex] = useState(0);
  const [question, setquestion] = useState(questions[index]);
  const [lock, setlock] = useState(false);
  const [score, setscore] = useState(0);

  const nextQuestion = () => {
    if (lock) {
      setindex(index + 1);
      setquestion(questions[index + 1]);
      setlock(false);
      optA.current.classList.remove("correct-ans");
      optB.current.classList.remove("correct-ans");
      optC.current.classList.remove("correct-ans");
      optD.current.classList.remove("correct-ans");
      optA.current.classList.remove("wrong-ans");
      optB.current.classList.remove("wrong-ans");
      optC.current.classList.remove("wrong-ans");
      optD.current.classList.remove("wrong-ans");
    }
  };

  useEffect(() => {}, [index]);

  const selectOption = (e, ans) => {
    if (!lock) {
      if (question.answer === ans) {
        e.target.classList.add("correct-ans");
        setscore(score + 1);

        setlock(true);
      } else {
        e.target.classList.add("wrong-ans");
        console.log(question.answer);
        console.log(question);
        if (question.answer === "A") {
          console.log(question.answer);
          optA.current.classList.add("correct-ans");
        } else if (question.answer === "B") {
          optB.current.classList.add("correct-ans");
        } else if (question.answer === "C") {
          optC.current.classList.add("correct-ans");
        } else {
          optD.current.classList.add("correct-ans");
        }
        setlock(true);
      }
    }
  };

  return (
    <div className="card-container">
      <Header></Header>
      <hr></hr>

      {/* quiz card */}
      {index < questions.length ? (
        <div>
          <Question
            question={questions[index].question}
            index={index}
          ></Question>
          <div>
            {/* {questions[index].options.map((option, index) => (
          <Option optionValue={option}></Option>
        ))} */}
            <div
              ref={optA}
              className="option-container"
              onClick={(e) => selectOption(e, "A")}
            >
              {questions[index].A}
            </div>
            <div
              ref={optB}
              className="option-container"
              onClick={(e) => selectOption(e, "B")}
            >
              {questions[index].B}
            </div>
            <div
              ref={optC}
              className="option-container"
              onClick={(e) => selectOption(e, "C")}
            >
              {questions[index].C}
            </div>
            <div
              ref={optD}
              className="option-container"
              onClick={(e) => selectOption(e, "D")}
            >
              {questions[index].D}
            </div>
          </div>

          <div className="footer">
            <button className="next-button" onClick={nextQuestion}>
              Next
            </button>
            <span>
              {" "}
              {index + 1} of {questions.length} Question{" "}
            </span>
          </div>
        </div>
      ) : (
        <div>
          Your score is {score} / {questions.length}
        </div>
      )}
    </div>
  );
};

export default Card;
