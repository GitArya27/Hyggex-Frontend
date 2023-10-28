import React, { useState } from "react";
import TestHeader from "../../../Assets/TestHeader.png";
import theory from "../../../Assets/theory.png";
import exercise from "../../../Assets/exercise.png";
import 'font-awesome/css/font-awesome.min.css';


function TestPage() {
  const [sliderValue, setSliderValue] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState(1);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const handleQuestionChange = (questionNumber) => {
    setSelectedQuestion(questionNumber);
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
      <div className="heading">
        <h1 className="h1">Free Reading Assessment</h1>
        <p>HyggeX Assessment Explorer &reg;</p>
      </div>
      <div className="box1">
        <img src={TestHeader} alt="" />
        <div className="one">
          <h6>Complete the Assessment</h6>
          <p>Engage sincerely and respond accurately to unveil your reading profile.</p>
        </div>
      </div>
      <div className="box2">
        <img src={theory} alt="" />
        <div className="one">
          <h6>View Detailed Insights</h6>
          <p>Explore the impact of comprehension, speed, retention, anxiety, focus, and fatigue on your reading.</p>
        </div>
      </div>
      <div className="box3">
        <img src={exercise} alt="" />
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

function Question({ number, text, selected, handleQuestionChange }) {
  return (
    <div className={`question ${!selected ? 'blur' : ''}`}>
      <h5 className="question" style={{ marginBottom: "5px" }}>
        {number}. {text}
      </h5>
      <div className="radio-btn">
        <input type="radio" id={`Never${number}`} name={`choose${number}`} value="Never" />
        <label htmlFor={`Never${number}`}>Never</label>

        <input type="radio" id={`Rarely${number}`} name={`choose${number}`} value="Rarely" />
        <label htmlFor={`Rarely${number}`}>Rarely</label>

        <input type="radio" id={`Sometimes${number}`} name={`choose${number}`} value="Sometimes" />
        <label htmlFor={`Sometimes${number}`}>Sometimes</label>

        <input type="radio" id={`Often${number}`} name={`choose${number}`} value="Often" />
        <label htmlFor={`Often${number}`}>Often</label>

        <input type="radio" id={`Always${number}`} name={`choose${number}`} value="Always" />
        <label htmlFor={`Always${number}`}>Always</label>
      </div>
      {selected && (
        <button onClick={() => handleQuestionChange(number + 1)} className="next-button">
          Next
        </button>
      )}
    </div>
  );
}

export default TestPage;
