import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

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
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const colors = [
      'rgba(255, 255, 255, 0.8)',
      'rgba(219, 39, 119, 0.3)', // Pink
      'rgba(59, 130, 246, 0.3)', // Blue
      'rgba(34, 197, 94, 0.3)',  // Green
      'rgba(168, 85, 247, 0.3)', // Purple
    ];

    const newBubbles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 40 + 10,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 10,
    }));

    setBubbles(newBubbles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-pink-50" />
      
      {/* Floating Bubbles */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            left: `${bubble.x}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            backgroundColor: bubble.color,
            filter: 'blur(1px)',
          }}
          initial={{ y: '100vh', opacity: 0 }}
          animate={{
            y: '-20vh',
            opacity: [0, 1, 1, 0],
            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Confetti Elements */}
      {Array.from({ length: 20 }, (_, i) => (
        <motion.div
          key={`confetti-${i}`}
          className="absolute w-2 h-8 bg-gradient-to-b from-pink-400 to-pink-600"
          style={{
            left: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
          initial={{ y: '-10vh', opacity: 0 }}
          animate={{
            y: '110vh',
            opacity: [0, 1, 1, 0],
            rotate: [0, 360, 720],
          }}
          transition={{
            duration: Math.random() * 8 + 12,
            delay: Math.random() * 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Large Background Foam Effects */}
      <motion.div
        className="absolute top-10 left-10 w-96 h-96 bg-gradient-radial from-blue-200/20 to-transparent rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-radial from-pink-200/20 to-transparent rounded-full"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-radial from-green-200/15 to-transparent rounded-full"
        style={{ transform: 'translate(-50%, -50%)' }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}