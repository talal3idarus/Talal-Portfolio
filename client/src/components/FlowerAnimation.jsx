import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/FlowerAnimation.css";

const FlowerAnimation = () => {
  const flowerRef = useRef(null);
  
  useEffect(() => {
    const flower = flowerRef.current;
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      // Create rotation animation
      gsap.to(flower, {
        rotation: 360,
        duration: 60,
        repeat: -1,
        ease: "linear"
      });
      
      // Create subtle breathing effect
      gsap.to(flower, {
        scale: 1.05,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
    
    return () => {
      gsap.killTweensOf(flower);
    };
  }, []);
  
  return (
    <div className="flower-container">
      <svg 
        ref={flowerRef}
        width="200" 
        height="200" 
        viewBox="0 0 200 200"
        className="flower"
        aria-hidden="true"
      >
        {/* Flower petals */}
        {[...Array(8)].map((_, i) => (
          <path
            key={i}
            d="M100,100 C120,80 140,60 100,20 C60,60 80,80 100,100 Z"
            fill="none"
            stroke="var(--primary-color)"
            strokeWidth="1.5"
            transform={`rotate(${i * 45} 100 100)`}
            opacity="0.7"
          />
        ))}
        
        {/* Inner circles */}
        <circle cx="100" cy="100" r="15" fill="var(--primary-color)" opacity="0.2" />
        <circle cx="100" cy="100" r="8" fill="var(--primary-color)" opacity="0.4" />
      </svg>
    </div>
  );
};

export default FlowerAnimation;
