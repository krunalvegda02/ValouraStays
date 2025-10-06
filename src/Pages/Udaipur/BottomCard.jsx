import React from 'react'
import IMAGES from '../../Constants/Images'
import Button from '../../components/Button'
import Theme from '../../Constants/Theme'
import { Star as StarSvg } from '../VillaIzara/ReviewSection'

const BottomCard = () => {
    const rating = 4; // You can make this dynamic

    // Function to render star rating
    const renderStarRating = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <StarSvg
                    key={i}
                    filled={i <= rating}
                    fillColor={i <= rating ? `${Theme.colors.lightText}` : "none"}
                    strokeColor={Theme.colors.lightText}
                    className="w-6 h-6"
                />
            );
        }
        return stars;
    };

    return (
        <div className='section-container'>
            <div className='relative w-full h-[400px] overflow-hidden shadow-2xl'>
                {/* Background Image */}
                <img
                    src={IMAGES.UDAIPURHERO2}
                    alt="Luxury Villa"
                    className='w-full h-full object-cover'
                />

                {/* Gradient Overlay */}
                <div className='absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-black/20'></div>

                {/* Card on Right Side */}
                <div className='absolute right-8 top-1/2 transform -translate-y-1/2 w-[40%]'>
                    <div className='p-8 shadow-2xl border border-amber-200 bg-white rounded-lg'>
                        <h3 className={`text-2xl font-semibold text-[${Theme.colors.text}]`}>
                            Exclusive Offer
                        </h3>

                        {/* Header */}
                        <div className='mb-6'>
                            <p className={`text-3xl font-bold text-[${Theme.colors.text}] font-serif mb-2`}>
                                Enjoy Your Dream Vacation In Udaipur
                            </p>
                            <p className={`text-[${Theme.colors.darkText}] text-xl mb-3`}>2 Days / 3 Night</p>

                            {/* Star Rating with detailed info */}

                            <div className="flex space-x-1">
                                {renderStarRating(rating)}
                            </div>  
                        </div>

                        {/* CTA Section */}
                        <div className='flex justify-between items-center'>

                            <div className='flex-col'>
                                <p className={`text-[${Theme.colors.lightText}] text-2xl font-semibold`}>Only</p>
                                <p className={`text-[${Theme.colors.lightText}] text-3xl`}>
                                    $ 25,000/-
                                </p>
                            </div>
                            <Button
                                icon={false}
                                variant="primary"
                                className='px-10 py-0 h-12'
                            >
                                <p className='text-white text-xl'>
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