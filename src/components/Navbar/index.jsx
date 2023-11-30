import React, { useState, useEffect } from 'react'
import { close, logo, menu } from '../../assets/images'
import { getDatabase, ref, onValue } from "firebase/database";

// Navbar

const Navbar = () => {
  const [navLinks, setnavLinks] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const heroRef = ref(db, "navLinks/");
    onValue(heroRef, (snapshot) => {
      const data = snapshot.val();
      setnavLinks(data);
    });
  }, []);


  const [toggle, setToggle] = useState(false)

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt='creative circle' className='w-[124px] h-[32px]'/>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((item) => (
          <li 
            key={item.id}
            className={`font-poppins font-normal cursor-pointer text-[16px]  text-white mr-10`}
          >
            <a href={`#${item.ref}`}>
              {item.title}
            </a>
          </li>        
        ))}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((previous) => !previous)}
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((item) => (
              <li 
                key={item.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10`}
              >
                <a href={`#${item.id}`}>
                  {item.title}
                </a>
              </li>        
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

