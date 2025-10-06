import React from 'react'
import CommonHero from '../../components/CommonHero'
import OffersEmail from '../../components/OffersEmail'
import Filters from './Filters'
import IMAGES from '../../Constants/Images'

const Villas = () => {
    return (
        <div>
            <CommonHero
                image={IMAGES.VILLAPAGEHERO}
                title="Villas & Resorts"
                description="Home/ Villas & Resorts"
            />

            <Filters />

            <OffersEmail />
        </div>
    )
}

export default Villas