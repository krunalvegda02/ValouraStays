import React from 'react'
import CommonHero from '../../components/CommonHero'
import Villas from './Villas'
import PopularAttraction from './PopularAttraction'
import BottomCard from './BottomCard'
import OffersEmail from '../../components/OffersEmail'
import Theme from '../../Constants/Theme'
import IMAGES from '../../Constants/Images'

const UdaipurPage = () => {
    return (
        <div>
            <CommonHero
                image={IMAGES.VILLAPAGEHERO}
                description="Home / Udaipur Villa"
                title="Udaipur Villa"
            />

            <Villas />
            <PopularAttraction />
            <BottomCard />
            <OffersEmail />
          <div className="section-container px-4 sm:px-8 lg:px-20">
    <h2
        className={`font-serif text-[${Theme.colors.darkText}] 
        text-xl sm:text-2xl md:text-3xl lg:text-4xl 
        text-center leading-relaxed sm:leading-snug md:leading-normal 
        mb-6 sm:mb-8 md:mb-10 max-w-5xl mx-auto`}
    >
        On your next trip to Udaipur, don’t just plan the sights — you deserve an
        experience that stays with you. Let <span className="font-semibold text-[${Theme.colors.text}]">Veloura Stays </span> 
        turn every moment into a memory you’ll cherish.
    </h2>
</div>

        </div>
    )
}

export default UdaipurPage
