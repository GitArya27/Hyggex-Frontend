import React, { useState } from "react";
import 'font-awesome/css/font-awesome.min.css';
import './TestPage.css'; 
import { checklist } from "../../../constants/url";
import { idea } from "../../../constants/url";
import { book } from "../../../constants/url";


function TestPage() {
  const [sliderValue, setSliderValue] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState(1);
  const [answers, setAnswers] = useState(new Array(5).fill(null))

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const handleQuestionChange = (questionNumber) => {
    setSelectedQuestion(questionNumber);
  };

  const handleAnswerSelect = (questionNumber, answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionNumber - 1] = answer;
    setAnswers(updatedAnswers);
      if (questionNumber < questions.length) {
        setSelectedQuestion(questionNumber + 1);
      }
    };

  const questions = [
    "How often do you struggle to understand what you're reading during your study sessions?",
    "How often do you have to re-read sentences or paragraphs to understand them?",
    "How often do you find it difficult to summarize what you've read?",
    "How often do you struggle to identify the main points in a passage or chapter?",
    "How often do you find it hard to make predictions or inferences based on what you're reading?",
  ];

  return (
    <div>
      <div className="head">
        <h1 className="h1">Free Reading Assessment</h1>
        <p>HyggeX Assessment Explorer &reg;</p>
      </div>
      <div className="box1">
        <img src={checklist} alt="" />
        <div className="one">
          <h6>Complete the Assessment</h6>
          <p>Engage sincerely and respond accurately to unveil your reading profile.</p>
        </div>
      </div>
      <div className="box2">
        <img src={idea} alt="" />
        <div className="one">
          <h6>View Detailed Insights</h6>
          <p>Explore the impact of comprehension, speed, retention, anxiety, focus, and fatigue on your reading.</p>
        </div>
      </div>
      <div className="box3">
        <img src={book} alt="" />
        <div className="one">
          <h6>Unlock Your Reading Potential</h6>
          <p>Advance into the proficient reader you aim to be with your optional Premium Suite.</p>
        </div>
      </div>
      <div className="line">
        <div className="slider-container">
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            className="slider"
            onChange={handleSliderChange}
          />
        </div>
        <div id="slider-value">{sliderValue}%</div>
      </div>
      <div>
        <h6 className="Read">Reading Comprehension</h6>
        <hr></hr>
        {questions.map((question, index) => (
          <Question
            key={index}
            number={index + 1}
            text={question}
            selected={index + 1 === selectedQuestion}
            handleQuestionChange={handleQuestionChange}
            handleAnswerSelect={handleAnswerSelect}
            answer={answers[index]}
          />
        ))}
      </div>
      <div className="next-btn">
        <button className="next" onClick={() => handleQuestionChange(selectedQuestion + 1)}>
          Next <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

function Question({ number, text, selected, handleQuestionChange, handleAnswerSelect, answer }) {
  return (
    <div className={` ${!selected ? 'blur' : ''}`}>
      <h5 className="question">
        {number}. {text}
      </h5>
      <div className="radio-btn">
      <input
          type="radio"
          id={`Never${number}`}
          name={`choose${number}`}
          value="Never"
          checked={answer === "Never"}
          onChange={() => handleAnswerSelect(number, "Never")}
        />
        <label htmlFor={`Never${number}`}>Never</label>

        <input
          type="radio"
          id={`Rarely${number}`}
          name={`choose${number}`}
          value="Rarely"
          checked={answer === "Rarely"}
          onChange={() => handleAnswerSelect(number, "Rarely")}
        />
        <label htmlFor={`Rarely${number}`}>Rarely</label>

        <input
          type="radio"
          id={`Sometimes${number}`}
          name={`choose${number}`}
          value="Sometimes"
          checked={answer === "Sometimes"}
          onChange={() => handleAnswerSelect(number, "Sometimes")}
        />
        <label htmlFor={`Sometimes${number}`}>Sometimes</label>
        <input
          type="radio"
          id={`Often${number}`}
          name={`choose${number}`}
          value="Often"
          checked={answer === "Often"}
          onChange={() => handleAnswerSelect(number, "Often")}
        />
        <label htmlFor={`Often${number}`}>Often</label>

        <input
          type="radio"
          id={`Always${number}`}
          name={`choose${number}`}
          value="Always"
          checked={answer === "Always"}
          onChange={() => handleAnswerSelect(number, "Always")}
        />
        <label htmlFor={`Always${number}`}>Always</label>

      </div>
    </div>
  );
}

export default TestPage;
