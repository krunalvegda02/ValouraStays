import React from 'react'
import IMAGES from '../../Constants/Images'
import Theme from "../../Constants/Theme"

const Section2 = () => {
  const aboutImages1 = [
    { image: IMAGES.ABOUT1, title: "Quality Service" },
    { image: IMAGES.ABOUT5, title: "Discount Coupens" },
    { image: IMAGES.ABOUT6, title: "Easy to Reach" },
  ]

  const aboutImages2 = [
    { image: IMAGES.ABOUT3, title: "24/7 Availability" },
    { image: IMAGES.ABOUT4, title: "Privacy Policy" },
    { image: IMAGES.ABOUT2, title: "Affordable Prices" }
  ]

  return (
    <div className='pb-16'>
      <div className='section-container'>
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          {aboutImages1.map((item, index) => (
            <div
              key={index}
              className="group text-center relative"
            >
              {/* Bottom Border with margin */}
              <div className={`absolute bottom-0 left-4 right-4 h-0.5 bg-[#9A9A9A]/50`}></div>
              {/* Right Border with margin - hide for last item */}
              {index < aboutImages1.length - 1 && (
                <div className="absolute top-4 bottom-4 right-0 w-0.5 bg-[#9A9A9A]/50"></div>
              )}

              {/* Card Container */}
              <div className="flex flex-col items-center justify-center p-8 h-50 transition-all duration-300 group-hover:bg-gray-50">
                {/* Image Container */}
                <div className="relative mb-6 flex items-center justify-center w-24 h-24">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Title */}
                <h3 className={`text-xl font-semibold text-[${Theme.colors.darkText}] transition-colors duration-300`}>
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {aboutImages2.map((item, index) => (
            <div
              key={index}
              className="group text-center relative"
            >
              {/* Right Border with margin - hide for last item */}
              {index < aboutImages2.length - 1 && (
                <div className="absolute top-4 bottom-4 right-0 w-0.5 bg-[#9A9A9A]/50"></div>
              )}

              {/* Card Container */}
              <div className="flex flex-col items-center justify-center p-8 h-50 transition-all duration-300 group-hover:bg-gray-50">
                {/* Image Container */}
                <div className="relative mb-6 flex items-center justify-center w-24 h-24">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Title */}
                <h3 className={`text-xl font-semibold text-[${Theme.colors.darkText}] transition-colors duration-300`}>
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>



      <div
        className="relative w-full h-[320px] mx-auto mt-10"
        style={{
          backgroundImage: `url(${IMAGES.HERO1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 1,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Stats Row */}
        <div className="relative z-10 flex items-center justify-center h-full text-white">
          <div className="grid grid-cols-4 w-full text-center">
            {/* Stat 1 */}
            <div className="flex flex-col items-center border-r-4">
              <h1 className="text-5xl font-bold">300+</h1>
              <p className="mt-2 text-xl">Rooms & Suites</p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center border-r-4">
              <h1 className="text-5xl font-bold">145+</h1>
              <p className="mt-2 text-xl">Professional Staff</p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center border-r-4">
              <h1 className="text-5xl font-bold">25+</h1>
              <p className="mt-2 text-xl ">Destinations</p>
            </div>

            {/* Stat 4 (no divider) */}
            <div className="flex flex-col items-center">
              <h1 className="text-5xl font-bold">1200+</h1>
              <p className="mt-2 text-xl">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Section2;
