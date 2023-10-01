import React from "react";
import { ReadArticleSummaryImg } from "../../constants/url";
import './ReadArticleSummaryCard.css';

const ReadArticleSummaryCard = () => {
    return (
    <div className="relative mx-auto p-10 flex justify-center items-center">
        <img src={ReadArticleSummaryImg} alt="read-article-summ-card" className=""></img>
        <div className="w-1/2 h-1/2 absolute top-1/2 left-1/2 rounded-lg p-4">
            <div className="flex mt-[4.5rem]">
                <button className="group flex items-center relative w-[13.45rem] h-[2.54rem] bg-gradient-to-r from-emerald-400 to-cyan-300 rounded-[33px] text-[0.7rem] text-white hover:bg-gradient-to-r hover:from-blue-850 hover:to-blue-550 transition-all duration-300">
                    <span className="ml-9">Read Article Summary</span>
                    <span className="absolute right-1 flex items-center justify-center w-8 h-8 bg-stone-50 rounded-full transition-transform duration-300 group-hover:translate-x-[-10px]">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 transform group-hover:scale-110">
                            <path d="M14.4299 6.61523L20.4999 12.6852L14.4299 18.7552" stroke="#06286E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3.5 12.6855H20.33" stroke="#06286E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    </div>
    );
}

export default ReadArticleSummaryCard;