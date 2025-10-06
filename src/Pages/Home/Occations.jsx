import React, { useRef, useState } from "react";
import HeaderTitle from "../../components/HeaderTitle";
import ScrollCards from "../../components/ScrollCards";
import IMAGES from "../../Constants/Images";

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
    <section className="section-container">

      <div className="max-w-7xl mx-auto text-center mt-16">
        <HeaderTitle title="Villas For Every Occasion" />
      </div>

      {/* Carousel */}

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
    </section>
  );
};

export default Occasion;
