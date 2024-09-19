import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-16 px-4">
      {/* Circles Section */}
      <div className="flex items-center justify-center">
        {/* Filled Circle */}
        <div className="w-5 h-5 bg-primary rounded-full mx-4"></div>

        {/* Outlined Circle */}
        <div className="w-5 h-5 border-4 border-primary rounded-full mx-4"></div>
      </div>

      {/* About Us Section */}
      <div className="container flex flex-col md:flex-row justify-between items-center mt-10 w-full gap-8">
        {/* Left Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <a 
            href='#' 
            className='text-primary text-2xl sm:text-3xl font-semibold hover:bg-primary hover:text-white block mb-4'
          >
            About Us
          </a>
          <p className='font-bold text-[18px] sm:text-[24px]'>
            Expedita dolorum eveniet eos in delectus quod dignissimos id nostrum perspiciatis autem quaerat, quos reiciendis. Quod!
          </p>
        </div>

        {/* Vertical Line */}
        <div className="hidden md:block h-24 border-l-2 border-black mx-10"></div>

        {/* Right Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className='text-[16px] sm:text-[20px] mb-4'>
            Corrupti temporibus molestiae distinctio veritatis maxime sequi ab, ipsa ducimus. We aim to provide high-quality services that meet client expectations.
          </p>
          <a 
            href='#' 
            className='text-primary text-2xl sm:text-3xl font-light hover:bg-primary hover:text-white block'
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
