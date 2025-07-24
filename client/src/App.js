import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Modern Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

// Animation variants
import { pageVariants, pageTransition } from "./animations/variants";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "Talal Ahmed Al Aidarus - Software Engineer & AI Developer";
    
    // Simulate loading time for dramatic effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      <Navbar />
      
      <AnimatePresence mode="wait">
        <motion.main
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="relative"
        >
          {/* Hero Section with dramatic entrance */}
          <section id="home" className="relative">
            <Hero />
          </section>

          {/* About Section */}
          <section id="about" className="relative scroll-mt-20">
            <About />
          </section>

          {/* Skills Section with interactive elements */}
          <section id="skills" className="relative scroll-mt-20">
            <Skills />
          </section>

          {/* Projects Section with filtering */}
          <section id="projects" className="relative scroll-mt-20">
            <Projects />
          </section>

          {/* Experience & Education */}
          <section id="experience" className="relative scroll-mt-20">
            <Experience />
          </section>

          {/* Achievements with awards showcase */}
          <section id="achievements" className="relative scroll-mt-20">
            <Achievements />
          </section>

          {/* Contact Section with modern form */}
          <section id="contact" className="relative scroll-mt-20">
            <Contact />
          </section>
        </motion.main>
      </AnimatePresence>

      <Footer />
      
      {/* Background decorative elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>
    </div>
  );
}

export default App;
