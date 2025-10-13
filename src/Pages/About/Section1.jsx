import React from 'react'
import Theme from '../../Constants/Theme'
import IMAGES from '../../Constants/Images'

const Section1 = () => {
  return (
    <div className="section-container">
      <div className="flex flex-col lg:flex-row w-full items-center gap-2 lg:gap-8 my-6 mt-12">

        {/* Left Section - 40% */}
        <div className="w-full lg:w-5/12 flex flex-col items-center lg:items-start px-4 sm:px-6 lg:px-0 ">
          <div
            className="relative overflow-hidden rounded-xl mb-3 w-full max-w-[419px] sm:max-w-full"
            style={{
              height: '370px',
              maxWidth: '100%',
              boxShadow: '0px 0px 15px 20px #FFFFFF inset',
              opacity: 1,
              minWidth: '320px', // maintain some minimal width on desktop
            }}
          >
            <img
              src={IMAGES.ABOUTS1}
              alt="Luxury Villa"
              className="w-full h-full object-cover rounded-xl"
              style={{ minWidth: '320px' }} // keep image ratio on desktop
            />
          </div>

          <p
            className={` text-xl text-[${Theme.colors.text}] pb-1 `}
            style={{
              fontFamily: 'Oxygen, sans-serif',
              fontWeight: 700,
              fontStyle: 'bold',
            }}
          >
            Luxury Crafted With Care
          </p>

          <p className={`text-base sm:text-md md:text-lg  text-[${Theme.colors.darkText}] leading-relaxed text-center lg:text-left max-w-md `}>
            Here, every detail is crafted to make you feel at ease, an ambience that mirrors the comfort of home, yet wrapped in the elegance of a boutique luxury escape
          </p>
        </div>

        {/* Right Section - 60% */}
        <div className="w-full lg:w-7/12 flex flex-col items-center px-4 sm:px-6 lg:px-0">
          <div className="w-full max-w-4xl">
            <span className={`text-2xl md:text-3xl font-serif font-bold text-[${Theme.colors.text}]`}>
              The Veloura Story
            </span>

            <p
              className={` text-base sm:text-md md:text-lg  text-[${Theme.colors.text}] py-1`}
              style={{
                fontFamily: 'Oxygen, sans-serif',
                fontWeight: 700,
                fontStyle: 'bold',
              }}
            >
              Enjoy Your Dream Vacation At Our Stay
            </p>

            <p
              className="mb-1 text-[#6B6666] text-base sm:text-md md:text-lg "
              style={{
                fontFamily: 'Oxygen, sans-serif',
                fontWeight: 400,
              }}
            >
              Veloura Stays isn't just where you crash, it's where you connect, unwind, and vibe. Think homely comfort with a cool twist. We're not your typical "hotel with rules and reception desks." Nope.
            </p>

            <p
              className=" text-[#6B6666] text-base sm:text-md md:text-lg "
              style={{
                fontFamily: 'Oxygen, sans-serif',
                fontWeight: 400,
              }}
            >
              We're that in-between space where comfort meets chill vibes, where homeliness meets aesthetics, and where you get to live, laugh, and lounge like you own the place.
            </p>
          </div>

          <div
            className="w-full flex justify-center mt-3 relative overflow-hidden rounded-xl"
            style={{
              width: '750px',
              height: '279px',
              maxWidth: '100%',
              maxHeight: '479px',
              boxShadow: '0px 0px 15px 20px #FFFFFF inset',
              opacity: 1,
              minWidth: '600px', // preserve ratio on desktop
              minHeight: '224px',
            }}
          >
            <img
              src={IMAGES.ABOUTS2}
              alt="The Veloura Story"
              className="w-full h-full object-cover rounded-xl"
              style={{ minWidth: '600px', minHeight: '224px' }} // keep desktop ratio
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Section1
