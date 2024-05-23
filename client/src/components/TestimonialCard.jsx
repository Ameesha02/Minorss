import React from 'react';
import ReactStars from 'react-rating-stars-component';

function TestimonialCard(props) {
  return (
    <div className="flex flex-col items-center w-full h-full p-4">
      <div className="border border-gray-300 rounded-lg flex flex-col shadow-lg items-center w-full md:w-4/5 lg:w-3/5 h-auto p-6 bg-white transition duration-300 hover:shadow-2xl">
        <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
          <img src={props.img} alt={props.name} className="w-full h-full object-cover" />
        </div>
        <div className="mb-2">
          <ReactStars
            count={5}
            value={props.rating}
            size={24}
            edit={false}
            activeColor="#0f172a"
          />
        </div>
        <div className="mb-2">
          <h2 className="text-xl text-center font-semibold font-mono py-1 text-gray-800">{props.name}</h2>
        </div>
        <div>
          <p className="font-serif text-center text-gray-600">{props.reviewText}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;

