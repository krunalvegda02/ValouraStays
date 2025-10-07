import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin } from "lucide-react"; // Icons
import IMAGES from '../Constants/Images';
import Theme from '../Constants/Theme';
import Button from '../components/Button';

const Navbar = () => {
  const logo = IMAGES.LOGO;
  const logo2 = IMAGES.LOGO2;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePath, setActivePath] = useState('/');
  const navigate = useNavigate();
  const location = useLocation();

  const [showDestinations, setShowDestinations] = useState(false);

  // Close destinations dropdown on outside click
  useEffect(() => {
    const closeMenu = (e) => {
      if (!e.target.closest(".destination-dropdown")) {
        setShowDestinations(false);
      }
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, []);

  // Update active path
  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
    setShowDestinations(false);
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/villas", label: "Villas" },
    { path: "/destinations", label: "Destinations" },
    { path: "/blogs", label: "Blogs" },
    { path: "/contact", label: "Contact Us" }
  ];

  const mobileMenuRef = useRef(null);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
        setShowDestinations(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <div className="relative overflow-x-hidden w-full max-w-[100vw]">

      {/* Top Bar */}
      <div
        className={`w-full text-[${Theme.colors.text}] transition-all duration-500 fixed top-0 z-50 ${isScrolled
          ? `bg-[${Theme.colors.background}] backdrop-blur-sm shadow-lg py-2`
          : 'bg-transparent py-4'
          }`}
      >
        {/* Contact Info Bar */}
        <div className={`transition-all duration-300 overflow-hidden ${isScrolled ? 'max-h-0 opacity-0' : 'max-h-28 sm:max-h-20 opacity-100'} `}>
          <div className="section-container overflow-x-hidden hide-scrollbar">
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2 sm:gap-0 ">
              {/* Left: Contact Info */}
              <div className="flex flex-row sm:flex-row items-center gap-2 sm:gap-4 overflow-x-auto sm:overflow-visible no-scrollbar py-2">
                {/* Phone */}
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 group flex-shrink-0">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform text-[#f1e5d1]" />
                  <span className="font-medium text-xs sm:text-sm text-[#f1e5d1]">+91 9797979075</span>
                </div>
                {/* Divider */}
                <div className="h-4 w-px bg-white/30 hidden sm:block"></div>
                {/* Email */}
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 group flex-shrink-0">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform text-[#f1e5d1]" />
                  <span className="font-medium text-xs sm:text-sm text-[#f1e5d1]">
                    <a href="mailto:reservation@velourastays.com" className="hover:underline truncate max-w-[120px] sm:max-w-full  " style={{ color: "#f1e5d1" }}>reservation@velourastays.com</a>
                  </span>
                </div>
              </div>
              {/* Right: Location */}
              <div className="flex items-center justify-center sm:justify-start mt-2 sm:mt-0 space-x-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 group text-center">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform text-[#f1e5d1]" />
                <span className="font-medium text-xs sm:text-sm text-[#f1e5d1]">Udaipur, Rajasthan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="section-container">
          <div className="flex justify-between items-center mt-4">
            {/* Logo */}
            <div className="flex items-center z-50">
              <Link to="/" className="flex items-center group">
                <img
                  src={isScrolled ? logo2 : logo}
                  alt="Velloura Stays"
                  className={`transition-all duration-500 ${isScrolled ? 'h-10' : 'h-12'}`}
                />
              </Link>
            </div>

            {/* Desktop Nav - Center */}
            <div className="hidden lg:flex items-center space-x-1 absolute left-1/2 transform -translate-x-1/2">
              {navItems.map((item) => {
                if (item.label === "Destinations") {
                  return (
                    <div key={item.path} className="relative destination-dropdown">
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowDestinations((prev) => !prev);
                        }}
                        className={`px-6 py-3 cursor-pointer rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${!isScrolled
                          ? `text-[${Theme.colors.background}]`
                          : "text-gray-600"
                          }`}
                      >
                        <span className="font-serif text-xl">Destinations</span>
                        <svg
                          className={`w-4 h-4 transition-transform ${showDestinations ? "rotate-180" : "rotate-0"
                            }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      {/* Dropdown for Destinations hover */}
                      {showDestinations && (
                        <div className="absolute left-2/3 transform -translate-x-1/2 w-44 z-50 bg-white rounded shadow-lg">
                          {["Udaipur", "Gujarat"].map((dest) => (
                            <Link
                              key={dest}
                              to={`/destinations/${dest.toLowerCase()}`}
                              onClick={() => setShowDestinations(false)}
                              className="block px-4 py-2 text-xl font-serif hover:scale-110 transition-all duration-200 mx-auto w-full"
                              style={{ color: Theme.colors.background }}
                            >
                              {dest}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                } else {
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`px-6 py-3 rounded-full font-medium transition-all duration-300 relative group ${activePath === item.path
                        ? !isScrolled
                          ? "text-[#403B21] border border-[#f1e5d1] shadow-sm"
                          : "text-[#f1e5d1] border border-[#403B21] shadow-sm"
                        : ""
                        }`}
                    >
                      <span
                        className={`flex items-center text-xl whitespace-nowrap font-serif ${!isScrolled ? `text-[${Theme.colors.background}]` : "text-gray-600"
                          }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  );
                }
              })}
            </div>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center space-x-2 sm:space-x-4 z-50">
              <Button
                onClick={() => navigate("/villas")}
                variant={isScrolled ? "secondary" : "outline"}
                icon={false}
                className={`${isScrolled ? "" : "border-[#f1e5d1]"} px-4 sm:px-6 py-2 sm:py-3 hidden lg:flex`}
              >
                <span
                  className={`font-serif font-bold text-sm sm:text-base ${isScrolled ? "text-white" : "text-[#f1e5d1]"}`}
                >
                  Book Your Villa!
                </span>
              </Button>

              {/* Mobile toggle button */}
              <div
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-2 sm:p-3 rounded-lg bg-[${Theme.colors.background}] backdrop-blur-sm border border-white/40 hover:bg-[${Theme.colors.background}]/80 transition-all`}
                aria-label="Toggle menu"
              >
                <div className="flex flex-col justify-center space-y-1.5">
                  <span className={`block h-0.5 bg-current transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5 w-6' : 'w-6'}`}></span>
                  <span className={`block h-0.5 bg-current transition-all ${isMenuOpen ? 'opacity-0' : 'w-6'}`}></span>
                  <span className={`block h-0.5 bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5 w-6' : 'w-6'}`}></span>
                </div>
              </div>
            </div>
          </div>

        </nav>
        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={`fixed top-0 right-0 h-full w-72 bg-[#F1E5D1] shadow-2xl z-50 transform transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        >
          {/* Logo + Close Button */}
          <div className="flex justify-between items-center px-6 py-4">
            <img className="w-32 h-10 object-contain" src={IMAGES.LOGO2} alt="LOGO2" />
            <div
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-[#E2CAB3]/30 transition-all"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6 text-[#403B21]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="flex flex-col mt-4 px-6 space-y-2 font-serif text-lg text-[#403B21]">
            {navItems.map((item) => (
              <div key={item.path} className="flex flex-col">
                {item.label === "Destinations" ? (
                  <>
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowDestinations((prev) => !prev);
                      }}
                      className={`flex justify-between items-center w-full py-2 px-3 rounded-lg cursor-pointer transition-all ${showDestinations ? 'bg-[#efddcd] ' : ''} hover:bg-[#E2CAB3]/50`}
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${showDestinations ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    {showDestinations && (
                      <ul className="pl-6 mt-2 flex flex-col space-y-2">
                        {['Udaipur', 'Gujarat'].map((dest) => (
                          <li key={dest}>
                            <Link
                              to={`/destinations/${dest.toLowerCase()}`}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setShowDestinations(false);
                              }}
                              className="block py-1 text-[#403B21] hover:text-[#E2CAB3] transition-colors font-medium"
                            >
                              {dest}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setShowDestinations(false);
                    }}
                    className={`block py-2 px-3 rounded-lg transition-all ${location.pathname === item.path ? 'bg-[#E2CAB3] font-semibold' : 'hover:bg-[#E2CAB3]/50'}`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="mt-auto p-6 border-t border-[#403B21]/30">
            <Button
              variant="secondary"
              className="w-full bg-[#403B21] hover:bg-[#6B6666] text-[#F1E5D1] font-semibold py-3 rounded-lg transition-colors"
              onClick={() => {
                setIsMenuOpen(false);
                navigate('/villas');
              }}
            >
              Book Your Villa!
            </Button>
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className={`${isScrolled ? 'h-20' : 'h-32'}`}></div>
    </div>

  );
};

export default Navbar;
