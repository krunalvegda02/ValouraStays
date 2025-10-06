import React from 'react'
import Testimonials from "../../components/Testimonials"
import CommonHero from '../../components/CommonHero'
import Section from './Section'
import Platforms from '../../components/Platforms'
import SendMessage from '../../components/SendMessage'
import IMAGES from '../../Constants/Images'


const Blogs = () => {
    return (
        <div>
            <CommonHero
                image={IMAGES.BLOGHERO}
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
