import React, { useState, useEffect } from "react";
import HeaderTitle from "../../components/HeaderTitle";
import BlinkCards from "../../components/BlinkCards";
import IMAGES from "../../Constants/Images";

const Services = () => {
  const serviceSets = [
    [
      { id: 1, image: IMAGES.SERVICE1, name: "Luxury spa" },
      { id: 2, image: IMAGES.SERVICE2, name: "Private Pool" },
      { id: 3, image: IMAGES.SERVICE3, name: "Free WiFi" },
      { id: 4, image: IMAGES.SERVICE4, name: "Breakfast" },
    ],
    [
      { id: 5, image: IMAGES.SERVICE5, name: "Coffee Maker" },
      { id: 6, image: IMAGES.SERVICE6, name: "Bar Area" },
      { id: 7, image: IMAGES.SERVICE7, name: "Airport Taxi" },
      { id: 8, image: IMAGES.SERVICE8, name: "Room Service" },
    ],
    [
      { id: 9, image: IMAGES.SERVICE9, name: "Parking Area" },
      { id: 10, image: IMAGES.SERVICE10, name: "Laundary Service" },
      { id: 11, image: IMAGES.SERVICE11, name: "Dinner date" },
      { id: 12, image: IMAGES.SERVICE12, name: "Activity Area" },
    ],
  ];

  const [activeSet, setActiveSet] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out current set
      setTimeout(() => {
        setActiveSet((prev) => (prev + 1) % serviceSets.length);
        setFade(true); // fade in new set
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section-container">
      <div>
        {/* Header Title */}
        <div className="text-center mb-8 max-w-2xl mx-auto">
          <HeaderTitle title="Our Services" size="20" />
        </div>

        {/* Services Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"
            }`}
        >
          {serviceSets[activeSet].map((service) => (
            <div
              key={service.id}
              className="group cursor-pointer overflow-hidden shadow-lg transition duration-300"
            >
              <BlinkCards image={service.image} name={service.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
