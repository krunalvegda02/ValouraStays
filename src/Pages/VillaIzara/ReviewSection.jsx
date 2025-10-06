import React from 'react';
import Theme from '../../Constants/Theme';
import IMAGES from '../../Constants/Images';


export const Star = ({ filled = true, fillColor = 'currentColor', strokeColor = 'currentColor', className = '' }) => (
    <svg
        className={className}
        fill={filled ? fillColor : 'none'}
        stroke={strokeColor}
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        width="20"
        height="20"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
    </svg>
);



const ReviewsSection = () => {
    const reviewsData = [
        { title: 'STAFF', icon: IMAGES.REVIEW4, reviews: '5' },
        { title: 'CLEAN', icon: IMAGES.REVIEW1, reviews: '4.9' },
        { title: 'MEALS', icon: IMAGES.REVIEW2, reviews: '4.8' },
        { title: 'SAFETY', icon: IMAGES.REVIEW3, reviews: '4.9' },
    ];

    const dividerColor = Theme.colors.darkText;


    return (
        <div className="">
            {/* Header */}
            <div className="mb-8">
                <h1
                    style={{ color: Theme.colors.text }}
                    className="font-bold text-2xl mb-4"
                >
                    Reviews
                </h1>

                <div className="flex items-center">
                    <div className="mr-3">
                        <Star
                            filled={true}
                            fillColor={Theme.colors.lightText}
                            strokeColor={Theme.colors.lightText}
                            className="w-8 h-8"
                        />
                    </div>
                    <div
                        style={{ color: Theme.colors.darkText }}
                        className="font-medium text-xl"
                    >
                        5 | (232 Reviews)
                    </div>
                </div>
            </div>

            {/* Main Container */}
            <div
                className="border-t border-b py-4"
                style={{ borderColor: dividerColor }}
            >
                <div className="grid grid-cols-1 md:grid-cols-4">
                    {reviewsData.map((review, index) => (
                        <div
                            key={index}
                            className="relative px-6 py-4 text-center flex flex-col items-start justify-center"
                        >
                            {/* Content */}
                            <p
                                style={{ color: Theme.colors.darkText }}
                                className="font-semibold text-xl mb-3"
                            >
                                {review.title}
                            </p>

                            <div className="flex justify-between  w-full">
                                <p
                                    style={{ color: Theme.colors.darkText }}
                                    className="font-semibold text-xl"
                                >
                                    {review.reviews}
                                </p>

                                {/* Icon Wrapper */}
                                <div
                                    className="flex justify-center items-center rounded-full p-2"
                                    style={{
                                        border: `2px solid ${dividerColor}`,
                                        color: dividerColor,
                                    }}
                                >
                                    <img
                                        src={review.icon}
                                        alt={review.title}
                                        className="w-12 h-12 rounded-full object-contain"
                                        style={{
                                            filter:
                                                'brightness(0) saturate(100%) invert(45%) sepia(0%) saturate(0%) hue-rotate(180deg) brightness(90%) contrast(85%)',
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Vertical Divider (except last column) */}
                            {index !== reviewsData.length - 1 && (
                                <div
                                    className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 h-20 mt-5 w-[2px]"
                                    style={{ backgroundColor: dividerColor }}
                                ></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReviewsSection;
