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
      icon: <FacebookIcon className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14" />,
    },
    {
      href: "https://www.pinterest.com/velourastays/",
      icon: <PinterestIcon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />,
    },
    {
      href: "https://www.instagram.com/velourastays/",
      icon: <InstagramIcon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />,
    },
  ];

  return (
    <div className="w-full">
      {/* ✅ Hero Section */}
      <CommonHero
        image={IMAGES.THANKYOUHERO}
        title={
          <div
            className="text-4xl sm:text-5xl md:text-6xl"
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
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 sm:gap-10 md:gap-16 px-4 sm:px-8 py-12 sm:py-16 md:py-20">

        {/* 🌐 Social Media Box */}
        <div
          className="w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] md:w-[380px] md:h-[380px] shadow-xl flex flex-col justify-center items-center text-center border border-gray-200 bg-white"
          style={{ backgroundColor: Theme.colors.background }}
        >
          <p
            className="text-lg sm:text-xl md:text-2xl font-semibold mb-6"
            style={{ color: Theme.colors.text }}
          >
            Connect with Us
          </p>

          <div className="flex gap-4 sm:gap-6 justify-center">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 rounded-full bg-white border border-gray-300 transition-all duration-300 hover:scale-110 hover:shadow-lg flex items-center justify-center"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* 🌎 Website Button Box */}
        <div
          className="w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] md:w-[380px] md:h-[380px] shadow-xl flex flex-col justify-center items-center text-center border border-gray-200 bg-white"
          style={{ backgroundColor: Theme.colors.background }}
        >
          <p
            className="text-lg sm:text-xl md:text-2xl font-semibold mb-6"
            style={{ color: Theme.colors.text }}
          >
            Visit Website
          </p>

          <Button
            icon={false}
            variant="secondary"
            className="flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 text-white font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            onClick={() => window.open('https://valoura-stays-z7gb.vercel.app/', '_blank')}
          >
            <ExternalLink
              size={24}
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
