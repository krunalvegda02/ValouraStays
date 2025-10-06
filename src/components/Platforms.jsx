import React from 'react'
import HeaderTitle from './HeaderTitle'
import IMAGES from '../Constants/Images'

const Platforms = () => {
    const platforms1 = [
        IMAGES.PLATFORM1,
        IMAGES.PLATFORM2,
        IMAGES.PLATFORM3,
        IMAGES.PLATFORM4,
        IMAGES.PLATFORM5,
        IMAGES.PLATFORM6,
    ]

    const platforms2 = [
        IMAGES.PLATFORM7,
        IMAGES.PLATFORM8,
        IMAGES.PLATFORM9,
    ]

    return (
        <div className="section-container">
            <div className="my-8">
                <HeaderTitle title="Find us on all your favorite platforms!" />

                {/* First Row */}
                <div className="mt-10 flex flex-wrap justify-center gap-6 mb-8">
                    {platforms1.map((logo, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center w-42 h-24 bg-white shadow-lg rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                        >
                            <img
                                src={logo}
                                alt={`Platform ${index + 1}`}
                                className="max-h-12 max-w-[80px] object-contain transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                    ))}
                </div>

                {/* Second Row */}
                <div className="flex flex-wrap justify-center gap-6">
                    {platforms2.map((logo, index) => (
                        <div
                            key={index + platforms1.length}
                            className="flex items-center justify-center w-42 h-24 bg-white shadow-lg rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                        >
                            <img
                                src={logo}
                                alt={`Platform ${index + platforms1.length + 1}`}
                                className="max-h-12 max-w-[80px] object-contain transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Platforms