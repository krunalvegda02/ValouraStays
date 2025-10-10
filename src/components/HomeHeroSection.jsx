import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../layout/Navbar";
import IMAGES from "../Constants/Images";
import HeaderTitle from "./HeaderTitle";
import Theme from "../Constants/Theme";
import DividerWithIcon from "./HorizontalDivider";
import { ArrowLeft, ArrowRight, Snowflake } from "lucide-react";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const heroImages = [IMAGES.HERO2, IMAGES.HERO1, IMAGES.HERO3, IMAGES.HERO4];

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
    <div className="relative">
      <Navbar />

      <section id="home" className="h-screen flex items-center justify-center overflow-hidden">
        {/* Background Slideshow */}
        <div className="inset-0 z-0">
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
              <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/40"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
            </div>
          ))}
        </div>

        {/* Desktop Navigation Arrows */}
        <div
          onClick={prevSlide}
          className="hidden md:flex absolute left-6 top-[41%] md:left-10 z-20 p-3 rounded-full backdrop-blur-lg border hover:bg-white/25 transition-all duration-500 group shadow-2xl hover:shadow-2xl hover:scale-110 cursor-pointer"
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
            className="transform group-hover:-translate-x-1 transition-transform"
          />
        </div>

        <div
          onClick={nextSlide}
          className="hidden md:flex absolute right-6 top-[41%] md:right-10 z-20 p-3 rounded-full backdrop-blur-lg border hover:bg-white/25 transition-all duration-500 group shadow-2xl hover:shadow-2xl hover:scale-110 cursor-pointer"
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
            className="transform group-hover:translate-x-1 transition-transform"
          />
        </div>

        {/* Touch-friendly swipe areas for mobile */}
        <div className="md:hidden absolute inset-0 z-10 flex">
          <div
            className="flex-1"
            onClick={prevSlide}
            style={{ cursor: 'pointer' }}
          />
          <div
            className="flex-1"
            onClick={nextSlide}
            style={{ cursor: 'pointer' }}
          />
        </div>

        {/* Hero Content */}
        <div className="absolute top-[30%] z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="mb-5">
            <div
              className="text-4xl sm:text-5xl md:text-6xl"
              style={{
                fontFamily: "'MonteCarlo', cursive",
                color: Theme.colors.background,
              }}
            >
              Welcome to Veloura Stays
            </div>

            <div className="pt-8 sm:pt-10 md:pt-12">
              <span
                className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold"
                style={{ color: Theme.colors.background }}
              >
                Villas & Resorts
              </span>
            </div>

            <div className="flex w-full items-center justify-center pt-4 sm:pt-6 md:pt-8">
              <div
                className="border-t border-1"
                style={{
                  borderColor: Theme.colors.background,
                  width: "30%",
                  maxWidth: "200px"
                }}
              ></div>
              <span className="mx-2 sm:mx-3">
                <Snowflake
                  size={20}
                  className="md:size-5"
                  style={{ borderColor: Theme.colors.lightText, color: Theme.colors.lightText }}
                />
              </span>
              <div
                className="border-t border-1"
                style={{
                  borderColor: Theme.colors.lightText,
                  width: "30%",
                  maxWidth: "200px"
                }}
              ></div>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 md:mt-10 space-y-3 sm:space-y-4">
            <p
              style={{ color: Theme.colors.background }}
              className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-white/90 font-light tracking-wide px-4"
            >
              Think luxury villas, serene views, and comfort wrapped in elegance.
              Book your dreamy getaway, your private slice of paradise.
            </p>
            {/* <p
              style={{ color: Theme.colors.background }}
              className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 md:mb-14 max-w-4xl mx-auto leading-relaxed text-white/90 font-light tracking-wide px-4"
            >
            </p> */}
          </div>

          {/* Mobile Navigation Buttons - Below Content */}
          <div className="md:hidden flex justify-center space-x-8 mt-8">
            <div
              onClick={prevSlide}
              className="p-2 rounded-full backdrop-blur-lg border-2 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-xl cursor-pointer"
              aria-label="Previous image"
              style={{
                backgroundColor: 'rgba(241, 229, 209, 0.2)',
                borderColor: 'rgba(241, 229, 209, 0.4)',
              }}
            >
              <ArrowLeft
                size={24}
                style={{
                  color: '#F1E5D1',
                }}
              />
            </div>

            <div
              onClick={nextSlide}
              className="p-2 rounded-full backdrop-blur-lg border-2 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-xl cursor-pointer"
              aria-label="Next image"
              style={{
                backgroundColor: 'rgba(241, 229, 209, 0.2)',
                borderColor: 'rgba(241, 229, 209, 0.4)',
              }}
            >
              <ArrowRight
                size={24}
                style={{
                  color: '#F1E5D1',
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;