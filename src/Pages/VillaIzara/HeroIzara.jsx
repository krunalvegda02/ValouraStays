import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../layout/Navbar";

// Import images directly from assets
import hero1 from "../../assets/hero1.jpeg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.webp";
import hero4 from "../../assets/hero4.jpg";
// import HeaderTitle from "../../components/HeaderTitle";
import Theme from "../../Constants/Theme";
// import DividerWithIcon from "./HorizontalDivider";
import { ArrowLeft, ArrowRight, Snowflake } from "lucide-react";

const HeroIzara = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const navigate = useNavigate();

    // Use imported images directly
    const heroImages = [hero1, hero2, hero3, hero4];

    const handleNavigation = (path) => {
        navigate(path);
    };

    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
            );
            setIsTransitioning(false);
        }, 800);
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
            );
            setIsTransitioning(false);
        }, 800);
    };

    const goToSlide = (index) => {
        if (isTransitioning || index === currentImageIndex) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentImageIndex(index);
            setIsTransitioning(false);
        }, 800);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (

        <div >
            <section id="home" className=" relative h-[700px] flex items-center justify-center overflow-hidden">
                {/* Background Slideshow with Enhanced Transitions */}
                <div className=" inset-0 z-0">
                    {heroImages.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-out ${index === currentImageIndex
                                ? 'opacity-100 scale-100'
                                : 'opacity-0 scale-105'
                                }`}
                            style={{
                                backgroundImage: `url(${image})`
                            }}
                        >
                            {/* Enhanced Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/40"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
                        </div>
                    ))}
                </div>

                {/* Enhanced Navigation Arrows */}
                <div
                    onClick={prevSlide}
                    className="absolute left-6 top-[41%] md:left-10 z-20 p-3 rounded-full backdrop-blur-lg border hover:bg-white/25 transition-all duration-500 group shadow-2xl hover:shadow-2xl hover:scale-110"
                    aria-label="Previous image"
                    style={{
                        backgroundColor: 'rgba(241, 229, 209, 0.15)',
                        borderColor: 'rgba(241, 229, 209, 0.3)',
                    }}
                >
                    <ArrowLeft
                        size={28}
                        style={{
                            color: '#F1E5D1',
                        }}
                        className="transform group-hover:translate-x transition-transform"
                    />
                </div>

                <div
                    onClick={nextSlide}
                    className="absolute right-6 top-[41%] md:right-10 z-20 p-3 rounded-full backdrop-blur-lg border hover:bg-white/25 transition-all duration-500 group shadow-2xl hover:shadow-2xl hover:scale-110"
                    aria-label="Next image"
                    style={{
                        backgroundColor: 'rgba(241, 229, 209, 0.15)',
                        borderColor: 'rgba(241, 229, 209, 0.3)',
                    }}
                >
                    <ArrowRight
                        size={28}
                        style={{
                            color: '#F1E5D1',
                        }}
                        className="transform group-hover:translate-x transition-transform"
                    />
                </div>


                {/* Enhanced Hero Content */}
                <div className=" absolute top-[30%] z-10 text-center text-white max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 ">

                    {/* Enhanced Main Heading */}
                    <div className="mb-5">

                        <div className="pt-12">
                            <span
                                className="text-7xl font-serif font-bold"
                                style={{ color: Theme.colors.background }}
                            >
                                Villa Izara
                            </span>
                        </div>



                        <div className="flex w-full items-center justify-center ">
                            {/* Left Divider */}
                            <div
                                className="border-t border-1"
                                style={{ borderColor: Theme.colors.background, width: "35%" }}
                            ></div>

                            {/* Icon */}
                            <span className="mx-2">
                                <Snowflake
                                    size={24}
                                    className=""
                                    style={{ borderColor: Theme.colors.lightText, color: Theme.colors.lightText }}
                                />
                            </span>

                            {/* Right Divider */}
                            <div
                                className="border-t border-1"
                                style={{ borderColor: Theme.colors.lightText, width: "35%" }}
                            ></div>
                        </div>
                    </div>

                    {/* Enhanced Description */}
                    <p
                        style={{ color: Theme.colors.background }}
                        className="text-2xl max-w-3xl mx-auto leading-relaxed text-white/90 font-light tracking-wide px-4">
                        Home / Villas & Resorts / Villa Izara
                    </p>
                </div>
            </section>
        </div>

    );
};

export default HeroIzara; 