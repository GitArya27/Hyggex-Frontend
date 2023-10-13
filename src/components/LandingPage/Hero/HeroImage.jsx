import React, { useState, useEffect, useRef } from 'react';
import { HeroImg } from "../../../constants/url";

const HeroImage = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (showVideo) {
      const iframe = videoRef.current;
      const videoSrc = iframe.src;
      iframe.src = videoSrc; // This triggers the video to play
    }
  }, [showVideo]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (videoRef.current && !videoRef.current.contains(event.target)) {
        setShowVideo(false);
        setShowButton(true);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [videoRef]);

  const handleButtonClick = () => {
    setShowVideo(true);
    setShowButton(false);
  };

  return (
    <div className="relative w-full md:translate-x-[-3em] xs:mt-3 md:mt-10">
      {showVideo && (
        <iframe 
          ref={videoRef}
          width="90%" 
          height="100%" 
          src="https://www.youtube.com/embed/lUwY6UeO-ug?autoplay=1" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          className="absolute z-10"
        ></iframe>
      )}
      <img src={HeroImg} alt="hero-img" className="" />
      {showButton && (
        <img 
          src='https://res.cloudinary.com/do4vytmxm/image/upload/v1696952751/Group_48028_zibksu.png'
          onClick={handleButtonClick}
          className="absolute z-2 xs:top-[52%]  xs:left-[50%] ss:left-[44%] sm:left-[50%] xl:top-[13rem] xl:left-[16rem] lg:w-auto md:w-[30%]  sm:w-[30%] ss:w-[24%] xs:w-[30%]    "
        />
        
      )}
    </div>
  );
}

export default HeroImage;
