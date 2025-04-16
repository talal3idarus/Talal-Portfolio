import React from "react";
import { motion } from "framer-motion";
import "../styles/ProfileSection.css";
import profilePicture from "../assets/Profile_picture.JPEG";

const ProfileSection = () => {
  const personalInfo = {
    name: "Talal Ahmed Al Aidarus",
    location: "Oman, muscat, 3913 Al Khuwair South, Muscat",
    dob: "13-Aug-2000"
  };

  return (
    <motion.section 
      id="profile" 
      className="profile-section home-section" 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="profile-container">
        <motion.div 
          className="profile-image-container"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img 
            src={profilePicture} 
            alt="Talal Ahmed Al Aidarus" 
            className="profile-image" 
          />
        </motion.div>
        
        <motion.div 
          className="profile-info"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="about-title"
          >
            About Me
          </motion.h2>
          
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">Name:</span>
              <span className="info-value">{personalInfo.name}</span>
            </div>
            
            <div className="info-item">
              <span className="info-label">Location:</span>
              <span className="info-value">{personalInfo.location}</span>
            </div>
            
            <div className="info-item">
              <span className="info-label">Date of Birth:</span>
              <span className="info-value">{personalInfo.dob}</span>
            </div>
          </div>
          
          <motion.p 
            className="profile-bio"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            I'm a passionate developer with interests in web development, research, and technology. My portfolio showcases my achievements, projects, and collaborations with amazing people in the tech community.
          </motion.p>
          
          <motion.div 
            className="profile-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.a 
              href="#achievements" 
              className="button primary-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Achievements
            </motion.a>
            <motion.a 
              href="#projects" 
              className="button primary-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a 
              href="#contact" 
              className="button secondary-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProfileSection;
