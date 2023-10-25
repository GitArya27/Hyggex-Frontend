//import './sign.css'

import React, {useEffect, useState} from 'react'
import { logo1, slide1, slide2, slide3 } from '../../constants/url'

import { Link } from 'react-router-dom'

const SignUp = () => {


  const images = [`${slide1}`, `${slide2}`, `${slide3}`];

  const imageText = [
    "Our flagship adaptive learning system that resonates with each student's unique learning pattern.",
    "Tailored guidiance to help navigate academic intricacies and diverse challenges.",
    "we ground every Hyggex offering in rigorous scientific research, ensuring it's effectiveness and trustworthiness. Although we cater primarily to Indian's diverse audience, our vision has a global reach",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTextIndex, setActiveTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      setActiveTextIndex((prevTextIndex) => (prevTextIndex + 1) % imageText.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);


    return (
      <div className='flex flex-col justify-center sm:flex-row' id='container'>
        <div className="bg-[#DFEAFF] sm:w-1/2 bg-cover bg-center relative pb-10" id='card1'>
          <img src={logo1} alt="logo" className="ml-8 mb-6 w-32 py-8" id='logo' />
          <div id='inner-card' className=''>

            <img src={images[activeIndex]} alt="carousel" className="w-60 h-60 mx-auto" id='slider' />

            <div className="absolute bottom-10 sm:bottom-40 left-1/2 transform -translate-x-1/2 flex space-x-2 mt-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-6 h-1 ${activeIndex === index ? 'bg-blue-500' : 'bg-white'}`}
                  onClick={() => setActiveIndex(index)}
                ></button>

              ))}

            </div>
            <div className="text-center text-gray-700 mt-2 mb-10">
              <p id='imagetxt' className="text-xs px-8 leading-5">{imageText[activeTextIndex]}</p>
            </div>
          </div>
        </div>

        <div className="sm:w-1/2 py-8 px-10 m-auto flex flex-col" id='card2'>
          <div id='first-div' className="my-5 text-center">
            <h1 id="h1" className="text-blue-600 font-medium pb-5">Sign Up</h1>
            <p id="p1" className="text-gray-600 text-xs">Enter profile details</p>
          </div>

          <div className="flex flex-row justify-center mt-4 md:mt-6 text-gray-600" id='second-div'>
            <span className='text-xs mx-4 text-blue-600 font-medium'>Enter Number</span>
            <span className='text-xs mx-4'>Enter basic details</span>
          </div>

          {/*<p className="mt-4 md:mt-6 text-gray-600 text-xs text-center" id='profile-details'>We will need your profile details to give you a better experience</p>*/}
          <form action="" id='form' className="text-xs text-gray-600 max-w-screen-sm px-20 py-5">
            <label htmlFor="email" className="text-xs text-gray-600">Email Address <small>*</small></label>
            <input type="email" name="email" placeholder="Samchristy98879@gmail.com" className="w-full py-2 px-3 border rounded-md mb-6 text-xs" />

            <label htmlFor="shool" className="text-xs text-gray-600">Are you in school? <small>*</small></label>
            <select name="location" id="select1" className="w-full py-2 px-3 border rounded-md mb-6 text-xs">
              <option value=""></option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <label htmlFor="exam" className="text-xs text-gray-600">Are you preparing for competitive exams? <small>*</small></label>
            <select name="location" id="select1" className="w-full py-2 px-3 border rounded-md mb-6 text-xs">
              <option value=""></option>
              <option value="yes">Yes</option>
              <option value="CTA">CTA</option>
              <option value="CLAT">CLAT</option>
            </select>

            <div id="select-container" className="flex items-center justify-between">
              <div>
                <label htmlFor="location" className="text-xs text-gray-600">Location<small className="text-red-500">*</small></label>
                <select name="location" id="select1" className="w-full py-2 px-3 border rounded-md">
                  <option value=""></option>
                  <option value="Chennai">Chennai</option>
                  <option value="Mubi">Mubi</option>
                  <option value="Delhi">Delhi</option>
                </select>
              </div>
              <div>
                <label htmlFor="grade" className="text-xs text-gray-600">Grade<small>*</small></label>
                <select name="grade" id="select2" className="w-30 py-2 px-3 text-xs border mx-3 rounded-md">
                  <option value=""></option>
                  <option value="Grade1">Grade1</option>
                  <option value="Grade2">Grade2</option>
                  <option value="Grade3">Grade3</option>
                </select>
              </div>
            </div>
            <button type="submit" id="submit"  className="my-12 flex justify-center text-xs m-auto md:mt-12 mb-6 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
              Continue
            </button>

          </form>

          <span id="link-span" className="text-gray-600 text-center mx-auto text-xs">
            Already have an account? <Link id="link-to-register" to="/signIn" className="text-center no-underline mx-auto text-xs text-blue-500">Login</Link>
          </span><br />
        </div>

      </div>
    )
}

export default SignUp
