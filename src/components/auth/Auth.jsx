import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { circle, circle1, circle2 } from "../../constants/url";
import { useEffect, useMemo, useRef, useState } from "react";

import {Link} from 'react-router-dom'
import PhoneInput from 'react-phone-input-2'
import React from "react";
import axios from "axios";
import { auth as firebaseAuth } from "./firebaseconfig"; // This is your custom firebase auth instance

function Auth() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("initial"); // initial, otpSent, newUser
  const recaptchaVerifierRef = useRef(null);
  const [uid, setUid] = useState(null);


  useEffect(() => {
    const recaptchaVerifierInstance = new RecaptchaVerifier(
      firebaseAuth,
      "recaptcha-container",
      {
        size: "invisible"
      }
    );

    recaptchaVerifierRef.current = recaptchaVerifierInstance;

    return () => {
      if (recaptchaVerifierRef.current) {
        recaptchaVerifierRef.current.clear(); // Cleanup on component unmount
      }
    };
  }, []);

  const sendOtp = () => {
    signInWithPhoneNumber(
      firebaseAuth,
      phoneNumber,
      recaptchaVerifierRef.current
    ) // <-- use firebaseAuth here
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setStatus("otpSent");
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          console.error("Backend responded with:", error.response.data);
      } else {
          console.error("Error sending OTP:", error);
    } });
  };

  const verifyOtp = () => {
    const confirmationResult = window.confirmationResult;
    confirmationResult
      .confirm(code)
      .then((result) => {
        const user = result.user;
        user.getIdToken().then((idToken) => {
          authenticateWithBackend(idToken, user.phoneNumber);
        });
      })
      . catch( (error) =>{
        if (error.response) {
            console.error("Backend responded with:", error.response.data);
        } else {
            console.error("Error during authentication:", error);
        }
    })
  };

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
          alert("Logged In Successfully!");
          window.location.href = "/";
        } else if (response.data.status === "newUser") {
          setStatus("newUser");
          setUid(response.data.uid);  // <-- Store the UID here
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
        grade,


      });
      if (response.data.success) {
        alert("Registered Successfully!");
        window.location.href="/SignForm"
      }
    } catch (error) {
      if (error.response) {
          console.error("Backend responded with:", error.response.data);
      } else {
          console.error("Error during authentication:", error);
      }
    }

  };

  return (

    <div className="pb-[40px]">
      {status === "initial" && (
        <>
          <div>
            {/*<input
              type="text"
              placeholder="Phone Numbe"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button onClick={sendOtp}>Continue</button>
            <div id="recaptcha-container"></div>*/}
            <div id='first-div' className="my-5 text-center">
                <h1 id="h1" className="text-blue-600 font-bold pb-5">Login</h1>
            </div>

              <div className='flex flex-row justify-center'>
                <img src={circle1} alt="dotted circle" className='w-6 h-6' />
                <span className='text-blue-600'>--------------------------</span>
                <img className='w-6 h-6' src={circle} alt="circle" />
              </div>

              <div className="flex flex-row justify-evenly mt-2 md:mt-2 text-gray-600" id='second-div'>
                <span className='text-xs mx-4 text-blue-600 font-medium'>Enter Number</span>
                <span className='text-xs mx-4'>Verify</span>
              </div>
              <p
                className="my-8 md:my-8 text-gray-600 text-xs text-center"
                id='profile-details'
              >
                Enter your name and mobile number to continue your journey
              </p>
            <div className="">
              <label htmlFor="mobile number" className="text-xs font-semibold text-blue-600 leading-7">Mobile Number</label>
              <div className="w-full md:mb-8 mb-12 h-12">
                <PhoneInput
                  inputProps={{
                    'required': true,
                    name: 'phonenumber'
                  }}
                  placeholder='Enter your mobile number'
                  enableSearch
                  required={true}
                  inputStyle={{ paddingTop: "1rem", paddingBottom: "1rem", width: "100%", height: "46px" }}
                  country={'in'}
                  value={phoneNumber}
                  onChange={(phoneNumber)=>setPhoneNumber("+" + phoneNumber)}
                />
              </div>
              <button onClick={sendOtp}
                className="my-8 flex justify-center text-xs m-auto md:mt-8 mb-6 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                  Continue
              </button>

              <div id="recaptcha-container"></div>

            </div>
          </div>
        </>

      )}
      {status === "otpSent" && (
        <>
          {/*<input
            type="text"
            placeholder="Enter OTP"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />*/}

          <div id='first-div' className="my-5 text-center">
                <h1 id="h1" className="text-blue-600 font-bold pb-5">LogIn</h1>
              </div>

              <div className='flex flex-row justify-center'>
                <img src={circle2} alt="dotted circle" className='w-6 h-6' />
                <span className='text-blue-600'>--------------------------</span>
                <img className='w-6 h-6' src={circle} alt="circle" />
              </div>

              <div className="flex flex-row justify-evenly mb-10 mt-2 md:mt-2 text-gray-600" id='second-div'>
                <span className='text-xs mx-4 text-blue-600 font-medium'>Enter Number</span>
                <span className='text-xs mx-4'>Verify</span>
              </div>
              <div className='my-6'>
                <h2 className="text-gray-500 text-xs text-center">Enter the OPT sent to</h2>
            <p className="text-xs text-blue-600 leading-7 text-center">{phoneNumber}</p>
              </div>

          <h3 className="text-gray-500 text-xs ml-4 md:ml-4 mb-0">Enter OTP</h3>
          <input
            type="text"
            name="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter your OTP"
            className="w-full py-2 px-3 border rounded-md mb-4 text-xs h-10 md:h-8 xs:h-12"
          />

          <button onClick={verifyOtp}
            className="my-8 flex justify-center text-xs m-auto md:mt-8 mb-6 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-600"
          >Verify OTP</button>
        </>
      )}
      {status === "newUser" && (
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

              <label htmlFor="email" className="text-xs text-gray-600 leading-7">Email Address<small className='text-red-500'>*</small></label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Samchristy98879@gmail.com"
                className="w-full py-2 px-3 border rounded-md mb-4 text-xs h-10 md:h-8 xs:h-12"
              />

              <label htmlFor="shool" className="text-xs text-gray-600">Are you in school? <small className='text-red-500'>*</small></label>
              <select name="location" id="select1" className="w-full py-2 px-3 border rounded-md mb-4 text-xs h-10 md:h-8 xs:h-12">
                <option value=""></option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>

              <label htmlFor="exam" className="text-xs text-gray-600">Are you preparing for competitive exams? <small className='text-red-500'>*</small></label>
              <select name="location" id="select1" className="w-full py-2 px-3 border rounded-md mb-4 text-xs h-10 md:h-8 xs:h-12">
                <option value=""></option>
                <option value="yes">Yes</option>
                <option value="CTA">CTA</option>
                <option value="CLAT">CLAT</option>
              </select>

              <div className='w-full flex flex-row justify-between items-center'>
                <div>
                  <label htmlFor="shool" className="text-xs text-gray-600">Location <small className='text-red-500'>*</small></label>
                  <select name="location" id="select1" className="w-full py-2 px-3 border rounded-md mb-4 text-xs h-10 md:h-8 xs:h-12">
                    <option value=""></option>
                    <option value="Chennai">Chennai</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhai</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="exam" className="text-xs text-gray-600">Grade <small className='text-red-500'>*</small></label>
                  <select name="location" id="select1" className="w-full py-2 px-3 border rounded-md mb-4 text-xs h-10 md:h-8 xs:h-12">
                    <option value=""></option>
                    <option value="Grade1">Grade1</option>
                    <option value="Grade2">Grade2</option>
                    <option value="Grade3">Grade3</option>
                  </select>
                </div>
              </div>

              <button id="submit" onClick={register} className="my-8 flex justify-center text-xs m-auto md:mt-8 mb-6 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                Continue
              </button>
              <span id="link-span" className="text-gray-600 flex items-center justify-center text-center mx-auto text-xs">
              Already have an account?  <Link id="link-to-register" to="/SignIn" className="text-center no-underline text-xs text-blue-600 font-medium">  Login</Link>
            </span><br />
            </div>
          {/*<input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button onClick={register}>Register</button>*/}
        </>
      )}

    </div>

  );
}

export default Auth;