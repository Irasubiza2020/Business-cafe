import React from 'react';
import { BsColumnsGap } from "react-icons/bs";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="relative mt-16">
      {/* Divider line with margins on both sides */}
      <div className="w-full min-h-0.5 bg-primary"></div>

      {/* Footer content */}
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-12 mt-9 w-full px-8">
        {/* Left Footer Content */}
        <div>
          <div className="flex items-center mb-4">
            <BsColumnsGap className='text-4xl text-primary mr-4' />
            <h1 className='font-bold text-3xl'>
              Business <span className='text-primary'>Cafe</span>
            </h1>
          </div>
          <p className='mb-4'>
          Discover your ideal workspace with us. Work smart, not hard in our fully-equipped office spaces.
          </p>
          <div className='flex space-x-4'>
            <div className='flex items-center justify-center w-10 h-10 rounded-full  text-primary'>
              <CiFacebook className='text-2xl' />
            </div>
            <div className='flex items-center justify-center w-10 h-10 rounded-full  text-primary'>
              <CiLinkedin className='text-2xl' />
            </div>
            <div className='flex items-center justify-center w-10 h-10 rounded-full  text-primary'>
              <FaInstagram className='text-2xl' />
            </div>
            <div className='flex items-center justify-center w-10 h-10 rounded-full  text-primary'>
              <FaSquareXTwitter className='text-2xl' />
            </div>
          </div>
        </div>

        {/* Middle Footer Sections */}
        <div className="flex flex-col">
          <h1 className='font-bold text-3xl mb-4'>Quick Links</h1>
          <ul className='space-y-3'>
            <li><a href="#" className='hover:text-primary'>Home</a></li>
            <li><a href="#" className='hover:text-primary'>About</a></li>
            <li><a href="#" className='hover:text-primary'>Services</a></li>
            <li><a href="#" className='hover:text-primary'>Contact</a></li>
          </ul>
        </div>

        {/* Right Footer Sections */}
        <div className="flex flex-col">
          <h1 className='font-bold text-3xl mb-4'>Contact Info</h1>
          <ul className='space-y-2'>
            <li className=' font-bold'> Location:<span className='font-normal'>Kigali,</span> <span className='text-primary'> Rwanda</span> </li>
            
            <li><a href="#" className='font-bold'>Email: <span className='font-normal'>businesscafe@info.com</span></a></li>
            <li><a href="#" className='font-bold'>Phone:<span className='font-normal'> +250783787817</span></a></li>
            <li><a href="#" className='font-semibold text-primary'> View Location on GoogleMap</a></li>
          </ul>
        </div>
     
      </div>
      <div className="w-full min-h-0.5 bg-primary mt-6"></div>
      <div className='flex text-center justify-center mt-6 mb-6 text-[20px] font-semibold'> Copyright © 2023 Business Coffee All rights reserved </div>
    </div>
  );
};

export default Footer;
