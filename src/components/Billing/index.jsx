import React from 'react'
import { apple, bill, google } from '../../assets/images'
import styles, { layout } from '../../style'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt='billing'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Look Up Your <br className='sm:block hidden'/> "Criteria Met" Designer.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Easily find your desired designer
          with skills and service that lines up with your needs.
          
        </p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <a href="https://www.apple.com/id/app-store/">
            <img
              src={apple}
              alt='app-store'
              className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'
            />
          </a>
          <a href="https://play.google.com/store/games?hl=id&gl=US&pli=1"> 
            <img
              src={google}
              alt='google-play'
              className='w-[128px] h-[42px] object-contain cursor-pointer'
            /></a>

          
         
        </div>
      </div>  
    </section>
  )
}

export default Billing
