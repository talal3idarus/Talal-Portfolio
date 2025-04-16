import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Education.css';

const Education = () => {
  return (
    <motion.div 
      className="education-container"
      id="education"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-date">September 2019 - Present</div>
          <div className="timeline-content">
            <h3>Bachelor's Degree</h3>
            <p>University of Technology and Applied Sciences (Muscat)</p>
            <p><em>Expected completion: End of this year</em></p>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-date">September 2017 - January 2019</div>
          <div className="timeline-content">
            <h3>High School Diploma</h3>
            <p>Imam Jaber bin Zaid School</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
