import { motion } from 'framer-motion';

const Banner = () => {
    return (
        <div className="container mx-auto rounded-2xl relative w-full py-16 flex items-center justify-center bg-gradient-to-r from-secondary to-primary text-white">
            <div className="text-center max-w-2xl px-6 ">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-2xl md:text-5xl text-headingText font-bold mb-4">
                    Elevate Your Brand with <span className="text-headingText">Digital Excellence</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-md md:text-lg mb-6">
                    We craft data-driven digital marketing strategies to boost your online presence and maximize conversions.
                </motion.p>
                <a
                    href="https://wa.me/94757695714"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                <motion.button
                    className="px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-black transition-all duration-300 bg-gradient-to-r from-[#ffdc74] to-[#f6c453] shadow-lg hover:shadow-[0_0_20px_#ffdc74] hover:scale-105"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Free Consultation
                </motion.button>
                </a>
            </div>
        </div>
    );
};

export default Banner;
