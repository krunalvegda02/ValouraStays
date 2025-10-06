import React, { useState } from 'react';
import Theme from '../Constants/Theme';

const FAQSection = ({ faqData }) => {
    const [openIndex, setOpenIndex] = useState(null);


    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="my-6">
            <div className="space-y-4">
                <h1 className={`text-[${Theme.colors.text}] font-bold pb-2`}>Frequently Asked Questions</h1>

                {faqData.map((faq, index) => (
                    <div
                        key={index}
                        className="borderrounded-lg overflow-hidden transition-all duration-300"
                    >
                        <button
                            className="w-full px-6 py-4 text-left flex justify-between items-center"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className="font-medium text-gray-800 pr-4">
                                {faq.question}
                            </span>
                            <svg
                                className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'
                                    }`}
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
                            className={`px-6 overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 py-4' : 'max-h-0 py-0'
                                }`}
                        >
                            <p className="text-gray-600 leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;