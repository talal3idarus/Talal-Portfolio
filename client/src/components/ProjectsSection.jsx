import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";
import "../styles/ProjectsSection.css";

const ProjectsSection = () => {
  const [activeProjectId, setActiveProjectId] = useState(null);

  const toggleProject = (id) => {
    setActiveProjectId(activeProjectId === id ? null : id);
  };

  return (
    <section id="projects" className="projects-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Featured Projects
      </motion.h2>
      
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            isExpanded={project.id === activeProjectId}
            toggleProject={() => toggleProject(project.id)}
          />
        ))}
      </div>
      
      <motion.div 
        className="more-projects"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <p>More projects coming soon!</p>
        <motion.a 
          href="#contact" 
          className="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </motion.a>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
