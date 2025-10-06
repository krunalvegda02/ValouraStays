import React from 'react'
import CommonHero from '../../components/CommonHero'
import OffersEmail from '../../components/OffersEmail'
import Filters from './Filters'

const Villas = () => {
    return (
        <div>
            <CommonHero
                image="/path/to/image.jpg"
                title="Villas & Resorts"
                description="Home/ Villas & Resorts"
            />

            <Filters />

            <OffersEmail />
        </div>
    )
}

export default Villas