import React from 'react';
import { ArrowDownSvg, ArrowUpSvg } from './Svg';

function FAQ({ faq, index, toggleFAQ }) {
    return (
        <div className=' flex  justify-center item-center align-center' key={index}>
            <div 
                className={`p-2 text-[0.81rem] m-2 rounded-2xl w-[90%]  ${faq.open ? 'bg-[#E6EAEE]' : 'bg-[#5085F3]'} flex justify-between items-center cursor-pointer`}
                onClick={() => toggleFAQ(index)}
            >
                <div className="flex-grow">
                    <p className={`p-2 ${faq.open ? 'text-[#06286E]' : 'text-white'}`}>{faq.question}</p>
                    {faq.open && (
                        <p className='text-[0.72rem] p-2 text-[#696671] '>{faq.answer}</p>
                    )}
                </div>
                <span className="">
                    {faq.open ? <ArrowUpSvg/> : <ArrowDownSvg/> }
                </span>
            </div>
        </div>
    );
}

export default FAQ;
