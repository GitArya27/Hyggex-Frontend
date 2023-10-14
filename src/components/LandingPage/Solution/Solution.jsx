import React from 'react'
import { SolutionData } from '../../../constants/constants';

const Solution = () => {
  return (
    <section className='' id='solution'> 
     <div className=''>
     <div className="text-center pt-[4.72rem] ">
          <h2 className="text-zinc-800 text-[1.81rem] font-medium ">
            With{" "}
            <span className="text-blue-950  font-bold ">HyggeX</span>
          </h2>
          <div className="text-center xs:ml-[16rem] ss:ml-[26rem]  pt-[1.45rem] text-blue-950 ss:text-[1.27rem] xs:text-[1rem] font-LaBelleAurore leading-[1.58rem] ">
          you can elevate your learning and achieve 
          <br />
          your goals.
          </div>
          <div className=' flex justify-center mt-3 align-center flex-wrap '>
            {SolutionData.map((solution, index)=>{
              return(
                <div key={solution.id} className='w-[11.72rem] justify-center align-center flex flex-col'>
                    <div className='flex justify-center pb-2 align-center'>
                    <img src={solution.imageUrl} className='w-[113px]' alt={solution.id} />
                    </div>
                    <div className='h-[2.18rem] w-[11.72rem] mb-1'>
                    <h6 className='text-[0.81rem] text-[#06286E] mb-1 font-medium  leading-0'>{solution.title}</h6>
                    </div>

                    <p className='text-[#06286E99] text-[0.54rem]'>{solution.desc}</p>
                </div>
              )
            })}
          </div>
        </div>  
     </div>
    </section>
  )
}

export default Solution;