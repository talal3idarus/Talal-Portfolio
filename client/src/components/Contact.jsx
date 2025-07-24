import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, socials, contactInfo } from '../constants/socials';
import { 
  fadeInUp, 
  staggerContainer, 
  staggerItem, 
  cardHover 
} from '../animations/variants';

const Contact = () => {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl;
    link.download = 'Talal_Ahmed_CV.pdf';
    link.click();
  };

  return (
    <div className="py-20 bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50 dark:from-gray-900 dark:via-teal-900/20 dark:to-emerald-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Let's{' '}
            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <motion.div
              variants={staggerItem}
              whileHover={cardHover}
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-200/20 dark:border-gray-700/20"
            >
              <div className="flex items-center mb-6">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-teal-100 dark:ring-teal-900/20 mr-4"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Get in Touch
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {personalInfo.name}
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/20 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                    <p className="text-gray-600 dark:text-gray-300">{personalInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/20 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Phone</p>
                    <p className="text-gray-600 dark:text-gray-300">{personalInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/20 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Location</p>
                    <p className="text-gray-600 dark:text-gray-300">{personalInfo.location}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/20 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">⏰</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Availability</p>
                    <p className="text-gray-600 dark:text-gray-300">{contactInfo.availability}</p>
                  </div>
                </div>
              </div>

              {/* Download CV Button */}
              <motion.button
                onClick={downloadCV}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>📄</span>
                <span>Download CV</span>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={staggerItem}
              whileHover={cardHover}
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-200/20 dark:border-gray-700/20"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Connect on Social Media
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socials.slice(0, 4).map((social) => (
                  <motion.a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300"
                    style={{ 
                      borderLeft: `4px solid ${social.color}`,
                    }}
                  >
                    <SocialIcon name={social.icon} color={social.color} />
                    <div className="ml-3">
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">
                        {social.name}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-xs">
                        {/* {social.username} */}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              variants={staggerItem}
              whileHover={cardHover}
              className="bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 rounded-3xl p-8 border border-teal-200/20 dark:border-teal-800/20"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Services I Offer
              </h3>
              
              <div className="space-y-3">
                {contactInfo.services.map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-teal-500 mr-3">▸</span>
                    {service}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Social Icon Component
const SocialIcon = ({ name, color }) => {
  const iconStyle = { color };
  
  const icons = {
    github: (
      <svg className="w-6 h-6" style={iconStyle} fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
    linkedin: (
      <svg className="w-6 h-6" style={iconStyle} fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    instagram: (
      <svg className="w-6 h-6" style={iconStyle} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.455 18.455H5.262V8.455h3.193v10zm-1.596-11.387c-1.024 0-1.85-.826-1.85-1.85s.826-1.85 1.85-1.85 1.85.826 1.85 1.85-.826 1.85-1.85 1.85zM18.455 18.455h-3.193v-5.104c0-1.218-.022-2.786-1.698-2.786-1.699 0-1.959 1.326-1.959 2.695v5.195H8.412V8.455h3.063v1.389h.043c.427-.808 1.47-1.658 3.025-1.658 3.237 0 3.836 2.131 3.836 4.903v5.366z"/>
      </svg>
    ),
    twitter: (
      <svg className="w-6 h-6" style={iconStyle} fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    )
  };

  return icons[name] || <span style={iconStyle}>🔗</span>;
};

export default Contact;
