import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, projectCategories } from '../constants/projects';
import { 
  fadeInUp, 
  staggerContainer, 
  staggerItem, 
  cardHover,
  projectCardVariants 
} from '../animations/variants';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

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
            Featured{' '}
            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my most impactful work, from AI-driven solutions to innovative IoT systems
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {projectCategories.map((category) => (
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
                  layoutId="activeProjectFilter"
                  className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isHovered={hoveredProject === project.id}
                onHover={setHoveredProject}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              No projects found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try selecting a different category to see more projects.
            </p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/talal3idarus"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span className="mr-2">⚡</span>
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ project, index, isHovered, onHover }) => {
  return (
    <motion.div
      variants={projectCardVariants}
      custom={index}
      whileHover={{ y: -10, scale: 1.02 }}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
      className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200/20 dark:border-gray-700/20"
    >
      {/* Project Image/Preview */}
      <div className="relative h-48 overflow-hidden">
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full bg-gradient-to-br from-teal-400 via-emerald-500 to-cyan-500 flex items-center justify-center"
          style={{ backgroundColor: project.color }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-white text-6xl">
              {project.category === 'IoT & Hardware' ? '🔌' :
               project.category === 'AI & Research' ? '🤖' :
               project.category === 'Web Development' ? '🌐' :
               project.category === 'Mobile Development' ? '📱' :
               project.category === 'AR & Mobile' ? '📱' : '💻'}
            </div>
          )}
        </motion.div>

        {/* Featured badge */}
        {project.featured && (
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            className="absolute top-4 right-4 bg-yellow-500 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold flex items-center"
          >
            <span className="mr-1">⭐</span>
            Featured
          </motion.div>
        )}

        {/* Overlay with links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/60 flex items-center justify-center space-x-4"
        >
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
          >
            <GitHubIcon />
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
          >
            <ExternalLinkIcon />
          </motion.a>
        </motion.div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Category tag */}
        <div className="flex items-center justify-between mb-3">
          <span 
            className="px-3 py-1 rounded-full text-sm font-medium"
            style={{ 
              backgroundColor: `${project.color}20`,
              color: project.color 
            }}
          >
            {project.category}
          </span>
          {project.achievements.length > 0 && (
            <span className="text-yellow-500 text-lg">🏆</span>
          )}
        </div>

        {/* Project title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
          {project.title}
        </h3>

        {/* Project description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Impact */}
        {project.impact && (
          <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/20 dark:border-green-800/20">
            <div className="flex items-center text-green-700 dark:text-green-300">
              <span className="text-lg mr-2">📈</span>
              <span className="text-sm font-medium">{project.impact}</span>
            </div>
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-md text-xs">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Achievements */}
        {project.achievements.length > 0 && (
          <div className="text-xs text-gray-500 dark:text-gray-400">
            🏆 {project.achievements[0]}
            {project.achievements.length > 1 && ` +${project.achievements.length - 1} more`}
          </div>
        )}
      </div>

      {/* Hover effect overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-teal-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      />
    </motion.div>
  );
};

// Icon Components
const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

export default Projects;
