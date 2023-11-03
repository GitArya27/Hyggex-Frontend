/*import React, { useState } from 'react';
import { circle, circle2 } from "../../constants/url";
import { Link } from "react-router-dom";

const OtpInput = ({ setShowDetailForm }) => {
  const [OTP, setOTP] = useState(Array(6).fill(""));

  const handleOTPChange = (index, value) => {
    let newOTP = [...OTP];
    newOTP[index] = value;
    setOTP(newOTP);
  }

  const handleOTP = () => {
    if (OTP.every(e => e !== "")) {
      alert('OTP received, you can continue your registration.');
      setShowDetailForm(true);
    } else {
      alert('Enter your OTP');
    }
  }
  {/*

  const handleOTP =(e)=>{//render otp form
    e.preventDefault();

    if (OTP !="") {
      alert(`You have successfully loggedin`);
      window.location.href = "/";
    } else {
      alert(`Enter the OTP.`)
    }
  }


  //render login page
  const Login = () => {
    if (phonenumber !="") {
      setOTPForm(true)
    } else {
      alert('fill in your mobile number')
    }
  }

  */

  /*return (
    <div className='m-auto'>
      <div id='first-div' className="my-5 text-center">
        <h1 id="h1" className="text-blue-600 font-bold pb-5">Sign Up</h1>
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
        <p className="text-xs text-blue-600 leading-7 text-center">+91 9876543299</p>
      </div>

      <h3 className="text-gray-500 text-xs ml-4 md:ml-4 mb-0">Enter OTP</h3>
      <div className="flex flex-row justify-center items-center">
        {OTP.map((value, index) => (
          <input
            key={index}
            type="tel"
            name={`otp-${index}`}
            maxLength="1"
            value={value}
            onChange={(e) => handleOTPChange(index, e.target.value)}
            className="mx-3 w-10 h-10 text-center p-2 border border-gray-300 rounded-md"
          />
        ))}
      </div>

      <p className='text-gray-500 float-right pr-4 text-xs leading-7 pb-8'>Resend OTP in: <span className="text-xs text-blue-600 leading-7">20 seconds</span></p>

      <div className='flex justify-center items-center my-16 mx-auto'>
        <button onClick={handleOTP} className="w-24 text-center text-xs bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-600">
          Login
        </button>
      </div>

      <div className='my-4'>
        <span id="link-span" className="text-gray-500 flex items-center justify-center text-center mx-auto text-xs">
          Already have an account? <Link id="link-to-register" to="/SignIn" className="text-center no-underline text-xs text-blue-600 font-medium">Login</Link>
        </span>
      </div>
    </div>
  )
}

export default OtpInput;*/
