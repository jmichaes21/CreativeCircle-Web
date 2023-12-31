import React, { useState, useEffect } from 'react'
import styles from '../../style'
import { logo } from '../../assets/images'
// import { footerLinks } from '../../constants'
import { getDatabase, ref, onValue } from "firebase/database";

const Footer = () => {
  const [ socialMedia, setsocialMedia ] = useState ([]);

  useEffect(() => {
    const db = getDatabase();
    const socialMediaRef = ref(db, "socialMedia/");
    onValue(socialMediaRef, (snapshot) => {
      const data = snapshot.val();
      setsocialMedia(data);
    })
  }, [])


  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img
            src={logo}
            alt='logo'
            className='w-[266px] h-[172px] object-contain'
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to connect customer and designer.         
          </p>
        </div>
        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {/* {footerLinks.map((link) => (
            <div key={link.title} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
                {link.title}
              </h4>
              <ul className='list-none mt-4'>
                {link.links.map((item, index) => (
                  <li 
                    key={item.name} 
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== link.links.length - 1 ? 'mb-4' : 'mb-0'}`}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))} */}
        </div>
      </div>
      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
        <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
          2023 Creative Circle. All Rights Reserved.
        </p>  
        <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((item) => (
            <img
              src={item.icon}
              key={item.id}
              alt={item.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${item !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
            />
          ))}
        </div>    
      </div>
    </section>
  )
}

export default Footer
