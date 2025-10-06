// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import IMAGES from '../Constants/Images';

const Footer = () => {
  return (
    <footer className="bg-[#F1E5D1] text-[#403B21] py-16 relative overflow-hidden ">
      <div className="container mx-auto px-4 relative z-10 section-container ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">

          {/* Column 1 - Logo and Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              {/* Logo */}
              <div className="flex items-center">
                <img
                  src={IMAGES.LOGO2}
                  alt="Veloura Stays"
                  className="h-18"
                />
              </div>
            </div>

            <p className="text-[#403B21]/80 leading-relaxed mb-8 text-lg font-light">
              Veloura Stays is a premier chain of luxury resorts and villas in Udaipur,
              featuring private pools, modern comforts, scenic views, and spacious retreats,
              designed to offer unforgettable experiences where relaxation, elegance, and
              hospitality come together.
            </p>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 font-serif">Follow Our Journey</h3>
              <div className="flex space-x-3">
                
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#403B21]  flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#403B21]/90"
                >
                  <svg className="w-5 h-5 text-[#F1E5D1]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#403B21] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#403B21]/90"
                >
                  <svg className="w-5 h-5 text-[#F1E5D1]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#403B21]  flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#403B21]/90"
                >
                  <svg className="w-5 h-5 text-[#F1E5D1]    " fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-serif border-b border-[#403B21]/20 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-[#403B21]/80 hover:text-[#403B21] transition-all duration-300 hover:pl-2 hover:font-medium flex items-center group"
                >
                  <span className="w-1 h-1 bg-[#403B21] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[#403B21]/80 hover:text-[#403B21] transition-all duration-300 hover:pl-2 hover:font-medium flex items-center group"
                >
                  <span className="w-1 h-1 bg-[#403B21] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/policies"
                  className="text-[#403B21]/80 hover:text-[#403B21] transition-all duration-300 hover:pl-2 hover:font-medium flex items-center group"
                >
                  <span className="w-1 h-1 bg-[#403B21] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Policies
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="text-[#403B21]/80 hover:text-[#403B21] transition-all duration-300 hover:pl-2 hover:font-medium flex items-center group"
                >
                  <span className="w-1 h-1 bg-[#403B21] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Destination */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-serif border-b border-[#403B21]/20 pb-2">Destination</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/destination/udaipur"
                  className="text-[#403B21]/80 hover:text-[#403B21] transition-all duration-300 hover:pl-2 hover:font-medium flex items-center group"
                >
                  <span className="w-1 h-1 bg-[#403B21] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Udaipur
                </Link>
              </li>
              <li>
                <Link
                  to="/destination/gujarat"
                  className="text-[#403B21]/80 hover:text-[#403B21] transition-all duration-300 hover:pl-2 hover:font-medium flex items-center group"
                >
                  <span className="w-1 h-1 bg-[#403B21] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Gujarat
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Villa/Home Stays */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-serif border-b border-[#403B21]/20 pb-2">Villa & Home Stays</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/villas/hammer-kothi"
                  className="text-[#403B21]/80 hover:text-[#403B21] transition-all duration-300 hover:pl-2 hover:font-medium flex items-center group"
                >
                  <span className="w-1 h-1 bg-[#403B21] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Hammer Kothi Villa
                </Link>
              </li>
              <li>
                <Link
                  to="/villas/villa-izara"
                  className="text-[#403B21]/80 hover:text-[#403B21] transition-all duration-300 hover:pl-2 hover:font-medium flex items-center group"
                >
                  <span className="w-1 h-1 bg-[#403B21] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Villa Izara
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5 - Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-serif border-b border-[#403B21]/20 pb-2">Get In Touch</h3>
            <div className="space-y-4 text-[#403B21]/80">
              <div className="flex items-start group hover:text-[#403B21] transition-colors duration-300">
                <div className="w-8 h-8 rounded-full bg-[#403B21] text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="pt-1">+91 9797979075</span>
              </div>
              <div className="flex items-start group hover:text-[#403B21] transition-colors duration-300">
                <div className="w-8 h-8 rounded-full bg-[#403B21] text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="pt-1">reservation@velourastays.com</span>
              </div>
              <div className="flex items-start group hover:text-[#403B21] transition-colors duration-300">
                <div className="w-8 h-8 rounded-full bg-[#403B21] text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="pt-1 text-sm leading-relaxed">
                  123 Luxury Street, Udaipur,<br />
                  Rajasthan, India - 313001
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-[#403B21]/20 mt-12 pt-6 text-center text-[#403B21]/60">
          <p className="font-light">
            &copy; {new Date().getFullYear()} Veloura Stays. All rights reserved. |
            <span className="mx-2">•</span>
            Crafted with luxury in mind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;