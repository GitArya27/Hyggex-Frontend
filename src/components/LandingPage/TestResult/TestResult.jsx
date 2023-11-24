import CustomCircularProgressBar from './progressbar'
import HorizontalProgressBar from './horizontalProgress';
import React from 'react'
import { frame } from '../../../constants/url';

const Progress = [
  { "id": 1, "score": 30, "text": "COMPREHENSION" },
  { "id": 2, "score": 60, "text": "READING SPEED" },
  { "id": 3, "score": 80, "text": "RETENTION" }
];

const TestResult = () => {
  return (
    <div className="bg-[#f9f9f9] px-16">
      <section className='bg-[#fff] px-8 py-8' id='section1'>
        <div className='flex flex-row justify-between items-center'>
          <div className='w-[40%]'>
            <h3 className='text-blue-900 font-semibold text-xl'>Hi Sameer,</h3>
            <p className='text-blue-900 text-sm'>
              Let’s delve deep into the findings from your reading assessment
              and discover the distinct characteristics of your reading style.
              Let's navigate the chapters of your literary persona together!
            </p>
          </div>

          <div className='flex w-[40%]' id='progress-bar'>
            <div className='flex justify-between'>
              {Progress.map((item,index) => (
                <div key={index} className='mx-4'>
                  <CustomCircularProgressBar
                    strokeWidth={10}
                    radius={50}
                    progress={item.score}
                  />
                  <p className='text-[0.5rem] font-semibold leading-10 text-[#000]'>{ item.text}</p>
                </div>
              ))}

            </div>
          </div>
        </div>
        <div className='mt-16'>
          <p className='text-[#06286E] text-xs ml-24 pb-4'>You've scored as <br /> <b>“Sprouting Reader”</b></p>
          <div className='flex h-2'>
            <span className='bg-[#007765] w-[23%]'></span>
            <span className='bg-[#263238] w-[78%]'></span>
          </div>
          <div className='flex h-5'>
              <span className='bg-[#A6C1F9] w-[25%]'></span>
              <span className='bg-[#5085F3] w-[25%]'></span>
              <span className='bg-[#164EC0] w-[25%]'></span>
              <span className='bg-[#06286E] w-[25%]'></span>
          </div>
        </div>
      </section><br />

      <section className='bg-[#fff] px-16 py-8 border-cyan-500 border-2' id='section2'>
        <div className='flex flex-row justify-between items-center'>
          <div className='w-[55%]'>
            <h3 className='text-blue-900 font-bold text-l pb-2 ml-10'>Reading Skills Spectrum</h3>
            <div className='text-sm'>
              <img src="https://res.cloudinary.com/dbnxbly1r/image/upload/v1700792350/result-image-removebg-preview_mhswt9.png" alt="image" />
            </div>
          </div>

          <div className='flex w-[40%]' id='progress-bar'>
            <div className='flex flex-column'>
              {Progress.map((item,index) => (
                <div key={index} className='mx-4'>
                  <HorizontalProgressBar
                    strokeWidth={10}
                    radius={50}
                    progress={item.score}
                  />
                  <p className='text-[0.5rem] font-semibold leading-10 text-[#000]'>{ item.text}</p>
                </div>
              ))}

            </div>
          </div>
        </div>
        <div className='mt-16'>


        </div>
      </section>

    </div>
  )
}

export default TestResult
