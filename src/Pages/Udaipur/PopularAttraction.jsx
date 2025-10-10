import React from "react";
import Theme from "../../Constants/Theme";
import { Landmark, Building2, ShoppingBag, Church, Sun, Leaf } from "lucide-react";

const PopularAttraction = () => {
  const attractions = [
    { name: "Fatehsagar Lake", icon: <Sun className="w-5 h-5 text-[#403B21]" /> },
    { name: "City Palace", icon: <Landmark className="w-5 h-5 text-[#403B21]" /> },
    { name: "Celebration Mall", icon: <ShoppingBag className="w-5 h-5 text-[#403B21]" /> },
    { name: "Ekling Ji Temple", icon: <Church className="w-5 h-5 text-[#403B21]" /> },
    { name: "Shreenath Temple", icon: <Building2 className="w-5 h-5 text-[#403B21]" /> },
    { name: "Saheliyon Ki Bari", icon: <Leaf className="w-5 h-5 text-[#403B21]" /> },
  ];

  return (
    <div className="section-container">
      <div className="sm:my-12">
        {/* Section Title */}
        <h2
          className={`text-[${Theme.colors.text}] text-2xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-10 font-serif text-center`}
        >
          Popular Attractions in Udaipur
        </h2>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {attractions.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 bg-[#F1E5D1] border border-[#E2CAB3] shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer rounded-md relative overflow-hidden group"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#E2CAB3]/50 to-[#F1E5D1]/40"></div>

              {/* Icon container */}
              <div className="relative w-12 h-12 bg-white flex items-center justify-center shadow-inner group-hover:shadow-md group-hover:scale-110 transition-all duration-500 z-10">
                {item.icon}
              </div>

              {/* Attraction Name */}
              <h3 className="relative text-lg sm:text-xl font-semibold text-[#403B21] group-hover:text-[#6B6666] tracking-wide transition-colors duration-300 z-10">
                {item.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Description */}
        <p
          className={`text-[${Theme.colors.darkText}] mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-center leading-relaxed`}
        >
          Our villas are made for comfort and connection — big families, close friends, or even just a peaceful retreat for yourself. 
          Plus, you're right in the middle of it all. Want to see the famous lakes Fatehsagar, Pichola, Badi, and Udaisagar are right there. 
          Love history and architecture? City Palace, Bagore Ki Haveli, and Sajjangarh are a must. Prefer quiet corners? The ghats like Gangaur and Ambrai are perfect for that. 
          You can even make a quick trip to Shreenathji or Jagdish Temple if you're in the mood for something spiritual.
        </p>
      </div>
    </div>
  );
};

export default PopularAttraction;
