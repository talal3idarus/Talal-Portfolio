import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/CollaboratorCard.css";
import projects from "../data/projects";
import achievements from "../data/achievements";

const CollaboratorCard = ({ collaborator, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [projectTitles, setProjectTitles] = useState([]);
  const [achievementTitles, setAchievementTitles] = useState([]);
  
  useEffect(() => {
    // Get project titles
    if (collaborator.projectIds && collaborator.projectIds.length > 0) {
      const titles = collaborator.projectIds.map(id => {
        const project = projects.find(p => p.id === id);
        return project ? project.title : null;
      }).filter(title => title !== null);
      setProjectTitles(titles);
    }
    
    // Get achievement titles
    if (collaborator.achievementIds && collaborator.achievementIds.length > 0) {
      const titles = collaborator.achievementIds.map(id => {
        const achievement = achievements.find(a => a.id === id);
        return achievement ? achievement.title : null;
      }).filter(title => title !== null);
      setAchievementTitles(titles);
    }
  }, [collaborator]);
  
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  
  const hasCollaborations = projectTitles.length > 0 || achievementTitles.length > 0;
  
  return (
    <div className="collaborator-card-container">
      <motion.div
        className={`collaborator-card ${hasCollaborations ? 'has-collaborations' : ''}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.5,
          delay: index * 0.1
        }}
        whileHover={{ 
          y: -5,
          boxShadow: "0px 10px 20px rgba(0,0,0,0.1)"
        }}
        onClick={hasCollaborations ? toggleExpanded : undefined}
      >
        <div className="collaborator-image">
          <div className="image-placeholder">
            {collaborator.name.charAt(0)}
          </div>
        </div>
        <div className="collaborator-info">
          <h3>{collaborator.name}</h3>
          <p>{collaborator.role}</p>
          
          {hasCollaborations && (
            <div className="collaboration-indicator">
              <span>{isExpanded ? 'Hide Collaborations' : 'Show Collaborations'}</span>
            </div>
          )}
        </div>
      </motion.div>
      
      <AnimatePresence>
        {isExpanded && hasCollaborations && (
          <motion.div
            className="collaboration-titles"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {projectTitles.length > 0 && (
              <div className="projects-list">
                <h4>Projects:</h4>
                <ul>
                  {projectTitles.map((title, idx) => (
                    <li key={idx}>{title}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {achievementTitles.length > 0 && (
              <div className="achievements-list">
                <h4>Achievements:</h4>
                <ul>
                  {achievementTitles.map((title, idx) => (
                    <li key={idx}>{title}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CollaboratorCard;
