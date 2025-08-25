import React, { useState } from 'react';
import { projects } from '../constants/projects';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = ['all', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getCategoryIcon = (category) => {
    const icons = {
      'all': '🚀',
      'IoT & Research': '🔬',
      'Web Development': '💻',
      'Mobile Development': '📱',
      'AI & Machine Learning': '🤖'
    };
    return icons[category] || '⚡';
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Enhanced Background with Gradient Mesh */}
      <div className="absolute inset-0 gradient-mesh opacity-30"></div>
      <div className="absolute inset-0 bg-dots opacity-5"></div>
      
      {/* Creative Floating Elements */}
      <div className="absolute top-32 left-16 w-20 h-20 bg-accent-orange/10 rounded-2xl animate-float rotate-12 glass-morphism border border-accent-orange/20"></div>
      <div className="absolute bottom-40 right-20 w-16 h-16 bg-primary/10 rounded-full animate-float glass-morphism border border-primary/20" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-8 w-12 h-12 bg-accent-gold/10 rounded-lg animate-float rotate-45 glass-morphism border border-accent-gold/20" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block px-4 py-2 bg-accent-orange/10 text-accent-orange rounded-full text-sm font-medium mb-4 glass-morphism border border-accent-orange/20 shadow-enhanced">
            🚀 Featured Work
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="gradient-text shimmer-text">Projects & Innovation</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-muted max-w-3xl mx-auto leading-relaxed px-4 glass-morphism p-6 rounded-2xl border border-white/10">
            From award-winning research to impactful applications — 
            explore the projects where{' '}
            <span className="text-primary font-semibold gradient-text">technology</span> meets{' '}
            <span className="text-accent-orange font-semibold gradient-text">creativity</span>.
          </p>
        </div>

        {/* Category Filter - Mobile responsive */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 animate-slideInUp px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`category-filter-btn text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-3 magnetic-hover transition-all duration-300 ${
                selectedCategory === category 
                  ? 'bg-gradient-accent text-white shadow-neon scale-105' 
                  : 'bg-surface-glass border-2 border-border text-text-muted hover:border-accent-orange hover:text-accent-orange glass-morphism shadow-enhanced hover:shadow-neon'
              }`}
            >
              <span className="text-base sm:text-lg">{getCategoryIcon(category)}</span>
              <span className="font-medium capitalize hidden sm:inline">
                {category === 'all' ? 'All Projects' : category}
              </span>
              <span className="font-medium capitalize sm:hidden">
                {category === 'all' ? 'All' : category}
              </span>
              <span className="text-xs opacity-75 hidden sm:inline">
                {category === 'all' 
                  ? projects.length 
                  : projects.filter(p => p.category === category).length
                } projects
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid - Unique Masonry Layout */}
        <div className="masonry-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="masonry-item"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="terminal-window hover-float transition-all duration-500 transform hover:scale-105" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Terminal Header */}
                <div className="terminal-header">
                  <div className="terminal-dot red"></div>
                  <div className="terminal-dot yellow"></div>
                  <div className="terminal-dot green"></div>
                  <span className="text-text-muted text-sm ml-4">~/{project.title.toLowerCase().replace(/\s+/g, '-')}</span>
                  {project.featured && (
                    <span className="ml-auto text-accent-gold text-xs">⭐ FEATURED</span>
                  )}
                </div>
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay with Quick Actions */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-between p-4 transition-opacity duration-300 glass-morphism ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="flex gap-2">
                      {project.github && (
                        <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors glass-morphism border border-white/20 shadow-enhanced hover:shadow-neon">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </button>
                      )}
                      {project.demo && (
                        <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors glass-morphism border border-white/20 shadow-enhanced hover:shadow-neon">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                            <polyline points="15,3 21,3 21,9"/>
                            <line x1="10" y1="14" x2="21" y2="3"/>
                          </svg>
                        </button>
                      )}
                    </div>
                    
                    {project.featured && (
                      <div className="bg-accent-gold/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-white glass-morphism border border-accent-gold/40 shadow-enhanced">
                        ⭐ Featured
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  {/* Category & Title */}
                  <div>
                    <span 
                      className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-2"
                      style={{ 
                        backgroundColor: `${project.color}20`,
                        color: project.color,
                        border: `1px solid ${project.color}40`
                      }}
                    >
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors shimmer-text">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-text-muted text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-surface text-text-muted rounded-md text-xs">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Achievements */}
                  {project.achievements && project.achievements.length > 0 && (
                    <div className="space-y-2">
                      {project.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs">
                          <div className="w-3 h-3 bg-accent-gold/20 rounded-full flex items-center justify-center">
                            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="3">
                              <polyline points="20,6 9,17 4,12"/>
                            </svg>
                          </div>
                          <span className="text-text-muted">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <button className="flex-1 btn btn-primary text-sm py-2">
                      View Details
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m9 18 6-6-6-6"/>
                      </svg>
                    </button>
                    {project.github && (
                      <button className="btn btn-secondary text-sm py-2 px-3">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Projects Summary */}
        <div className="mt-16 text-center animate-fadeInUp">
          <div className="card glass max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">Innovation in Action</span>
            </h3>
            <p className="text-text-muted leading-relaxed mb-6">
              Each project represents a unique challenge and learning opportunity. 
              From research that earned international recognition to applications serving thousands of users,
              I'm passionate about building solutions that make a real difference.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contact" className="btn bg-gradient-accent text-white hover:shadow-warm">
                Let's Collaborate
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </a>
              <a href="https://github.com/talal3idarus" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View All on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
