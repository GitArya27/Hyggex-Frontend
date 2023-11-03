import React, { useContext } from 'react'
import { circle, circle1, circle2, logo1, slide1, slide2, slide3 } from '../../constants/url'

import Auth from './Auth'
import AuthLeft from './AuthLeft'
import { Link } from 'react-router-dom'

const SignUpForm = () => {



  return (
    <>
      <div className=' min-h-[100vh] flex xs:flex-col-reverse sm:flex-row'>
        <div className='md:w-1/2 bg-[#dfeaff] pb-[1rem]'>
          <AuthLeft/>
        </div>
        <div className='ml-20 mt-[4rem]   '>
          {/*<div id='first-div' className="my-5 text-center">
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
            <span className='text-xs mx-4'>Basic details</span>
          </div>*/}

          <div>
            <Auth/>
          </div>
          <span id="link-span" className="text-gray-600 flex items-center justify-center text-center mx-auto text-xs">
                Don't have an account?   <Link id="link-to-register" to="/signIn" className="text-center no-underline text-xs text-blue-600 font-medium">  Login</Link>
               </span>
        </div>
      </div>
    </>
  )
}

export default SignUpForm