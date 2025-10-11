import React from "react";

const BlinkCards = ({ image, name }) => {
    return (
        <div className="group cursor-pointer text-center overflow-hidden shadow-lg transition duration-300 relative">
            <img
                src={image}
                alt={name}
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-black bg-white/70 px-6 py-10 ">
                    {name}
                </h3>
            </div>
        </div>
    );
};

export default BlinkCards;
