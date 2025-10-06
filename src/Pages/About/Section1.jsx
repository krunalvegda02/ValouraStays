import React from 'react'
import Theme from '../../Constants/Theme'
import IMAGES from '../../Constants/Images'

const Section1 = () => {
  return (
    <div className="section-container">
      <div className="flex flex-col lg:flex-row w-full items-center gap-10 lg:gap-2 py-16">

        {/* Left Section - 40% */}
        <div className="w-full lg:w-5/12">
          <div className="flex flex-col items-center lg:items-start">
            {/* Image */}
            <div
              className="relative overflow-hidden rounded-xl mb-8"
              style={{
                width: '419px',
                height: '370px',
                maxWidth: '100%',
                boxShadow: '0px 0px 15px 20px #FFFFFF inset',
                opacity: 1
              }}
            >
              <img
                src={IMAGES.ABOUTS1}
                alt="Luxury Villa"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Title */}
            <p className={`text-md lg:text-xl font-serif font-bold mb-4 text-center lg:text-left text-[${Theme.colors.text}]`}>
              Luxury Crafted With Care
            </p>

            {/* Content */}
            <p className={`text-md lg:text-xl text-[${Theme.colors.text}] leading-relaxed text-center lg:text-left max-w-md`}>
              Here, every detail is crafted to make you feel at
              ease, an ambience that mirrors the comfort of
              home, yet wrapped in the elegance of a boutique
              luxury escape
            </p>
          </div>
        </div>

        {/* Right Section - 60% */}
        <div className="w-full lg:w-7/12">
          <div className="flex flex-col">
            {/* Content */}
            <div className="w-full max-w-4xl">
              <span className={`text-md md:text-4xl font-serif font-bold text-[${Theme.colors.text}]`}>
                The Veloura Story
              </span>

              <p
                className={`my-5 text-xl text-[${Theme.colors.text}]`}
                style={{
                  fontFamily: 'Oxygen, sans-serif',
                  fontWeight: 700,
                  fontStyle: 'bold',
                }}
              >
                Enjoy Your Dream Vacation At Our Stay
              </p>

              <p
                className="mb-5 text-[#6B6666] text-xl"
                style={{
                  fontFamily: 'Oxygen, sans-serif',
                  fontWeight: 400,
                }}
              >
                Veloura Stays isn't just where you crash, it's where you connect, unwind, and vibe. Think homely comfort with a cool twist. We're not your typical "hotel with rules and reception desks." Nope.
              </p>

              <p
                className="mb-5 text-[#6B6666] text-xl"
                style={{
                  fontFamily: 'Oxygen, sans-serif',
                  fontWeight: 400,
                }}
              >
                We're that in-between space where comfort meets chill vibes, where
                homeliness meets aesthetics, and where you get to live, laugh, and
                lounge like you own the place.
              </p>
            </div>

            {/* Image */}
            <div className="w-full flex justify-center mt-8">
              <div
                className="relative overflow-hidden rounded-xl"
                style={{
                  width: '750px',
                  height: '279px',
                  maxWidth: '100%',
                  maxHeight: '479px',
                  boxShadow: '0px 0px 15px 20px #FFFFFF inset',
                  opacity: 1
                }}
              >
                <img
                  src={IMAGES.ABOUTS2}
                  alt="The Veloura Story"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1
