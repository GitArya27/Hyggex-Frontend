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

          <div>
            <Auth/>
          </div>
          <span id="link-span" className="text-gray-600 flex items-center justify-center text-center mx-auto text-xs">
                Don't have an account?   <Link id="link-to-register" to="/signIn" className="text-center no-underline text-xs text-blue-600 font-medium">  Login</Link>
               </span>
        </div><br /><br />
      </div>
    </>
  )
}

export default SignUpForm