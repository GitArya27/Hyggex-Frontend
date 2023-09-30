import React, { useState } from 'react';
import { Logo } from '../../constants/url';
import { Navlinks } from '../../constants/constants';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className='w-full flex justify-between pt-[1.17rem]'>
        <img src={Logo} alt="Hyggex" className="w-[191px] h-[39px] md:ml-[5.7rem]" />

        <ul className='list-none w-full sm:flex hidden gap-[1.6rem] justify-end text-[0.75rem] items-center cursor-pointer flex-1'>
          {Navlinks.map((nav, index) => (
            index === Navlinks.length - 1 ?
              <button key={nav.id} className='btn w-[128px] h-[48px] rounded-full bg-primary text-white hover:bg-[#0070D7] mr-[4.33rem]'>
                {nav.title}
              </button> :
              <li key={nav.id}
                className={`ml-2 hover:text-primary justify-self-start ${activeLink === nav.id ? 'font-[600] text-primary' : 'font-[400] text-[#3A3740]'}`}
                onClick={() => setActiveLink(nav.id)}
              >
                {nav.title}
              </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end">
          <button onClick={() => setToggle(!toggle)} className="">
            {toggle ? (
              // Cross Icon
              <svg className="w-20 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              // Menu Icon
              <svg className="w-20 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 1h16M4 8h16m-7 8h7"></path>
              </svg>
            )}
          </button>

          <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-white-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl bg-[#DFEAFF] z-10`}>
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {Navlinks.map((nav, index) => (
                <li key={nav.id} className={` hover:text-blue-600 font-medium cursor-pointer text-[16px] ${activeLink === nav.title ? "text-primary" : "text-[#3A3740]"} ${index === Navlinks.length - 1 ? "mb-0" : "mb-4"}`} onClick={() => setActiveLink(nav.title)}>
                  {index === Navlinks.length - 1 ? (
                    <button className='btn w-[128px] h-[48px] rounded-full bg-primary text-white hover:bg-[#0070D7]'>
                      {nav.title}
                    </button>
                  ) : (
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
