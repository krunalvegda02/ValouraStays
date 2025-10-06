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
    { id: 4, image: IMAGES.OCCATIONS4, title: "Pool party" },
    { id: 5, image: IMAGES.OCCATIONS5, title: "Corporate Party" },
    { id: 6, image: IMAGES.OCCATIONS6, title: "Family vacation" },
    { id: 7, image: IMAGES.OCCATIONS7, title: "Honenymoon" },
    { id: 8, image: IMAGES.OCCATIONS8, title: "Wedding Occasion" },
  ];


  return (
    <div className="section-container">
      <div className=" mx-auto">
        {/* First Content Block */}
        <div className="mb-16">
          <h1 className={`text-4xl md:text-5xl font-serif  text-[${Theme.colors.text}] mb-6`}>
            The Origin of Veloura Era
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Veloura Stays was inspired by a simple idea that travel should be effortless, immersive, and luxurious without being
            pretentious. We felt that too many accommodations either had no soul or the comfort was lacking. Our dream was to
            create a place that combines the comfort of home with curated sophistication, designs where guests feel cared for,
            inspired, and completely at ease.
          </p>
        </div>

        {/* Second Content Block */}
        <div className="mb-16">
          <h1 className={`text-4xl md:text-5xl font-serif  text-[${Theme.colors.text}] mb-6`}>
            Why Our Retreats Stand Out?
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            What differentiates us is our quiet attention to detail. We take special care in delivering interiors that balance elegance
            and comfort, and our amenities are all chosen to provide convenience for you upon arrival. Every detail conveys thoughtful
            luxury. And here, your stay is not a functional experience at all, but a multi-sensory experience. Imagine plush beds, soft
            ambient lighting, tranquil corners for introspection, and curated contributions to make every moment personalized each day.
          </p>
        </div>

        {/* Space for your component */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto overflow-y-hidden hide-scrollbar cursor-grab transition-all duration-300"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
        >
          {occasions.map((occasion) => (
            <div
              key={occasion.id}
              className="bg-white rounded-3xl shadow-md hover:shadow-2xl transform hover:scale-105 transition duration-500 min-w-[260px] flex-shrink-0 cursor-pointer"
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