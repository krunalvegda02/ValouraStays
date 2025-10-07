import React from 'react'
import IMAGES from '../../Constants/Images'
import Button from '../../components/Button'
import Theme from '../../Constants/Theme'
import { Star as StarSvg } from '../VillaIzara/ReviewSection'

const BottomCard = () => {
  const rating = 4 // dynamic if needed

  const renderStarRating = (rating) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <StarSvg
          key={i}
          filled={i <= rating}
          fillColor={i <= rating ? Theme.colors.lightText : "none"}
          strokeColor={Theme.colors.lightText}
          className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6"
        />
      )
    }
    return stars
  }

  return (
    <div className='section-container px-4 sm:px-6 lg:px-20'>
  <div className='relative w-full h-[250px] sm:h-[350px] lg:h-[400px] overflow-hidden shadow-2xl'>
    
    {/* Background Image */}
    <img
      src={IMAGES.UDAIPURHERO2}
      alt="Luxury Villa"
      className='w-full h-full object-cover'
    />

    {/* Gradient Overlay */}
    <div className='absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-black/20'></div>

    {/* Floating Card */}
    <div className='absolute 
                    right-2 sm:right-6 lg:right-8 
                    top-[50%] sm:top-[50%] lg:top-[45%] 
                    transform -translate-y-1/2 
                    w-[70%] sm:w-[45%] lg:w-[35%]'>
      <div className='p-4 sm:p-6 lg:p-8 shadow-2xl border border-amber-200 bg-white rounded-lg flex flex-col justify-between h-full'>
        
        {/* Header */}
        <div>
          <h3 className={`text-base sm:text-lg lg:text-xl font-semibold text-[${Theme.colors.text}] mb-1`}>
            Exclusive Offer
          </h3>
          <p className={`text-lg sm:text-xl lg:text-2xl font-bold text-[${Theme.colors.text}] font-serif mb-1 sm:mb-2`}>
            Enjoy Your Dream Vacation In Udaipur
          </p>
          <p className={`text-xs sm:text-sm lg:text-base text-[${Theme.colors.darkText}] mb-2`}>
            2 Days / 3 Night
          </p>

          {/* Star Rating */}
          <div className="flex space-x-1 mb-2">
            {renderStarRating(rating)}
          </div>
        </div>

        {/* Price & CTA */}
        <div className='flex flex-row justify-between items-center gap-2 sm:gap-2 mt-2'>
          <div className='flex flex-col items-center sm:items-start'>
            <p className={`text-xs sm:text-sm lg:text-base text-[${Theme.colors.lightText}] font-semibold`}>
              Only
            </p>
            <p className={`text-sm sm:text-lg lg:text-xl text-[${Theme.colors.lightText}] font-bold`}>
              $ 25,000/-
            </p>
          </div>
          <Button
            icon={false}
            variant="primary"
            className='px-4 sm:px-6 py-1 sm:py-2 h-auto'
          >
            <p className='text-white text-xs sm:text-sm lg:text-base'>
              Book Now
            </p>
          </Button>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default BottomCard
