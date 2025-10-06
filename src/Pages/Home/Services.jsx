import React, { useState, useEffect } from "react";
import HeaderTitle from "../../components/HeaderTitle";
import BlinkCards from "../../components/BlinkCards";

const Services = () => {
  const serviceSets = [
    [
      { id: 1, image: "/api/placeholder/300/200", name: "Breakfast" },
      { id: 2, image: "/api/placeholder/300/200", name: "Swimming Pool" },
      { id: 3, image: "/api/placeholder/300/200", name: "Spa & Wellness" },
      { id: 4, image: "/api/placeholder/300/200", name: "Concierge" }
    ],
    [
      { id: 5, image: "/api/placeholder/300/200", name: "Gym & Fitness" },
      { id: 6, image: "/api/placeholder/300/200", name: "Private Chef" },
      { id: 7, image: "/api/placeholder/300/200", name: "Yoga Sessions" },
      { id: 8, image: "/api/placeholder/300/200", name: "Airport Transfer" }
    ]
  ];

  const [activeSet, setActiveSet] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out current set
      setTimeout(() => {
        setActiveSet((prev) => (prev + 1) % serviceSets.length); // switch to next set
        setFade(true); // fade in new set
      }, 500); // fade duration
    }, 4000); // time before switching

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section-container">
      <div className="">
        {/* Header Title */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <HeaderTitle title="Our Services" size="20" />
        </div>

        {/* Services Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"
            }`}
        >
          {serviceSets[activeSet].map((service) => (
            <div
              key={service.id}
              className="group cursor-pointer text-center overflow-hidden shadow-lg transition duration-300"
            >
              <BlinkCards
                image={service.image}
                name={service.name}
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Services;
