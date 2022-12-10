import React from 'react';
import { homeAnimation } from '../animation';
import { motion } from 'framer-motion';
import { Button } from 'antd';
import Section1 from './Section1';
import Section2 from './Section2';
import Cards from './Cards';
import Testimonials from './Testimonials';
import Footer from './Footer';



function Home() {
  return (
    <div className='bg-white'>
    <section className='section'>
       {/*<div className='absolute ml-96 min-w-full min-h-full bg-no-repeat rounded-br-2xl' style={{
      backgroundImage: 'url("/girl.png")',
       backgroundRepeat: "no-repeat",
    }}> 

  </div>*/}
  <motion.div  variants={homeAnimation}
      transition={{ delay: 0.3, duration: 0.6, type: "tween" }}>
     <div className=' absolute right-3.5 w-7/12 mt-36'>
      <img src='/girl.png' />
     </div>
    </motion.div>
        
        <motion.div className="home"
      variants={homeAnimation}
      transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <div className="content">
          <div className="title mt-28">
            <h1 className=''>Welcome to<br/>Kenya</h1>
          </div>  
          <div className="subTitle font-semibold">
            <p>
              Life is short and the world <br /> is wild!
            </p>
            <Button type='primary' className='btn1 hover:bg-yellow-600 font-bold'>Discover</Button>

          </div>
        </div>  
      </motion.div>

    </section>

    <div className='ml-10 text-2xl font-semibold mt-8 text-yellow-900'>Travel with Us</div>


    
       <Section1 />

      
       <Section2 />
       <Cards />
       <Testimonials />
       <Footer />
    

    </div>
  )
}

export default Home