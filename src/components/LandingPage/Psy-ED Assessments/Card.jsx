import React, { useState } from "react";
import { StrikeThrough, Svg } from "./CardSvg";

function Card({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < data.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handleMiddle = () => {
    setCurrentIndex(1);
  };

  return (
    <>
            <div className="relative  mx-auto overflow-x-hidden">
      <div
        className="flex  space-x-4 transition-transform duration-300"
        style={{
          transform: `translateX(-${currentIndex * (100 / data.length+2)}%)`,
        }}
      >
        {data.map((item, index) => (
          <div
            key={item.id}
            className="md:h-[15.8rem] h-[17.8rem] ml-[4.68rem] rounded-lg flex min-w-[calc(100%/5)]  md:min-w-[calc(25%-0.25rem)] flex-none bg-white "
          >
            <div className="my-[4.5rem]">           <img
              src={item.imageUrl}
              alt={item.title}
              className="w-36 h-24 object-cover"
            />
            </div>

            <div>
              <div className="w-[15.5rem] mt-[2rem] h-[2.81rem]">
              <h2 className="text-[1.2rem] ">{item.title}</h2>
              </div>
              <ul className="my-[1.2rem]   text-[0.81rem]">
                {item.listText.map((list, index) => {
                  if (index === item.listText.length - 1) {
                    return (
                      <li key={index} className="flex items-center font-bold relative ss:gap-2 xs:gap-4">
                        <Svg />
                        {/* <span className="text-[#696671] font-normal ">
                          Rs {" " }
                          <span className=" inline-block relative z-10">
                            999
                            <span className="xs absolute top-1/2 left-0 transform -translate-y-1/2 ">
                              <StrikeThrough />
                            </span>
                          </span>
                        </span> */}
                        {list}
                      </li>
                    );
                  } else {
                    return (
                      <li key={index} className="text-[#696671] flex gap-2">
                         <Svg/> {list}
                      </li>
                    );
                  }
                })}
              </ul>
  <div className=" bg-blue-800  w-[7.45rem] hover:bg-[#0070D7] rounded-[1.9rem] h-[2.54rem]  border-4 border-blue-800 border-opacity-20 justify-center items-center  flex">
    <button className="text-white  text-[0.9rem] font-medium ">Get Started</button>
</div>

            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="flex justify-center items-center  mt-8 space-x-4">
  <button
    onClick={handlePrev}
    className="w-4 h-4 active:bg-[#083899] rounded-full bg-white"
  ></button>
  <button
    onClick={handleMiddle}
    className="w-4 h-4 active:bg-[#083899] rounded-full bg-white"
  ></button>
  <button
    onClick={handleNext}
    className="w-4 h-4 active:bg-[#083899] rounded-full bg-white"
  ></button>
</div>

</>
  );
}

export default Card;
