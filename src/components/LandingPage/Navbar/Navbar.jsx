import React, { useState } from 'react';
import { Logo, menuImg, closeImg } from '../../../constants/url';
import { Navlinks } from '../../../constants/constants';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className='fixed bg-[#F9F9F9] z-10  w-full flex justify-between pt-[1.17rem]'>
        <img src={Logo} alt="Hyggex" className="ss:w-[191px] ss:h-[39px] xs:w-[40%] md:ml-[4.72rem] xs:ml-6 xs:mt-3 md:mt-0"  />

        <ul className='list-none w-full sm:flex hidden gap-[1.6rem] justify-end text-[0.75rem] items-center cursor-pointer pb-4 flex-1'>
          {Navlinks.map((nav, index) => (
            index === Navlinks.length - 1 ?
              <button key={nav.id} className='btn w-[128px] h-[48px] rounded-full bg-[#06286E] text-white hover:bg-[#0070D7] mr-[4.33rem]'>
                {nav.title}
              </button> :
              <li key={nav.id}
                className={`ml-2 hover:text-primary justify-self-start ${activeLink === nav.id ? 'font-[600] text-primary' : 'font-[400] text-[#3A3740]'}`}
                onClick={() => setActiveLink(nav.id)}
              >
               <a href={nav.link}>{nav.title}</a> 
              </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end ">

            <img src={toggle? closeImg:menuImg} onClick={()=>setToggle(!toggle)} className=' z-20 '/>
          {/* Sidebar */}
          <div className={`w-[55%] ${!toggle ? "hidden" : "flex"} bg-[#DFEAFF] fixed top-0 right-0 h-screen w-64  z-10`}>
            <ul className="list-none flex flex-col items-start space-y-4 w-full my-8 ">
              {Navlinks.map((nav, index) => (
                <>
                <li key={nav.id} className={`hover:text-blue-600 
                font-medium cursor-pointer text-[16px] pl-8 py-4 ${activeLink === nav.title ? "text-primary" : "text-[#3A3740]"}`} onClick={() => setActiveLink(nav.title)}>
                  {index === Navlinks.length - 1 ? (
                    <button className='btn w-[128px] h-[48px] rounded-full bg-primary text-white hover:bg-[#0070D7]'>
                      {nav.title}
                    </button>
                  ) : (
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  )}
                  

                  
                </li>
                {index !== Navlinks.length - 1 &&<hr className="abolute my-10 w-full  border-black " />}

                </>
              ))}
            </ul>
          </div> 
        </div>
      </nav>
    </>
  );
}

export default Navbar;