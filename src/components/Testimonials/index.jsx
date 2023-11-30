import React, {useState, useEffect} from 'react'
import { feedback } from '../../constants'
import styles from '../../style'
import Feedback from '../Feedback'
import { getDatabase, ref, onValue} from "firebase/database"

const Testimonials = () => {
  const [feedback, setFeedBack] = useState([]) 

  useEffect(() => {
    const db = getDatabase();
    const feedbackRef = ref(db, "feedback/");
    onValue(feedbackRef, (snapshot) => {
      const data = snapshot.val();
      setFeedBack(data)
    })
  }, [])

  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexce} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40'/>
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h2 className={styles.heading2}>What people are <br className='sm:block hidden'/>saying about us</h2>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Everything you need to find your best designer and a loyal customer.
          </p>  
        </div>
      </div>
      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-contrainer relative z-[1]'>
        {feedback.map((item) => (
          <Feedback key={item.name} {...item}/>        
        ))}
      </div>      
    </section>
  )
}

export default Testimonials
