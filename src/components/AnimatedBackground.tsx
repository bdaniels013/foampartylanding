import { motion } from 'motion/react';
import { useEffect, useState, useMemo, useCallback } from 'react';

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

export default function AnimatedBackground() {
  const [isReduced, setIsReduced] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Check for reduced motion preference and performance
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const isLowPerformance = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
    
    setIsReduced(mediaQuery.matches || isLowPerformance);
    
    const handleChange = () => setIsReduced(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    // Delay animation start for better performance
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    return () => {
      clearTimeout(timer);
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  // Optimize bubble generation with useMemo and reduced complexity
  const bubbles = useMemo(() => {
    const colors = [
      'rgba(255, 255, 255, 0.4)',
      'rgba(219, 39, 119, 0.2)',
      'rgba(59, 130, 246, 0.2)',
      'rgba(34, 197, 94, 0.2)',
    ];

    // Significantly reduce bubbles for better performance
    const bubbleCount = isReduced ? 8 : 15;
    
    return Array.from({ length: bubbleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10, // Smaller sizes
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: Math.random() * 6 + 8, // Shorter durations
      delay: Math.random() * 6,
    }));
  }, [isReduced]);

  // Remove confetti for better performance
  const shouldShowBubbles = useCallback(() => {
    return isVisible && !isReduced;
  }, [isVisible, isReduced]);

  if (isReduced) {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-pink-50" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Static Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-pink-50" />
      
      {/* Optimized Floating Bubbles with GPU acceleration */}
      {shouldShowBubbles() && bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            left: `${bubble.x}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            backgroundColor: bubble.color,
            willChange: 'transform',
            transform: 'translateZ(0)', // Force GPU acceleration
          }}
          initial={{ y: '100vh', opacity: 0 }}
          animate={{
            y: '-15vh',
            opacity: [0, 0.6, 0.6, 0],
            x: [0, Math.random() * 40 - 20], // Reduced movement
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: 'linear',
            type: 'tween', // Use tween for better performance
          }}
        />
      ))}

      {/* Simplified Background Effects with reduced complexity */}
      {shouldShowBubbles() && (
        <>
          <motion.div
            className="absolute top-10 left-10 w-60 h-60 rounded-full"
            style={{ 
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
              willChange: 'transform',
              transform: 'translateZ(0)',
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
              type: 'tween',
            }}
          />

          <motion.div
            className="absolute bottom-20 right-20 w-48 h-48 rounded-full"
            style={{ 
              background: 'radial-gradient(circle, rgba(219, 39, 119, 0.1) 0%, transparent 70%)',
              willChange: 'transform',
              transform: 'translateZ(0)',
            }}
            animate={{
              scale: [1.05, 1, 1.05],
              opacity: [0.2, 0.1, 0.2],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
              type: 'tween',
            }}
          />
        </>
      )}
    </div>
  );
}