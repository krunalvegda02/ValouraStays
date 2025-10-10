import React, { useState, useEffect } from "react";
import Theme from "../../Constants/Theme";
import { Star } from "./ReviewSection";
import FAQSection from "../../components/FAQ";
import ReviewsSection from "./ReviewSection";
import Features from "./Features";
import HouseRules from "./HouseRules";
import IMAGES from "../../Constants/Images";
import Button from "../../components/Button";
import { Clock } from "lucide-react";

const FullSection = () => {
    const details = [
        { icon: IMAGES.RULE2, title: "15 Guest" },
        { icon: IMAGES.HOUSE, title: "Separate Rooms" },
        { icon: IMAGES.BED, title: "5 Bedrooms" },
        { icon: IMAGES.REVIEW2, title: "Meals Available" },
    ];

    const images = [
        IMAGES.IZARAHERO6,
        IMAGES.IZARAHERO2,
        IMAGES.IZARAHERO1,
        IMAGES.IZARAHERO3,
        IMAGES.IZARAHERO4,
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [images.length]);

    const faqData = [
        {
            question: "How many guests can the Izara villa accommodate?",
            answer: `The villa has 5 bedrooms and can comfortably accommodate both small families and larger groups, with spacious bedrooms, living areas, and outdoor spaces designed for relaxation.`,
        },
        {
            question: "What amenities are included?",
            answer: `Guests enjoy modern amenities such as air-conditioned rooms, a private pool, Wi-Fi, a fully equipped kitchen, elegant interiors, a place for small events, and garden space.`,
        },
        {
            question: "Can I host a private event at the Izara villa?",
            answer: "Yes, Izara villas are perfect for intimate gatherings, celebrations, or small events. Prior notice and approval are required.",
        },
        {
            question: "What attractions are nearby?",
            answer: "Guests can visit the majestic City Palace, serene Lake Pichola, Jagdish Temple, vibrant local markets, and cultural landmarks, all just a short drive away.",
        },
        {
            question: "How do I make a booking for Izara?",
            answer: "You can book directly through our official website or use other sources like MakeMyTrip, Goibibo, and Agoda for assistance.",
        },
    ];

    return (
        <div className="section-container">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mt-6 sm:mt-12">
                {/* LEFT SECTION - Scrollable */}
                <div className="flex-1 overflow-y-auto pr-2 lg:pr-4 hide-scrollbar">
                    <div className="space-y-8">
                        {/* Villa Info */}
                        <div>
                            <h2 className={`text-[${Theme.colors.text}] font-bold text-2xl sm:text-3xl`}>
                                Welcome to Villa Izara
                            </h2>
                            <h2 className={`text-[${Theme.colors.text}] text-2xl sm:text-3xl mb-3 font-bold`}>
                                Enjoy Your Dream Vacation In Udaipur
                            </h2>
                            <p className={`text-[${Theme.colors.darkText}] text-base sm:text-lg md:text-xl mb-3`}>
                                Udaipur's first-of-its-kind A-frame hanging villa, situated in the beautiful Aravalli ranges. Bringing you closer to nature, it's everything you'd want in your dream getaway.
                            </p>
                            <p className={`text-[${Theme.colors.darkText}] text-base sm:text-lg md:text-xl mb-3`}>
                                Located just behind Labhgarh Resort in Village Sare (near Chirwa), Emerald Hills blends comfort, luxury, and fun.
                            </p>
                        </div>

                        {/* Details Section */}
                        <div className="mb-6">
                            <h2 className={`text-[${Theme.colors.text}] font-bold mb-1 text-2xl sm:text-3xl`}>Villa Izara</h2>
                            <p className={`text-[${Theme.colors.darkText}] text-sm sm:text-base md:text-lg mb-3`}>Udaipur, Rajasthan 313202</p>
                            <div className="flex items-center">
                                <Star
                                    filled={true}
                                    fillColor={Theme.colors.lightText}
                                    strokeColor={Theme.colors.lightText}
                                    className="w-6 h-6 sm:w-8 sm:h-8"
                                />
                                <span style={{ color: Theme.colors.darkText }} className="font-medium text-sm sm:text-lg ml-2">
                                    4.8 | (232 Reviews)
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-4 mt-4">
                                {details.map((item, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <img
                                            src={item.icon}
                                            alt={item.title}
                                            className="w-6 h-6 sm:w-8 sm:h-8"
                                            style={{
                                                filter:
                                                    "invert(87%) sepia(19%) saturate(467%) hue-rotate(1deg) brightness(95%) contrast(90%)",
                                            }}
                                        />
                                        <span style={{ color: Theme.colors.darkText }} className="text-sm sm:text-base md:text-lg font-semibold">
                                            {item.title}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* About Home */}
                        <div>
                            <h2 className={`text-[${Theme.colors.text}] font-bold text-2xl sm:text-3xl`}>About Home</h2>
                            <p className={`text-[${Theme.colors.darkText}] text-base sm:text-lg my-3`}>
                                This spacious 5BHK villa offers ample space for group stays, with a private pool, celebration zone, and well-furnished rooms overlooking mesmerizing mountain views.
                            </p>
                            <HouseRules />
                        </div>

                        <Features />

                        <div className="mb-8">
                            <ReviewsSection />
                        </div>

                        <FAQSection faqData={faqData} />

                        {/* Location */}
                        <div className="mt-8 sm:mt-10">
                            <h2 className={`text-[${Theme.colors.text}] font-bold text-2xl sm:text-3xl`}>Location</h2>
                            <div className="text-base sm:text-lg flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 mt-3 sm:mt-4 leading-relaxed" style={{ color: Theme.colors.darkText }}>
                                <span className="text-lg sm:text-2xl font-semibold whitespace-nowrap">Villa Izara</span>
                                <span className="hidden sm:inline-block w-[3px] h-10 rounded-full" style={{ backgroundColor: Theme.colors.lightText }} />
                                <span className="max-w-full sm:max-w-[70%] text-sm sm:text-base leading-snug sm:leading-relaxed">
                                    Behind Labhgarh Resort, village Sare, Chirwa, Udaipur, Rajasthan 313202
                                </span>
                            </div>
                            <div className="mt-5 sm:mt-6 md:mt-8 w-full">
                                <div className="h-[200px] xs:h-[220px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-xl overflow-hidden shadow-lg border border-gray-200">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.45929128856!2d73.7125!3d24.5854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967f38cdcd011b9%3A0xa8d90a1b16bb7!2sUdaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1696240000000!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Villa Izara Location"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SECTION - Only form sticky */}
                <div className="w-full lg:w-2/5 flex flex-col gap-6">
                    {/* Image Carousel - Scrollable */}
                    <div className="w-full h-[250px] sm:h-[350px] md:h-[400px] overflow-hidden relative rounded-xl shadow-md">
                        <img
                            src={images[currentImage]}
                            alt="Room Preview"
                            className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
                            key={images[currentImage]}
                        />
                        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-20">
                            {images.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImage ? "bg-white" : "bg-gray-400 opacity-60"
                                        }`}
                                ></div>
                            ))}
                        </div>
                    </div>

                    {/* Booking Form - Sticky only on large screens */}
                    <div className="border border-gray-200 p-4 sm:p-6 rounded-2xl bg-white shadow-lg lg:sticky lg:top-4">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <div className="flex items-baseline gap-2">
                                    <span className={`text-2xl sm:text-3xl font-bold text-[${Theme.colors.text}]`}>
                                        ₹56,000
                                    </span>
                                    <span className={`text-sm text-[${Theme.colors.darkText}]`}>/night</span>
                                </div>
                                <p className={`text-xs sm:text-sm text-[${Theme.colors.darkText}] mt-1`}>Villa Izara • Premium Experience</p>
                            </div>
                            <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full font-medium">
                                ⭐ 4.8/5
                            </span>
                        </div>

                        <form className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-medium text-gray-600 mb-1 sm:mb-2">ARRIVAL</label>
                                    <input type="date" className="w-full border border-gray-300 rounded-lg px-3 py-2 sm:py-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all" />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-gray-600 mb-1 sm:mb-2">DEPARTURE</label>
                                    <input type="date" className="w-full border border-gray-300 rounded-lg px-3 py-2 sm:py-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-gray-600 mb-1 sm:mb-2">GUESTS</label>
                                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 sm:py-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white">
                                    <option>1 Guest</option>
                                    <option>2 Guests</option>
                                    <option>3 Guests</option>
                                    <option>4 Guests</option>
                                    <option>5+ Guests (Contact for group rates)</option>
                                </select>
                            </div>

                            <div className="space-y-3 pt-2">
                                <Button icon={false} type="button">
                                    <div className="relative flex items-center justify-center gap-2 sm:gap-3">
                                        <Clock className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
                                        <span className="text-sm sm:text-lg tracking-wide">Unlock Best Rates</span>
                                    </div>
                                </Button>

                                <Button type="submit" icon={false}>
                                    <span className="text-sm sm:text-base">Book Now</span>
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullSection;