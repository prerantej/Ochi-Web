import React from 'react';
import Logo from '../assets/logo.svg';

function Navbar() {
  return (
    <nav className='bg-transparent fixed z-50 w-full px-12 py-5 flex flex-row justify-between items-center'>
      <div className='lg:w-[30%]'>
        <img src={Logo} alt="Logo" />
      </div>
      <ul className='hidden md:flex flex-row space-x-1 font-[Neue Montreal] font-light'>
        <li><a className='px-3  hover:text-gray-600' href="#services">Services</a></li>
        <li><a className='px-3 hover:text-gray-600' href="#work">Our Work</a></li>
        <li><a className='px-3 hover:text-gray-600' href="#about">About Us</a></li>
        <li><a className='px-3 hover:text-gray-600' href="#insights">Insights</a></li>
      </ul>
      <div className='font-[Neue Montreal]'>
        <a className='px-3 hover:text-gray-600' href="#contact">Contact Us</a>
      </div>
    </nav>
  );
}

export default Navbar;
