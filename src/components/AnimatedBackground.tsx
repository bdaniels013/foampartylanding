import { motion } from 'motion/react';
import { useEffect, useState, useMemo } from 'react';

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

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReduced(mediaQuery.matches);
    
    const handleChange = () => setIsReduced(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Optimize bubble generation with useMemo
  const bubbles = useMemo(() => {
    const colors = [
      'rgba(255, 255, 255, 0.6)',
      'rgba(219, 39, 119, 0.25)', // Pink
      'rgba(59, 130, 246, 0.25)', // Blue
      'rgba(34, 197, 94, 0.25)',  // Green
    ];

    // Reduce number of bubbles for better performance
    const bubbleCount = isReduced ? 15 : 25;
    
    return Array.from({ length: bubbleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 30 + 15,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: Math.random() * 8 + 12,
      delay: Math.random() * 8,
    }));
  }, [isReduced]);

  // Optimize confetti generation
  const confetti = useMemo(() => {
    const confettiCount = isReduced ? 8 : 12;
    
    return Array.from({ length: confettiCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      rotation: Math.random() * 360,
      duration: Math.random() * 6 + 10,
      delay: Math.random() * 12,
    }));
  }, [isReduced]);

  if (isReduced) {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-pink-50" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-pink-50" />
      
      {/* Optimized Floating Bubbles */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            left: `${bubble.x}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            backgroundColor: bubble.color,
            willChange: 'transform',
          }}
          initial={{ y: '100vh', opacity: 0 }}
          animate={{
            y: '-15vh',
            opacity: [0, 0.8, 0.8, 0],
            x: [0, Math.random() * 60 - 30],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Reduced Confetti Elements */}
      {confetti.map((item) => (
        <motion.div
          key={`confetti-${item.id}`}
          className="absolute w-2 h-6 bg-gradient-to-b from-pink-400 to-pink-600 rounded-sm"
          style={{
            left: `${item.x}%`,
            willChange: 'transform',
          }}
          initial={{ y: '-5vh', opacity: 0, rotate: item.rotation }}
          animate={{
            y: '105vh',
            opacity: [0, 1, 1, 0],
            rotate: [item.rotation, item.rotation + 180],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Optimized Background Foam Effects */}
      <motion.div
        className="absolute top-10 left-10 w-80 h-80 rounded-full"
        style={{ 
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
          willChange: 'transform'
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-20 right-20 w-72 h-72 rounded-full"
        style={{ 
          background: 'radial-gradient(circle, rgba(219, 39, 119, 0.15) 0%, transparent 70%)',
          willChange: 'transform'
        }}
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-60 h-60 rounded-full"
        style={{ 
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.12) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
          willChange: 'transform'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
          rotate: [0, 120, 240, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}