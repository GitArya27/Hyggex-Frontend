import React from 'react';

const HorizontalProgressBar = ({ progress }) => {
  return (
    <div className="w-full h-3 bg-[#C8C8E9] rounded-lg overflow-hidden relative">
      <div
        className="h-full bg-blue-800"
        style={{ width: `${progress}%` }}
      ></div>
      {/*<div className="absolute  bottom-8 flex items-center justify-end text-black font-bold">
        {progress}%
      </div>*/}
    </div>
  );
};

export default HorizontalProgressBar;
