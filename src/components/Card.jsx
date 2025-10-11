import React from "react";
import { MapPin, BedDouble } from "lucide-react";
import Theme from "../Constants/Theme";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Card = ({ image, title, location, amenities, description, price, link }) => {
  const navigate = useNavigate();

  return (
    <div className="group cursor-pointer transform hover:-translate-y-2 transition duration-300 w-[90%] sm:w-[80%] md:w-[320px] lg:w-[360px] xl:w-[400px] mx-auto">
      {/* Image Section */}
      <div className="relative overflow-hidden shadow-lg border border-gray-200">
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 group-hover:bg-black/50 transition duration-300"></div>

        {/* Book Now Button */}
        <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition duration-300">
          <Button
            onClick={() => navigate(link || "/")}
            icon={false}
            variant="primary"
            className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold transition-transform duration-300 transform group-hover:scale-105"
          >
            Book Your Villa
          </Button>
        </div>

        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-44 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition duration-500"
          loading="lazy"
          draggable={false}
        />
      </div>

      {/* Card Content */}
      <div className="relative bg-white shadow-md border border-gray-200 -mt-6 mx-3 sm:mx-4 z-20 group-hover:shadow-xl transition duration-300">
        <div className="p-3 sm:p-4 md:p-5">
          {/* Title and Location */}
          <div className="mb-2 sm:mb-3">
            <h3 className={`text-lg sm:text-xl md:text-2xl font-bold text-[${Theme.colors.text}]`}>
              {title}
            </h3>
            <div className={`flex items-center text-[${Theme.colors.darkText}] text-xs sm:text-sm`}>
              <MapPin size={14} className="mr-1 sm:mr-2" />
              <span>{location}</span>
            </div>
          </div>

          {/* Amenities */}
          <div
            className={`flex items-center text-[${Theme.colors.lightText}] text-sm sm:text-base mb-2 sm:mb-3 font-medium`}
          >
            <BedDouble size={16} className="mr-1 sm:mr-2" />
            <span>{amenities}</span>
          </div>

          {/* Description */}
          <p className={`text-[${Theme.colors.darkText}] text-base sm:text-md md:text-lg  leading-relaxed mb-5 line-clamp-3`}>
            {description}
          </p>
        </div>

        {/* Price Tag */}
        <Button
          icon={false}
          className="absolute -bottom-3 -right-5 px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-3 text-xs sm:text-sm md:text-base shadow-md"
        >
          <div className="whitespace-nowrap">
            <span>{price}</span>/ Night
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Card;
