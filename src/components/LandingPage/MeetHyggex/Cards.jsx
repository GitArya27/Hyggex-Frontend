import React, { useState } from 'react';

const Card = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-10">
    <button onClick={handlePrev} className="xs:hidden sm:flex p-4 bg-[#164EC038] hover:bg-blue-500 text-white rounded-full">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
      </svg>
    </button>
    <div className='bg-[#DFEAFF] sm:w-[38.9rem] h-[15.45rem] border rounded-[24px] py-[2.90rem] sm:mx-0 xs:mx-2 px-[4.409] '>
      <div className="">
        <div className='flex'>
        <img src={data[activeIndex].avatar} alt={data[activeIndex].name} className="w-[72px] h-[72px] ml-[4.409rem] rounded-full" />
        <div className='ml-[1.45rem]'>
        <h2 className=" text-[0.91rem] font-semibold ">{data[activeIndex].name}</h2>
        <p className="text-[#3A3740] text-[0.72rem] opacity-90">{data[activeIndex].position}</p>
        <div className='sm:w-[25.5rem] text-[0.72rem]'>
        <p className="mt-4 text-gray-700 text-[0.72rem] ">{data[activeIndex].about}</p>
        </div>
        </div>
        </div>
       
      </div>
      </div>
      <div className='flex gap-8'>
      <button onClick={handlePrev} className="sm:hidden sself-center sm:self-auto p-4 bg-[#164EC038] hover:bg-blue-500 text-white rounded-full">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
      </svg>
    </button>
      <button onClick={handleNext} className="self-center sm:self-auto p-4 bg-[#164EC038] hover:bg-blue-500 text-white rounded-full">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
      </div>
    </div>
  );
};

export default Card;
