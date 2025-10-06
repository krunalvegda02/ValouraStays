import React from 'react'
import CommonHero from '../../components/CommonHero'
import { Contact } from 'lucide-react'
import ContactForm from './EmailForm'
import Map from './Map'
import OffersEmail from '../../components/OffersEmail'

const ContactUs = () => {
  return (
    <div>
      <CommonHero
        image="/path/to/image.jpg"
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
