// default lib imports
import React from 'react'
import { Link, useLocation } from "react-router-dom";

import './navbar.css'


//component inputs

//asset imports
import Logo from '../../assets/images/logo/5ense-logo.png'
import UserIcon from '../Icons/UserIcon.jsx';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-50 text-white">
      
      {/* LEFT */}
      <div className="flex items-center justify-between gap-4">
        <UserIcon size={20} color="white" />

        <button className="border border-white px-4 py-2 rounded-full text-sm tracking-wide ">
          THE FRIEND
        </button>
      </div>

      {/* MIDDLE */}
      <div className="flex items-center justify-between gap-8 text-sm tracking-wide">
        <a href="#about" className="hover:opacity-70 transition">ABOUT</a>
        <a href="#connect" className="hover:opacity-70 transition">CONNECT</a>
      </div>

      {/* RIGHT */}
      <div className="flex items-center justify-between  w-40">
      <img src={Logo} alt="5ense Studio Logo" />
      </div>

    </nav>
  );
};

export default Navbar;