import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';

function Navbar() {
  return (
    <div className='text-white flex justify-center items-center relative'>
      <p className='text-lg mt-2 -ml-38'>Qaribu <br/> <span className='text-3xl text-red-600 font-bold'>Ke<span className='text-green-600'>nya</span></span></p>
      <div className=''>
        <ul className='flex gap-14 mt-5 pl-80 font-semibold' >
            <li>About Kenya</li>
            <li>Plan Your Trip</li>
            <li>Destinations</li>
            <li>Inspiration</li>
        </ul>
        </div>
      <Button className='ml-40 bg-yellow-400/50 hover:bg-yellow-600 w-36 mt-5 rounded-2xl h-7' type="primary">
      <SearchOutlined className='ml-28'/>
     </Button>
    </div>
  )
}

export default Navbar