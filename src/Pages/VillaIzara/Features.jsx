import React from 'react';
import Theme from '../../Constants/Theme';
import IMAGES from '../../Constants/Images';

const Features = () => {
    const features1 = [
        { icon: IMAGES.FEATURE4, title: "Air Conditioning" },
        { icon: IMAGES.FEATURE1, title: "Free parking on premises" },
        { icon: IMAGES.FEATURE5, title: "Television" }
    ];

    const features2 = [
        { icon: IMAGES.FEATURE2, title: "Washing Machine" },
        { icon: IMAGES.FEATURE3, title: "Restaurant" },
        { icon: IMAGES.FEATURE6, title: "Wifi" }
    ];

    const allFeatures = [...features1, ...features2];

    return (
        <div className="mb-10 px-2 sm:px-4">
            {/* Heading */}
            <h2
                className={`text-[${Theme.colors.text}] font-bold text-2xl sm:text-3xl md:text-4xl mb-3`}
            >
                Features & Amenities
            </h2>

            {/* Subtext */}
            <p
                className={`text-[${Theme.colors.darkText}] text-sm sm:text-base md:text-lg mb-6 max-w-3xl`}
            >
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout.
            </p>

            {/* Feature Grid */}
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 md:gap-10"
            >
                {allFeatures.map((feature, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto"
                    >
                        {/* Icon Container */}
                        <div
                            className={`bg-[${Theme.colors.lightText}] rounded-full flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 shrink-0`}
                        >
                            <img
                                src={feature.icon}
                                alt={feature.title}
                                className="w-5 h-5 sm:w-6 sm:h-6"
                                style={{ filter: 'invert(100%)' }}
                            />
                        </div>

                        {/* Title */}
                        <span
                            style={{ color: Theme.colors.darkText }}
                            className={`font-serif text-base sm:text-lg md:text-xl font-semibold`}
                        >
                            {feature.title}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
