import React, {useEffect, useRef, useState} from 'react'
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { circle, circle1, circle2, logo1, slide1, slide2, slide3 } from '../../constants/url'

import { Link } from 'react-router-dom'
import PhoneInput from 'react-phone-input-2'
import { auth as firebaseAuth } from "../auth/firebaseconfig";

//import { auth as firebaseAuth } from "../auth/firebaseconfig";



const SignIn = () => {

  const [phonenumber, setPhoneNumber] = useState("");
  const [OTP, setOTP] = useState("");
  const [OTPForm, setOTPForm] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTextIndex, setActiveTextIndex] = useState(0);
  const recaptchaVerifierRef = useRef(null);


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      setActiveTextIndex((prevTextIndex) => (prevTextIndex + 1) % imageText.length);
    }, 3000);

    clearInterval(interval);


  }, []);
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
      phonenumber,
      recaptchaVerifierRef.current
    ) // <-- use firebaseAuth here
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        alert(`otp sent`)
        setOTPForm(true);
      })
      .catch((error) => {
        if (error.response) {
          console.error("Backend responded with:", error.response.data);
      } else {
          console.error("Error sending OTP:", error);
          alert('Enter your phone number');
    } });
  };



  const verifyOtp = () => {
    const confirmationResult = window.confirmationResult;
    confirmationResult
      .confirm(OTP)
      .then((result) => {
        const user = result.user;
        user.getIdToken().then((idToken) => {
          authenticateWithBackend(idToken, user.phonenumber);
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

  const images = [`${slide1}`, `${slide2}`, `${slide3}`];
  const imageText = [
    "Our flagship adaptive learning system that resonates with each student's unique learning pattern.",
    "Tailored guidiance to help navigate academic intricacies and diverse challenges.",
    "we ground every Hyggex offering in rigorous scientific research, ensuring it's effectiveness and trustworthiness. Although we cater primarily to Indian's diverse audience, our vision has a global reach",
  ];

  return (

      <div className='flex flex-col justify-center sm:flex-row sm:justify-between' id='container'>
        <div className="bg-[#DFEAFF] sm:w-1/2 bg-cover bg-center relative pb-10 sm:order-1 order-2" id='card1'>
          <img src={logo1} alt="logo" className="ml-8 mb-6 w-32 py-8" id='logo' />

          <div id='inner-card' className=''>

            <img src={images[activeIndex]} alt="carousel" className="w-60 h-60 mx-auto" id='slider' />

            <div className="absolute bottom-10 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 mt-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-6 h-1 ${activeIndex === index ? 'bg-blue-500' : 'bg-white'}`}
                  onClick={() => setActiveIndex(index)}
                ></button>

              ))}

            </div>
            <div className="text-center text-gray-700 mb-10">
              <p id='imagetxt' className="text-xs px-8 leading-5">{imageText[activeTextIndex]}</p>
            </div>
          </div>

        </div>

        <div className="sm:w-1/2 sm:order-2 order-1 py-8 px-10 m-auto flex flex-col" id='card2'>
          {/*====================profile details===============*/}
        {OTPForm ? (


           <div className='m-auto'>{/*===============OTP===============*/}
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
                <h2 className="text-gray-500 text-xs text-center">Enter OPT sent to</h2>
                <p className="text-xs text-blue-600 leading-7 text-center">+91  9876543299</p>
              </div>

              <h3 className="text-gray-500 text-xs ml-4 md:ml-4 mb-0">Enter OTP</h3>
              <div className="flex flex-row justify-center items-center">
                <input type="tel" name="otp" value={OTP} onChange={(e)=>setOTP(e.target.value)} className="mx-3 w-10 h-10 text-center p-2 border border-gray-300 rounded-md"/>
                <input type="tel" name="otp" value={OTP} onChange={(e)=>setOTP(e.target.value)} className="mx-3 w-10 h-10 text-center p-2 border border-gray-300 rounded-md"/>
                <input type="tel" name="otp" value={OTP} onChange={(e)=>setOTP(e.target.value)} className="mx-3 w-10 h-10 text-center p-2 border border-gray-300 rounded-md"/>
                <input type="tel" name="otp" value={OTP} onChange={(e)=>setOTP(e.target.value)} className="mx-3 w-10 h-10 text-center p-2 border border-gray-300 rounded-md"/>
              </div>
              <p className='text-gray-500 float-right pr-4 text-xs leading-7 pb-8'>Resend OTP in: <span className="text-xs text-blue-600 leading-7">20 seconds</span></p>

              <div className='flex justify-center items-center my-16 mx-auto'>
                <button onClick={verifyOtp} className="w-24 text-center text-xs bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                Login
              </button>
              </div>
              <div className='my-4'>
                <span id="link-span" className="text-gray-500 flex items-center justify-center text-center mx-auto text-xs">
                  Already have an account?  <Link id="link-to-register" to="/SignUp" className="text-center no-underline text-xs text-blue-600 font-medium"> Sign Up</Link>
                </span><br />
              </div>
            </div>

            ) : (
            //====================Login form=======================
            <div id='login'>
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

              <form className="text-xs text-gray-600 max-w-screen-sm px-10 py-5">
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
                    value={phonenumber}
                    onChange={setPhoneNumber}
                  />
                </div>

                <button type="submit" id="submit" onClick={sendOtp} className="my-8 flex justify-center text-xs m-auto md:mt-8 mb-6 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                  Continue
                </button>
                <div id='recaptcha-container'></div>
                <span id="link-span" className="text-gray-600 flex items-center justify-center text-center mx-auto text-xs">
                  Already have an account?  <Link id="link-to-register" to="/SignUp" className="text-center no-underline text-xs text-blue-600 font-medium">Sign Up</Link>
                </span><br />
              </form>
            </div>

          )}

        </div>

      </div>
    )
}

export default SignIn

