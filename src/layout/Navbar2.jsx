import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import IMAGES from "../Constants/Images";
import Theme from "../Constants/Theme";
import Button from "../components/Button";

const Navbar2 = () => {
  const logo2 = IMAGES.LOGO2;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState("/");
  const [showDestinations, setShowDestinations] = useState(false);
  const mobileMenuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => setActivePath(location.pathname), [location]);

  // Close dropdown or mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
        setShowDestinations(false);
      }
      if (!e.target.closest(".destination-dropdown")) {
        setShowDestinations(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/villas", label: "Villas" },
    { path: "/destinations", label: "Destinations" },
    { path: "/blogs", label: "Blogs" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <div className="w-full max-w-[100vw]">
      {/* Fixed Navbar */}
      <div className={`w-full fixed top-0 z-50 bg-[${Theme.colors.background}] shadow-lg`}>
        <nav className="section-container">
          <div className="flex justify-between items-center py-3">

            {/* Logo - Reduced size for medium screens */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img
                src={logo2}
                alt="Velloura Stays"
                className="h-6 sm:h-8 md:h-10 lg:h-12 transition-all"
              />
            </Link>

            {/* Desktop Nav - Optimized spacing */}
            <div className="hidden lg:flex items-center space-x-0 xl:space-x-1 mx-4 flex-1 justify-center">
              {navItems.map((item) => {
                if (item.label === "Destinations") {
                  return (
                    <div key={item.path} className="relative destination-dropdown">
                      <div
                        onClick={() => setShowDestinations((prev) => !prev)}
                        className={`px-2 lg:px-3 xl:px-4 py-2 cursor-pointer rounded-full font-medium flex items-center space-x-1 transition-all duration-300 text-[${Theme.colors.text}]`}
                      >
                        <span className="font-serif text-sm lg:text-base xl:text-lg">
                          {item.label}
                        </span>
                        <svg
                          className={`w-3 h-3 transition-transform ${
                            showDestinations ? "rotate-180" : "rotate-0"
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

                      {showDestinations && (
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-40 z-50 bg-[#F1E5D1] rounded shadow-lg destination-submenu">
                          {["Udaipur"].map((dest) => (
                            <Link
                              key={dest}
                              to={`/destinations/${dest.toLowerCase()}`}
                              onClick={() => setShowDestinations(false)}
                              className="block px-4 py-2 text-sm lg:text-base font-serif hover:scale-110 transition-all duration-200"
                              style={{ color: Theme.colors.text }}
                            >
                              {dest}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-2 lg:px-3 xl:px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm lg:text-base xl:text-lg ${
                      activePath === item.path
                        ? "bg-[#E2CAB3] shadow-sm text-[#403B21]"
                        : "text-gray-600"
                    }`}
                  >
                    <span className="flex items-center font-serif whitespace-nowrap">{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* CTA + Mobile toggle - Optimized spacing */}
            <div className="flex items-center space-x-2 lg:space-x-3 xl:space-x-4 z-50 flex-shrink-0">
              <Button
                onClick={() => navigate("/villas")}
                variant="secondary"
                icon={false}
                className="hidden lg:flex px-3 lg:px-4 xl:px-6 py-2 text-xs lg:text-sm"
              >
                <span className="font-serif font-bold text-[#F1E5D1] whitespace-nowrap">
                  Book Your Villa!
                </span>
              </Button>

              {/* Mobile Menu Button - Show on medium screens */}
              <div
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-2 rounded-lg bg-[${Theme.colors.background}] border border-white/40 hover:bg-[${Theme.colors.background}]/80 transition-all`}
              >
                <div className="flex flex-col justify-center space-y-1.5">
                  <span
                    className={`block h-0.5 bg-current transition-all ${
                      isMenuOpen ? "rotate-45 translate-y-1.5 w-5" : "w-5"
                    }`}
                  ></span>
                  <span
                    className={`block h-0.5 bg-current transition-all ${
                      isMenuOpen ? "opacity-0" : "w-5"
                    }`}
                  ></span>
                  <span
                    className={`block h-0.5 bg-current transition-all ${
                      isMenuOpen ? "-rotate-45 -translate-y-1.5 w-5" : "w-5"
                    }`}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Right Drawer */}
        <div
          ref={mobileMenuRef}
          className={`fixed top-0 right-0 h-full w-72 bg-[#F1E5D1] shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-[#403B21]/20">
            <img className="w-28 sm:w-32 h-8 sm:h-10 object-contain" src={IMAGES.LOGO2} alt="LOGO2" />
            <div onClick={() => setIsMenuOpen(false)} className="p-2 rounded-lg hover:bg-[#E2CAB3]/30">
              <svg className="w-6 h-6 text-[#403B21]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>

          {/* Mobile Nav */}
          <nav className="flex flex-col mt-4 px-6 space-y-2 font-serif text-base sm:text-lg text-[#403B21]">
            {navItems.map((item) => (
              <div key={item.path} className="flex flex-col">
                {item.label === "Destinations" ? (
                  <>
                    <div
                      onClick={() => setShowDestinations((prev) => !prev)}
                      className={`flex justify-between items-center w-full py-2 px-3 rounded-lg cursor-pointer transition-all ${
                        showDestinations ? "bg-[#E2CAB3] font-semibold" : "hover:bg-[#E2CAB3]/50"
                      }`}
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          showDestinations ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    {showDestinations && (
                      <ul className="pl-6 mt-2 flex flex-col space-y-2">
                        {["Udaipur"].map((dest) => (
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
                    className={`block py-2 px-3 rounded-lg transition-all ${
                      location.pathname === item.path
                        ? "bg-[#E2CAB3] font-semibold"
                        : "hover:bg-[#E2CAB3]/50"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="mt-auto p-6 border-t border-[#403B21]/30">
            <Button
              variant="secondary"
              className="w-full bg-[#403B21] hover:bg-[#6B6666] text-[#F1E5D1] font-semibold py-3 rounded-lg transition-colors"
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/villas");
              }}
            >
              Book Your Villa!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;