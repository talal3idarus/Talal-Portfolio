import React, { useState, useRef, useEffect } from 'react';
import { experience } from '../constants/experience';

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
    );

    const timelineItems = sectionRef.current?.querySelectorAll('.timeline-item');
    timelineItems?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      
      {/* Floating Tech Elements */}
      <div className="absolute top-20 right-16 w-16 h-16 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute bottom-32 left-12 w-12 h-12 bg-accent-orange/10 rounded-lg animate-float rotate-45" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-8 w-8 h-8 bg-accent-gold/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            💼 Professional Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Experience & Growth</span>
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            From hands-on technical support to cutting-edge research — 
            each role has shaped my expertise in{' '}
            <span className="text-primary font-semibold">technology</span> and{' '}
            <span className="text-accent-orange font-semibold">innovation</span>.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent-orange to-accent-gold rounded-full transform md:-translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div
                key={exp.id}
                data-index={index}
                className={`timeline-item relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full shadow-primary transform -translate-x-1/2 animate-pulse z-10"></div>
                
                {/* Company Logo */}
                <div className={`md:w-1/2 flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                  <div className="w-24 h-24 bg-surface-glass rounded-xl border border-border flex items-center justify-center p-4 hover-float">
                    {exp.logo ? (
                      <img 
                        src={exp.logo} 
                        alt={exp.company}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                        {exp.company.charAt(0)}
                      </div>
                    )}
                  </div>
                </div>

                {/* Experience Content */}
                <div className={`md:w-1/2 ml-16 md:ml-0 ${
                  visibleItems.has(index) ? 'animate-slideInLeft' : 'opacity-0'
                } ${index % 2 === 0 ? 'md:animate-slideInRight' : ''}`}>
                  <div className="card glass hover-float">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span 
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{ 
                            backgroundColor: `${exp.color}20`,
                            color: exp.color,
                            border: `1px solid ${exp.color}40`
                          }}
                        >
                          {exp.type}
                        </span>
                        <span className="text-text-muted text-sm">{exp.duration}</span>
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-1">{exp.position}</h3>
                      <p className="text-lg font-medium text-text">{exp.company}</p>
                      <p className="text-text-muted text-sm flex items-center gap-1">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </svg>
                        {exp.location}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-text-muted mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Key Responsibilities */}
                    {exp.responsibilities && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-text mb-2">Key Responsibilities:</h4>
                        <ul className="space-y-1 text-text-muted text-sm">
                          {exp.responsibilities.slice(0, 3).map((responsibility, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies */}
                    {exp.technologies && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-text mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span 
                              key={idx}
                              className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Achievements */}
                    {exp.achievements && (
                      <div>
                        <h4 className="font-semibold text-text mb-2">Key Achievements:</h4>
                        <div className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm">
                              <div className="w-4 h-4 bg-accent-gold/20 rounded-full flex items-center justify-center">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="3">
                                  <polyline points="20,6 9,17 4,12"/>
                                </svg>
                              </div>
                              <span className="text-text-muted">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <div className="mt-16 text-center animate-fadeInUp">
          <div className="card glass max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">Growing Through Challenges</span>
            </h3>
            <p className="text-text-muted leading-relaxed mb-6">
              Each experience has contributed to my growth as a{' '}
              <span className="text-primary font-semibold">software engineer</span>,{' '}
              <span className="text-accent-orange font-semibold">researcher</span>, and{' '}
              <span className="text-accent-gold font-semibold">innovator</span>. 
              From solving real-world technical problems to conducting cutting-edge research,
              I'm committed to making a meaningful impact through technology.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-sm text-text-muted">Years Active</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-orange">300+</div>
                <div className="text-sm text-text-muted">Students Helped</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-gold">95%</div>
                <div className="text-sm text-text-muted">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">25+</div>
                <div className="text-sm text-text-muted">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
