import React from 'react';
import { FaBook } from 'react-icons/fa';
import heroImage from '../../assets/image15.jpg';

const Benefits = () => {
  // card data
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
     },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-16 px-4">
      {/* Section Title */}
      <div className="text-center">
        <h3 className="text-primary text-sm sm:text-lg">Your Benefits</h3>
        <h1 className="text-[24px] sm:text-[28px] md:text-[34px] font-bold">Why Choose Us</h1>
        <p className="max-w-lg text-base sm:text-lg md:text-xl mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing rerum, quia incidunt perspiciatis soluta velit assumenda qui?
        </p>
      </div>

      {/* Cards and Image */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-12 w-full px-4 md:px-8 lg:px-16">
        {/* Left Cards */}
        <div className="space-y-8 flex flex-col items-center">
          {cards.slice(0, 3).map((card, index) => (
            <div
              key={index}
              className="h-auto w-full max-w-[350px] bg-[#a1fcdf]/20 p-4 rounded-lg flex flex-col items-center justify-center text-center shadow-lg">
              <div className="w-12 h-12 bg-green-950 text-white rounded-full flex justify-center items-center mb-4">
                <FaBook size={34} />
              </div>
              <h3 className="text-[22px] sm:text-[24px] md:text-[28px] font-bold">{card.title}</h3>
              <p className="text-sm sm:text-base md:text-lg">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="flex justify-center items-center">
          <div
            className="w-full max-w-[450px] h-[250px] sm:h-[350px] md:h-[500px] lg:h-[650px] bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${heroImage})` }}>
          </div>
        </div>

        {/* Right Cards */}
        <div className="space-y-8 flex flex-col items-center">
          {cards.slice(3).map((card, index) => (
            <div
              key={index}
              className="h-auto w-full max-w-[350px] bg-[#a1fcdf]/30 p-4 rounded-lg flex flex-col items-center justify-center text-center shadow-lg">
              <div className="w-12 h-12 bg-green-950 text-white rounded-full flex justify-center items-center mb-4">
                <FaBook size={34} />
              </div>
              <h3 className="text-[22px] sm:text-[24px] md:text-[28px] font-bold">{card.title}</h3>
              <p className="text-sm sm:text-base md:text-lg">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
