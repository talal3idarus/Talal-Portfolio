import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo, socials } from '../constants/socials';
import { 
  heroTextVariants, 
  heroImageVariants, 
  fadeInUp, 
  staggerContainer, 
  staggerItem,
  typewriterVariants 
} from '../animations/variants';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    'Software Engineer',
    'AI Developer', 
    'Full Stack Developer',
    'IoT Innovator',
    'Research Enthusiast'
  ];

  // Typewriter effect
  useEffect(() => {
    const role = roles[currentRole];
    let index = 0;
    const timer = setInterval(() => {
      if (index <= role.length) {
        setTypedText(role.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [currentRole]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl;
    link.download = 'Talal_Ahmed_CV.pdf';
    link.click();
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl"
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.div
              variants={staggerItem}
              className="mb-4"
            >
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium">
                👋 Hello, I'm
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={heroTextVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Talal Ahmed
              <br />
              <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Al Aidarus
              </span>
            </motion.h1>

            {/* Dynamic role with typewriter effect */}
            <motion.div
              variants={staggerItem}
              className="mb-8"
            >
              <div className="text-xl md:text-2xl text-teal-200 font-medium">
                I'm a{' '}
                <span className="text-white font-bold">
                  {typedText}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="ml-1"
                  >
                    |
                  </motion.span>
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={staggerItem}
              className="text-lg md:text-xl text-teal-100 mb-8 max-w-2xl leading-relaxed"
            >
              {personalInfo.bio.short}
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={staggerItem}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
            >
              {Object.entries(personalInfo.stats).slice(0, 4).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {value}
                  </div>
                  <div className="text-teal-200 text-sm capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Action buttons */}
            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="group relative px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-semibold rounded-full shadow-lg overflow-hidden"
              >
                <span className="relative z-10">View My Work</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadCV}
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="mr-2">📄</span>
                Download CV
              </motion.button>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={staggerItem}
              className="flex justify-center lg:justify-start space-x-4"
            >
              {socials.slice(0, 4).map((social) => (
                <motion.a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                  title={social.description}
                >
                  <SocialIcon name={social.icon} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Image/Visual */}
          <motion.div
            variants={heroImageVariants}
            initial="initial"
            animate="animate"
            className="relative"
          >
            <div className="relative">
              {/* Main image container */}
              <motion.div
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full max-w-lg mx-auto"
              >
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-teal-400 to-emerald-600 p-1">
                  <div className="w-full h-full rounded-3xl overflow-hidden bg-gray-900">
                    <img
                      src={personalInfo.avatar}
                      alt="Talal Ahmed Al Aidarus"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
              >
                Available for hire! 🚀
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
              >
                AI Enthusiast 🤖
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-dashed border-white/20 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white/60 cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

// Social icon component
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

export default Hero;
