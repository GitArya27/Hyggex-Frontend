import React, { useState } from 'react'
import { WhyHyggexImg } from '../../../constants/url'
import { whyChooseHyggeX } from '../../../constants/constants';
import { data } from 'autoprefixer';

const Product = () => {
    const[active, setActive] = useState(0);
  return (
    <section className='mt-4 bg-[#F9F9F9]' id='section'>
      <div className=' flex  md:flex-row xs:flex-col xs:ml-6 md:pl-0'>
       <div className=' pt-[2.72rem] pl-[1.2rem] md: w-[50%]'>
         <img src= {WhyHyggexImg} alt="whyHyggex" className='w-full' />
       </div>
       <div className='flex'>
       <div className=" mt-[5.13rem] ">
          <h2 className="text-zinc-800 text-[1.81rem] font-medium ">
            Why Choose{" "}
            <span className="text-blue-950  font-bold ">HyggeX </span>?
          </h2>
          <div className="text-center  ss:ml-[1rem]  pt-[1rem] text-blue-950 ss:text-[1.1rem] xs:text-[1rem] font-LaBelleAurore leading-[1.58rem] ">
            Our strength lies in our bespoke offerings
          </div>
          <div className='md:w-[27.36rem]  mt-[1rem] md:text-left font-light md:h-[6.5rem]'>
           <p className='text-[1.09rem]'>We aim to mend the shortcomings of mainstream education with our specialized psychoeducational assessments.</p>
          </div>
          <div className='flex md:flex-row xs:flex-col'>
             {whyChooseHyggeX.map((image, index)=>{
                return(
                    <div key={image.id} className=''>
                        <div className={`${active==index?'xsm:w-[247px] xs:w-[90%] h-[195px] bg-white rounded-2xl shadow ':''} md:-translate-x-4 xs:mt-4 md:mt-0 flex justify-center align-center `} >
                        <img onClick={()=>setActive(index)} src={image.imageUrl} alt={image.id} className='md:w-[80%]' />
                        </div>
                     </div>   
                )
             })}
          </div>
          </div>
          <div>

          </div>
       </div>
      </div>
    </section>
  )
}

export default Product