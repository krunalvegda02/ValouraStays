import React from 'react'
import CommonHero from '../../components/CommonHero'
import Theme from '../../Constants/Theme'
import { ExternalLink } from 'lucide-react'
import Button from '../../components/Button'

// 🌐 Facebook Icon
const FacebookIcon = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="12" fill="#1877F2" />
    <path
      d="M15.12 8.88h-1.74c-.21 0-.48.28-.48.68v1.44h2.2l-.29 2.26h-1.91V20h-2.37v-6.74H9.76v-2.26h1.77V9.52c0-1.73 1.05-2.68 2.58-2.68.73 0 1.36.05 1.54.08v1.96h-.53z"
      fill="white"
    />
  </svg>
);

// 🌈 Instagram Icon (gradient vibrant)
const InstagramIcon = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <defs>
      <linearGradient id="instagramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F58529" />
        <stop offset="50%" stopColor="#DD2A7B" />
        <stop offset="100%" stopColor="#8134AF" />
      </linearGradient>
    </defs>
    <rect width="24" height="24" rx="6" fill="url(#instagramGradient)" />
    <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="1.5" fill="none" />
    <circle cx="17.5" cy="6.5" r="1.3" fill="white" />
  </svg>
);

// ❤️ Pinterest Icon (clean & modern)
const PinterestIcon = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="12" fill="#E60023" />
    <path
      d="M12.1 7c-2.5 0-4.1 1.6-4.1 3.7 0 1.1.6 2.4 1.5 2.8.1.1.3 0 .3-.1.1-.1.2-.4.2-.6.1-.2 0-.3-.1-.5-.3-.3-.5-.8-.5-1.4 0-1.8 1.4-3.3 3.2-3.3 1.7 0 2.7 1 2.7 2.6 0 2-1 3.4-2.2 3.4-.6 0-1-.5-.8-1.1.2-.6.4-1.3.4-2 0-.8-.5-1.3-1.1-1.3-.9 0-1.6.9-1.6 2.1 0 .6.2 1 .2 1l-.7 3.1c-.2 1 0 2.2.1 2.4.1 0 .2 0 .3-.1.1-.2.5-.8.7-1.5l.5-1.9c.3.5 1 .9 1.7.9 2.1 0 3.6-1.8 3.6-4.3C16.2 8.5 14.4 7 12.1 7z"
      fill="white"
    />
  </svg>
);

const Thankyou = () => {
  return (
    <div>
      <CommonHero
        title={
          <div
            className="text-6xl"
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

      {/* Main Section */}
      <div className="flex flex-col md:flex-row justify-center items-center h-[50vh] gap-16 px-8">
        {/* Social Media Section */}
        <div
          className="p-8 rounded-2xl shadow-xl backdrop-blur-sm flex flex-col justify-center items-center"
          style={{
            backgroundColor: Theme.colors.background,
          }}
        >
          <p
            className="text-2xl font-semibold text-center mb-6"
            style={{ color: Theme.colors.text }}
          >
            Connect with Us
          </p>
          <div className="flex gap-6">
            {[
              { Icon: FacebookIcon, href: 'https://facebook.com', bg: 'hover:bg-blue-50' },
              { Icon: InstagramIcon, href: 'https://instagram.com', bg: 'hover:bg-pink-50' },
              { Icon: PinterestIcon, href: 'https://pinterest.com', bg: 'hover:bg-red-50' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg bg-white border border-gray-200 ${social.bg}`}
              >
                <social.Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Website Button Section */}
        <div
          className="p-8 rounded-2xl shadow-xl backdrop-blur-sm flex flex-col items-center justify-center"
          style={{
            backgroundColor: Theme.colors.background,
          }}
        >
          <p
            className="text-2xl font-semibold text-center mb-6"
            style={{ color: Theme.colors.text }}
          >
            Visit Website
          </p>
          <Button
            icon={false}
            variant="secondary"
            className="flex items-center gap-3 px-8 py-4 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            onClick={() => window.open('https://yourwebsite.com', '_blank')}
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
