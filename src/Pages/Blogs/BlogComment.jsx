import React, { useState } from 'react';
import Theme from '../../Constants/Theme';
import IMAGES from '../../Constants/Images';
import Button from '../../components/Button';

const BlogComments = () => {
    const [comments, setComments] = useState([
        {
            id: 1,
            name: "Sarah Johnson",
            avatar: IMAGES.TESTIMONIAL1,
            date: "2 days ago",
            comment: "The A-frame hanging villa looks absolutely breathtaking! The mountain views and private pool make it perfect for a romantic getaway. Can't wait to book our anniversary trip!",
            likes: 12,
            isLiked: false,
            isVerified: true
        },
        {
            id: 2,
            name: "Rajesh Mehta",
            avatar: IMAGES.TESTIMONIAL1,
            date: "1 week ago",
            comment: "Stayed here with my family last month. The 5 bedrooms were perfect for us, and the kids loved the pool. The staff was incredibly helpful and the meals were delicious!",
            likes: 8,
            isLiked: true,
            isVerified: true
        },
        {
            id: 3,
            name: "Priya Sharma",
            avatar: IMAGES.TESTIMONIAL1,
            date: "3 weeks ago",
            comment: "Perfect location for destination weddings! We hosted a small ceremony and the villa accommodated all our guests comfortably. The celebration zone was exactly what we needed.",
            likes: 15,
            isLiked: false,
            isVerified: false
        }
    ]);

    const [newComment, setNewComment] = useState({ name: '', comment: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!newComment.name || !newComment.comment) return;
        setIsSubmitting(true);

        await new Promise(resolve => setTimeout(resolve, 1000));

        const comment = {
            id: comments.length + 1,
            name: newComment.name,
            avatar: IMAGES.DEFAULT_AVATAR,
            date: "Just now",
            comment: newComment.comment,
            likes: 0,
            isLiked: false,
            isVerified: false
        };

        setComments([comment, ...comments]);
        setNewComment({ name: '', comment: '' });
        setIsSubmitting(false);
    };

    const handleChange = (e) => {
        setNewComment({ ...newComment, [e.target.name]: e.target.value });
    };

    return (
        <div className="section-container px-4 sm:px-6 lg:px-20 py-8">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-7xl mx-auto">

                {/* LEFT SIDE - Comment Form */}
                <div className="lg:w-2/5">
                    <div className="sticky top-8">
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: Theme.colors.lightText }}></div>
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight" style={{ color: Theme.colors.text }}>
                                    Share Your Experience
                                </h2>
                            </div>
                            <p className="text-base sm:text-md md:text-lg leading-relaxed" style={{ color: Theme.colors.darkText }}>
                                Tell us about your memorable stay at Villa Izara and help other travelers discover this paradise
                            </p>
                        </div>

                        <div className="p-6 sm:p-8 transition-all duration-500 hover:shadow-2xl border rounded-md"
                            style={{
                                borderColor: `${Theme.colors.lightText}30`,
                                boxShadow: '0 8px 40px rgba(64, 59, 33, 0.08)'
                            }}>
                            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                                <input
                                    type="text"
                                    name="name"
                                    value={newComment.name}
                                    onChange={handleChange}
                                    placeholder="Your full name *"
                                    required
                                    className="w-full px-4 sm:px-5 py-3 sm:py-4 border-2 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-opacity-20 bg-white"
                                    style={{ borderColor: Theme.colors.lightText }}
                                />
                                <textarea
                                    name="comment"
                                    value={newComment.comment}
                                    onChange={handleChange}
                                    rows="5"
                                    placeholder="Share your memorable experience at Villa Izara... *"
                                    required
                                    className="w-full px-4 sm:px-5 py-3 sm:py-4 border-2 rounded-md text-sm sm:text-base resize-none focus:outline-none focus:ring-2 focus:ring-opacity-20 bg-white"
                                    style={{ borderColor: Theme.colors.lightText }}
                                ></textarea>
                                <div className="flex justify-end pt-2">
                                    <Button
                                        icon={false}
                                        onClick={handleSubmit}
                                        disabled={isSubmitting || !newComment.name || !newComment.comment}
                                        className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-xl min-w-[140px] sm:min-w-[160px] border-2"
                                        style={{ backgroundColor: Theme.colors.text, color: '#fff', borderColor: Theme.colors.text }}
                                    >
                                        {isSubmitting ? 'Posting...' : 'Share Experience'}
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE - Comments List */}
                <div className="lg:w-3/5 space-y-4">
                    <div className="mb-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight" style={{ color: Theme.colors.text }}>
                            Guest Experiences
                        </h2>
                        <div className="px-3 py-1 text-base sm:text-md md:text-lgfont-semibold shadow-sm border rounded-2xl"
                            style={{ backgroundColor: Theme.colors.lightText, color: Theme.colors.text, borderColor: Theme.colors.darkText }}>
                            {comments.length} Stories
                        </div>
                    </div>

                    <div className="space-y-4">
                        {comments.map((comment) => (
                            <div key={comment.id} className="group p-3 transition-all duration-300 border rounded-md hover:shadow-xl">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-2">
                                    <img src={comment.avatar} alt={comment.name} className="w-12 h-12 sm:w-14 sm:h-14 object-cover border-2 rounded-full" style={{ borderColor: Theme.colors.lightText }} />
                                    <div className="flex-1 min-w-0">
                                        <h5 className="font-semibold text-base sm:text-md md:text-lg" style={{ color: Theme.colors.text }}>
                                            {comment.name}
                                        </h5>
                                        <span className="text-xs sm:text-sm font-medium" style={{ color: Theme.colors.darkText }}>
                                            {comment.date}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-base sm:text-md md:text-lg leading-relaxed" style={{ color: Theme.colors.darkText }}>
                                    {comment.comment}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-6 sm:mt-8">
                        <span className="text-base sm:text-md md:text-lg font-semibold cursor-pointer" style={{ color: Theme.colors.darkText }}>
                            Click To Load More...
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogComments;
