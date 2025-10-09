import { useNavigate } from "react-router-dom";
import { Calendar, MessageCircle, User } from "lucide-react";

const BlogCard2 = ({ ...props }) => {
    const navigate = useNavigate();

    const handleReadMore = () => {
        navigate(`/blog/${props.blogId}`);
    };

    return (
        <div className="w-full sm:w-1/2 lg:w-1/3 px-3 mb-3 lg:mb-0">
            <div className=" shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer flex flex-col h-full">
                {/* Image */}
                <div className="h-64 overflow-hidden relative">
                    <img
                        src={props.imageUrl}
                        alt={props.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                    {/* Meta info */}
                    <div className="flex flex-wrap items-center gap-4 mb-3 text-[#6B6666] text-xs sm:text-sm">
                        <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{props.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>{props.commentsCount} comments</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{props.date}</span>
                        </div>
                    </div>

                    {/* Title */}
                    <h2
                        onClick={handleReadMore}
                        className="text-lg sm:text-xl md:text-2xl font-bold mb-2 leading-snug text-[#403B21] hover:text-[#E2CAB3] transition-colors duration-300 cursor-pointer"
                    >
                        {props.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-[#6B6666] text-sm sm:text-base mb-4 line-clamp-4 flex-1">
                        {props.excerpt}
                    </p>

                    {/* Read More as text */}
                    <p
                        onClick={handleReadMore}
                        className="mt-auto text-[#403B21] font-semibold hover:text-[#E2CAB3] transition-colors duration-300 cursor-pointer text-sm sm:text-base"
                    >
                        Read More...
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BlogCard2;
