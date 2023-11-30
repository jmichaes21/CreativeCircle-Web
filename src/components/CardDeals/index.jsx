import React from 'react'
import { card } from '../../assets/images'
import Button from '../Button'
import styles, { layout } from '../../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Simple and Easy <br className='sm:block hidden'/>Communication Feature.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Discuss the service you require from the designer, with build in communication tool.
        </p>
        <a href="https://play.google.com/store/games?hl=id&gl=US&pli=1">
          <Button styles='mt-10'/>
        </a>
        
      </div>
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal

// coments
