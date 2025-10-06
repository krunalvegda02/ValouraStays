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

    const navigate = useNavigate()

    const handleReadMore = () => {
        navigate(`/blog/${blogId}`); // 👈 navigate to dedicated blog page
    };

    return (
        <div className="max-w-fulll overflow-hidden">
            {/* Image Section */}
            <div className="w-[965px] h-[370px] overflow-hidden">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Content Section */}
            <div className="pt-2 bg-transparent mb-7">
                {/* Meta Information */}
                <div className="flex items-center gap-6">
                    {/* Author */}
                    <div className="flex items-center gap-2" style={{ color: Theme.colors.darkText }}>
                        <User className="w-4 h-4" style={{ color: Theme.colors.darkText }} />
                        <span className="text-sm font-medium">by</span>
                        <span className="text-sm font-semibold">{author}</span>
                    </div>

                    {/* Comments */}
                    <div className="flex items-center gap-2" style={{ color: Theme.colors.darkText }}>
                        <MessageCircle className="w-4 h-4" style={{ color: Theme.colors.darkText }} />
                        <span className="text-sm font-medium">{commentsCount} comments</span>
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-2" style={{ color: Theme.colors.darkText }}>
                        <Calendar className="w-4 h-4" style={{ color: Theme.colors.darkText }} />
                        <span className="text-sm font-medium">{date}</span>
                    </div>
                </div>
                {showTitle &&
                    <>
                        <h2
                            onClick={handleReadMore}
                            className="text-4xl font-bold mb-4 line-clamp-2 py-2 pt-4 transition-colors duration-300 cursor-pointer"
                            style={{
                                color: Theme.colors.text,
                            }}
                            onMouseEnter={(e) => e.target.style.color = Theme.colors.lightText}
                            onMouseLeave={(e) => e.target.style.color = Theme.colors.text}
                        >
                            {title}
                        </h2>

                        <p
                            className="text-lg leading-relaxed line-clamp-3 mb-4"
                            style={{ color: Theme.colors.darkText }}
                        >
                            {excerpt}
                        </p>

                        {/* Read More */}
                        <p
                            onClick={handleReadMore}
                            className="font-bold transition-colors duration-300 cursor-pointer "
                            style={{ color: Theme.colors.darkText }}
                            onMouseEnter={(e) => e.target.style.color = Theme.colors.text}
                            onMouseLeave={(e) => e.target.style.color = Theme.colors.darkText}
                        >
                            READ MORE...
                        </p>
                    </>
                }
            </div>
        </div>
    );
};

export default BlogCard;