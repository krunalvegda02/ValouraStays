import React from 'react';
import Theme from '../../Constants/Theme';
import IMAGES from '../../Constants/Images';

const Features = () => {
    const features = [
        { icon: IMAGES.FEATURE4, title: "Air Conditioning" },
        { icon: IMAGES.FEATURE1, title: "Free Parking" },
        { icon: IMAGES.FEATURE5, title: "Smart TV" },
        { icon: IMAGES.FEATURE2, title: "Washing Machine" },
        { icon: IMAGES.FEATURE3, title: "Restaurant" },
        { icon: IMAGES.FEATURE6, title: "High-Speed WiFi" }
    ];

    return (
        <div>
            {/* Header Section */}
            <div>
                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight"
                    style={{ color: Theme.colors.text }}>
                    Features & Amenities
                </h2>

                {/* Subtext */}
                <p className="text-base sm:text-md md:text-lg leading-relaxed mb-3 "
                    style={{ color: Theme.colors.darkText }}>
                    Experience luxury living with our carefully curated amenities designed for your comfort and convenience
                </p>
            </div>

            {/* Feature Grid - 2 columns on mobile */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 max-w-6xl mx-auto mb-3">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden rounded-xl sm:rounded-2xl p-3 sm:p-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                        style={{
                            backgroundColor: `${Theme.colors.lightText}08`,
                            border: `1px solid ${Theme.colors.lightText}20`,
                            backdropFilter: 'blur(10px)'
                        }}
                    >
                        {/* Background Gradient Effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{
                                background: `linear-gradient(135deg, ${Theme.colors.lightText}15, transparent)`
                            }}></div>

                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-center text-center ">
                            {/* Icon Container */}
                            <div className="relative ">
                                {/* Icon Background Glow */}
                                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        backgroundColor: Theme.colors.lightText,
                                        filter: 'blur(12px)',
                                        transform: 'scale(1.2)'
                                    }}></div>

                                {/* Icon */}
                                <div className="relative rounded-lg sm:rounded-2xl p-2 sm:p-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 mb-3"
                                    style={{
                                        backgroundColor: Theme.colors.lightText,
                                        boxShadow: `0 8px 32px ${Theme.colors.lightText}40`
                                    }}>
                                    <img
                                        src={feature.icon}
                                        alt={feature.title}
                                        className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 transition-transform duration-300"
                                        style={{ filter: 'invert(100%)' }}
                                    />
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="font-serif text-sm sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 tracking-wide leading-tight"
                                style={{ color: Theme.colors.text }}>
                                {feature.title}
                            </h3>

                            {/* Subtle Description */}
                            <p className="text-xs sm:text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                                style={{ color: Theme.colors.darkText }}>
                                Included
                            </p>
                        </div>

                        {/* Border Glow Effect */}
                        <div className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{
                                boxShadow: `0 0 0 1px ${Theme.colors.lightText}30`,
                                background: `linear-gradient(135deg, ${Theme.colors.lightText}10, transparent)`
                            }}></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;