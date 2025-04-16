import React from "react";
import { motion } from "framer-motion";
import "../styles/CollaboratorCard.css";

const CollaboratorCard = ({ collaborator, index }) => {
  return (
    <motion.div
      className="collaborator-card"
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
    >
      <div className="collaborator-image">
        <div className="image-placeholder">
          {collaborator.name.charAt(0)}
        </div>
      </div>
      <div className="collaborator-info">
        <h3>{collaborator.name}</h3>
        <p>{collaborator.role}</p>
      </div>
    </motion.div>
  );
};

export default CollaboratorCard;
