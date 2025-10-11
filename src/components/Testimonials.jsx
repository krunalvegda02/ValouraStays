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
        <section className="section-container">
            <div className="max-w-[980px] mx-auto text-center">
                <HeaderTitle title="Client Testimonials" size="20" />
            </div>

            {/* Testimonial Card */}
            <div className="
    bg-[#F7F5F1] 
    shadow-sm p-4 xs:p-6 sm:p-8 md:px-10 md:py-4
    relative overflow-hidden border border-gray-100 
    max-w-full sm:max-w-[90vw] md:max-w-[700px] lg:max-w-full mx-auto
    rounded-none sm:rounded-lg
  ">
                {/* Decorative Circles */}
                <div className="absolute top-0 left-0 w-20 h-20 xs:w-24 xs:h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-100/50 to-transparent rounded-full -translate-x-10 -translate-y-10 md:-translate-x-16 md:-translate-y-16"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 xs:w-24 xs:h-24 md:w-32 md:h-32 bg-gradient-to-tl from-amber-100/50 to-transparent rounded-full translate-x-10 translate-y-10 md:translate-x-16 md:translate-y-16"></div>

                {/* Navigation Buttons - Desktop */}
                <div
                    onClick={prevTestimonial}
                    className="hidden sm:flex absolute z-20 left-2 top-1/2 -translate-y-1/2 text-[#403B21] rounded-full p-2 xs:p-3 cursor-pointer transition-transform duration-300 hover:scale-110"
                >
                    <ChevronLeft size={40} />
                </div>
                <div
                    onClick={nextTestimonial}
                    className="hidden sm:flex absolute z-20 right-2 top-1/2 -translate-y-1/2 text-[#403B21] rounded-full p-2 xs:p-3 cursor-pointer transition-transform duration-300 hover:scale-110"
                >
                    <ChevronRight size={40} />
                </div>

                {/* Mobile Navigation Buttons */}
                <div className="flex sm:hidden justify-between items-center absolute bottom-4 left-0 w-full px-4 z-20">
                    <div
                        onClick={prevTestimonial}
                        className="text-[#403B21] bg-white/70 backdrop-blur rounded-full p-2 cursor-pointer"
                    >
                        <ChevronLeft size={20} />
                    </div>
                    <div
                        onClick={nextTestimonial}
                        className="text-[#403B21] bg-white/70 backdrop-blur rounded-full p-2 cursor-pointer"
                    >
                        <ChevronRight size={20} />
                    </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex flex-col items-center relative z-10">
                    {/* Avatar */}
                    <div className="mb-4 sm:mb-6 flex justify-center">
                        <img
                            src={testimonials[currentTestimonial].avatar}
                            alt={testimonials[currentTestimonial].name}
                            className="
            w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-32 md:h-32
            rounded-full object-cover border-4 border-white shadow-lg transition-transform duration-300
          "
                        />
                    </div>

                    {/* Review */}
                    <p className={`text-center text-sm xs:text-base sm:text-lg md:text-xl text-[${Theme.colors.text}] italic font-light leading-relaxed px-4 sm:px-12 mb-4 sm:mb-6`}>
                        "{testimonials[currentTestimonial].review}"
                    </p>

                    {/* Name and Role */}
                    <div className="text-center px-4 sm:px-12 border-t border-gray-200/50 pt-3 sm:pt-4 mx-2 xs:mx-4">
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold truncate mb-1 px-2 xs:px-4">{testimonials[currentTestimonial].name}</h3>
                        <span className="text-[#E2CAB3] text-sm sm:text-base md:text-lg font-serif uppercase tracking-wide font-medium">
                            {testimonials[currentTestimonial].role}
                        </span>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Testimonials
