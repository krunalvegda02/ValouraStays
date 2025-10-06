import React, { useRef, useState } from "react";
import HeaderTitle from "../../components/HeaderTitle";
import ScrollCards from "../../components/ScrollCards";

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
