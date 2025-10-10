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

    const [newComment, setNewComment] = useState({
        name: '',
        email: '',
        comment: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleLike = (commentId) => {
        setComments(comments.map(comment =>
            comment.id === commentId
                ? {
                    ...comment,
                    likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
                    isLiked: !comment.isLiked
                }
                : comment
        ));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!newComment.name || !newComment.comment) return;

        setIsSubmitting(true);

        // Simulate API call
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
        setNewComment({ name: '', email: '', comment: '' });
        setIsSubmitting(false);
    };

    const handleChange = (e) => {
        setNewComment({
            ...newComment,
            [e.target.name]: e.target.value
        });
    };

    return (

        <div className="section-container" >
            {/* Main Container - Form Left, Comments Right */}
            <div className="flex flex-col sm:py-5 lg:flex-row gap-8 lg:gap-12 max-w-7xl mx-auto">

                {/* LEFT SIDE - Comment Form */}
                <div className="lg:w-2/5">
                    <div className="sticky top-8">
                        {/* Header */}
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: Theme.colors.lightText }}></div>
                                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight"
                                    style={{ color: Theme.colors.text }}>
                                    Share Your Experience
                                </h2>
                            </div>
                            <p className="text-base leading-relaxed" style={{ color: Theme.colors.darkText }}>
                                Tell us about your memorable stay at Villa Izara and help other travelers discover this paradise
                            </p>
                        </div>

                        {/* Comment Form */}
                        <div className="p-8 rounded-2xl transition-all duration-500 hover:shadow-2xl border"
                            style={{
                                backgroundColor: '#FFFFFF',
                                borderColor: `${Theme.colors.lightText}30`,
                                boxShadow: '0 8px 40px rgba(64, 59, 33, 0.08)'
                            }}>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <input
                                        type="text"
                                        name="name"
                                        value={newComment.name}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 placeholder-gray-400 text-base focus:outline-none focus:ring-3 focus:ring-opacity-20"
                                        style={{
                                            backgroundColor: '#FDFDFD',
                                            borderColor: Theme.colors.lightText,
                                            focusBorderColor: Theme.colors.text,
                                            focusRingColor: Theme.colors.text
                                        }}
                                        placeholder="Your full name *"
                                        required
                                    />
                                </div>
                                {/* <div className="space-y-2">
                                    <input
                                        type="email"
                                        name="email"
                                        value={newComment.email}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 placeholder-gray-400 text-base focus:outline-none focus:ring-3 focus:ring-opacity-20"
                                        style={{
                                            backgroundColor: '#FDFDFD',
                                            borderColor: Theme.colors.lightText,
                                            focusBorderColor: Theme.colors.text,
                                            focusRingColor: Theme.colors.text
                                        }}
                                        placeholder="Email address (optional)"
                                    />
                                </div> */}
                                <div className="space-y-2">
                                    <textarea
                                        name="comment"
                                        value={newComment.comment}
                                        onChange={handleChange}
                                        rows="5"
                                        className="w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 resize-none placeholder-gray-400 text-base focus:outline-none focus:ring-3 focus:ring-opacity-20"
                                        style={{
                                            backgroundColor: '#FDFDFD',
                                            borderColor: Theme.colors.lightText,
                                            focusBorderColor: Theme.colors.text,
                                            focusRingColor: Theme.colors.text
                                        }}
                                        placeholder="Share your memorable experience at Villa Izara... *"
                                        required
                                    ></textarea>
                                </div>
                                <div className="flex justify-end pt-2">
                                    <Button
                                        icon={false}
                                        onClick={handleSubmit}
                                        disabled={isSubmitting || !newComment.name || !newComment.comment}
                                        className="px-8 py-4 text-base font-semibold rounded-xl transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-xl min-w-[160px]"
                                        style={{
                                            backgroundColor: Theme.colors.text,
                                            color: '#FFFFFF'
                                        }}
                                    >
                                        {isSubmitting ? (
                                            <div className="flex items-center gap-2">
                                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                Posting...
                                            </div>
                                        ) : (
                                            'Share Experience'
                                        )}
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE - Comments List */}
                <div className="lg:w-3/5">
                    {/* Comments Header */}
                    <div className="mb-8 p-6 rounded-2xl border"
                        style={{
                            backgroundColor: '#FFFFFF',
                            borderColor: `${Theme.colors.lightText}30`
                        }}>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight"
                                    style={{ color: Theme.colors.text }}>
                                    Guest Experiences
                                </h2>
                                <span className="px-3 py-2 rounded-full text-sm font-semibold shadow-sm"
                                    style={{
                                        backgroundColor: Theme.colors.lightText,
                                        color: Theme.colors.text
                                    }}>
                                    {comments.length} Stories
                                </span>
                            </div>
                            <div className="text-sm font-medium" style={{ color: Theme.colors.darkText }}>
                                Most recent first
                            </div>
                        </div>
                        <p className="text-base mt-3" style={{ color: Theme.colors.darkText }}>
                            Discover authentic experiences from our valued guests
                        </p>
                    </div>

                    {/* Comments List */}
                    <div className="space-y-6">
                        {comments.map((comment) => (
                            <div key={comment.id}
                                className="group p-6 rounded-2xl transition-all duration-500 hover:scale-[1.02] border hover:shadow-2xl"
                                style={{
                                    backgroundColor: '#FFFFFF',
                                    borderColor: `${Theme.colors.lightText}20`,
                                    boxShadow: '0 4px 20px rgba(64, 59, 33, 0.05)'
                                }}>

                                {/* Comment Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className="relative">
                                            <img
                                                src={comment.avatar}
                                                alt={comment.name}
                                                className="w-12 h-12 rounded-full object-cover border-2 shadow-md"
                                                style={{ borderColor: Theme.colors.lightText }}
                                            />
                                            {comment.isVerified && (
                                                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center shadow-sm"
                                                    style={{ backgroundColor: Theme.colors.text }}>
                                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                            )}
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-center gap-3">
                                                <h5 className="font-semibold text-lg" style={{ color: Theme.colors.text }}>
                                                    {comment.name}
                                                </h5>
                                                {comment.isVerified && (
                                                    <span className="text-xs px-2 py-1 rounded-full font-medium"
                                                        style={{
                                                            backgroundColor: `${Theme.colors.text}10`,
                                                            color: Theme.colors.text
                                                        }}>
                                                        Verified Guest
                                                    </span>
                                                )}
                                            </div>
                                            <span className="text-sm font-medium" style={{ color: Theme.colors.darkText }}>
                                                {comment.date}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Like Section */}
                                    <div
                                        onClick={() => handleLike(comment.id)}
                                        className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300 cursor-pointer border ${comment.isLiked
                                                ? 'shadow-md transform scale-105'
                                                : 'hover:shadow-sm'
                                            }`}
                                        style={{
                                            backgroundColor: comment.isLiked ? `${Theme.colors.text}10` : '#F9F9F9',
                                            borderColor: comment.isLiked ? Theme.colors.text : Theme.colors.lightText,
                                            color: comment.isLiked ? Theme.colors.text : Theme.colors.darkText
                                        }}
                                    >
                                        <svg className="w-5 h-5" fill={comment.isLiked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                        <span className="text-sm font-semibold min-w-[20px] text-center">
                                            {comment.likes}
                                        </span>
                                    </div>
                                </div>

                                {/* Comment Text */}
                                <p className="text-lg leading-relaxed" style={{ color: Theme.colors.darkText }}>
                                    {comment.comment}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="text-center mt-12">
                        <div
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl transition-all duration-300 cursor-pointer hover:gap-4 group border font-semibold"
                            style={{
                                backgroundColor: '#FFFFFF',
                                borderColor: Theme.colors.lightText,
                                color: Theme.colors.text,
                                boxShadow: '0 4px 20px rgba(64, 59, 33, 0.08)'
                            }}
                        >
                            <span className="text-base">Load More Stories</span>
                            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogComments;