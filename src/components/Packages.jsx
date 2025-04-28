import { CheckCircle } from 'lucide-react';
import React from 'react';
import { SEpackages, Webpackages } from '../assets/assets';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.3 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1, y: 0,
        transition: { duration: 0.8, ease: 'easeInOut' },
    },
};

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Packages = () => {
    return (
        <>
        <motion.div
            className='container mx-auto mt-20'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={containerVariants}
        >
            <motion.div className="text-center mb-20" variants={textVariants}>
                <p className="text-primary font-semibold mb-4">Our Social-Media Packages</p>
                <h2 className="text-4xl font-bold mb-6 text-headingText">Reasonable and Competitive Pricing</h2>
                <p className="text-paraText max-w-2xl mb-16 mx-auto">
                    Ready to take your digital presence to the next level? Contact us today and let's discuss how we can help you achieve your business goals.
                </p>
            </motion.div>
            
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-4" variants={containerVariants}>
                {SEpackages.map((plan, index) => (
                    <motion.div key={index} className="relative px-4 py-8 border-1 border-shadow rounded-2xl border-gray-300" variants={cardVariants}>
                        {plan.highlighted && (
                            <motion.button className="absolute top-6 right-2 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-lg" variants={textVariants}>
                                Most Popular
                            </motion.button>
                        )}

                        <motion.h1 className="text-xl font-bold" variants={textVariants}>{plan.name}</motion.h1>
                        <motion.p className="text-paraText py-8" variants={textVariants}>{plan.description}</motion.p>
                        <motion.h3 className="font-bold text-4xl py-4" variants={textVariants}>
                            {plan.price} <span className="text-lg font-medium">/month</span>
                        </motion.h3>

                        <motion.ul className="mt-4 space-y-2" variants={containerVariants}>
                            {plan.features.map((feat, idx) => (
                                <motion.li key={idx} className="py-2 flex items-center space-x-2 gap-2 text-paraText" variants={textVariants}>
                                    <CheckCircle className="w-5 h-5 flex-shrink-0 text-primary" />{feat}
                                </motion.li>
                            ))}
                        </motion.ul>
                        <motion.div className="mx-4 mt-8" variants={textVariants}>
                            <button className={`w-full border-1 py-2 font-semibold cursor-pointer border-primary text-primary ${plan.highlighted ? "bg-primary text-white" : "text-primary"}`}>Buy Plan</button>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>            
        </motion.div>

        <motion.div
            className='container mx-auto mt-20'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={containerVariants}
        >
            <motion.div className="text-center mb-20" variants={textVariants}>
                <p className="text-primary font-semibold mb-4">Our Website-Develoment Packages</p>
                <h2 className="text-4xl font-bold mb-6 text-headingText">Build a Powerful Online Presence</h2>
                <p className="text-paraText max-w-2xl mb-16 mx-auto">
                Bring your vision to life with stunning, responsive websites that are designed to captivate visitors and drive results for your business.
                </p>
            </motion.div>
            
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-4" variants={containerVariants}>
                {Webpackages.map((plan, index) => (
                    <motion.div key={index} className="relative px-4 py-8 border-1 border-shadow rounded-2xl border-gray-300" variants={cardVariants}>
                        {plan.highlighted && (
                            <motion.button className="absolute top-6 right-2 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-lg" variants={textVariants}>
                                Most Popular
                            </motion.button>
                        )}

                        <motion.h1 className="text-xl font-bold" variants={textVariants}>{plan.name}</motion.h1>
                        <motion.p className="text-paraText py-8" variants={textVariants}>{plan.description}</motion.p>
                        <motion.h3 className="font-bold text-4xl py-4" variants={textVariants}>
                            {plan.price} 
                        </motion.h3>

                        <motion.ul className="mt-4 space-y-2" variants={containerVariants}>
                            {plan.features.map((feat, idx) => (
                                <motion.li key={idx} className="py-2 flex items-center space-x-2 gap-2 text-paraText" variants={textVariants}>
                                    <CheckCircle className="w-5 h-5 flex-shrink-0 text-primary" />{feat}
                                </motion.li>
                            ))}
                        </motion.ul>
                        <motion.div className="mx-4 mt-8" variants={textVariants}>
                            <button className={`w-full border-1 py-2 font-semibold cursor-pointer border-primary text-primary ${plan.highlighted ? "bg-primary text-white" : "text-primary"}`}>Buy Plan</button>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>

            
        </motion.div>

    </>
    );
};

export default Packages;
