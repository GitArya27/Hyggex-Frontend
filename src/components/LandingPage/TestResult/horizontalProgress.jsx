import React from 'react';

const HorizontalProgressBar = ({ progress }) => {
  return (
    <div className="w-full h-2 bg-gray-200 rounded-lg overflow-hidden flex flex-column">
      <div
        className="h-24 bg-[#164EC0] flex flex-column"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default HorizontalProgressBar;
