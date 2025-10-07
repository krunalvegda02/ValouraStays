import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, MapPin, Search } from 'lucide-react';
import Theme from '../Constants/Theme';

const NotFoundPage = () => {
    return (
        <div
            className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
            style={{ backgroundColor: Theme.colors.background }}
        >
            <div className="max-w-4xl w-full text-center">

                {/* Main Content */}
                <div className="relative">
                    {/* Decorative Elements */}
                    <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full opacity-10"
                        style={{ backgroundColor: Theme.colors.text }}></div>
                    <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full opacity-10"
                        style={{ backgroundColor: Theme.colors.text }}></div>

                    {/* 404 Number */}
                    <div className="relative mb-8">
                        <h1
                            className="text-9xl sm:text-10xl lg:text-12xl font-bold font-serif tracking-tighter opacity-90"
                            style={{ color: Theme.colors.text }}
                        >
                            404
                        </h1>
                        <div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-2 opacity-20"
                            style={{ borderColor: Theme.colors.text }}
                        ></div>
                    </div>

                    {/* Main Message */}
                    <div className="mb-8">
                        <h2
                            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4"
                            style={{ color: Theme.colors.text }}
                        >
                            Oops! Page Not Found
                        </h2>
                        <p
                            className="text-xl sm:text-2xl mb-6 max-w-2xl mx-auto leading-relaxed"
                            style={{ color: Theme.colors.darkText }}
                        >
                            It seems you've wandered off the path to paradise. Let us guide you back to our luxurious villas and serene resorts.
                        </p>
                    </div>



                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                        <Link
                            to="/"
                            className="group flex items-center justify-center space-x-3 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                            style={{
                                backgroundColor: Theme.colors.text,
                                color: Theme.colors.background
                            }}
                        >
                            <Home size={20} />
                            <span>Back to Home</span>
                        </Link>

                        <button
                            onClick={() => window.history.back()}
                            className="group flex items-center justify-center space-x-3 px-8 py-4 rounded-2xl font-semibold text-lg border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                            style={{
                                borderColor: Theme.colors.text,
                                color: Theme.colors.text,
                                backgroundColor: 'transparent'
                            }}
                        >
                            <ArrowLeft size={20} />
                            <span>Go Back</span>
                        </button>
                    </div>



                    {/* Contact Info */}
                    <div
                        className="inline-flex items-center space-x-2 px-6 py-4 rounded-2xl backdrop-blur-sm"
                        style={{
                            backgroundColor: 'rgba(226, 202, 179, 0.3)',
                            color: Theme.colors.darkText
                        }}
                    >
                        <span className="font-medium">Need help? Contact us:</span>
                        <a
                            href="tel:+9797979075"
                            className="font-semibold hover:underline"
                            style={{ color: Theme.colors.text }}
                        >
                            +91 9797979095
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default NotFoundPage;