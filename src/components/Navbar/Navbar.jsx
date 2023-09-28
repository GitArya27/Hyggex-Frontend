import React, { useState } from 'react';
import { Logo } from '../../constants/url';
import { Navlinks } from '../../constants/constants';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [toggle, setToggle] = useState(false);


  return (
    <>
      <nav className='w-full flex justify-between  pt-[1.17rem]'>
        <img src={Logo} alt="Hyggex" className="ml-[5em]  ]" />


        <ul className='list-none w-full sm:flex hidden  gap-[1.6rem] justify-end text-[0.75rem]  items-center cursor-pointer flex-1'>
          {Navlinks.map((nav, index) => (
            index === Navlinks.length - 1 ?
              <button key={nav.id} className='btn w-[128px] h-[48px] rounded-full bg-primary text-white hover:bg-[#0070D7] mr-[4.33rem]'>
                {nav.title}
              </button> :
              <li key={nav.id}
                className={` ml-2  hover:text-primary justify-self-start ${activeLink === nav.id ? 'font-[600] text-primary' : 'font-[400] 	text-[#3A3740]'}`}
                onClick={() => setActiveLink(nav.id)}
              >
                {nav.title}
              </li>
              
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          
          
          </div>
      </nav>
    </>
  );
}

export default Navbar;
