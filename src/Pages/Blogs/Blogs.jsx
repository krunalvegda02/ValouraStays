import React from 'react'
import Testimonials from "../../components/Testimonials"
import CommonHero from '../../components/CommonHero'
import Section from './Section'
import Platforms from '../../components/Platforms'
import SendMessage from '../../components/SendMessage'


const Blogs = () => {
    return (
        <div>
            <CommonHero
                image="/path/to/image.jpg"
                title="Blogs"
                description="Home / Blog"
            />

            <Section />
            <Testimonials />
            <Platforms />
            <SendMessage />
        </div>
    )
}

export default Blogs
