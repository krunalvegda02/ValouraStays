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
import BlogComments from './BlogComment';
import { Title, Meta } from "react-head";



const Blog = () => {
    const { id } = useParams();
    const blog = BlogsData.find((b) => b.id === parseInt(id));

    if (!blog) {
        return <div className="text-center py-20 text-3xl">Blog not found</div>;
    }

    return (
        <>

            {/* ✅ Dynamic Meta Tags */}
            <Title>{blog.metaTitle || blog.title}</Title>
            <Meta name="description" content={blog.metaDescription || blog.subtitle} />

            {/* Optional — Social Sharing SEO Tags */}
            <Meta property="og:title" content={blog.metaTitle || blog.title} />
            <Meta property="og:description" content={blog.metaDescription || blog.subtitle} />
            <Meta property="og:image" content={blog.hero} />
            <Meta property="og:type" content="article" />



            {/* Hero Section */}
            <CommonHero title={blog.title} description={blog.subtitle} image={blog.hero} />

            <div className="section-container ">
                <div className="pt-12 flex flex-col ">

                    {/* Blog Header Section */}
                    {/* <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full  items-center">
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
                    </div> */}

                    {/* Title */}
                    <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[${Theme.colors.text}] `}>
                        {blog.title}
                    </h2>

                    {/* Title Description */}
                    <div className=" my-4 space-y-3 sm:space-y-1">
                        {blog.titleDescription?.map((parag, index) => (
                            <p
                                key={index}
                                className={`text-base sm:text-md md:text-lg text-[${Theme.colors.darkText}] leading-relaxed`}
                            >
                                {parag}
                            </p>
                        ))}
                    </div>

                    {/* Images */}
                    {blog.images && (
                        <div className="flex flex-col sm:flex-row gap-4 w-full mb-4">
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
                        <div className="mt-3 space-y-5">
                            {/* Blog Section Title */}
                            <h2
                                className={`text-xl sm:text-2xl md:text-4xl font-bold text-[${Theme.colors.text}] mb-5 `}
                            >
                                {blog.blogData.title}
                            </h2>

                            {/* Points Section */}
                            <div className="space-y-2 sm:space-y-3">
                                {blog.blogData.points.map((point, index) => (
                                    <div key={index}>
                                        <h3
                                            className={`text-lg sm:text-xl md:text-3xl font-semibold text-[${Theme.colors.text}] mb-2`}
                                        >
                                            {point.title}
                                        </h3>
                                        <div className="space-y-1">
                                            {point.paragraphs.map((para, i) => (
                                                <p
                                                    key={i}
                                                    className={`text-base sm:text-md md:text-lg text-[${Theme.colors.darkText}]`}
                                                >
                                                    {para}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Ending Paragraphs */}
                            <div className="mt-2 space-y-1 mb-6 ">
                                {blog.blogData.endingParagraphs.map((para, index) => (
                                    <p
                                        key={index}
                                        className={`text-base sm:text-md md:text-lg leading-relaxed text-[${Theme.colors.darkText}] ${index === 0
                                            ? `font-semibold text-[${Theme.colors.text}] `
                                            : 'font-normal'
                                            }`}
                                    >
                                        {para}
                                    </p>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <BlogComments />

            {/* FAQ Section */}
            <div className=''>
                {blog.faqData && <FAQSection faqData={blog.faqData} />}
            </div>

            {/* Other Sections */}
            <Platforms />
            <div className='mb-12'>
                <SendMessage />
            </div>


        </>
    );
};

export default Blog;
