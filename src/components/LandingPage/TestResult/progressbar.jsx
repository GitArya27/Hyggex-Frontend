import React, { useEffect, useState } from 'react';

const CustomCircularProgressBar = ({ strokeWidth, radius, progress }) => {
  const [circumference, setCircumference] = useState(0);

  useEffect(() => {
    const calcCircumference = () => 2 * Math.PI * radius;
    setCircumference(calcCircumference());
  }, [radius]);

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg className="progress-ring" width={radius * 2} height={radius * 2}>
      <circle
        className="progress-ring-circle"
        stroke="#A6C1F9"
        strokeWidth={strokeWidth}
        fill="transparent"
        r={radius - strokeWidth / 2}
        cx={radius}
        cy={radius}
      />
      <circle
        className="progress-ring-circle"
        stroke="#06286E"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference + ' ' + circumference}
        style={{ strokeDashoffset }}
        fill="transparent"
        r={radius - strokeWidth / 2}
        cx={radius}
        cy={radius}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="18"
        fill="#06286E"
        fontWeight="700"
      >
        {progress}%
      </text>
    </svg>
  );
};

export default CustomCircularProgressBar;
