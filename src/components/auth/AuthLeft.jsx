import React, { useEffect, useState } from 'react'
import { logo1, slide1, slide2, slide3 } from '../../constants/url'

const AuthLeft = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTextIndex, setActiveTextIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        setActiveTextIndex((prevTextIndex) => (prevTextIndex + 1) % imageText.length);
      }, 3000);

      return () => clearInterval(interval);
    }, []);

    const images = [`${slide1}`, `${slide2}`, `${slide3}`];
    const imageText = [
      "Our flagship adaptive learning system that resonates with each student's unique learning pattern.",
      "Tailored guidiance to help navigate academic intricacies and diverse challenges.",
      "we ground every Hyggex offering in rigorous scientific research, ensuring it's effectiveness and trustworthiness. Although we cater primarily to Indian's diverse audience, our vision has a global reach",
    ];

  return (
    <div className='flex flex-col justify-center ' id='container'>
      <img src={logo1} alt="logo" className="ml-8 mb-6 w-32 pt-4 pb-8" id='logo' />

    <div className=" min-h-[80] bg-[#DFEAFF] w-[100vw] sm:w-full relative mb-12 mt-4 sm:mt-0" id='card1'>

      <div id='inner-card ' className='h-40'>

        <img src={images[activeIndex]} alt="carousel" className="w-40 h-40 mx-auto" id='slider' />

        <div className="absolute sm:mb-16 left-[40%] flex space-x-2 mt-20">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-6 h-1 ${activeIndex === index ? 'bg-blue-500' : 'bg-white'}`}
              onClick={() => setActiveIndex(index)}
            ></button>

          ))}

        </div>
        <div className="text-center text-gray-700 ">
          <p id='imagetxt' className="text-xs px-8 leading-5">{imageText[activeTextIndex]}</p>
        </div>
      </div>

    </div>

</div>
  )
}

export default AuthLeft;