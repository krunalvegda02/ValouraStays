import React, { useRef, useState } from 'react'
import ScrollCards from '../../components/ScrollCards'
import Theme from '../../Constants/Theme';

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
    { id: 1, image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&h=400&fit=crop", title: "Birthday Party" },
    { id: 2, image: "https://images.unsplash.com/photo-1598899134739-92d4c3e7d7eb?w=600&h=400&fit=crop", title: "Corporate Party" },
    { id: 3, image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=400&fit=crop", title: "Wedding Party" },
    { id: 4, image: "https://images.unsplash.com/photo-1522199710521-72d69614c702?w=600&h=400&fit=crop", title: "Anniversary" },
    { id: 5, image: "https://images.unsplash.com/photo-1505575967451-3a6ecb0f5f4f?w=600&h=400&fit=crop", title: "Baby Shower" },
    { id: 6, image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&h=400&fit=crop", title: "Birthday Party" },
    { id: 7, image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&h=400&fit=crop", title: "Birthday Party" },
    { id: 8, image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&h=400&fit=crop", title: "Birthday Party" },
    { id: 9, image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&h=400&fit=crop", title: "Birthday Party" },
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