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
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSplashComplete = () => {
    setTimeout(() => {
      onAnimationComplete();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Background video simulation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-sky-300 via-blue-400 to-blue-600"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      />
      
      {/* Sliding person simulation */}
      <motion.div
        className="absolute left-1/2 top-0 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full"
        initial={{ x: -100, y: -100, scale: 0.5 }}
        animate={{ x: -40, y: 300, scale: 1.2 }}
        transition={{ duration: 2, ease: "easeIn" }}
      />

      {/* Foam splash effect */}
      {showSplash && (
        <>
          {/* Main splash */}
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-white via-blue-100 to-transparent"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 3, opacity: 0.9 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            onAnimationComplete={handleSplashComplete}
          />
          
          {/* Foam particles */}
          {Array.from({ length: 20 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-white rounded-full opacity-80"
              initial={{
                x: Math.random() * window.innerWidth,
                y: window.innerHeight * 0.6,
                scale: 0
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                delay: Math.random() * 0.5,
                ease: "easeOut"
              }}
            />
          ))}
          
          {/* Colored foam splashes */}
          <motion.div
            className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full blur-xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 2, opacity: 0.7 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full blur-xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 0.6 }}
            transition={{ duration: 1, delay: 0.7 }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/3 w-28 h-28 bg-gradient-to-br from-green-400 to-green-600 rounded-full blur-xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.8, opacity: 0.5 }}
            transition={{ duration: 1, delay: 0.9 }}
          />
        </>
      )}
    </div>
  );
}