import React from 'react';
import Card from './Card';
import { carouselCard } from '../../constants/constants';

function Assessment() {
    return (
        <div className="w-full my-4 h-[30rem] bg-[#DFEAFF]  flex flex-col overflow-hidden  items-center justify-center">
            <div className=" text-center text-#28262C my-[2.54rem] text-[2.18rem] font-medium ">
                <h1>Psy-Ed Assessments </h1> 
                </div>
            <Card className="" data={carouselCard}/>
        </div>
    );
}

export default Assessment;
