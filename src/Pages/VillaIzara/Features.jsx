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

    // Combine both arrays for consistent styling
    const allFeatures = [...features1, ...features2];

    return (
        <div className='mb-10'>
            <h1 className={`text-[${Theme.colors.text}] font-bold text-2xl mb-3`}>
                Features & Amenities
            </h1>
            <p className={`text-[${Theme.colors.darkText}] text-xl mb-6`}>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>

            <div className="flex gap-10 flex-wrap">
                {allFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 w-72">
                        {/* Icon Container */}
                        <div
                            className={`bg-[${Theme.colors.lightText}] rounded-full p-2 flex items-center justify-center w-12 h-12`}
                        // style={{ backgroundColor: Theme.colors.darkText }}\\ \
                        >
                            <img
                                src={feature.icon}
                                alt={feature.title}
                                className="w-6 h-6"
                                style={{ filter: 'invert(100%)' }} // makes SVG white
                            />
                        </div>

                        {/* Feature Title */}
                        <span
                            style={{ color: Theme.colors.darkText }}
                            className={`font-serif text-xl font-semibold text-[${Theme.colors.text}}]`}
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
