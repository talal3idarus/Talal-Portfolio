import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills, skillsOverview } from '../constants/skills';
import { 
  fadeInUp, 
  staggerContainer, 
  staggerItem, 
  skillBarVariants,
  cardHover 
} from '../animations/variants';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const categoryColors = {
    frontend: 'from-teal-500 to-cyan-500',
    backend: 'from-emerald-500 to-green-500',
    database: 'from-cyan-500 to-blue-500',
    aiml: 'from-teal-500 to-emerald-500',
    mobile: 'from-cyan-500 to-teal-500',
    tools: 'from-teal-600 to-emerald-600'
  };

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-800">
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
            My{' '}
            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        {/* Skills Overview Cards */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
        >
          {Object.entries(skillsOverview).map(([key, value]) => (
            <motion.div
              key={key}
              variants={staggerItem}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 text-center shadow-lg border border-gray-200/20 dark:border-gray-700/20"
            >
              <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">
                {value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {Object.entries(skills).map(([key, category]) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(key)}
              className={`relative px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === key
                  ? 'text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
            >
              {activeCategory === key && (
                <motion.div
                  layoutId="activeSkillTab"
                  className={`absolute inset-0 bg-gradient-to-r ${categoryColors[key]} rounded-full`}
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center">
                <span className="mr-2 text-xl">{category.icon}</span>
                {category.title}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-200/20 dark:border-gray-700/20"
          >
            <div className="flex items-center mb-8">
              <div className={`w-12 h-12 bg-gradient-to-r ${categoryColors[activeCategory]} rounded-xl flex items-center justify-center text-white text-2xl mr-4`}>
                {skills[activeCategory].icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {skills[activeCategory].title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {skills[activeCategory].technologies.length} technologies mastered
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills[activeCategory].technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredSkill(tech.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="group relative p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{tech.icon}</span>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {tech.name}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {tech.years} {tech.years === 1 ? 'year' : 'years'} experience
                        </p>
                      </div>
                    </div>
                    <div className={`text-lg font-bold ${
                      tech.level >= 90 ? 'text-emerald-500' :
                      tech.level >= 80 ? 'text-teal-500' :
                      tech.level >= 70 ? 'text-cyan-500' : 'text-gray-500'
                    }`}>
                      {tech.level}%
                    </div>
                  </div>

                  {/* Skill Bar */}
                  <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${tech.level}%` }}
                      transition={{ 
                        duration: 1.5, 
                        delay: index * 0.1,
                        ease: "easeOut" 
                      }}
                      className={`h-full bg-gradient-to-r ${categoryColors[activeCategory]} rounded-full relative`}
                    >
                      {/* Animated shimmer effect */}
                      <motion.div
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          ease: "easeInOut",
                          delay: index * 0.2 
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                      />
                    </motion.div>
                  </div>

                  {/* Hover tooltip */}
                  <AnimatePresence>
                    {hoveredSkill === tech.name && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 10 }}
                        className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full z-10 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap"
                      >
                        <div className="font-semibold">{tech.name}</div>
                        <div className="text-xs opacity-80">
                          {tech.level}% proficiency • {tech.years} years
                        </div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Category Summary */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {skills[activeCategory].title} Proficiency
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Average skill level in this category
                  </p>
                </div>
                <div className="text-right">
                  <div className={`text-3xl font-bold ${
                    Math.round(skills[activeCategory].technologies.reduce((acc, tech) => acc + tech.level, 0) / skills[activeCategory].technologies.length) >= 85
                      ? 'text-emerald-500' : 'text-teal-500'
                  }`}>
                    {Math.round(skills[activeCategory].technologies.reduce((acc, tech) => acc + tech.level, 0) / skills[activeCategory].technologies.length)}%
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Expert Level
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

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
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span className="mr-2">🚀</span>
            See My Projects
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
