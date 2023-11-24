import React, { useState } from 'react';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const buttons = ['Comprehension', 'Speed', 'Retention', 'Focus & Attention', 'Fatique','Stress'];

  const accordionTexts = [
    "Congratulations! You have achieved an outstanding score, which is indicative of your exceptional reading skills. You have demonstrated an incredible ability to comprehend the text with ease, and capture the essence of each read. It's almost as if you have an innate sense for the written word",
    "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "The purpose of lorem ipsum is to create a natural looking distract from the layout.",
    "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout.",
    "The purpose of lorem ipsum is to of text (sentence, paragraph, page, etc.) that doesn't distract from the layout.",
  ];

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
        <div className='w-full flex rounded-md border border-solid border-blue-300'>
            {buttons.map((button, index) => (
                <button
                    className="border border-solid border-blue-300 py-1 text-center px-4 cursor-[pointer] w-[17%] font-semibold text-[0.65rem]"
                    key={index}
                    onClick={() => handleButtonClick(index)}>
                    {button}
                </button>
            ))}
        </div>
        <div className='bg-blue-200 py-4 px-8'>{accordionTexts[activeIndex]}</div>
    </div>
  );
};

export default Accordion;
