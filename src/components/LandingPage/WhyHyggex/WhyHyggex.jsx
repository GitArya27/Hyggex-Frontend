import React from "react";
import { whyHyggex } from "../../constants/constants";

const WhyHyggex = () => {
  return (
    <>
      <section className="why-hyggex my-[10rem]">
        <div className="text-center  ">
          <h2 className="text-zinc-800 text-[1.81rem] font-medium ">
            Why Choose{" "}
            <span className="text-blue-950  font-bold ">HyggeX </span>?
          </h2>
          <div className="text-center xs:ml-[16rem] ss:ml-[24rem]  pt-[1.45rem] text-blue-950 ss:text-[1.27rem] xs:text-[1rem] font-LaBelleAurore leading-[1.58rem] ">
            Our strength lies in our bespoke offerings
          </div>
        </div>
        <div className=" md:mt-[4rem] flex justify-center items-center flex-col">
          {whyHyggex.map((item, index) => (
            <div
              key={index}
              className={` md:w-[51.09rem] flex sm:flex-row items-center ${item.position==='left'?' items-center flex-col-reverse':'items-center flex-col'}`}
            >
              {item.position === "left" && (
                <div className="xs:text-center ss:text-left">
                  <h2 className="text-[1.81rem] font-medium mb-4">{item.title}</h2>
                  <div
                    className={`
                      
                    ${
                      index === 0
                        ? "w-[28rem]"
                        : "w-[28rem]"
                    }  `}
                  >
                    <p className="ss:text-[0.72rem] xs:text-[1.4rem] text-[#696671]">{item.text}</p>
                     <button className="my-5 ss:w-[7.5rem] xs:w-[16rem] ss:h-[2.45rem] xs:h-[5rem] bg-[#164EC0] hover:bg-[#0070D7] rounded-[33px] xs:text-[1.5rem] border-4 border-[#164EC0] border-opacity-25 justify-center items-center gap-2.5 inline-flex text-white ss:text-[0.81rem] font-normal">
                    Learn More
                  </button>
                  </div>
                 
                </div>
              )}
              <img
                src={item.imageUrl}
                alt="why-choose-Hyggex"
                className={`xs:w-[80%] ss:w-[40%] md:w-[100%] ${
                  index === 0
                    ? "ss:ml-[2.54rem]"
                    : index === 1
                    ? "ss:mr-[6.31rem] ss:mt-[1.36rem]"
                    : "ss:ml-[5.4rem] xs:mt-[8.36rem] ss:mt-[4.36rem]"
                }`}
              />
              {item.position === "right" && (
                <div className="xs:text-center ss:text-left  ">
                  <h2 className="text-[1.81rem] font-medium pb-4 ">{item.title}</h2>
                  <div className="w-[28rem] ">
                    <p className="ss:text-[0.72rem] xs:text-[1.4rem] text-[#696671] ss:text-left">
                      {item.text}
                    </p>
                    <button className="mt-5 ss:w-[7.5rem] xs:w-[16rem] ss:h-[2.45rem] xs:h-[5rem] bg-[#164EC0] hover:bg-[#0070D7] rounded-[33px] border-4 border-[#164EC0] border-opacity-25 justify-center items-center gap-2.5 inline-flex text-white ss:text-[0.81rem]  xs:text-[1.5rem] font-normal">
                    Learn More
                  </button>
                  </div>
                  
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WhyHyggex;