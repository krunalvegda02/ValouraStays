import React from 'react';
import BlogCard from '../../components/Blogcard';
import IMAGES from '../../Constants/Images';
import BlogCard2 from '../../components/BlogCard2';

const Section = () => {
    const blogs = [
        {
            imageUrl: IMAGES.BLOG1,
            title: "Why Is Villa Izara More Than Just A Private Villa In Udaipur?",
            excerpt: "Meta Description: Discover why Villa Izara is more than just a private villa in Udaipur. Click to learn about the personalized services offered at reasonable rates!",
            author: "Sarah Johnson",
            commentsCount: 80,
            date: "25 Sep 2022",
            blogId: 1
        },
        {
            imageUrl: IMAGES.BLOG2,
            title: "A-Frame Hanging Villa In Udaipur: Experience Luxury Like Never Before",
            excerpt: "Meta Description: Have you ever heard of hanging villas? Udaipur’s best A-Frame Hanging Villa is coming soon to offer you a luxury experience you've never had before.",
            author: "Sarah Johnson",
            commentsCount: 50,
            date: "23 Sep 2022",
            blogId: 2
        },
        {
            imageUrl: IMAGES.BLOG3,
            title: "Top Reasons to Choose Izara Hanging Villa in Udaipur",
            excerpt: "Udaipur is often at the top of the list when it comes to having a perfect getaway, as it has a royal charm, lakes, and amazing views.",
            author: "Sarah Johnson",
            commentsCount: 30,
            date: "21 Sep 2022",
            blogId: 3
        }
    ];

    return (
        <section className="section-container ">
            <div className="flex flex-wrap -mx-3 mt-6 sm:mt-12 mb-6 " >
                {blogs.map((blog) => (
                    <BlogCard2
                        key={blog.blogId}
                        imageUrl={blog.imageUrl}
                        title={blog.title}
                        excerpt={blog.excerpt}
                        author={blog.author}
                        commentsCount={blog.commentsCount}
                        date={blog.date}
                        blogId={blog.blogId}
                    />
                ))}
            </div>
        </section>
    );
};

export default Section;
