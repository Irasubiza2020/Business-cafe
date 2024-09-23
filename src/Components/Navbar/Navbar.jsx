import React, { useState } from 'react';
import { BsColumnsGap } from "react-icons/bs";
import { FaBars, FaTimes } from 'react-icons/fa'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='bg-white duration-200 relative z-20 top-6'>
      <div className='container mx-auto flex justify-between items-center px-4 md:px-8 lg:px-12 py-4'>
        {/* Logo and Name Section */}
        <a href='#' className='font-bold text-2xl sm:text-3xl flex gap-2 items-center'>
          <BsColumnsGap className='text-3xl sm:text-4xl text-primary mr-2' />
          Business <span className='text-primary'>Cafe</span>
        </a>

        {/* menu for Mobile */}
        <div className='md:hidden'>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label='Toggle Menu'>
            {isMenuOpen ? <FaTimes className='text-3xl text-primary' /> 
            : <FaBars className='text-3xl text-primary' />}
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`flex-col md:flex-row md:flex gap-4 absolute md:static top-full left-0 right-0 md:top-0 md:left-auto md:right-auto bg-white dark:bg-gray-900 md:bg-transparent dark:md:bg-transparent transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className='flex flex-col md:flex-row text-right gap-4 py-4 md:py-0'>
            <li className='p-5 text-primary font-bold text-xl sm:text-2xl md:text-lg'><a href='#home'>Home</a></li>
            <li className='p-5 font-bold text-xl sm:text-2xl md:text-lg hover:text-primary'><a href='#space'>Space</a></li>
            <li className='p-5 font-bold text-xl sm:text-2xl md:text-lg hover:text-primary'><a href='#about'>About</a></li>
            <li className='p-5 font-bold text-xl sm:text-2xl md:text-lg hover:text-primary'><a href='#contact'>Contact</a></li>
          </ul>
  
          </div>
         </div>
    </div>
  );
};

export default Navbar;
