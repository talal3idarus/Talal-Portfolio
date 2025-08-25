import React from 'react';
import { personalInfo } from '../constants/socials';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-surface to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dots opacity-20"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 flex items-center justify-between max-w-7xl relative z-10">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl animate-slideInLeft">
          {/* Greeting */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              👋 Hello, I'm
            </span>
            <h1 className="text-6xl font-bold mb-4 leading-tight">
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>
            <h2 className="text-2xl text-text-muted mb-6 font-medium">
              {personalInfo.title}
            </h2>
          </div>

          {/* Tagline */}
          <p className="text-xl text-text-muted mb-8 leading-relaxed">
            {personalInfo.tagline}
          </p>

          {/* Quick Bio */}
          <p className="text-lg text-text-muted mb-10 leading-relaxed opacity-90">
            {personalInfo.bio.short}
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{personalInfo.stats.projectsCompleted}</div>
              <div className="text-sm text-text-muted">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">{personalInfo.stats.papersPublished}</div>
              <div className="text-sm text-text-muted">Publications</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">{personalInfo.stats.competitionsWon}</div>
              <div className="text-sm text-text-muted">Awards</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{personalInfo.stats.technologiesMastered}</div>
              <div className="text-sm text-text-muted">Technologies</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="btn btn-primary"
            >
              <span>View My Work</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </a>
            <a 
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer" 
              className="btn btn-secondary"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10,9 9,9 8,9"/>
              </svg>
              <span>Download CV</span>
            </a>
            <a 
              href="#contact" 
              className="btn btn-secondary"
            >
              <span>Let's Talk</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9,22 9,12 15,12 15,22"/>
              </svg>
            </a>
          </div>

          {/* Location & Availability */}
          <div className="flex items-center gap-6 mt-8 text-text-muted">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
              <span>Available for opportunities</span>
            </div>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="flex-1 flex justify-center lg:justify-end animate-slideInRight">
          <div className="relative">
            {/* Main profile image */}
            <div className="relative z-10">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img 
                  src={personalInfo.avatar} 
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            
            {/* Decorative rings */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse"></div>
            <div className="absolute -inset-4 rounded-full border border-secondary/20 animate-pulse" style={{animationDelay: '1s'}}></div>
            
            {/* Floating tech icons */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 backdrop-blur-sm rounded-full flex items-center justify-center animate-float">
              <span className="text-2xl">⚛️</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/10 backdrop-blur-sm rounded-full flex items-center justify-center animate-float" style={{animationDelay: '1.5s'}}>
              <span className="text-2xl">🤖</span>
            </div>
            <div className="absolute top-1/4 -left-8 w-12 h-12 bg-accent/10 backdrop-blur-sm rounded-full flex items-center justify-center animate-float" style={{animationDelay: '2.5s'}}>
              <span className="text-xl">🎨</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-text-muted">
          <span className="text-sm mb-2">Scroll to explore</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
