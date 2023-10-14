import React from 'react'
import { HowItWorksImg } from '../../../constants/url';

const HowItWorks = () => {
  return (
    <section className='' id='howitworks' >
         <div className='bg-[#F9F9F9]'>
         <div className="text-center pt-[4.72rem] ">
          <h2 className="text-zinc-800 text-[1.81rem] font-medium ">
            How It{" "}
            <span className="text-blue-950  font-bold ">Works</span>?
          </h2>
          <div className="text-center xs:ml-[16rem] ss:ml-[15rem]  pt-[1.45rem] text-blue-950 ss:text-[1.27rem] xs:text-[1rem] font-LaBelleAurore leading-[1.58rem] ">
          Future of Learning. 
          </div>
          <div className='flex justify-center align-center'>
            <img src={HowItWorksImg} alt="howitworks" className='md:w-[1259px] w-[100%]' />
          </div>
          </div>
         </div>
    </section>
  )
}

export default HowItWorks;