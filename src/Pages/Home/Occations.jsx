import React, { useRef, useState } from "react";
import HeaderTitle from "../../components/HeaderTitle";
import IMAGES from "../../Constants/Images";

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

const Occasion = () => {
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);
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

  return (
    <section className="section-container px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mt-12 sm:mt-16">
        <HeaderTitle title="Villas For Every Occasion" />
        <p className="text-gray-600  text-sm sm:text-base lg:text-lg px-4 sm:px-0">
          Whether it’s a private celebration or a serene getaway, our villas are designed to make every moment memorable.
        </p>
      </div>

      {/* Carousel */}
      <div
        ref={sliderRef}
        className="flex gap-4 sm:gap-6 mt-10 overflow-x-auto overflow-y-hidden hide-scrollbar cursor-grab transition-all duration-300 snap-x snap-mandatory scroll-smooth pb-4"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
      >
        {occasions.map((occasion) => (
          <div
            key={occasion.id}
            className="group relative rounded-3xl flex-shrink-0 snap-start overflow-hidden 
                       min-w-[200px] sm:min-w-[260px] md:min-w-[300px] lg:min-w-[320px] 
                       transition-transform duration-500 transform hover:-translate-y-2"
          >
            {/* Image */}
            <img
              src={occasion.image}
              alt={occasion.title}
              className="w-full h-54 sm:h-60 object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-3xl shadow-[0_0_25px_rgba(0,0,0,0.4)] opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* Title */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold font-serif translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {occasion.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Occasion;
