import React, { useEffect, useState } from 'react'
import BlinkCards from '../../components/BlinkCards'
import Theme from '../../Constants/Theme';
import IMAGES from '../../Constants/Images';

const Section4 = () => {
  const serviceSets = [
    [
      { id: 1, image: IMAGES.SERVICE1, name: "Luxury Spa" },
      { id: 2, image: IMAGES.SERVICE2, name: "Private Pool" },
      { id: 3, image: IMAGES.SERVICE3, name: "Free WiFi" },
      { id: 4, image: IMAGES.SERVICE4, name: "Breakfast" }
    ],
    [
      { id: 5, image: IMAGES.SERVICE5, name: "Coffee Maker" },
      { id: 6, image: IMAGES.SERVICE6, name: "Bar Area" },
      { id: 7, image: IMAGES.SERVICE7, name: "Airport Taxi" },
      { id: 8, image: IMAGES.SERVICE8, name: "Room Service" }
    ],
    [
      { id: 9, image: IMAGES.SERVICE9, name: "Parking Area" },
      { id: 10, image: IMAGES.SERVICE10, name: "Laundry Service" },
      { id: 11, image: IMAGES.SERVICE11, name: "Dinner Date" },
      { id: 12, image: IMAGES.SERVICE12, name: "Activity Area" }
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
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section-container">
      <div className="">

        {/* Signature Amenities */}
        <div>
          <h2 className={`text-3xl sm:text-4xl md:text-4xl font-serif text-[${Theme.colors.text}]`}>
            Our Signature Amenities
          </h2>
          <div className={`space-y-2 sm:space-y-1 text-base sm:text-md md:text-lg  text-[${Theme.colors.darkText}] leading-relaxed mt-4`}>
            <p><span className={`text-[${Theme.colors.text}] `}>Private lounge and decks:</span> A perfect place to enjoy a morning brew, evening cocktails, or fellowship with other guests.</p>
            <p><span className={`text-[${Theme.colors.text}] `}>Luxe linens and amenities:</span> Amazing bedding, quality toiletries, and attention to detail comforts to coddle you.</p>
            <p><span className={`text-[${Theme.colors.text}] `}>Soothing design and lighting:</span> Spaces intentionally created for your senses to thrive and encourage work, relaxation, or quiet time experience.</p>
            <p><span className={`text-[${Theme.colors.text}] `}>Superior Pool:</span> Immerse yourself in our beautiful, clean, and refreshing pool.</p>
          </div>
        </div>

        {/* Service Cards */}
        <div className="py-8">
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
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

        {/* Vision & Story */}
        <div className="space-y-6">
          <div>
            <h2 className={`text-3xl sm:text-4xl md:text-4xl font-serif text-[${Theme.colors.text}] mb-1 `}>
              Our Vision
            </h2>
            <p className="text-base sm:text-md md:text-lg  text-[${Theme.colors.darkText}] leading-relaxed">
              To build a collection of stays around India, where travelers feel at home but enjoy luxurious comfort. A stay where every
              guest leaves with memories that last a lifetime and experiences that live on.
            </p>
          </div>

          <div>
            <h2 className={`text-3xl sm:text-4xl md:text-4xl font-serif text-[${Theme.colors.text}] mb-1`}>
              Our Story Ahead
            </h2>
            <p className="text-base sm:text-md md:text-lg  text-[${Theme.colors.darkText}] leading-relaxed">
              Veloura Stays is on a mission to change the boutique hospitality space. Every property will have the same DNA, whether
              you are visiting a tranquil retreat or a stunning hilltop property: elegance, comfort, and a personal touch. We hope to create
              a trusted option for the refined traveler who values warmth and sophistication.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section4
