// Framer Motion Animation Variants and Configurations

export const fadeInUp = {
  initial: { 
    opacity: 0, 
    y: 30 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const fadeInDown = {
  initial: { 
    opacity: 0, 
    y: -30 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const fadeInLeft = {
  initial: { 
    opacity: 0, 
    x: -30 
  },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const fadeInRight = {
  initial: { 
    opacity: 0, 
    x: 30 
  },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const scaleIn = {
  initial: { 
    opacity: 0, 
    scale: 0.9 
  },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const staggerItem = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const floatingAnimation = {
  animate: {
    y: [-20, 20, -20],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const rotateAnimation = {
  animate: {
    rotate: [0, 360],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

export const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const slideInFromBottom = {
  initial: { 
    opacity: 0, 
    y: 100 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export const typewriterVariants = {
  initial: { 
    width: 0 
  },
  animate: { 
    width: "100%",
    transition: {
      duration: 2,
      ease: "easeInOut"
    }
  }
};

export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: 0.2,
    ease: "easeInOut"
  }
};

export const hoverGlow = {
  boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)",
  transition: {
    duration: 0.3,
    ease: "easeInOut"
  }
};

export const cardHover = {
  y: -10,
  scale: 1.02,
  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  transition: {
    duration: 0.3,
    ease: "easeOut"
  }
};

export const buttonHover = {
  scale: 1.05,
  transition: {
    duration: 0.2,
    ease: "easeInOut"
  }
};

export const iconSpin = {
  rotate: 360,
  transition: {
    duration: 0.5,
    ease: "easeInOut"
  }
};

// Page transition variants
export const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.98
  },
  in: {
    opacity: 1,
    scale: 1
  },
  out: {
    opacity: 0,
    scale: 1.02
  }
};

export const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

// Hero section specific animations
export const heroTextVariants = {
  initial: { 
    opacity: 0, 
    y: 50 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export const heroImageVariants = {
  initial: { 
    opacity: 0, 
    scale: 0.8,
    rotate: -5 
  },
  animate: { 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 0.2
    }
  }
};

// Skills section animations
export const skillBarVariants = {
  initial: { 
    width: 0 
  },
  animate: (level) => ({
    width: `${level}%`,
    transition: {
      duration: 1.5,
      ease: "easeOut",
      delay: 0.2
    }
  })
};

// Project card animations
export const projectCardVariants = {
  initial: { 
    opacity: 0, 
    y: 50,
    scale: 0.9 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0, 
    y: -50,
    scale: 0.9,
    transition: {
      duration: 0.4,
      ease: "easeIn"
    }
  }
};

// Loading animations
export const loadingSpinner = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

export const loadingDots = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [1, 0.5, 1],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};
