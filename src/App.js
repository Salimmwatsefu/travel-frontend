import './App.css';
import React from 'react';
import Home from './components/Home';
import { motion } from 'framer-motion';

function App() {
  return (
    <motion.div initial="hidden" animate="show">
      <Home />
    </motion.div>
  );
}

export default App;
