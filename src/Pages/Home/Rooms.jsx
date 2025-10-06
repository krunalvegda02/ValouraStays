import React, { useRef, useState, useEffect } from 'react'
import HeaderTitle from '../../components/HeaderTitle'
import IMAGES from '../../Constants/Images'
import Button from '../../components/Button';

const Rooms = () => {
  const room1 = IMAGES.ROOM1;
  const room2 = IMAGES.ROOM2;
  const room3 = IMAGES.ROOM3;
  const room4 = IMAGES.ROOM4;

  const scrollContainerRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [blink, setBlink] = useState(false)

  const rooms = [
    {
      id: 1,
      image: room1,
      title: "PEACE IN EVERY CORNER",
      description: "Experience living spaces where comfort meets elegance. Curated décor, handpicked artwork, and soothing colors create a welcoming atmosphere, perfect for relaxing and sharing moments with family or friends.",
      price: "10k",
      features: ["Curated Décor", "Handpicked Artwork", "Soothing Colors", "Family Friendly"]
    },
    {
      id: 2,
      image: room2,
      title: "Rest in Refined Style",
      description: "Relax in bedrooms designed for peace and indulgence. Soft bedding, elegant furnishings, and warm lighting complement expansive windows that frame breathtaking views and natural light throughout the day.",
      price: "20k",
      features: ["Soft Bedding", "Elegant Furnishings", "Expansive Windows", "Natural Light"]
    },
    {
      id: 3,
      image: room3,
      title: "Refresh and Rejuvenate",
      description: "At Velloura, even the most personal spaces are designed to refresh and rejuvenate. From sleek finishes to calming lights, every element makes daily rituals feel effortless.",
      price: "30k",
      features: ["Sleek Finishes", "Calming Lights", "Premium Amenities", "Spa-like Experience"]
    },
    {
      id: 4,
      image: room4,
      title: "Curated For Comfort",
      description: "Sophistication meets comfort in every detail. Modern furniture, soothing textures, and airy spaces create a home-like vibe, transforming your stay into a true luxury experience.",
      price: "50k",
      features: ["Modern Furniture", "Soothing Textures", "Airy Spaces", "Luxury Experience"]
    }
  ]

  const scrollToIndex = (index) => {
    const container = scrollContainerRef.current
    const cardWidth = container.querySelector('.room-card').offsetWidth + 24
    container.scrollTo({ left: index * cardWidth, behavior: 'smooth' })
    setCurrentIndex(index)
  }

  const nextCard = () => {
    setBlink(true)
    setTimeout(() => {
      const nextIndex = (currentIndex + 1) % rooms.length
      scrollToIndex(nextIndex)
      setBlink(false)
    }, 300)
  }

  const prevCard = () => {
    setBlink(true)
    setTimeout(() => {
      const prevIndex = (currentIndex - 1 + rooms.length) % rooms.length
      scrollToIndex(prevIndex)
      setBlink(false)
    }, 300)
  }

  return (
    <section className="section-container  ">
      {/* Header */}
      <div className="flex justify-center mt-16 ">
        <div className="w-full max-w-4xl text-center">
          <HeaderTitle title="Rooms & Pricing" />
        </div>
      </div>

      {/* Room Cards Container */}
      <div className="max-w-7xl mx-auto p-10 sm:px-6 lg:px-8 bg-[#F7F5F1]">
        {/* Room Cards */}
        <div
          ref={scrollContainerRef}
          className="flex  overflow-x-hidden scroll-smooth space-x-6 pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {rooms.map((room, index) => (
            <div
              key={room.id}
              className={`room-card flex-shrink-0 w-full  bg-[#F7F5F1] overflow-hidden p-10 border border-gray-100 transition-all duration-500 ${blink && index === currentIndex ? 'opacity-50' : 'opacity-100'
                }`}
            >
              <div className="flex flex-col lg:flex-row h-full">
                {/* Image Section */}
                <div className="lg:w-1/2 relative overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 p-8 flex flex-col justify-between">
                  <div>
                    {/* Title */}
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">
                      {room.title}
                    </h2>

                    {/* Description */}
                    <p className="text-[#4C4C4C] font-sans-serif leading-relaxed mb-6 line-clamp-4 text-xl">
                      {room.description}
                    </p>

                  </div>

                  {/* Price and CTA */}
                  <div className="flex justify-between text-center  items-center pt-6 border-t border-gray-100 ">
                    <div className=''>
                      <p className="text-3xl  font-semibold font-sans-serif text-gray-900">
                        {room.price} <span className="text-xl font-normal text-gray-500">/ per night</span>
                      </p>
                    </div>


                    <Button
                      className='rounded-full'
                    >
                      Get Started
                    </Button>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>



        {/* Navigation Arrows */}
        <div className=" pl-[50%] flex justify-between items-center mb-8">
          <div className="flex space-x-2">
            {rooms.map((_, index) => (
              <div
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-[#6B6666] scale-115' : 'bg-[#6B666680] hover:bg-gray-400'
                  }`}
              />
            ))}
          </div>
        </div>


      </div>
    </section>
  )
}

export default Rooms