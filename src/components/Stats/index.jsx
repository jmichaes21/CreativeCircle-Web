import React, { useState, useEffect } from 'react'
import { stats } from '../../constants'
import styles from '../../style'
import { getDatabase, ref, onValue } from "firebase/database";


const Stats = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const statsRef = ref(db, "stats/");
    onValue(statsRef, (snapshot) => {
      const data = snapshot.val();
      setStats(data);
    });
  }, []);

  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((item) => (
        <div key={item.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
          <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{item.value}</h4>
          <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>{item.title}</p>
        </div>
      ))}
    </section>
  )
}

export default Stats
