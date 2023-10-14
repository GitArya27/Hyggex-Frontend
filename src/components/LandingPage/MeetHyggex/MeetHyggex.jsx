import React from 'react';
import Carousel from './Cards';
import { MeetHyggexData } from '../../../constants/constants';


const MeetHyggex = () => {
  return (<>
      <div className='bg-[#F9F9F9] mt-14 '>
      <div className="text-center pt-[3.72rem] ">
          <h2 className="text-zinc-800 text-[1.81rem] font-medium ">
            Meet the{" "}
            <span className="text-blue-950  font-bold ">HyggeX</span>
            {" "}Team
          </h2>
          <div className="text-center xs:ml-[16rem] ss:ml-[26rem]  pt-[1.45rem] text-blue-950 ss:text-[1.27rem] xs:text-[1rem] font-LaBelleAurore leading-[1.58rem] ">
          We are a confluence of innovators          
                    </div>
          </div>
    <div className="py-6 flex items-center justify-center  ">
         
      <Carousel data={MeetHyggexData} />
    </div>
    </div>
    </>
  );
};

export default MeetHyggex;
