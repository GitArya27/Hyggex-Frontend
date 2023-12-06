import "font-awesome/css/font-awesome.min.css";
import "./TestPage.css";

import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { Redirect } from "react-router-dom";
import SignIn from "../../auth/SignIn";
import axios from "axios";
import { book } from "../../../constants/url";
import { checklist } from "../../../constants/url";
import { idea } from "../../../constants/url";
import { useAuth } from "../../auth/AuthContext";
import { useRef } from "react";

function TestPage() {
  const { logout, isAuthenticated } = useAuth();
  const [sliderValue, setSliderValue] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sections, setSections] = useState([]);
  const [isection, setSection] = useState([]);
  const [options, setOptions] = useState([]);
  const [questionsPerPage, setQuestionsPerPage] = useState(5);
  const [selectedOptions, setSelectedOptions] = useState([]);
  //const [isAuthenticated, setAuthenticated] = useState(!!localStorage.getItem("jwtToken"));
  const [data, setData] = useState([]);
  const [radio, setRadio] = useState();
  const [countsection, updatesectionid] = useState(1);


  // https://hyggexbackend-d2b0.onrender.com//api/v1/test/user-results

  //fetching questions/answers
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://hyggexbackend-d2b0.onrender.com/api/v1/test/tests/Reading%20Assessment%20Test');

        const result = response.data;
        console.log(result);
        setSections(result.section || []);
        setOptions(result.options || []);
        setSection([result.section[0]] || []);

      } catch (error) {
        console.error('Error:', error);
      }
    };
    console.log("sections",sections);
    fetchData();
  }, []);


  //submit answer function

  const submitAnswers = async () => {

    try {
      const token = localStorage.getItem('jwtToken');

      //if (!token) {
        //logout(); // Redirect to signIn if not logged in
        //return;
      //}

      const selectedAnswers = sections.map((section, sectionIndex) =>
        section.questions.map((question, questionIndex) => ({
          question: question.question,
          answer: options[selectedOptions[sectionIndex]]?.optionName || radio || null,
        }))
      );
      console.log(selectedAnswers, 'selected answers are here');

      const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      const resp = await axios.post('https://hyggexbackend-d2b0.onrender.com/api/v1/test/submit-score', selectedAnswers, requestOptions);

      const data = resp.data;
      console.log(data, 'successfully submitted');
      alert('Successfully submitted');
    } catch (error) {
      console.error(error, 'Error occurred while submitting');
    }
  };

  useEffect(() => {
    submitAnswers();
  }, []);




  const NumOfTotalPages = Math.ceil(sections.length / questionsPerPage);
  const pages = [...Array(NumOfTotalPages + 1).keys()].slice(1);

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = sections.slice(indexOfFirstQuestion, indexOfLastQuestion);
  //console.log(currentQuestions, 'currentquestions');

  const previousHandler = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextHandler = () => {
    if(countsection <= currentQuestions.length){
      updatesectionid(countsection + 1);
      console.log(countsection);
      setSection([sections[countsection]] || []);
    }
    if (currentPage !== NumOfTotalPages) {
      //setCurrentPage(currentPage + 1);
    }
  };

  const handleClick = () => {
    console.log(radio, "hello");
  }
  handleClick();

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };


  //let questionCount = indexOfFirstQuestion;
  //const button = useRef();


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

      <div><br/><br />
        {currentQuestions.length > 0 &&
        isection.map((section, sectionIndex) => (
          <div key={sectionIndex} className="wrap">
            <h3 className="Read">{section.sectionName}</h3>
            <hr /><br />
            <ul>
              {section.questions.map((question, questionIndex) => {
                const Question = 5*(countsection-1) + questionIndex + 1
                return (
                  <li key={question._id}>
                    <h5 className="quest-head">{`${Question}.${question.question}`}</h5>

                    <div className="option-holder">
                      {options.length > 0 &&
                        options.map((option, optionIndex) => (

                          <div key={optionIndex} className="input-wrapper">

                            <input
                              type="radio"
                              //name={`group${questionIndex}`}
                              className="input-box"
                              //checked
                              required
                              name="radio"
                              onChange={e => setRadio(e.target.value)}

                                /*const updatedOptions = [...selectedOptions];
                                updatedOptions[questionIndex] = optionIndex;
                                setSelectedOptions(updatedOptions)*/

                              value={option.optionName}
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
      <div className="button-container flex justify-center">
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
      <div className="flex justify-center">
        {isAuthenticated? (submitAnswers):(SignIn)}
        <button className="bg-blue-900 mb-8 px-3 py-2 border rounded-2xl text-blue-100" onClick={ submitAnswers}>Submit Answers</button>
          </div>
    </div>
  );
}
export default TestPage;