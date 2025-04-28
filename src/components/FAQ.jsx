import React from 'react';
import { motion } from 'framer-motion';
import { faqQuies } from '../assets/assets';

const FAQ = () => {
  return (
    <div>
      {/* FAQ Section */}
      <div className="my-16 container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-paraText max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Find quick answers to common questions about our services and process.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 mx-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          
        {faqQuies.map((item,index)=>(
           <motion.div key={index}
           className="bg-gray-800 p-8 rounded-2xl"
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.9 }}
         >
           <h3 className="text-xl text-white font-bold mb-4">
             {item.question}
           </h3>
           <p className="text-gray-400">
            {item.answer}
           </p>
         </motion.div>
        ))}

        
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
