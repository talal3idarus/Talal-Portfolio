import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Skills.css';
import { FaCode, FaTools, FaServer, FaChartBar, FaPalette } from 'react-icons/fa';

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: <FaCode />,
      skills: [
        { name: "C++" },
        { name: "Java" },
        { name: "JavaScript" },
        { name: "Python" },
        { name: "PHP" },
        { name: "HTML5" },
        { name: "CSS" },
        { name: "Dart" },
        { name: "SQL" }
      ]
    },
    {
      category: "Frameworks & Libraries",
      icon: <FaServer />,
      skills: [
        { name: "React" },
        { name: "Flutter" },
        { name: "Express.js" },
        { name: "Bootstrap" },
      ]
    },
    {
      category: "Tools & Technologies",
      icon: <FaTools />,
      skills: [
        { name: "Node.js" },
        { name: "Firebase" },
        { name: "MongoDB" },
        { name: "Apache" },
        { name: "GitHub" },
        { name: "CISCO" }
      ]
    },
    {
      category: "Data Analysis & ML",
      icon: <FaChartBar />,
      skills: [
        { name: "Pandas" },
        { name: "NumPy" },
        { name: "Plotly" },
        { name: "Scikit-Learn" },
        { name: "Matplotlib" }
      ]
    },
    {
      category: "Design Tools",
      icon: <FaPalette />,
      skills: [
        { name: "Figma" },
        { name: "Inkscape" },
        { name: "Canva" },
        { name: "GIMP" }
      ]
    }
  ];

  // Helper function to calculate position for skill bubbles in a circle
  const calculatePosition = (index, total, radius) => {
    // Start from the top position and distribute evenly
    const angle = ((index / total) * 2 * Math.PI) - (Math.PI / 2);
    // Calculate x and y positions around the circle
    // Add slight offset to x to move bubbles left (-10px)
    const x = (radius * Math.cos(angle)) - 10;
    const y = radius * Math.sin(angle);
    return { x, y };
  };

  return (
    <motion.div 
      className="skills-container"
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">Hover over categories to explore my skills</p>
      
      <div className={`skills-bubble-container ${hoveredCategory !== null ? 'category-hovered' : ''}`}>
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            className={`category-bubble-wrapper ${hoveredCategory === index ? 'active' : ''}`}
            onMouseEnter={() => setHoveredCategory(index)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <motion.div 
              className="category-bubble"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bubble-content">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.category}</h3>
              </div>
            </motion.div>
            
            {hoveredCategory === index && (
              <div className="skills-orbit">
                {category.skills.map((skill, skillIndex) => {
                  const position = calculatePosition(
                    skillIndex, 
                    category.skills.length, 
                    160 // Increased radius to accommodate larger bubbles
                  );
                  
                  return (
                    <motion.div
                      key={skillIndex}
                      className="skill-bubble"
                      initial={{ scale: 0, x: 0, y: 0 }}
                      animate={{ 
                        scale: 1, 
                        x: position.x, 
                        y: position.y 
                      }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    >
                      <span className="skill-name">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
