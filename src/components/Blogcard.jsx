import React from 'react';
import { Calendar, MessageCircle, User } from 'lucide-react';
import Theme from '../Constants/Theme';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({
  imageUrl = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  title = "Why Is Villa Izara More Than Just A Private Villa In Udaipur?",
  excerpt = "Meta Description: Discover why Villa Izara is more than just a private villa in Udaipur. Click to learn about the personalized services offered at reasonable rates!",
  author = "Sarah Johnson",
  commentsCount = 80,
  date = "December 15, 2023",
  showTitle = true,
  blogId,
}) => {

  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/blog/${blogId}`);
  };

  return (
    <div className="max-w-full overflow-hidden mx-auto">
      {/* Image Section */}
      <div className="w-full max-w-[965px] h-[230px] sm:h-[280px] md:h-[320px] lg:h-[370px] overflow-hidden mx-auto">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          style={{ borderRadius: 0 }} // Sharp edges
        />
      </div>

      {/* Content Section */}
      <div className="pt-2 bg-transparent mb-7 max-w-[965px] mx-auto px-4 sm:px-0">
        {/* Meta Information */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6 text-[${Theme.colors.darkText}]">
          {/* Author */}
          <div className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base font-medium whitespace-nowrap">
            <User className="w-4 h-4" style={{ color: Theme.colors.darkText }} />
            <span>by</span>
            <span className="font-semibold">{author}</span>
          </div>

          {/* Comments */}
          <div className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base font-medium whitespace-nowrap">
            <MessageCircle className="w-4 h-4" style={{ color: Theme.colors.darkText }} />
            <span>{commentsCount} comments</span>
          </div>

          {/* Date */}
          <div className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base font-medium whitespace-nowrap">
            <Calendar className="w-4 h-4" style={{ color: Theme.colors.darkText }} />
            <span>{date}</span>
          </div>
        </div>

        {showTitle && (
          <>
            <h2
              onClick={handleReadMore}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 line-clamp-2 py-2 pt-4 transition-colors duration-300 cursor-pointer"
              style={{ color: Theme.colors.text, borderRadius: 0 }}
              onMouseEnter={(e) => (e.target.style.color = Theme.colors.lightText)}
              onMouseLeave={(e) => (e.target.style.color = Theme.colors.text)}
            >
              {title}
            </h2>

            <p
              className="text-base sm:text-lg md:text-xl leading-relaxed line-clamp-3 mb-4"
              style={{ color: Theme.colors.darkText }}
            >
              {excerpt}
            </p>

            <p
              onClick={handleReadMore}
              className="font-bold transition-colors duration-300 cursor-pointer text-base sm:text-lg"
              style={{ color: Theme.colors.darkText }}
              onMouseEnter={(e) => (e.target.style.color = Theme.colors.text)}
              onMouseLeave={(e) => (e.target.style.color = Theme.colors.darkText)}
            >
              READ MORE...
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
