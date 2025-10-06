import React, { useEffect, useState } from 'react'
import BlinkCards from '../../components/BlinkCards'
import Theme from '../../Constants/Theme';
import IMAGES from '../../Constants/Images';

const Section4 = () => {

  const serviceSets = [
    [
      { id: 1, image: IMAGES.SERVICE1, name: "Luxury spa" },
      { id: 2, image: IMAGES.SERVICE2, name: "Private Poll" },
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
      { id: 5, image: IMAGES.SERVICE9, name: "Parking Area" },
      { id: 6, image: IMAGES.SERVICE10, name: "Laundary Service" },
      { id: 7, image: IMAGES.SERVICE11, name: "Dinner date" },
      { id: 8, image: IMAGES.SERVICE12, name: "Activity Area" }
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
    <div className="section-container w-full p">
      <div className="space-y-5 pt-10">

        {/* Signature Amenities */}
        <div>
          <h1 className={`text-4xl md:text-5xl font-serif text-[${Theme.colors.text}]  `}>
            Our Signature Amenities
          </h1>
          <div className={`space-y-6 text-lg text-[${Theme.colors.darkText}] leading-relaxed mt-5`}>
            <p> <span className={`text-[${Theme.colors.text}] font-semibold`}> Private lounge and decks:</span> Private lounge and decks: A perfect place to enjoy a morning brew, evening cocktails, or fellowship with other guests.</p>
            <p> <span className={`text-[${Theme.colors.text}] font-semibold`}>
              Luxe linens and amenities:</span>  Amazing bedding, quality toiletries, and attention to detail comforts to coddle you.</p>
            <p> <span className={`text-[${Theme.colors.text}] font-semibold`}>
              Soothing design and lighting: </span> Spaces intentionally created for your senses to thrive and encourage a work, relaxation, or quiet time experience.</p>
            <p> <span className={`text-[${Theme.colors.text}] font-semibold`}>
              Superior Pool:
            </span>  Immerse yourself in our beautiful, clean, and refreshing pool.</p>
          </div>
        </div>

        {/* Your Component Space */}
        <div className="py-8  border-gray-200">
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



        {/* Vision & Story */}
        <div className="space-y-3">
          <div>
            <h1 className={`text-4xl md:text-5xl font-serif  text-[${Theme.colors.text}] mb-3   `}>Our Vision</h1>
            <p className={`text-xl leading-relaxed   text-[${Theme.colors.darkText}] `}>
              To build a collection of stays around India, where travelers feel at home but enjoy luxurious comfort. A stay where every
              guest leaves with memories that last a lifetime and experiences that live on.
            </p>
          </div>

          <div>
            <h1 className={`text-4xl md:text-5xl font-serif  text-[${Theme.colors.text}] mb-3`}>Our Story Ahead</h1>
            <p className={`text-xl  text-[${Theme.colors.darkText}]  leading-relaxed`}>
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