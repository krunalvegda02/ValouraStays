import React from 'react'
import HeroIzara from './HeroIzara'
import Navbar2 from '../../layout/Navbar2'
import FullSection from './FullSection'
import SendMessage from '../../components/SendMessage'

const VillaIzara = () => {
    return (
        <div>
            <Navbar2 />
            <HeroIzara />
            <FullSection />
            <SendMessage />
        </div>
    )
}

export default VillaIzara
