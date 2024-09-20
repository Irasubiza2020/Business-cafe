import React from 'react';
import heroImage from '../../assets/image14.jpg';

const Hero = () => {
  return (
    <div
      className='relative min-h-[550px] sm:min-h-[650px] bg-cover bg-center flex justify-center items-center'
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className='absolute inset-0 bg-black bg-opacity-60'></div>

      {/* Content */}
      <div className='container relative z-10 px-4 sm:px-8 lg:px-12 py-8 sm:py-16 mt-16'>
        <div className='flex flex-col items-center text-center'>
          
          {/* Text content */}
          <p className='text-white text-lg sm:text-2xl lg:text-3xl font-semibold'>
            The Best WorkSpace in Kigali
          </p>
          <h1 className='font-bold text-3xl sm:text-5xl lg:text-6xl text-primary mt-4'>
            Professional, <span className='text-white'>Creative,</span>
          </h1>
          <h1 className='font-bold text-3xl sm:text-5xl lg:text-6xl text-white mt-4'>
            Flexible, Scalable <span className='text-primary'>Workspace</span>
          </h1>

          {/* Description */}
          <p className='text-white text-base sm:text-lg lg:text-xl mt-4 max-w-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim praesentium omnis vitae voluptatibus modi sint accusantium accusamus. Sapiente rerum doloremque similique unde eligendi quam vel eveniet dolor sit, molestiae ad.
          </p>

          {/* Button */}
          <div className='mt-8'>
            <button className='font-bold bg-primary text-white text-lg sm:text-2xl py-3 px-6 rounded-md hover:bg-secondary hover:text-primary '>
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
