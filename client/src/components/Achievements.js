import React, { useState, useRef, useEffect } from 'react';
import { achievements } from '../constants/achievements';

const Achievements = () => {
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
      { threshold: 0.2 }
    );

    const achievementItems = sectionRef.current?.querySelectorAll('.achievement-item');
    achievementItems?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const getImportanceIcon = (importance) => {
    const icons = {
      'high': '🏆',
      'medium': '🥇',
      'low': '🎖️'
    };
    return icons[importance] || '🏅';
  };

  const getImportanceGradient = (importance) => {
    const gradients = {
      'high': 'from-accent-gold via-accent-orange to-accent-gold',
      'medium': 'from-primary via-secondary to-primary',
      'low': 'from-secondary via-primary to-secondary'
    };
    return gradients[importance] || 'from-primary to-secondary';
  };

  return (
    <section ref={sectionRef} id="achievements" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-diagonal opacity-5"></div>
      
      {/* Floating Trophy Elements */}
      <div className="absolute top-20 right-12 w-16 h-16 bg-accent-gold/10 rounded-full animate-float"></div>
      <div className="absolute bottom-32 left-16 w-12 h-12 bg-accent-orange/10 rounded-lg animate-float rotate-12" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/3 left-8 w-8 h-8 bg-primary/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block px-4 py-2 bg-accent-gold/10 text-accent-gold rounded-full text-sm font-medium mb-4">
            🏆 Recognition & Awards
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Achievements & Honors</span>
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Recognition for excellence in{' '}
            <span className="text-primary font-semibold">research</span>,{' '}
            <span className="text-accent-orange font-semibold">innovation</span>, and{' '}
            <span className="text-accent-gold font-semibold">academic excellence</span> — 
            achievements that reflect dedication to pushing boundaries.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              data-index={index}
              className={`achievement-item ${
                visibleItems.has(index) ? 'animate-scaleIn' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="card glass h-full overflow-hidden hover-float group">
                {/* Achievement Image/Badge */}
                <div className="relative mb-6">
                  {achievement.image ? (
                    <div className="relative">
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <div className={`w-12 h-12 bg-gradient-to-br ${getImportanceGradient(achievement.importance)} rounded-full flex items-center justify-center text-2xl shadow-lg`}>
                          {getImportanceIcon(achievement.importance)}
                        </div>
                        <div className="text-white">
                          <div className="font-semibold text-sm">{achievement.date}</div>
                          <div className="text-xs opacity-75">{achievement.location}</div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className={`w-full h-48 bg-gradient-to-br ${getImportanceGradient(achievement.importance)} rounded-lg flex items-center justify-center relative overflow-hidden`}>
                      <div className="text-6xl opacity-20 absolute inset-0 flex items-center justify-center">
                        {getImportanceIcon(achievement.importance)}
                      </div>
                      <div className="text-center text-white z-10">
                        <div className="text-4xl mb-2">{getImportanceIcon(achievement.importance)}</div>
                        <div className="font-semibold">{achievement.date}</div>
                        <div className="text-sm opacity-75">{achievement.location}</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Achievement Content */}
                <div className="space-y-4">
                  {/* Category & Title */}
                  <div>
                    <span 
                      className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-2"
                      style={{ 
                        backgroundColor: `${achievement.color}20`,
                        color: achievement.color,
                        border: `1px solid ${achievement.color}40`
                      }}
                    >
                      {achievement.category}
                    </span>
                    <h3 className="text-lg font-bold text-text mb-2 group-hover:text-primary transition-colors leading-tight">
                      {achievement.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-text-muted text-sm leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Location & Date */}
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <div className="flex items-center gap-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      {achievement.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                      {achievement.date}
                    </div>
                  </div>

                  {/* Paper PDF Link if available */}
                  {achievement.paperPDF && (
                    <div className="pt-2">
                      <a
                        href={achievement.paperPDF}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-accent-orange transition-colors text-sm font-medium"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                          <polyline points="14,2 14,8 20,8"/>
                          <line x1="16" y1="13" x2="8" y2="13"/>
                          <line x1="16" y1="17" x2="8" y2="17"/>
                        </svg>
                        View Research Paper
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Categories Summary */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {['Research', 'Programming', 'Academic'].map((category, index) => {
            const categoryAchievements = achievements.filter(a => a.category === category);
            const categoryIcon = category === 'Research' ? '🔬' : category === 'Programming' ? '💻' : '🎓';
            const categoryColor = category === 'Research' ? 'var(--accent-gold)' : category === 'Programming' ? 'var(--primary)' : 'var(--accent-orange)';
            
            return (
              <div key={category} className="card glass text-center animate-slideInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <div 
                  className="w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center text-2xl"
                  style={{ 
                    background: `${categoryColor}20`,
                    border: `2px solid ${categoryColor}40`
                  }}
                >
                  {categoryIcon}
                </div>
                <h3 className="text-lg font-bold text-text mb-2">{category}</h3>
                <div className="text-2xl font-bold mb-1" style={{ color: categoryColor }}>
                  {categoryAchievements.length}
                </div>
                <div className="text-sm text-text-muted">
                  Achievement{categoryAchievements.length !== 1 ? 's' : ''}
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievements Summary */}
        <div className="text-center animate-fadeInUp">
          <div className="card glass max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">Excellence Through Innovation</span>
            </h3>
            <p className="text-text-muted leading-relaxed mb-8">
              These achievements represent more than awards — they're milestones in a journey of 
              continuous learning, innovation, and dedication to making meaningful contributions 
              to technology and research. Each recognition fuels my passion for pushing boundaries 
              and creating solutions that matter.
            </p>
            
            {/* Achievement Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-gold mb-2">
                  {achievements.filter(a => a.importance === 'high').length}
                </div>
                <div className="text-sm text-text-muted">High Impact Awards</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {achievements.filter(a => a.category === 'Research').length}
                </div>
                <div className="text-sm text-text-muted">Research Publications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-orange mb-2">
                  {new Set(achievements.map(a => a.location)).size}
                </div>
                <div className="text-sm text-text-muted">Countries Recognized</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">
                  {achievements.length}
                </div>
                <div className="text-sm text-text-muted">Total Achievements</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
