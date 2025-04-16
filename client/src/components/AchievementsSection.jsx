import React, { useState } from "react";
import { motion } from "framer-motion";
import AchievementCard from "./AchievementCard";
import achievements from "../data/achievements";
import "../styles/AchievementsSection.css";

const AchievementsSection = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleActive = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    }
  };

  return (
    <section id="achievements" className="achievements-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Personal Achievements
      </motion.h2>
      
      <motion.div 
        className="achievements-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {achievements.map((achievement) => (
          <AchievementCard
            key={achievement.id}
            title={achievement.title}
            description={achievement.description}
            color={achievement.color}
            isActive={activeId === achievement.id}
            onClick={() => toggleActive(achievement.id)}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default AchievementsSection;
