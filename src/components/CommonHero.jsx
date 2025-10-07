import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../layout/Navbar";
import { Snowflake } from "lucide-react";
import Theme from "../Constants/Theme";

const CommonHero = ({
    image,
    title,
    description,
    height = "330px",
    overlay = true,
    overlayOpacity = "bg-black/50",
    textColor = "text-white",
    customClass = "",
    showDivider = true,
}) => {
    const location = useLocation();

    return (
        <div className="relative">
            <Navbar />
            <section
                className={`w-full overflow-hidden ${customClass}`}
                style={{ height }}
            >
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${image})`,
                    }}
                >
                    {/* Overlay */}
                    {overlay && (
                        <div
                            className={`absolute inset-0 ${overlayOpacity} transition-opacity duration-300`}
                        ></div>
                    )}
                </div>

                {/* Hero Content - Centered */}
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center w-full px-4 sm:px-6 lg:px-10">
                    {/* Title */}
                    {title && (
                        <div className="mb-3 max-w-5xl px-2 sm:px-0">
                            <h1
                                className="font-serif font-bold mb-4 sm:mb-6 leading-tight"
                                style={{
                                    color: Theme.colors.background,
                                }}
                            >
                                <span className="text-xl sm:text-xl md:text-2xl lg:text-3xl">
                                    {title}
                                </span>
                            </h1>

                            {/* Divider with Icon */}
                            {showDivider && (
                                <div className="flex w-full items-center justify-center mb-2 sm:mb-4">
                                    {/* Left Divider */}
                                    <div
                                        className="border-t border-1"
                                        style={{
                                            borderColor: Theme.colors.background,
                                            width: "30%",
                                        }}
                                    ></div>

                                    {/* Icon */}
                                    <span className="mx-2 sm:mx-4">
                                        <Snowflake
                                            size={16}
                                            className="sm:size-5"
                                            style={{
                                                color: Theme.colors.lightText,
                                            }}
                                        />
                                    </span>

                                    {/* Right Divider */}
                                    <div
                                        className="border-t border-1"
                                        style={{
                                            borderColor: Theme.colors.lightText,
                                            width: "30%",
                                        }}
                                    ></div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Description */}
                    {description && (
                        <div className="max-w-4xl mx-auto px-2 sm:px-0">
                            {typeof description === "string" ? (
                                <p
                                    style={{ color: Theme.colors.background }}
                                    className="text-sm sm:text-base md:text-lg lg:text-LG leading-relaxed font-light tracking-wide"
                                >
                                    {description}
                                </p>
                            ) : (
                                description.map((paragraph, index) => (
                                    <p
                                        key={index}
                                        style={{ color: Theme.colors.background }}
                                        className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-light tracking-wide mb-3 sm:mb-4 md:mb-4 last:mb-0"
                                    >
                                        {paragraph}
                                    </p>
                                ))
                            )}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default CommonHero;
