import './sign.css'

import React, {useEffect, useState} from 'react'

import { Link } from 'react-router-dom'
import { Logo } from '../../constants/url'

const SignUp = () => {
    const login1 = "https://res.cloudinary.com/dbnxbly1r/image/upload/v1698181188/login_1_mjpshn.svg";
    const login2 = "https://res.cloudinary.com/dbnxbly1r/image/upload/v1698181349/login_2_zmmwrs.svg";
    const login3 = "https://res.cloudinary.com/dbnxbly1r/image/upload/v1698181445/login_3_y0ib97.svg";
    const logo = "https://res.cloudinary.com/dbnxbly1r/image/upload/v1698181752/Component_9_dqkwgp.png";

  const images = [`${login1}`, `${login2}`, `${login3}`];

  const imageText = [
    "Our flagship adaptive learning system that resonates with each student's unique learning pattern.",
    'Text for image 2',
    'Text for image 3',
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTextIndex, setActiveTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      setActiveTextIndex((prevTextIndex) => (prevTextIndex + 1) % imageText.length);
    }, 3000); // changes every 3 seconds

    return () => clearInterval(interval);
  }, []);


    return (
        <div className='flex flex-col justify-center sm:flex-row' id='container'>
            <div className="bg-[#DFEAFF] sm:w-1/2 bg-cover bg-center relative" id='card1'>
                <img src={logo} alt="logo" className="ml-8 mb-6 w-32 py-8" id='logo' />
                <div id='inner-card'>

            <img src={images[activeIndex]} alt="carousel" className="max-w-xs w-full mx-auto" id='carousel' />

                  <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 mt-2">

                    {images.map((_, index) => (
                      <button
                        key={index}
                        className={`w-8 h-1 bg-white-300 ${activeIndex === index ? 'bg-blue-500' : ''}`}
                        onClick={() => setActiveIndex(index)}
                      ></button>

                    ))}
                  </div>
                    <div className="text-center text-gray-700 mt-2">
                      <p id='imagetxt' className="text-xs px-8 leading-6">{imageText[activeTextIndex]}</p>
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

                <p className="mt-4 md:mt-6 text-gray-600 text-xs text-center" id='profile-details'>We will need your profile details to give you a better experience</p>

                <form action="" id='form' className="text-xs text-gray-600 max-w-screen-sm px-20 py-5">
                    <label htmlFor="name" className="text-xs text-gray-600">Name <small>*</small></label>
                    <input type="text" name="name" placeholder="Sam Christy" className="w-full py-2 px-3 border rounded-md mb-6 text-xs" />

                    <label htmlFor="email" className="text-xs text-gray-600">Email<small>*</small></label>
                    <input type="email" name="email" placeholder="samchristy98879@gmail.com" className="w-full py-2 px-3 border rounded-md mb-6 text-xs" />

            <div id="select-container" className="flex items-center justify-between">
              <div>
                <label htmlFor="location" className="text-xs text-gray-600">Location<small className="text-red-500">*</small></label>
                <select name="location" id="select1" className="w-full py-2 px-3 border rounded-md">
                  <option value="india">India</option>
                  <option value="usa">USA</option>
                  <option value="afghanistan">Afghanistan</option>
                </select>
              </div>
              <div>
                <label htmlFor="grade" className="text-xs text-gray-600">Grade<small>*</small></label>
                <select name="grade" id="select2" className="w-full py-2 px-3 text-xs border mx-3 rounded-md">
                  <option value="india">India</option>
                  <option value="usa">USA</option>
                  <option value="afghanistan">Afghanistan</option>
                </select>
              </div>
          </div>
          <button type="submit" id="submit"  className="my-12 flex justify-center text-xs m-auto md:mt-12 mb-6 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
            Continue
          </button>


          </form>
          <span id="link-span" className="text-gray-600 text-center mx-auto text-xs">
            Already have an account? <Link id="link-to-register" to="/login" className="text-center mx-auto text-xs text-blue-500 hover:underline">Login</Link>
          </span><br />
            </div>

        </div>
    )
}

export default SignUp
