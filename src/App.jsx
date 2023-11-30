import React from 'react'
import "./config-firebase"
import styles from './style'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Business from './components/Business'
import Billing from './components/Billing'
import CardDeal from './components/CardDeals'
import Testimonials from './components/Testimonials'
import Clients from '.components/clients'
import CTA from './components/CTA'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />      
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <Clients />
          <CTA/>
          <Footer/>     
        </div>
      </div>
    </div>
  )
}

export default App