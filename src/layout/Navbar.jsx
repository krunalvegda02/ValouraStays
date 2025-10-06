import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin } from "lucide-react"; // ✅ Lucide icons
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
  const [selectedDestination, setSelectedDestination] = useState("Udaipur");


  useEffect(() => {
    const closeMenu = (e) => {
      if (!e.target.closest(".destination-dropdown")) {
        setShowDestinations(false);
      }
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, []);



  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

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
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/villas", label: "Villas" },
    { path: "/destinations", label: "Destinations" },
    { path: "/blogs", label: "Blogs" },
    { path: "/contact", label: "Contact Us" }
  ];

  return (
    <>
      <div className='relative'>
        {/* Top Bar */}
        <div
          className={`w-full text-${Theme.colors.text} transition-all duration-500 fixed top-0 z-50 ${isScrolled
            ? `bg-[${Theme.colors.background}] backdrop-blur-sm shadow-lg py-2`
            : 'bg-transparent py-4'
            }`}
        >
          {/* Contact Info Bar */}
          <div
            className={`transition-all duration-300 overflow-hidden ${isScrolled ? 'max-h-0 opacity-0' : 'max-h-20 opacity-100'
              }`}
          >
            <div className="section-container">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
                {/* Left Side - Contact Info */}
                <div className="flex items-center space-x-4 flex-wrap justify-center">
                  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                    <Phone className="w-4 h-4 group-hover:scale-110 transition-transform text-[#f1e5d1]" />
                    <span className="font-medium text-sm text-[#f1e5d1]">+91 9797979075</span>
                  </div>

                  <div className="h-4 w-px bg-white/30 hidden sm:block"></div>

                  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                    <Mail className="w-4 h-4 group-hover:scale-110 transition-transform text-[#f1e5d1]" />
                    <span className="font-medium text-sm text-[#f1e5d1]">
                      reservation@velourastays.com
                    </span>
                  </div>
                </div>

                {/* Right Side - Location */}
                <div className="flex items-center mr-3 space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform text-[#f1e5d1]" />
                  <span className="font-medium text-sm text-[#f1e5d1]">Udaipur, Rajasthan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <nav className="section-container ">
            <div className="flex justify-between items-center mt-2">
              {/* Logo */}
              <div className="flex items-center z-50">
                {isScrolled ? (
                  <Link to="/" className="flex items-center group">
                    <img
                      src={logo2}
                      alt="Velloura Stays"
                      className={`transition-all duration-500 ${isScrolled ? 'h-10' : 'h-12'}`}
                    />
                  </Link>
                ) : (
                  <Link to="/" className="flex items-center group">
                    <img
                      src={logo}
                      alt="Velloura Stays"
                      className={`transition-all duration-500 ${isScrolled ? 'h-10' : 'h-12'}`}
                    />
                  </Link>
                )}
              </div>

              {/* Desktop Navigation - Center */}
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
                          <span className="font-serif text-2xl">Destinations</span>
                          <svg
                            className={`w-4 h-4 transition-transform ${showDestinations ? "rotate-180" : "rotate-0"
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
                        </div>

                        {/* Dropdown Menu */}
                        {showDestinations && (
                          <div className="absolute left-2/3  transform -translate-x-1/2  w-44   z-50">
                            {["Udaipur", "Gujarat"].map((dest) => (
                              <Link
                                key={dest}
                                to={`/destinations/${dest.toLowerCase()}`}
                                onClick={() => setShowDestinations(false)}
                                className={`block px-4 py-2 text-2xl font-serif hover:scale-110 transition-all duration-200 mx-auto w-full`}
                                style={{
                                  color: Theme.colors.background
                                }}
                              >
                                {dest}
                              </Link>
                            ))}
                          </div>
                        )
                        }
                      </div>
                    );
                  }


                  // normal items
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
                        className={`flex items-center text-2xl whitespace-nowrap font-serif ${!isScrolled ? `text-[${Theme.colors.background}]` : "text-gray-600"
                          }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  );
                })}
              </div>



              {/* CTA & Mobile Menu */}
              <div className="flex items-center space-x-4 z-50">
                {/* Book Button */}
                {isScrolled ? (
                  <Button variant="secondary" icon={false}>
                    <span className="font-serif text-white font-bold ">Book Your Villa!</span>
                  </Button>
                ) : (
                  <Button variant="outline" icon={false} className='border-[#f1e5d1]' >
                    <span className="font-serif text-[#f1e5d1] font-bold ">Book Your Villa!</span>
                  </Button>
                )}

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                  aria-label="Toggle menu"
                >
                  <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                    <span
                      className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'
                        }`}
                    ></span>
                    <span
                      className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-6'
                        }`}
                    ></span>
                    <span
                      className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'
                        }`}
                    ></span>
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

                  {/* Mobile Book Button */}
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
        </div >

        {/* Spacer for fixed navbar */}
        < div
          className={`transition-all duration-500 ${isScrolled ? 'h-20' : 'h-32'}`
          }
        ></div >
      </div >
    </>
  );
};

export default Navbar;








