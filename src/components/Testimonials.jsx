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

    return (
        <section className='section-container'>

            <div className="max-w-[980px] mx-auto text-center ">
                <HeaderTitle title='Client Testimonials' size="20" />
            </div>

            {/* Testimonial Card */}
            <div className="bg-[#F7F5F1] h-[500px] shadow-sm p-8 sm:p-12 relative overflow-hidden border border-gray-100">

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-100/50 to-transparent rounded-full -translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-amber-100/50 to-transparent rounded-full translate-x-16 translate-y-16"></div>

                {/* Navigation Buttons */}
                <div
                    onClick={prevTestimonial}
                    className="text-[#403B21] absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full p-4 transition-all duration-300 hidden sm:flex items-center justify-center hover:scale-110 cursor-pointer z-20"
                >
                    <ChevronLeft size={60} />
                </div>

                <div
                    onClick={nextTestimonial}
                    className="text-[#403B21] absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full p-4 transition-all duration-300 hidden sm:flex items-center justify-center hover:scale-110 cursor-pointer z-20"
                >
                    <ChevronRight size={60} />
                </div>

                {/* Testimonial Content */}
                <div className="flex flex-col h-full justify-between relative z-10">
                    
                    {/* Review Section with Enhanced Padding */}
                    <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 ">
                        <div className="flex justify-center mb-3">
                            <div className="relative">
                                <img
                                    src={testimonials[currentTestimonial].avatar}
                                    alt={testimonials[currentTestimonial].name}
                                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-white shadow-lg transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                        </div>

                        {/* Review Text with Enhanced Styling */}
                        <div className="px-6 sm:px-12 py-6 text-center rounded-lg mx-4">
                            <span className={`text-lg sm:text-xl lg:text-3xl text-[${Theme.colors.text}]  italic leading-relaxed font-light font-serif line-clamp-4 overflow-hidden`}>
                                "{testimonials[currentTestimonial].review}"
                            </span>
                        </div>
                    </div>

                    {/* Name and Role at Bottom */}
                    <div className="text-center pb-6 px-4 border-t border-gray-200/50 pt-4 mx-8">
                        <h3 className="text-lg sm:text-xl font-semibold  mb-1 truncate px-4">
                            {testimonials[currentTestimonial].name}
                        </h3>
                        <span className={`text-[#E2CAB3] text-xl  font-serif uppercase tracking-wide font-medium truncate block px-4`}>
                            {testimonials[currentTestimonial].role}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials