import React from 'react'
import Hero from '../components/Hero'
import about1 from '../assets/aboutImg1.avif'
import about2 from '../assets/aboutImg2.avif'
import { values } from '../assets/assets'
import ReviewSection from '../components/ReviewSection'
import { motion } from 'framer-motion'

const AboutUsPage = () => {
  return (
    <div>
      <Hero
        heading="Driving Digital Success"
        paragraph="We're more than just a digital marketing agency. We're your strategic partner in navigating the digital landscape and achieving exceptional growth through innovative solutions and data-driven strategies." />

      <div className="container mx-auto px-4 mt-20">

        {/* Story Section */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div>
            <motion.h2
              className="text-center md:text-left text-3xl text-headingText font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Our Story
            </motion.h2>
            <motion.p
              className="text-center md:text-left text-paraText mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Founded in 2023, Cliqwise emerged from a vision to transform how businesses approach digital marketing. We recognized that traditional marketing methods weren't keeping pace with the rapidly evolving digital landscape.
            </motion.p>
            <motion.p
              className="text-center md:text-left text-paraText mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              What started as a small team of passionate digital marketers has grown into a full-service agency, helping hundreds of businesses achieve their digital marketing goals. Our journey has been marked by continuous innovation, learning, and adaptation to new technologies and market trends.
            </motion.p>
            <motion.p
              className="text-center md:text-left text-paraText"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Today, we're proud to be recognized as a leading digital marketing agency, known for our data-driven approach and exceptional results. Our success is measured by the success of our clients, and we're committed to pushing the boundaries of what's possible in digital marketing.
            </motion.p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <motion.img
              src={about1}
              alt="Team collaboration"
              className="rounded-2xl object-cover h-64 w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
            <motion.img
              src={about2}
              alt="Office space"
              className="rounded-2xl object-cover h-64 w-full mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />
          </div>
        </motion.div>

        {/* Core Values Section */}
        <motion.div
          className="mb-20 container mx-auto px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl text-headingText font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Our Core Values
            </motion.h2>
            <motion.p
              className="text-paraText max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              These principles guide everything we do and shape how we work with our clients to achieve extraordinary results.
            </motion.p>
          </div>

          {/* Responsive Grid for Core Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-2xl shadow-md transition"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
              >
                <div className="bg-transparent p-4 rounded-lg w-fit mb-6">
                  {React.createElement(value.icon, { className: "h-8 w-8 text-primary" })}
                </div>
                <h3 className="text-lg text-white font-bold mb-4">{value.title}</h3>
                <p className="text-paraText text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>

        </motion.div>

        {/* Client Review Section */}
        <motion.div
          className="container mx-auto px-4 mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <ReviewSection />
        </motion.div>

      </div>

    </div>
  )
}

export default AboutUsPage