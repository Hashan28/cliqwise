import React from 'react';
import { services } from '../assets/assets.js';
import PpcWheel from './PpcWheel.jsx';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import WebImage from '../assets/WebImage.jpg';
import SEImage from '../assets/SEImage.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeInOut' },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

const OurServices = () => {
  return (
    <motion.div
      className="container mx-auto px-6 pt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Section Heading */}
      <div className="text-center mb-20">
        <p className="text-primary font-semibold mb-4">Our Services</p>
        <motion.h2 className="text-4xl text-headingText font-bold mb-6" variants={textVariants}>
          Comprehensive Digital Marketing Solutions
        </motion.h2>
        <motion.p className="text-paraText max-w-2xl mx-auto" variants={textVariants}>
          We offer a full suite of digital marketing services designed to help your business grow.
        </motion.p>
      </div>

      {/* Service Cards */}
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={containerVariants}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-8 rounded-xl shadow-lg group"
            variants={cardVariants}
          >
            <div className="text-white mb-6">
              {React.createElement(service.icon, { className: 'h-12 w-12 text-primary' })}
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
            <p className="text-paraText whitespace-pre-line">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Pay Per Click Advertising Section */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 items-center" variants={containerVariants}>
        
        {/* Left Side: PpcWheel */}
        <motion.div className="order-2 md:order-1 flex justify-center p-6 md:p-8" variants={cardVariants}>
          <PpcWheel />
        </motion.div>

        {/* Right Side: Text */}
        <motion.div className="order-1 md:order-2 text-center md:text-left p-6 md:p-8" variants={textVariants}>
          <h3 className="text-2xl md:text-3xl text-headingText font-bold mb-3 md:mb-4">
            Pay Per Click Advertising
          </h3>
          <p className="text-paraText mb-4">CliQwise: Smarter PPC, Bigger Results</p>
          <p className="text-paraText mb-4">
          Pay Per Click (PPC) Advertising is a digital marketing strategy where businesses pay a fee each time their ad is clicked. It’s a way of buying visits to your website instead of earning them organically. PPC helps you quickly reach your target audience, drive traffic, and generate leads or sales with measurable results.
          </p>
        </motion.div>

      </motion.div>

      {/* Social Media Marketing Section */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 items-center" variants={containerVariants}>
        
        {/* Text Content */}
        <motion.div className="text-center md:text-left p-6" variants={textVariants}>
          <h2 className="text-2xl md:text-3xl text-headingText font-bold mb-6">
            Social Media Marketing
          </h2>
          <p className="text-paraText">
          Social Media Marketing uses platforms like Facebook, Instagram, and LinkedIn to promote your brand, engage with your audience, and drive business growth. It helps build awareness, foster loyalty, and generate leads through targeted content, ads, and community interaction.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div className="flex justify-center md:justify-end p-6" variants={textVariants}>
          <img 
            src={SEImage} 
            alt="Social Media Marketing" 
            className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg object-cover h-auto"
          />
        </motion.div>

      </motion.div>

      {/* Web Development Section */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 items-center" variants={containerVariants}>
        
        {/* Image */}
        <motion.div className="order-2 md:order-1 flex justify-center md:justify-start p-6" variants={textVariants}>
          <img 
            src={WebImage} 
            alt="Web Development" 
            className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg object-cover h-auto"
          />
        </motion.div>

        {/* Text */}
        <motion.div className="order-1 md:order-2 text-center md:text-left p-6" variants={textVariants}>
          <h2 className="text-2xl md:text-3xl text-headingText font-bold mb-6">
            Web Development And Maintenance
          </h2>
          <p className="text-paraText mb-4">
            We design and develop modern, responsive websites that look great on all devices and reflect your brand perfectly...
          </p>
          <p className="text-paraText mb-6">
            Our maintenance services keep your website secure, updated, and running smoothly...
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 justify-center md:justify-start">
            <Facebook className="text-paraText w-6 h-6 hover:text-primary cursor-pointer transition-colors duration-300" />
            <Instagram className="text-paraText w-6 h-6 hover:text-primary cursor-pointer transition-colors duration-300" />
            <Twitter className="text-paraText w-6 h-6 hover:text-primary cursor-pointer transition-colors duration-300" />
          </div>
        </motion.div>

      </motion.div>

    </motion.div>
  );
};

export default OurServices;
