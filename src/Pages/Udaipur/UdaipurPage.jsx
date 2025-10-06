import React from 'react'
import CommonHero from '../../components/CommonHero'
import Villas from './Villas'
import PopularAttraction from './PopularAttraction'
import BottomCard from './BottomCard'
import OffersEmail from '../../components/OffersEmail'
import Theme from '../../Constants/Theme'

const UdaipurPage = () => {
    return (
        <div>
            <CommonHero
                description="Home / Udaipur Villa"
                title="Udaipur Villa"
            />

            <Villas />
            <PopularAttraction />
            <BottomCard />
            <OffersEmail />
            <div className='section-container'>
                <h2 className={`fotn-serif text-[${Theme.colors.darkText}] text-4xl text-center mb-10`}>
                    On your next trip to Udaipur, don’t just plan the sights,you deserve an experience that stays with you.
                    Let Veloura Stays turn every moment into a memory you’ll cherish
                </h2>
            </div>
        </div>
    )
}

export default UdaipurPage
