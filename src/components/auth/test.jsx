import React, {useState} from 'react'
import { circle, circle1 } from '../../constants/url'

import { Link } from 'react-router-dom'
import PhoneInput from 'react-phone-input-2'

const Test = ({ sendOtp }) => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [name, setName] = useState("");
    return (
        <div className='w-[60%] sm:w-[63%]'>
            <div className="w-[100%] items-center">
            {/*===========Enter phone number form==============*/}
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
                <span className='text-xs mr-[4rem] text-blue-600 font-medium'>Enter Number</span>
                <span className='text-xs ml-6'>Verify</span>
              </div>
              <p
                className="my-8 sm:my-8 text-gray-600 text-xs text-center"
                id='profile-details'
              >
                Enter your name and mobile number to continue your journey
              </p>
                <div className="sm:w-[100%] w-[100%] border-2 border-red-500">
                    <label htmlFor="name" className="text-xs text-gray-600 leading-7">Name <small className='text-red-500'>*</small></label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full py-2 px-3 border rounded-md mb-4 text-xs h-10 md:h-8 xs:h-12"
                />
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
                  inputStyle={{ paddingTop: "0.5rem", borderRadius:"8px",border:"1px solid grey", paddingBottom: "0.5rem", width: "100%", height: "42px" }}
                  country={'in'}
                  value={phoneNumber}
                  onChange={(phoneNumber)=>setPhoneNumber("+" + phoneNumber)}
                />
              </div>
              <button onClick={sendOtp}
                className="mt-4 flex justify-center text-xs m-auto md:mt-4 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                  Continue
              </button>

              <div id="recaptcha-container"></div>

                </div>
          </div>
        </div>
    )
}

export default Test
