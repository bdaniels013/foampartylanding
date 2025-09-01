import React from 'react';
import { motion } from 'motion/react';

interface FloatingActionButtonProps {
  onBookNow: () => void;
}

export default function FloatingActionButton({ onBookNow }: FloatingActionButtonProps) {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <motion.button
        onClick={onBookNow}
        className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            "0 25px 50px -12px rgba(236, 72, 153, 0.25)",
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          ]
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <div className="flex flex-col items-center">
          <span className="text-2xl mb-1">🎉</span>
          <span className="text-xs font-bold">BOOK NOW</span>
        </div>
      </motion.button>
    </motion.div>
  );
}
