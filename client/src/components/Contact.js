import React, { useState } from 'react';
import { personalInfo, socialLinks } from '../constants/socials';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Enhanced Background with Gradient Mesh */}
      <div className="absolute inset-0 gradient-mesh opacity-30"></div>
      <div className="absolute inset-0 bg-lines opacity-5"></div>
      
      {/* Creative Floating Elements - Hidden on mobile for performance */}
      <div className="hidden md:block absolute top-32 left-12 w-20 h-20 bg-primary/10 rounded-2xl animate-float rotate-12 glass-morphism border border-primary/20"></div>
      <div className="hidden md:block absolute bottom-40 right-16 w-16 h-16 bg-accent-orange/10 rounded-full animate-float glass-morphism border border-accent-orange/20" style={{animationDelay: '1s'}}></div>
      <div className="hidden md:block absolute top-1/2 right-8 w-12 h-12 bg-accent-gold/10 rounded-lg animate-float rotate-45 glass-morphism border border-accent-gold/20" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header - Mobile responsive */}
        <div className="text-center mb-12 sm:mb-16 animate-fadeInUp">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 glass-morphism border border-primary/20 shadow-enhanced">
            📬 Get In Touch
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="gradient-text shimmer-text">Let's Create Together</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-muted max-w-3xl mx-auto leading-relaxed px-4 glass-morphism p-6 rounded-2xl border border-white/10">
            Ready to bring your ideas to life? Whether it's a{' '}
            <span className="text-primary font-semibold gradient-text">innovative project</span>, a{' '}
            <span className="text-accent-orange font-semibold gradient-text">research collaboration</span>, or just a{' '}
            <span className="text-accent-gold font-semibold gradient-text">tech conversation</span> — 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="animate-slideInLeft">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
                <span className="text-text-muted text-sm ml-4">~/contact/send-message</span>
              </div>
              <div className="terminal-content">
                <div className="mb-6">
                  <span className="text-primary">$</span> 
                  <span className="text-accent-orange ml-2 typing-cursor">init contact_form</span>
                </div>
                
                <h3 className="text-2xl font-bold text-hologram mb-6" data-text="Send a Message">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="input focus-ring glass-morphism border border-white/20 shadow-enhanced focus:shadow-neon transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="input focus-ring glass-morphism border border-white/20 shadow-enhanced focus:shadow-neon transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-text mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="input focus-ring glass-morphism border border-white/20 shadow-enhanced focus:shadow-neon transition-all duration-300"
                    placeholder="Project Collaboration"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="textarea focus-ring glass-morphism border border-white/20 shadow-enhanced focus:shadow-neon transition-all duration-300"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn w-full justify-center magnetic-hover transition-all duration-300 ${
                    isSubmitting 
                      ? 'bg-surface text-text-muted cursor-not-allowed' 
                      : 'bg-gradient-accent text-white shadow-enhanced hover:shadow-neon hover:scale-105'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-rotate">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 12a9 9 0 11-6.219-8.56"/>
                        </svg>
                      </div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m22 2-7 20-4-9-9-4Z"/>
                        <path d="M22 2 11 13"/>
                      </svg>
                      Send Message
                    </>
                  )}
                </button>

                {/* Submit Status */}
                {submitStatus === 'success' && (
                  <div className="bg-success/10 border border-success/20 rounded-lg p-4 text-success text-sm animate-slideInUp">
                    <div className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20,6 9,17 4,12"/>
                      </svg>
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  </div>
                )}
              </form>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-slideInRight space-y-8">
            {/* Quick Contact */}
            <div className="card glass glass-morphism border border-white/10 shadow-enhanced">
              <h3 className="text-xl font-bold text-text mb-6 shimmer-text">Quick Contact</h3>
              
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg border border-primary/10 hover:border-primary/20 transition-colors glass-morphism shadow-enhanced hover:shadow-neon magnetic-hover">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center glass-morphism border border-primary/20">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-text">Email</div>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-primary hover:text-accent-orange transition-colors gradient-text"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 p-4 bg-accent-orange/5 rounded-lg border border-accent-orange/10 hover:border-accent-orange/20 transition-colors glass-morphism shadow-enhanced hover:shadow-neon magnetic-hover">
                  <div className="w-12 h-12 bg-accent-orange/10 rounded-lg flex items-center justify-center glass-morphism border border-accent-orange/20">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-orange)" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-text">Phone</div>
                    <a 
                      href={`tel:${personalInfo.phone}`}
                      className="text-accent-orange hover:text-accent-gold transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 bg-accent-gold/5 rounded-lg border border-accent-gold/10">
                  <div className="w-12 h-12 bg-accent-gold/10 rounded-lg flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-text">Location</div>
                    <div className="text-accent-gold">{personalInfo.location}</div>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-center gap-4 p-4 bg-success/5 rounded-lg border border-success/10">
                  <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <div className="font-medium text-text">Availability</div>
                    <div className="text-success">Open to opportunities</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="card glass">
              <h3 className="text-xl font-bold text-text mb-6">Connect with Me</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks && socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-surface-glass rounded-lg border border-border hover:border-primary hover:shadow-primary/20 transition-all hover-float"
                  >
                    <div className="w-8 h-8 text-primary">
                      {social.icon}
                    </div>
                    <div>
                      <div className="font-medium text-text text-sm">{social.platform}</div>
                      <div className="text-text-muted text-xs">{social.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="card glass text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                ⚡
              </div>
              <h4 className="font-bold text-text mb-2">Quick Response</h4>
              <p className="text-text-muted text-sm">
                I typically respond within <span className="text-accent-orange font-semibold">24 hours</span>. 
                For urgent matters, feel free to reach out via phone or LinkedIn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
