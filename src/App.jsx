import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'



//component imports

import Navbar  from './components/Navbar/navbar.jsx';  
function App() {

  return (
    <div className=''>
      <BrowserRouter>
        <Navbar />
        
      </BrowserRouter>
    </div>
  )
}

export default App
