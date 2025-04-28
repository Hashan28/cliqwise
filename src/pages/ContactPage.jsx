import React from 'react'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import FAQ from '../components/FAQ'

const ContactPage = () => {
  return (
    <div>
      <Hero
        heading="Get in Touch"
        paragraph="Have a question or want to work together? We'd love to hear from you. Send us a message and we'll respond as soon as possible." />
      <Contact />

      {/* FAQ Section */}
      <FAQ/>
    </div>
  )
}

export default ContactPage