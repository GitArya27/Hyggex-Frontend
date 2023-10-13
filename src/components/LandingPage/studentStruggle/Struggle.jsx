import React from 'react'
import { struggleData } from '../../../constants/constants';

const Struggle = () => {
  return (
    <>
    <section className='m-2' id='Struggle'>
      <div className='p-2 '>
       <div className='w-[22.13rem] h-[8.045rem] text-[1.81rem] font-semibold xs:ml-[1rem] md:ml-[4.68rem] mt-[4.13rem] '>
         <h2>Students are  <span className='text-[#F23B3B]'>struggling</span> with generic education models</h2>
       </div>
       <div>
        <div>
            <p className='text-[0.81rem] xs:pl-[1rem] md:pl-[4.68rem] pt-[1.32rem]'>More than 78% of students feel disconnected with one-size-fits-all educational platforms.</p>   
        </div>
        
        <div className='flex ss:flex-row xs:flex-col xs:ml-[1rem] md:ml-[4.72rem] gap-10'>
      {struggleData.map((data, index) => {
        return (
          <div key={data.id} className='flex  pt-[1.54rem] '>
            <div className='flex '>
              <img src={data.imageUrl} alt={data.id} className={`${index===1?' md:w-[25.8%]	':''}`}/>
              <div className="w-2 md:h-20 ss:h-40 border-4 border-zinc-100 m-2"  />
              <div className='pl-[0.54rem] mt-[0.54rem]  md:w-[11.90rem]'>
              <h4 className='xs:text-[1.6rem] ss:text-[0.9rem] text-[#083899] font-semibold'>{data.title}</h4>
              <p className='xs:text-[1.2rem] ss:text-[0.68rem] font-medium'>{data.desc}</p>
              <p className='xs:text-[0.8rem] ss:text-[0.54rem] text-[#999999]'>{data.source}</p>
            </div>
            </div>
          
          </div>
        );
      })}
    </div>
        
       </div>
      </div>

    </section>

    </>
  )
}

export default Struggle;