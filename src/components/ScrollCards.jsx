import React from "react";

const ScrollCards = ({ image, title }) => {
  return (
    <div className="group relative rounded-3xl flex-shrink-0 snap-start overflow-hidden 
                    min-w-[200px] sm:min-w-[260px] md:min-w-[300px] lg:min-w-[320px]
                    transition-transform duration-500 transform hover:-translate-y-2 cursor-pointer">

      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-54 sm:h-60 md:h-64 lg:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-3xl shadow-[0_0_25px_rgba(0,0,0,0.4)] 
                      opacity-0 group-hover:opacity-100 transition duration-500"></div>

      {/* Title */}
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold font-serif 
                       translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 
                       transition-all duration-500">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default ScrollCards;
