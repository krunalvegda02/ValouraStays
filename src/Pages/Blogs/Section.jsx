import React from 'react'
import BlogCard from '../../components/Blogcard'
import AvatarBox from '../../components/AvatarBox'
import IMAGES from '../../Constants/Images'

const Section = () => {

    const blogs = [
        {
            imageUrl: IMAGES.BLOG1,
            title: "Why Is Villa Izara More Than Just A Private Villa In Udaipur?",
            excerpt: "Meta Description: Discover why Villa Izara is more than just a private villa in Udaipur. Click to learn about the personalized services offered at reasonable rates!",
            author: "Sarah Johnson",
            commentsCount: 80,
            date: "25 Sep 2022",
            BlogId: 1
        },
        {
            imageUrl: IMAGES.BLOG2,
            title: "A-Frame Hanging Villa In Udaipur: Experience Luxury Like Never Before",
            excerpt: "Meta Description: Have you ever heard of hanging villas? Udaipur’s best A-Frame Hanging Villa is coming soon to offer you a luxury experience you've never had before.",
            author: "Sarah Johnson",
            commentsCount: 50,
            date: "23 Sep 2022",
            BlogId: 2
        },
        {
            imageUrl: IMAGES.BLOG3,
            title: "Top Reasons to Choose Izara Hanging Villa in Udaipur",
            excerpt: "Udaipur is often at the top of the list when it comes to having a perfect getaway, as it has a royal charm, lakes, and amazing views.",
            author: "Sarah Johnson",
            commentsCount: 30,
            date: "21 Sep 2022",
            BlogId: 3
        }
    ]

    return (
        <div className="section-container ">
            <div className="flex flex-col lg:flex-row gap-6  mt-10">

                {/* Left Section - Blogs */}
                <div className="w-full lg:w-7/10 md:w-2/3">
                    {blogs.map((blog, index) => (
                        <div key={index} className="">
                            <BlogCard
                                imageUrl={blog.imageUrl}
                                title={blog.title}
                                excerpt={blog.excerpt}
                                author={blog.author}
                                commentsCount={blog.commentsCount}
                                date={blog.date}
                                blogId={blog.BlogId}
                            />
                        </div>
                    ))}
                </div>

                {/* Right Section - Sidebar */}
                <div className="w-full lg:w-3/10 md:w-1/3">
                    <div className="lg:sticky lg:top-20">
                        <AvatarBox />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Section
