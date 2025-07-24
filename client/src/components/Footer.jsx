import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, socials } from '../constants/socials';
import { fadeInUp, staggerContainer, staggerItem } from '../animations/variants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Skills', href: '#skills' },
      { label: 'Projects', href: '#projects' },
      { label: 'Experience', href: '#experience' },
      { label: 'Achievements', href: '#achievements' },
      { label: 'Contact', href: '#contact' }
    ],
    resources: [
      { label: 'Resume/CV', href: personalInfo.resumeUrl, external: true },
      { label: 'GitHub', href: 'https://github.com/talal3idarus', external: true },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/talal-alaidarus', external: true },
      { label: 'Research Papers', href: '#achievements', external: false }
    ],
    contact: [
      { label: personalInfo.email, href: `mailto:${personalInfo.email}`, icon: '📧' },
      { label: personalInfo.phone, href: `tel:${personalInfo.phone}`, icon: '📱' },
      { label: personalInfo.location, href: '#', icon: '📍' }
    ]
  };

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {/* Brand section */}
            <motion.div
              variants={staggerItem}
              className="lg:col-span-2"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-12 h-12 mr-4">
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-teal-400 shadow-lg"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">T</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Talal Ahmed Al Aidarus</h3>
                  <p className="text-teal-400">{personalInfo.title}</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                {personalInfo.bio.short}
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {Object.entries(personalInfo.stats).slice(0, 4).map(([key, value]) => (
                  <motion.div
                    key={key}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-3 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50"
                  >
                    <div className="text-xl font-bold text-teal-400">{value}</div>
                    <div className="text-xs text-gray-400 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social links */}
              <div className="flex space-x-4">
                {socials.slice(0, 5).map((social) => (
                  <motion.a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg"
                    style={{ 
                      '--hover-color': social.color,
                      borderColor: 'transparent'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = social.color;
                      e.target.style.borderColor = social.color;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#1f2937';
                      e.target.style.borderColor = 'transparent';
                    }}
                  >
                    <SocialIcon name={social.icon} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Navigation links */}
            <motion.div variants={staggerItem}>
              <h4 className="text-lg font-semibold mb-6 text-white">Navigation</h4>
              <ul className="space-y-3">
                {footerLinks.navigation.map((link) => (
                  <li key={link.label}>
                    <motion.button
                      onClick={() => scrollToSection(link.href)}
                      whileHover={{ x: 5 }}
                      className="text-gray-300 hover:text-teal-400 transition-colors duration-300 text-left"
                    >
                      {link.label}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources & Contact */}
            <motion.div variants={staggerItem}>
              <h4 className="text-lg font-semibold mb-6 text-white">Resources</h4>
              <ul className="space-y-3 mb-8">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      target={link.external ? "_blank" : "_self"}
                      rel={link.external ? "noopener noreferrer" : ""}
                      whileHover={{ x: 5 }}
                      className="text-gray-300 hover:text-teal-400 transition-colors duration-300 flex items-center"
                    >
                      {link.label}
                      {link.external && (
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      )}
                    </motion.a>
                  </li>
                ))}
              </ul>

              {/* Contact info */}
              <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
              <div className="space-y-3">
                {footerLinks.contact.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    whileHover={{ x: 5 }}
                    className="flex items-center text-gray-300 hover:text-teal-400 transition-colors duration-300 text-sm"
                  >
                    <span className="mr-2">{contact.icon}</span>
                    {contact.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.p 
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="text-gray-400 text-sm mb-4 md:mb-0"
              >
                © {currentYear} Talal Ahmed Al Aidarus. All rights reserved.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </footer>
  );
};

// Social Icon Component
const SocialIcon = ({ name }) => {
  const icons = {
    github: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    instagram: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.455 18.455H5.262V8.455h3.193v10zm-1.596-11.387c-1.024 0-1.85-.826-1.85-1.85s.826-1.85 1.85-1.85 1.85.826 1.85 1.85-.826 1.85-1.85 1.85zM18.455 18.455h-3.193v-5.104c0-1.218-.022-2.786-1.698-2.786-1.699 0-1.959 1.326-1.959 2.695v5.195H8.412V8.455h3.063v1.389h.043c.427-.808 1.47-1.658 3.025-1.658 3.237 0 3.836 2.131 3.836 4.903v5.366z"/>
      </svg>
    ),
    twitter: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    ),
    email: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819A1.636 1.636 0 0124 5.457z"/>
      </svg>
    ),
    globe: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 7.178a8.958 8.958 0 01.798 1.946c-.726.168-1.506.283-2.325.351-.201-.778-.462-1.534-.771-2.261a10.24 10.24 0 012.298-.036zm-1.08-1.982a10.097 10.097 0 01-2.254.011 8.947 8.947 0 00-2.467-2.467 8.954 8.954 0 00-2.254-.011A8.947 8.947 0 007.046 5.196 10.24 10.24 0 004.748 7.457c.201.778.462 1.534.771 2.261a8.958 8.958 0 01-.798-1.946 10.24 10.24 0 012.298.036zm-5.568 6.804c0-.726.168-1.506.283-2.325.778.201 1.534.462 2.261.771a10.24 10.24 0 01.036-2.298 8.958 8.958 0 01-1.946-.798 8.958 8.958 0 01-1.946.798 10.24 10.24 0 01.036 2.298c.727-.309 1.483-.57 2.261-.771a8.958 8.958 0 01-.283 2.325z"/>
      </svg>
    )
  };

  return icons[name] || <span>🔗</span>;
};

export default Footer;
