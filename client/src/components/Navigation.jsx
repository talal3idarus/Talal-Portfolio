import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Navigation.css";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };
  
  const navLinks = [
    { title: "welcome", id: "welcome" },
    { title: "Home", id: "profile" },
    { title: "Skills", id: "skills" },
    { title: "Achievements", id: "achievements" },
    { title: "Projects", id: "projects" },
    { title: "Volunteer", id: "volunteer" },
    { title: "Collaborators", id: "collaborators" },
    { title: "Contact", id: "contact" }
  ];
  
  return (
    <motion.nav 
      className={`navigation ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="nav-container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection("hero")}
        >
          <span>Talal Al-Aidarus</span>
        </motion.div>
        
        <div className="desktop-menu">
          {navLinks.map((link) => (
            <motion.div
              key={link.id}
              className="nav-item"
              onClick={() => scrollToSection(link.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.title}
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </motion.div>
      </div>
      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <motion.div
                key={link.id}
                className="mobile-nav-item"
                onClick={() => scrollToSection(link.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.title}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
