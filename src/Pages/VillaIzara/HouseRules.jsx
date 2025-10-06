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
        <div className="mb-10">
            <h3 className={`text-3xl font-bold text-[${Theme.colors.darkText}] mb-6`}>
                House Rules
            </h3>

            <div className="flex flex-col gap-4">
                {rules.map((rule, index) => (
                    <div key={index} className="flex items-center gap-4">
                        {/* Rule Icon */}
                        <div
                            className={`bg-[#E2CAB3] rounded-full p-2 flex items-center justify-center w-12 h-12`}
                        >
                            <img
                                src={rule.icon}
                                alt={rule.title}
                                className="w-6 h-6"
                                style={{ filter: 'invert(100%)' }} // makes SVG white
                            />
                        </div>

                        {/* Rule Text */}
                        <p style={{ color: Theme.colors.darkText }} className="text-xl">
                            {rule.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HouseRules;
