//import './sign.css'

import 'react-phone-input-2/lib/style.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import OTPInput, { ResendOTP } from "otp-input-react";
import React, {useEffect, useState} from 'react'
import { circle, circle1, circle2, logo1, slide1, slide2, slide3 } from '../../constants/url'

import { Link } from 'react-router-dom'
import OtpInput from './otpinput';
import PhoneInput from 'react-phone-input-2'
import imageText from '../signIn/signIn'

const SignUp = () => {

  const images = [`${slide1}`, `${slide2}`, `${slide3}`];
  const imageText = [
    "Our flagship adaptive learning system that resonates with each student's unique learning pattern.",
    "Tailored guidiance to help navigate academic intricacies and diverse challenges.",
    "we ground every Hyggex offering in rigorous scientific research, ensuring it's effectiveness and trustworthiness. Although we cater primarily to Indian's diverse audience, our vision has a global reach",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTextIndex, setActiveTextIndex] = useState(0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [OTP, setOTP] = useState("");
  const [showOTPForm, setShowOTPForm] = useState(false);
  const [showDetailForm, setShowDetailForm] = useState(false);

  const handleSubmit =(e)=>{
    e.preventDefault();

    if (name !="" && phonenumber !="") {
      setShowOTPForm(true);
    } else {
      alert(`Fill in your details.`)
    }
  }



  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      setActiveTextIndex((prevTextIndex) => (prevTextIndex + 1) % imageText.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);





  return (

      <div className='flex flex-col justify-center sm:flex-row sm:justify-between' id='container'>
        <div className="bg-[#DFEAFF] sm:w-1/2 bg-cover bg-center relative pb-10 sm:order-1 order-2" id='card1'>
          <img src={logo1} alt="logo" className="ml-8 mb-6 w-32 py-8" id='logo' />
          <div className='mx-10'>
            <Carousel
              autoPlay
              infiniteLoop={true}
              dynamicHeight={false}
              showThumbs={false}
              showArrows={false}
              showStatus={false}
              interval={4000}
              axis='horizontal'
            >
              <div>
                <img src={slide1} className='w-60 h-60' />
                <p className='text-xs mb-10'>
                  Our flagship adaptive learning system that resonates with each student's
                  unique learning pattern.
                </p>
              </div>
              <div>
                <img src={slide2} className='w-60 h-60' />
                <p className="text-xs mb-10">
                  Tailored guidiance to help navigate academic intricacies and diverse challenges.
                </p>
              </div>
              <div>
                <img src={slide3} className='w-60 h-60' />
                <p className="text-xs mb-10">
                  we ground every Hyggex offering in rigorous scientific research, ensuring it's
                  effectiveness and trustworthiness. Although we cater primarily to Indian's diverse
                  audience, our vision has a global reach
                </p>
              </div>
            </Carousel>
          </div>

        </div>

        <div className="sm:w-1/2 sm:order-2 order-1 py-8 px-10 m-auto flex flex-col" id='card2'>
          {/*====================OTP form===============*/}
          {showOTPForm ? (
            <OtpInput setShowDetailForm={setShowDetailForm}/>


            //===============profile details===============
          ) : showDetailForm ? (
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
                <span className='text-xs mx-4'>Enter basic details</span>
              </div>

              <form onSubmit={handleSubmit} action="" id='form' className="text-xs text-gray-600 max-w-screen-sm px-10 py-5">
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

                <button type="submit" id="submit" className="my-8 flex justify-center text-xs m-auto md:mt-8 mb-6 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                  Continue
                </button>

              </form>

              <span id="link-span" className="text-gray-600 flex items-center justify-center text-center mx-auto text-xs">
                Already have an account?  <Link id="link-to-register" to="/signIn" className="text-center no-underline text-xs text-blue-600 font-medium">  Login</Link>
              </span><br />

            </div>

          ):(


              //basic details form
            <div>
              <div id='first-div' className="my-5 text-center">
                <h1 id="h1" className="text-blue-600 font-bold pb-5">Sign Up</h1>
                <p id="p1" className="text-gray-600 text-xs">Let's get started</p>
              </div>

              <div className='flex flex-row justify-center'>
                <img src={circle1} alt="dotted circle" className='w-6 h-6' />
                <span className='text-blue-600'>--------------------------</span>
                <img className='w-6 h-6' src={circle} alt="circle" />
              </div>

              <div className="flex flex-row justify-evenly mt-2 md:mt-2 text-gray-600" id='second-div'>
                <span className='text-xs mx-4 text-blue-600 font-medium'>Enter Number</span>
                <span className='text-xs mx-4'>Enter basic details</span>
              </div>

              <p
                className="my-8 md:my-8 text-gray-600 text-xs text-center"
                id='profile-details'
              >
                Enter your name and mobile number to continue your journey
              </p>

              <form onSubmit={handleSubmit} action="" id='form' className="text-xs text-gray-600 max-w-screen-sm px-10 py-5">
                <label htmlFor="name" className="text-xs font-semibold text-blue-600 leading-7">Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full py-2 px-3 border rounded-md mb-4 text-xs h-10 md:h-8 xs:h-12"
                />

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

                <span id="link-span" className="text-gray-600 text-center mx-auto text-xs">
                  By Signing Up, you agree to
                  <a href="#" className="text-center no-underline mx-auto text-xs text-blue-500"> terms of use</a> and
                  <a href="#" id="lin-to-privacy"
                    className="text-center no-underline mx-auto text-xs text-blue-600"> privacy statements.
                  </a>
                </span>

                <button type="submit" id="submit" className="my-8 flex justify-center text-xs m-auto md:mt-8 mb-6 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                  Continue
                </button>

              </form>

              <span id="link-span" className="text-gray-600 flex items-center justify-center text-center mx-auto text-xs">
                Already have an account?  <Link id="link-to-register" to="/signIn" className="text-center no-underline text-xs text-blue-600 font-medium">  Login</Link>
              </span><br />

            </div>

          )}

        </div>

      </div>
    )
}

export default SignUp

