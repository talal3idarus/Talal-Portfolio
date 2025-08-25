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
      className={`skill-item animate-slideInUp ${isActive ? 'animate-fill-both' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{skill.icon}</span>
          <div>
            <h4 className="font-semibold text-text">{skill.name}</h4>
            <p className="text-sm text-text-muted">{skill.years} years experience</p>
          </div>
        </div>
        <div className="text-right">
          <span className="text-lg font-bold text-primary">{skill.level}%</span>
        </div>
      </div>
      
      {/* Skill Progress Bar */}
      <div className="progress">
        <div 
          className={`progress-bar ${isVisible ? 'animate-fill-forwards' : ''}`}
          style={{ 
            width: isVisible ? `${skill.level}%` : '0%',
            animationDelay: `${index * 0.1 + 0.3}s`,
            background: skill.level >= 90 ? 'var(--gradient-accent)' : 
                       skill.level >= 80 ? 'var(--gradient-primary)' : 
                       'var(--gradient-primary)'
          }}
        />
      </div>
    </div>
  );

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="py-20 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dots opacity-5"></div>
      
      {/* Floating Elements - Technology meets Creativity */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-primary/10 rounded-lg animate-float rotate-12"></div>
      <div className="absolute bottom-32 right-16 w-20 h-20 bg-accent-orange/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/3 right-32 w-12 h-12 bg-accent-gold/10 rounded-lg animate-float rotate-45" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            ⚡ Technical Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Where <span className="text-primary font-semibold">technology</span> meets{' '}
            <span className="text-accent-orange font-semibold">creativity</span> — 
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
                className={`category-btn ${
                  activeCategory === category 
                    ? 'bg-primary text-white shadow-primary' 
                    : 'bg-surface-glass border-2 border-border text-text-muted hover:border-primary hover:text-primary'
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
                <div className="card glass mb-8 text-center">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl"
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
