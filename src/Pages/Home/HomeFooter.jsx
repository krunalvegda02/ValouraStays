import React from 'react'
import HeaderTitle from '../../components/HeaderTitle'
import IMAGES from '../../Constants/Images'
import Theme from '../../Constants/Theme';

const HomeFooter = () => {

  const icon1 = IMAGES.ICON1;
  const icon2 = IMAGES.ICON2;
  const icon3 = IMAGES.ICON3;

  const features = [
    {
      id: 1,
      icon: icon3,
      title: "Chef on Wheels",
      description: "Savor gourmet experiences without leaving your villa.Our Chef on Wheels brings bespoke, delicious meals crafted just for you, making every dining moment effortless, personal, and unforgettable"
    },
    {
      id: 2,
      icon: icon2,
      title: "Breathtaking Locations",
      description: `Wake up to mesmerizing vistas that captivate the senses. Rolling hills, serene landscapes, and stunning natural beauty surround you, making every moment spent here truly unforgettable`
    },
    {
      id: 3,
      icon: icon1,
      title: "Private Pools & Luxe Amenities",
      description: `Dive into relaxation with your private pool and enjoy world-class amenities. From spa-like comforts to modern conveniences, every feature is curated for your ultimate comfort and indulgence.`
    }
  ]

  return (
    <div className="section-container px-4 sm:px-6 lg:px-8">
      <div className="mt-8 mb-16 max-w-[1200px] mx-auto">

        {/* HeaderTitle with constrained width */}
        <div className="flex justify-center mb-10">
          <div className="w-full max-w-xl">
            <HeaderTitle title='A Stay Like Nowhere Else' />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-12">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col sm:flex-row items-center sm:items-start cursor-pointer group">

              {/* Icon Container */}
              <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 mb-6 sm:mb-0 sm:mr-6">
                <img src={feature.icon} alt={feature.title} className="w-full h-full object-contain" />
              </div>

              {/* Content */}
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className={`text-sm sm:text-base leading-relaxed text-[${Theme.colors.text}]`}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default HomeFooter
