import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProfileSection from "./components/ProfileSection";
import AchievementsSection from "./components/AchievementsSection";
import ProjectsSection from "./components/ProjectsSection";
import VolunteerSection from "./components/VolunteerSection";
import CollaboratorGrid from "./components/CollaboratorGrid";
import ContactForm from "./components/ContactForm";
import Welcome from "./components/Welcome";
import Skills from "./components/Skills";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./styles/global.css";

function App() {
  useEffect(() => {
    document.title = "Talal's Portfolio";
  }, []);

  return (
    <div className="app">
      <Navigation />

      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Welcome />
          <ProfileSection />
          <Skills />
          <AchievementsSection />
          <ProjectsSection />
          <VolunteerSection />
          <CollaboratorGrid />
          <ContactForm />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
