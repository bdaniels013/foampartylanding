import { motion } from 'motion/react';
import { useEffect, useState, useMemo } from 'react';

interface FoamSplashAnimationProps {
  onAnimationComplete: () => void;
}

export default function FoamSplashAnimation({ onAnimationComplete }: FoamSplashAnimationProps) {
  const [showSplash, setShowSplash] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

  // Pre-calculate particle positions to avoid layout thrashing
  const particles = useMemo(() => 
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      initialX: 200 + (i * 80) + Math.random() * 100,
      initialY: dimensions.height * 0.6,
      finalX: 150 + (i * 90) + Math.random() * 150,
      finalY: 100 + Math.random() * (dimensions.height * 0.5),
      delay: Math.random() * 0.3,
      size: 12 + Math.random() * 8
    })), [dimensions]
  );

  useEffect(() => {
    // Get viewport dimensions safely
    const updateDimensions = () => {
      setDimensions({
        width: typeof window !== 'undefined' ? window.innerWidth : 1200,
        height: typeof window !== 'undefined' ? window.innerHeight : 800
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    // Start the splash animation after a brief delay
    const timer = setTimeout(() => {
      setShowSplash(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  const handleSplashComplete = () => {
    setTimeout(() => {
      onAnimationComplete();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {/* Background with hardware acceleration */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-sky-300 via-blue-400 to-blue-600"
        style={{ willChange: 'transform' }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      />
      
      {/* Sliding person simulation with GPU acceleration */}
      <motion.div
        className="absolute left-1/2 top-0 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg"
        style={{ willChange: 'transform' }}
        initial={{ x: -80, y: -80, scale: 0.6 }}
        animate={{ x: -32, y: 200, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeIn" }}
      />

      {/* Foam splash effect */}
      {showSplash && (
        <>
          {/* Main splash with optimized radial gradient */}
          <motion.div
            className="absolute inset-0"
            style={{ 
              background: 'radial-gradient(circle at center, rgba(255,255,255,0.9) 0%, rgba(219,234,254,0.6) 40%, transparent 70%)',
              willChange: 'transform, opacity'
            }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 2.5, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            onAnimationComplete={handleSplashComplete}
          />
          
          {/* Optimized foam particles */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-white shadow-sm"
              style={{ 
                width: particle.size,
                height: particle.size,
                willChange: 'transform'
              }}
              initial={{
                x: particle.initialX,
                y: particle.initialY,
                scale: 0,
                opacity: 0.9
              }}
              animate={{
                x: particle.finalX,
                y: particle.finalY,
                scale: [0, 1.2, 0.8, 0],
                opacity: [0.9, 1, 0.7, 0]
              }}
              transition={{
                duration: 1.5,
                delay: particle.delay,
                ease: "easeOut"
              }}
            />
          ))}
          
          {/* Optimized colored foam splashes */}
          <motion.div
            className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full"
            style={{ 
              background: 'radial-gradient(circle, rgba(244,114,182,0.8) 0%, rgba(236,72,153,0.4) 70%, transparent 100%)',
              filter: 'blur(8px)',
              willChange: 'transform'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.8, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full"
            style={{ 
              background: 'radial-gradient(circle, rgba(96,165,250,0.8) 0%, rgba(59,130,246,0.4) 70%, transparent 100%)',
              filter: 'blur(6px)',
              willChange: 'transform'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/3 w-22 h-22 rounded-full"
            style={{ 
              background: 'radial-gradient(circle, rgba(74,222,128,0.8) 0%, rgba(34,197,94,0.4) 70%, transparent 100%)',
              filter: 'blur(10px)',
              willChange: 'transform'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.6, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          />
        </>
      )}
    </div>
  );
}