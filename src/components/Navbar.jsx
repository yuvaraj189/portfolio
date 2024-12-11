import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Icons for social media


const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-black text-white px-6 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-2xl text-white cursor-pointer hover:text-purple-500">
          <Link to="/">YUVARAJ .</Link>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center space-x-4">
          <button onClick={toggleNav}>
            {navOpen ? (
              <FaTimes size={30} className="text-white hover:text-purple-500" />
            ) : (
              <FaBars size={30} className="text-white hover:text-purple-500" />
            )}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex space-x-8 text-lg">
          <Link to="/" className="nav-link hover:text-purple-500">Home</Link>
          <Link to="/about" className="nav-link hover:text-purple-500">About</Link>
          <Link to="/skills" className="nav-link hover:text-purple-500">Skills</Link>
          <Link to="/projects" className="nav-link hover:text-purple-500">Projects</Link>
          <Link to="/achievements" className="nav-link hover:text-purple-500">Achievements</Link>
          <Link to="/contact" className="nav-link hover:text-purple-500">Contact</Link>
        </div>
        
        {/* Social Media Icons */}
        <div className="hidden lg:flex space-x-4 items-center">
          <a href="https://www.linkedin.com/in/yuvaraj-kumar-s-8b7728258/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-500">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/yuvaraj189" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-500">
            <FaGithub size={24} />
          </a>
          <a href="mailto:yuvarajkumar0931@gmail.com" className="text-white hover:text-purple-500">
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>

      {/* Mobile Menu - Dropdown */}
      <div className={`lg:hidden bg-black text-white py-4 px-6 space-y-4 absolute top-0 left-0 w-full ${navOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
        <Link to="/" className="block nav-link text-lg hover:text-purple-500" onClick={toggleNav}>Home</Link>
        <Link to="/about" className="block nav-link text-lg hover:text-purple-500" onClick={toggleNav}>About</Link>
        <Link to="/skills" className="block nav-link text-lg hover:text-purple-500" onClick={toggleNav}>Skills</Link>
        <Link to="/projects" className="block nav-link text-lg hover:text-purple-500" onClick={toggleNav}>Projects</Link>
        <Link to="/achievements" className="block nav-link text-lg hover:text-purple-500" onClick={toggleNav}>Achievements</Link>
        <Link to="/contact" className="block nav-link text-lg hover:text-purple-500" onClick={toggleNav}>Contact</Link>
        <div className="flex space-x-4 mt-4">
          <a href="https://www.linkedin.com/in/yuvarajkumar/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-500">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/yuvaraj189" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-500">
            <FaGithub size={24} />
          </a>
          <a href="mailto:yuvarajkumar0931@gmail.com" className="text-white hover:text-purple-500">
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
