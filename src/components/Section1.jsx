import React from 'react'

function Section1() {
  return (
    <div>
        <div className='absolute mt-28'>
            <h1 className='font-bold gap-2 text-2xl text-yellow-800'>AROUND KENYA IN 8DAYS SELF-DRIVE TOUR</h1>

            <p className='mt-4 text-lg font-medium gap-10 text-gray-800'>The most popular vacation package to Kenya. It offers an <br />
            amazing variety of places to visit in one week. The Tsavo,<br /> Maasai Mara, 
            Malindi, Watamu, Diani, Mombasa, Wasini, Lake <br />Victoria, Lake Elementaita,
            Nanyuki, A hike to the top of Mt.Kenya <br/> This package includes a free Dolphin interaction
            tour that can be taken <br/> either from Watamu or Wasini.
            </p>

            <p className='mt-5 font-bold text-lg text-yellow-800'>8 DAYS / 7 NIGHTS</p>

            <button className='bg-orange-500 h-12 w-36 my-4 font-medium'>LEARN MORE</button>

            
        </div>
        <div className='absolute w-5/12 right-3.5 mr-8 mt-24 mb-10'>
          <img src='/zebra2.jpg' />
        </div>

        
    </div>
  )
}

export default Section1