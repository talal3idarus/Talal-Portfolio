import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experience, education, certifications } from '../constants/experience';
import { 
  fadeInUp, 
  staggerContainer, 
  staggerItem, 
  cardHover 
} from '../animations/variants';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const tabs = [
    { id: 'experience', label: 'Experience', icon: '💼', count: experience.length },
    { id: 'education', label: 'Education', icon: '🎓', count: education.length },
    { id: 'certifications', label: 'Certifications', icon: '📜', count: certifications.length }
  ];

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
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From academic excellence to professional experience and continuous learning
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white dark:bg-gray-900 p-2 rounded-2xl shadow-lg border border-gray-200/20 dark:border-gray-700/20">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeExperienceTab"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center">
                  <span className="mr-2 text-xl">{tab.icon}</span>
                  {tab.label}
                  <span className="ml-2 px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs">
                    {tab.count}
                  </span>
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'experience' && (
            <ExperienceContent experiences={experience} />
          )}
          {activeTab === 'education' && (
            <EducationContent educations={education} />
          )}
          {activeTab === 'certifications' && (
            <CertificationsContent certs={certifications} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// Experience Content Component
const ExperienceContent = ({ experiences }) => (
  <motion.div
    key="experience"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            variants={staggerItem}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            whileHover={cardHover}
            className="relative flex items-start"
          >
            {/* Timeline dot */}
            <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>

            {/* Content card */}
            <div className="ml-20 bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg border border-gray-200/20 dark:border-gray-700/20 w-full">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mr-3">
                      {exp.position}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      exp.type === 'Internship' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400' :
                      exp.type === 'Part-time' ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400' :
                      'bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400'
                    }`}>
                      {exp.type}
                    </span>
                  </div>
                  <h4 className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    {exp.company}
                  </h4>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-4">
                    <span className="mr-4">📍 {exp.location}</span>
                    <span>📅 {exp.duration}</span>
                  </div>
                </div>
                {exp.logo && (
                  <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                )}
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {exp.description}
              </p>

              {/* Responsibilities */}
              <div className="mb-6">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Key Responsibilities:
                </h5>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {exp.responsibilities.slice(0, 4).map((responsibility, idx) => (
                    <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300 text-sm">
                      <span className="text-blue-500 mr-2 mt-1">▸</span>
                      {responsibility}
                    </li>
                  ))}
                </ul>
                {exp.responsibilities.length > 4 && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    +{exp.responsibilities.length - 4} more responsibilities
                  </p>
                )}
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Technologies Used:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Key Achievements:
                </h5>
                <div className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start text-green-600 dark:text-green-400 text-sm">
                      <span className="mr-2 mt-1">🏆</span>
                      {achievement}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

// Education Content Component
const EducationContent = ({ educations }) => (
  <motion.div
    key="education"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
  >
    {educations.map((edu, index) => (
      <motion.div
        key={edu.id}
        variants={staggerItem}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        whileHover={cardHover}
        className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg border border-gray-200/20 dark:border-gray-700/20"
      >
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {edu.degree}
            </h3>
            <h4 className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">
              {edu.institution}
            </h4>
            <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-2">
              <span className="mr-4">📅 {edu.duration}</span>
              <span>📍 {edu.location}</span>
            </div>
            <div className="flex items-center mb-4">
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">
                {edu.status}
              </span>
            </div>
          </div>
          {edu.logo && (
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center">
              <img
                src={edu.logo}
                alt={`${edu.institution} logo`}
                className="w-12 h-12 object-contain"
              />
            </div>
          )}
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          {edu.description}
        </p>

        {/* Coursework */}
        <div className="mb-6">
          <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
            Key Coursework:
          </h5>
          <div className="flex flex-wrap gap-2">
            {edu.coursework.slice(0, 6).map((course) => (
              <span
                key={course}
                className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-md text-xs font-medium"
              >
                {course}
              </span>
            ))}
            {edu.coursework.length > 6 && (
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-md text-xs">
                +{edu.coursework.length - 6} more
              </span>
            )}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
            Achievements:
          </h5>
          <div className="space-y-2">
            {edu.achievements.map((achievement, idx) => (
              <div key={idx} className="flex items-start text-yellow-600 dark:text-yellow-400 text-sm">
                <span className="mr-2 mt-1">🏆</span>
                {achievement}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    ))}
  </motion.div>
);

// Certifications Content Component
const CertificationsContent = ({ certs }) => (
  <motion.div
    key="certifications"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
  >
    {certs.map((cert, index) => (
      <motion.div
        key={cert.id}
        variants={staggerItem}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        whileHover={cardHover}
        className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200/20 dark:border-gray-700/20"
      >
        <div className="text-center">
          {cert.logo && (
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center mx-auto mb-4">
              <img
                src={cert.logo}
                alt={`${cert.issuer} logo`}
                className="w-12 h-12 object-contain"
              />
            </div>
          )}
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            {cert.title}
          </h4>
          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
            {cert.issuer}
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
            Issued: {cert.date}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">
            ID: {cert.credentialId}
          </p>
        </div>
      </motion.div>
    ))}
  </motion.div>
);

export default Experience;
