import React from 'react';
import heroImage from '../../assets/image14.jpg';



const Hero = () => {
  return (
    <div
    className='relative min-h-[550px] sm:min-h-[650px] bg-cover bg-center flex justify-center items-center '
    style={{ backgroundImage: `url(${heroImage})` }}
  >
  <div className='absolute inset-0 bg-black bg-opacity-60'></div>
    <div className='relative z-10'>
    
    </div>
     
      {/* hero section */}
      <div className='container pb-8 sm:pb-0 relative z-10 top-32'>
        <div className=' items-center flex'>
         
         


          {/* text content section */}
          <div className='  justify-center gap-6 text-center '>
            <p className='text-white text-2xl font-semibold'> The Best WorkSpace in Kigali</p>
            <h1 className='font-bold text-4xl sm:text-6xl lg:text-5xl text-primary mt-4'>Professional, <span className='text-white'>Creative,</span> </h1>
            <h1 className='font-bold text-4xl sm:text-6xl lg:text-5xl text-white mt-4'> Flexible, Scalable 
            <span className='text-primary'> Workspace</span> </h1>
            <p className='text-2xl text-white  justify-center text-align: center mt-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim praesentium omnis vitae voluptatibus modi sint accusantium accusamus. Sapiente rerum doloremque similique unde eligendi quam vel eveniet dolor sit, molestiae ad.
            </p>
            <div>
              <button className='  mt-9 font-bold bg-primary  text-white text-2xl py-2 px-4  rounded-md top-8'>
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Hero;
