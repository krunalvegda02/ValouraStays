import React from "react";
import { MapPin, BedDouble } from "lucide-react";
import Theme from "../Constants/Theme";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Card = ({ image, title, location, amenities, description, price, link }) => {
  const navigate = useNavigate();

  return (
    <div className="group cursor-pointer transform hover:-translate-y-2 transition duration-300 max-w-sm sm:max-w-md md:max-w-lg mx-auto">
      {/* Image with Shadow and Overlay */}
      <div className="relative overflow-hidden shadow-lg">
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 group-hover:bg-black/50 transition duration-300"></div>

        {/* Book Now Button */}
        <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition duration-300">
          <Button
            onClick={() => navigate(link || "/")}
            icon={false}
            variant="primary"
            className="px-6 py-2 sm:px-8 sm:py-3 text-base sm:text-lg font-semibold transform scale-90 group-hover:scale-100 transition duration-300"
          >
            Book Your Villa
          </Button>
        </div>

        <img
          src={image}
          alt={title}
          className="w-full h-56 sm:h-64 md:h-72 object-cover group-hover:scale-110 transition duration-500"
          loading="lazy"
          draggable={false}
        />
      </div>

      {/* Content */}
      <div className="relative bg-white shadow-xl -mt-8 mx-4 z-20 border border-gray-100 group-hover:shadow-2xl transition duration-300">
        <div className="p-4 sm:p-6 pt-6">
          {/* Title & Location */}
          <div className="mb-3 sm:mb-4">
            <h3 className={`text-xl sm:text-2xl font-bold text-[${Theme.colors.text}] truncate`}>
              {title}
            </h3>
            <div className={`flex items-center text-[${Theme.colors.text}] text-xs sm:text-sm`}>
              <MapPin size={14} className="mr-2" />
              <span>{location}</span>
            </div>
          </div>

          {/* Amenities */}
          <div
            className={`flex items-center text-[${Theme.colors.lightText}] text-base sm:text-lg mb-3 font-medium`}
          >
            <BedDouble size={16} className="mr-2" />
            <span>{amenities}</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 pt-2 font-sans line-clamp-3">
            {description}
          </p>
        </div>

        {/* Price Tag */}
        <Button
          icon={false}
          className={`absolute -bottom-3 -right-7 px-4 py-2 sm:px-5 sm:py-3 shadow-lg transform transition duration-300 group-hover:scale-105 group-hover:shadow-xl text-sm sm:text-base`}
        >
          <div className="text-lg sm:text-xl whitespace-nowrap">
            <span>{price}</span>/ Night
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Card;
