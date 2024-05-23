import React from 'react';
import { useNavigate } from 'react-router-dom';

function HeroSliderCard({ title, img }) {
  const navigate = useNavigate();
  
  return (
    <div className="hero-slider-card container mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-content w-full md:w-1/2 flex flex-col gap-4 items-start md:items-start">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h1>
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300 ease-in-out"
            onClick={() => navigate("/provider")}
          >
            Book Your Tiffin
          </button>
        </div>
        <div className="image-content w-full md:w-1/2 flex justify-center md:justify-end">
          <img src={img} className="w-full h-auto object-cover rounded-md shadow-md" alt="Poster" />
        </div>
      </div>
    </div>
  );
}

export default HeroSliderCard;

