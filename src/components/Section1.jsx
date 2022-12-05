import React from 'react';

function Section1() {
  return (
    <div className='bg-yellow-100 pt-16 pb-10'>
        <div className='relative ml-10'>
          <div className='flex'>
            <h1 className='font-bold text-2xl text-yellow-800'>AROUND KENYA IN 8DAYS SELF-DRIVE TOUR</h1>

            <p className='mt-10 text-lg font-medium  text-gray-800  absolute'>The most popular vacation package to Kenya. It offers an <br />
            amazing variety of places to visit in one week. The Tsavo,<br /> Maasai Mara, 
            Malindi, Watamu, Diani, Mombasa, Wasini, Lake <br />Victoria, Lake Elementaita,
            Nanyuki, A hike to the top of Mt.Kenya <br/> This package includes a free Dolphin interaction
            tour that can be taken <br/> either from Watamu or Wasini.
            </p>

            

            <p className='font-bold text-lg text-yellow-800  absolute mt-60'>8 DAYS / 7 NIGHTS</p>

            <button className='bg-orange-500 h-12 w-36 font-medium mt-72  absolute'>LEARN MORE</button>

            <img src='/zebra2.jpg' alt='Best Seller ' className=' w-5/12 bg-orange-600 ml-44'/>


            {/*<div className=' w-5/12 ml-96 '>
          <p className='absolute right-3.5 font-semibold text-yellow-800 text-lg'>BEST SELLER</p>
          <img src='/zebra2.jpg' alt='Best Seller ' className='ml-96 pl-7 bg-orange-600 '/>
          
  </div>*/}

        </div>
        </div>
        
    </div>
  )
}

export default Section1