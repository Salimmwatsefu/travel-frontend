import React from 'react'

function Section2() {
  return (
    <div className=' pt-16 pb-10'>
        <div className='relative ml-24'>
          <div className='flex'>
            <h1 className='font-bold text-3xl pr-20  text-yellow-800 mt-10'>ABOUT US</h1>
            <h2 className='absolute mt-20 font-medium text-lg'>The best travel Agency for you</h2>

            <p className='mt-32 text-base font-normal  text-gray-800  absolute'>The most popular vacation package to Kenya. It offers an <br />
            amazing variety of places to visit in one week. The Tsavo,<br /> Maasai Mara, 
            Malindi, Watamu, Diani, Mombasa, Wasini, Lake <br />Victoria, Lake Elementaita,
            
            </p>

            

            <p className='font-medium text-lg  absolute mt-60'>Read more about us</p>

            <img src='/about.jpg' alt='Best Seller ' className=' w-80  ml-80 mt-20 rounded-xl'/>
            <img src='/about3.jpg' className=' h-52 rounded-lg absolute right-1.5 mr-32'/>
            <img src='/path.png' className=' h-96 rounded-lg absolute mt-40 ml-10'/>


            {/*<div className=' w-5/12 ml-96 '>
          <p className='absolute right-3.5 font-semibold text-yellow-800 text-lg'>BEST SELLER</p>
          <img src='/zebra2.jpg' alt='Best Seller ' className='ml-96 pl-7 bg-orange-600 '/>
          
  </div>*/}

        </div>
        </div>
        
    </div>
  )
}

export default Section2