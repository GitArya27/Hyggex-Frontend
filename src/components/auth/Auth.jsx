import 'react-phone-input-2/lib/style.css'
import 'react-toastify/dist/ReactToastify.css';

import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { circle, circle1, circle2 } from "../../constants/url";
import { useEffect, useMemo, useRef, useState } from "react";

import {Link} from 'react-router-dom'
import PhoneInput from 'react-phone-input-2'
import React from "react";
import Testfile from './testfile';
import axios from "axios";
import { auth as firebaseAuth } from "./firebaseconfig"; // This is your custom firebase auth instance

function Auth() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [grade, setGrade] = useState([]);
  const [schoolStudent, setSchoolStudent] = useState();
  const [selectedGrade, setSelectedGrade] = useState();
  const [status, setStatus] = useState("initial"); // initial, otpSent, newUser
  const recaptchaVerifierRef = useRef(null);
  const [resendOtp, setResendOtp] = useState(false);
  const [uid, setUid] = useState(null);
  const [course, setCourse] = useState([]);
  const [prepCourse, setPrepCourse] = useState();
  const [otp, setOtp] = useState('');
  //const [isOtpExpired, setIsOtpExpired] = useState(false);
  //const [countdown, setCountdown] = useState(50);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(20);



  useEffect(() => {

    const interval = setInterval(() => {

      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {

        if (minutes === 0) {
          clearInterval(interval);

        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      };
    }, 1000)


    //fetching grades
    fetch('https://hyggexbackend-d2b0.onrender.com/api/v1/user/getGrade')
      .then((response) => response.json())
      .then((data) => {
        console.log(data, 'grades fetched');
        setGrade(data);
      })
      .catch((error) => console.error('Error fetching grades:', error));

    //fetching courses
    fetch('https://hyggexbackend-d2b0.onrender.com/api/v1/user/getCourse')
      .then((response) =>response.json())
      .then((data) => {
        console.log(data, 'available courses');
        setCourse(data)
      })
      .catch((err) => console.log(err, 'courses not found'));


    const recaptchaContainer = document.getElementById('recaptcha-container');

    if (recaptchaContainer) {
      const recaptchaVerifierInstance = new RecaptchaVerifier(
        firebaseAuth,
        recaptchaContainer,
        {
            size: "invisible"
        }
      );

      recaptchaVerifierRef.current = recaptchaVerifierInstance;

    } else {
      console.error("Recaptcha container not found");
    }

    return () => clearInterval(interval);

  }, [seconds]);



  //send OTP function
  const sendOtp = () => {
    signInWithPhoneNumber(
      firebaseAuth,
      phoneNumber,
      recaptchaVerifierRef.current
    ) // <-- use firebaseAuth here
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        //alert("otp has been sent")
        toast.success('OTP has been sent');
        setStatus("otpSent");
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          console.error("Backend responded with:", error.response.data);
          toast.error('Error: ' + error.response.data.message);
      } else {
          console.error("Error sending OTP:", error);
          //alert("otp not send")
          toast.error('Error sending OTP, check and try again');
        }
      });
  };

  const verifyOtp = () => {
    const confirmationResult = window.confirmationResult;
    confirmationResult
      .confirm(otp)
      .then((result) => {
        const user = result.user;
        user.getIdToken().then((idToken) => {
          authenticateWithBackend(idToken, user.phoneNumber);
        });
        console.log(otp, 'otp');
      })
      . catch( (error) =>{
        if (error.response) {
          console.log(error, 'error');
          console.error("Backend responded with:", error.response.data);
          toast.error('Error: ' + error.response.data.message);
        } else {
          //console.error("Error during authentication:", error);
          toast.error('You must fill in the correct OTP');
        }
    })
  };

  const ResendOtp = () => {
    setMinutes(0);
    setSeconds(20);
    sendOtp();
  }
  /*const handleResendOTP = () => {
    setOtp(""); // Clear the code when resending OTP
    setResendOtp(true);
    sendOtp();

    let countdown = 49; // Start countdown from 49
    const countdownInterval = setInterval(() => {
      countdown -= 1;
      setCountdown(countdown);

      if (countdown === 0) {
        clearInterval(countdownInterval);
        setResendOtp(false);
      }
    }, 2000); // Adjust interval duration if needed
  };*/


  const contextValue = useMemo(() => ({ sendOtp }), [sendOtp]);

    const authenticateWithBackend = async (idToken, phoneNumber) => {
    try {
      const response = await axios.post(
        //"http://localhost:3001/auth/authenticate",
        "https://hyggexbackend-d2b0.onrender.com/api/v1/auth/authenticate",
        {
          idToken,
          phoneNumber,
        }
      );
      if (response.data.success) {
        if (response.data.status === "loggedIn") {
          //alert("Logged In Successfully!");
          toast.success('successfully logged in');
          window.location.href = "/";
        } else if (response.data.status === "newUser") {
          setStatus("newUser");
          setUid(response.data.uid);  // <-- Store the UID here
          //alert('You cannot Sign in, Sign up first.')
          toast.error('You cannot login, sign Up first')
        }
      }
    } catch (error) {
      if (error.response) {
        console.error("Backend responded with:", error.response.data);
      } else {
      console.error("Error during authentication:", error);
    }
  }

  };


  const register = async () => {
    try {
      const response = await axios.post("https://hyggexbackend-d2b0.onrender.com/api/v1/auth/register", {
        uid,  // <-- Send the UID here http://localhost:3001/auth/register
        name,
        email,
        phoneNumber,
        location,
        selectedGrade,
        prepCourse,
        schoolStudent
      });
      if (response.data.success) {
        //alert("Registered Successfully!");
        toast.success("Registered Successfully!")
        window.location.href="/SignIn"
      }
    } catch (error) {
      if (error.response) {
        console.error("Backend responded with:", error.response.data);
        //alert('registration failed')
        toast.error(`registration failed`)
      } else {
        console.error("Error during authentication:", error);
        alert('error during authentication')
        toast.error('error during authentication')
      }
    }

  };

  return (

    <div className="pb-[20px] flex flex-col justify-center items-center">
      {status === "initial" && (
        <>

          <div className="w-[100%] items-center">
            {/*===========Enter phone number form==============*/}
            <div id='first-div' className="my-5 text-center">
                <h1 id="h1" className="text-blue-600 font-bold pb-5">Login</h1>
            </div>

              <div className='flex flex-row justify-center'>
                <img src={circle1} alt="dotted circle" className='w-6 h-6' />
                <span className='text-blue-600'>--------------------------</span>
                <img className='w-6 h-6' src={circle} alt="circle" />
              </div>

              <div className="flex flex-row justify-evenly mt-2 md:mt-2 text-gray-600" id='second-div'>
                <span className='text-xs mr-[4rem] text-blue-600 font-medium'>Enter Number</span>
                <span className='text-xs ml-6'>Verify</span>
              </div>
              <p
                className="my-8 sm:my-8 text-gray-600 text-xs text-center"
                id='profile-details'
              >
                Enter your mobile number to continue your journey
              </p>
            <div className="sm:w-[95%] w-[80%] sm:px-12 px-6 mx-auto">
              <label htmlFor="mobile number" className="text-xs font-semibold text-blue-600 leading-7">Mobile Number</label>
              <div className="sm:mb-8 mb-12 h-12">
                <PhoneInput
                  inputProps={{
                    'required': true,
                    name: 'phonenumber'
                  }}
                  placeholder='Enter your mobile number'
                  enableSearch
                  required={true}
                  inputStyle={{ paddingTop: "0.5rem", borderRadius:"10px",border:"1px solid grey", paddingBottom: "0.5rem", width: "100%", height: "42px" }}
                  country={'in'}
                  value={phoneNumber}
                  onChange={(phoneNumber)=>setPhoneNumber("+" + phoneNumber)}
                />
              </div>
              <button onClick={sendOtp}
                className="mt-4 flex justify-center text-xs m-auto md:mt-4 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                  Continue
              </button>
                  {/*isOtpExpired && (
                      <div>
                        <p>OTP has expired. Resend OTP?</p>
                        <button onClick={handleResendOTP}>Resend OTP</button>
                      </div>
                    )*/}

                    {/*!isOtpExpired && <p>Time remaining: {countdown} seconds</p>*/}
                  <div id="recaptcha-container"></div>
                   <input type="text" />
              </div>
          </div>
        </>

      )}{/*==============OTP form==============*/}
      {status === "otpSent" && (
        <>

          <div id='first-div' className="my-5 text-center">
            <h1 id="h1" className="text-blue-600 font-bold pb-5">LogIn</h1>
          </div>

          <div className='flex flex-row justify-center'>
            <img src={circle2} alt="dotted circle" className='w-6 h-6' />
            <span className='text-blue-600'>--------------------------</span>
            <img className='w-6 h-6' src={circle} alt="circle" />
          </div>

          <div className="flex flex-row justify-evenly mb-4 mt-2 md:mt-2 text-gray-600" id='second-div'>
            <span className='text-xs mr-16 text-blue-600 font-medium'>Enter Number</span>
            <span className='text-xs ml-16'>Verify</span>
          </div>
          <div className='my-6'>
            <h2 className="text-gray-500 text-xs text-center">Enter the OPT sent to</h2>
            <p className="text-xs text-blue-600 leading-7 text-center">{phoneNumber}</p>
          </div>

          <div className='flex flex-col text-start w-[]'>
            <h3 className="text-gray-500 text-[0.8rem] mb-0 text-left">Enter OTP</h3>
            <input
              type="text"
              name="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter your OTP"
              className="px-3 py-3 border rounded-md w-[270px] sm:w-[300px] mb-2 text-[0.8rem] h-10 ms:h-8"
            />
            <div id="recaptcha-container"></div>
            <div className='flex justify-end items-end'>
              {/*<span className='text-[0.8rem] text-gray-500'>Resend OTP in: </span>
              <button
                onClick=""
                className={`text-blue-600 text-[0.8rem] text-right ${resendOtp ? 'pointer-events-none' : ''}`}
              >
                {countdown} Seconds
              </button>*/}
              <div className="countdown-text">
                {seconds > 0 || minutes > 0 ? (
                  <p>Resend OTP in: {minutes < 10 ? `0${minutes}` : minutes}:
                    {seconds < 10 ? `0${seconds}` : seconds}
                  </p>
                ) : (
                  <p>Resend OTP in: ?</p>
                )}

                <button
                  disabled={seconds > 0 || minutes > 0}
                  style={{color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#4a90e2"}}
                  onClick={ResendOtp}
                >
                  Resend OTP
                </button>
            </div>
            </div>

          </div>

          <button onClick={verifyOtp}
            className="my-8 flex justify-center text-xs m-auto md:mt-8 mb-6 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-600"
          >Verify OTP</button>
        </>
      )}
      {status === "newUser" && (/*==============registration form=============*/
        <>
          <div>
            <div id='first-div' className="my-5 text-center">
            <h1 id="h1" className="text-blue-600 font-bold pb-5">Sign Up</h1>
            <p id="p1" className="text-gray-600 text-xs">Enter profile details</p>
          </div>

          <div className='flex flex-row justify-center'>
            <img src={circle1} alt="dotted circle" className='w-6 h-6' />
            <span className='text-blue-600'>--------------------------</span>
            <img className='w-6 h-6' src={circle} alt="circle" />
          </div>

          <div className="flex flex-row justify-evenly mt-2 md:mt-2 text-gray-600" id='second-div'>
            <span className='text-xs mx-4 text-blue-600 font-medium'>Enter Number</span>
            <span className='text-xs mx-4'>Basic details</span>
          </div>
          </div>
          <div id='form' className="text-xs text-gray-600 max-w-screen-sm px-10 py-5">
              <label htmlFor="name" className="text-xs text-gray-600 leading-7">Name <small className='text-red-500'>*</small></label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full py-2 px-3 border rounded-md mb-4 text-xs h-10 md:h-8 xs:h-12"
              />

              <label htmlFor="phoneNumber" className="text-xs text-gray-600 leading-7">Phone Number <small className='text-red-500'>*</small></label>
              <input
                type="text"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your mobile number"
                className="w-full py-2 px-3 border rounded-md mb-4 text-xs h-10 md:h-8 xs:h-12"
              />

              <label htmlFor="email" className="text-xs text-gray-600 leading-7">Email Address<small className='text-red-500'>*</small></label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Samchristy98879@gmail.com"
                className="w-full py-2 px-3 border rounded-md mb-4 text-xs h-10 md:h-8 xs:h-12"
              />

              <label htmlFor="school" className="text-xs text-gray-600">Are you in school? <small className='text-red-500'>*</small></label>
              <select name="school" id="select1" className="w-full py-2 px-3 border rounded-md mb-4 text-xs h-10 md:h-8 xs:h-12">
                <option value=""></option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>

              <label htmlFor="schoolStudent" className="text-xs text-gray-600">School Student <small className='text-red-500'>*</small></label>
              <select
                name="schoolStudent"
                id="student"
                value={schoolStudent}
                onChange={(e)=>setSchoolStudent(e.target.value)}
                className="w-full py-2 px-3 border rounded-md mb-4 text-xs h-10 md:h-8 xs:h-12">
                <option value=""></option>
                <option value="true">true</option>
                <option value="false">false</option>
              </select>

              <label htmlFor="PrepCourse" className="text-xs text-gray-600">Are you preparing for competitive exams? <small className='text-red-500'>*</small></label>
              <select
                name="prepCourse"
                id="select"
                value={prepCourse}
                onChange={(e)=>setPrepCourse(e.target.value)}
                className="w-full py-2 text-black px-3 border rounded-md mb-4 text-xs h-10 md:h-8 xs:h-12"
                >
                <option key="" value=""></option>
                  {course.map((courses) => (
                  <option key={courses._id} value={courses._id}>
                    {courses.name}
                  </option>
                ))}
              </select>

              <div className='w-full flex flex-row justify-between items-center'>
                <div>
                  <label htmlFor="location" className="text-xs text-gray-600">Location <small className='text-red-500'>*</small></label>
                  <select
                    name="location"
                    value={location}
                    onChange={(e)=>setLocation(e.target.value)}
                    id="select1"
                    className="w-full py-2 px-3 border rounded-md mb-4 text-xs h-10 md:h-8 xs:h-12">
                    <option value=""></option>
                    <option value="Chennai">Chennai</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhai</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="grade" className="text-xs text-gray-600">Grade <small className='text-red-500'>*</small></label>
                  <select
                    name="grade"
                    id="select1"
                    value={selectedGrade}
                    onChange={(e)=>setSelectedGrade(e.target.value)}
                    className="w-full py-2 text-black px-3 border rounded-md mb-4 text-xs h-10 md:h-8 xs:h-12"
                  >
                    <option key="" value=""></option>
                      {grade.map((grades) => (
                      <option key={grades._id} value={grades._id}>
                        {grades.grade}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button id="submit" onClick={register} className="my-8 flex justify-center text-xs m-auto md:mt-8 mb-6 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                Continue
              </button>
            </div>
        </>
      )}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>

  );
}

export default Auth;