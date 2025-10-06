import React from 'react'
import Theme from '../Constants/Theme'

const OffersEmail = () => {
    return (
        <div className='section-container '>
            <div className='flex flex-col items-center text-center py-16'>
                {/* Heading */}
                <h1
                    className="text-3xl md:text-5xl font-serif font-light mb-6 max-w-2xl leading-tight"
                    style={{ color: Theme.colors.text }}
                >
                    Get Best Offers On The Hotel
                </h1>

                {/* Description */}
                <p
                    className="mb-12 text-lg md:text-xl max-w-5xl leading-relaxed"
                    style={{ color: Theme.colors.darkText }}
                >
                    With the subscription, enjoy your favourite Hotels without having to think about it
                </p>

                {/* Email Subscription */}
                <div className="w-full max-w-4xl">
                    <div
                        className="flex flex-col sm:flex-row items-center rounded-2xl overflow-hidden bg-white  p-1 transition-all duration-300 "
                        style={{ border: `2px solid ${Theme.colors.background}` }}
                    >
                        {/* Email Input */}
                        <input
                            type="email"
                            placeholder="Your Email Address"
                            className={`flex-grow px-6 py-4 outline-none w-full text-lg bg-transparent placeholder-[${Theme.colors.darkText}] placeholder:text-xl placeholder:font-semibold`}
                            style={{ color: Theme.colors.darkText }}
                        />

                        {/* Button */}
                        <button
                            className=" font-semibold text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
                            style={{
                                backgroundColor: Theme.colors.background,
                                minWidth: '250px'
                            }}
                        >
                            <p className={`text-white text-xl `}>
                                SUBSCRIBE NOW
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OffersEmail