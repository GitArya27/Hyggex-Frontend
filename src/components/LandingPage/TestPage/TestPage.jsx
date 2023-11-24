import "font-awesome/css/font-awesome.min.css";
import "./TestPage.css";

import React, { useEffect, useState } from "react";

import { book } from "../../../constants/url";
import { checklist } from "../../../constants/url";
import { idea } from "../../../constants/url";
import { useRef } from "react";

function TestPage() {
  const [sliderValue, setSliderValue] = useState(0);
  //const [selectedQuestion, setSelectedQuestion] = useState(1);
  //const [answers, setAnswers] = useState(new Array(30).fill(null));
  const [currentPage, setCurrentPage] = useState( + 1);
  const [sections, setSections] = useState([]);
  const [options, setOptions] = useState([]);
  const [questionsPerPage, setQuestionsPerPage] = useState(1);

  const buttonRefs = useRef([]);


  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

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
        //setQuestionsPerPage(5);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);


  const NumOfTotalPages = Math.ceil(sections.length / questionsPerPage);
  const pages = [...Array(NumOfTotalPages + 1).keys()].slice(1);

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = sections.slice(indexOfFirstQuestion, indexOfLastQuestion);
  console.log(currentQuestions);

  const previousHandler = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextHandler = () => {
    if (currentPage !== NumOfTotalPages) {
      setCurrentPage(currentPage + 5);
    }
  };

  let questionCount = indexOfFirstQuestion;

  const button = useRef();


  return (
    <div>
      {/*<div className="head">
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
      </div>*/}

      <div><br /><br />


        {currentQuestions.length > 0 &&
        currentQuestions.map((section, sectionIndex) => (
          <div key={sectionIndex} className="wrap">
            <h3 className="Read">{section.sectionName}</h3>
            <hr /><br />
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
                              name={`group${questionIndex}`}
                              className="input-box"
                              //checked
                              ref={(el) => (buttonRefs.current[optionIndex] = el)}
                            />
                            <label id="label"
                              className="checked"
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
      </div>
      <div className="button-container">
        <button
          className="next"
          onClick={nextHandler}
        >
          Next <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
        </button>
        {/*<button
          className="next"
          onClick={previousHandler}
        >
          Prev <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
            </button>*/}
      </div>
    </div>
  );
}
export default TestPage;