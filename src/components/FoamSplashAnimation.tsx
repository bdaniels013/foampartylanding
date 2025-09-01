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

  // Array of all your foam party images
  const foamImages = [
    '/assets/pinkfoam.JPG',
    '/assets/gcfpcannonshot.JPG',
    '/assets/glowfoam.JPG',
    '/assets/IMG_0738.JPG',
    '/assets/IMG_0739.JPG',
    '/assets/IMG_0740.JPG',
    '/assets/IMG_0734.JPG',
    '/assets/IMG_0736.JPG',
    '/assets/IMG_0737.JPG',
    '/assets/IMG_0730.JPG',
    '/assets/IMG_0732.JPG',
    '/assets/IMG_0722.JPG',
    '/assets/IMG_0725.JPG',
    '/assets/IMG_0726.JPG',
    '/assets/IMG_0727.JPG',
    '/assets/IMG_0715.JPG',
    '/assets/IMG_0721.JPG'
  ];

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
          
          {/* Foam particles flying everywhere - BETTER ORGANIZED */}
          {Array.from({ length: 50 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-white rounded-full shadow-xl"
              style={{ 
                left: `${20 + (i % 8) * 10}%`,
                top: `${30 + Math.floor(i / 8) * 8}%`
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.2, 0.8, 0],
                opacity: [0, 1, 0.8, 0],
                y: [0, -Math.random() * 200 - 100],
                x: [0, (Math.random() - 0.5) * 200]
              }}
              transition={{
                duration: 2.5 + Math.random() * 1.5,
                delay: i * 0.03,
                ease: "easeOut"
              }}
            />
          ))}
          
          {/* Large foam bubbles - BETTER SPACED */}
          {Array.from({ length: 25 }, (_, i) => (
            <motion.div
              key={`bubble-${i}`}
              className="absolute bg-white/90 rounded-full shadow-2xl"
              style={{
                width: `${Math.random() * 60 + 40}px`,
                height: `${Math.random() * 60 + 40}px`,
                left: `${10 + (i % 5) * 16}%`,
                top: `${20 + Math.floor(i / 5) * 15}%`
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.3, 1.5, 0.9, 0],
                opacity: [0, 0.9, 1, 0.7, 0],
                y: [0, -Math.random() * 150 - 75],
                x: [0, (Math.random() - 0.5) * 150],
                rotate: [0, Math.random() * 720]
              }}
              transition={{
                duration: 3 + Math.random() * 1.5,
                delay: i * 0.08,
                ease: "easeOut"
              }}
            />
          ))}
          
          {/* EPIC FOAM IMAGE SPLASHES - BETTER ORGANIZED */}
          {foamImages.map((image, index) => (
            <motion.div
              key={`foam-image-${index}`}
              className="absolute rounded-full overflow-hidden shadow-2xl"
              style={{
                background: `url('${image}') center/cover`,
                filter: 'brightness(1.1) contrast(1.05)',
                width: `${Math.random() * 40 + 30}px`,
                height: `${Math.random() * 40 + 30}px`,
                left: `${15 + (index % 6) * 12}%`,
                top: `${25 + Math.floor(index / 6) * 12}%`
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: Math.random() * 1.2 + 1.3, 
                opacity: 0.8 + Math.random() * 0.2 
              }}
              transition={{ 
                duration: 1.5, 
                delay: index * 0.06, 
                ease: "easeOut" 
              }}
            />
          ))}
          
          {/* Featured large foam image splashes - STRATEGICALLY PLACED */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-44 h-44 rounded-full overflow-hidden shadow-2xl"
            style={{
              background: `url('/assets/glowfoam.JPG') center/cover`,
              filter: 'brightness(1.2) contrast(1.1)'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 2.8, opacity: 0.9 }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          />
          
          <motion.div
            className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full overflow-hidden shadow-2xl"
            style={{
              background: `url('/assets/IMG_0725.JPG') center/cover`,
              filter: 'brightness(1.1) contrast(1.05)'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 2.5, opacity: 0.85 }}
            transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
          />
          
          <motion.div
            className="absolute bottom-1/3 left-1/3 w-36 h-36 rounded-full overflow-hidden shadow-2xl"
            style={{
              background: `url('/assets/IMG_0738.JPG') center/cover`,
              filter: 'brightness(1.15) contrast(1.1)'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 2.2, opacity: 0.8 }}
            transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
          />
          
          <motion.div
            className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full overflow-hidden shadow-2xl"
            style={{
              background: `url('/assets/IMG_0726.JPG') center/cover`,
              filter: 'brightness(1.1) contrast(1.05)'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 2, opacity: 0.75 }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
          />
          
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full overflow-hidden shadow-2xl"
            style={{
              background: `url('/assets/IMG_0734.JPG') center/cover`,
              filter: 'brightness(1.2) contrast(1.1)'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 3, opacity: 0.9 }}
            transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
          />
          
          <motion.div
            className="absolute top-1/6 left-1/6 w-36 h-36 rounded-full overflow-hidden shadow-2xl"
            style={{
              background: `url('/assets/IMG_0739.JPG') center/cover`,
              filter: 'brightness(1.1) contrast(1.05)'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.8, opacity: 0.8 }}
            transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
          />
          
          {/* Floating foam pieces - BETTER DISTRIBUTED */}
          {Array.from({ length: 30 }, (_, i) => (
            <motion.div
              key={`foam-piece-${i}`}
              className="absolute w-6 h-6 bg-white/95 rounded-full shadow-lg"
              style={{
                left: `${5 + (i % 8) * 11}%`,
                top: `${15 + Math.floor(i / 8) * 10}%`
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.2, 0.9, 0],
                opacity: [0, 1, 0.8, 0],
                y: [0, -Math.random() * 120 - 60],
                x: [0, (Math.random() - 0.5) * 150],
                rotate: [0, Math.random() * 540]
              }}
              transition={{
                duration: 2.2 + Math.random() * 0.8,
                delay: i * 0.04,
                ease: "easeOut"
              }}
            />
          ))}
          
          {/* Sparkle effects - BETTER SPACED */}
          {Array.from({ length: 35 }, (_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              className="absolute w-2 h-2 bg-yellow-300 rounded-full shadow-lg"
              style={{
                left: `${8 + (i % 7) * 12}%`,
                top: `${10 + Math.floor(i / 7) * 12}%`
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0],
                y: [0, -Math.random() * 100 - 25]
              }}
              transition={{
                duration: 1.2 + Math.random() * 0.8,
                delay: i * 0.03,
                ease: "easeOut"
              }}
            />
          ))}
          
          {/* Foam stream effects - BETTER POSITIONED */}
          {Array.from({ length: 12 }, (_, i) => (
            <motion.div
              key={`stream-${i}`}
              className="absolute bg-white/80 rounded-full"
              style={{
                width: `${Math.random() * 15 + 8}px`,
                height: `${Math.random() * 80 + 40}px`,
                left: `${12 + (i % 6) * 13}%`,
                top: `${18 + Math.floor(i / 6) * 14}%`
              }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{
                scaleY: [0, 1, 0.8, 0],
                opacity: [0, 0.9, 0.6, 0],
                y: [0, -Math.random() * 150 - 75]
              }}
              transition={{
                duration: 2 + Math.random() * 1,
                delay: i * 0.1,
                ease: "easeOut"
              }}
            />
          ))}
          
          {/* Foam wave effects - BETTER SPACED */}
          {Array.from({ length: 10 }, (_, i) => (
            <motion.div
              key={`wave-${i}`}
              className="absolute bg-white/70 rounded-full"
              style={{
                width: `${Math.random() * 150 + 80}px`,
                height: `${Math.random() * 30 + 15}px`,
                left: `${8 + (i % 5) * 16}%`,
                top: `${22 + Math.floor(i / 5) * 12}%`
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{
                scaleX: [0, 1, 0.8, 0],
                opacity: [0, 0.8, 0.5, 0],
                y: [0, -Math.random() * 80 - 40]
              }}
              transition={{
                duration: 2.5 + Math.random() * 1,
                delay: i * 0.12,
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