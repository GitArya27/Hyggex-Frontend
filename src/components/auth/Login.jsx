/*import React, { useState, useEffect } from 'react';
import { HeroImg, Logo, menuImg } from '../../constants/url';

function Login() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    `${Logo}`,
    `${HeroImg}`,
    `${menuImg}`,

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // changes every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center h-screen">
      <div className="relative w-1/2">
        <img src={images[activeIndex]} alt="carousel" className="w-full h-64 object-cover" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 mt-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-8 h-1 bg-gray-300 ${activeIndex === index ? 'bg-blue-500' : ''}`}
              onClick={() => setActiveIndex(index)}
            ></button>
          ))}
        </div>
      </div>

      <div className="w-1/2 ml-8">
        <div className="border p-4">
          <h1 className="text-lg font-semibold mb-4">Login</h1>
          <div className="flex items-center">
            <select className="border p-2 mr-2">
              <option>+1</option>
              <option>+91</option>*/
              {/* Add other country codes here */}
            /*</select>
            <input
              type="text"
              placeholder="Enter your number"
              className="flex-1 p-2 border"
            />
          </div>
          <button className="mt-4 bg-blue-500 text-white p-2 w-full">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;*/
