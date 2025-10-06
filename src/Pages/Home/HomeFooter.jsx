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
      icon: icon3, // SVG file
      title: "Chef on Wheels",
      description: "Savor gourmet experiences without leaving your villa.Our Chef on Wheels brings bespoke, delicious meals crafted just for you, making every dining  moment effortless, personal, and unforgettable"
    },
    {
      id: 2,
      icon: icon2, // SVG file
      title: "Breathtaking Locations",
      description: `Wake up to mesmerizing vistas that captivate the
senses. Rolling hills, serene landscapes, and 
stunning natural beauty surround you, making 
every moment spent here truly unforgettable`
    },
    {
      id: 3,
      icon: icon1, // SVG file
      title: "Private Pools & Luxe Amenitirs",
      description: `Dive into relaxation with your private pool and enjoy 
world-class amenities. From spa-like comforts to 
modern conveniences, every feature is curated for 
your ultimate comfort and indulgence.`
    }
  ]


  return (
    <div className="section-container">
      <div className="mt-8 mb-16">
        {/* HeaderTitle with constrained width */}
        <div className="flex justify-center mb-6">
          <div className="w-full max-w-[200rem]">
            <HeaderTitle
              title='A Stay Like Nowhere Else'
            />
          </div>
        </div>


        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="flex group cursor-pointer ">

              {/* Icon Container */}
              <div className="w-28 h-28 rounded-2xl flex items-center justify-center  ">
                {(
                  <img src={feature.icon} alt={feature.title} className="w-32 h-32 mr-5 " />
                )}
              </div>


              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">
                  {feature.title}
                </h3>
                <p className={`stroke-2  text-md leading-relaxed text-[${Theme.colors.text}]`}>
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