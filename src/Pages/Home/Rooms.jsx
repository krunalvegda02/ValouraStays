import React, { useRef, useState } from 'react'
import HeaderTitle from '../../components/HeaderTitle'
import IMAGES from '../../Constants/Images'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Theme from '../../Constants/Theme'

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      image: IMAGES.ROOM1,
      title: "PEACE IN EVERY CORNER",
      description: "Experience living spaces where comfort meets elegance. Curated décor, handpicked artwork, and soothing colors create a welcoming atmosphere, perfect for relaxing and sharing moments with family or friends.",
      price: "10k",
      features: ["Curated Décor", "Handpicked Artwork", "Soothing Colors", "Family Friendly"]
    },
    {
      id: 2,
      image: IMAGES.ROOM2,
      title: "Rest in Refined Style",
      description: "Relax in bedrooms designed for peace and indulgence. Soft bedding, elegant furnishings, and warm lighting complement expansive windows that frame breathtaking views and natural light throughout the day.",
      price: "20k",
      features: ["Soft Bedding", "Elegant Furnishings", "Expansive Windows", "Natural Light"]
    },
    {
      id: 3,
      image: IMAGES.ROOM3,
      title: "Refresh and Rejuvenate",
      description: "At Velloura, even the most personal spaces are designed to refresh and rejuvenate. From sleek finishes to calming lights, every element makes daily rituals feel effortless.",
      price: "30k",
      features: ["Sleek Finishes", "Calming Lights", "Premium Amenities", "Spa-like Experience"]
    },
    {
      id: 4,
      image: IMAGES.ROOM4,
      title: "Curated For Comfort",
      description: "Sophistication meets comfort in every detail. Modern furniture, soothing textures, and airy spaces create a home-like vibe, transforming your stay into a true luxury experience.",
      price: "50k",
      features: ["Modern Furniture", "Soothing Textures", "Airy Spaces", "Luxury Experience"]
    }
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

  // ----- Drag Handlers -----
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

  return (
    <section className="section-container">
      <div className="flex justify-center mt-16">
        <div className="w-full max-w-4xl text-center">
          <HeaderTitle title="Rooms & Pricing" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-10 sm:px-6 lg:px-8 bg-[#F7F5F1] relative">


        {/* {currentIndex > 0 && (
  <div
    onClick={() => scrollToIndex(currentIndex - 1)}
    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition"
    style={{
      backgroundColor: 'transparent',
      border: `2px solid ${Theme.colors.lightText}`,
    }}
  >
    <ArrowLeft
      style={{ color: Theme.colors.lightText }}
      className="hover:bg-gray-100 rounded-full transition"
    />
  </div>
)} */}

        {/* {currentIndex < rooms.length - 1 && (
  <div
    onClick={() => scrollToIndex(currentIndex + 1)}
    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition"
    style={{
      backgroundColor: 'transparent',
      border: `2px solid ${Theme.colors.lightText}`,
    }}
  >
    <ArrowRight
      style={{ color: Theme.colors.lightText }}
      className="hover:bg-gray-100 rounded-full transition"
    />
  </div>
)} */}


        {/* Room Cards */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scroll-smooth space-x-6 pb-8 cursor-grab"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', scrollSnapType: 'x mandatory' }}
        >
          {rooms.map((room) => (
            <div
              key={room.id}
              className="room-card flex-shrink-0 w-full bg-[#F7F5F1] overflow-hidden p-10 border border-gray-100 transition-all duration-500"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="flex flex-col lg:flex-row h-full">
                <div className="lg:w-1/2 relative overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="lg:w-1/2 p-8 flex flex-col justify-between">
                  <div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">{room.title}</h2>
                    <p className="text-[#4C4C4C] font-sans-serif leading-relaxed mb-6 line-clamp-4 text-xl">{room.description}</p>
                  </div>
                  <div className="flex justify-between text-center items-center pt-6 border-t border-gray-100">
                    <p className="text-3xl font-semibold font-sans-serif text-gray-900">{room.price} <span className="text-xl font-normal text-gray-500">/ per night</span></p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {rooms.map((_, idx) => (
            <div
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${idx === currentIndex ? 'bg-[#6B6666]' : 'bg-[#6B666680]'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Rooms


























