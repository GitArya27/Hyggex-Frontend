import "font-awesome/css/font-awesome.min.css";
import "./TestPage.css";

import React, { useEffect, useState } from "react";

import axios from "axios";
import { book } from "../../../constants/url";
import { checklist } from "../../../constants/url";
import { idea } from "../../../constants/url";

function TestPage() {
  const [sliderValue, setSliderValue] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState(1);
  const [answers, setAnswers] = useState(new Array(30).fill(null));
  const [currentPage, setCurrentPage] = useState(1);
  const [sections, setSections] = useState([]);
  const [options, setOptions] = useState([]);

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
  };

  /*const initialQuestions = [
    "How often do you struggle to understand what you're reading during your study sessions?",
    "How often do you struggle to understand what you're reading during your study sessions?",
    "How often do you struggle to understand what you're reading during your study sessions?",
    "How often do you struggle to understand what you're reading during your study sessions?",
    "How often do you struggle to understand what you're reading during your study sessions?",
  ];

  const questionPerPage = 5;
  const firstQuestion = (currentPage - 1) * questionPerPage;

  /*const Question = initialQuestions.map((question, index) => ({
    text: question,
    number: firstQuestion + index + 1,
  }));*/


  //my codes here
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://hyggexbackend-d2b0.onrender.com/api/v1/test/tests/Reading%20Assessment%20Test'
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setSections(data.section || []);
        setOptions(data.options || []);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const questionsPerPage = 5;
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = sections.slice(indexOfFirstQuestion, indexOfLastQuestion);

  const handleOption = (questionIndex, optionIndex) => {
    setSections(prevSections => {
      const updatedSections = [...prevSections];
      updatedSections[questionIndex].selectedOption = optionIndex;
      return updatedSections;
    });
  };

  let questionCount = indexOfFirstQuestion


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
          <p>
            Engage sincerely and respond accurately to unveil your reading
            profile.
          </p>
        </div>
      </div>
      <div className="box2">
        <img src={idea} alt="" />
        <div className="one">
          <h6>View Detailed Insights</h6>
          <p>
            Explore the impact of comprehension, speed, retention, anxiety,
            focus, and fatigue on your reading.
          </p>
        </div>
      </div>
      <div className="box3">
        <img src={book} alt="" />
        <div className="one">
          <h6>Unlock Your Reading Potential</h6>
          <p>
            Advance into the proficient reader you aim to be with your optional
            Premium Suite.
          </p>
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
          <div id="slider-value">{sliderValue}%</div>
        </div>
      </div>
      <div>
        <h6 className="Read">Reading Comprehension</h6>
        <hr /><br />
        {sections.length > 0 &&
        sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="wrap">
            <ul>
              {section.questions.map((question, questionIndex) => {
                questionCount++;
                return (
                  <li key={question._id}>
                    <h5 className="quest-head">{`${questionCount}.${question.question}`}</h5>

                    <div className="option-holder">
                      {options.length > 0 &&
                        options.map((option, optionIndex) => (

                            <div key={option._id} className="input-wrapper">
                              <input
                                type="radio"
                                id="input"
                                name={`question-${question._id}`}
                                checked={
                                  section.questions[questionIndex]
                                    .selectedOption === optionIndex
                                }
                                value={option.optionName}
                                className="never-input"
                                onChange={() =>
                                 handleOption(questionIndex, optionIndex)
                                }
                            />
                            <label id="label"
                              className={
                                section.questions[questionIndex]
                                  .selectedOption === optionIndex
                                  ? 'selected'
                                  : ''
                              }
                            >
                              {option.optionName}
                            </label>
                            </div>

                        ))}
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}


        {/*questions.map((question) => (
          <Question
            key={question.number}
            number={question.number}
            text={question.text}
            selected={question.number === selectedQuestion}
            handleQuestionChange={handleQuestionChange}
            handleAnswerSelect={handleAnswerSelect}
            answer={answers[question.number - 1]}
          />
        ))*/}
      </div>
      <div className="button-container">
        {selectedQuestion <= 5 && (
          <button
            className="next"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
          </button>
        )}
      </div>
    </div>
  );
}

{/*function Question({ number, text, handleAnswerSelect, answer }) {
  return (
    <div>
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
          className="never-input"
        />
        <label htmlFor={`Never${number}`}>Never</label>

        <input
          type="radio"
          id={`Rarely${number}`}
          name={`choose${number}`}
          value="Rarely"
          checked={answer === "Rarely"}
          onChange={() => handleAnswerSelect(number, "Rarely")}
          className="rarely-input"
        />
        <label htmlFor={`Rarely${number}`}>Rarely</label>

        <input
          type="radio"
          id={`Sometimes${number}`}
          name={`choose${number}`}
          value="Sometimes"
          checked={answer === "Sometimes"}
          onChange={() => handleAnswerSelect(number, "Sometimes")}
          className="sometimes-input"
        />
        <label className="sometimes" htmlFor={`Sometimes${number}`}>
          Sometimes
        </label>

        <input
          type="radio"
          id={`Often${number}`}
          name={`choose${number}`}
          value="Often"
          checked={answer === "Often"}
          onChange={() => handleAnswerSelect(number, "Often")}
          className="often-input"
        />
        <label className="often" htmlFor={`Often${number}`}>
          Often
        </label>

        <input
          type="radio"
          id={`Always${number}`}
          name={`choose${number}`}
          value="Always"
          checked={answer === "Always"}
          onChange={() => handleAnswerSelect(number, "Always")}
          className="always-input"
        />
        <label htmlFor={`Always${number}`}>Always</label>
      </div>
    </div>
  );
}*/}

export default TestPage;
