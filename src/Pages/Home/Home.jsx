import React from 'react'
import HeroSection from '../../components/HomeHeroSection'
import DividerWithIcon from '../../components/HorizontalDivider'
import BestResorts from './BestResorts'
import Testimonials from '../../components/Testimonials'
import Wander from './Wander'
import Villas from './Villas'
import Rooms from './Rooms'
import Occasion from './Occations'
import AlternatingContent from './AlternatingContent'
import Services from './Services'
import HomeFooter from './HomeFooter'
import Platforms from '../../components/Platforms'

const Home = () => {
  return (
    <div>
      <HeroSection

      />
      <BestResorts />
      <Wander />
      <Villas />
      <Rooms />
      <Occasion />
      <AlternatingContent />  
      <Services />
      <Platforms />
      <Testimonials />
      <HomeFooter />
    </div>
  )
}

export default Home
