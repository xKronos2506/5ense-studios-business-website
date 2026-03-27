import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'



//component imports

import Navbar  from './components/Navbar/navbar.jsx';  

import About from './pages/About.jsx'
function App() {

  return (
    <div className=''>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
