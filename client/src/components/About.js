import React from 'react';
import { personalInfo } from '../constants/socials';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            🧑‍💻 About Me
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">My Journey</span>
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Passionate about creating intelligent systems that bridge technology and education
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Story */}
          <div className="space-y-8 animate-slideInLeft">
            {/* Main Story */}
            <div className="card glass">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Building the Future with Code
              </h3>
              <p className="text-text-muted leading-relaxed mb-6">
                {personalInfo.bio.long}
              </p>
              
              {/* Mission Statement */}
              <div className="border-l-4 border-primary pl-6 py-4 bg-primary/5 rounded-r-lg">
                <h4 className="font-semibold text-primary mb-2">My Mission</h4>
                <p className="text-text-muted">
                  To create technology that empowers lives—whether in education, sustainability, 
                  or digital accessibility—and build solutions that truly matter.
                </p>
              </div>
            </div>

            {/* Current Focus */}
            <div className="card glass">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                Current Focus
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-text-muted">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Final year Software Engineering student at UTAS</span>
                </div>
                <div className="flex items-center gap-3 text-text-muted">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Research in AI-driven educational systems</span>
                </div>
                <div className="flex items-center gap-3 text-text-muted">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>IoT and smart system development</span>
                </div>
                <div className="flex items-center gap-3 text-text-muted">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Open to internship and full-time opportunities</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats & Highlights */}
          <div className="space-y-8 animate-slideInRight">
            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="card glass text-center">
                <div className="text-3xl mb-2">🏆</div>
                <div className="text-2xl font-bold text-primary">{personalInfo.stats.competitionsWon}</div>
                <div className="text-sm text-text-muted">Awards Won</div>
              </div>
              <div className="card glass text-center">
                <div className="text-3xl mb-2">📄</div>
                <div className="text-2xl font-bold text-secondary">{personalInfo.stats.papersPublished}</div>
                <div className="text-sm text-text-muted">Research Papers</div>
              </div>
              <div className="card glass text-center">
                <div className="text-3xl mb-2">👥</div>
                <div className="text-2xl font-bold text-accent">{personalInfo.stats.studentsHelped}</div>
                <div className="text-sm text-text-muted">Students Helped</div>
              </div>
              <div className="card glass text-center">
                <div className="text-3xl mb-2">💻</div>
                <div className="text-2xl font-bold text-primary">{personalInfo.stats.projectsCompleted}</div>
                <div className="text-sm text-text-muted">Projects Built</div>
              </div>
            </div>

            {/* Interests */}
            <div className="card glass">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-2xl">💡</span>
                Interests & Hobbies
              </h3>
              <div className="flex flex-wrap gap-2">
                {personalInfo.interests.map((interest, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Values */}
            <div className="card glass">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                Core Values
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-medium text-primary">Innovation</div>
                    <div className="text-sm text-text-muted">Always pushing boundaries with creative solutions</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-medium text-secondary">Impact</div>
                    <div className="text-sm text-text-muted">Building technology that makes a real difference</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-medium text-accent">Learning</div>
                    <div className="text-sm text-text-muted">Continuously growing and sharing knowledge</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info Quick Access */}
            <div className="card glass">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-2xl">📍</span>
                Let's Connect
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-text-muted">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3 text-text-muted">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-text-muted">
                  <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                  <span>Open to opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fadeInUp">
          <div className="card glass max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Ready to collaborate?</h3>
            <p className="text-text-muted mb-6">
              I'm always excited to work on innovative projects and connect with like-minded individuals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contact" className="btn btn-primary">
                <span>Get In Touch</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </a>
              <a href="#projects" className="btn btn-secondary">
                <span>View My Projects</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 7h10v10"/>
                  <path d="m7 17 10-10"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decoration */}
      <div className="absolute top-1/4 left-4 w-8 h-8 bg-primary/20 rounded-full animate-float"></div>
      <div className="absolute bottom-1/4 right-8 w-12 h-12 bg-secondary/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default About;
