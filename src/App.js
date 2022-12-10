import './App.css';
import React from 'react';
import Home from './components/Home';
import { motion } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import {default as Tours} from './components/Tours';
import {default as Blog} from './components/Blog';
import {default as Destinations} from './components/Destinations';
import Navbar from './components/Navbar';
import ReviewPage from './components/reviews/ReviewPage';
import Login from './components/user/Login';
import SignUp from './components/user/SignUp';
import { useState, useEffect } from 'react';
import Checkout from './components/Checkout';
import Popup from './components/Popup';

function App() {

  const [user, setUser] = useState(null);
  useEffect(() => {
    //auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

if (!user) return <SignUp onLogin={setUser} />;

  return (
    <div className='App'>
      
  
  <div><Navbar /></div>
    
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/tours' element={<Tours/>}/>
       <Route path='/blog' element={<Blog/>}/>
       <Route path='/destinations' element={<Destinations/>}/>
       <Route path='/customer' element={<ReviewPage/>}/>
      <Route path="/login" exact component = {Login} setUser = {setUser}></Route>
       <Route path="/signup" exact component = {SignUp} setUser = {setUser} ></Route>
       <Route path='/checkout' element={<Checkout/>}/>
       <Route path='/popup' element={<Popup/>}/>
    

        
    </Routes>
  
    </div>
  );
}

export default App;
