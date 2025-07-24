import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { achievements, achievementStats, achievementCategories } from '../constants/achievements';
import { 
  fadeInUp, 
  staggerContainer, 
  staggerItem, 
  cardHover 
} from '../animations/variants';

const Achievements = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredAchievement, setHoveredAchievement] = useState(null);

  const filteredAchievements = activeFilter === 'All' 
    ? achievements 
    : achievements.filter(achievement => achievement.category === activeFilter);

  const categoryColors = {
    Research: 'from-teal-500 to-cyan-500',
    Programming: 'from-emerald-500 to-teal-500',
    Robotics: 'from-orange-500 to-red-500',
    Cybersecurity: 'from-green-500 to-emerald-500',
    Academic: 'from-teal-600 to-cyan-600'
  };

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
            Awards &{' '}
            <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Recognition for excellence in research, programming competitions, and academic performance
          </p>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {Object.entries(achievementStats).map(([key, value]) => (
            <motion.div
              key={key}
              variants={staggerItem}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 rounded-2xl p-6 text-center border border-teal-200/20 dark:border-teal-800/20"
            >
              <div className="text-3xl md:text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">
                {value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {achievementCategories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category)}
              className={`relative px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? 'text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {activeFilter === category && (
                <motion.div
                  layoutId="activeAchievementFilter"
                  className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">
                {category}
                {category !== 'All' && (
                  <span className="ml-2 text-xs opacity-75">
                    ({achievements.filter(a => a.category === category).length})
                  </span>
                )}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredAchievements.map((achievement, index) => (
              <AchievementCard
                key={achievement.id}
                achievement={achievement}
                index={index}
                isHovered={hoveredAchievement === achievement.id}
                onHover={setHoveredAchievement}
                categoryColors={categoryColors}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No achievements message */}
        {filteredAchievements.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🏆</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              No achievements found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try selecting a different category to see more achievements.
            </p>
          </motion.div>
        )}

        {/* Timeline View Toggle */}
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
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span className="mr-2">📅</span>
            View Timeline
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

// Achievement Card Component
const AchievementCard = ({ achievement, index, isHovered, onHover, categoryColors }) => {
  const importanceStyles = {
    high: 'ring-2 ring-teal-400 shadow-teal-400/25',
    medium: 'ring-1 ring-emerald-400 shadow-emerald-400/15',
    low: 'ring-1 ring-gray-300 dark:ring-gray-600'
  };

  return (
    <motion.div
      variants={staggerItem}
      custom={index}
      whileHover={{ y: -10, scale: 1.02 }}
      onMouseEnter={() => onHover(achievement.id)}
      onMouseLeave={() => onHover(null)}
      className={`group relative bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200/20 dark:border-gray-700/20 ${importanceStyles[achievement.importance]}`}
    >
      {/* Header with gradient background and image */}
      <div 
        className={`relative h-32 bg-gradient-to-br ${categoryColors[achievement.category] || 'from-gray-500 to-gray-600'} flex items-center justify-center overflow-hidden`}
      >
        {/* Background image if available */}
        {achievement.image && (
          <div className="absolute inset-0">
            <img 
              src={achievement.image} 
              alt={achievement.title}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/20"></div>
          </div>
        )}
        
        {/* Only show emoji if no image is available */}
        {!achievement.image && (
          <motion.div
            animate={{ 
              scale: isHovered ? 1.2 : 1,
              rotate: isHovered ? 5 : 0 
            }}
            transition={{ duration: 0.3 }}
            className="relative z-10 text-6xl"
          >
            {achievement.icon}
          </motion.div>
        )}

        {/* Year badge */}
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1 text-white text-sm font-bold z-20">
          {achievement.date}
        </div>

        {/* Importance indicator */}
        {achievement.importance === 'high' && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="absolute top-4 left-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center z-20"
          >
            <span className="text-yellow-900 text-lg">⭐</span>
          </motion.div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category tag */}
        <div className="flex items-center justify-between mb-3">
          <span 
            className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${categoryColors[achievement.category]} text-white`}
          >
            {achievement.category}
          </span>
          {achievement.location && (
            <span className="text-gray-500 dark:text-gray-400 text-sm flex items-center">
              <span className="mr-1">📍</span>
              {achievement.location}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
          {achievement.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
          {achievement.description}
        </p>

        {/* Team info (if applicable) */}
        {achievement.team && (
          <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/20 dark:border-blue-800/20">
            <div className="flex items-center text-blue-700 dark:text-blue-300">
              <span className="text-lg mr-2">👥</span>
              <span className="text-sm font-medium">Team: {achievement.team}</span>
            </div>
          </div>
        )}

        {/* Achievement rank/position indicator */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {achievement.title.includes('Top') && (
              <div className="flex items-center text-yellow-600 dark:text-yellow-400">
                <span className="mr-1">🥇</span>
                <span className="text-sm font-semibold">
                  {achievement.title.match(/Top (\d+)/)?.[1] || 'Winner'}
                </span>
              </div>
            )}
            {achievement.title.includes('Best') && (
              <div className="flex items-center text-gold">
                <span className="mr-1">🏆</span>
                <span className="text-sm font-semibold text-yellow-600 dark:text-yellow-400">
                  Best Award
                </span>
              </div>
            )}
          </div>
          
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl opacity-50 group-hover:opacity-100 transition-opacity"
          >
            🎯
          </motion.div>
        </div>
      </div>

      {/* Hover effect overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-yellow-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      />

      {/* Floating particles effect on hover */}
      <AnimatePresence>
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, x: 100, y: 100 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: Math.random() * 200 - 100,
                  y: Math.random() * 200 - 100
                }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 1.5,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
                className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-400 rounded-full"
              />
            ))}
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Achievements;
