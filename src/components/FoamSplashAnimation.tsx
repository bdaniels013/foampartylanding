import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface FoamSplashAnimationProps {
  onAnimationComplete: () => void;
}

export default function FoamSplashAnimation({ onAnimationComplete }: FoamSplashAnimationProps) {
  const [showSplash, setShowSplash] = useState(false);
  const [showFoam, setShowFoam] = useState(false);

  useEffect(() => {
    // Start the splash animation after a brief delay
    const timer = setTimeout(() => {
      setShowSplash(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showSplash) {
      const foamTimer = setTimeout(() => {
        setShowFoam(true);
      }, 300);
      return () => clearTimeout(foamTimer);
    }
  }, [showSplash]);

  const handleSplashComplete = () => {
    setTimeout(() => {
      onAnimationComplete();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      
      {/* Foam cannon effect */}
      {showSplash && (
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Foam cannon base */}
          <div className="w-8 h-32 bg-gradient-to-b from-gray-600 to-gray-800 rounded-full shadow-lg" />
          {/* Foam cannon nozzle */}
          <div className="w-12 h-6 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full -mt-3 ml-2" />
        </motion.div>
      )}

      {/* Dynamic foam splash effect */}
      {showFoam && (
        <>
          {/* Main foam explosion */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 50% 50%, 
                  rgba(255,255,255,0.9) 0%, 
                  rgba(219,234,254,0.8) 20%, 
                  rgba(147,197,253,0.6) 40%, 
                  rgba(59,130,246,0.4) 60%, 
                  transparent 80%)
              `
            }}
            initial={{ scale: 0.1, opacity: 0 }}
            animate={{ scale: 3, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            onAnimationComplete={handleSplashComplete}
          />
          
          {/* Foam particles flying everywhere */}
          {Array.from({ length: 20 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-white rounded-full shadow-lg"
              style={{ 
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1, 0.8, 0],
                opacity: [0, 1, 0.7, 0],
                y: [0, -Math.random() * 200 - 100],
                x: [0, (Math.random() - 0.5) * 300]
              }}
              transition={{
                duration: 2 + Math.random() * 1,
                delay: i * 0.1,
                ease: "easeOut"
              }}
            />
          ))}
          
          {/* Large foam bubbles */}
          {Array.from({ length: 8 }, (_, i) => (
            <motion.div
              key={`bubble-${i}`}
              className="absolute bg-white/80 rounded-full shadow-lg"
              style={{
                width: `${Math.random() * 60 + 40}px`,
                height: `${Math.random() * 60 + 40}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1, 1.2, 0.8, 0],
                opacity: [0, 0.8, 1, 0.6, 0],
                y: [0, -Math.random() * 150 - 50],
                x: [0, (Math.random() - 0.5) * 200]
              }}
              transition={{
                duration: 2.5 + Math.random() * 1,
                delay: i * 0.15,
                ease: "easeOut"
              }}
            />
          ))}
          
          {/* Colored foam splashes using your images */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full overflow-hidden"
            style={{
              background: `url('/assets/pinkfoam.JPG') center/cover`,
              filter: 'blur(2px) brightness(1.2)'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 2, opacity: 0.7 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          />
          
          <motion.div
            className="absolute top-1/3 right-1/4 w-28 h-28 rounded-full overflow-hidden"
            style={{
              background: `url('/assets/gcfpcannonshot.JPG') center/cover`,
              filter: 'blur(1px) brightness(1.1)'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.8, opacity: 0.6 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          />
          
          <motion.div
            className="absolute bottom-1/3 left-1/3 w-24 h-24 rounded-full overflow-hidden"
            style={{
              background: `url('/assets/pinkfoam.JPG') center/cover`,
              filter: 'blur(3px) brightness(1.3)'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 0.5 }}
            transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
          />
          
          {/* Floating foam pieces */}
          {Array.from({ length: 12 }, (_, i) => (
            <motion.div
              key={`foam-piece-${i}`}
              className="absolute w-6 h-6 bg-white/90 rounded-full shadow-md"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1, 0.8, 0],
                opacity: [0, 0.9, 0.6, 0],
                y: [0, -Math.random() * 100 - 50],
                x: [0, (Math.random() - 0.5) * 150],
                rotate: [0, Math.random() * 360]
              }}
              transition={{
                duration: 1.8 + Math.random() * 0.5,
                delay: i * 0.08,
                ease: "easeOut"
              }}
            />
          ))}
          
          {/* Sparkle effects */}
          {Array.from({ length: 15 }, (_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              className="absolute w-2 h-2 bg-yellow-300 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                y: [0, -Math.random() * 80 - 20]
              }}
              transition={{
                duration: 1 + Math.random() * 0.5,
                delay: i * 0.06,
                ease: "easeOut"
              }}
            />
          ))}
        </>
      )}
      
      {/* Loading text */}
      <motion.div
        className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 text-white text-2xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.span
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          🫧 Loading Foam Party Magic... 🫧
        </motion.span>
      </motion.div>
    </div>
  );
}