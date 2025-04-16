import React from "react";
import { motion } from "framer-motion";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <motion.div 
          className="footer-logo"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span>Talal Al-Aidarus</span>
        </motion.div>
        
        <motion.div 
          className="footer-links"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://om.linkedin.com/in/talal-al-aidarus-962a60276" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com/talal3idarus" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="mailto:talalaidarus@gmail.com">Email</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#welcome">Welcome</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#achievements">Achievements</a></li>
            </ul>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p>&copy; {currentYear} Talal's Portfolio. All rights reserved.</p>
        <p className="credits">
          Design by <span style={{ color: "teal" }}>sasa</span>
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
