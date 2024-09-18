import React from 'react';
import { FaBook } from 'react-icons/fa';
import heroImage from '../../assets/image15.jpg';

const Benefits = () => {
  // Array of card data
  const cards = [
    { title: 'Creative Space',
       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' 
      },
    { title: 'High Speed Wifi',
       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
       },
    { title: 'Parking Area',
       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' 
      },
    { title: '24/7 Access',
       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
       },
    { title: 'Great Location',
       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
       },
    { title: 'Outdoor Space', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
     }
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-16 ">
      {/* Section Title */}
      <div className="text-center">
        <h3 className="text-primary text-lg">Your Benefits</h3>
        <h1 className="text-[34px] font-bold">Why Choose Us</h1>
        <p className="max-w-lg text-2xl  mt-4">
        Lorem ipsum dolor sit amet consecteturpisci rerum , quia incidunt perspiciatis soluta velit assumenda qui?
        </p>
      </div>

      {/* Cards and Image */}
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-24 mt-12  px-12 ml-6 mr-6">
        {/* Left Cards */}
        <div className="space-y-8 flex flex-col items-center mx-16 md:mx-0 ">
          {cards.slice(0, 3).map((card, index) => (
            <div key={index} className="h-[200px] w-[300px] bg-[#a1fcdf]/20 p-6 rounded-lg flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 bg-green-950 text-white rounded-full flex justify-center items-center mb-4">
                <FaBook size={34} />
              </div>
              <h3 className="text-[30px] font-bold">{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="md:col-span-1 bg-cover bg-center w-full  md:h-[670px] rounded-lg" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover' }}>
      </div>

        {/* Right Cards */}
        <div className="space-y-8 flex flex-col items-center mx-16 md:mx-0">
          {cards.slice(3).map((card, index) => (
            <div key={index} className="h-[200px] w-[300px] bg-[#a1fcdf]/30 p-6 rounded-lg flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 bg-green-950 text-white rounded-full flex justify-center items-center mb-4">
                <FaBook size={24} />
              </div>
              <h3 className="text-[30px] font-bold">{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
