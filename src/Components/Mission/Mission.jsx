import React from 'react';
import heroImage from '../../assets/image19.jpg';

const Mission = () => {
  return (
    <div className='flex items-center justify-center mt-28'>
      <div 
        className="bg-cover bg-center w-full h-48 md:h-72 lg:h-96 rounded-lg flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
          <h1 className="text-primary font-bold text-[30px] md:text-3xl lg:text-4xl mb-4 ">Our <span className='text-secondary'>Mission</span></h1>
          <p className="text-white text-base md:text-lg lg:text-xl font-semibold mt-4">
            Our mission is to provide innovative solutions that enhance the quality of life for our users. We are dedicated to continuous improvement and delivering exceptional value through our services and products.
          </p> 
          <div className="flex items-center justify-center mb-4 mt-9">
           <div className="w-16 h-2 bg-primary mr-2"></div>
           <div className="w-16 h-2 bg-white"></div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
