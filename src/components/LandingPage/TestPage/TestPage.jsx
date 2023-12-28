import "font-awesome/css/font-awesome.min.css";
import "./TestPage.css";

import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { Img } from "../../Img";
import ProgressBar from "@ramonak/react-progress-bar";
import { Redirect } from "react-router-dom";
import SignIn from "../../auth/SignIn";
import { Text } from "../../Text";
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
  const [data, setData] = useState([]);
  const [radio, setRadio] = useState();
  const [countsection, updatesectionid] = useState(0);
  const [, forceUpdate] = useState();
  const [selectedData, setSelectedData] = useState(new Object());
  const scrollRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://hyggexbackend-d2b0.onrender.com/api/v1/test/tests/Reading%20Assessment%20Test"
        );
        const result = response.data;
        setSections(result.section || []);
        setOptions(result.options || []);
        setSection([result.section[0]] || []);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const submitAnswers = async () => {
    const token = localStorage.getItem("jwtToken");
    const selectedAnswersJSON = JSON.stringify(selectedData);
    console.log(selectedAnswersJSON, "selected answers are here");
    console.log(token, "this is jwtToken");
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    if (token == null) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      toast.error("SignIn to View Your Result");
    } else {
      try {
        const resp = await axios.post(
          "https://hyggexbackend-d2b0.onrender.com/api/v1/test/submit-score",
          selectedAnswersJSON,
          requestOptions
        );

        const data = resp.data;
        console.log(data, "successfully submitted");
        alert("Successfully submitted");
      } catch (error) {
        console.error(error, "Error occurred while submitting");
      }
    }
  };

  const NumOfTotalPages = Math.ceil(sections.length / questionsPerPage);
  const pages = [...Array(NumOfTotalPages + 1).keys()].slice(1);

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = sections.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  const backHandler = () => {
    if (countsection > 0) {
      updatesectionid(countsection - 1);
      setSection(() => [sections[countsection - 1]] || []);
      window.scrollTo({ top: 300, left: 0, behavior: "smooth" });
    }
  };

  const nextHandler = () => {
    if (countsection <= totalSections) {
      updatesectionid(countsection + 1);
      setSection(() => [sections[countsection + 1]] || []);
      window.scrollTo({ top: 300, left: 0, behavior: "smooth" });
    }
  };

  var total = 0;
  var totalSections = 0;
  for (const sec in sections) {
    total = total + sections[sec].questions.length;
    totalSections = totalSections + 1;
  }

  const percentage = (Object.keys(selectedData).length / total) * 100;

  const handleOptionChange = (questionID, optionID, Question) => {
    selectedData[questionID] = `${Question}.${optionID}`;
    setSelectedData(selectedData);
    const newPercentage = (Object.keys(selectedData).length / total) * 100;
    setSliderValue(newPercentage);
    forceUpdate((prev) => !prev);
  };

  return (
    <div>
      <div className="head">
        <h1 className="h1">Free Reading Assessment</h1>
        <p className="text-[0.7rem] mb-16 text-[#F5F5F5] md:mb-[2rem]">HyggeX Assessment Explorer &reg;</p>
      </div>

      <div className="box-wrapper">
        <div className="box1 bg-[#f7fbfc]">
          <img src={checklist} alt="" />
          <div className="one">
            <h6>Complete the Assessment</h6>
            <p>
              Engage sincerely and respond accurately to unveil your reading
              profile.
            </p>
          </div>
        </div>
        <div className="box2 bg-[#fefcf7]">
          <img src={idea} alt="" />
          <div className="one">
            <h6>View Detailed Insights</h6>
            <p>
              Explore the impact of comprehension, speed, retention, anxiety,
              focus, and fatigue on your reading.
            </p>
          </div>
        </div>
        <div className="box3 bg-[#f8f7f9]">
          <img src={book} alt=""/>
          <div className="one">
            <h6>Unlock Your Reading Potential</h6>
            <p>
              Advance into the proficient reader you aim to be with your optional
              Premium Suite.
            </p>
          </div>
        </div>
      </div>

      <div className="line">
        <div className="slider-container">
          <ProgressBar
            completed={Math.round(percentage)}
            bgColor="#164ec0"
            animateOnRender={true}
          />
          <div id="slider-value">{Math.round(percentage)}%</div>
        </div>
      </div>

      <div>
        <br />
        <br />
        {currentQuestions.length > 0 ? (
          isection.map((section, sectionIndex) => (
            <div key={sectionIndex} className="wrap">
              <h3 className="Read">{section.sectionName}</h3>
              <hr />
              <br />
              <ul>
                {section.questions.map((question, questionIndex) => {
                  const Question = 5 * countsection + questionIndex + 1;
                  return (
                    <li key={question._id}>
                      <h5 className="quest-head">{`${Question}. ${question.question}`}</h5>

                      <div className="option-holder">
                        {options.length > 0 &&
                          options.map((option, optionIndex) => (
                            <div key={optionIndex} className="input-wrapper">
                              <input
                                type="radio"
                                className="input-box"
                                //checked
                                required
                                name={`${Question}.${option._id}`}
                                checked={
                                  selectedData[question._id] ===
                                  `${Question}.${option._id}`
                                }
                                value={option.optionName}
                                id={`${Question}.${option._id}`}
                                onChange={() => {
                                  handleOptionChange(
                                    question._id,
                                    option._id,
                                    Question
                                  );
                                  // console.log("selected " + option.optionName);
                                }}
                              />
                              <label
                                htmlFor={`${Question}.${option._id}`}
                                className={`${
                                  selectedData[question._id] ===
                                  `${Question}.${option._id}`
                                    ? "blue-checked"
                                    : "checked"
                                }`}
                              >
                                {option.optionName}
                              </label>
                            </div>
                          ))}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))
        ) : (
          <>
            <div className="justify-center item-center flex ">
              {" "}
              Loading Data ...
            </div>
          </>
        )}
      </div>
      <div className="button-container flex justify-center">
        {countsection == 0 ? (
          <button className="next" onClick={nextHandler}>
            Next{" "}
            <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
          </button>
        ) : countsection == totalSections - 1 ? (
          <div className="verticle">
            <button className="next" onClick={backHandler}>
              <i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i>
              back
            </button>
            <button className="next" onClick={submitAnswers}>
              Submit Answers
            </button>
          </div>
        ) : (
          <>
            <button className="next" onClick={backHandler}>
              <i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i>
              back
            </button>
            <button className="next" onClick={nextHandler}>
              Next{" "}
              <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
            </button>
          </>
        )}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
export default TestPage;
