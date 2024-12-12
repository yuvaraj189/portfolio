import React, { useState } from 'react';
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-black text-white px-6 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section: Logo */}
        <div className="font-bold text-2xl text-white cursor-pointer hover:text-purple-500 ">
          <a href="/">YUVARAJ .</a>
        </div>

        {/* Center: Interactive Button */}
        

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-4">
          <button onClick={toggleNav}>
            {navOpen ? (
              <FaTimes size={30} className="text-white hover:text-purple-500 mr-100" />
            ) : (
              <FaBars size={30} className="text-white hover:text-purple-500" />
            )}
          </button>
        </div>

        {/* Social Media Icons */}
        <div className="hidden lg:flex space-x-4 items-center">
          <a
            href="https://www.linkedin.com/in/yuvaraj-kumar-s-8b7728258/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-500"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/yuvaraj189"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-500"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="mailto:yuvarajkumar0931@gmail.com"
            className="text-white hover:text-purple-500"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>

      {/* Mobile Menu - Dropdown */}
      <div
        className={`lg:hidden bg-black text-white py-4 px-6 space-y-4 absolute top-0 left-0 w-full ${
          navOpen ? 'block' : 'hidden'
        } transition-all duration-300 ease-in-out`}
      >
        <div className="flex space-x-4 mt-4">
          <a
            href="https://www.linkedin.com/in/yuvaraj-kumar-s-8b7728258/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-500"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/yuvaraj189"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-500"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="mailto:yuvarajkumar0931@gmail.com"
            className="text-white hover:text-purple-500"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
