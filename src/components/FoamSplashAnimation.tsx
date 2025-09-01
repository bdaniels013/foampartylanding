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
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showSplash) {
      const foamTimer = setTimeout(() => {
        setShowFoam(true);
      }, 200);
      return () => clearTimeout(foamTimer);
    }
  }, [showSplash]);

  const handleSplashComplete = () => {
    setTimeout(() => {
      onAnimationComplete();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      
      {/* Foam cannon effect */}
      {showSplash && (
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Foam cannon base */}
          <div className="w-10 h-40 bg-gradient-to-b from-gray-600 to-gray-800 rounded-full shadow-xl" />
          {/* Foam cannon nozzle */}
          <div className="w-16 h-8 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full -mt-4 ml-3" />
          {/* Foam cannon details */}
          <div className="w-6 h-6 bg-blue-500 rounded-full -mt-2 ml-5 shadow-lg" />
        </motion.div>
      )}

      {/* Dynamic foam splash effect */}
      {showFoam && (
        <>
          {/* Main foam explosion - MASSIVE */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 50% 50%, 
                  rgba(255,255,255,0.95) 0%, 
                  rgba(219,234,254,0.9) 15%, 
                  rgba(147,197,253,0.8) 30%, 
                  rgba(59,130,246,0.6) 50%, 
                  rgba(37,99,235,0.4) 70%, 
                  transparent 90%)
              `
            }}
            initial={{ scale: 0.05, opacity: 0 }}
            animate={{ scale: 4, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            onAnimationComplete={handleSplashComplete}
          />
          
          {/* Secondary foam explosion */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 30% 40%, 
                  rgba(255,255,255,0.9) 0%, 
                  rgba(236,254,255,0.8) 20%, 
                  rgba(165,243,252,0.6) 40%, 
                  rgba(34,211,238,0.4) 60%, 
                  transparent 80%)
              `
            }}
            initial={{ scale: 0.1, opacity: 0 }}
            animate={{ scale: 3.5, opacity: 0.8 }}
            transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
          />
          
          {/* Foam particles flying everywhere - MORE PARTICLES */}
          {Array.from({ length: 35 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-5 h-5 bg-white rounded-full shadow-xl"
              style={{ 
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.2, 0.8, 0],
                opacity: [0, 1, 0.8, 0],
                y: [0, -Math.random() * 300 - 150],
                x: [0, (Math.random() - 0.5) * 400]
              }}
              transition={{
                duration: 2.5 + Math.random() * 1.5,
                delay: i * 0.05,
                ease: "easeOut"
              }}
            />
          ))}
          
          {/* Large foam bubbles - MORE BUBBLES */}
          {Array.from({ length: 15 }, (_, i) => (
            <motion.div
              key={`bubble-${i}`}
              className="absolute bg-white/90 rounded-full shadow-2xl"
              style={{
                width: `${Math.random() * 80 + 50}px`,
                height: `${Math.random() * 80 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.3, 1.5, 0.9, 0],
                opacity: [0, 0.9, 1, 0.7, 0],
                y: [0, -Math.random() * 200 - 100],
                x: [0, (Math.random() - 0.5) * 300],
                rotate: [0, Math.random() * 720]
              }}
              transition={{
                duration: 3 + Math.random() * 1.5,
                delay: i * 0.1,
                ease: "easeOut"
              }}
            />
          ))}
          
          {/* Colored foam splashes using your images - NO BLUR, CRYSTAL CLEAR */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full overflow-hidden shadow-2xl"
            style={{
              background: `url('/assets/pinkfoam.JPG') center/cover`,
              filter: 'brightness(1.1) contrast(1.1)'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 2.5, opacity: 0.9 }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          />
          
          <motion.div
            className="absolute top-1/3 right-1/4 w-36 h-36 rounded-full overflow-hidden shadow-2xl"
            style={{
              background: `url('/assets/gcfpcannonshot.JPG') center/cover`,
              filter: 'brightness(1.05) contrast(1.05)'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 2.2, opacity: 0.85 }}
            transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
          />
          
          <motion.div
            className="absolute bottom-1/3 left-1/3 w-32 h-32 rounded-full overflow-hidden shadow-2xl"
            style={{
              background: `url('/assets/pinkfoam.JPG') center/cover`,
              filter: 'brightness(1.15) contrast(1.1)'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 2, opacity: 0.8 }}
            transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
          />
          
          {/* Additional foam image splashes */}
          <motion.div
            className="absolute top-1/2 right-1/3 w-28 h-28 rounded-full overflow-hidden shadow-2xl"
            style={{
              background: `url('/assets/gcfpcannonshot.JPG') center/cover`,
              filter: 'brightness(1.1) contrast(1.05)'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.8, opacity: 0.75 }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
          />
          
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-44 h-44 rounded-full overflow-hidden shadow-2xl"
            style={{
              background: `url('/assets/pinkfoam.JPG') center/cover`,
              filter: 'brightness(1.2) contrast(1.1)'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 2.8, opacity: 0.9 }}
            transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
          />
          
          {/* Floating foam pieces - MORE PIECES */}
          {Array.from({ length: 20 }, (_, i) => (
            <motion.div
              key={`foam-piece-${i}`}
              className="absolute w-8 h-8 bg-white/95 rounded-full shadow-lg"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.2, 0.9, 0],
                opacity: [0, 1, 0.8, 0],
                y: [0, -Math.random() * 150 - 75],
                x: [0, (Math.random() - 0.5) * 200],
                rotate: [0, Math.random() * 540]
              }}
              transition={{
                duration: 2.2 + Math.random() * 0.8,
                delay: i * 0.06,
                ease: "easeOut"
              }}
            />
          ))}
          
          {/* Sparkle effects - MORE SPARKLES */}
          {Array.from({ length: 25 }, (_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              className="absolute w-3 h-3 bg-yellow-300 rounded-full shadow-lg"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0],
                y: [0, -Math.random() * 120 - 30]
              }}
              transition={{
                duration: 1.2 + Math.random() * 0.8,
                delay: i * 0.04,
                ease: "easeOut"
              }}
            />
          ))}
          
          {/* Foam stream effects */}
          {Array.from({ length: 8 }, (_, i) => (
            <motion.div
              key={`stream-${i}`}
              className="absolute bg-white/80 rounded-full"
              style={{
                width: `${Math.random() * 20 + 10}px`,
                height: `${Math.random() * 100 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{
                scaleY: [0, 1, 0.8, 0],
                opacity: [0, 0.9, 0.6, 0],
                y: [0, -Math.random() * 200 - 100]
              }}
              transition={{
                duration: 2 + Math.random() * 1,
                delay: i * 0.12,
                ease: "easeOut"
              }}
            />
          ))}
          
          {/* Foam wave effects */}
          {Array.from({ length: 6 }, (_, i) => (
            <motion.div
              key={`wave-${i}`}
              className="absolute bg-white/70 rounded-full"
              style={{
                width: `${Math.random() * 200 + 100}px`,
                height: `${Math.random() * 40 + 20}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{
                scaleX: [0, 1, 0.8, 0],
                opacity: [0, 0.8, 0.5, 0],
                y: [0, -Math.random() * 100 - 50]
              }}
              transition={{
                duration: 2.5 + Math.random() * 1,
                delay: i * 0.15,
                ease: "easeOut"
              }}
            />
          ))}
        </>
      )}
      
      {/* Enhanced loading text */}
      <motion.div
        className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 text-white text-3xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.span
          animate={{ opacity: [1, 0.6, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          className="drop-shadow-lg"
        >
          🫧 Loading EPIC Foam Party Magic... 🫧
        </motion.span>
      </motion.div>
    </div>
  );
}