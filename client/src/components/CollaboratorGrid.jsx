import React from "react";
import { motion } from "framer-motion";
import CollaboratorCard from "./CollaboratorCard";
import collaborators from "../data/collaborators";
import "../styles/CollaboratorGrid.css";

const CollaboratorGrid = () => {
  return (
    <section id="collaborators" className="collaborators-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Collaborators
      </motion.h2>
      
      <motion.p
        className="section-description"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Amazing people I've had the pleasure to work with on various projects.
      </motion.p>
      
      <div className="collaborators-grid">
        {collaborators.map((collaborator, index) => (
          <CollaboratorCard 
            key={collaborator.id} 
            collaborator={collaborator}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default CollaboratorGrid;
