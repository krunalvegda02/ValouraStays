import { useNavigate } from 'react-router-dom'
import React from 'react'
import Button from "../../components/Button"
import HeaderTitle from '../../components/HeaderTitle'
import Theme from '../../Constants/Theme'
import Images from "../../Constants/Images"

const BestResorts = () => {
  const navigate = useNavigate()
  const image1 = Images.HOME1
  const image2 = Images.HOME2

  return (
    <div className="section-container ">
      <div className='mb-16'>
        {/* Title Row */}

        <div className="flex justify-center mt-5">
          <div className="w-full   text-center">
            <HeaderTitle title='Experience the Luxury of the Best Resorts' />
          </div>
        </div>


        {/* Content Sections in Column */}
        <div className="flex flex-col lg:flex-row items-center  w-full">
          {/* Left Side - Content */}
          <div className="lg:flex-1 md:w-full max-w-3xl">
            {/* Heading */}
            <h2 className={`text-[32px] w-full font-bold text-[${Theme.colors.text}]`}>
              Luxury Living, Surrounded by Nature's Beauty
            </h2>

            {/* Subheading */}
            <h2 className={`text-[32px] w-full font-bold text-[${Theme.colors.text}] mb-6 `}>
              Inspired by Nature, Driven by Elegant Guest Comfort.
            </h2>

            {/* Main Content */}
            <div className={`space-y-4 text-[${Theme.colors.darkText}] mb-8`}>
              <p className='text-[28px]'>
                Welcome to Veloura Stays. Your escape away from the
                hustle. Relax, unwind, and soak in the views.
              </p>
              <p className='text-[28px]'>
                Every space is designed for comfort, cozy moments, and a little
                touch of luxury. Whether you're here to celebrate, reconnect,
                or just take a break, Veloura Stays is where memories happen
                naturally.
              </p>
            </div>

            {/* About Us Button */}
            <Button
              onClick={() => navigate("about")}
              className='rounded-full w-52'
              variant='secondary'
            >
              <span className='font-sans-serif'> More About Us </span>
            </Button>

            {/* Stats Section */}
            <div className="flex flex-wrap gap-8 sm:gap-12 mt-8">
              <div >
                <h1 className={`w-full mx-auto ] font-semibold  font-sans text-[${Theme.colors.text}]`}>49+</h1>
                <div className={`text-[${Theme.colors.text}] font-sans-serif text-lg`}>Years Experience</div>
              </div>
              <div>
                <h1 className={`text-3xl font-semibold  font-sans text-[${Theme.colors.text}]`}>144+</h1>
                <div className={`text-[${Theme.colors.text}] font-sans-serif text-lg`}>Proffesional Staff</div>
              </div>
              <div>
                <h1 className={`text-3xl font-semibold  font-sans text-[${Theme.colors.text}]`}>1200+</h1>
                <div className={`text-[${Theme.colors.text}] font-sans-serif text-lg`}>Happy Customers</div>
              </div>
            </div>
          </div>

          {/* Right Side - Images */}
          <div className="lg:w-auto relative">
            <div className="relative w-[400px] h-[580px]">
              {/* Top Image - Right Top Direction */}
              <div className="absolute top-2 -right-32 w-80 h-96 z-10 border-[15px] border-white">
                <img
                  src={image2}
                  alt="Luxury interior"
                  className="w-full h-full object-cover  shadow-xl"
                />
              </div>

              {/* Bottom Image - Bottom Left Direction */}
              <div className="absolute bottom-7 left-0 w-80 h-96">
                <img
                  src={image1}
                  alt="Resort exterior"
                  className="w-full h-full object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default BestResorts