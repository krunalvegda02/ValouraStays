import React from "react";
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
    ]

    const faqData = [
        {
            question: "What is your return policy?",
            answer: "Our return policy allows you to return items within 30 days of purchase. Items must be in original condition with tags attached. Refunds will be processed within 5-7 business days."
        },
        {
            question: "How long does shipping take?",
            answer: "Standard shipping takes 3-5 business days. Express shipping is available for 1-2 business days. International shipping may take 7-14 business days depending on the destination."
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by location. You can check available countries and rates during checkout."
        },
        {
            question: "How can I track my order?",
            answer: "Once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account and visiting the 'Order History' section."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay. All payments are processed securely through encrypted channels."
        }
    ];

    return (
        <div className="section-container">
            <div className="flex gap-5 my-16">
                {/* Left Section (Scrollable) */}
                <div className="w-3/5        overflow-y-auto hide-scrollbar">
                    <div>
                        <h1 className={`text-[${Theme.colors.text}] font-bold`}>
                            Welcome to Villa Izara
                        </h1>
                        <h2 className={`text-[${Theme.colors.text}] text-3xl mb-3 font-bold`}>
                            Enjoy Your Dream Vacation In Udaipur
                        </h2>
                        <p className={`text-[${Theme.colors.darkText}] text-2xl mb-3`}>
                            Udaipur's first-of-its-kind A-frame hanging villa, situated
                            in the beautiful Aravalli ranges. Bringing you closer to
                            nature, it's everything you'd want in your dream getaway.
                        </p>
                        <p className={`text-[${Theme.colors.darkText}] text-2xl mb-3`}>
                            Located just behind Labhgarh Resort in Village Sare
                            (near Chirwa), Emerald Hills blends comfort, luxury, and
                            fun
                        </p>
                    </div>

                    <div className="mb-6">
                        <h1 className={`text-[${Theme.colors.text}] font-bold mb-1`}>
                            Villa Izara
                        </h1>
                        <p className={`font- text-[${Theme.colors.darkText}] text-xl mb-3`}>
                            Udaipur, Rajasthan 313202
                        </p>
                        <div className="flex items-center">
                            <div className="mr-3">
                                <Star
                                    filled={true}
                                    fillColor={Theme.colors.lightText}
                                    strokeColor={Theme.colors.lightText}
                                    className="w-8 h-8"
                                />
                            </div>
                            <div
                                style={{ color: Theme.colors.darkText }}
                                className="font-medium text-xl"
                            >
                                4.8 | (232 Reviews)
                            </div>
                        </div>

                        <div className="flex gap-6 mt-4">
                            {details.map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <div
                                        className={`text-[${Theme.colors.lightText}] flex items-center justify-center w-8 h-8`}
                                    >
                                        <img
                                            src={item.icon}
                                            alt={item.title}
                                            className={`w-6 h-6 text-[${Theme.colors.lightText}] `}
                                            style={{
                                                filter: "invert(87%) sepia(19%) saturate(467%) hue-rotate(1deg) brightness(95%) contrast(90%)"
                                            }}

                                        />
                                    </div>
                                    <span style={{ color: Theme.colors.darkText }} className="text-xl font-semibold">
                                        {item.title}
                                    </span>
                                </div>
                            ))}
                        </div>

                    </div>

                    <div>
                        <h1 className={`text-[${Theme.colors.text}] font-bold`}>
                            About Home
                        </h1>
                        <p className={`text-[${Theme.colors.darkText}] text-xl my-3`}>
                            This spacious 5BHK villa offers ample space for group stays, with a
                            private pool, celebration zone, well-furnished rooms, and a lounge
                            area overlooking mesmerizing mountain views.
                        </p>

                        <HouseRules />
                    </div>

                    <div>
                        <Features />
                    </div>

                    <div className="mb-8">
                        <ReviewsSection />
                    </div>

                    {/* FAQ */}
                    <div>
                        <FAQSection faqData={faqData} />
                    </div>

                    {/* Location */}
                    <div>
                        <h1 className={`text-[${Theme.colors.text}] font-bold`}>Location</h1>
                        <p
                            className="text-xl my-3 flex items-center gap-4"
                            style={{ color: Theme.colors.darkText }}
                        >
                            <span className="text-3xl font-semibold whitespace-nowrap">
                                Villa Izara
                            </span>

                            <span
                                className="w-[3px] h-12 inline-block mx-3"
                                style={{ backgroundColor: Theme.colors.lightText }}
                                aria-hidden="true"
                            />

                            <span className="">
                                Behind Labhgarh Resort, village Sare, Chirwa, Udaipur, Rajasthan 313202
                            </span>
                        </p>

                        <div className="h-[300px] mt-5 rounded-lg overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.45929128856!2d73.7125!3d24.5854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967f38cdcd011b9%3A0xa8d90a1b16bb7!2sUdaipur%2C%20Rajasthan%2C%20India!5e0!3m2!1sen!2sin!4v1696240000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Right Section (Sticky Form) */}
                {/* Right Section */}
                <div className="w-2/5 flex flex-col gap-6">
                    {/* Top Image (scrolls normally with page) */}
                    <div className="w-full h-[400px]  overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                            alt="Room Preview"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Booking Form (sticky when page scrolls) */}
                    <div className="sticky top-20 border border-gray-200 p-6 rounded-2xl bg-white shadow-lg backdrop-blur-sm bg-opacity-95">
                        {/* Premium Badge */}
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <div className="flex items-baseline gap-2">
                                    <span className={`text-3xl font-bold text-[${Theme.colors.text}]`}>₹56,000</span>
                                    <span className={`text-sm text-[${Theme.colors.darkText}]`}>/night</span>
                                </div>
                                <p className={`text-xs text-[${Theme.colors.darkText}] mt-1`}>Villa Izara • Premium Experience</p>
                            </div>
                            <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full font-medium">
                                ⭐ 4.8/5
                            </span>
                        </div>

                        <form className="space-y-4">
                            {/* Elegant Date Picker */}
                            <div className="space-y-3">
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-xs font-medium text-gray-600 mb-2">ARRIVAL</label>
                                        <input
                                            type="date"
                                            className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-600 mb-2">DEPARTURE</label>
                                        <input
                                            type="date"
                                            className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Guest Selector */}
                            <div>
                                <label className="block text-xs font-medium text-gray-600 mb-2">GUESTS</label>
                                <select className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white">
                                    <option>1 Guest</option>
                                    <option>2 Guests</option>
                                    <option>3 Guests</option>
                                    <option>4 Guests</option>
                                    <option>5+ Guests (Contact for group rates)</option>
                                </select>
                            </div>

                            {/* Enhanced Buttons */}
                            <div className="space-y-3 pt-2">
                                <Button
                                    icon={false}
                                    type="button"
                                >
                                    <div className="relative flex items-center justify-center gap-3" >
                                        <Clock className="w-6 h-6 animate-pulse" />
                                        <span className="text-lg tracking-wide">Unlock Best Rates</span>
                                    </div>
                                </Button>

                                <Button
                                    type="submit" icon={false}
                                >
                                    <span>Book Now</span>
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