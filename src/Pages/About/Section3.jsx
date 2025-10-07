import React, { useRef, useState } from 'react'
import ScrollCards from '../../components/ScrollCards'
import Theme from '../../Constants/Theme';
import IMAGES from '../../Constants/Images';

const Section3 = () => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const occasions = [
    { id: 1, image: IMAGES.OCCATIONS1, title: "Wellness Retreat" },
    { id: 2, image: IMAGES.OCCATIONS2, title: "Birthday Party" },
    { id: 3, image: IMAGES.OCCATIONS3, title: "Club Party" },
    { id: 4, image: IMAGES.OCCATIONS4, title: "Pool Party" },
    { id: 5, image: IMAGES.OCCATIONS5, title: "Corporate Party" },
    { id: 6, image: IMAGES.OCCATIONS6, title: "Family Vacation" },
    { id: 7, image: IMAGES.OCCATIONS7, title: "Honeymoon" },
    { id: 8, image: IMAGES.OCCATIONS8, title: "Wedding Occasion" },
  ];

  return (
    <div className="section-container w-full px-4 sm:px-6 md:px-8 py-10 sm:py-16">
      <div className="mx-auto space-y-12">

        {/* First Content Block */}
        <div>
          <h2 className={`text-3xl sm:text-4xl md:text-4xl font-serif text-[${Theme.colors.text}] mb-4 sm:mb-6`}>
            The Origin of Veloura Era
          </h2>
          <p className="text-base sm:text-lg md:text-2xl text-gray-600 leading-relaxed">
            Veloura Stays was inspired by a simple idea that travel should be effortless, immersive, and luxurious without being
            pretentious. We felt that too many accommodations either had no soul or the comfort was lacking. Our dream was to
            create a place that combines the comfort of home with curated sophistication, designs where guests feel cared for,
            inspired, and completely at ease.
          </p>
        </div>

        {/* Second Content Block */}
        <div>
          <h2 className={`text-3xl sm:text-4xl md:text-4xl font-serif text-[${Theme.colors.text}] mb-4 sm:mb-6`}>
            Why Our Retreats Stand Out?
          </h2>
          <p className="text-base sm:text-lg md:text-2xl text-gray-600 leading-relaxed">
            What differentiates us is our quiet attention to detail. We take special care in delivering interiors that balance elegance
            and comfort, and our amenities are all chosen to provide convenience for you upon arrival. Every detail conveys thoughtful
            luxury. And here, your stay is not a functional experience at all, but a multi-sensory experience. Imagine plush beds, soft
            ambient lighting, tranquil corners for introspection, and curated contributions to make every moment personalized each day.
          </p>
        </div>

        {/* Scrollable Cards */}
        <div
          ref={sliderRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto overflow-y-hidden hide-scrollbar cursor-grab transition-all duration-300 pb-4"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseLeave={handleMouseLeaveOrUp}
        >
          {occasions.map((occasion) => (
            <div
              key={occasion.id}
              className="bg-white rounded-3xl shadow-md hover:shadow-2xl transform hover:scale-105 transition duration-500 flex-shrink-0 min-w-[200px] sm:min-w-[240px] md:min-w-[260px] cursor-pointer"
            >
              <ScrollCards
                image={occasion.image}
                title={occasion.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Section3
