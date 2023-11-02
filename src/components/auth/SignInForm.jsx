import React from 'react'
import { circle, circle1, circle2, logo1, slide1, slide2, slide3 } from '../../constants/url'
import { Link } from 'react-router-dom'
import Auth from './Auth'
import AuthLeft from './AuthLeft'
const SignInForm = () => {
  return (
<>
<div className='flex xs:flex-col-reverse sm:flex-row  min-h-[100vh]  '>
 <div className='md:w-1/2'>
    <AuthLeft/>
    </div>     
<div className='ml-20 mt-[4rem]   '>
<div id='first-div' className=" text-center p-2 ">
  <h1 id="h1" className="text-blue-600 font-bold pb-5">Sign In</h1>
  
</div>

<div className='flex  justify-center'>
  <img src={circle1} alt="dotted circle" className=' w-6 h-6' />
  <span className='text-blue-600'>--------------------------</span>
  <img className='w-6 h-6' src={circle} alt="circle" />
</div>

<div className="flex flex-row justify-between  mt-2 md:mt-2   text-gray-600" id='second-div'>
  <span className='text-xs pl-10 text-blue-600 font-medium'>Enter Number</span>
  <span className='text-xs pr-14'>Verify </span>
</div>
<p
                className="my-8 md:my-8  text-gray-600 text-[0.8rem] text-center"
                id='profile-details'
              >
                Enter your name and mobile number to continue your journey
              </p>
              <div>
                <Auth/>
              </div>
              
              

<span id="link-span" className="text-gray-600 flex items-center justify-center text-center mx-auto text-xs">
                Don't have an account?  <Link id="link-to-register" to="/SignUp" className="text-center no-underline text-xs text-blue-600 font-medium">  Sign Up</Link>
              </span><br />
              </div>
</div>
</> 
 )
}

export default SignInForm;