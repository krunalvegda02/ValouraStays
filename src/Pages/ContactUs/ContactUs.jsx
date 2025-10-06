import React from 'react'
import CommonHero from '../../components/CommonHero'
import { Contact } from 'lucide-react'
import ContactForm from './EmailForm'
import Map from './Map'
import OffersEmail from '../../components/OffersEmail'
import IMAGES from '../../Constants/Images'

const ContactUs = () => {
  return (
    <div>
      <CommonHero
        image={IMAGES.CONTACTUSHERO}
        title="Contact Us"
        description="Home / Contact Us"
      />

      <ContactForm />

      <OffersEmail />

      <Map />
    </div>
  )
}

export default ContactUs
