import React, { useState, useEffect, useRef } from 'react';
import { skills } from '../constants/skills';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('frontend');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = Object.keys(skills);

  const SkillBar = ({ skill, index, isActive }) => (
    <div 
      className={`skill-item animate-slideInUp terminal-window transition-all duration-300 ${isActive ? 'animate-fill-both' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="terminal-header">
        <div className="terminal-dot red"></div>
        <div className="terminal-dot yellow"></div>
        <div className="terminal-dot green"></div>
        <span className="text-text-muted text-sm ml-4">~/{skill.name.toLowerCase().replace(' ', '-')}</span>
      </div>
      <div className="terminal-content">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl border-cyber p-2 rounded">{skill.icon}</span>
            <div>
              <h4 className="font-semibold text-primary text-hologram" data-text={skill.name}>{skill.name}</h4>
              <p className="text-sm text-text-muted typing-cursor">{skill.years} years experience</p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-lg font-bold text-accent-orange text-glitch" data-text={`${skill.level}%`}>{skill.level}%</span>
          </div>
        </div>
        {/* Skill Progress Bar */}
        <div className="mt-4">
          <div className="text-sm text-primary mb-2">
            <span className="text-accent-orange">$</span> skill --level {skill.name.toLowerCase().replace(' ', '-')}
          </div>
          <div className="progress bg-gray-800 rounded-full h-2 overflow-hidden">
            <div 
              className={`progress-bar ${isVisible ? 'animate-fill-forwards' : ''} h-full rounded-full`}
              style={{ 
                width: isVisible ? `${skill.level}%` : '0%',
                animationDelay: `${index * 0.1 + 0.3}s`,
                background: skill.level >= 90 ? 'linear-gradient(90deg, var(--primary), var(--accent-orange))' : 
                           skill.level >= 80 ? 'linear-gradient(90deg, var(--primary), var(--accent-gold))' : 
                           'linear-gradient(90deg, var(--primary), var(--primary))',
                boxShadow: skill.level >= 90 ? '0 0 20px rgba(20, 184, 166, 0.6)' :
                          skill.level >= 80 ? '0 0 15px rgba(20, 184, 166, 0.4)' :
                          '0 0 10px rgba(20, 184, 166, 0.3)'
              }}
            />
          </div>
          <div className="text-xs text-text-muted mt-1">
            [{Array(Math.floor(skill.level/10)).fill('█').join('')}{Array(10-Math.floor(skill.level/10)).fill('░').join('')}] {skill.level}%
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="py-20 relative overflow-hidden"
    >
      {/* Enhanced Background with Gradient Mesh */}
      <div className="absolute inset-0 gradient-mesh opacity-50"></div>
      <div className="absolute inset-0 bg-dots opacity-5"></div>
      
      {/* Floating Elements - Technology meets Creativity */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-primary/10 rounded-lg animate-float rotate-12 glass-morphism border border-primary/20"></div>
      <div className="absolute bottom-32 right-16 w-20 h-20 bg-accent-orange/10 rounded-full animate-float glass-morphism border border-accent-orange/20" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/3 right-32 w-12 h-12 bg-accent-gold/10 rounded-lg animate-float rotate-45 glass-morphism border border-accent-gold/20" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 glass-morphism border border-primary/20 shadow-enhanced">
            ⚡ Technical Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text shimmer-text">Skills & Technologies</span>
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed glass-morphism p-6 rounded-2xl border border-white/10">
            Where <span className="text-primary font-semibold gradient-text">technology</span> meets{' '}
            <span className="text-accent-orange font-semibold gradient-text">creativity</span> — 
            building the future with cutting-edge tools and innovative thinking.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slideInUp">
          {categories.map((category) => {
            const categoryData = skills[category];
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`category-btn magnetic-hover transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-primary text-white shadow-neon scale-105' 
                    : 'bg-surface-glass border-2 border-border text-text-muted hover:border-primary hover:text-primary glass-morphism shadow-enhanced hover:shadow-neon'
                }`}
                style={{ 
                  background: activeCategory === category ? categoryData.color : undefined 
                }}
              >
                <span className="text-xl">{categoryData.icon}</span>
                <span className="font-medium">{categoryData.title}</span>
                <span className="text-sm opacity-75">
                  {categoryData.technologies.length} skills
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Display */}
        <div className="max-w-4xl mx-auto">
          {categories.map((category) => {
            const categoryData = skills[category];
            const isActive = activeCategory === category;
            
            return (
              <div
                key={category}
                className={`skill-category ${
                  isActive ? 'block animate-fadeIn' : 'hidden'
                }`}
              >
                {/* Category Header */}
                <div className="card glass mb-8 text-center glass-morphism border border-white/10 shadow-enhanced">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl glass-morphism border shadow-enhanced"
                      style={{ 
                        background: `${categoryData.color}20`,
                        border: `2px solid ${categoryData.color}40`
                      }}
                    >
                      {categoryData.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold" style={{ color: categoryData.color }}>
                        {categoryData.title}
                      </h3>
                      <p className="text-text-muted">
                        {categoryData.technologies.length} Technologies Mastered
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {categoryData.technologies.map((skill, index) => (
                    <div key={skill.name} className="card glass hover-float">
                      <SkillBar 
                        skill={skill} 
                        index={index} 
                        isActive={isActive && isVisible}
                      />
                    </div>
                  ))}
                </div>

                {/* Category Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  <div className="card glass text-center">
                    <div className="text-2xl font-bold text-primary">
                      {Math.round(
                        categoryData.technologies.reduce((acc, skill) => acc + skill.level, 0) / 
                        categoryData.technologies.length
                      )}%
                    </div>
                    <div className="text-sm text-text-muted">Average Proficiency</div>
                  </div>
                  <div className="card glass text-center">
                    <div className="text-2xl font-bold text-accent-orange">
                      {categoryData.technologies.filter(skill => skill.level >= 90).length}
                    </div>
                    <div className="text-sm text-text-muted">Expert Level</div>
                  </div>
                  <div className="card glass text-center">
                    <div className="text-2xl font-bold text-accent-gold">
                      {Math.round(
                        categoryData.technologies.reduce((acc, skill) => acc + skill.years, 0) / 
                        categoryData.technologies.length
                      )}
                    </div>
                    <div className="text-sm text-text-muted">Avg Years</div>
                  </div>
                  <div className="card glass text-center">
                    <div className="text-2xl font-bold text-secondary">
                      {categoryData.technologies.length}
                    </div>
                    <div className="text-sm text-text-muted">Technologies</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center animate-fadeInUp">
          <div className="card glass max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">Full-Stack Excellence</span>
            </h3>
            <p className="text-text-muted mb-6 leading-relaxed">
              From frontend interfaces to AI algorithms, from databases to cloud deployment — 
              I bring a comprehensive skill set that bridges the gap between innovative ideas and 
              robust, scalable solutions.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {['Problem Solving', 'System Design', 'Code Review', 'Team Leadership', 'Innovation'].map((skill, index) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-gradient-accent text-white rounded-full text-sm font-medium shadow-warm hover:shadow-lg transition-all animate-slideInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating decoration */}
      <div className="absolute bottom-20 left-8 w-6 h-6 bg-primary/20 rounded-full animate-float"></div>
      <div className="absolute top-32 right-12 w-8 h-8 bg-accent-orange/20 rounded-lg animate-float rotate-45" style={{animationDelay: '1.5s'}}></div>
    </section>
  );
};

export default Skills;
