import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoLocation } from 'react-icons/io5';
import { AiFillStar } from 'react-icons/ai';
import Skeleton from './Skeleton';

function ProviderCard({ providerLogo, name, address, rating, id }) {
  if (Number(rating) % 2 === 0) {
    rating += '.0';
  } else {
    rating = Number(rating).toFixed(1);
  }
  const [loading, setLoading] = useState(true);

  return (
    <Link 
      to={`/provider/${id}`} 
      className="flex flex-col p-4 border border-gray-300 hover:shadow-lg rounded-lg transition duration-300 ease-in-out gap-3"
      style={{ backgroundColor: 'rgba(229, 228, 226, 0.2)', width: '100%', maxWidth: '350px', margin: '0 auto' }}

    >
      <div className="w-full h-44">
        {loading && <Skeleton />}
        <img 
          src={providerLogo} 
          onLoad={() => setLoading(false)} 
          alt={name} 
          className={`${loading ? 'hidden' : 'block'} w-full h-full object-cover rounded-t-lg`}
        />
      </div>
      <div className="flex flex-col gap-2 p-2 text-gray-900 font-sans">
        <div className="text-lg font-semibold flex justify-between items-center">
          <h1>{name}</h1>
          <span className="flex items-center rounded-lg px-2 text-white" style={{ backgroundColor: '#FE7240' }} >
            <span>{rating === '0' ? 'New' : rating}</span>
            <AiFillStar className="ml-1" fontSize="medium" />
          </span>
        </div>
        <p className="text-sm text-gray-700">Veg, Non-Veg, Lunch, Dinner</p>
        <p className="text-gray-500 text-sm">Time: 8:00 am To 8:30 pm</p>
        <p className="flex items-center text-gray-600 text-sm">
        <IoLocation className="mr-1" style={{ color: '#FE7240' }} />

          {address}
        </p>
      </div>
    </Link>
  );
}

export default ProviderCard;

