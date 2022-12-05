import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='text-white flex justify-center items-center relative  navbar'>
      <NavLink to="/">
      <p className='text-lg mt-2 -ml-38'>Qaribu <br/> <span className='text-3xl text-red-600 font-bold'>Ke<span className='text-green-600'>nya</span></span></p>
      </NavLink>
      <div className=''>
        <ul className='flex gap-14 mt-5 pl-80 font-semibold' >
            <li>About Kenya</li>
            <NavLink to="tours" >
            <li><a>Available Tours</a></li>
            </NavLink>
            <NavLink to={"destinations"}><li>Destinations</li></NavLink>
            <NavLink to={"blog"}><li>Blog</li></NavLink>  
        </ul>
        </div>
      <Button className='ml-40 bg-yellow-400/50 hover:bg-yellow-600 w-36 mt-5 rounded-2xl h-7' type="primary">
      <SearchOutlined className='ml-28'/>
     </Button>
    </div>
  )
}

export default Navbar