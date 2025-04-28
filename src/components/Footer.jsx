import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="overflow-hidden bg-gray-800 text-headingText mt-20 mb-0">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex-col gap-y-4 items-center md:items-start hidden md:flex"
          >
            <h2 className="text-white text-2xl font-bold">Cliqwise</h2>
            <p className="text-gray-400 mt-2 pr-16 flex justify-center">
              Transforming businesses through innovative digital marketing solutions. Your success is our priority.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-paraText hover:text-primary"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-paraText hover:text-primary"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-paraText hover:text-primary"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-paraText hover:text-primary"><Linkedin className="h-5 w-5" /></a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-paraText hover:text-primary">About Us</a></li>
              <li><a href="#" className="text-paraText hover:text-primary">Services</a></li>
              <li><a href="#" className="text-paraText hover:text-primary">Case Studies</a></li>
              <li><a href="#" className="text-paraText hover:text-primary">Blog</a></li>
              <li><a href="#" className="text-paraText hover:text-primary">Careers</a></li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, translateX: 20 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary">SEO Optimization</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary">Content Strategy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary">Social Media</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary">Analytics</a></li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col items-center md:items-start w-full max-w-sm mx-auto"
          >
            <h3 className=" text-white text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-l-lg focus:outline-none text-black"
              />
              <button
                type="submit"
                className="bg-primary cursor-pointer text-white px-4 py-2 rounded-r-lg hover:bg-primary transition-all duration-300 flex items-center justify-center"
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Copyright Section */}
      <motion.div
        className="border-t border-gray-600 mt-12 pt-8 text-center md:text-left"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm pb-4 px-8">
          <p>© {new Date().getFullYear()} Cliqwise. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
            <a href="#" className="hover:text-primary">Cookie Policy</a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
