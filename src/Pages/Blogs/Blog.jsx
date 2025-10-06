import React from 'react';
import { useParams } from 'react-router-dom';
import CommonHero from '../../components/CommonHero';
import BlogCard from '../../components/Blogcard';
import AvatarBox from '../../components/AvatarBox';
import FAQSection from '../../components/FAQ';
import Platforms from '../../components/Platforms';
import SendMessage from '../../components/SendMessage';
import Theme from '../../Constants/Theme';
import { BlogsData } from './BlogsData';

const Blog = () => {
    const { id } = useParams();
    const blog = BlogsData.find((b) => b.id === parseInt(id));

    if (!blog) {
        return <div className="text-center py-20 text-3xl">Blog not found</div>;
    }

    return (
        <>
            {/* Hero Section */}
            <CommonHero title={blog.title} description={blog.subtitle} />

            <div className="section-container">
                <div className="pt-10">
                    {/* Blog Header Section */}
                    <div className="flex gap-6">
                        <BlogCard
                            showTitle={false}
                            imageUrl={blog.imageUrl}
                            author={blog.author}
                            date={blog.date}
                            commentsCount={blog.commentsCount}
                        />
                        <div className="w-[30%]">
                            <AvatarBox />
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className={`text-4xl font-bold text-[${Theme.colors.text}] mt-8`}>
                        {blog.title}
                    </h1>

                    {/* Title Description */}
                    <div className="my-4 mb-8 space-y-4">
                        {blog.titleDescription?.map((parag, index) => (
                            <p
                                key={index}
                                className={`text-2xl text-[${Theme.colors.darkText}] leading-relaxed`}
                            >
                                {parag}
                            </p>
                        ))}
                    </div>

                    {/* Images */}
                    {blog.images && (
                        <div className="flex gap-4 w-full mb-8">
                            {blog.images.map((imgSrc, index) => (
                                <div
                                    key={index}
                                    className="flex-1 h-80 overflow-hidden rounded-3xl"
                                >
                                    <img
                                        src={imgSrc}
                                        alt={`image-${index}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Blog Content */}
                    {blog.blogData && (
                        <div className="mt-5 space-y-5">
                            {/* Blog Section Title */}
                            <h2
                                className={`text-3xl font-bold text-[${Theme.colors.text}] mb-4`}
                            >
                                {blog.blogData.title}
                            </h2>

                            {/* Points Section */}
                            <div className="space-y-6">
                                {blog.blogData.points.map((point, index) => (
                                    <div key={index}>
                                        <h3
                                            className={`text-2xl font-semibold text-[${Theme.colors.text}] mb-2`}
                                        >
                                            {point.title}
                                        </h3>
                                        <div className="space-y-4">
                                            {point.paragraphs.map((para, i) => (
                                                <p
                                                    key={i}
                                                    className={`text-xl text-[${Theme.colors.darkText}]`}
                                                >
                                                    {para}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Ending Paragraphs */}
                            <div className="mt-10 space-y-2">
                                {blog.blogData.endingParagraphs.map((para, index) => (
                                    <p
                                        key={index}
                                        className={`text-xl leading-relaxed text-[${Theme.colors.darkText}] ${index === 0
                                                ? `font-semibold text-[${Theme.colors.text}]`
                                                : 'font-normal'
                                            }`}
                                    >
                                        {para}
                                    </p>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* FAQ Section (optional) */}
                    {blog.faqData && <FAQSection faqData={blog.faqData} />}

                    {/* Other Sections */}
                    <Platforms />
                    <SendMessage />
                </div>
            </div>
        </>
    );
};

export default Blog;
