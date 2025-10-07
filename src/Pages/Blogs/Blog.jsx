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
            <CommonHero title={blog.title} description={blog.subtitle} image={blog.hero} />

            <div className="section-container px-4 sm:px-6 lg:px-20">
                <div className="pt-10 flex flex-col gap-10">

                    {/* Blog Header Section */}
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full md:w-[70%]">
                            <BlogCard
                                showTitle={false}
                                imageUrl={blog.imageUrl}
                                author={blog.author}
                                date={blog.date}
                                commentsCount={blog.commentsCount}
                            />
                        </div>
                        <div className="w-full md:w-[30%]">
                            <AvatarBox />
                        </div>
                    </div>

                    {/* Title */}
                    <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[${Theme.colors.text}] mt-6 md:mt-8`}>
                        {blog.title}
                    </h2>

                    {/* Title Description */}
                    <div className="my-4 mb-8 space-y-3 sm:space-y-4">
                        {blog.titleDescription?.map((parag, index) => (
                            <p
                                key={index}
                                className={`text-base sm:text-lg md:text-2xl text-[${Theme.colors.darkText}] leading-relaxed`}
                            >
                                {parag}
                            </p>
                        ))}
                    </div>

                    {/* Images */}
                    {blog.images && (
                        <div className="flex flex-col sm:flex-row gap-4 w-full mb-8">
                            {blog.images.map((imgSrc, index) => (
                                <div
                                    key={index}
                                    className="flex-1 h-48 sm:h-64 md:h-80 overflow-hidden rounded-none"
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
                                className={`text-xl sm:text-2xl md:text-4xl font-bold text-[${Theme.colors.text}] mb-4`}
                            >
                                {blog.blogData.title}
                            </h2>

                            {/* Points Section */}
                            <div className="space-y-4 sm:space-y-6">
                                {blog.blogData.points.map((point, index) => (
                                    <div key={index}>
                                        <h3
                                            className={`text-lg sm:text-xl md:text-3xl font-semibold text-[${Theme.colors.text}] mb-2`}
                                        >
                                            {point.title}
                                        </h3>
                                        <div className="space-y-2 sm:space-y-4">
                                            {point.paragraphs.map((para, i) => (
                                                <p
                                                    key={i}
                                                    className={`text-sm sm:text-base md:text-xl text-[${Theme.colors.darkText}]`}
                                                >
                                                    {para}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Ending Paragraphs */}
                            <div className="mt-6 sm:mt-10 space-y-1 sm:space-y-2">
                                {blog.blogData.endingParagraphs.map((para, index) => (
                                    <p
                                        key={index}
                                        className={`text-sm sm:text-base md:text-xl leading-relaxed text-[${Theme.colors.darkText}] ${index === 0
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

                    {/* FAQ Section */}
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
