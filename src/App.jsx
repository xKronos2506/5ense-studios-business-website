import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'



//component imports

import Navbar  from './components/Navbar/navbar.jsx';  
import Footer from './components/Footer/Footer.jsx';

import About from './pages/About.jsx'
import Friend from './pages/Friend.jsx';
function App() {

  return (
    <div className=''>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/friend' element={<Friend />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
