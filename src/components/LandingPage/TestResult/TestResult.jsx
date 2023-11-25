import './result.css'

import React,{useState} from 'react'

import Accordion from './accordian';
import CustomCircularProgressBar from './progressbar'
import HorizontalProgressBar from './horizontalProgressBar';

const TestResult = () => {


  const Progress = [
    { "id": 1, "score": 30, "text": "COMPREHENSION" },
    { "id": 2, "score": 60, "text": "READING SPEED" },
    { "id": 3, "score": 80, "text": "RETENTION" }
  ];

  const ProgressItems = [
    { "id": 1, "progress": 20, "text":"Focus and Attention" },
    { "id": 2, "progress": 70, "text":"Fatigue"},
    { "id": 3, "progress": 30, "text":"stress" },
    { "id": 4, "progress": 90, "text": "Reading Comprehension" },
    { "id": 5, "progress": 20, "text": "Retention" },
    { "id": 6, "progress": 20, "text":"Reading Speed" },
  ];


  return (
    <div className="bg-[#f9f9f9] px-16 pt-8">
      <section className='bg-[#fff] px-8 py-8 mb-9 rounded-xl' id='section1'>
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
      </section>

      <section className='bg-[#fff] px-16 py-8 mb-9 border-cyan-500 border-2 rounded-xl' id='section2'>
        <div className='flex flex-row justify-between items-center'>
          <div className='w-[55%]'>
            <h3 className='text-blue-900 font-bold text-l pb-2 ml-10'>Reading Skills Spectrum</h3>
            <div className='text-sm'>
              <img src="https://res.cloudinary.com/dbnxbly1r/image/upload/v1700792350/result-image-removebg-preview_mhswt9.png" alt="image" />
            </div>
          </div>

          <div className='w-[40%]' id='progress-bar'>
            <div className=''>
              {ProgressItems.map((item,index) => (
                <div key={index} className='mx-4 mb-4'>
                   <span className='text-[0.6rem] font-semibold text-[#000]'>{ item.text} </span>
                  <span className='text-[0.9rem] float-right mb-0.1 font-semibold text-[#06286E]'>{ item.progress}%</span>
                  <HorizontalProgressBar
                    strokeWidth={10}
                    radius={50}
                    progress={item.progress}
                  />

                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      <section className='bg-[#fff] px-16 py-8 mb-9 border-cyan-500 border-2 rounded-xl' id='section3'>
        <h3 className='text-blue-900 font-bold text-l pb-2'>Key Reading Metrics</h3>
        <div className=''>
         {/* <div className='w-full flex rounded-md border border-solid border-blue-300'>
            <abutton id="btn" className="border border-solid border-blue-300 py-1 text-center px-4 cursor-[pointer] w-[17%] font-semibold text-[0.65rem]">Comprehension</abutton>
            <abutton id="btn1" className="border border-solid border-blue-300 py-1 text-center px-4 cursor-[pointer] w-[17%] font-semibold text-[0.65rem]">Speed</abutton>
            <abutton id="btn2" className="border border-solid border-blue-300 py-1 text-center px-4 cursor-[pointer] w-[17%] font-semibold text-[0.65rem]">Retention</abutton>
            <abutton id="btn3" className="border border-solid border-blue-300 py-1 text-center px-4 cursor-[pointer] w-[17%] font-semibold text-[0.65rem]">Focus & Attention</abutton>
            <abutton id="btn4" className="border border-solid border-blue-300 py-1 text-center px-4 cursor-[pointer] w-[17%] font-semibold text-[0.65rem]">Fatigue </abutton>
            <abutton id="btn5" className="border border-solid border-blue-300 py-1 text-center px-4 cursor-[pointer] w-[17%] font-semibold text-[0.65rem]">Stress</abutton>
          </div>*/}
            <Accordion/>

        </div>

      </section>

      <section className='bg-[#fff] px-16 py-8 mb-9 border-cyan-500 border-2 rounded-xl' id='section4'>
        <h3 className='text-blue-900 font-bold text-l pb-2'>Your Reading Level Explained</h3>
        <div className=' flex border border-solid border-blue-900'>
          <div className='flex w-[30%]'>
            <div className='flex flex-col w-[92%] h-full'>
              <span className='bg-[#A6C1F9] h-1/4 text-[#fff] text-center p-12'>span1</span>
              <span className='bg-[#5085F3] h-1/4 text-[#fff] text-center p-12'>span2</span>
              <span className='bg-[#164EC0] h-1/4 text-[#fff] text-center p-12'>span3</span>
              <span className='bg-[#06286E] h-1/4 text-[#fff] text-center p-12'>span4</span>
            </div>
            <div className='flex flex-col h-full w-[8%]'>
              <span className='bg-[#007765] h-[22%]'></span>
              <span className='bg-[#263238] h-[78%]'></span>
            </div>
          </div>
          <div className='w-[70%] flex flex-col px-12 py-16 items-start justify-center'>
            <h3 className='text-blue-900 font-bold text-l pb-2'>Sprout Reading</h3>
            <p className='text-[15px] text-blue-900'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex temporibus, laboriosam id ducimus non qui omnis et ullam molestias, quaerat vero architecto, reprehenderit necessitatibus excepturi provident unde esse? Possimus rerum minus odit eaque iure rem dolores eveniet cupiditate doloribus repudiandae suscipit, nulla assumenda molestiae deleniti ut magnam, distinctio cum nostrum ducimus? Aut maxime voluptatum autem ratione omnis et accusantium, animi quis doloremque aliquam harum quos iure atque nisi, ut mollitia inventore voluptatem voluptatibus. Sed, exercitationem sunt. Dolorem quia doloremque sequi animi soluta. Quasi, porro quo. Laudantium a, reiciendis sed voluptates harum voluptatem quisquam non dolorem iste. Quia, nostrum a veniam nesciunt fugiat perspiciatis delectus ad enim aliquam aspernatur similique eaque maiores magnam dolore provident cum! Enim aliquam dolor quasi necessitatibus iste autem dicta, ea maxime, perferendis adipisci minus inventore rerum, quia in nemo alias. Cumque in voluptates ex error ab inventore consequatur ratione, nam dolores sapiente quas at, quae fuga ipsum ipsa possimus temporibus non molestias, ad soluta blanditiis doloremque quaerat autem quos! Nisi nulla iure rerum perspiciatis adipisci, laudantium tempore consectetur quae nostrum. Ex, aut sit aspernatur quae quas consequatur! Voluptate asperiores error sequi veniam eligendi, similique qui dicta laborum, atque amet deserunt provident labore aspernatur dolores vel earum doloribus ipsa quos ex, fugiat quis! Cumque laudantium, minima iusto amet blanditiis sequi. Vero animi tempora iure quasi repellendus ratione explicabo aliquam rem, corrupti eligendi dolore consequatur commodi sint cupiditate tenetur iste voluptatem molestias delectus laboriosam praesentium nobis inventore at distinctio cum! Ex dolore aliquam omnis itaque atque saepe eaque est ab repudiandae autem, corrupti, voluptatum quis ullam. Repudiandae autem commodi dicta iste obcaecati libero optio natus ut quos aliquid quae quasi impedit minus cupiditate aspernatur, delectus error odit provident deleniti minima velit. Magnam consectetur nobis recusandae incidunt, odit placeat veritatis facere quod atque veniam quibusdam tenetur aperiam facilis repellendus!.
            </p>
          </div>
        </div>

      </section>

    </div>
  )
}

export default TestResult
