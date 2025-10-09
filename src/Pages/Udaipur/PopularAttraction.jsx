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
        <div className="section-container px-4 sm:px-6 lg:px-20">
            <div className="my-12 sm:my-16">
                <h2
                    className={`text-[${Theme.colors.text}] text-2xl sm:text-4xl lg:text-6xl font-bold mb-8 sm:mb-12 font-serif text-center`}
                >
                    Popular Attractions in Udaipur
                </h2>

                {/* 🌿 Mobile View (Premium earthy style) */}
                <div className="block sm:hidden border border-[#E2CAB3]/70 p-5 rounded-2xl shadow-xl backdrop-blur-lg  relative overflow-hidden">

                    {/* ✨ Animated soft background gradient shimmer */}
                    <div className="absolute inset-0 opacity-80 animate-gradient-x"></div>

                    <div className="relative grid grid-cols-1 gap-4 z-10">
                        {attractions.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-4 p-4 bg-[#F1E5D1]/70 backdrop-blur-md rounded-xl border border-[#E2CAB3]/60 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-500 cursor-pointer group relative overflow-hidden"
                            >
                                {/* ✨ Glow border highlight */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#E2CAB3]/50 to-[#F1E5D1]/40 rounded-xl"></div>

                                {/* Icon container with subtle inner light */}
                                <div className="relative w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-inner group-hover:shadow-md group-hover:scale-110 transition-all duration-500">
                                    <div className="animate-pulse-slow">{item.icon}</div>
                                </div>

                                {/* Attraction name */}
                                <h3 className="relative text-lg font-semibold text-[#403B21] group-hover:text-[#6B6666] tracking-wide transition-colors duration-300">
                                    {item.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 🌄 Desktop (unchanged) */}
                <div className="hidden sm:block border border-gray-200 p-4 sm:p-6 lg:p-8 backdrop-blur-sm shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] rounded-none">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {attractions.map((attraction, index) => (
                            <div
                                key={index}
                                className={`p-4 sm:p-6 lg:p-8 text-[${Theme.colors.text}] transition-all duration-300 hover:scale-105 cursor-pointer group`}
                            >
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold transition-colors duration-300">
                                    {attraction.name}
                                </h2>
                            </div>
                        ))}
                    </div>
                </div>

                <p
                    className={`text-[${Theme.colors.darkText}] my-4 sm:my-7 text-base sm:text-lg lg:text-2xl text-center leading-relaxed`}
                >
                    Our villas are made for comfort and connection — big families, close
                    friends, or even just a peaceful retreat for yourself. Plus, you're
                    right in the middle of it all. Want to see the famous lakes
                    Fatehsagar, Pichola, Badi, and Udaisagar are right there. Love
                    history and architecture? City Palace, Bagore Ki Haveli, and
                    Sajjangarh are a must. Prefer quiet corners? The ghats like Gangaur
                    and Ambrai are perfect for that. You can even make a quick trip to
                    Shreenathji or Jagdish Temple if you're in the mood for something
                    spiritual.
                </p>
            </div>
        </div>
    );
};

export default PopularAttraction;
