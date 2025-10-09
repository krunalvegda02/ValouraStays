import React, { useRef, useState } from 'react'
import HeaderTitle from '../../components/HeaderTitle'
import IMAGES from '../../Constants/Images'
import Theme from '../../Constants/Theme'
import Button from '../../components/Button'
import { debounce } from "lodash"; // optional if you already use lodash

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      image: IMAGES.ROOM1,
      title: "PEACE IN EVERY CORNER",
      description:
        "Experience living spaces where comfort meets elegance. Curated décor, handpicked artwork, and soothing colors create a welcoming atmosphere, perfect for relaxing and sharing moments with family or friends.",
      price: "10k",
    },
    {
      id: 2,
      image: IMAGES.ROOM2,
      title: "Rest in Refined Style",
      description:
        "Relax in bedrooms designed for peace and indulgence. Soft bedding, elegant furnishings, and warm lighting complement expansive windows that frame breathtaking views and natural light throughout the day.",
      price: "20k",
    },
    {
      id: 3,
      image: IMAGES.ROOM3,
      title: "Refresh and Rejuvenate",
      description:
        "At Velloura, even the most personal spaces are designed to refresh and rejuvenate. From sleek finishes to calming lights, every element makes daily rituals feel effortless.",
      price: "30k",
    },
    {
      id: 4,
      image: IMAGES.ROOM4,
      title: "Curated For Comfort",
      description:
        "Sophistication meets comfort in every detail. Modern furniture, soothing textures, and airy spaces create a home-like vibe, transforming your stay into a true luxury experience.",
      price: "50k",
    },
  ]

  const scrollContainerRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const scrollToIndex = (index) => {
    const container = scrollContainerRef.current
    if (!container) return
    const cardWidth = container.querySelector('.room-card').offsetWidth + 24
    container.scrollTo({ left: index * cardWidth, behavior: 'smooth' })
    setCurrentIndex(index)
  }

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft)
    setScrollLeft(scrollContainerRef.current.scrollLeft)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    snapToNearest()
  }

  const handleMouseLeave = () => {
    if (isDragging) snapToNearest()
    setIsDragging(false)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startX) * 1.5
    scrollContainerRef.current.scrollLeft = scrollLeft - walk
  }

  const snapToNearest = () => {
    const container = scrollContainerRef.current
    const cardWidth = container.querySelector('.room-card').offsetWidth + 24
    const nearestIndex = Math.round(container.scrollLeft / cardWidth)
    scrollToIndex(nearestIndex)
  }


  const handleScroll = useRef(
    debounce(() => {
      const container = scrollContainerRef.current;
      if (!container) return;
      const cardWidth = container.querySelector(".room-card").offsetWidth + 24;
      const newIndex = Math.round(container.scrollLeft / cardWidth);
      setCurrentIndex(newIndex);
    }, 50)
  ).current;


  return (
    <section className="section-container">
      {/* Title */}
      <div className="flex justify-center ">
        <div className="w-full max-w-4xl text-center mt-4 sm:mt-0">
          <HeaderTitle title="Rooms & Pricing" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto bg-[#F7F5F1] relative py-8 shadow-sm hide-scrollbar">

        {/* Scrollable Room Cards */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scroll-smooth space-x-6 pb-6 sm:pb-8 cursor-grab touch-pan-x hide-scrollbar"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          onScroll={handleScroll}
        >

          {rooms.map((room) => (
            <div
              key={room.id}
              className="room-card flex-shrink-0 w-full sm:w-full md:w-full lg:w-full bg-[#F7F5F1] overflow-hidden p-4 sm:p-6 md:p-10 border border-gray-100 transition-all duration-500"
              style={{ scrollSnapAlign: 'start', borderRadius: 0 }}
            >
              <div className="flex flex-col lg:flex-row h-full">
                {/* Image */}
                <div className="lg:w-1/2 relative overflow-hidden" style={{ borderRadius: 0 }}>
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-52 sm:h-64 lg:h-full object-cover transition-transform duration-700 hover:scale-105"
                    style={{ borderRadius: 0 }}
                  />
                </div>

                {/* Text Content */}
                <div className="lg:w-1/2 p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
                  <div>
                    <h2
                      className={`text-base sm:text-lg lg:text-3xl font-bold text-[${Theme.colors.text}] mb-3 sm:mb-4 font-serif leading-snug`}
                    >
                      {room.title}
                    </h2>
                    <p className="text-[#4C4C4C] text-sm sm:text-sm lg:text-2xl leading-relaxed mb-4 sm:mb-6 line-clamp-5">
                      {room.description}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-center pt-4 sm:pt-6 border-t border-gray-200 gap-3 sm:gap-4">
                    <p
                      className={`text-base sm:text-xl lg:text-2xl font-sans text-[${Theme.colors.text}]`}
                    >
                      {room.price} /{" "}
                      <span className="text-xs sm:text-sm font-normal text-gray-500">
                        Per Night
                      </span>
                    </p>
                    <Button className="px-6 sm:px-8 text-xs sm:text-sm">
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-4 sm:mt-6">
          {rooms.map((_, idx) => (
            <div
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 cursor-pointer ${idx === currentIndex ? 'bg-[#6B6666]' : 'bg-[#6B666680]'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Rooms
