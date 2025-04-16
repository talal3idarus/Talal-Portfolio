import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/ContactForm.css";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({ name: "", email: "", message: "" });
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="contact-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </motion.h2>
      
      <motion.div 
        className="contact-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>Have a project in mind or want to collaborate? Feel free to reach out!</p>
          
          <div className="contact-links">
            <a href="mailto:talalaidarus@gmail.com" className="contact-link">
              <span className="icon">✉️</span>
              <span>talalaidarus@gmail.com</span>
            </a>
            <a href="https://om.linkedin.com/in/talal-al-aidarus-962a60276" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="icon">💼</span>
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/talal3idarus" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="icon">💻</span>
              <span>GitHub</span>
            </a>
          </div>
        </div>
        
        <motion.form 
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <motion.input 
              type="text" 
              id="name" 
              name="name" 
              required
              value={formState.name}
              onChange={handleChange}
              whileFocus={{ scale: 1.02, borderColor: "var(--primary-color)" }}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <motion.input 
              type="email" 
              id="email" 
              name="email" 
              required
              value={formState.email}
              onChange={handleChange}
              whileFocus={{ scale: 1.02, borderColor: "var(--primary-color)" }}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <motion.textarea 
              id="message" 
              name="message" 
              rows="4" 
              required
              value={formState.message}
              onChange={handleChange}
              whileFocus={{ scale: 1.02, borderColor: "var(--primary-color)" }}
            ></motion.textarea>
          </div>
          
          <motion.button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>
          
          {submitSuccess && (
            <motion.div 
              className="success-message"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              Message sent successfully!
            </motion.div>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
