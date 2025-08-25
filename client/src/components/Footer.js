import React from 'react';
import { personalInfo, socialLinks } from '../constants/socials';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary via-primary/90 to-accent-orange/20 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-circuit opacity-10"></div>
      
      {/* Creative Floating Elements - Hidden on mobile */}
      <div className="hidden md:block absolute top-8 left-8 w-24 h-24 bg-white/5 rounded-2xl animate-float rotate-12"></div>
      <div className="hidden md:block absolute bottom-12 right-12 w-16 h-16 bg-accent-orange/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="hidden md:block absolute top-1/2 right-1/4 w-8 h-8 bg-accent-gold/20 rounded-lg animate-float rotate-45" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content - Mobile responsive grid */}
        <div className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand Section - Mobile responsive */}
          <div className="lg:col-span-2 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-xl font-bold border border-white/20">
                TA
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold">{personalInfo?.name || 'Talal Ahmed Al Aidarus'}</h3>
                <p className="text-white/80 text-sm">{personalInfo?.title || 'Full Stack Developer & Researcher'}</p>
              </div>
            </div>
            
            <p className="text-white/80 leading-relaxed mb-6 max-w-md mx-auto sm:mx-0 text-sm sm:text-base">
              Passionate about creating innovative solutions that bridge technology and research. 
              Let's build something amazing together.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-white/60 text-sm">Follow me:</span>
              <div className="flex gap-3">
                {socialLinks && socialLinks.slice(0, 4).map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white hover:scale-110 transition-all border border-white/20 hover:border-white/30"
                    title={social.platform}
                  >
                    <div className="w-4 h-4">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-accent-orange rounded-full group-hover:w-2 transition-all"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 text-accent-orange mt-0.5">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1" fill="none"/>
                  </svg>
                </div>
                <div>
                  <div className="text-white/60 text-sm">Email</div>
                  <a 
                    href={`mailto:${personalInfo?.email}`}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {personalInfo?.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 text-accent-gold mt-0.5">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="1"/>
                  </svg>
                </div>
                <div>
                  <div className="text-white/60 text-sm">Location</div>
                  <div className="text-white/80 text-sm">{personalInfo?.location}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 text-success mt-0.5">
                  <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                </div>
                <div>
                  <div className="text-white/60 text-sm">Status</div>
                  <div className="text-success text-sm">Available for Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-white/60 text-sm text-center md:text-left">
              <p>
                © {currentYear} {personalInfo?.name || 'Talal Ahmed Al Aidarus'}. All rights reserved.
              </p>
              <p className="mt-1">
                Made with <span className="text-accent-orange">❤️</span> and <span className="text-accent-gold">⚡</span> using React & Tailwind CSS
              </p>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white/80 hover:bg-white/20 hover:text-white transition-all hover:scale-105 border border-white/20 hover:border-white/30"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m18 15-6-6-6 6"/>
              </svg>
              Back to Top
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      </div>

      {/* Creative Corner Elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32">
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-accent-orange/20 rounded-tr-full"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 bg-accent-gold/30 rounded-tr-full"></div>
      </div>
      
      <div className="absolute bottom-0 right-0 w-32 h-32">
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-accent-gold/20 rounded-tl-full"></div>
        <div className="absolute bottom-4 right-4 w-8 h-8 bg-accent-orange/30 rounded-tl-full"></div>
      </div>
    </footer>
  );
};

export default Footer;
