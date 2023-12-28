import "font-awesome/css/font-awesome.min.css";
import "./TestPage.css";
import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import ProgressBar from "@ramonak/react-progress-bar";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../auth/AuthContext";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import TestHeader from "./TestHeader";

function TestPage() {
  const [sliderValue, setSliderValue] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [sections, setSections] = useState([]);
  const [isection, setSection] = useState([]);
  const [options, setOptions] = useState([]);
  const [questionsPerPage, setQuestionsPerPage] = useState(5);
  const [countsection, updatesectionid] = useState(0);
  const [, forceUpdate] = useState();
  const [selectedData, setSelectedData] = useState(new Object());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("jwtToken");
        if (token == null) {
          toast.error("SignIn to View Your Result");
          window.location.href = "/login";
        }
        setIsLoading(false);
        const response = await axios.get(
          "https://hyggexbackend-d2b0.onrender.com/api/v1/test/tests/Reading%20Assessment%20Test"
        );
        // console.log(response)
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
        const sendData = {
          answers: selectedAnswersJSON,
          testId: "Reading%20Assessment%20Test",
        };
        const resp = await axios.post(
          "http://localhost:8000/api/v1/test/submit-score",
          sendData,
          requestOptions,
          {mode:'cors'}
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
      window.scrollTo({ top: 460, left: 0, behavior: "smooth" });
    }
  };

  const nextHandler = () => {
    if (countsection <= totalSections) {
      updatesectionid(countsection + 1);
      setSection(() => [sections[countsection + 1]] || []);
      window.scrollTo({ top: 460, left: 0, behavior: "smooth" });
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
  if (!isLoading) {
    return (
      <div>
        <TestHeader />
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
        <div className="mt-[-55px]">
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
                <i
                  className="fa fa-arrow-circle-o-right"
                  aria-hidden="true"
                ></i>
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
  } else {
    return <></>;
  }
}
export default TestPage;
