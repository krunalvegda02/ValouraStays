import React from "react";
import { MapPin, BedDouble } from "lucide-react";
import Theme from "../Constants/Theme";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Card = ({ image, title, location, amenities, description, price, link }) => {
  const navigate = useNavigate();

  return (
    <div className="group cursor-pointer transform hover:-translate-y-2 transition duration-300">
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
            className="px-8 py-3 text-lg font-semibold transform scale-90 group-hover:scale-100 transition duration-300"
          >
            Book Your Villa
          </Button>
        </div>

        <img
          src={image}
          alt={title}
          className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="relative bg-white shadow-xl -mt-8 mx-4 z-20 border border-gray-100 group-hover:shadow-2xl transition duration-300">
        <div className="p-6 pt-8">
          {/* Title & Location */}
          <div className="mb-4">
            <h3 className={`text-2xl font-bold text-[${Theme.colors.text}]`}>
              {title}
            </h3>
            <div className={`flex items-center text-[${Theme.colors.text}]`}>
              <MapPin size={16} className="mr-2" />
              <span className="text-sm">{location}</span>
            </div>
          </div>

          {/* Amenities */}
          <div
            className={`flex items-center text-[${Theme.colors.lightText}] text-lg mb-4 font-medium`}
          >
            <BedDouble size={18} className="mr-2" />
            <span>{amenities}</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-md leading-relaxed mb-8 border-gray-100 pt-4 font-sans">
            {description}
          </p>
        </div>

        {/* Price Tag */}
        <Button
          icon={false}
          className={`absolute -bottom-3 -right-7 px-5 py-3 shadow-lg transform transition duration-300 group-hover:scale-105 group-hover:shadow-xl`}
        >
          <div className="text-xl">
            <span>{price}</span>/ Night
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Card;
