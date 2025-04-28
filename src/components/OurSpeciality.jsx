import React from 'react';
import { specialties } from '../assets/assets';
import { motion } from 'framer-motion';

const OurSpeciality = () => {
  return (
    <div>
      {/* Specialties Grid */}
      <div className="mb-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-3xl text-headingText font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Specialties
          </motion.h2>
          <motion.p
            className="text-paraText max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            We excel in multiple areas of digital marketing, providing comprehensive solutions for your business growth.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mx-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 + index * 0.3 }} // Sequential delay for each item
            >
              <div className="bg-emerald-400/10 p-3 rounded-lg w-fit mb-4">
                {React.createElement(specialty.icon, { className: "h-5 w-5 text-primary" })}
              </div>
              <motion.h3
                className="text-xl text-paraText font-bold mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 + index * 0.3 }}
              >
                {specialty.title}
              </motion.h3>
              <motion.p
                className="text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 + index * 0.3 }}
              >
                {specialty.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurSpeciality;
