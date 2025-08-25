import React, { useEffect, useState } from "react";

// Import CSS styles
import './styles/index.css';

// Import all components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-accent rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse">
            <div className="text-2xl font-bold text-white">TA</div>
          </div>
          <div className="text-primary font-medium">Loading Portfolio...</div>
          <div className="w-32 h-1 bg-surface rounded-full mx-auto mt-4 overflow-hidden">
            <div className="h-full bg-gradient-accent animate-loading-bar"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home" className="relative">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about" className="relative">
          <About />
        </section>

        {/* Skills Section */}
        <section id="skills" className="relative">
          <Skills />
        </section>

        {/* Experience Section */}
        <section id="experience" className="relative">
          <Experience />
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative">
          <Projects />
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="relative">
          <Achievements />
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
      
      {/* Background decorative elements - Technology meets creativity */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Primary teal glow */}
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        {/* Warm orange accent */}
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-accent-orange rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>
        {/* Gold creativity highlight */}
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-accent-gold rounded-full mix-blend-multiply filter blur-xl opacity-8 animate-pulse" style={{animationDelay: '2s'}}></div>
        {/* Subtle secondary accent */}
        <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-secondary rounded-full mix-blend-multiply filter blur-2xl opacity-5 animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>
    </div>
  );
}

export default App;
