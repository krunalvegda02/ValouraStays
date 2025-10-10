import React from 'react';
import IMAGES from '../../Constants/Images';
import Theme from "../../Constants/Theme";

const Section2 = () => {
  const aboutImages1 = [
    { image: IMAGES.ABOUT1, title: "Quality Service" },
    { image: IMAGES.ABOUT5, title: "Discount Coupons" },
    { image: IMAGES.ABOUT6, title: "Easy to Reach" },
  ];

  const aboutImages2 = [
    { image: IMAGES.ABOUT3, title: "24/7 Availability" },
    { image: IMAGES.ABOUT4, title: "Privacy Policy" },
    { image: IMAGES.ABOUT2, title: "Affordable Prices" }
  ];

  return (
    <>
 <div className="section-container">
  {/* Mobile View - 2 columns grid (hidden on large screens) */}
  <div className="block lg:hidden">
    <div className="grid grid-cols-2 gap-4">
      {[...aboutImages1, ...aboutImages2].map((item, index) => (
        <div key={index} className="group text-center relative">
          {/* Bottom Border for all except last row */}
          {(index < [...aboutImages1, ...aboutImages2].length - 2) && (
            <div className="absolute bottom-0 left-2 right-2 h-[1px] bg-[#9A9A9A]/30"></div>
          )}
          {/* Right Border for first column */}
          {index % 2 === 0 && (
            <div className="absolute top-2 bottom-2 right-0 w-[1px] bg-[#9A9A9A]/30"></div>
          )}

          <div className="flex flex-col items-center justify-center p-4 transition-all duration-300 group-hover:bg-gray-50">
            <div className="relative mb-3 flex items-center justify-center w-16 h-16">
              <img
                src={item.image}
                alt={item.title}
                className="object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h3 className="text-sm font-semibold text-[#6B6666] transition-colors duration-300">
              {item.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Desktop View - Original 3 columns (hidden on mobile) */}
  <div className="hidden lg:block">
    {/* Your original desktop code here */}
    <div className="grid grid-cols-3 gap-4">
      {aboutImages1.map((item, index) => (
        <div key={index} className="group text-center relative">
          <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-[#9A9A9A]/50"></div>
          {index < aboutImages1.length - 1 && (
            <div className="absolute top-4 bottom-4 right-0 w-[1px] bg-[#9A9A9A]/50"></div>
          )}
          <div className="flex flex-col items-center justify-center p-8 transition-all duration-300 group-hover:bg-gray-50">
            <div className="relative mb-6 flex items-center justify-center w-24 h-24">
              <img
                src={item.image}
                alt={item.title}
                className="object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#6B6666] transition-colors duration-300">
              {item.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
    {/* Second row for desktop */}
    <div className="grid grid-cols-3 gap-4 mt-4">
      {aboutImages2.map((item, index) => (
        <div key={index} className="group text-center relative">
          {index < aboutImages2.length - 1 && (
            <div className="absolute top-4 bottom-4 right-0 w-[1px] bg-[#9A9A9A]/50"></div>
          )}
          <div className="flex flex-col items-center justify-center p-8 transition-all duration-300 group-hover:bg-gray-50">
            <div className="relative mb-6 flex items-center justify-center w-24 h-24">
              <img
                src={item.image}
                alt={item.title}
                className="object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#6B6666] transition-colors duration-300">
              {item.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
      {/* Stats Section */}
      <div
        className="relative w-full h-[280px] sm:h-[300px] md:h-[320px] mx-auto my-8"
        style={{
          backgroundImage: `url(${IMAGES.ABOUTS3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex items-center justify-center h-full text-white px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center w-full">
            {/* Stat 1 */}
            <div className="flex flex-col items-center border-b sm:border-b-0 sm:border-r border-white/40 pb-4 sm:pb-0">
              <h1 className="text-3xl sm:text-5xl font-bold">300+</h1>
              <p className="mt-1 sm:mt-2 text-sm sm:text-xl">Rooms & Suites</p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center border-b sm:border-b-0 sm:border-r border-white/40 pb-4 sm:pb-0">
              <h1 className="text-3xl sm:text-5xl font-bold">145+</h1>
              <p className="mt-1 sm:mt-2 text-sm sm:text-xl">Professional Staff</p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center border-b sm:border-b-0 sm:border-r border-white/40 pb-4 sm:pb-0">
              <h1 className="text-3xl sm:text-5xl font-bold">25+</h1>
              <p className="mt-1 sm:mt-2 text-sm sm:text-xl">Destinations</p>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center border-b sm:border-b-0 sm:border-r border-white/40 pb-4 sm:pb-0">
              <h1 className="text-3xl sm:text-5xl font-bold">1200+</h1>
              <p className="mt-1 sm:mt-2 text-sm sm:text-xl">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
