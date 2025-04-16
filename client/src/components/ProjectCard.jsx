import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/ProjectCard.css";

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div 
      className={`project-card ${isExpanded ? "expanded" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      layout
    >
      <motion.div 
        className="project-header"
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.02 }}
      >
        <h3>{project.title}</h3>
        <motion.span
          className="arrow-icon"
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ↓
        </motion.span>
      </motion.div>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="project-details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{project.description}</p>
            
            <div className="features">
              <h4>Key Features:</h4>
              <motion.ul>
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            
            {project.futureUpdates && (
              <div className="future-updates">
                <h4>Future Updates:</h4>
                <motion.ul>
                  {project.futureUpdates.map((update, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                    >
                      {update}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard;
