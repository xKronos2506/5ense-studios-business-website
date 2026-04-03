import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo/5ense-logo.png';
import IGIcon from '../Icons/IGIcon';
import YoutubeFillIcon from '../Icons/YoutubeFillIcon';

const Footer = () => {
  return (
    <footer className="bg-black text-white flex items-center">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-center gap-20">
        
        {/* LOGO */}
        <div className="flex items-center">
          
          <img 
            src={Logo} 
            alt="5ense-studio logo"
            className="h-75 object-contain"
          />
        </div>

        {/* DIVIDER */}
        <div className="hidden md:block h-50 w-px bg-white opacity-40"></div>

        {/* LINKS */}
        <div className="flex flex-col items-center text-base space-y-3 tracking-wide">
          <Link
            to="/about"
            className="hover:text-orange-500 transform transition duration-200 hover:scale-105"
          >
            ABOUT
          </Link>
          <Link
            to="/contact"
            className="hover:text-orange-500 transform transition duration-200 hover:scale-105"
          >
            CONTACT
          </Link>
          <Link
            to="/friend"
            className="hover:text-orange-500 transform transition duration-200 hover:scale-105"
          >
            THE FRIEND
          </Link>
          <Link
            to="/account"
            className="hover:text-orange-500 transform transition duration-200 hover:scale-105"
          >
            ACCOUNT
          </Link>
        </div>

        {/* DIVIDER */}
        <div className="hidden md:block h-50 w-px bg-white opacity-40"></div>

        {/* ICONS */}
        <div className="flex items-center gap-10">
          <a 
          href="https://www.instagram.com/sensestudios.v/"
          target='_blank'
          rel='noopener noreferrer'
          className='transition-colors duration-300 hover:text-orange-500'
          >
            <IGIcon size={50} color="white" />
            </a>
          <YoutubeFillIcon size={50} color="#ffffff" />
        </div>

      </div>
    </footer>
  );
};

export default Footer;