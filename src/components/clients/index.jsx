import React, { useState, useEffect } from 'react'
import { clients } from '../../constants'
import styles from '../../style'
import { getDatabase, ref, onValue } from "firebase/database";



const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const clientsRef = ref(db, "clients/");
    onValue(clientsRef, (snapshot) => {
      const data = snapshot.val();
      setClients(data);
    });
  }, []);
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((item) => (
          <div key={item.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
            <a href={item.link}>
            <img
              src={item.logo}
              href={item.link}
              alt='client'
              className='sm:w-[200px] w-[200px] object-contain'
            />   
            </a>
                    
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients

// coments
