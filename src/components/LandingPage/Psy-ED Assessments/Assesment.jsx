import React from 'react';
import Card from './Card';
import { carouselCard } from '../../../constants/constants';

function Assessment() {
    return (
        <div className="w-full  md:h-[30rem] xs:h-[35rem] bg-[#316ADE]  flex flex-col overflow-hidden  items-center justify-center">
            <div className=" text-center text-white my-[2.54rem] text-[1.81rem] font-medium ">
                <h1>Adaptive Learning Assessments (ALA) </h1> 
                </div>
            <Card className="" data={carouselCard}/>
        </div>
    );
}

export default Assessment;
