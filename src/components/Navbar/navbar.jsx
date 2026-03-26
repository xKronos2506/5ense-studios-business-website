// default lib imports
import React from 'react'
import { Link, useLocation } from "react-router-dom";


//component inputs

//asset imports
import Logo from '../../assets/images/logo/logo.png'
import UserIcon from '../Icons/UserIcon.jsx';

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className="nav-left">
          <UserIcon size={20} color='white' />
          <button className="pill-btn">THE FRIEND</button>
        </div>

        <div className="nav-middle">
          <a href="">About</a>
          <a href="">Connect</a>
        </div>

        <div className="nav-right">
          <Link to='/'>
          <img src={Logo} alt="5ense Studios Logo Placeholder" className='' />
          </Link>
        </div>

    </div>
  )
}

export default Navbar