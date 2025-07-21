import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../constants/socials';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsComplete(true);
            if (onLoadingComplete) onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  const loadingVariants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  const logoVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  const progressVariants = {
    initial: { scaleX: 0 },
    animate: {
      scaleX: progress / 100,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          variants={loadingVariants}
          initial="initial"
          animate="initial"
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-teal-900 via-gray-900 to-emerald-900"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
            />
          </div>

          <div className="relative z-10 text-center">
            {/* Profile Picture with Animation */}
            <motion.div
              variants={logoVariants}
              initial="initial"
              animate={["animate", "pulse"]}
              className="mb-8"
            >
              <div className="relative w-32 h-32 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full blur-lg opacity-50"></div>
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="relative w-32 h-32 rounded-full object-cover shadow-2xl ring-4 ring-teal-400/30"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm font-bold">T</span>
                </div>
              </div>
            </motion.div>

            {/* Loading Text */}
            <motion.div
              variants={textVariants}
              initial="initial"
              animate="animate"
              className="mb-8"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {personalInfo.name}
              </h1>
              <p className="text-lg text-teal-200">
                {personalInfo.title}
              </p>
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-sm text-gray-300 mt-4"
              >
                Loading portfolio...
              </motion.p>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-80 max-w-sm mx-auto">
              <div className="flex justify-between text-sm text-gray-300 mb-2">
                <span>Loading</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  variants={progressVariants}
                  initial="initial"
                  animate="animate"
                  className="h-full bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full origin-left"
                />
              </div>
            </div>

            {/* Loading Dots */}
            <div className="flex justify-center space-x-1 mt-6">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.4, 1, 0.4]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                  className="w-2 h-2 bg-teal-400 rounded-full"
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
