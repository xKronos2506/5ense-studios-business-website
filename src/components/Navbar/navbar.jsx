import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import Logo from '../../assets/images/logo/5ense-logo.png';
import UserIcon from '../Icons/UserIcon.jsx';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between px-auto text-white">
      {/* Left: User Icon + Button */}
      <div className="flex items-center gap-4">
        <UserIcon size={20} color="white" />
        <button
          onClick={() => navigate("/friend")}
          className="border border-white px-4 py-2 rounded-full text-sm tracking-wide cursor-pointer
                     transform transition-transform duration-200 hover:scale-105"
        >
          THE FRIEND
        </button>
      </div>

      {/* Center: Internal page links */}
      <div className="flex items-center gap-8 text-sm tracking-wide">
        {/* Use Link for SPA navigation */}
        <Link to="/" className="hover:opacity-70 transition">ABOUT</Link>
        <Link to="/friend" className="hover:opacity-70 transition">CONNECT</Link>
      </div>

      {/* Right: Logo */}
      <div className="flex items-center w-40 justify-end">
        <img src={Logo} alt="5ense Studio Logo" />
      </div>
    </nav>
  );
};

export default Navbar;