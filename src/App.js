import './App.css';
import React from 'react';
import Home from './components/Home';
import { motion } from 'framer-motion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {default as Tours} from './components/Tours';
import {default as Blog} from './components/Blog';
import {default as Destinations} from './components/Destinations';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
      
  <BrowserRouter>
  <div><Navbar /></div>
    
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/tours' element={<Tours/>}/>
       <Route path='/blog' element={<Blog/>}/>
       <Route path='/destinations' element={<Destinations/>}/>
        
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
