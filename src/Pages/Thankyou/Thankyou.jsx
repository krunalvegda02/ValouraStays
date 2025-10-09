import React from 'react';
import CommonHero from '../../components/CommonHero';
import Theme from '../../Constants/Theme';
import { ExternalLink } from 'lucide-react';
import Button from '../../components/Button';
import IMAGES from '../../Constants/Images';
import FacebookIcon from '../../assets/social/facebook.svg?react';
import PinterestIcon from '../../assets/social/pinterest.svg?react';
import InstagramIcon from '../../assets/social/Instagram.svg?react';

const Thankyou = () => {
  // ✅ Social links
  const socialLinks = [
    {
      href: "https://www.facebook.com/people/Veloura-Stays/61581131180973/",
      icon: <FacebookIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9" />,
    },
    {
      href: "https://www.pinterest.com/velourastays/",
      icon: <PinterestIcon className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9" />,
    },
    {
      href: "https://www.instagram.com/velourastays/",
      icon: <InstagramIcon className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9" />,
    },
  ];

  return (
    <div className="w-full">
      {/* ✅ Hero Section */}
      <CommonHero
        image={IMAGES.THANKYOUHERO}
        title={
          <div
            className="text-3xl sm:text-4xl md:text-5xl"
            style={{
              fontFamily: "'MonteCarlo', cursive",
              color: Theme.colors.background,
            }}
          >
            Thank You
          </div>
        }
        description="For connecting with us. You can find more information on our website and social pages."
      />

      {/* ✅ Main Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-12 px-4 sm:px-6 py-10 sm:py-12 md:py-16">

        {/* 🌐 Social Media Box */}
        <div
          className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[280px] md:h-[280px] shadow-lg flex flex-col justify-center items-center text-center border border-gray-200 "
          style={{ backgroundColor: Theme.colors.background }}
        >
          <p
            className="text-base sm:text-lg md:text-xl font-semibold mb-4"
            style={{ color: Theme.colors.text }}
          >
            Connect with Us
          </p>

          <div className="flex gap-3 sm:gap-4 justify-center">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white border border-gray-300 transition-all duration-300 hover:scale-110 hover:shadow-md flex items-center justify-center"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* 🌎 Website Button Box */}
        <div
          className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[280px] md:h-[280px] shadow-lg flex flex-col justify-center items-center text-center border border-gray-200 "
          style={{ backgroundColor: Theme.colors.background }}
        >
          <p
            className="text-base sm:text-lg md:text-xl font-semibold mb-4"
            style={{ color: Theme.colors.text }}
          >
            Visit Website
          </p>

          <Button
            icon={false}
            variant="secondary"
            className="flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-3 text-white font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-md group"
            onClick={() => window.open('https://valoura-stays-z7gb.vercel.app/', '_blank')}
          >
            <ExternalLink
              size={18}
              className="group-hover:rotate-45 transition-transform"
            />
            Visit Our Website
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;
