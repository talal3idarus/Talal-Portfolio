import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import "../styles/VolunteerSection.css";
import volunteerWork from "../data/VolunteerWork";

const VolunteerSection = () => {
  const sectionRef = useRef(null);
  const [expandedId, setExpandedId] = useState(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);
  
  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };
  
  return (
    <section id="volunteer" className="volunteer-section" ref={sectionRef}>
      <motion.div 
        className="volunteer-content"
        style={{ opacity, y }}
      >
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Volunteer Work
        </motion.h2>
        
        <div className="volunteer-container">
          {volunteerWork.map((volunteer, index) => (
            <motion.div
              key={volunteer.id}
              className={`volunteer-card ${expandedId === volunteer.id ? 'expanded' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => toggleExpand(volunteer.id)}
              whileHover={{ 
                scale: expandedId === volunteer.id ? 1 : 1.02,
                boxShadow: "0px 5px 15px rgba(0,0,0,0.1)"
              }}
            >
              <div className="volunteer-header">
                <h3>{volunteer.title}</h3>
                <div className="expand-indicator">
                  {expandedId === volunteer.id ? '−' : '+'}
                </div>
              </div>
              
              <AnimatePresence>
                {expandedId === volunteer.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="volunteer-expanded-content"
                  >
                    <p>{volunteer.description}</p>
                    <p>{volunteer.additionalInfo}</p>
                    
                    <motion.div
                      className="volunteer-details"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      {volunteer.highlights.map((highlight, index) => (
                        <div key={index} className="volunteer-highlight">
                          <span className="info-label">{highlight.label}:</span>
                          <span className="info-value">{highlight.value}</span>
                        </div>
                      ))}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default VolunteerSection;
