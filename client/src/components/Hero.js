import React from 'react';
import { personalInfo } from '../constants/socials';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Cyberpunk Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
      <div className="absolute inset-0 bg-hexagon opacity-20"></div>
      <div className="absolute inset-0 bg-circuit opacity-10"></div>
      
      {/* Particle System */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      {/* 3D Floating Shapes */}
      <div className="absolute top-20 left-16 w-32 h-32 shape-floating shape-cube hidden md:block"></div>
      <div className="absolute bottom-32 right-20 w-24 h-24 shape-floating hidden md:block" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/3 right-32 w-16 h-16 shape-floating hidden md:block" style={{animationDelay: '4s'}}></div>
      
      {/* Terminal-style geometric decorations */}
      <div className="absolute top-40 left-8 w-2 h-20 bg-gradient-to-b from-primary via-accent-orange to-transparent hidden lg:block"></div>
      <div className="absolute bottom-40 right-8 w-20 h-2 bg-gradient-to-r from-accent-gold via-primary to-transparent hidden lg:block"></div>
      <div className="absolute top-1/2 left-4 w-1 h-1 bg-primary animate-pulse hidden lg:block"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-0 flex flex-col lg:flex-row items-center justify-between max-w-7xl relative z-10 gap-8 lg:gap-16">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl text-center lg:text-left animate-slideInLeft">
          {/* Greeting */}
          <div className="mb-6">
            <div className="terminal-window mb-6">
              <div className="terminal-header">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
                <span className="text-text-muted text-sm ml-4">~/portfolio/welcome</span>
              </div>
              <div className="terminal-content">
                <span className="text-primary">$</span> <span className="typing-cursor">whoami</span>
                <br />
                <span className="text-accent-orange">→ {personalInfo.name}</span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="text-hologram" data-text={personalInfo.name}>{personalInfo.name}</span>
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-text-muted mb-6 font-medium border-cyber p-4 rounded-lg">
              {personalInfo.title}
            </h2>
          </div>

          {/* Tagline */}
          <p className="text-base sm:text-lg md:text-xl text-text-muted mb-6 md:mb-8 leading-relaxed glass-morphism p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
            {personalInfo.tagline}
          </p>

          {/* Quick Bio */}
          <p className="text-sm sm:text-base md:text-lg text-text-muted mb-8 md:mb-10 leading-relaxed opacity-90 glass-morphism p-4 rounded-xl border border-white/5">
            {personalInfo.bio.short}
          </p>

          {/* Stats Row - Mobile-first responsive grid */}
          <div className="masonry-grid gap-4 sm:gap-6 mb-8 md:mb-10">
            <div className="masonry-item">
              <div className="text-center card-isometric p-4 rounded-xl border-cyber">
                <div className="text-xl sm:text-2xl font-bold text-glitch" data-text={personalInfo.stats.projectsCompleted}>{personalInfo.stats.projectsCompleted}</div>
                <div className="text-xs sm:text-sm text-text-muted">Projects</div>
              </div>
            </div>
            <div className="masonry-item">
              <div className="text-center card-isometric p-4 rounded-xl border-cyber">
                <div className="text-xl sm:text-2xl font-bold text-glitch" data-text={personalInfo.stats.papersPublished}>{personalInfo.stats.papersPublished}</div>
                <div className="text-xs sm:text-sm text-text-muted">Publications</div>
              </div>
            </div>
            <div className="masonry-item">
              <div className="text-center card-isometric p-4 rounded-xl border-cyber">
                <div className="text-xl sm:text-2xl font-bold text-glitch" data-text={personalInfo.stats.competitionsWon}>{personalInfo.stats.competitionsWon}</div>
                <div className="text-xs sm:text-sm text-text-muted">Awards</div>
              </div>
            </div>
            <div className="masonry-item">
              <div className="text-center card-isometric p-4 rounded-xl border-cyber">
                <div className="text-xl sm:text-2xl font-bold text-glitch" data-text={personalInfo.stats.technologiesMastered}>{personalInfo.stats.technologiesMastered}</div>
                <div className="text-xs sm:text-sm text-text-muted">Technologies</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons - Mobile-optimized */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
            <a 
              href="#projects" 
              className="btn-neon justify-center flex items-center gap-2"
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
              className="btn-neon justify-center flex items-center gap-2"
              style={{'--primary': 'var(--accent-orange)'}}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
              <span>Download CV</span>
            </a>
          </div>

          {/* Desktop additional button */}
          <div className="hidden sm:block">
            <a 
              href="#contact" 
              className="btn btn-secondary btn-mobile"
            >
              <span>Let's Talk</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </a>
          </div>

          {/* Location & Availability - Mobile responsive */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-6 sm:mt-8 text-text-muted text-sm sm:text-base">
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

        {/* Right Content - Profile Image - Mobile responsive */}
        <div className="flex-1 flex justify-center animate-slideInRight order-first lg:order-last">
          <div className="relative">
            {/* Main profile image - Responsive sizing */}
            <div className="relative z-10">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 card-isometric border-cyber overflow-hidden">
                <img 
                  src={personalInfo.avatar} 
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-accent-orange/20"></div>
                {/* Holographic overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-pulse"></div>
              </div>
            </div>
            
            {/* Decorative rings - Hidden on small mobile for performance */}
            <div className="hidden sm:block absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse"></div>
            <div className="hidden sm:block absolute -inset-4 rounded-full border border-secondary/20 animate-pulse" style={{animationDelay: '1s'}}></div>
            
            {/* Floating tech icons - Responsive positioning */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 backdrop-blur-sm rounded-full flex items-center justify-center animate-float glass-morphism border border-primary/20 shadow-enhanced">
              <span className="text-lg sm:text-2xl">⚛️</span>
            </div>
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-secondary/10 backdrop-blur-sm rounded-full flex items-center justify-center animate-float glass-morphism border border-secondary/20 shadow-enhanced" style={{animationDelay: '1.5s'}}>
              <span className="text-lg sm:text-2xl">🤖</span>
            </div>
            <div className="hidden sm:block absolute top-1/4 -left-8 w-12 h-12 bg-accent/10 backdrop-blur-sm rounded-full flex items-center justify-center animate-float glass-morphism border border-accent/20 shadow-enhanced" style={{animationDelay: '2.5s'}}>
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
