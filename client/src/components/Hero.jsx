import React from "react";
import { motion } from "framer-motion";
import FlowerAnimation from "./FlowerAnimation";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="emphasized"
            initial={{ fontStyle: "normal", fontWeight: 400 }}
            animate={{ 
              fontStyle: "italic",
              fontWeight: 700
            }}
            transition={{
              fontStyle: { duration: 0.3 },
              fontWeight: { duration: 0.5, delay: 0.2 }
            }}
          >
            About Me
          </motion.span>
        </motion.h1>
        
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
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
      </div>
      
      <motion.div 
        className="hero-decoration"
        initial={{ opacity: 0, scale: 0.8, rotate: -30 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ 
          duration: 1,
          delay: 0.3,
          type: "spring", 
          stiffness: 100 
        }}
      >
        <FlowerAnimation />
      </motion.div>
    </section>
  );
};

export default Hero;
