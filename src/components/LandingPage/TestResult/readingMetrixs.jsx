import React, { useState } from 'react';

const ReadingMetrixs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const buttons = ['Comprehension', 'Speed', 'Retention', 'Focus & Attention', 'Fatigue','Stress'];

  const accordionTexts = [
    { title: "Detail-Oriented Reader", content: "Congratulations! You have achieved an outstanding score, which is indicative of your exceptional reading skills. You have demonstrated an incredible ability to comprehend the text with ease, and capture the essence of each read. It's almost as if you have an innate sense for the written word" },
    { title: "Speed", content: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have" },
    { title: "Good Retention", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    { title: "Focused Reader", content: "The purpose of lorem ipsum is to create a natural looking distract from the layout."},
    { title: "Less Fatigue", content: "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout."},
    { title: "Manages stress well", content: "The purpose of lorem ipsum is to of text (sentence, paragraph, page, etc.) that doesn't distract from the layout."}
  ];

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
        <div className='w-full flex'>
            {buttons.map((button, index) => (
              <button
                style={{
                  backgroundColor: activeIndex === index ? '#DFEAFF' : 'transparent',
                  color: activeIndex === index ? '#06286E' : 'black'
                }}
                className="border border-solid border-blue-300 py-1 text-center cursor-[pointer] w-[17%] font-semibold text-[0.5rem] sm:text-[0.65rem]"
                key={index}
                onClick={() => handleButtonClick(index)}
              >
                {button}
              </button>
            ))}

        </div>
      <div className='bg-blue-200 rounded-br-lg border border-solid border-blue-900 rounded-bl-lg py-8 b-tr px-8'>
        <h3 className='text-blue-900 text-[0.8rem] sm:text-xl font-semibold pb-2'>{accordionTexts[activeIndex].title}</h3>
        <p className='text-[#164EC0] text-xs'>{accordionTexts[activeIndex].content}</p>
      </div>
    </div>
  );
};

export default ReadingMetrixs;
