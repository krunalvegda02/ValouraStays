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
    <div className="section-container px-4 sm:px-6 lg:px-12">
      <div className=''>
        {/* Title */}
        <div className="flex justify-center  md:mb-0">
          <div className="w-full text-center">
            <HeaderTitle title='Experience the Luxury of the Best Resorts' />
          </div>
        </div>

        {/* Main Section */}
        <div className="flex flex-col lg:flex-row items-center  w-full">
          {/* Left Content */}
          <div className="lg:flex-1 md:w-full max-w-3xl">
            {/* Headings */}
            <h2
              className={`font-bold text-[${Theme.colors.text}] 
              text-xl sm:text-2xl md:text-[32px] leading-snug`}
            >
              Luxury Living, Surrounded by Nature's Beauty
            </h2>

            <h2
              className={`font-bold text-[${Theme.colors.text}] 
              text-xl sm:text-2xl md:text-[32px] mb-4 sm:mb-6 leading-snug`}
            >
              Inspired by Nature, Driven by Elegant Guest Comfort.
            </h2>

            {/* Description */}
            <div
              className={`space-y-3 sm:space-y-4 text-[${Theme.colors.darkText}] mb-6 sm:mb-8`}
            >
              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                Welcome to Veloura Stays — your escape away from the hustle. Relax, unwind,
                and soak in the views.
              </p>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                Every space is designed for comfort, cozy moments, and a touch of luxury.
                Whether you're here to celebrate, reconnect, or just take a break, Veloura Stays
                is where memories happen naturally.
              </p>
            </div>

            {/* Button */}
            <Button
              onClick={() => navigate("about")}
              className="rounded-full w-full sm:w-48 md:w-52 py-2 sm:py-3 text-sm sm:text-base"
              variant="secondary"
            >
              <span className="font-sans-serif">More About Us</span>
            </Button>

            {/* Stats */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-10 mt-6 sm:mt-8">
              <div className="text-center sm:text-left">
                <h1
                  className={`text-2xl sm:text-xl font-semibold font-sans text-[${Theme.colors.text}]`}
                >
                  49+
                </h1>
                <div
                  className={`text-[${Theme.colors.text}] font-sans-serif text-sm sm:text-base`}
                >
                  Years Experience
                </div>
              </div>

              <div className="text-center sm:text-left">
                <h1
                  className={`text-2xl sm:text-xl font-semibold font-sans text-[${Theme.colors.text}]`}
                >
                  144+
                </h1>
                <div
                  className={`text-[${Theme.colors.text}] font-sans-serif text-sm sm:text-base`}
                >
                  Professional Staff
                </div>
              </div>

              <div className="text-center sm:text-left">
                <h1
                  className={`text-2xl sm:text-lg font-semibold font-sans text-[${Theme.colors.text}]`}
                >
                  1200+
                </h1>
                <div
                  className={`text-[${Theme.colors.text}] font-sans-serif text-sm sm:text-base`}
                >
                  Happy Customers
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Images */}
          <div className="relative flex justify-center lg:justify-end w-full lg:w-auto  mt-3 lg:mt-0">
            <div className="relative w-[280px] sm:w-[350px] md:w-[400px] h-[420px] sm:h-[500px] md:h-[580px]">
              {/* Top Image */}
              <div className="absolute top-2 right-0 sm:-right-10 md:-right-24 w-52 sm:w-64 md:w-80 h-64 sm:h-80 md:h-96 z-10 border-[10px] sm:border-[12px] md:border-[15px] border-white">
                <img
                  src={image2}
                  alt="Luxury interior"
                  className="w-full h-full object-cover shadow-xl rounded-md"
                />
              </div>

              {/* Bottom Image */}
              <div className="absolute bottom-4 left-0 w-52 sm:w-64 md:w-80 h-64 sm:h-80 md:h-96">
                <img
                  src={image1}
                  alt="Resort exterior"
                  className="w-full h-full object-cover shadow-lg rounded-md"
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
