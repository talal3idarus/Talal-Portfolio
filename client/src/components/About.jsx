import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, contactInfo } from '../constants/socials';
import { fadeInUp, staggerContainer, staggerItem, cardHover } from '../animations/variants';

const About = () => {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl;
    link.download = 'Talal_Ahmed_CV.pdf';
    link.click();
  };

  const interests = [
    { icon: '📸', name: 'Photography', description: 'Capturing moments' },
    { icon: '🥾', name: 'Hiking', description: 'Exploring nature' },
    { icon: '💻', name: 'Coding', description: 'Building solutions' },
    { icon: '📚', name: 'Reading', description: 'Continuous learning' },
    { icon: '🏆', name: 'Competitions', description: 'Problem solving' },
    { icon: '🌍', name: 'Travel', description: 'Cultural exploration' }
  ];

  return (
    <div className="py-20 bg-white dark:bg-gray-900">
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
            About{' '}
            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about creating innovative solutions that bridge technology and education
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {/* Main Bio Card */}
          <motion.div
            variants={staggerItem}
            whileHover={cardHover}
            className="md:col-span-8 bg-gradient-to-br from-teal-50 to-emerald-100 dark:from-teal-900/20 dark:to-emerald-900/20 rounded-3xl p-8 border border-teal-200/20 dark:border-teal-800/20"
          >
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="lg:w-1/3">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="relative"
                >
                  <img
                    src={personalInfo.avatar}
                    alt="Talal Ahmed Al Aidarus"
                    className="w-full max-w-xs rounded-2xl shadow-xl"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg">
                    <span className="text-2xl">👋</span>
                  </div>
                </motion.div>
              </div>

              <div className="lg:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Hi there! I'm Talal
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  {personalInfo.bio.long}
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {Object.entries(personalInfo.stats).slice(0, 6).map(([key, value]) => (
                    <motion.div
                      key={key}
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-4 bg-white/60 dark:bg-gray-800/60 rounded-xl backdrop-blur-sm"
                    >
                      <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                        {value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Location & Contact Card */}
          <motion.div
            variants={staggerItem}
            whileHover={cardHover}
            className="md:col-span-4 bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 border border-purple-200/20 dark:border-purple-800/20"
          >
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              📍 Based in
            </h4>
            <div className="space-y-4">
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <span className="text-2xl mr-3">🏠</span>
                <span className="font-medium">{personalInfo.location}</span>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <span className="text-2xl mr-3">⏰</span>
                <span className="font-medium">{contactInfo.timezone}</span>
              </div>
              <div className="flex items-center text-green-600 dark:text-green-400">
                <span className="text-2xl mr-3">✅</span>
                <span className="font-medium">{contactInfo.availability}</span>
              </div>
            </div>
            
            {/* Download CV Button */}
            <motion.button
              onClick={downloadCV}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-6 px-4 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>📄</span>
              <span>Download CV</span>
            </motion.button>
          </motion.div>

          {/* Interests Grid */}
          <motion.div
            variants={staggerItem}
            className="md:col-span-12"
          >
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Things am intreisted in
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.name}
                  variants={staggerItem}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    backgroundColor: interest.name === 'Photography' ? '#3b82f6' : 
                                   interest.name === 'Hiking' ? '#10b981' :
                                   interest.name === 'Coding' ? '#8b5cf6' :
                                   interest.name === 'Reading' ? '#f59e0b' :
                                   interest.name === 'Competitions' ? '#ef4444' : '#06b6d4'
                  }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center cursor-pointer transition-colors group"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    {interest.icon}
                  </div>
                  <h5 className="font-semibold text-gray-900 dark:text-white group-hover:text-white transition-colors">
                    {interest.name}
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-200 transition-colors">
                    {interest.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Fun Facts Card */}
          <motion.div
            variants={staggerItem}
            whileHover={cardHover}
            className="md:col-span-6 bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-3xl p-8 border border-yellow-200/20 dark:border-yellow-800/20"
          >
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="text-2xl mr-3">⚡</span>
              Fun Facts
            </h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-lg mr-3">☕</span>
                <span className="text-gray-700 dark:text-gray-300">
                  I've consumed {personalInfo.stats.coffeeConsumed} cups of coffee while coding
                </span>
              </div>
              <div className="flex items-start">
                <span className="text-lg mr-3">📝</span>
                <span className="text-gray-700 dark:text-gray-300">
                  Written over {personalInfo.stats.linesOfCode} lines of code
                </span>
              </div>

              <div className="flex items-start">
                <span className="text-lg mr-3">🎓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  Helped {personalInfo.stats.studentsHelped} students with their projects
                </span>
              </div>
            </div>
          </motion.div>

          {/* Values & Philosophy Card */}
          <motion.div
            variants={staggerItem}
            whileHover={cardHover}
            className="md:col-span-6 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-3xl p-8 border border-green-200/20 dark:border-green-800/20"
          >
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="text-2xl mr-3">💡</span>
              My Philosophy
            </h4>
            <div className="space-y-4">
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3">
                <p>I believe in using technology to solve real problems and improve lives. As a software engineer, I focus on building smart, practical, and human-centered solutions—whether in education, sustainability, or everyday life.</p>
                
                <p className="font-medium">I'm always learning, always creating, and always aiming to make a meaningful impact through code.</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {['Always Learning', 'Always Creating', 'Human-Centered', 'Problem Solving', 'Meaningful Impact'].map((value) => (
                  <span
                    key={value}
                    className="px-3 py-1 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 rounded-full text-sm font-medium"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span className="mr-2">💬</span>
            Let's Connect
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
