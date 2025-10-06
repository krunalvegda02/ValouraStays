import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin } from "lucide-react";
import IMAGES from '../Constants/Images';
import Theme from '../Constants/Theme';
import Button from '../components/Button';

const Navbar2 = () => {
    const logo2 = IMAGES.LOGO2; // ✅ Always use scrolled logo
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const [activePath, setActivePath] = useState(location.pathname);

    const navItems = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About Us" },
        { path: "/destinations", label: "Destinations" },
        { path: "/villas", label: "Villas" },
        { path: "/blogs", label: "Blogs" },
        { path: "/contact", label: "Contact Us" }
    ];

    const handleNavigation = (path) => {
        navigate(path);
        setIsMenuOpen(false);
        setActivePath(path);
    };

    return (
        <div className="relative">
            {/* Fixed Navbar - Always Scrolled */}
            <div
                className={`w-full text-${Theme.colors.text} fixed top-0 z-50 bg-[${Theme.colors.background}] backdrop-blur-sm shadow-lg py-2 transition-all duration-500`}
            >
                <nav className="section-container">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <div className="flex items-center z-50">
                            <Link to="/" className="flex items-center group">
                                <img
                                    src={logo2}
                                    alt="Velloura Stays"
                                    className="transition-all duration-500 h-10"
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-1 absolute left-1/2 transform -translate-x-1/2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 relative group ${activePath === item.path
                                            ? "text-[#f1e5d1] border border-[#403B21] shadow-sm"
                                            : "text-gray-600"
                                        }`}
                                >
                                    <span className="flex items-center whitespace-nowrap font-serif">
                                        {item.label}
                                    </span>
                                </Link>
                            ))}
                        </div>

                        {/* CTA + Mobile Menu Toggle */}
                        <div className="flex items-center space-x-4 z-50">
                            <Button variant="secondary" icon={false}>
                                <span className="font-serif text-white font-bold">Book Your Villa!</span>
                            </Button>

                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="lg:hidden p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                            >
                                <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                                    <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
                                    <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-6'}`}></span>
                                    <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'}`}></span>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div
                        className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-xl border-t border-gray-100 transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                            }`}
                    >
                        <div className="section-container py-6">
                            <div className="flex flex-col space-y-4">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`px-6 py-4 rounded-xl font-medium transition-all duration-300 ${activePath === item.path
                                                ? 'text-[#403B21] bg-amber-50 border-l-4 border-amber-500'
                                                : 'text-gray-600 hover:text-[#403B21] hover:bg-amber-50/50'
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                ))}

                                {/* Mobile CTA */}
                                <Link
                                    to="/book"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="px-6 py-4 rounded-xl font-semibold text-center bg-[#403B21] text-white hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg mt-4"
                                >
                                    Book Your Villa
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

 
        </div>
    );
};

export default Navbar2;
