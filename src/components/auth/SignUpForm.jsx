import React, { useContext } from 'react'
import { circle, circle1, circle2, logo1, slide1, slide2, slide3 } from '../../constants/url'

import Auth from './Auth'
import AuthLeft from './AuthLeft'
import { Link } from 'react-router-dom'

const SignUpForm = () => {



  return (
    <>
      <div className='flex flex-col sm:flex-row  min-h-[100vh]'>
        <div className='bg-[#DFEAFF] w-[100%] sm:w-[50%] pb-12 pt-4 ms:pt-0 flex order-2 sm:order-1'>
          <AuthLeft/>
        </div>
        <div className='pt-8 pb-2 sm:pt-12 px-10 w-[100%] sm:w-[50%] order-1 sm:order-2'>
          <div>
            <Auth/>
          </div>
          <span id="link-span" className="text-gray-600 flex items-center justify-center text-center mx-auto text-xs">
                Don't have an account?   <Link id="link-to-register" to="/signInForm" className="text-center no-underline text-xs text-blue-600 font-medium">  Login</Link>
               </span>
        </div><br /><br />
      </div>
    </>
  )
}

export default SignUpForm