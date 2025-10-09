  // Footer.jsx
  import React from 'react';
  import { Link } from 'react-router-dom';
  import IMAGES from '../Constants/Images';
  import FacebookIcon from '../assets/social/facebook.svg?react';
  import PinterestIcon from '../assets/social/pinterest.svg?react';
  import InstagramIcon from '../assets/social/instagram.svg?react';



  const Footer = () => {
    const socialLinks = [
      {
        href: "https://www.facebook.com/people/Veloura-Stays/61581131180973/",
        icon: <FacebookIcon className="w-18 h-18" />
        ,
      },
      {
        href: "https://www.pinterest.com/velourastays/",
        icon: <PinterestIcon className="w-18 h-18" />,
      },
      {
        href: "https://www.instagram.com/velourastays/",
        icon: <InstagramIcon className="w-18 h-18 " />,
      },
    ];


    return (
      <footer className="bg-[#F1E5D1] text-[#403B21] py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">

            {/* Column 1 - Logo & Description */}
            <div className="lg:col-span-2">
              <div className="mb-6 flex justify-center sm:justify-start">
                <img src={IMAGES.LOGO2} alt="Veloura Stays" className="h-14 sm:h-16 md:h-18" />
              </div>

              <p className="text-[#403B21]/80 leading-relaxed mb-8 text-sm sm:text-base md:text-lg font-light text-center sm:text-left">
                Veloura Stays is a premier chain of luxury resorts and villas in Udaipur,
                featuring private pools, modern comforts, scenic views, and spacious retreats,
                designed to offer unforgettable experiences where relaxation, elegance, and
                hospitality come together.
              </p>

              {/* Social Links */}
              <div className="text-center sm:text-left">
                <h3 className="text-base sm:text-lg font-semibold mb-4 font-serif">Follow Our Journey</h3>
                <div className="flex justify-center sm:justify-start space-x-3">
                  {socialLinks.map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-19 h-19 sm:w-10 sm:h-10 rounded-full  flex items-center justify-center"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Other Columns */}
            {[
              {
                title: "Quick Links",
                links: [
                  { name: "About Us", to: "/about" },
                  { name: "Contact Us", to: "/contact" },
                  { name: "Policies", to: "/policies" },
                  { name: "Blogs", to: "/blogs" },
                ],
              },
              {
                title: "Destination",
                links: [
                  { name: "Udaipur", to: "/destinations/udaipur" },
                  { name: "Gujarat", to: "/destination/gujarat" },
                ],
              },
              {
                title: "Villa & Home Stays",
                links: [
                  { name: "Hammer Kothi Villa", to: "/villas/hammer-kothi" },
                  { name: "Villa Izara", to: "/villasIzara" },
                ],
              },
            ].map((section, i) => (
              <div key={i}>
                <h3 className="text-base sm:text-lg font-semibold mb-4 font-serif border-b border-[#403B21]/20 pb-2">
                  {section.title}
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        to={link.to}
                        className="text-[#403B21]/80 hover:text-[#403B21] transition-all duration-300 hover:pl-2 hover:font-medium flex items-center group text-sm sm:text-base"
                      >
                        <span className="w-1 h-1 bg-[#403B21] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Column */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4 font-serif border-b border-[#403B21]/20 pb-2">
                Get In Touch
              </h3>
              <div className="space-y-4 text-[#403B21]/80 text-sm sm:text-base">
                {[
                  {
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    ),
                    text: "+91 9797979075",
                    href: "tel:+919797979075"
                  },
                  {
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    ),
                    text: "reservation@velourastays.com",
                    href: "mailto:reservation@velourastays.com"
                  },
                  {
                    icon: (
                      <>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </>
                    ),
                    text: (
                      <>
                        E-4, FF-07, Mega Awas Scheme, Rakampura, Udaipur, Rajasthan, India - 313024
                      </>
                    ),
                    // href: "https://goo.gl/maps/xyz"  
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start group hover:text-[#403B21] transition-colors duration-300"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#403B21] text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {item.icon}
                      </svg>
                    </div>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : ""} rel="noopener noreferrer">
                        {item.text}
                      </a>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="border-t border-[#403B21]/20 mt-10 pt-6 text-center text-[#403B21]/60 text-xs sm:text-sm md:text-base">
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
