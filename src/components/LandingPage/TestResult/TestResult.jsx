import './result.css'

import React,{useState} from 'react'

import CustomCircularProgressBar from './progressbar'
import HorizontalProgressBar from './horizontalProgressBar';
import ReadingLevel from './readingLevel';
import ReadingMetrixs from './readingMetrixs';

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
            <ReadingMetrixs/>

        </div>
      </section>

      <section className='bg-[#fff] px-16 py-8 mb-9 border-cyan-500 border-2 rounded-xl' id='section4'>
        <h3 className='text-blue-900 font-bold text-l pb-2'>Your Reading Level Explained</h3>
        <div>
          <ReadingLevel/>
        </div>
        {/*<div className=' flex border border-solid border-blue-900'>
          <div className='flex w-[30%]'>
            <div className='flex flex-col w-[92%] h-full'>
              <div className='flex flex-col justify-center items-center font-semibold bg-[#A6C1F9] h-1/4 text-blue-900 '>Level1: <br />Sprouting Reader</div>
              <div className='flex flex-col justify-center items-center font-semibold bg-[#5085F3] h-1/4 text-[#fff] p-12'>Level2: <br />Budding Reader</div>
              <div className='flex flex-col justify-center items-center font-semibold bg-[#164EC0] h-1/4 text-[#fff] p-12'>Level3: <br />Blooming Reader</div>
              <div className='flex flex-col justify-center items-center font-semibold bg-[#06286E] h-1/4 text-[#fff] p-12'>Level4: <br />Flourishing Reader</div>
            </div>
            <div className='flex flex-col h-full w-[8%]'>
              <span className='bg-[#007765] h-[22%]'></span>
              <span className='bg-[#263238] h-[78%]'></span>
            </div>
          </div>
          <div className='w-[70%] flex flex-col px-12 py-16 items-start justify-center'>
            <h3 className='text-blue-900 font-bold text-l pb-2'>Sprout Reading</h3>
            <p className='text-[15px] text-blue-900'>
              As a "Sprouting Reader", you are at the beginning of your journey towards becoming a skilled reader. At this stage, every text you read has the potential to help you grow and develop your understanding. You'll encounter complex sentences and intricate plots that may require you to slow down, think carefully about the meaning, and take in all the details. You may need to reread lines or paragraphs to make sure you understand them, but this extra effort will help you improve your comprehension and foster a love for reading.  Reading at this level requires concentration and effort, just like a young plant needs support to grow straight and tall. You'll need to maintain focus amidst the hustle and bustle of everyday life, much like a young shoot needs support to stand up straight. But by taking your time and reading carefully, you'll get the most out of the text and help yourself understand it better. You'll learn to read between the lines, pick up on subtle hints and nuances, and develop a deeper appreciation for the author's craft.  As you read, you'll gradually get better at remembering what you have read and using that knowledge for your own thoughts and discussions. This is a process akin to photosynthesis, where you take in information and transform it into energy for thought and discussion. You'll learn to make connections between different texts, recognize patterns and themes, and develop your own unique perspective on the world.  To get the most out of your reading, it's a good idea to read a variety of genres, just like a diverse garden is more beautiful than a single type of flower. You can explore different genres like fiction, non-fiction, poetry, and more, each with their own unique characteristics and challenges. You can also use tools like highlighters, tabs, and notes to mark important sections of the text and help you remember them. Sharing your thoughts and ideas about what you have read can also help you remember and understand the text better. You'll learn to express yourself clearly and thoughtfully, and develop your own voice as a reader and thinker.  Make reading a consistent part of your daily routine to help you build a strong habit. This means setting aside time each day to read, even if it's just for a few minutes. You can also use mindfulness techniques to help you focus and avoid distractions, like finding a quiet place to read or using noise-cancelling headphones. By cultivating a strong reading habit, you'll develop a lifelong love of reading that will serve you well in all areas of life.  Remember that every word you learn, every theme you explore, and every book you finish is a victory. The literary world is full of opportunities for discovery and learning, so keep reading and growing!.
            </p>
          </div>
        </div>*/}
      </section>

      <section className='relative bottom-[50px] bg-[#5085F3] top-[50px] px-16 py-8 mb-9 rounded-[2rem]' id='section5'>
        <div className='flex flex-row justify-around  relative items-center'>
          <div className='absolute top-[-80px] left-10'>
            <img className="max-h-[250px]" src="https://res.cloudinary.com/dbnxbly1r/image/upload/v1700926528/hyggex1/Untitled_design_8_1_x38isj.png" alt="image" />
          </div>

          <div className='flex flex-col text-[#fff] relative left-[120px] text-center items-center justify-center'>
            <h4 className='font-semibold'>Track Your Reading Progress!</h4>
            <p className='text-xs mt-[0.2rem]'>Download Our Free Google Sheet Template.</p>
            <a className="w-[120px] rounded-xl bg-blue-800 text-center mt-2 px-1 py-2 text-xs" href="">Get it Now</a>
          </div>
        </div>
      </section>


    </div>
  )
}

export default TestResult