import React, { useState } from 'react';
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
};

const Contact = ({ heading }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <motion.div 
      className="container mx-auto px-6 py-20 mt-20" 
      id="contact" 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="text-center mb-20">
        <motion.p className="text-primary font-semibold mb-4" variants={itemVariants}>{heading}</motion.p>
        <motion.h2 className="text-4xl font-bold mb-6" variants={itemVariants}>Let's Start a Conversation</motion.h2>
        <motion.p className="text-paraText max-w-2xl mx-auto" variants={itemVariants}>
          Ready to take your digital presence to the next level? Contact us today and let's discuss how we can help you achieve your business goals.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div className="space-y-8 order-2 md:order-1" variants={containerVariants}>
          {[ {
            icon: <Phone className="w-6 h-6 text-primary" />, 
            title: "Call Us", 
            details: "+1 (555) 123-4567\nMon-Fri 9am-6pm PST"
          }, {
            icon: <Mail className="w-6 h-6 text-primary" />, 
            title: "Email Us", 
            details: "info@cliqwise.com\nsupport@cliqwise.com"
          }, {
            icon: <Clock className="w-6 h-6 text-primary" />, 
            title: "Working Hours", 
            details: "Monday - Friday: 9:00 AM - 6:00 PM\nWeekend: By Appointment"
          }].map((info, index) => (
            <motion.div key={index} className="flex items-start space-x-4" variants={itemVariants}>
              <div className="bg-emerald-400/10 p-4 rounded-lg">{info.icon}</div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                <p className="text-paraText whitespace-pre-line">{info.details}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="bg-gray-100 p-8 rounded-2xl order-1 md:order-2" variants={itemVariants}>
          <form onSubmit={handleFormSubmit} className="space-y-6">
            {['name', 'email', 'subject', 'message'].map((field, index) => (
              <motion.div key={index} variants={itemVariants}>
                <label htmlFor={field} className="block text-sm font-medium text-paraText mb-2">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                {field === 'message' ? (
                  <textarea
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white border text-black border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    placeholder={`Your ${field} here...`}
                    required
                  ></textarea>
                ) : (
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border text-black border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    placeholder={field === 'email' ? 'john@example.com' : `Your ${field}`}
                    required
                  />
                )}
              </motion.div>
            ))}

            <motion.button
              type="submit"
              className="w-full bg-primary text-black py-3 px-6 rounded-lg hover:bg-primary-dark transition-all duration-300 flex items-center justify-center space-x-2"
              variants={itemVariants}
            >
              <span>Send Message</span>
              <Send className="h-5 w-5" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

Contact.defaultProps = {
  heading: "",
};

export default Contact;
