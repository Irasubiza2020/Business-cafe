import React from 'react';
import { BsColumnsGap } from "react-icons/bs";

import logoImage from '../../assets/logo.png';


const Navbar = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-20 top-6'>
      <div className='container flex justify-between items-center'>
        {/* Logo and Name Section */}
        <a href='#' className='font-bold text-3xl sm:text-3xl flex gap-2 items-center'>
        <BsColumnsGap className='text-4xl text-primary mr-4' />
          Business <span className='text-primary'>Cafe</span>
        </a>


        {/* Navigation Links */}
        <div className='flex gap-4'>
          <ul className='flex text-right gap-4 '>
            <li className='p-5 text-primary font-bold text-2xl'><a href='#home'>Home</a></li>
            <li className='p-5 font-bold text-2xl hover:text-primary'><a href='#space'>Space</a></li>
            <li className='p-5 font-bold text-2xl hover:text-primary'><a href='#about'>About</a></li>
            <li className=' p-5 font-bold text-2xl hover:text-primary'><a href='#contact'>Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;