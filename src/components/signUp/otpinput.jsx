import OTPInput, { ResendOTP } from "otp-input-react";
import React,{useState} from 'react'
import { circle, circle2 } from "../../constants/url";

import { Link } from "react-router-dom";

const OtpInput = ({setShowDetailForm}) => {
  const [phonenumber, setPhoneNumber] = useState("");
  const [OTP, setOTP] = useState("");

  const handleOTP = () => {
    if (OTP !== "") {
      alert('OTP received, you can continue your registration.')
      setShowDetailForm(true);
    } else {
      alert('Enter your OTP');
    }
  }

    return (
        <div>{/*===============OTP===============*/}
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
                <h2 className="text-gray-600 text-xs text-center">Enter OPT sent to</h2>
                <p className="text-xs text-blue-600 leading-7 text-center">{phonenumber}</p>
              </div>

              <h3 className="text-gray-600 text-xs ml-28 md:ml-32 mb-0">Enter OTP</h3>
              <OTPInput
                value={OTP}
                onChange={setOTP}
                OTPLength={4}
                otpType="number"
                disabled={false}
                inputStyles={{ border: "1px solid #696671", borderRadius: "8px", width: "40px", height: "40px", marginTop: "-0.5rem" }}
                secure
                className="flex justify-center p-4"
              />
              <ResendOTP maxTime={20} style={{ color: "#164EC0", textAlign: "center", margin: "0rem 9rem", fontSize: "0.7rem" }}
                onResendClick={() => console.log("Resend clicked")}
              />
              <button onClick={handleOTP} className="w-24 my-8 flex justify-center text-xs m-auto md:mt-8 mb-6 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                Login
              </button>
              <div className='my-8'>
                <span id="link-span" className="text-gray-600 flex items-center justify-center text-center mx-auto text-xs">
                  Already have an account?  <Link id="link-to-register" to="/signIn" className="text-center no-underline text-xs text-blue-600 font-medium">  Login</Link>
                </span><br />
              </div>
            </div>
    )
}

export default OtpInput
