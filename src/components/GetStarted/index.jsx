import React from 'react'
import styles from '../../style'
import { arrowUp } from '../../assets/images'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <a href="https://play.google.com/store/games?hl=id&gl=US&pli=1">
      <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
            <span className='text-gradient'>Download</span>
          </p>
          <img
            src={arrowUp}
            alt='arrow'
            className='w-[23px] h-[23px] object-contain'
          />
        </div>
      </a>
        
        <p className='font-poppins font-medium text-[18px] leading-[23px]'>
          <span className='text-gradient'>App</span>
        </p>
      </div>
    </div>
  )
}

export default GetStarted
