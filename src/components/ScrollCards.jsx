import React from "react";

const ScrollCards = ({ image, title }) => {
  return (
    <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl transform hover:scale-105 transition duration-500 min-w-[260px] flex-shrink-0 cursor-pointer">
      <div className="relative h-56 overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
        {/* Title overlay */}
        <div className="absolute bottom-0 w-full bg-transparent  bg-opacity-50 text-white text-center py-2 text-lg font-semibold">
          {title}
        </div>
      </div>
    </div>
  );
};

export default ScrollCards;
