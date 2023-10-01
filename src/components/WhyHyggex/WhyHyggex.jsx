import React from "react";
import { whyHyggex } from "../../constants/constants";

const WhyHyggex = () => {
  return (
    <>
      <section className="why-hyggex">
        <div className="text-center mt-[4.36rem]">
          <h2 className="text-zinc-800 text-[2.18rem] font-medium ">
            Why Choose{" "}
            <span className="text-blue-950  font-bold ">HyggeX </span>?
          </h2>
          <div className="text-right w-[88%] pt-[1.45rem] text-blue-950 text-[1.45rem] font-LaBelleAurore leading-[1.58rem]">
            Our strength lies in our bespoke offerings
          </div>
        </div>
        <div className="space-y-4 mt-[4rem]  flex justify-center items-center flex-col">
          {whyHyggex.map((item, index) => (
            <div
              key={index}
              className={`ss:mx-[7.18rem] md:w-[51.09rem] flex sm:flex-row items-center ${item.position==='left'?' items-center flex-col-reverse':'items-center flex-col'}`}
            >
              {item.position === "left" && (
                <div className="">
                  <h2 className="text-[1.81rem] font-medium">{item.title}</h2>
                  <div
                    className={`
                      
                    ${
                      index === 0
                        ? "w-[28rem] h-[8.95rem]"
                        : "w-[28rem] h-[7.36rem]"
                    }  my-[1.36rem]`}
                  >
                    <p className="text-[1.1rem] text-[#696671]">{item.text}</p>
                  </div>
                  <button className="w-[7.5rem] h-[2.45rem] bg-[#164EC0] hover:bg-[#0070D7] rounded-[33px] border-4 border-[#164EC0] border-opacity-25 justify-center items-center gap-2.5 inline-flex text-white text-[0.81rem] font-normal">
                    Learn More
                  </button>
                </div>
              )}
              <img
                src={item.imageUrl}
                alt="why-choose-Hyggex"
                className={`xs:w-[80%] sm:w-[30%] md:w-[100%] ${
                  index === 0
                    ? "ml-[2.54rem]"
                    : index === 1
                    ? "mr-[6.31rem] mt-[4.36rem]"
                    : "ml-[5.4rem] mt-[4.36rem]"
                }`}
              />
              {item.position === "right" && (
                <div className=" ">
                  <h2 className="text-[1.81rem] font-medium ">{item.title}</h2>
                  <div className="w-[28rem] h-[8.9rem] my-[1.36rem]">
                    <p className="text-[1.09rem] text-[#696671] text-left">
                      {item.text}
                    </p>
                  </div>
                  <button className="w-[7.5rem] h-[2.45rem] bg-[#164EC0] hover:bg-[#0070D7] rounded-[33px] border-4 border-[#164EC0] border-opacity-25 justify-center items-center gap-2.5 inline-flex text-white text-[0.81rem] font-normal">
                    Learn More
                  </button>
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