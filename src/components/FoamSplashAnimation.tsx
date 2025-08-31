import { motion } from 'motion/react';
import { useEffect, useState, useMemo, useCallback } from 'react';

interface FoamSplashAnimationProps {
  onAnimationComplete: () => void;
}

export default function FoamSplashAnimation({ onAnimationComplete }: FoamSplashAnimationProps) {
  const [showSplash, setShowSplash] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

  // Pre-calculate particle positions to avoid layout thrashing
  const particles = useMemo(() => 
    Array.from({ length: 8 }, (_, i) => ({ // Reduced from 12 to 8
      id: i,
      initialX: 200 + (i * 80) + Math.random() * 80, // Reduced random range
      initialY: dimensions.height * 0.6,
      finalX: 150 + (i * 90) + Math.random() * 100, // Reduced random range
      finalY: 100 + Math.random() * (dimensions.height * 0.4), // Reduced range
      delay: Math.random() * 0.2, // Reduced delay range
      size: 10 + Math.random() * 6 // Smaller sizes
    })), [dimensions]
  );

  // Optimized dimension update with throttling
  const updateDimensions = useCallback(() => {
    setDimensions({
      width: typeof window !== 'undefined' ? window.innerWidth : 1200,
      height: typeof window !== 'undefined' ? window.innerHeight : 800
    });
  }, []);

  useEffect(() => {
    updateDimensions();
    
    // Throttled resize listener
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateDimensions, 100);
    };
    
    window.addEventListener('resize', handleResize);

    // Start the splash animation after a brief delay
    const timer = setTimeout(() => {
      setShowSplash(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, [updateDimensions]);

  const handleSplashComplete = useCallback(() => {
    setTimeout(() => {
      onAnimationComplete();
    }, 800);
  }, [onAnimationComplete]);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {/* Background with hardware acceleration */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-sky-300 via-blue-400 to-blue-600"
        style={{ 
          willChange: 'transform',
          transform: 'translateZ(0)' // Force GPU acceleration
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut", type: 'tween' }}
      />
      
      {/* Sliding person simulation with GPU acceleration */}
      <motion.div
        className="absolute left-1/2 top-0 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg"
        style={{ 
          willChange: 'transform',
          transform: 'translateZ(0)'
        }}
        initial={{ x: -80, y: -80, scale: 0.6 }}
        animate={{ x: -32, y: 200, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeIn", type: 'tween' }}
      />

      {/* Foam splash effect */}
      {showSplash && (
        <>
          {/* Main splash with optimized radial gradient */}
          <motion.div
            className="absolute inset-0"
            style={{ 
              background: 'radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, rgba(219,234,254,0.5) 40%, transparent 70%)',
              willChange: 'transform, opacity',
              transform: 'translateZ(0)'
            }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 2.2, opacity: 1 }} // Reduced scale
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", type: 'tween' }}
            onAnimationComplete={handleSplashComplete}
          />
          
          {/* Optimized foam particles with reduced complexity */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-white shadow-sm"
              style={{ 
                width: particle.size,
                height: particle.size,
                willChange: 'transform',
                transform: 'translateZ(0)'
              }}
              initial={{
                x: particle.initialX,
                y: particle.initialY,
                scale: 0,
                opacity: 0.8
              }}
              animate={{
                x: particle.finalX,
                y: particle.finalY,
                scale: [0, 1.1, 0.7, 0], // Reduced scale values
                opacity: [0.8, 1, 0.6, 0]
              }}
              transition={{
                duration: 1.3, // Slightly faster
                delay: particle.delay,
                ease: "easeOut",
                type: 'tween'
              }}
            />
          ))}
          
          {/* Simplified colored foam splashes with reduced blur */}
          <motion.div
            className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full"
            style={{ 
              background: 'radial-gradient(circle, rgba(244,114,182,0.6) 0%, rgba(236,72,153,0.3) 70%, transparent 100%)',
              filter: 'blur(4px)', // Reduced blur
              willChange: 'transform',
              transform: 'translateZ(0)'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 1 }} // Reduced scale
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut", type: 'tween' }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full"
            style={{ 
              background: 'radial-gradient(circle, rgba(96,165,250,0.6) 0%, rgba(59,130,246,0.3) 70%, transparent 100%)',
              filter: 'blur(3px)', // Reduced blur
              willChange: 'transform',
              transform: 'translateZ(0)'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.3, opacity: 1 }} // Reduced scale
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut", type: 'tween' }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/3 w-18 h-18 rounded-full"
            style={{ 
              background: 'radial-gradient(circle, rgba(74,222,128,0.6) 0%, rgba(34,197,94,0.3) 70%, transparent 100%)',
              filter: 'blur(5px)', // Reduced blur
              willChange: 'transform',
              transform: 'translateZ(0)'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.4, opacity: 1 }} // Reduced scale
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut", type: 'tween' }}
          />
        </>
      )}
    </div>
  );
}