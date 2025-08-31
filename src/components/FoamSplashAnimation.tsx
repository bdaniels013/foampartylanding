import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface FoamSplashAnimationProps {
  onAnimationComplete: () => void;
}

export default function FoamSplashAnimation({ onAnimationComplete }: FoamSplashAnimationProps) {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    // Start the splash animation after a brief delay
    const timer = setTimeout(() => {
      setShowSplash(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleSplashComplete = () => {
    setTimeout(() => {
      onAnimationComplete();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {/* Background with simple gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-sky-300 via-blue-400 to-blue-600"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      />
      
      {/* Simple sliding person */}
      <motion.div
        className="absolute left-1/2 top-0 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg"
        initial={{ x: -80, y: -80, scale: 0.6 }}
        animate={{ x: -32, y: 200, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeIn" }}
      />

      {/* Foam splash effect - simplified */}
      {showSplash && (
        <>
          {/* Main splash */}
          <motion.div
            className="absolute inset-0"
            style={{ 
              background: 'radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, rgba(219,234,254,0.5) 40%, transparent 70%)'
            }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 2.2, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            onAnimationComplete={handleSplashComplete}
          />
          
          {/* Simple foam particles - reduced complexity */}
          {Array.from({ length: 6 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-white rounded-full shadow-sm"
              style={{ 
                left: `${200 + (i * 80)}px`,
                top: '60%'
              }}
              initial={{ scale: 0, opacity: 0.8 }}
              animate={{
                scale: [0, 1, 0.8, 0],
                opacity: [0.8, 1, 0.6, 0],
                y: [0, -100, -150, -200],
                x: [0, Math.random() * 40 - 20]
              }}
              transition={{
                duration: 1.3,
                delay: i * 0.1,
                ease: "easeOut"
              }}
            />
          ))}
          
          {/* Simple colored foam splashes */}
          <motion.div
            className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-pink-300 opacity-60"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-blue-300 opacity-60"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.3, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/3 w-18 h-18 rounded-full bg-green-300 opacity-60"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.4, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          />
        </>
      )}
    </div>
  );
}