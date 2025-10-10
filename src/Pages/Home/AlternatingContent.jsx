import React from 'react';
import IMAGES from '../../Constants/Images';

const AlternatingContent = () => {
  const alter1 = IMAGES.ALTER1;
  const alter2 = IMAGES.ALTER2;

  const sections = [
    {
      id: 1,
      title1: "Sustainable Approach",
      content1: `Experience a villa that embraces sustainable living without compromise. From smart 
lighting and recycled materials to natural ventilation and lush green landscaping, every 
detail is designed to blend eco-consciousness with leisure. Enjoy guilt-free
indulgence in a space that breathes with nature.`,
      title2: "Signature Touches",
      content2: `Every corner tells a story. From handcrafted furniture and bespoke designs to interiors
inspired by local culture, your villa feels like art brought to life. Step outside, and the 
seamless blend of indoors and outdoors surrounds you with 
tranquility, comfort, and timeless charm.`,
      image: alter1,
      cta: "Explore Heritage"
    },
    {
      id: 2,
      title1: "Exceptional Luxury",
      content1:
        `Whether you choose a 2 BHK villa or a 5 BHK farmhouse, every detail is designed for unforgettable moments. Sip poolside refreshments, enjoy a warm welcome, and immerse yourself in a world of calm perfection, perfect for family gatherings, getaways, or celebrations that deserve more than ordinary.`,
      title2: "Exclusive Perks",
      content2: `Here, luxury isn’t just a service but an experience. From impeccable housekeeping and attentive concierge care to signature scents and pristine spaces, every detail is designed around you. Once you’ve lived this level of comfort, you won’t just remember it—you’ll crave it again.`,
      image: alter2,
      cta: "View Facilities"
    }
  ];

  return (
    <div className="section-container">
      <div className="shadow-2xl bg-[#f1e5d1] mx-auto max-w-full">

        {/* First Row */}
        <div className="flex flex-col lg:flex-row justify-between mx-0 w-full">
          {/* Content */}
          <div className="lg:w-1/2 text-center px-6 sm:px-8 lg:px-12 py-6 sm:py-10">
            <h2 className="text-[22px] sm:text-[26px] lg:text-[30px] font-bold text-gray-900 mb-4 sm:mb-6">{sections[0].title1}</h2>
            <p className="text-[14px] sm:text-[15px] text-gray-600 mb-8 leading-relaxed">{sections[0].content1}</p>

            <h2 className="text-[22px] sm:text-[26px] lg:text-[30px] font-bold text-gray-900 mb-4 sm:mb-6">{sections[0].title2}</h2>
            <p className="text-[14px] sm:text-[15px] text-gray-600 mb-8 leading-relaxed">{sections[0].content2}</p>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 w-full">
            <img
              src={sections[0].image}
              alt={sections[0].title1}
              className="w-full h-64 sm:h-80 md:h-[450px] lg:h-full object-cover shadow-xl block transition-transform duration-500 mb-3 lg:mb-0 "
            />
          </div>
        </div>

        {/* Second Row - Reversed */}
        <div className="flex flex-col lg:flex-row justify-between mx-0 w-full">
          {/* Image */}
          <div className="lg:w-1/2 w-full">
            <img
              src={sections[1].image}
              alt={sections[1].title1}
              className="w-full h-64 sm:h-80 md:h-[450px] lg:h-full object-cover shadow-xl block transition-transform duration-500 "
            />
          </div>

          {/* Content */}
          <div className="lg:w-1/2 text-center px-6 sm:px-8 lg:px-12 py-6 sm:py-10">
            <h2 className="text-[22px] sm:text-[26px] lg:text-[30px] font-bold text-gray-900 mb-4 sm:mb-6">{sections[1].title1}</h2>
            <p className="text-[14px] sm:text-[15px] text-gray-600 mb-8 leading-relaxed">{sections[1].content1}</p>

            <h2 className="text-[22px] sm:text-[26px] lg:text-[30px] font-bold text-gray-900 mb-4 sm:mb-6">{sections[1].title2}</h2>
            <p className="text-[14px] sm:text-[15px] text-gray-600 mb-8 leading-relaxed">{sections[1].content2}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AlternatingContent;
