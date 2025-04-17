import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Welcome.css';

const Welcome = () => {
  const [, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Animation variants for framer-motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.3,
        duration: 0.5
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  return (
    <motion.section 
      className="welcome-section" 
      id="welcome"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="background-oval"></div>
      
      <motion.div 
        className="welcome-content"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 className="greeting" variants={itemVariants}>
          Hello, I'm Talal
        </motion.h1>
        <motion.h2 className="name" variants={itemVariants}>
          Welcome to my portfolio!
        </motion.h2>
        <motion.h3 className="subtitle" variants={itemVariants}>
          Am a Software Engineering Student at UTAS, Muscat
        </motion.h3>
        
        <motion.p className="intro-text" variants={itemVariants}>
          I'm a passionate software engineering student currently in my final year, 
          specializing in web development and innovative technology. I build dynamic, 
          user-friendly web applications and create seamless digital experiences.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default Welcome;
