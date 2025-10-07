import React from 'react'
import Theme from '../Constants/Theme'

const OffersEmail = () => {
    return (
        <div className="section-container">
            <div className="flex flex-col items-center text-center py-16 px-4 sm:px-6 lg:px-0">
                {/* Heading */}
                <h2
                    className="text-3xl sm:text-3xl md:text-5xl font-serif font-light mb-6 max-w-2xl leading-tight"
                    style={{ color: Theme.colors.text }}
                >
                    Get Best Offers On The Hotel
                </h2>

                {/* Description */}
                <p
                    className="mb-10 sm:mb-12 text-base sm:text-lg md:text-xl max-w-5xl leading-relaxed"
                    style={{ color: Theme.colors.darkText }}
                >
                    With the subscription, enjoy your favourite Hotels without having to think about it
                </p>

                {/* Email Subscription */}
                <div className="w-full max-w-4xl">
                    <div
                        className="flex flex-col sm:flex-row items-center rounded-2xl overflow-hidden bg-white p-1 transition-all duration-300 shadow-md hover:shadow-lg"
                        style={{ border: `2px solid ${Theme.colors.background}` }}
                    >
                        {/* Email Input */}
                        <input
                            type="email"
                            placeholder="Your Email Address"
                            className={`flex-grow px-4 sm:px-6 py-3 sm:py-4 outline-none w-full text-base sm:text-lg bg-transparent placeholder-[${Theme.colors.darkText}] placeholder:text-lg placeholder:font-semibold transition-all duration-300 focus:ring-2 focus:ring-[${Theme.colors.background}] focus:ring-opacity-50 rounded-xl`}
                            style={{ color: Theme.colors.darkText }}
                        />

                        {/* Button */}
                        <button
                            className={`mt-4 sm:mt-0 sm:ml-4 font-semibold text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 w-full sm:max-w-[300px] min-w-[200px]`}
                            style={{
                                backgroundColor: Theme.colors.background,
                                minWidth: '200px',
                            }}
                            onMouseEnter={e => e.currentTarget.style.backgroundColor = Theme.colors.text}
                            onMouseLeave={e => e.currentTarget.style.backgroundColor = Theme.colors.background}
                        >
                            <p className="text-white text-xl sm:text-xl tracking-wide font-semibold">SUBSCRIBE NOW</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OffersEmail
