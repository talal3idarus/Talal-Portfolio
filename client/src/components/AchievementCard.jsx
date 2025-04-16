import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/AchievementCard.css";

const AchievementCard = ({ title, description, color, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className={`achievement-card ${isActive ? "active" : ""}`}
      style={{ borderColor: color }}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        borderWidth: isActive || isHovered ? "4px" : "2px"
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 30 
      }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0px 5px 15px rgba(0,0,0,0.1)"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick} // Keeping click functionality as backup
      whileTap={{ scale: 0.98 }}
    >
      <motion.h3
        layout
        className="card-title"
        style={{ color }}
      >
        {title}
      </motion.h3>
      
      <AnimatePresence>
        {(isActive || isHovered) && (
          <motion.div 
            className="card-content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AchievementCard;
