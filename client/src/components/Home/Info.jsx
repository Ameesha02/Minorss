import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

function Info() {
  const navigate = useNavigate();
  return (
    <div className="flex w-full sm:flex-row flex-col md:gap-6 gap-2 lg:px-12 md:px-8 px-2 my-8">
      <Fade direction="left">
        <div className="w-full rounded overflow-hidden shadow-lg">
          <img src="https://eathomie-com.s3.amazonaws.com/images/food-with-friends-1224.jpg" className="w-full h-full object-cover" alt="Info" />
        </div>
      </Fade>
      <Fade direction="right">
        <div className="w-full h-full flex flex-col gap-4 items-center justify-center bg-[#D7D7D7] p-6 rounded-lg shadow-lg">
          <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl md:w-2/3 text-center text-[#27202F] font-semibold font-mono">
            The Most Convenient Way to Order from Home Chefs Around You
          </h2>
          <button
            className="md:w-2/3 px-2 bg-[#FFC529] hover:bg-[#FE7240] rounded-md text-white py-2 md:text-lg md:font-semibold transition-colors duration-300"
            onClick={() => navigate('/provider')}
          >
            Book Your Tiffin
          </button>
        </div>
      </Fade>
    </div>
  );
}

export default Info;

