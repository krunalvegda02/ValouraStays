import React, { useState } from 'react'
import HeaderTitle from './HeaderTitle'
import { ChevronLeft, ChevronRight } from "lucide-react"
import IMAGES from '../Constants/Images'
import Theme from '../Constants/Theme'

const Testimonials = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)
    const testimonial1 = IMAGES.TESTIMONIAL1;
    const testimonial2 = IMAGES.TESTIMONIAL2;
    const testimonial3 = IMAGES.TESTIMONIAL3;

    const testimonials = [
        {
            id: 1,
            name: "LAURA MARANO",
            role: "DESIGNER",
            avatar: testimonial1,
            review: "Velloura Stays felt like a home away from home. The villa is beautiful, cozy, and perfect for relaxing. We loved every moment of our stay!",
            rating: 5
        },
        {
            id: 2,
            name: "MIKE JAMSON",
            role: "DEVELOPER",
            avatar: testimonial2,
            review: "Exceptional service and stunning properties. The attention to detail made our corporate retreat a huge success. Highly recommended!",
            rating: 5
        },
        {
            id: 3,
            name: "MIA TURNER",
            role: "MODEL",
            avatar: testimonial3,
            review: "Perfect for families! The kids had so much space to play, and we enjoyed the peaceful surroundings. Will definitely come back again.",
            rating: 5
        }
    ]

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        )
    }

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        )
    }

    // Keyboard navigation for accessibility (for mobile)
    const handleKey = (action) => (e) => {
        if (e.key === "Enter" || e.key === " ") {
            action()
        }
    }

    return (
        <section className="section-container px-2 sm:px-2 md:px-4 ">
            <div className="max-w-[980px] mx-auto text-center mb-8 md:mb-12">
                <HeaderTitle title="Client Testimonials" size="20" />
            </div>

            {/* Testimonial Card */}
            <div className="
                bg-[#F7F5F1] 
                h-[420px] sm:h-[500px] 
                shadow-sm p-4 xs:p-6 sm:p-8 md:p-12 
                relative overflow-hidden border border-gray-100 
                max-w-full sm:max-w-[90vw] md:max-w-[700px] lg:max-w-full mx-auto
                rounded-none sm:rounded-lg
            ">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-20 h-20 xs:w-24 xs:h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-100/50 to-transparent rounded-full -translate-x-10 -translate-y-10 md:-translate-x-16 md:-translate-y-16"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 xs:w-24 xs:h-24 md:w-32 md:h-32 bg-gradient-to-tl from-amber-100/50 to-transparent rounded-full translate-x-10 translate-y-10 md:translate-x-16 md:translate-y-16"></div>

                {/* Navigation Buttons */}
                {/* Desktop: show as before, Mobile: show smaller/fixed at bottom */}
                <div
                    onClick={prevTestimonial}
                    onKeyDown={handleKey(prevTestimonial)}
                    className="
                        text-[#403B21] absolute z-20 rounded-full p-2 xs:p-3 transition-all duration-300 items-center justify-center cursor-pointer
                        left-2 top-1/2 -translate-y-1/2
                        hidden sm:flex
                        focus:outline-none
                    "
                    role="button"
                    tabIndex={0}
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft size={40} />
                </div>
                <div
                    onClick={nextTestimonial}
                    onKeyDown={handleKey(nextTestimonial)}
                    className="
                        text-[#403B21] absolute z-20 rounded-full p-2 xs:p-3 transition-all duration-300 items-center justify-center cursor-pointer
                        right-2 top-1/2 -translate-y-1/2
                        hidden sm:flex
                        focus:outline-none
                    "
                    role="button"
                    tabIndex={0}
                    aria-label="Next testimonial"
                >
                    <ChevronRight size={40} />
                </div>

                {/* Mobile navigation buttons */}
                <div className="flex sm:hidden justify-between items-center absolute bottom-8 left-0 w-full px-4 z-20 pointer-events-none">
                    <div
                        onClick={prevTestimonial}
                        onKeyDown={handleKey(prevTestimonial)}
                        className={`text-[#403B21] bg-[${Theme.colors.background}] bg-opacity-70 backdrop-blur rounded-full p-2 transition-all duration-300 cursor-pointer focus:outline-none pointer-events-auto`}
                        role="button"
                        tabIndex={0}
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={28} />
                    </div>
                    <div
                        onClick={nextTestimonial}
                        onKeyDown={handleKey(nextTestimonial)}
                        className={`text-[#403B21] bg-[${Theme.colors.background}] bg-opacity-70 backdrop-blur rounded-full p-2 transition-all duration-300 cursor-pointer focus:outline-none pointer-events-auto`}
                      
                        role="button"
                        tabIndex={0}
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={28} />
                    </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex flex-col h-full justify-between relative z-10">
                    {/* Review Section */}
                    <div className="flex-1 flex flex-col justify-center px-2 xs:px-3 sm:px-12 md:px-20 ">
                        <div className="flex justify-center mb-3">
                            <div className="relative">
                                <img
                                    src={testimonials[currentTestimonial].avatar}
                                    alt={testimonials[currentTestimonial].name}
                                    className="
                                        w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-32 md:h-32
                                        rounded-full object-cover border-4 border-white shadow-lg transition-transform duration-300 hover:scale-105
                                    "
                                />
                            </div>
                        </div>

                        <div className="px-3 xs:px-4 sm:px-12 py-4 text-center rounded-lg mx-2">
                            <span className={`
                                text-base xs:text-lg sm:text-xl lg:text-2xl text-[${Theme.colors.text}]
                                italic leading-relaxed font-light font-serif
                                block line-clamp-5 overflow-hidden
                            `}>
                                "{testimonials[currentTestimonial].review}"
                            </span>
                        </div>
                    </div>
                    {/* Name and Role at Bottom */}
                    <div className="text-center pb-3 xs:pb-5 px-2 xs:px-4 border-t border-gray-200/50 pt-3 xs:pt-4 mx-2 xs:mx-4">
                        <h3 className="text-base xs:text-lg sm:text-xl font-semibold mb-1 truncate px-2 xs:px-4">
                            {testimonials[currentTestimonial].name}
                        </h3>
                        <span className="text-[#E2CAB3] text-sm xs:text-base sm:text-xl font-serif uppercase tracking-wide font-medium truncate block px-2 xs:px-4">
                            {testimonials[currentTestimonial].role}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
