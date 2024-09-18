import React from 'react';
import Img1 from '../../assets/image16.jpg';
import Img2 from '../../assets/image17.jpg';
import Img3 from '../../assets/image18.jpg';

// Sample services array
const ServiceData = [
  {
    id: 1,
    image: Img1,
    title: ' Renting Offices',
     description: ' Lorem ipsum dolor sit amet consectetur adipiscing elit mollis mauris.'
  },
  {
    id: 2,
    image: Img2,
    title: ' Coffee Shop',
    description: ' Lorem ipsum dolor sit amet consectetur adipiscing elit mollis mauris.'
  },
  {
    id: 3,
    image: Img3,
    title: 'Private event Space',
    description: ' Lorem ipsum dolor sit amet consectetur adipiscing elit mollis mauris.'
  }
  // Add more services as needed 
];

const Services = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-16'>
      <div className='flex items-center justify-center font-bold text-3xl mb-10'>
        {/* Title Section */}
        <h1 >We Offer Creative Working Environments</h1>
      </div>

      <div className='flex items-center justify-center mb-10'>
        {/* Paragraph Section */}
        <p className='text-center max-w-lg text-[20px]'>
          At our company, we are committed to providing innovative and inspiring workspaces
        </p>
      </div>

      {/* Cards Section */}
      <div className='flex flex-start justify-between gap-2 left-16 right-16  '>
        {ServiceData.map((data) => (
          <div 
            key={data.id} 
            className='bg-white  p-8 w-[450px]  border-  border-primary'  >
            <img 
              src={data.image} 
              alt={data.title} 
              className='w-full h-64 object-cover  mb-4'
            />
            <h2 className='text-2xl font-bold mb-2 text-center text-primary'>{data.title}</h2> 
            <div className='w-16 h-1 bg-primary mb-4 mx-auto'></div>
            <p className=' mb-4 text-center'>{data.description}</p>
            <div className='flex justify-center'>
              <a 
                href='#' 
                className='text-primary py-2 px-4  hover:bg-primary hover:text-white text-center'>
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services;
