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
      <div className="relative overflow-x-hidden w-full max-w-[100vw]">

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
            <div className="flex justify-between items-center mt-4">
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
                          <span className="font-serif text-xl">Destinations</span>
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
                                className={`block px-4 py-2 text-xl font-serif hover:scale-110 transition-all duration-200 mx-auto w-full`}
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
                        className={`flex items-center text-xl whitespace-nowrap font-serif ${!isScrolled ? `text-[${Theme.colors.background}]` : "text-gray-600"
                          }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  );
                })}
              </div>




              {/* CTA + Mobile Toggle */}
              <div className="flex items-center space-x-2 sm:space-x-4 z-50 ">
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


                {/* Mobile Toggle */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden p-2 sm:p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
                >
                  <div className="flex flex-col justify-center space-y-1.5">
                    <span className={`block h-0.5 bg-current transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5 w-6' : 'w-6'}`}></span>
                    <span className={`block h-0.5 bg-current transition-all ${isMenuOpen ? 'opacity-0' : 'w-6'}`}></span>
                    <span className={`block h-0.5 bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5 w-6' : 'w-6'}`}></span>
                  </div>
                </button>
              </div>
            </div>




            {/* Mobile Menu */}
            <div
              className={`lg:hidden fixed top-[70px] left-0 w-screen h-[calc(100vh-70px)] overflow-y-auto bg-[#F7F5F1] backdrop-blur-xl shadow-xl border-t border-gray-200 rounded-b-2xl transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'}`}
            >
              <div className="flex flex-col space-y-3 p-6">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg font-serif text-lg text-center transition ${activePath === item.path
                      ? 'bg-[#403B21] text-white'
                      : 'text-[#403B21] hover:bg-[#E6DCC4]'
                      }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/book"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full mt-3 bg-[#403B21] text-white text-lg font-serif py-3 rounded-xl shadow-md hover:bg-[#594f2e] transition"
                >
                  Book Your Villa
                </Link>
              </div>
            </div>

          </nav>
        </div>

        {/* Spacer for fixed navbar */}
        <div className={`${isScrolled ? 'h-20' : 'h-32'}`}></div>
      </div>
    </>
  );
};

export default Navbar;








