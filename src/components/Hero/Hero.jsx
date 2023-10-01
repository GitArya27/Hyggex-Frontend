import React, { useEffect, useState } from "react";
import { HeroImg } from "../../constants/url";

const words = ["Hyggex", "Strength", "Hyggex", "Strength"];

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero section */}
      <div className="  pt-[0.8rem] xs:pl-[1.4em] md:ml-[3.72rem] jsutify-center align-center flex flex-1 flex-col ss:flex-row">
        {/* Hero-Heading-section */}
        <div className="w-full ">
          <div className="w-full  mt-[5.95rem] text-zinc-800 text-[1.6rem]   ">
            <h1>
              Transform your{" "}
              <span className="text-[#FF6E41] text-[1.6rem] ">
                weakness
                <span>
                  <svg
                    className="xs:w-[10%]  absolute top-[8rem] md:left-[21rem] left-[18.5rem]"
                    width="105"
                    height="77"
                    viewBox="0 0 105 77"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M96.4517 36.385C92.9761 36.6004 90.0374 36.8566 87.0976 36.9452C82.1122 37.1157 77.1812 37.0622 72.4264 35.1179C67.6043 33.1405 64.8167 29.5719 64.5894 24.4752C64.4548 21.3456 65.1697 18.1874 65.6165 15.0648C65.7977 13.8447 66.3257 12.6557 66.8606 10.8853C64.5006 12.2889 62.664 13.4204 60.7822 14.4739C56.1947 17.0677 51.7091 19.8509 46.9739 22.1215C40.5009 25.2657 35.2871 23.2353 32.3542 16.6154C31.206 14.0187 30.6817 11.1156 29.9012 8.33729C29.6715 7.50041 29.5646 6.64029 29.3671 5.62429C26.2089 9.50464 23.2621 13.2381 20.1912 16.8271C13.0184 25.1978 5.50858 21.0934 2.11545 14.2197C1.20759 12.3815 0.733883 10.283 0.249566 8.2628C-0.0287016 6.90079 0.442176 5.54451 1.94945 5.254C3.31146 4.97573 4.07936 6.02111 4.53553 7.24765C5.00272 8.45176 5.39197 9.70115 5.98157 10.8261C6.67317 12.1404 7.38722 13.4657 8.32364 14.6216C10.9636 17.8671 13.6492 18.1829 16.7593 15.3651C18.9586 13.3813 20.8759 11.0641 22.7937 8.8028C24.5784 6.699 26.273 4.49524 27.9676 2.29148C28.8538 1.16695 29.785 0.0644641 31.3632 0.31011C33.1765 0.587585 33.5792 2.14994 33.9587 3.58947C34.4528 5.41949 34.6678 7.30745 35.2623 9.1032C35.9833 11.3788 36.7602 13.654 37.8153 15.7594C39.256 18.6112 40.9608 19.3367 43.9831 18.286C46.8715 17.281 49.7698 16.0859 52.4649 14.624C58.2222 11.4626 63.8441 8.12332 69.477 4.7616C70.8129 3.96921 72.0398 3.56895 73.3214 4.53232C74.5468 5.4402 74.4333 6.74915 74.0069 8.07158C73.2414 10.4251 72.3641 12.7794 71.7219 15.1656C71.1669 17.2604 70.6349 19.4222 70.4716 21.57C70.0215 27.309 72.2347 30.2892 77.7361 31.9039C81.8707 33.126 86.111 33.5087 90.392 33.3545C93.4772 33.2537 96.5496 32.9518 99.6115 32.7283C101.232 32.6046 102.908 32.4806 103.76 34.2633C104.543 35.957 103.592 37.328 102.595 38.6211C102.163 39.1609 101.652 39.6342 101.164 40.1185C100.164 41.0762 99.2103 42.1117 98.1209 42.9694C90.0618 49.4011 89.4399 57.6458 92.3903 66.6694C92.9391 68.3313 94.0122 69.8329 94.8956 71.3806C95.3261 72.1489 96.0018 72.8148 96.3319 73.6174C96.582 74.1858 96.7007 75.1353 96.3792 75.5066C96.0356 75.9228 95.0971 76.0191 94.5157 76.0121C93.252 75.9766 91.9267 75.1589 91.1376 74.2702C89.5818 72.5038 88.0807 70.5694 87.1149 68.4521C84.9564 63.7719 84.3383 58.734 84.6138 53.5777C84.85 49.182 86.8698 45.5783 89.855 42.5042C91.8307 40.522 93.9419 38.7177 96.4517 36.385Z"
                      fill="#FF6E41"
                    />
                  </svg>
                </span>
              </span>
            </h1>
            <h1 className="text-zinc-800 text-[3rem] font-medium flex">
              {" "}
              Into{" "}
              <span className=" ml-[0.3em]">
                {words.map((word, index) => {
                  let styles =
                    "text-blue-950 text-[3rem] font-bold absolute  transition-all duration-800";

                  if (index === currentWordIndex) {
                    styles += " translate-y-0 opacity-100";
                  } else if (
                    index ===
                    (currentWordIndex - 1 + words.length) % words.length
                  ) {
                    styles += " -translate-y-4 opacity-0";
                  } else {
                    styles += " translate-y-4 opacity-0";
                  }

                  return (
                    <div key={index} className={styles}>
                      {word}
                    </div>
                  );
                })}
              </span>
            </h1>
          </div>
          <div className=" w-[24.20rem]  h-[4rem] pt-[0.67rem] text-justify">
            <p className="xs:text-[0.8rem] md:text-[0.66rem]">
              Don't leave your academic growth to chance! Hyggex's
              psychoeducational tests identify your strengths and areas for
              improvement. Get customized tools and mentorship to level up.
              No more guesswork!
            </p>
          </div>
          <div className="flex ">
            <button className="group xs:mt-[5rem] ss:mt-[3rem] flex items-center relative w-[9.125rem] h-[2.33em] bg-gradient-to-r from-blue-950 to-blue-600 rounded-[33px] text-white hover:from-blue-800 hover:to-blue-500 z-10">
              <span className="ml-[1.45em] text-[0.75rem] z-0">
                Take a Test
              </span>
              <span className="absolute right-1 flex items-center justify-center w-[1.83rem] h-[1.83rem] bg-stone-50 rounded-full transition-transform duration-300 group-hover:right-3 z-0">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-300 transform group-hover:scale-110 z-0"
                >
                  <path
                    d="M14.4299 6.61523L20.4999 12.6852L14.4299 18.7552"
                    stroke="#06286E"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.5 12.6855H20.33"
                    stroke="#06286E"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>

            <div
              className="ml-[10.9rem] mt-[1.3rem] absolute origin-top-left rotate-[-5.03deg] font-LaBelleAurore text-center text-[#06286E] 
                 
                text-[1.27rem]"
            >
              Take test to know yourself
              <br />
              better
            </div>

            <div className="absolute mt-[3rem] ml-[9.4rem]">
              <svg
                className="sm:w-[10.3rem] xs:w-[10.3rem]"
                height="80"
                viewBox="0 0 243 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 20.1855C100.667 42.3522 284 73.3855 216 20.1855"
                  stroke="black"
                />
                <path
                  d="M13.3516 33.7446C10.724 30.9535 4.71487 24.5703 1.69887 21.3666C-1.31712 18.1629 11.868 15.1293 19.5 16.185"
                  stroke="black"
                />
              </svg>
            </div>
          </div>
        </div>{" "}
        {/* hero-img */}
        <div className=" w-full translate-x-[-4em]	">
          <img src={HeroImg} alt="hero-img" className="w-[100%]" />
        </div>
      </div>

    </>
  );
};

export default Hero;
