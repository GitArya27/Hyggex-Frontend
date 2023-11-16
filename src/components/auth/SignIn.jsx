import { circle, circle1, circle2, logo1, slide1, slide2, slide3 } from '../../constants/url'

import Auth from './Auth'
import AuthLeft from './AuthLeft'
import { Link } from 'react-router-dom'
import Notification from './notification'
import PhoneInput from 'react-phone-input-2'
import React from 'react'

const SignIn = () => {
  return (
    <>
      <div className='flex flex-col sm:flex-row  min-h-[100vh]'>
        <div className='bg-[#DFEAFF] w-[100%] sm:w-[50%] pb-12 pt-4 ms:pt-0 flex order-2 sm:order-1'>
          <AuthLeft />
        </div>
        <div className='pt-8 pb-10 sm:pt-12 px-10 w-[100%] sm:w-[50%] order-1 sm:order-2'>
          <div>
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
                <span className='text-xs '>Verify</span>
              </div>
              <p
                className="my-8 sm:my-8 text-gray-600 text-xs text-center"
                id='profile-details'
              >
                Enter your mobile number to continue your journey
              </p>

            <Auth />
            <span id="link-span" className="text-gray-600 flex items-center justify-center text-center mx-auto text-xs">
                Don't have an account?   <Link id="link-to-register" to="/signUp" className="text-center no-underline text-xs text-blue-600 font-medium">  Sign Up</Link>
            </span>

          </div>


        </div>
      </div>
    </>
  )
}

export default SignIn;