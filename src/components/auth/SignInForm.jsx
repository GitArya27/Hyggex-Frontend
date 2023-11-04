import { circle, circle1, circle2, logo1, slide1, slide2, slide3 } from '../../constants/url'

import Auth from './Auth'
import AuthLeft from './AuthLeft'
import { Link } from 'react-router-dom'
import PhoneInput from 'react-phone-input-2'
import React from 'react'

const SignInForm = () => {
  return (
    <>
      <div className='flex xs:flex-col-reverse sm:flex-row  min-h-[100vh]  '>
        <div className='md:w-1/2 bg-[#dfeaff] pb-[1rem]'>
          <AuthLeft/>
        </div>
        <div className='ml-20 mt-[4rem]  '>
          <div>
            <Auth />
            <span id="link-span" className="text-gray-600 flex items-center justify-center text-center mx-auto text-xs">
                Don't have an account?   <Link id="link-to-register" to="/signUp" className="text-center no-underline text-xs text-blue-600 font-medium">  Sign Up</Link>
               </span><br /><br />
          </div>

        </div>
      </div>
    </>
  )
}

export default SignInForm;