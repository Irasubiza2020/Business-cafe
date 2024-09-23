import React from 'react';
import Img1 from '../../assets/image16.jpg';
import Img2 from '../../assets/image17.jpg';
import Img3 from '../../assets/image18.jpg';

// Sample services array
const ServiceData = [
  {
    id: 1,
    image: Img1,
    title: 'Renting Offices',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit mollis mauris.'
  },
  {
    id: 2,
    image: Img2,
    title: 'Coffee Shop',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit mollis mauris.'
  },
  {
    id: 3,
    image: Img3,
    title: 'Private Event Space',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit mollis mauris.'
  }
  // Add more services as needed
];

const Services = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-16 px-4 sm:px-8 lg:px-16'>
      {/* Title Section */}
      <h1 className='font-bold text-3xl sm:text-4xl text-center mb-6'>
        We Offer Creative Working Environments
      </h1>

      {/* Paragraph Section */}
      <p className='text-center max-w-2xl text-lg sm:text-xl mb-12'>
        At our company, we are committed to providing innovative and inspiring workspaces.
      </p>

      {/* Cards Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {ServiceData.map((data) => (
          <div 
            key={data.id} 
            className='bg-white p-6 rounded-lg shadow-md transform transition hover:scale-105 duration-300'
          >
            <img 
              src={data.image} 
              alt={data.title} 
              className='w-full h-64 object-cover mb-4 rounded-md'
            />
            <h2 className='text-2xl font-bold mb-2 text-center text-primary'>{data.title}</h2>
            <div className='w-16 h-1 bg-primary mb-4 mx-auto'></div>
            <p className='text-center mb-4'>{data.description}</p>
            <div className='flex justify-center'>
              <a 
                href='#' 
                className='text-primary py-2 px-4 border border-primary rounded hover:bg-primary hover:text-white transition duration-200'>
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center ">
        {/* Filled Circle */}
        <div className="w-5 h-5 bg-primary rounded-full mx-6 mt-8"></div>

        {/* Outlined Circle */}
        <div className="w-5 h-5 border-4 border-primary rounded-full mx-4 mt-8"></div>
      </div>
    </div>
  );
}

export default Services;
