import React from 'react';
import Hero from '../components/Hero';
import { servicesPageData } from '../assets/assets';
import { Check } from 'lucide-react';
import OurSpeciality from '../components/OurSpeciality';
import Banner from '../components/Banner';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section>
      <Hero
        heading="Digital Solutions for Growth"
        paragraph="We offer comprehensive digital marketing services tailored to your business needs. Our data-driven approach ensures measurable results and sustainable growth." />

      <div className='container mx-auto mt-20'>
        <motion.div
          className='px-8 md:px-32 mb-8'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-3xl text-center text-headingText font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-paraText text-center mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            We offer a full suite of digital marketing services designed to help your business grow and succeed in the digital landscape. Each service is tailored to your unique needs and goals.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-20 mx-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {servicesPageData.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-8 rounded-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 + index * 0.2 }}
            >
              <div className="bg-emerald-400/10 p-4 rounded-lg w-fit mb-6">
                {React.createElement(service.icon, { className: "text-primary h-6 w-6" })}
              </div>
              <motion.h3
                className="text-2xl font-bold mb-4 text-paraText"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
              >
                {service.title}
              </motion.h3>
              <motion.p
                className="text-paraText mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
              >
                {service.description}
              </motion.p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-center text-paraText"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.0 + idx * 0.2 }}
                  >
                    <Check className="h-5 w-5 text-primary mr-3" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Our Speciality Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <OurSpeciality />
        </motion.div>
        
      </div>

      {/* Banner Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <Banner />
      </motion.div>
    </section>
  );
}

export default Services;
