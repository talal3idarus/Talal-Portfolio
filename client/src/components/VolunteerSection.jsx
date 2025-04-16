import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/VolunteerSection.css";

const VolunteerSection = () => {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);
  
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
        
        <motion.div
          className="volunteer-card"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0px 5px 15px rgba(0,0,0,0.1)"
          }}
        >
          <h3>UTAS Computing Skills Camp</h3>
          <p>Volunteered as a teacher and guide, teaching hardware concepts to students from fifth to seventh grade.</p>
          <p>Worked alongside Ali Hamed Alwahaibi, managing with the support and help of Techno Club team.</p>
          
          <motion.div
            className="volunteer-details"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="volunteer-highlight">
              <span>Grade Range</span>
              <strong>5th - 7th</strong>
            </div>
            <div className="volunteer-highlight">
              <span>Focus Area</span>
              <strong>Hardware Concepts</strong>
            </div>
            <div className="volunteer-highlight">
              <span>Collaboration</span>
              <strong>Techno Club</strong>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default VolunteerSection;
