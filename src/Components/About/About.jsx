import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-16">
      {/* Circles Section */}
      <div className="flex items-center justify-center">
        {/* Filled Circle */}
        <div className="w-8 h-8 bg-primary rounded-full mx-4"></div>

        {/* Outlined Circle */}
        <div className="w-8 h-8 border-4 border-primary rounded-full mx-4"></div>
      </div>

      {/* About Us Section */}
      <div className="container flex justify-between items-center mt-10 w-full px-8">
        {/* Left Text */}
        <div className="w-1/2 text-left">
        <a 
                href='#' 
                className='text-primary text-3xl font-semibold hover:bg-primary hover:text-white text-center'>
                About Us
              </a>
          <p  className='font-bold text-[24px]'> Expedita dolorum  eveniet eos in delectus quod dignissimos id nostrum perspiciatis autem quaerat, quos reiciendis. Quod!</p>
        </div>

        {/* Vertical Line */}
        <div className="h-24 border-l-2 border-black mx-10"></div>

        {/* Right Text */}
        <div className="w-1/2 ">
    
          <p className='text-[20px] '> corrupti temporibus molestiae distinctio veritatis maxime sequi ab, ipsa ducimus.We aim to provide high-quality services that meet client expectations.</p>
          <a 
                href='#' 
                className='text-primary text-3xl font-light hover:bg-primary hover:text-white text-center'>
                Learn more
              </a>
        </div>
      </div>
    </div>
  );
};

export default About;
