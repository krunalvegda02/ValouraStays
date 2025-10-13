import React from 'react';
import Theme from '../../Constants/Theme';
import IMAGES from '../../Constants/Images';

const HouseRules = () => {
    const rules = [
        { icon: IMAGES.RULE1, title: "Check-in: After 1:00 PM" },
        { icon: IMAGES.RULE1, title: "Check-out: Before 11:00 AM" },
        { icon: IMAGES.RULE2, title: "15 Guests maximum" }
    ];

    return (
        <div className="mb-10 px-3 sm:px-4">
            {/* Heading */}
            <h2
                className={`font-bold text-2xl sm:text-3xl text-[${Theme.colors.text}] mb-6`}
            >
                House Rules
            </h2>

            {/* Rules List */}
            <div className="flex flex-col gap-4 sm:gap-5">
                {rules.map((rule, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 sm:gap-4"
                    >
                        {/* Icon */}
                        <div
                            className={`bg-[#E2CAB3] rounded-full flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12`}
                        >
                            <img
                                src={rule.icon}
                                alt={rule.title}
                                className="w-5 h-5 sm:w-6 sm:h-6"
                                style={{ filter: 'invert(100%)' }}
                            />
                        </div>

                        {/* Rule Text */}
                        <p
                            style={{ color: Theme.colors.darkText }}
                            className="text-base sm:text-lg md:text-xl font-medium"
                        >
                            {rule.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HouseRules;
