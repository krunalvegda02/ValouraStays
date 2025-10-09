import React, { useState } from 'react';
import Theme from '../Constants/Theme';

const FAQSection = ({ faqData }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='section-container'>
            <div className="">
                <div className="space-y-4">
                    {/* Section Title */}
                    <h2 className={`text-xl sm:text-lg md:text-2xl font-bold text-[${Theme.colors.text}] pb-2 `}>
                        Frequently Asked Questions
                    </h2>

                    {/* FAQ Items */}
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className="border rounded-lg overflow-hidden transition-all duration-300"
                        >
                            <button
                                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="font-medium text-gray-800 text-sm sm:text-base md:text-lg pr-2 sm:pr-4">
                                    {faq.question}
                                </span>
                                <svg
                                    className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            <div
                                className={`px-4 sm:px-6 overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 py-3 sm:py-4' : 'max-h-0 py-0'}`}
                            >
                                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQSection;
