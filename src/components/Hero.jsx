import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'
import ContactPage from '../pages/ContactPage';

const Hero = ({ heading, heading2, paragraph, showButton }) => {

  const navigate = useNavigate();
  const location = useLocation();

  const goToServicePage = () => {
    navigate("/services");
  };

  // Scroll to section when hash in URL changes
  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);


  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 py-10 text-center">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/cover1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {heading}

          <motion.span
            className="text-primary"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <br /> {heading2}
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-sm sm:text-lg mb-6 sm:mb-10 max-w-2xl mx-auto text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {paragraph}
        </motion.p>

        {/* Buttons Section */}
        {showButton && (
          <motion.div
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <a
              href="https://wa.me/94757695714"
              target="_blank"
              rel="noopener noreferrer"
            >
            <motion.button
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg cursor-pointer font-semibold text-black transition-all duration-300 bg-gradient-to-r from-[#2fe885] to-[#24c76a] shadow-lg hover:shadow-[0_0_20px_#2fe885] hover:scale-105"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Contact Us
            </motion.button>
            </a>

            <motion.button
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-black transition-all duration-300 bg-gradient-to-r from-[#ffdc74] to-[#f6c453] shadow-lg hover:shadow-[0_0_20px_#ffdc74] hover:scale-105"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToServicePage}
            >
              Our Services
            </motion.button>
          </motion.div>
        )}

      </motion.div>
    </div>
  )
}

Hero.defaultProps = {
  heading2: "", // This prevents undefined errors
};

export default Hero